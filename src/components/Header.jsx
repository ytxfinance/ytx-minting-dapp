import React from 'react';
import styled from 'styled-components';

export const Header = ({
    children
}) => {
    return (
        <HeaderDiv>
            {children}
        </HeaderDiv>    
    );
};

const HeaderDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;