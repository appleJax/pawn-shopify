import React from 'react'
import {
	AuthProvider,
	AuthConsumer,
	Layout,
	ProductList,
	UploadPhoto,
	SEO
} from 'Common'
import { Subscribe } from 'unstated'
import ShoppingContainer from '../components/modules/ShoppingCart/ShoppingContainer'

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
									<ProductList productFilter={notUsers} />
								</>
							) : (
								<Subscribe to={[ShoppingContainer]}>
									{(cart) => {
										console.log('CART:', cart); return (
											<div>
												<h1>Cart: {cart.state.cart.join(', ')}</h1>
												<button onClick={() => cart.addItem('monkey')}>
                          Add Monkey
												</button>
												<ProductList />
											</div>
										)
									}}
								</Subscribe>
							)
						}
					</Layout>
				)
			}}
		</AuthConsumer>
	</AuthProvider>
)

export default UploadPage
