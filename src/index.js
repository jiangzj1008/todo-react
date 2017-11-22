import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import App from './containers/App'
import MarkdownEditor from './components/Editor'
import reducer from './reducers/index'

const store = createStore(reducer)
const rootEl = document.querySelector('#root')

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Todo</Link></li>
                    <li><Link to="/editor">Editor</Link></li>
                </ul>
                <Route exact path="/" component={App}/>
                <Route path="/editor" component={MarkdownEditor}/>
            </div>
        </Router>
    </Provider>,
    rootEl
)
