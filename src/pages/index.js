import React from 'react'
// import { arrayOf, number, shape, string } from 'prop-types'
// import { Link, graphql } from 'gatsby'

import { Layout } from 'Common'

const IndexPage = () => (
	<Layout>
		<p>Landing Page</p>
	</Layout>
)

// IndexPage.propTypes = {
//   data: shape({
//     hasura: shape({
//       todos: arrayOf(
//         shape({
//           id: number,
//           name: string,
//           due_date: string,
//         }),
//       ),
//     }),
//   }),
// }

// export const query = graphql`
//   query HASURA {
//     hasura {
//       todos {
//         id
//         name
//         due_date
//       }
//     }
//   }
// `

export default IndexPage
