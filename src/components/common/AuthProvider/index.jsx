import React, { Component } from 'react'
import auth0 from 'auth0-js'
import { navigate } from 'gatsby'
import { Context } from '../Context'

const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, ROOT_URL } = process.env

class AuthProvider extends Component {
	state = {
		isAuth: false,
		user: null,
	}

    auth0 = new auth0.WebAuth({
    	domain: AUTH0_DOMAIN,
    	clientID: AUTH0_CLIENT_ID,
    	redirectUri: `${ROOT_URL}/callback`,
    	// audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    	responseType: 'token id_token',
    	scope: 'openid profile email',
    })

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

    isAuthenticated = () => {
    	const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    	return new Date().getTime() < expiresAt
    }

    login = () => this.auth0.authorize({ prompt: 'login' })

    handleAuthentication = () => {
    	if (typeof window !== 'undefined') {
    		this.auth0.parseHash(async (err, authResult) => {
    			if (authResult && authResult.accessToken && authResult.idToken) {
    				await this.setSession(authResult)
    				navigate('/')
    			} else if (err) {
    				console.error(err)
    			}
    		})
    	}
    }

    logout = () => {
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

    getUser = () => {
    	if (localStorage.getItem('user')) return JSON.parse(localStorage.getItem('user'))
    	return null
    }

    render() {
    	const { isAuth, user } = this.state
    	const { children } = this.props
    	return (
    		<Context.Provider
    			value={{
    				isAuth,
    				user,
    				login: this.login,
    				logout: this.logout,
    				handleAuthentication: this.handleAuthentication,
    			}}
    		>
    			{children}
    		</Context.Provider>
    	)
    }
}

export { AuthProvider }
