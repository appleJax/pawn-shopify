import React from 'react'
import { Hamburger, Bar } from './styles'

const Burger = ({ isActive, onClick }) => (
	<Hamburger onClick={onClick}>
		<Bar top isActive={isActive} />
		<Bar mid isActive={isActive} />
		<Bar bottom isActive={isActive} />
	</Hamburger>
)

export default Burger
