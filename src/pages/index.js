import React from 'react'
// import { arrayOf, number, shape, string } from 'prop-types'
// import { Link, graphql } from 'gatsby'

import { Layout } from 'Common'
import HomeContent from '../components/theme/HomeContent'
import Features from '../components/theme/Features'
import Footer from '../components/theme/Footer'

const IndexPage = () => (
	<Layout>
		<HomeContent />
		<Features />
		<Footer />
	</Layout>
)

export default IndexPage
