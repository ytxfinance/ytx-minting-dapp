import React, { useContext, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import ScrollUpButton from 'react-scroll-up-button'
import BigNumber from 'bignumber.js'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { Col, Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { store, device } from '../store'
import { Card } from '../components'
import {
	Logo,
	DiscordIcon,
	GitHubIcon,
	WhitepaperIcon,
	ScrollTopIcon,
	TooltipIcon,
} from '../components/Icons'

export const Home = () => {
	const { state, dispatch } = useContext(store)
	const [modalShow, setModalShow] = useState(false)
	const [processingStake, setProcessingStake] = useState(false)
	const [stakeValue, setStakeValue] = useState(0)
	const placement = 'bottom'

	useEffect(() => {
		if (state.setupComplete) {
			getBalances()
		}
	}, [state.setupComplete])

	const getBalances = () => {
		getCurrentStake()
		getYTXBalance()
		getYFSBalance()
	}

	const getCurrentStake = async () => {
		const amountStaked = Number(window.web3.utils.fromWei(
			await state.nftManager.methods.amountStaked(window.web3.eth.defaultAccount).call()
		)).toFixed(2)
		console.log('amountStaked', amountStaked)
		dispatch({
			type: 'SET_AMOUNT_STAKED',
			payload: {
				amountStaked,
			},
		})
	}

	const getYTXBalance = async () => {
		const ytxBalance = Number(window.web3.utils.fromWei(
			await state.ytx.methods.balanceOf(window.web3.eth.defaultAccount).call()
		)).toFixed(2)
		console.log('ytxBalance', ytxBalance)
		dispatch({
			type: 'SET_YTX_BALANCE',
			payload: {
				ytxBalance,
			},
		})
	}

	const getYFSBalance = async () => {
		const yfsBalance = Number(window.web3.utils.fromWei(
			await state.nftManager.methods.getGeneratedYFS().call()
		)).toFixed(2)
		console.log('yfsBalance', yfsBalance)
		dispatch({
			type: 'SET_YFS_BALANCE',
			payload: {
				yfsBalance,
			},
		})
	}

	const stakeYTX = async () => {
		setProcessingStake(true)
		const amountToStake = stakeValue
		const stake = BigNumber(window.web3.utils.toWei(amountToStake))
		const currentAllowance = await state.ytx.methods.allowance(window.web3.eth.defaultAccount, state.nftManager._address).call()
		const myBalance = await state.ytx.methods.balanceOf(window.web3.eth.defaultAccount).call()
		if (myBalance < stake) {
			return alert("You don't have enough tokens to stake")
		}
		if (BigNumber(currentAllowance).isLessThan(stake)) {
			await state.ytx.methods.approve(state.nftManager._address, stake).send({
				from: window.web3.eth.defaultAccount,
			})
		}
		await state.nftManager.methods.stakeYTX(stake).send({
			from: window.web3.eth.defaultAccount,
		})
		getBalances()
		setModalShow(false)
		setProcessingStake(false)
	}

	return (
		<>
			<StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<StyledBrand href="#home">
					<LogoImg
						src={Logo}
						width="49"
						height="49"
						className="d-inline-block align-top"
						alt="YTX logo"
					/>
				</StyledBrand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<StyledNavBarCollapse id="responsive-navbar-nav">
					<StyledNav className="mr-auto">
						<StyledLink href="#home">Home</StyledLink>
						<StyledLink href="#minting-app" active="true">
							NFT Minting App
						</StyledLink>
						<StyledLink href="#card-game">YTX Card Game</StyledLink>
					</StyledNav>
					<StyledNav>
						<LinkWrapper>
							<StyledBalance>
								<StyledBalanceDiv>
									<b>{ state.ytxBalance }</b>
									&nbsp;
									<SmallLogoImg
										src={Logo}
										className="d-inline-block align-top"
										alt="YTX logo"
									/>
									&nbsp;
									&nbsp;
									Balance
								</StyledBalanceDiv>

								<StyledBalanceDiv>
									<b>{ state.amountStaked }</b>
									&nbsp;
									&nbsp;
									<SmallLogoImg
										src={Logo}
										className="d-inline-block align-top"
										alt="YTX logo"
									/>
									&nbsp;
									Staked
								</StyledBalanceDiv>
							</StyledBalance>

							<StyledLink
								href="https://discord.gg/pAYrSwR"
								target="_blank"
							>
								<img
									src={DiscordIcon}
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="YTX logo"
								/>
							</StyledLink>
							<StyledLink
								href="https://github.com/ytxfinance"
								target="_blank"
							>
								<img
									src={GitHubIcon}
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="YTX logo"
								/>
							</StyledLink>
							<StyledLink
								href="https://ytx.finance/assets/ytx-whitepaper.pdf"
								target="_blank"
							>
								<img
									src={WhitepaperIcon}
									width="30"
									height="30"
									className="d-inline-block align-top"
									alt="YTX logo"
								/>
							</StyledLink>
						</LinkWrapper>

						{/* <Form inline>
							<WalletButton variant="outline-warning">
								Connect Wallet
							</WalletButton>
						</Form> */}
					</StyledNav>
				</StyledNavBarCollapse>
			</StyledNavbar>
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
						{state.cards.map((card, i) => (
							<StyledCol
								key={i}
								xs={12}
								xl={4}
								md={6}
								sm={6}
								className="col-xxl-3"
							>
								<Card card={card} />
							</StyledCol>
						))}
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
			
			
			<Modal
				show={modalShow}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<StyledHeader closeButton></StyledHeader>
				<StyledBody>
					<h4>Stake YTX</h4>
					<input type="number" placeholder="Amount to stake..." onInput={e => {
						setStakeValue(e.target.value)
					}}/>
					{stakeValue <= 0 ? null : (
						<StyledStakeNote>
							There's a 1% fee on every transaction so your stake will be <b>{stakeValue * 99 / 100} YTX</b> instead of {stakeValue} YTX
						</StyledStakeNote>
					)}
					{processingStake ? (
						<div>Waiting for transaction confirmation...</div>
					) : (
						<>
							<StakeButton
								variant="outline-warning"
								onClick={() => stakeYTX()}
							>Stake</StakeButton>
							<UnstakeButton variant="outline-warning">
								Unstake
							</UnstakeButton>
						</>
					)}
				</StyledBody>
			</Modal>
		</>
	)
}

const StyledStakeNote = styled.div`
	text-align: center;
	margin-bottom: 10px;
`
const StyledBalance = styled.div`
	color: white;
	display: flex;
    justify-content: right;
    align-items: center;
	margin-right: 10px;
	flex-direction: column;
`
const StyledBalanceDiv = styled.div`
	display: flex;
	align-items: center;
`
const LogoImg = styled.img`
	width: 49px;
	height: 49px;

	@media ${device.desktop} {
		width: 100px;
		height: 100px;
	}
`
const SmallLogoImg = styled.img`
	width: 17px;
	height: 17px;
`
const StyledBrand = styled(Navbar.Brand)`
	margin-right: 38px;
	@media ${device.desktop} {
		margin-right: 93px;
	}
`
const StyledNavBarCollapse = styled(Navbar.Collapse)`
	background: #000000;
	opacity: 0.95;
	text-align: center;
	z-index: 100;
	padding: 41% 10%;
	@media ${device.laptop} {
		background: unset;
		opacity: 1;
		text-align: center;
		z-index: 100;
		padding: unset;
	}
`
const StyledNavbar = styled(Navbar)`
	background: #343434 0% 0% no-repeat padding-box !important;
	padding: 0.5rem 18px !important;
	height: 71px;
	opacity: 1;

	.navbar-toggler {
		border: none;
		outline: none;
	}

	@media ${device.mobileL} {
		padding: 0.5rem 36px !important;
	}
	@media ${device.desktop} {
		height: 137px;
	}
`
const StyledNav = styled(Nav)`
	align-items: center;
`
const WalletButton = styled(Button)`
	color: rgba(255, 255, 255, 0.8);
	background: #ff8a321a 0% 0% no-repeat padding-box;
	font: normal normal normal 15px/19px Montserrat;
	border: 1px solid #ff8a32;
	border-radius: 9px;

	box-shadow: none !important;
	width: 177px;
	height: 39px;

	&:hover {
		color: #212529;
		background-color: #ff8a32;
		border-color: transparent;
	}

	&:active {
		border-color: transparent !important;
	}

	@media ${device.desktop} {
		width: 360px;
		height: 80px;
		font: normal normal normal 30px/37px Montserrat;
	}
`
const LinkWrapper = styled.div`
	flex-direction: row;
	display: flex;
`
const StyledLink = styled(Nav.Link)`
	font: ${(props) =>
		props.active
			? 'normal normal bold 16px/19px Montserrat'
			: 'normal normal normal 16px/19px Montserrat'};
	letter-spacing: 0px;
	color: #ffffff !important;
	opacity: 1;
	margin: 0.5rem;
	@media ${device.tablet} {
		margin: unset;
		margin-right: 1.5rem;
	}

	@media ${device.desktop} {
		font: ${(props) =>
			props.active
				? 'normal normal bold 31px/38px Montserrat'
				: 'normal normal normal 31px/38px Montserrat'};
		margin-right: 3.5rem;
		img {
			width: 60px;
			height: 60px;
		}
	}
	letter-spacing: 0px;
`
const StyeldContainer = styled(Container)`
	background: #3f3f3f;
	padding: 0 5%;
	padding-bottom: 80px;
	@media ${device.mobileL} {
		padding: 0 10% 4%;
	}
`
const CardPanel = styled.div`
	background: #1f1f1f 0% 0% no-repeat padding-box;
	border-radius: 20px;
	padding: 4rem 5rem 2rem;

	@media ${device.tablet} {
		padding: 5rem 5rem 2rem;
	}

	@media ${device.desktop} {
		padding: 7rem 5rem 2rem;
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

	@media ${device.desktop} {
		margin: 4rem 6rem -1.9rem;
		padding: 33px;
	}
`
const Title = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font: normal normal bold 16px/19px Montserrat;
	letter-spacing: 4.8px;
	color: #ffffff;
	text-transform: uppercase;

	@media ${device.tablet} {
		font: normal normal bold 24px/29px Montserrat;
	}
	@media ${device.laptop} {
		font: normal normal bold 24px/29px Montserrat;
	}
	@media ${device.desktop} {
		font: normal normal bold 43px/53px Montserrat;
		letter-spacing: 8.6px;
	}
`
const Tooltip = styled.img`
	position: absolute;
	right: 1.2rem;
	top: 1.2rem;
	background: #a7a7a7 0% 0% no-repeat padding-box;
	border-radius: 50%;
	padding: 5px;

	@media ${device.desktop} {
		right: 2rem;
		top: 2rem;
		width: 49px;
		height: 49px;
		padding: 10px;
	}
`
const StyledCol = styled(Col)`
	text-align: center;
	margin-bottom: 3.3rem;

	@media ${device.laptopXL} {
		&.col-xxl-3 {
			flex: 0 0 25%;
			max-width: 25%;
		}
	}

	@media ${device.tablet} {
		margin-bottom: 4rem;
	}

	@media ${device.desktop} {
		margin-bottom: 6rem;
	}
`
const ScrollTopButton = styled.img`
	position: fixed;
	cursor: pointer;
	background: #757575;
    padding: 2px;
    border-radius: 50%;
	bottom: 1rem;
	left: 1rem;
	display: none;

	@media ${device.mobileL} {
		bottom: 4rem;
		left: 4rem;
	}

	@media ${device.tablet} {
		display: block;
	}

	@media ${device.desktop} {
		width: 60px;
		height: 60px;
	}
`
const StakeModalButton = styled(Button)`
	background: #ff8a32 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004b;
	border: none !important;
	border-radius: 12px;
	box-shadow: none !important;
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

	@media ${device.desktop} {
		width: 433px;
		padding: 36px 50px;
		span {
			font: normal normal bold 28px/34px Montserrat;
			letter-spacing: 1.4px;
		}
		strong {
			font: normal normal bold 28px/34px Montserrat;
			letter-spacing: 1.4px;
		}
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
	box-shadow: 0px 5px 12px #0000004b;
	border: none;
	box-shadow: none !important;
	border-radius: 12px;
	margin-bottom: 7px;
	width: 162px;
	height: 41px;
	text-transform: uppercase;
	font: normal normal bold 11px/14px Montserrat;
	letter-spacing: 0.55px;
	color: #3d2206;

	&:hover {
		color: #212529;
		background-color: #ff8a32;
		border-color: transparent;
	}
`
const UnstakeButton = styled(StakeButton)`
	background: #ff8a324b 0% 0% no-repeat padding-box;
	box-shadow: 0px 5px 12px #0000004b;
	font: normal normal bold 10px/12px Montserrat;
	letter-spacing: 0.55px;
	border: 1px solid #ff8a32;
	margin-bottom: 19px;
`
