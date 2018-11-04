import React from 'react'
import Clarifai from 'clarifai'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import { Button } from 'Common'

const Classify = ({
	image,
	predictions,
	handleImage,
	setPredictions
}) => {
	return (
		<div>
			<input
				style={{
					padding: '.5rem .1rem',
					width: '70%',
					marginBottom: '2rem'
				}}
				type="text"
				placeholder="Place a link for the image u're trying to classify"
				onChange={e => handleImage(e.target.value)}
			/>
			<Button type="button"
				onClick={() => {
					const app = new Clarifai.App({
						apiKey: process.env.GATSBY_CLARIFAI
					})
					app.models
						.predict(Clarifai.GENERAL_MODEL, image)
						.then(res => setPredictions(res.outputs[0].data.concepts))
						.catch(err => console.log(err))
				}}
			>
                Classify
			</Button>
			<img width="300" style={{ margin: '0 auto' }} src={image} alt="meh" />
			{predictions.map(({ id, name, value }) => (
				<div key={id}>
					<h2>Prediction: {name}</h2>
					<p>Value: {value}</p>
				</div>
			))}
		</div>
	)
}

const enhance = compose(
	withStateHandlers(
		{
			image: 'https://samples.clarifai.com/metro-north.jpg',
			predictions: []
		},
		{
			handleImage: () => value => ({ image: value }),
			setPredictions: () => value => ({ predictions: value })
		}
	),
	lifecycle({
		componentDidMount() {
			const app = new Clarifai.App({
				apiKey: process.env.GATSBY_CLARIFAI
			})
			app.models
				.predict(Clarifai.GENERAL_MODEL, this.props.image)
				.then(res => this.props.setPredictions(res.outputs[0].data.concepts))
				.catch(err => console.log(err))
		}
	})
)

export default enhance(Classify)
