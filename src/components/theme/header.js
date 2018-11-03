import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import SignIn from '../common/auth/SignIn'
// import styled from 'styled-components'

const Header = ({ siteTitle }) => (
	<div className="site-header">
		<h1 style={{ margin: 0 }}>
			<Link to="/" className="site-title">
				{siteTitle}
			</Link>
		</h1>
		<SignIn />
	</div>
)

Header.propTypes = {
	siteTitle: PropTypes.string.isRequired,
}

export default Header
