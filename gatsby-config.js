require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: 'FCC JAMstack',
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-offline',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'HASURA',
				fieldName: 'hasura',
				url: 'https://jamstack-hasura.herokuapp.com/v1alpha1/graphql',
				headers: {
					'x-hasura-access-key': process.env.GATSBY_HASURA_ACCESS_KEY,
				},
				refetchInterval: 10,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'static/favicon/logo.png', // This path is relative to the root of the site.
			},
		},
	],
}
