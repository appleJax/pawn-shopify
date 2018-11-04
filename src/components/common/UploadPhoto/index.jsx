import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import axios from 'axios'

const GET_PRODUCTS = gql`
  query HASURA {
    product {
      id
      name
      description
      price
      img
    }
  }
`

const ADD_PRODUCT = gql`
  mutation AddProduct($product: product_insert_input!) {
    insert_product(objects: [$product]) {
      returning {
        id
        name
        description
        price
        img
      }
    }
  }
`

class UploadPhoto extends Component {
  state = {
  	name: '',
  	description: '',
  	price: 0,
  	imgUrl: '',
  }

  uploadFile = (e) => {
  	const { files } = e.target
  	const file = files[0]
  	const data = new FormData()
  	data.append('upload_preset', 'jamstack')
  	data.append('file', file, file.name)

  	const config = {
  		headers: {
  			'content-type': 'multipart/form-data',
  		},
  	}

  	return axios
  		.post('https://api.cloudinary.com/v1_1/kbrew/image/upload', data, config)
  		.then(res => {
  			this.setState({ imgUrl: res.data.secure_url })
  		})
  }

  render() {
  	let popup
  	let uploader
  	const {
  		name,
  		description,
  		price,
  		imgUrl
  	} = this.state

  	return (
  		<Mutation mutation={ADD_PRODUCT}>
  			{addProduct => (
        <>
          <dialog
          	ref={node => {
          		popup = node
          	}}
          >
          	<form
          		method="dialogue"
          		onSubmit={e => {
          			e.preventDefault()
          			addProduct({
          				variables: {
          					product: {
          						// user_id: user && user.sub,
          						name,
          						description,
          						price: Number(price),
          						img: imgUrl,
          					},
          				},
          				optimisticResponse: {
          					__typename: 'Mutation',
          					insert_product: {
          						__typename: 'product_mutation_response',
          						returning: [
          							{
          								__typename: 'product',
          								// user_id: user && user.sub,
          								name,
          								description,
          								price: Number(price),
          								img: imgUrl,
          							},
          						],
          					},
          				},
          				refetchQueries: [
          					{
          						query: GET_PRODUCTS,
          					},
          				],
          			})
          			this.setState({
          				name: '',
          				description: '',
          				price: '',
          				imgUrl: ''
          			})
          		}}
          	>
          		<div className="form_line">
          			<h4>Upload Photo</h4>
          			<div>
          				<label htmlFor="name">Item Name:</label>
          				<input
          					type="text"
          					name="name"
          					value={name}
          					onChange={(e) => this.setState({ name: e.target.value })}
          				/>

          				<label htmlFor="description">Description:</label>
          				<input
          					type="text"
          					name="description"
          					value={description}
          					onChange={(e) => this.setState({ description: e.target.value })}
          				/>

          				<label htmlFor="price">Price:</label>
          				<input
          					type="number"
          					name="price"
          					value={price}
          					onChange={(e) => this.setState({ price: e.target.value })}
          				/>

          				<div className="upload_button_holder">
          					<input
          						onChange={this.uploadFile}
          						type="file"
          						accept="image/*"
          					/>
          					<img width="250" src={imgUrl} alt="" />
          					<button type="submit">Submit</button>
          				</div>
          			</div>
          		</div>
          	</form>
          </dialog>

      <menu>
      	<button
      		id="uploadPhoto"
      		type="button"
      		onClick={() => {
      			popup.showModal()
      		}}
      	>
          Upload Item
      	</button>
      </menu>
      </>
  			)}
  		</Mutation>
  	)
  }
}

export { UploadPhoto }
