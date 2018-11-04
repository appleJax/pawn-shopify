import React from 'react'
import styled from 'styled-components'
import { Layout, UploadPhoto, Container, AuthProvider, AuthConsumer } from 'Common'

const UploadPage = ({ data }) => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth }) => (
				<Layout>
					{
						isAuth ? (
								<>
									<UploadPhoto />
									<Wrapper as={Container}>
										{data.hasura.product.map((item) => (
											<Item key={item.id}>
												<Img>
													<img src={item.img || ''} alt="pic" />
												</Img>
												<h2>{item.name}</h2>
												<p>{item.description}</p>
												<p>Price: ${item.price / 100}</p>
											</Item>
										))}
									</Wrapper>
								</>
						) : <h2 style={{ textAlign: 'center' }}>Unauthorized</h2>
					}
				</Layout>
			)}
		</AuthConsumer>
	</AuthProvider>
)

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

	@media (max-width: 960px) {
		max-width: 100%;
	}
`

const Img = styled.div`
	width: 100%;

	img {
		width: 100%;
	}
`

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
