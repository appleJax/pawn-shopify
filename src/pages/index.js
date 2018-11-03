import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from 'Components/Layout'
import Image from 'Components/Image'
import AddTodo from 'Components/AddTodo'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <AddTodo />
    <ul>
      {data.hasura.todos.map((todo, i) => (
        <li key={i}>
          {todo.name} - {new Date(todo.due_date).toDateString()}
        </li>
      ))}
    </ul>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

IndexPage.propTypes = {
  data: shape({
    hasura: shape({
      todos: arrayOf(
        shape({
          id: number,
          name: string,
          due_date: string,
        }),
      ),
    }),
  }),
}

export const query = graphql`
  query HASURA {
    hasura {
      todos {
        id
        name
        due_date
      }
    }
  }
`

export default IndexPage
