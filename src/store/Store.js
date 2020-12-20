import React, { createContext, useReducer } from 'react'
import { initialCards } from './constants'

const initialState = {
	cards: initialCards,
	ytx: null,
	yfs: null,
	nftManager: null,
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
		default:
			return state
	}
}

const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider }
