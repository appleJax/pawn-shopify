
import React from 'react'
import { arrayOf, number, shape, string } from 'prop-types'

import { Layout } from 'Common'
import { UploadPhoto } from 'Common/UploadPhoto'

const UploadPage = ({ data }) => (
	<Layout>
		<UploadPhoto />
		<ul>
			{ data.hasura.product.map((item) => (
				<li key={item.id}>
					<h2>{item.name}</h2>
					<p>{item.description}</p>
					<p>Price: ${item.price / 100}</p>
					<img width="250" src={item.img || ''} alt="pic" />
				</li>
			))}
		</ul>
	</Layout>
)

UploadPage.propTypes = {
	data: shape({
		hasura: shape({
			product: arrayOf(
				shape({
					id: number,
					name: string,
					description: string,
					price: number,
					img: string,
				}),
			),
		}),
	}),
}

export const query = graphql`
  query HASURA {
    hasura {
      product {
        id
        name
        description
        price
        img
      }
    }
  }
`

export default UploadPage
