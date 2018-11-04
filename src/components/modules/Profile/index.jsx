import React from 'react'
import {
	AuthConsumer,
	AuthProvider,
	Container,
	ProductList,
	UploadPhoto
} from 'Common'
import { UserName, UserWrapper } from './styles'
import Classify from './Classify'

const Profile = () => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => {
				const filterByUser = (product) => product.userId === user.nickname

				return (<>
          {
          	isAuth ? (
          		<UserWrapper as={Container}>
          			<UserName>
                  Welcome {user && <span>{user.name.split('@')[0]}</span>}
          			</UserName>
          			<UploadPhoto user={user} />
          			<h2>Products you are selling:</h2>
          			<ProductList productFilter={filterByUser} />
          			<Classify />
          		</UserWrapper>
          	) : <h2 style={{ textAlign: 'center' }}>Unauthorized</h2>
          }
        </>)
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default Profile
