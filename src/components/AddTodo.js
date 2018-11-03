import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Context from 'Components/AuthContext'
//import styled from 'styled-components'

const { AuthConsumer } = Context

const GET_TODOS = gql`
  query HASURA {
    todos {
      id
      name
      due_date
    }
  }
`

const ADD_TODO = gql`
  mutation AddTodo($todo: todos_insert_input!) {
    insert_todos(objects: [$todo]) {
      returning {
        name
        due_date
      }
    }
  }
`

const AddTodo = () => {
  let name
  let dueDate

  return (
    <AuthConsumer>
      {({ user }) => (
        <Mutation mutation={ADD_TODO}>
          {addTodo => (
            <form
              onSubmit={e => {
                e.preventDefault()
                addTodo({
                  variables: {
                    todo: {
                      user_id: user && user.sub,
                      name: name.value,
                      due_date: dueDate.value,
                    },
                  },
                  optimisticResponse: {
                    __typename: 'Mutation',
                    insert_todos: {
                      __typename: 'todos_mutation_response',
                      returning: [
                        {
                          __typename: 'todos',
                          user_id: user && user.sub,
                          name: name.value,
                          due_date: dueDate.value,
                        },
                      ],
                    },
                  },
                  refetchQueries: [
                    {
                      query: GET_TODOS,
                    },
                  ],
                })
                name.value = ''
                dueDate.value = ''
              }}
            >
              <label htmlFor="name">Todo:</label>
              <input
                ref={node => {
                  name = node
                }}
              />
              <label htmlFor="due-date">Due Date:</label>
              <input
                ref={node => {
                  dueDate = node
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          )}
        </Mutation>
      )}
    </AuthConsumer>
  )
}

export default AddTodo
