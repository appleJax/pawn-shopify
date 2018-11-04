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
	selectLabels,
	selected
}) => {
	return (
		<div>
			<div>
				<Input
					style={{
						padding: '.5rem .1rem',
						width: '70%',
						marginBottom: '2rem'
					}}
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
				<img src={image} alt="meh" />
			</Img>
			<div></div>
			<Labels>
				{predictions.map(({ id, name }) => (
					<Label color={selected.includes(name)?"coral":"#eee"} key={id} onClick={selected.includes(name)?"":()=>{
					selectLabels([...selected,name])}}>
						{name}
					</Label>
				))}
			</Labels>
			<CopyToClipboard
				text={selected.map(( name ) => name)}
				onCopy={() => alert('copied labels!')}
			>
				<Button
					type="button"
				>Copy labels</Button>
			</CopyToClipboard>
		</div>
	)
}

const enhance = compose(
	withStateHandlers(
		{
			image: 'https://samples.clarifai.com/metro-north.jpg',
			predictions: [],
			selected: []
		},
		{
			handleImage: () => value => ({ image: value }),
			setPredictions: () => value => ({ predictions: value }),
			selectLabels:()=> value =>({selected: value}) 
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
