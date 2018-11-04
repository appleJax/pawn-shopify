import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../../theme/Header'
import Footer from '../../theme/Footer'
import './layout.scss'
import './main.scss'

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
          <Header />
          {children}
          <Footer />
      </>
		)}
	/>
)

export { Layout }
