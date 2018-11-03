import React from 'react'
import { Logo, Container } from '../../common'
import Links from './Links'
import { StyledHeader } from './styles'

const Header = () => (
	<StyledHeader as={Container}>
		<Logo />
		<Links />
	</StyledHeader>
)

export default Header
