import React from 'react'
import { Layout, SEO } from 'Common'
import HomeContent from '../components/theme/HomeContent'
import Features from '../components/theme/Features'

const IndexPage = () => (
	<Layout>
		<SEO title="Pawn Shopify - Home" location="/" />
		<HomeContent />
		<Features />
	</Layout>
)

export default IndexPage
