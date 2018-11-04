import React from 'react'
import { Link } from 'gatsby'
import { AuthConsumer, AuthProvider } from 'Common'
import { Wrapper } from './styles'
import Auth from '../../../modules/Auth'

export default () => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth }) => (
				<Wrapper>
					<Link to="/marketplace" activeStyle={{ color: '#5C6AC4' }}>Market place</Link>
					{isAuth && <Link to="/my-items" activeStyle={{ color: '#5C6AC4' }}>My items</Link>}
					{isAuth && <Link to="/classify" activeStyle={{ color: '#5C6AC4' }}>Classify</Link>}
					<Auth title="Login" />
				</Wrapper>
			)}
		</AuthConsumer>
	</AuthProvider>

)
