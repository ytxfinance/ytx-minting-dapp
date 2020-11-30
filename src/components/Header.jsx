import React from 'react';
import styled from 'styled-components';

export const Header = ({
    className,
    children
}) => {
    return (
        <HeaderDiv className={className}>
            {children}
        </HeaderDiv>    
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
`