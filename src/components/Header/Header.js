import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Head, Pawn, Shopify, ButtonWrapper, NavButton, Register } from './styled'
// import SignIn from './SignIn'

const Header = () => (
  <Head>
    <Link to="/" className="site-title">
      <Pawn>Pawn </Pawn><Shopify>Shopify</Shopify>
    </Link>
    <ButtonWrapper>
      <NavButton>Items</NavButton>
      <NavButton>Login</NavButton>
      <Register>Register</Register>
    </ButtonWrapper>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

export default Header
