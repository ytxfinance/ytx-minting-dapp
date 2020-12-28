import './index.css'
import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import MyWeb3 from 'web3'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home } from './pages/Home'
import { store, StoreProvider } from './store'
import config from './config'

const App = () => {
	const { state, dispatch } = useContext(store)

	useEffect(() => setup(), [])
	useEffect(() => {
		if (state.ytx) getCards()
	}, [state.ytx])

	const setup = async () => {
		// Create the contract instance
		if (typeof window.ethereum !== 'undefined') {
			window.web3 = new MyWeb3(window.ethereum)
			let accs
			try {
				accs = (await ethereum.send('eth_requestAccounts')).result
			} catch (error) {
				alert('You must approve this dApp to interact with it')
			}
			window.web3.eth.defaultAccount = accs[0]

			// TODO remove this in the final dapp when using mainnet
			if (Number(window.ethereum.networkVersion) != 3) {
				return alert('You must be connected to the Ropsten network to use this dapp')
			}

			await setupContracts(
				config.ytxAddress,
				config.yfsAddress,
				config.nftManager,
			)
			ethereum.on('accountsChanged', () => {
				window.location.reload()
			})
			dispatch({
				type: 'SET_SETUP_COMPLETE',
				payload: {
					setupComplete: true,
				}
			})
		} else {
			alert('You must have metamask installed to use this dApp')
		}
	}

	const setupContracts = async (ytxAddress, yfsAddress, _nftManager) => {
		const ytx = new window.web3.eth.Contract(
			config.ytxAbi,
			ytxAddress,
		)
		const yfs = new window.web3.eth.Contract(
			config.yfsAbi,
			yfsAddress,
		)
		const nftManager = new window.web3.eth.Contract(
			config.nftManagerAbi,
			_nftManager,
		)
		dispatch({
			type: 'SET_CONTRACTS',
			payload: {
				ytx,
				yfs,
				nftManager,
			},
		})
	}

	const getCards = async () => {
		const baseURI = await state.nftManager.methods.baseURI().call()
		const uris = await state.nftManager.methods.getTokenURIs().call()
		// Waits for all promises to finish
		let combined = await Promise.all(uris.map(async (uri, i) => {
			const blueprint = await state.nftManager.methods.getBlueprint(uri).call()
			const req = await fetch(baseURI + uri)
			const res = await req.json()
			return {
				tokenURI: uri,
				attributes: res.attributes,
				description: res.description,
				img: res.image,
				title: res.name,
				total: blueprint[0],
				// mintMax - currentMint
				minted: blueprint[0] - blueprint[1],
				requiredYTX: window.web3.utils.fromWei(blueprint[2]),
				requiredYFS: window.web3.utils.fromWei(blueprint[3]),
				isAvailable: blueprint[0] != blueprint[1],
			}
		}))
		dispatch({
			type: 'SET_CARDS',
			payload: {
				cards: combined,
			},
		})
	}

	return (
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	)
}

ReactDOM.render(
	<StoreProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StoreProvider>,
	document.getElementById('root'),
)
