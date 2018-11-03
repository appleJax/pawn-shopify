import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './styles'
import Auth from '../../../modules/Auth'

export default () => (
	<Wrapper>
		<Link to="/">Items</Link>
		<Link to="/">Login</Link>
		<Auth />
	</Wrapper>
)
