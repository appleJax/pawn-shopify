import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import {ShoppingContainer} from './src/components/'
const client = new ApolloClient({
	uri: 'https://jamstack-hasura.herokuapp.com/v1alpha1/graphql',
	headers: {
		'x-hasura-access-key': process.env.GATSBY_HASURA_ACCESS_KEY,
	}
})

   let shoppingCart= new ShoppingContainer();
  
export default ({ element }) => (
	<ApolloProvider client={client}><Provider inject={[shoppingCart]}>{element}</Provider></ApolloProvider>
)
