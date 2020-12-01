import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import { Home } from './pages/Home'
import { CardStoreProvider } from './store'

function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route render={() => <h1>Default 404 page</h1>} />
			</Switch>
		</div>
	)
}

ReactDOM.render(
	<CardStoreProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</CardStoreProvider>,
	document.getElementById('root'),
)
