import React, { Component } from 'react'
import auth0 from 'auth0-js'
import { navigate } from 'gatsby'
import { Context } from '../Context'

const isBrowser = typeof window !== 'undefined'

const { GATSBY_AUTH0_DOMAIN, GATSBY_AUTH0_CLIENT_ID, GATSBY_ROOT_URL } = process.env

class AuthProvider extends Component {
	state = {
		isAuth: false,
		user: null,
	}

    auth0 = isBrowser
    	? new auth0.WebAuth({
    		domain: GATSBY_AUTH0_DOMAIN,
    		clientID: GATSBY_AUTH0_CLIENT_ID,
    		redirectUri: `${GATSBY_ROOT_URL}/callback`,
    		// audience: `https://${AUTH0_DOMAIN}/api/v2/`,
    		responseType: 'token id_token',
    		scope: 'openid profile email',
    	})
    	: {}

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
    		if (!isBrowser) {
    			return resolve()
    		}
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
    	if (isBrowser) {
    		const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    		return new Date().getTime() < expiresAt
    	}
    }

    login = () => {
    	if (isBrowser) {
    		this.auth0.authorize({ prompt: 'login' })
    	}
    }

    handleAuthentication = () => {
    	if (!isBrowser) {
    		return
    	}
    	this.auth0.parseHash(async (err, authResult) => {
    		if (authResult && authResult.accessToken && authResult.idToken) {
    			await this.setSession(authResult)
    			navigate('/my-items')
    		} else if (err) {
    			console.error(err)
    		}
    	})
    }

    logout = () => {
    	if (!isBrowser) {
    		return
    	}
    	localStorage.removeItem('access_token')
    	localStorage.removeItem('id_token')
    	localStorage.removeItem('expires_at')
    	localStorage.removeItem('user')
    	this.auth0.logout({
    		returnTo: GATSBY_ROOT_URL,
    		clientID: GATSBY_AUTH0_CLIENT_ID,
    	})
    	this.setState({
    		isAuth: false,
    		user: null,
    	})
    }

    getUser = () => {
    	if (!isBrowser) {
    		return null
    	}
    	const user = localStorage.getItem('user')

    	return user ? JSON.parse(user) : null
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
