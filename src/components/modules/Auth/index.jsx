import React from 'react'
import { AuthProvider, AuthConsumer } from 'Common'

const Auth = () => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, login, logout, user }) => {
				const Login = (
					<a className="sign-in-or-out" href="#" onClick={login}>
						Log In
					</a>
				)

				const Logout = (
					<a className="sign-in-or-out"
						href="#"
						onClick={e => {
							e.preventDefault()
							logout()
						}}
					>
						Log Out
						{user && <span>{user.name}</span>}
					</a>
				)

				return isAuth ? Logout : Login
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default Auth
