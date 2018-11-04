import React from 'react'
import {
	AuthConsumer,
	AuthProvider,
	Container,
	ProductList,
	Layout
} from 'Common'
import { UserName, UserWrapper } from '../components/modules/Profile/styles'

const Profile = () => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => {
				const filterByUser = (product) => product.userId === user.nickname
				return (
					<Layout>
						{
							isAuth ? (
								<UserWrapper as={Container}>
									<UserName>
                                        Welcome {user && <span>{user.name.split('@')[0]}</span>}
									</UserName>
									<h2 style={{ margin: '2rem 0' }}>Here the products you are selling:</h2>
									<ProductList productFilter={filterByUser} />
								</UserWrapper>
							) : <h2 style={{ textAlign: 'center' }}>Unauthorized</h2>
						}
					</Layout>
				)
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default Profile
