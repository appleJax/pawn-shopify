import React from 'react'
import {
	AuthProvider,
	AuthConsumer,
	Layout,
	ProductList,
	UploadPhoto,
} from 'Common'

const UploadPage = ({ data }) => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => {
				const notUsers = (product) => product.userId !== user.nickname

				return (
					<Layout>
						{
							isAuth ? (
                <>
                  <UploadPhoto user={user} />
                  <ProductList productFilter={notUsers} />
                </>
							) : <h2 style={{ textAlign: 'center' }}>Unauthorized</h2>
						}
					</Layout>
				)
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default UploadPage
