import React, { useContext, useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { cardStore, setup } from '../store';
import { Card, Modal, Header, Button } from '../components';

const INITIAL_YTX_STAKE     = 0;
const YFS_TOKEN_PLACEHOLDER = 2;
const YTX_TOKEN_PLACEHOLDER = 2;

export const Home = () => {
    const { state, dispatch }                         = useContext(cardStore);
    const { cards, isLoading, account }               = state;
    const [YTXStake, setYTXState]                     = useState(INITIAL_YTX_STAKE);
    const [isStakeModalOpen, setIsStakeModalOpen]     = useState(false);
    const [isUnStakeModalOpen, setIsUnStakeModalOpen] = useState(false);

    useEffect(() => {
        setup(dispatch);
    }, [dispatch]);

    const mintedAndAvalibleRender = (minted, avalible) => {
        const isNotAvalible   = avalible === minted;
        const avalibleMessage = isNotAvalible ?  'Not' : avalible;
        return <>
            <h3>{minted} Minted</h3>
            <h3>{avalibleMessage} Avalible</h3>
        </>;
    };

    const cardRender = useCallback(() => {
        return cards.map( (card, index) => {
            return <div key={index}>
                <h2 >{card.title}</h2>
                <Card
                    title={card.title}
                    img={card.img}
                    isAvalible={card.isAvalible}
                />
                {mintedAndAvalibleRender(card.minted, card.avalible)}
            </div>;
        });        
    }, [cards]);

    return (
        <HomePage>
            <Header>
                <h1 style={{marginLeft: '50px'}}>YTX Minting</h1>
                <h2>YFS Token earned {YFS_TOKEN_PLACEHOLDER}</h2>
                <h2>YTX Tokens staked {YTX_TOKEN_PLACEHOLDER}</h2>
                <ButtonsContainer>
                    {account ? <h2>Connected</h2> :
                        <Button onClick={() => setup(dispatch)} isLoading={isLoading} disabled={isLoading} margin='0 20px 0 0'>
                            Connect Mask
                        </Button>
                    }
                    <Button onClick={() => setIsStakeModalOpen(true)}  margin='0 20px 0'>
                        Stake YTX
                    </Button>
                </ButtonsContainer>
            </Header>
            <CardContainer>
                {cardRender()}
            </CardContainer>
            <Modal modalState={[isStakeModalOpen, setIsStakeModalOpen]}>
                <h1>Stake YTX</h1>
                <InputContainer>
                    <Input type='number' name='stakeYTX' value={YTXStake} onChange={event => setYTXState(event.target.value)}/>
                    <Button onClick={() => {}}>Submit</Button>
                </InputContainer>
                <Button onClick={() => setIsUnStakeModalOpen(true)}>UnStake YTX</Button>
                <Modal modalState={[isUnStakeModalOpen, setIsUnStakeModalOpen]}>
                    <h1>UnStake YTX</h1>
                    <InputContainer>
                        <Input type='number' name='unStakeYTX' value={YTXStake} onChange={event => setYTXState(event.target.value)} />
                        <Button onClick={() => {}}>Submit</Button>
                    </InputContainer>
                </Modal>
            </Modal>
        </HomePage>
    );
};

const HomePage = styled.div`
    width: 100%;
    height: 100%;
`;

const Input = styled.input`
    padding: 10px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 0;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 10px;
    grid-template-rows: repeat(3, 1fr);
    width: 80%;
    margin: 20px auto;
`;

const ButtonsContainer = styled.div`
    margin: 0 20px 0 0;
    display:flex;
    flex-direction: row;
`;