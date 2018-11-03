/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: `${__dirname}/src/components`,
        Common: `${__dirname}/src/components/common`,
      },
    },
  })
}
