import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Col, Row } from 'react-bootstrap'
import { cardStore, device } from '../store'
import { Card, Modal, Header } from '../components'
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
	const [isModalOpen, setIsModalOpen] = useState(false)
	const placement = 'bottom'
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
			<ScrollTopButton
				width="40"
				height="40"
				alt="ScrollTop"
				src={ScrollTopIcon}
			/>
			<StakeButton variant="outline-warning">
				<span>Stake/UNSTAKE</span> <strong>YTX</strong>
			</StakeButton>
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
			<Modal modalState={[isModalOpen, setIsModalOpen]}>
				<h1>Stake YTX</h1>
				<div>
					<input style={{ margin: '30px auto' }} />
					<input type="submit" value="Stake" />
				</div>
			</Modal>
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
	
	z-index: 5;
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
	bottom: 4rem;
	left: 4rem;
`
const StakeButton = styled(Button)`
	background: #ff8a32 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004b;
	border: none;
	border-radius: 12px;

	letter-spacing: 0.6px;
	color: #3d2206;
	padding: 12px 25px;
	text-transform: uppercase;
	position: fixed;
	bottom: 4rem;
	right: 4rem;

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
