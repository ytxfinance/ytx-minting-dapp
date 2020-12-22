import React, { createContext, useReducer } from 'react'
import { initialCards } from './constants'

const initialState = {
	cards: initialCards,
	ytx: null,
	yfs: null,
	nftManager: null,
	amountStaked: 0,
	ytxBalance: 0,
	yfsBalance: 0,
	setupComplete: false,
}
const store = createContext(initialState)
const { Provider } = store

const reducer = (state, action) => {
	let newState = {}
	switch (action.type) {
		case 'SET_CARDS':
			console.log('set cards')
			newState = {
				...state,
				cards: action.payload.cards,
			}
			return newState
		case 'SET_CONTRACTS':
			console.log('set contracts')
			newState = {
				...state,
				ytx: action.payload.ytx,
				yfs: action.payload.yfs,
				nftManager: action.payload.nftManager,
			}
			return newState
		case 'SET_AMOUNT_STAKED':
			console.log('set amount staked')
			newState = {
				...state,
				amountStaked: action.payload.amountStaked,
			}
			return newState
		case 'SET_YTX_BALANCE':
			console.log('set ytx balance')
			newState = {
				...state,
				ytxBalance: action.payload.ytxBalance,
			}
			return newState
		case 'SET_YFS_BALANCE':
			console.log('set yfs balance')
			newState = {
				...state,
				yfsBalance: action.payload.yfsBalance,
			}
			return newState
		case 'SET_SETUP_COMPLETE':
			console.log('set setup complete')
			newState = {
				...state,
				setupComplete: action.payload.setupComplete,
			}
			return newState
		default:
			return state
	}
}

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider }
