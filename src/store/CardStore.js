import React, {createContext, useReducer } from 'react';
import { ACTION_TYPES, sampleCardStore } from './constants';

const initialCardStoreState = [];

const cardStore    = createContext(initialCardStoreState);
const { Provider } = cardStore;

const cardStoreReducer = (state, action) => {
    switch (action.type) {
    case ACTION_TYPES.INITIALIZE_CARDS:
        return action.payload;
    case ACTION_TYPES.UPDATE_CARDS:
        return action.payload;
    default:
        return state;
    }
};

const CardStoreProvider = ({children}) => {
    const [cards, dispatch] = useReducer(cardStoreReducer, sampleCardStore);

    return (
        <Provider value={{ cards, dispatch }}>
            { children }
        </Provider>
    );
};

export {cardStore, CardStoreProvider};