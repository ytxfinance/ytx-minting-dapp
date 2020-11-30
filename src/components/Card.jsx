import React from 'react';
import styled from 'styled-components';

export const Card = ({
    img,
}) => {
    return (
        <CardContainer>
            <CardImage src={img}/>
		</CardContainer>
    )
}

const CardContainer = styled.div`
    width: 90px;
    height: 110px;
    padding: 10px;
    border: 1px solid black;
    position: relative;
    bottom: 0;
    display: inline-block;
`
const CardImage = styled.img`
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index:0;
`