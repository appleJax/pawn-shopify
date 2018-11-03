import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from './styles'
// import Auth from '../../../modules/Auth'

export default () => (
	<Wrapper>
		<Link to="/" activeStyle={{ color: '#5C6AC4' }}>Items</Link>
		{/* <Auth title="Login" /> */}
	</Wrapper>
)
