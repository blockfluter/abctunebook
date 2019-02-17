import * as serviceWorker from './serviceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './store';

import App from './app'
import './index.css'

/*
GetTunebook(
    'http://localhost/blendr/proxy.php?url=http://www.pghardy.net/concertina/tunebooks/pgh_session_tunebook.abc'
)
    .then(abc => {
        console.log('--->', abc)
    })
    .catch(message => {
        console.log(message)
    })
*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
