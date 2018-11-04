import React from 'react'
import Header from '../../theme/Header'
import Footer from '../../theme/Footer'
import './layout.scss'
import './main.scss'

const Layout = ({ children }) => (
	<>
    <Header />
    {children}
    <Footer />
  </>
)

export { Layout }
