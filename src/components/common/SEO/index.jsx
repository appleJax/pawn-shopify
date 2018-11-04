import React from 'react'
import Helmet from 'react-helmet'
import Cover from '../../../../static/cover.png'
import {
	url,
	description,
	legalName,
	logo,
	favicon
} from '../../../../data/config'

const SEO = ({ title, location = '' }) => {
	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${legalName}",
		"url": "${url}",
		"logo": "${logo}",
		"founders": [{
			"@type": "Person",
			"name": "${legalName}"
		}]
  	}`

	return (
		<Helmet>
			<link rel="shortcut icon" href={favicon} />
			<meta name="description" content={description} />
			<meta name="image" content={Cover} />
			<meta property="og:url" content={`${url}${location}/`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={Cover} />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image:src" content={Cover} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<title>{title}</title>
			<html lang="en" dir="ltr" />
		</Helmet>
	)
}

export { SEO }
