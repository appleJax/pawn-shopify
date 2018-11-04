import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
	uri: 'https://jamstack-hasura.herokuapp.com/v1alpha1/graphql',
	headers: {
		'x-hasura-access-key': process.env.GATSBY_HASURA_ACCESS_KEY,
	}
})

export default ({ element }) => (
	<ApolloProvider client={client}>{element}</ApolloProvider>
)
