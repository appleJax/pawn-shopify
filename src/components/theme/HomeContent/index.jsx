import React from 'react'
import { Container } from 'Common'
import Undraw from '../../../../static/illustrations/sell.svg'
import Auth from '../../modules/Auth'
import { Wrapper, Content } from './styles'

const HomeContent = () => (
	<Wrapper as={Container}>
		<Content>
			<h2>
				<span>Automatically</span> label your items
                to quickly start selling
                & <span>enjoy</span> the profit!
			</h2>
			<Auth title="Create account" />
		</Content>
		<Content>
			<img src={Undraw} alt="classify, sell & have fun" />
		</Content>
	</Wrapper>
)

export default HomeContent
