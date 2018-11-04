import React from 'react'
import {
	AuthProvider,
	AuthConsumer,
	Layout,
	ProductList,
	SEO
} from 'Common'

const UploadPage = ({ data }) => (
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => {
				const notUsers = (product) => product.userId !== user.nickname

				return (
					<Layout>
						<SEO title="Market place" location="/marketplace" />
						{ (isAuth
              && <ProductList productFilter={notUsers} />)
						  || <ProductList />
						}
					</Layout>
				)
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default UploadPage
