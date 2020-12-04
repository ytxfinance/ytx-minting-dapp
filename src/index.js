import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import { Home } from './pages'
import { CardStoreProvider } from './store'

function App () {
    return (
        <div>
            <Switch>
                {/* <Route render={() => <h1>Default 404 page</h1>} /> */}
                <Route path="/" component={Home} />
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
