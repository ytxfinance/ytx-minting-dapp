import React, { useContext, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { cardStore } from '../store'
import { Card, Modal, Header, Button } from '../components'

export const Home = () => {
	const { cards } = useContext(cardStore)
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#features">Features</Nav.Link>
						<Nav.Link href="#pricing">Pricing</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#deets">More deets</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
							Dank memes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			{/* <Header>
				<h1 style={{ margin: 'auto 0 auto 50px' }}>YTX Minting</h1>
				<Button onClick={() => setIsModalOpen(true)} margin="10px 20px">
					Stake YTX
				</Button>
			</Header> */}
			<div className="cardContainer">
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
			</div>
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
