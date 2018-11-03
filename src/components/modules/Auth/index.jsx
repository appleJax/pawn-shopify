import React from 'react'
import { AuthProvider, AuthConsumer, Button } from 'Common'

const Auth = () => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, login, logout, user }) => {
				const Login = (
					<Button as="a" href="#" onClick={login}>
						Log In
					</Button>
				)
				const Logout = (
					<Button
						as="a"
						href="#"
						onClick={e => {
							e.preventDefault()
							logout()
						}}
					>
						Log Out
						{user && <span>{user.name}</span>}
					</Button>
				)
				return isAuth ? Logout : Login
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default Auth
