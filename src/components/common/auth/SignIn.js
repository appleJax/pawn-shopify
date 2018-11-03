import React from 'react'
import Context from './AuthContext'
// import styled from 'styled-components'

const { AuthConsumer } = Context

const SignIn = () => (
	<AuthConsumer>
		{({ isAuth, login, logout, user }) => {
			const Login = (
				<a className="sign-in-or-out" href="#" onClick={login}>
          Log In
				</a>
			)

			const Logout = (
				<a className="sign-in-or-out" href="#" onClick={logout}>
          Log Out
					{user && <span> ({user.name})</span>}
				</a>
			)

			return isAuth ? Logout : Login
		}}
	</AuthConsumer>
)

export default SignIn
