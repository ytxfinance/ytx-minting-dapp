<<<<<<< HEAD
import React, {createContext, useReducer } from 'react';
import { ACTION_TYPES, sampleCardStore } from './constants';

const initialCardStoreState = {account: undefined, cards: [], isLoading: true};

const cardStore    = createContext(initialCardStoreState);
const { Provider } = cardStore;

const cardStoreReducer = (state, action) => {
    switch (action.type) {
    case ACTION_TYPES.INITIALIZE_CARDS:
        return action.payload;
    case ACTION_TYPES.UPDATE_CARDS:
        return action.payload;
    case ACTION_TYPES.SET_ACCOUNT:
        return {...state, account: action.payload};
    case ACTION_TYPES.LOADING:
        return {...state, isLoading: action.payload};
    default:
        return state;
    }
};

const CardStoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(cardStoreReducer, {account: undefined, cards: sampleCardStore, isLoading: false});
    return (
        <Provider value={{ state, dispatch }}>
            { children }
        </Provider>
    );
};

export {cardStore, CardStoreProvider};
=======
import React, { createContext, useReducer } from 'react'
import { ACTION_TYPES, sampleCardStore } from './constants'

const initialCardStoreState = []

const cardStore = createContext(initialCardStoreState)
const { Provider } = cardStore

const cardStoreReducer = (state, action) => {
	switch (action.type) {
		case ACTION_TYPES.INITIALIZE_CARDS:
			return action.payload
		case ACTION_TYPES.UPDATE_CARDS:
			return action.payload
		default:
			return state
	}
}

const CardStoreProvider = ({ children }) => {
	const [cards, dispatch] = useReducer(cardStoreReducer, sampleCardStore)

	return <Provider value={{ cards, dispatch }}>{children}</Provider>
}

export { cardStore, CardStoreProvider }
>>>>>>> 8443e7ffa3d56cebf362c950fa54db729d0bbafc
