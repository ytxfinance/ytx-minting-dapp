import Web3 from 'web3';
import { ACTION_TYPES } from '../store/constants';

const CONFIRMATION_BLOCKS_NEEDED = 1;
const ACCOUNT_INFORMATION_INDEX  = 0;

export const setup = async (dispatch) => {
    dispatch({
        type    : ACTION_TYPES.LOADING,
        payload : true
    });
    if (window.ethereum) {
        ethereum.autoRefreshOnNetworkChange      = true;
        window.myWeb3                            = new Web3(ethereum);
        myWeb3.eth.transactionConfirmationBlocks = CONFIRMATION_BLOCKS_NEEDED; // Hard code number of blocks needed
        try {
            await ethereum.enable();
            ethereum.on('accountsChanged', function () {
                console.log('Account Changed!');
                window.location.reload();
            });
            dispatch({
                type    : ACTION_TYPES.SET_ACCOUNT,
                payload : ethereum.selectedAddress
            });
        } catch (error) {
            alert(
                'You must approve this dApp to interact with it, reload and try again',
            );
        }
    } else if (window.web3) {
        window.myWeb3 = new Web3(web3.currentProvider);
        let accounts  = await myWeb3.eth.getAccounts();
        dispatch({
            type    : ACTION_TYPES.SET_ACCOUNT,
            payload : accounts[ACCOUNT_INFORMATION_INDEX]
        });
    } else {
        console.log(
            'Non-Ethereum browser detected. You should consider trying MetaMask!',
        );
        alert(
            'Metamask not detected, install it or log in to use this dApp and reload the page.',
        );
    }
    dispatch({
        type    : ACTION_TYPES.LOADING,
        payload : false
    });
};