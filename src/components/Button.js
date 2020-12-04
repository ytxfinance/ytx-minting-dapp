import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Button = ({
    onClick,
    margin,
    isLoading,
    disabled,
    children
}) => {
    return (
        <StyledButton onClick={onClick} margin={margin} disabled={disabled}>
            {isLoading ? <Spinner/> : children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    background: none;
    background-color: lightblue;
    color: inherit;
    border: 2px solid black;
    border-radius: 8px;
    padding: 10px;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    text-align: center;
    margin: ${({margin}) => margin};
    &:hover {
        background-color: white;
    }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 3px solid black;
  background: transparent;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;