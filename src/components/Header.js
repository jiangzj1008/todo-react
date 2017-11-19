import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
        text: PropTypes.string,
    }

    state = {
        text: this.props.text || ''
    }

    handleSubmit = (e) => {
        const text = this.state.text.trim()
        if (text.length > 0) {
            this.props.addTodo(text)
        }
        let newState = {
            text: ''
        }
        this.setState(newState)
    }

    handleChange = e => {
        let val = e.target.value
        let newState = {
            text: val
        }
        this.setState(newState)
    }

    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    placeholder="What needs to be done?"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>add</button>
            </header>
        )
    }
}
