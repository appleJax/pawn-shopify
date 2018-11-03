/* eslint-disable no-undef */
import React, { Component } from 'react'
import auth0 from 'auth0-js'
import { node } from 'prop-types'
import { navigate } from 'gatsby'

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, ROOT_URL } = process.env

const AuthContext = React.createContext()

class AuthProvider extends Component {
	constructor() {
		super()

		this.state = {
			isAuth: false,
			user: null,
		}

		this.auth0 = new auth0.WebAuth({
			domain: AUTH0_DOMAIN,
			clientID: AUTH0_CLIENT_ID,
			redirectUri: `${ROOT_URL}/callback`,
			// audience: `https://${AUTH0_DOMAIN}/api/v2/`,
			responseType: 'token id_token',
			scope: 'openid profile email',
		})

		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
		this.handleAuthentication = this.handleAuthentication.bind(this)
		this.isAuthenticated = this.isAuthenticated.bind(this)
	}

	componentDidMount() {
		if (this.isAuthenticated()) {
			this.setState({
				isAuth: true,
				user: this.getUser(),
			})
		} else {
			this.handleAuthentication()
		}
	}

	login() {
		this.auth0.authorize({ prompt: 'login' })
	}

	logout() {
		localStorage.removeItem('access_token')
		localStorage.removeItem('id_token')
		localStorage.removeItem('expires_at')
		localStorage.removeItem('user')
		this.auth0.logout({
			returnTo: ROOT_URL,
			clientID: AUTH0_CLIENT_ID,
		})
		this.setState({
			isAuth: false,
			user: null,
		})
	}

	handleAuthentication() {
		if (typeof window !== 'undefined') {
			this.auth0.parseHash(async (err, authResult) => {
				if (authResult && authResult.accessToken && authResult.idToken) {
					await this.setSession(authResult)
					navigate('/')
				} else if (err) {
					// eslint-disable-next-line no-console
					console.error(err)
				}
			})
		}
	}

	isAuthenticated() {
		const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
		return new Date().getTime() < expiresAt
	}

	setSession(authResult) {
		return new Promise(resolve => {
			const expiresAt = JSON.stringify(
				// eslint-disable-next-line prettier/prettier
				authResult.expiresIn * 1000 + new Date().getTime(),
			)
			localStorage.setItem('access_token', authResult.accessToken)
			localStorage.setItem('id_token', authResult.idToken)
			localStorage.setItem('expires_at', expiresAt)

			this.auth0.client.userInfo(authResult.accessToken, (err, user) => {
				localStorage.setItem('user', JSON.stringify(user))
				this.setState({
					isAuth: true,
					user,
				})
				resolve()
			})
		})
	}

	getUser() {
		if (localStorage.getItem('user')) {
			return JSON.parse(localStorage.getItem('user'))
		}
		return null
	}

	render() {
		return (
			<AuthContext.Provider
				value={{
					isAuth: this.state.isAuth,
					user: this.state.user,
					login: this.login,
					logout: this.logout,
					handleAuthentication: this.handleAuthentication,
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		)
	}
}

AuthProvider.propTypes = {
	children: node.isRequired,
}

const AuthConsumer = AuthContext.Consumer

export default { AuthProvider, AuthConsumer }
