import React from 'react'
import { Layout, SEO } from 'Common'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404 - Page Not Found" location="/404" />
		<h1>NOT FOUND</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
)

export default NotFoundPage
