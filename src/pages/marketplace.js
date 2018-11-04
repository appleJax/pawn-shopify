import React from 'react'
import {
	AuthProvider,
	AuthConsumer,
	Layout,
	ProductList,
	UploadPhoto,
	SEO
} from 'Common'
import {ShoppingContainer} from '../components/modules/ShoppingCart'
const UploadPage = ({ data }) => (
	
	<AuthProvider>
		<AuthConsumer>
			{({ isAuth, user }) => {
				const notUsers = (product) => product.userId !== user.nickname

				return (
					<Layout>
						<SEO title="Market place" location="/marketplace" />
						{
							isAuth ? (
								<>
									<UploadPhoto user={user} />
									<Subscribe><ProductList productFilter={notUsers} /></Subscribe>
								</>
							) : <Subscribe to={[ShoppingContainer]}><ProductList /></Subscribe>
						}
					</Layout>
				)
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default UploadPage
