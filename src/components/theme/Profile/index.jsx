import React from 'react'
import { AuthConsumer, AuthProvider } from 'Common'
import { UserName, UserWrapper } from './styles'

const Profile = () => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => {
				const LoggedIn = (
					<UserWrapper>
						<UserName>Welcome {user && <span>{user.name.substring(0, user.name.indexOf('@'))}</span>}</UserName>
					</UserWrapper>

				)
				return isAuth ? LoggedIn : null
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default Profile
