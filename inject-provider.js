import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'unstated'
import ShoppingContainer from './src/components/modules/ShoppingCart/ShoppingContainer'

const client = new ApolloClient({
	uri: 'https://jamstack-hasura.herokuapp.com/v1alpha1/graphql',
	headers: {
		'x-hasura-access-key': process.env.GATSBY_HASURA_ACCESS_KEY,
	}
})

const shoppingCart = new ShoppingContainer();

export default ({ element }) => (
	<ApolloProvider client={client}><Provider inject={[shoppingCart]}>{element}</Provider></ApolloProvider>
)
