import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Logo = () => (
	<Brand as={Link} to="/">
		<span>Pawn</span>{' '}
        Shopify
	</Brand>
)

const Brand = styled.a`
	color: #373950;
	font-weight: bold;

	${({ size }) => (size ? `
		font-size: ${size}pt;
	` : `
		font-size: 22pt;
	`)}

	span {
		color: #5C6AC4;
	}
`

export { Logo }
