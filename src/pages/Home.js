import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ScrollUpButton from 'react-scroll-up-button'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'

import { cardStore, device } from '../store'
import { Card, Header } from '../components'

import {
	Logo,
	DiscordIcon,
	GitHubIcon,
	WhitepaperIcon,
	ScrollTopIcon,
	TooltipIcon,
} from '../components/Icons'

export const Home = () => {
	const { cards } = useContext(cardStore)
	const [modalShow, setModalShow] = React.useState(false)
	const placement = 'bottom'

	const MyVerticallyCenteredModal = (props) => {
		return (
			<Modal
				{...props}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<StyledHeader closeButton></StyledHeader>
				<StyledBody>
					<h4>Stake YTX</h4>
					<input type="number" min="1"/>
					<StakeButton variant="outline-warning">Stake</StakeButton>
					<UnstakeButton variant="outline-warning">Unstake</UnstakeButton>
				</StyledBody>
			</Modal>
		)
	}

	return (
		<>
			<StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<StyledBrand href="#home">
					<img
						src={Logo}
						width="49"
						height="49"
						className="d-inline-block align-top"
						alt="YTX logo"
					/>
				</StyledBrand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<StyledLink href="#home">Home</StyledLink>
						<StyledLink href="#minting-app" active="true">
							NFT Minting App
						</StyledLink>
						<StyledLink href="#card-game">YTX Card Game</StyledLink>
					</Nav>
					<Nav>
						<StyledLink href="#discord">
							<img
								src={DiscordIcon}
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="YTX logo"
							/>
						</StyledLink>
						<StyledLink href="#git">
							<img
								src={GitHubIcon}
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="YTX logo"
							/>
						</StyledLink>
						<StyledLink href="#whitepaper">
							<img
								src={WhitepaperIcon}
								width="30"
								height="30"
								className="d-inline-block align-top"
								alt="YTX logo"
							/>
						</StyledLink>
						<Form inline>
							<WalletButton variant="outline-warning">
								Connect Wallet
							</WalletButton>
						</Form>
					</Nav>
				</Navbar.Collapse>
			</StyledNavbar>
			{/* <Header>
				<h1 style={{ margin: 'auto 0 auto 50px' }}>YTX Minting</h1>
				<Button onClick={() => setIsModalOpen(true)} margin="10px 20px">
					Stake YTX
				</Button>
			</Header> */}
			<StyeldContainer fluid>
				<CardHeader>
					<Title>XYZ Collection</Title>
					<OverlayTrigger
						trigger={['hover', 'focus']}
						key={placement}
						placement={placement}
						overlay={
							<Popover id={`popover-positioned-${placement}`}>
								<Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
								<Popover.Content>
									<strong>Holy guacamole!</strong> Check this
									info.
								</Popover.Content>
							</Popover>
						}
					>
						<Tooltip
							src={TooltipIcon}
							width="27"
							height="27"
							className="d-inline-block align-top"
							alt="YTX logo"
						/>
					</OverlayTrigger>
				</CardHeader>
				<CardPanel>
					<Row>
						{cards.map((card, i) => {
							return (
								<StyledCol key={i} xs={12} md={4} sm={6}>
									{/* <h2>{card.title}</h2> */}
									{/* {card.isAvalible && <h3>Avalible</h3>} */}
									<Card card={card} />
								</StyledCol>
							)
						})}
					</Row>
				</CardPanel>
			</StyeldContainer>

			<ScrollUpButton EasingType="easeInOutCubic" ShowAtPosition={3000}>
				<ScrollTopButton
					width="40"
					height="40"
					alt="ScrollTop"
					src={ScrollTopIcon}
				/>
			</ScrollUpButton>
			<StakeModalButton
				variant="outline-warning"
				onClick={() => setModalShow(true)}
			>
				<span>Stake/UNSTAKE</span> <strong>YTX</strong>
			</StakeModalButton>
			{/* <div className="cardContainer">
				{cards.map((card, i) => {
					return (
						<div key={i}>
							<h2>{card.title}</h2>
							{card.isAvalible && <h3>Avalible</h3>}
							<Card
								title={card.title}
								img={card.img}
								isAvalible={card.isAvalible}
							/>
						</div>
					)
				})}
			</div> */}
			{/* <Modal modalState={[isModalOpen, setIsModalOpen]}>
				<h1>Stake YTX</h1>
				<div>
					<input style={{ margin: '30px auto' }} />
					<input type="submit" value="Stake" />
				</div>
			</Modal> */}
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
	)
}

const StyledBrand = styled(Navbar.Brand)`
	margin-right: 38px;
`
const StyledNavbar = styled(Navbar)`
	background: #343434 0% 0% no-repeat padding-box !important;
	padding: 0.5rem 36px !important;
	height: 71px;
	opacity: 1;
`
const WalletButton = styled(Button)`
	color: rgba(255, 255, 255, 0.8);
	background: #ff8a321a 0% 0% no-repeat padding-box;
	border: 1px solid #ff8a32;
	border-radius: 9px;

	&:hover {
		color: #212529;
		background-color: #ff8a32;
		border-color: transparent;
	}
`
const StyledLink = styled(Nav.Link)`
	margin-right: 1.5rem;
	font: ${(props) =>
		props.active
			? 'normal normal bold 16px/19px Montserrat'
			: 'normal normal normal 16px/19px Montserrat'};
	letter-spacing: 0px;
	color: #ffffff !important;
	opacity: 1;
`
const StyeldContainer = styled(Container)`
	background: #3f3f3f;
	padding: 0 5%;
	padding-bottom: 80px;
	@media ${device.mobileL} {
		padding: 0 10%;
	}
`
const CardPanel = styled.div`
	background: #1f1f1f 0% 0% no-repeat padding-box;
	border-radius: 20px;
	padding: 4rem 5rem 2rem;

	@media ${device.tablet} {
		padding: 5rem 5rem 2rem;
	}
`
const CardHeader = styled.div`
	background: #535353 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004b;
	border-radius: 20px;
	position: relative;
	padding: 18px;
	margin: 1.2rem 1.2rem -1.9rem;
	z-index: 5;

	img {
		display: none !important;

		@media ${device.mobileL} {
			display: inline-block !important;
		}
	}

	@media ${device.mobileL} {
		margin: 4rem 6rem -1.9rem;
	}

	@media ${device.tablet} {
		margin: 4rem 6rem -1.9rem;
	}

	@media ${device.laptop} {
		margin: 4rem 6rem -1.9rem;
	}
`
const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font: normal normal bold 16px/29px Montserrat;
	letter-spacing: 4.8px;
	color: #ffffff;
	text-transform: uppercase;

	@media ${device.tablet} {
		font: normal normal bold 24px/29px Montserrat;
	}
	@media ${device.laptop} {
		font: normal normal bold 24px/29px Montserrat;
	}
`
const Tooltip = styled.img`
	position: absolute;
	right: 1rem;
	top: 1rem;
`
const StyledCol = styled(Col)`
	text-align: center;
	margin-bottom: 4rem;
`
const ScrollTopButton = styled.img`
	position: fixed;
	cursor: pointer;
	bottom: 1rem;
	left: 1rem;

	@media ${device.mobileL} {
		bottom: 4rem;
		left: 4rem;
	}
`
const StakeModalButton = styled(Button)`
	background: #ff8a32 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004b;
	border: none;
	border-radius: 12px;
	letter-spacing: 0.6px;
	color: #3d2206;
	padding: 12px 25px;
	text-transform: uppercase;
	position: fixed;
	left: 50%;
	width: 239px;
	bottom: 2rem;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);

	@media ${device.mobileL} {
		bottom: 4rem;
		left: unset;
		right: 4rem;
		-webkit-transform: translateX(0%);
		transform: translateX(0%);
	}
	&:hover {
		color: #212529;
		background-color: #ff8a32;
		border-color: transparent;
	}
	span {
		font: normal normal bold 12px/19px Montserrat;
	}
	strong {
		font: normal normal bold 15px/19px Montserrat;
	}
`
const StyledHeader = styled(Modal.Header)`
	border-bottom: none;

	.close {
		outline: none;
	}
`
const StyledBody = styled(Modal.Body)`
	padding-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

	h4 {
		font: normal normal bold 30px/37px Montserrat;
		letter-spacing: 0px;
		margin-bottom: 20px;
		color: #1f1f1f;
	}

	input {
		box-shadow: 0px 3px 6px #00000029;
		border-radius: 8px;
		text-align: center;
		padding-right: 7px;
		margin-bottom: 20px;
		width: 226px;
		border: none;
		height: 39px;
	}

	input:focus {
		border: none;
	}
`
const StakeButton = styled(Button)`
	background: #ff8a32 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004B;
	border: none;
	border-radius: 12px;
	margin-bottom: 7px;
	width: 162px;
	height: 41px;
	text-transform: uppercase;
	font: normal normal bold 11px/14px Montserrat;
	letter-spacing: 0.55px;
	color: #3D2206;

	&:hover {
		color: #212529;
		background-color: #ff8a32;
		border-color: transparent;
	}
`
const UnstakeButton = styled(StakeButton)`
	background: #FF8A324B 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004B;
	font: normal normal bold 10px/12px Montserrat;
	letter-spacing: 0.55px;
	border: 1px solid #FF8A32;
	margin-bottom: 19px;
`