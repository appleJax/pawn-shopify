import React from 'react'
import { AuthProvider, AuthConsumer, Button } from 'Common'

const Auth = ({ title }) => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, login, logout, user }) => {
				const Login = (
					<Button as="a" href="#" onClick={login}>
						{title}
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
						Log Out {' '}
						{user && <span>{user.name.split('@')[0]}</span>}
					</Button>
				)
				return isAuth ? Logout : Login
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default Auth
