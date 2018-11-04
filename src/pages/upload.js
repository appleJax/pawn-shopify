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
			{({ isAuth, user }) => (
				<Layout>
					{
						isAuth ? (
              <>
                <UploadPhoto user={user} />
                <ProductList />
              </>
						) : <h2 style={{ textAlign: 'center' }}>Unauthorized</h2>
					}
				</Layout>
			)}
		</AuthConsumer>
	</AuthProvider>
)

export default UploadPage
