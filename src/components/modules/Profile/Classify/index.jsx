import React from 'react'
import Clarifai from 'clarifai'
import { compose, withStateHandlers, lifecycle } from 'recompose'
import { Button } from 'Common'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Labels, Label, Input, Img } from './styles'

const Classify = ({
	image,
	predictions,
	handleImage,
	setPredictions,
	selectLabel
}) => (
	<div>
		<div>
			<Input
				type="text"
				placeholder="Place a link for the image u're trying to classify"
				onChange={e => handleImage(e.target.value)}
			/>
		</div>
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
		<Img>
			<img src={image} alt="" />
		</Img>
		<div />
		<Labels>
			{predictions.map(({ id, name, isSelected }) => (
				<Label
					isSelected={isSelected}
					key={id}
					onClick={() => selectLabel(id)}
				>
					{name}
				</Label>
			))}
		</Labels>
		<CopyToClipboard
			text={predictions.filter(item => item.isSelected).map(({ name }) => name).join(' ')}
			onCopy={() => alert('copied labels!')}
		>
			<Button
				type="button"
			>Copy labels</Button>
		</CopyToClipboard>
	</div>
)

const enhance = compose(
	withStateHandlers(
		{
			image: 'https://samples.clarifai.com/metro-north.jpg',
			predictions: []
		},
		{
			handleImage: () => value => ({ image: value }),
			setPredictions: () => value => ({ predictions: value }),
			selectLabel: ({ predictions }) => id => ({ predictions: predictions.map(item => (item.id === id
				? {
					...item,
					name: `#${item.name}`,
					isSelected: !item.isSelected ? true : !item.isSelected
				} : item)) })
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
