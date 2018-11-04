import React from 'react'
import { Layout, SEO } from 'Common'
import Profile from '../components/modules/Profile'

const ProfilePage = () => (
	<Layout>
		<SEO title="Classify" location="/classify" />
		<Profile />
	</Layout>
)

export default ProfilePage
