import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
	uri: 'https://jamstack-hasura.herokuapp.com/v1alpha1/graphql',
})

// eslint-disable-next-line react/prop-types,react/display-name
export default ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
)
