import React, { useContext, useState } from 'react';
import { cardStore } from '../store';
import { Card, Modal, Header, Button } from '../components';

export const Home = () => {
    const { cards } = useContext(cardStore);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{width: '100%', height: '100%'}}>
            <Header>
                <h1 style={{margin: 'auto 0 auto 50px'}}>YTX Minting</h1>
                <Button onClick={() => setIsModalOpen(true)} margin='10px 20px'>
                    Stake YTX
                </Button>
            </Header>
            <div className='cardContainer'>
                {cards.map( card => {
                    return <div>
                                <h2 >{card.title}</h2>
                                {card.isAvalible && <h3>Avalible</h3>}
                                <Card
                                    title={card.title}
                                    img={card.img}
                                    isAvalible={card.isAvalible}
                                />
                            </div>
                })}
            </div>
            <Modal modalState={[isModalOpen, setIsModalOpen]}/>
        </div>
    )
}   