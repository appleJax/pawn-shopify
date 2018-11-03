import React from 'react'
import { Layout, AuthConsumer, AuthProvider } from 'Common'

const ProfilePage = () => (
	<Layout>
		<AuthProvider>
			<AuthConsumer>
				{({ isAuth, user }) => {
					const LoggedIn = (

						<h1>Welcome {user && <span>{user.name}</span>}</h1>

					)
					return isAuth ? LoggedIn : null
				}}
			</AuthConsumer>
		</AuthProvider>
	</Layout>
)

export default ProfilePage
