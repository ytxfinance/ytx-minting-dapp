import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import LabelBackImg from '../assets/label-back.png'
export const Card = ({ card }) => {
	const {
		title,
		img,
		isAvalible,
		minted,
		left,
		requiredYTX,
		requiredYFS,
	} = card
	console.log(card)
	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<CardImage src={img} />
			<ButtonGroup>
				<MintedText>
					<strong>{minted} </strong>
					<span>minted</span>
				</MintedText>
				<LeftText>
					<strong>{left} </strong>
					<span>left</span>
				</LeftText>
			</ButtonGroup>
			<CardText>
				{requiredYTX} YTX & {requiredYFS} YFS
			</CardText>
			<Subtitle>required to mint</Subtitle>
		</CardContainer>
	)
}

const CardContainer = styled.div``
const CardTitle = styled.div`
	font: normal normal 500 16px/19px Montserrat;
	text-transform: capitalize;
	letter-spacing: 0px;
	color: #ffffff;
	margin-bottom: 20px;
`
const CardImage = styled.img`
	width: 187px;
	height: 312px;
	border-radius: 6px;
	z-index: 0;
`
const ButtonGroup = styled.div`
	width: 187px;
	text-align: center;
	margin: 12px auto 13px;
	height: 26px;
	z-index: 2;
	border-radius: 17px;
	background: linear-gradient(114deg, #ffffff 53%, #ff8a32 47%);
`
const MintedText = styled.span`
	float: left;
    margin-left: 15px;
	strong {
		font: normal normal bold 11px/13px Montserrat;
		letter-spacing: 1.1px;
	}
	span {
		font: normal normal normal 10px/13px Montserrat;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`
const LeftText = styled.span`
	float: right;
	margin-right: 15px;
	strong {
		font: normal normal bold 11px/13px Montserrat;
		letter-spacing: 1.1px;
	}
	span {
		font: normal normal normal 10px/13px Montserrat;
		letter-spacing: 1px;
		text-transform: uppercase;
	}
`
const CardText = styled.div`
	font: normal normal bold 14px/15px Montserrat;
	letter-spacing: 0px;
	color: #ffffff;
`
const Subtitle = styled.div`
	text-align: center;
	font: normal normal 500 12px/15px Montserrat;
	letter-spacing: 0px;
	color: #ffffff;
`
