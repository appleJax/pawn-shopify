import React from 'react'
import { Container } from 'Common'
import Classify from '../../../../static/illustrations/classify.svg'
import Automatic from '../../../../static/illustrations/automatic.svg'
import Works from '../../../../static/illustrations/works.svg'
import { Wrapper, Item, Flex } from './styles'

const Features = () => {
	const items = [
		{
			id: 0,
			title: 'Image classification',
			icon: Classify
		},
		{
			id: 1,
			title: 'Automatic labelling',
			icon: Automatic
		},
		{
			id: 2,
			title: 'It just works',
			icon: Works
		}
	]
	return (
		<Wrapper>
			<h2>Features</h2>
			<Flex as={Container}>
				{
					items.map(({ id, title, icon }) => (
						<Item key={id}>
							<img width="200" src={icon} alt={title} />
							<h4>{title}</h4>
						</Item>
					))
				}
			</Flex>
		</Wrapper>
	)
}

export default Features
