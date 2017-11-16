import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import counter from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counter)
const rootEl = document.querySelector('#root')

const render = () => ReactDOM.render(
    <App />,
    rootEl
)

render()
store.subscribe(render)
registerServiceWorker();
