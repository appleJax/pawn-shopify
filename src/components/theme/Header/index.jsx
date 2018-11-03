import React from 'react'
import { compose, withStateHandlers } from 'recompose'
import { Logo, Container } from 'Common'
import Links from './Links'
import Burger from './Burger'
import { Wrapper, StyledHeader } from './styles'

const Header = ({ isActive, toggleMenu }) => (
	<Wrapper active={isActive}>
		<StyledHeader as={Container}>
			<Logo />
			<Links />
			<Burger
				isActive={isActive}
				onClick={toggleMenu}
			/>
		</StyledHeader>
	</Wrapper>
)

const enhance = compose(
	withStateHandlers(
		{ isActive: false },
		{
			toggleMenu: ({ isActive }) => () => ({ isActive: !isActive })
		}
	)
)

export default enhance(Header)
