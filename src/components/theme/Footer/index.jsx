import React from 'react'
import { Link } from 'gatsby'
import { Logo, Container } from 'Common'
import { Wrapper, Flex, Brand, Item } from './styles'

const Footer = () => (
    <>
        <Flex as={Container}>
        	<Brand>
        		<Logo size="40" />
        		<p>The future of online shopping.</p>
        	</Brand>
        	<Item>
        		<Link to="/">About</Link>
        		<Link to="/">Docs</Link>
        		<Link to="/">Get in touch</Link>
        	</Item>
        	<Item>
        		<Link to="/">Terms Of Use</Link>
        		<Link to="/">Pricing</Link>
        		<Link to="/">Services</Link>
        	</Item>
        	<Item>
        		<Link to="/">Privacy policy</Link>
        		<Link to="/">Support</Link>
        	</Item>
        	<Item>
        		<Link to="/">Follow us</Link>
        		<Link to="/">Twitter</Link>
        		<Link to="/">Instagram</Link>
        	</Item>
        </Flex>
        <Wrapper as={Container}>
        	<p>ⓒ 2018 - All rights reserved - Pawn Shopify</p>
        </Wrapper>
    </>
)

export default Footer
