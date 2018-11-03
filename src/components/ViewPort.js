import React from 'react'
import { node, shape, string } from 'prop-types'
import Header from './Header'

const ViewPort = ({ children, site }) => (
  <div id="viewport">
    <Header siteTitle={site.siteMetadata.title} />
    <div className="site-body">{children}</div>
  </div>
)

ViewPort.propTypes = {
  children: node.isRequired,
  site: shape({
    siteMetadata: shape({
      title: string,
    }),
  }),
}

export default ViewPort
