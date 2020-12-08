import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { cardStore } from '../store'
import { Card, Modal, Header } from '../components'
import Logo from '../assets/logo.png'
import Git from '../assets/social/github.png'
import styled from 'styled-components'
import { Col, Row } from 'react-bootstrap'

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
								src={Git}
								width="25"
								height="25"
								className="d-inline-block align-top"
								alt="YTX logo"
							/>
						</StyledLink>
						<StyledLink href="#git">
							<img
								src={Git}
								width="25"
								height="25"
								className="d-inline-block align-top"
								alt="YTX logo"
							/>
						</StyledLink>
						<StyledLink href="#whitepaper">
							<img
								src={Git}
								width="25"
								height="25"
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
			<StyeldContainer >
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
							src={Git}
							width="25"
							height="25"
							className="d-inline-block align-top"
							alt="YTX logo"
						/>
					</OverlayTrigger>
				</CardHeader>
				<CardPanel>
					<Row>
						{cards.map((card, i) => {
							return (
								<StyledCol key={i} xs={6} md={4}>
									{/* <h2>{card.title}</h2> */}
									{/* {card.isAvalible && <h3>Avalible</h3>} */}
									<Card
										card={card}
									/>
								</StyledCol>
							)
						})}
					</Row>
				</CardPanel>
			</StyeldContainer>
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
	padding: .5rem 36px !important;
	height: 71px;
	opacity: 1;
`
const WalletButton = styled(Button)`
	color: rgba(255, 255, 255, 0.8);
	background: #FF8A321A 0% 0% no-repeat padding-box;
	border: 1px solid #FF8A32;
	border-radius: 9px;

	&:hover {
		color: #212529;
		background-color: #FF8A32;
		border-color: #FF8A32;
	}
`
const StyledLink = styled(Nav.Link)`
	margin-right: 1.5rem;
	font: ${props => (props.active ? "normal normal bold 16px/19px Montserrat" : "normal normal normal 16px/19px Montserrat")};
	letter-spacing: 0px;
	color: #FFFFFF !important;
	opacity: 1;
`
const StyeldContainer = styled(Container)`
	background: #3f3f3f;
`
const CardPanel = styled.div`
	border-radius: 1rem;
	background-color: #1f1f1f;
	padding: 4rem 5rem 2rem;
`
const CardHeader = styled.div`
	background-color: #535353;
	border-radius: 1rem;
	box-shadow: 0 .225rem .75rem rgba(0,0,0,.3);
	position: relative;
	padding: 0.8rem;
	margin: 4rem 6rem -1.9rem;
	z-index: 5;
`
const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	font-size: 1.4rem;
	letter-spacing: 0.3rem;
	font-weight: 500;
	color: white;
`
const Tooltip = styled.img`
	position: absolute;
	right: 1rem;
	top: 1rem;
`
const StyledCol = styled(Col)`
	text-align: center;
`
