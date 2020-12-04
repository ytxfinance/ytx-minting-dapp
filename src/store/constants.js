import eleven from '../assets/eleven.png';
import five from '../assets/five.png';
import ten from '../assets/ten.png';

export const ACTION_TYPES = {
    INITIALIZE_CARDS : 'INITIALIZE_CARDS',
    UPDATE_CARDS     : 'UPDATE_CARDS',
    SET_ACCOUNT      : 'SET_ACCOUNT',
    LOADING          : 'LOADING'
};

export const sampleCardStore = [
    {
        avalible : 100,
        minted   : 20,
        title    : 'eleven',
        img      : eleven
    },
    {
        avalible : 100,
        minted   : 20,
        title    : 'five',
        img      : five
    },
    {
        avalible : 100,
        minted   : 100,
        title    : 'ten',
        img      : ten
    },{
        avalible : 100,
        minted   : 20,
        title    : 'eleven',
        img      : eleven
    },
    {
        avalible : 100,
        minted   : 20,
        title    : 'five',
        img      : five
    },
    {
        avalible : 100,
        minted   : 20,
        title    : 'ten',
        img      : ten
    }
];
