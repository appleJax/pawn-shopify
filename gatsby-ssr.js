/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

require(`isomorphic-fetch`)

const preferDefault = m => (m && m.default) || m
exports.wrapRootElement = preferDefault(require(`./inject-provider`))
