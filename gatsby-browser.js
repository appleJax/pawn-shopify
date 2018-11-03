/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const preferDefault = m => (m && m.default) || m
exports.wrapRootElement = preferDefault(require(`./inject-provider`))