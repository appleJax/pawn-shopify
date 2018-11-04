import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { Container } from 'Common'

const notNull = (x) => x

const Component = ({ data, productFilter = notNull }) => (
	<Wrapper as={Container}>
		{data.hasura.product.filter(productFilter).map((item) => (
			<Item key={item.id}>
				<Card>
					<Img>
						<img src={item.img || ''} alt="pic" />
					</Img>
					<Content>
						<h2>{item.name}</h2>
						<p>{item.description}</p>
						<p>Price: ${item.price / 100}</p>
					</Content>
				</Card>
			</Item>
		))}
	</Wrapper>
)

const ProductList = (props) => (
	<StaticQuery
		query={graphql`
      query PRODUCT_LIST {
        hasura {
          product {
            id
            userId
            name
            description
            price
            img
          }
        }
      }
    `}

		render={data => <Component data={data} {...props} />}
	/>
)

const Card = styled.div`
	background: #fff;
	box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1);
	height: 100%;
`

const Content = styled.div`
	padding: 1rem;

	h2 {
		margin: 0 0 .5rem 0;
		font-size: 12pt;
	}

	p {
		font-size: 10pt;
	}
`

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media (max-width: 960px) {
		flex-direction: column;	
	}
`

const Item = styled.div`
	flex: 1 auto;
	width: 100%;
	max-width: 23%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 2rem;

	@media (max-width: 960px) {
		max-width: 100%;
	}
`

const Img = styled.div`
	width: 100%;

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		margin-bottom: unset;
	}
`

export { ProductList }
