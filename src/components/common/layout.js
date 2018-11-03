import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'Styles/layout.css'
import 'Styles/main.sass'

import Context from './auth/AuthContext'
import ViewPort from './ViewPort'

const { AuthProvider } = Context
const { node, shape, string } = PropTypes

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={data => (
      <>
        <Helmet
        	title={data.site.siteMetadata.title}
        	meta={[
        		{ name: 'description', content: 'Sample' },
        		{ name: 'keywords', content: 'sample, something' },
        	]}
        >
        	<html lang="en" />
        </Helmet>
        <AuthProvider>
        	<ViewPort site={data.site}>{children}</ViewPort>
        </AuthProvider>
      </>
		)}
	/>
)

Layout.propTypes = {
	children: node.isRequired,
	site: shape({
		siteMetadata: shape({
			title: string,
			description: string,
		}),
	}),
}

export default Layout
