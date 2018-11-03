import React from 'react'
import { AuthConsumer, AuthProvider } from 'Common'

const Profile = () => (
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
)

export default Profile
