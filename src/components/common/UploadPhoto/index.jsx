import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import axios from 'axios'
import { Button, Container } from 'Common'
import Clarifai from 'clarifai'
import { Center, StyledForm, Field, Flex, DefaultButton } from './styles'

const GET_PRODUCTS = gql`
  query HASURA {
    product {
      id
      name
      description
      tags
      price
      img
      userId
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
        tags
        price
        img
        userId
      }
    }
  }
`

class UploadPhoto extends Component {
  popup = ''

  state = {
  	name: '',
  	description: '',
  	tags: '',
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
  			const app = new Clarifai.App({
  				apiKey: process.env.GATSBY_CLARIFAI
  			})

  			app.models
  				.predict(Clarifai.GENERAL_MODEL, res.data.secure_url)
  				.then(res => this.setState({ tags: res.outputs[0].data.concepts.map(({ name }) => name).join(',') }))
  				.catch(err => console.log(err))
  		})
  }

  render() {
  	const {
  		name,
  		description,
  		tags,
  		price,
  		imgUrl
  	} = this.state

  	const { user } = this.props
  	console.log('USER:', user)
  	console.log('NICKNAME:', user.nickname)

  	return (
  		<Mutation mutation={ADD_PRODUCT}>
  			{addProduct => (
        <>
          {/* eslint-disable-next-line */}
          <dialog
          	ref={node => {
          		this.popup = node
          	}}
          	onClick={() => {
          		if (this.popup) {
          			this.popup.close()
          		}
          	}}
          >
          	{/* eslint-disable-next-line */}
          	<form
          		onClick={e => {
          			e.stopPropagation()
          		}}
          		method="dialogue"
          		onSubmit={e => {
          			e.preventDefault()
          			addProduct({
          				variables: {
          					product: {
          						name,
          						description,
          						tags,
          						price: Number(price),
          						img: imgUrl,
          						userId: user.nickname,
          					},
          				},
          				optimisticResponse: {
          					__typename: 'Mutation',
          					insert_product: {
          						__typename: 'product_mutation_response',
          						returning: [
          							{
          								__typename: 'product',
          								name,
          								description,
          								tags,
          								price: Number(price),
          								img: imgUrl,
          								userId: user.nickname,
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
          			this.popup.close()
          			this.setState({
          				name: '',
          				description: '',
          				tags: '',
          				price: '',
          				imgUrl: ''
          			})
          		}}
          	>
          		<div className="form_line">
          			<h4>Upload Photo</h4>
          			<StyledForm>
          				<Field>
          					<input
          						onChange={this.uploadFile}
          						type="file"
          						accept="image/*"
          						required
          					/>
          				</Field>
          				<img width="250" style={{ margin: '0 auto' }} src={imgUrl} alt="" />

          				<label htmlFor="name">Item Name:</label>
          				<Field
						  	as="input"
          					type="text"
          					name="name"
          					value={name}
          					onChange={(e) => this.setState({ name: e.target.value })}
          					required
          				/>

          				<label htmlFor="description">Description:</label>
          				<Field
						  	as="input"
          					type="text"
          					name="description"
          					value={description}
          					onChange={(e) => this.setState({ description: e.target.value })}
          					required
          				/>

          				<label htmlFor="tags">Tags:</label>
          				<Field
						  	as="textarea"
          					name="tags"
          					value={tags}
          					onChange={(e) => this.setState({ tags: e.target.value })}
          					required
          				/>

          				<label htmlFor="price">Price:</label>
          				<Field
						  	as="input"
          					type="number"
          					name="price"
          					value={price}
          					onChange={(e) => this.setState({ price: e.target.value })}
          					required
          				/>
          				<Flex>
          					<DefaultButton type="button"
          						onClick={() => {
          							this.popup.close()
          						}}
          					>Cancel</DefaultButton>
          					<Button type="submit">Submit</Button>
          				</Flex>
          			</StyledForm>
          		</div>
          	</form>
          </dialog>
      <menu>
      	<Center as={Container}>
		  	<Button
      			id="uploadPhoto"
      			type="button"
      			margin="2rem"
      			onClick={() => {
      				this.popup.showModal()
      			}}
		  	>
				Upload Item
		   </Button>
      	</Center>
      </menu>
      </>
  			)}
  		</Mutation>
  	)
  }
}

export { UploadPhoto }
