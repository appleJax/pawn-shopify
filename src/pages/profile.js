import React from 'react'
import { Layout, SEO } from 'Common'
import Profile from '../components/modules/Profile'

const ProfilePage = () => (
	<Layout>
		<SEO title="Profile" location="/profile" />
		<Profile />
	</Layout>
)

export default ProfilePage
