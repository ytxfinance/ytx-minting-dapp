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

	return (
		<CardContainer>
			<CardTitle>{title}</CardTitle>
			<ImageWrapper>
				<CardImage src={img} />
				<div className="overlay"></div>
				<div className="button-wrapper">
					<MintButton variant="outline-warning"> Mint </MintButton>
				</div>
			</ImageWrapper>
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
const ImageWrapper = styled.div`
	position: relative;
	width: 187px;
	height: 312px;
	margin: 0 auto;

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0);
		transition: background 0.5s ease;
	}

	&:hover .overlay {
		display: block;
		background: rgba(0, 0, 0, 0.3);
	}
	.button-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		opacity: 0;
		transition: opacity 0.35s ease;
	}

	&:hover .button-wrapper {
		opacity: 1;
	}
`
const MintButton = styled(Button)`
	background: #ff8a32 0% 0% no-repeat padding-box;
	box-shadow: 0px 3px 12px #00000069;
	border-color: transparent;
	padding: 7px 28px;
	border-radius: 9px;
	opacity: 1;
	font: normal normal 500 12px/15px Montserrat;
	letter-spacing: 0px;
	color: #000000;

	&:hover {
		color: #212529;
		background-color: #ff8a32;
		border-color: transparent;
	}
`
const CardImage = styled.img`
	width: 187px;
	height: 312px;
	position: absolute;
	left: 0px;
	top: 0px;
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
