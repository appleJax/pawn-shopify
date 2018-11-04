import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import {
	AuthProvider,
	AuthConsumer,
	Container,
	Layout,
	ProductList,
	UploadPhoto,
} from 'Common'

const UploadPage = ({ data }) => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => (
				<Layout>
					{
						isAuth ? (
								<>
									<UploadPhoto user={user} />
                  <ProductList />
									{/* <Wrapper as={Container}>
										{data.hasura.product.map((item) => (
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
								</> */}</>
						) : <h2 style={{ textAlign: 'center' }}>Unauthorized</h2>
					}
				</Layout>
			)}
		</AuthConsumer>
	</AuthProvider>
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

// export const query = graphql`
//   query HASURA {
//     hasura {
//       ...Products
//     }
//   }
// `

// export const productFragment = graphql`
//   fragment Products on HASURA {
//     product {
//       id
//       userId
//       name
//       description
//       price
//       img
//     }
//   }
// `

export default UploadPage
