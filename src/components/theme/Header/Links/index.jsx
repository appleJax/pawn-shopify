import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './styles'
// import SignIn from '../../../modules/Auth'

export default () => (
	<Wrapper>
		<Link to="/">Items</Link>
		<Link to="/">Login</Link>
		<Link to="/">Register</Link>
	</Wrapper>
)
