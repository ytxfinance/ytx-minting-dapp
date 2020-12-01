import React from 'react'
import styled from 'styled-components'

export const Button = ({ onClick, margin, children }) => {
	return (
		<StyledButton onClick={onClick} margin={margin}>
			{children}
		</StyledButton>
	)
}

const StyledButton = styled.button`
	text-decoration: none;
	border: 1px solid black;
	padding: 10px;
	text-align: center;
	margin: ${({ margin }) => margin};
`
