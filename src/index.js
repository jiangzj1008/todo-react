import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)
const rootEl = document.querySelector('#root')

const render = () => ReactDOM.render(
    <App
        state={store.getState()}
        store={store}
    />,
    rootEl
)

store.subscribe(render)
render()
