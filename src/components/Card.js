import React from 'react'
import styled from 'styled-components'

export const Card = ({card}) => {
	const {title, img, isAvalible, minted, left, requiredYTX, requiredYFS} = card;
	console.log(card);
	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<CardImage src={img} />
			<ButtonGroup></ButtonGroup>
			<CardText>{requiredYTX} YTX & {requiredYFS} YFS</CardText>
			<Subtitle>required to mint</Subtitle>
		</CardContainer>
	)
}

const CardContainer = styled.div`

`
const CardTitle = styled.div`
	font: normal normal 500 16px/19px Montserrat;
	text-transform: capitalize;
	letter-spacing: 0px;
	color: #FFFFFF;
	margin-bottom: 20px;
`
const CardImage = styled.img`
	width: 187px;
	height: 312px;
	border-radius: 6px;
	z-index: 0;
`
const ButtonGroup = styled.div`
	margin-bottom: 13px;
`
const CardText = styled.div`
	font: normal normal bold 14px/15px Montserrat;
	letter-spacing: 0px;
	color: #FFFFFF;
`
const Subtitle =  styled.div`
	text-align: center;
	font: normal normal 500 12px/15px Montserrat;
	letter-spacing: 0px;
	color: #FFFFFF;
`