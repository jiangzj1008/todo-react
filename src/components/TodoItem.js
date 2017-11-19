import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
    }

    handleDelete = () => {
        const {todo, deleteTodo} = this.props
        deleteTodo(todo.id)
    }

    render() {
        const {todo} = this.props
        return (
            <li>
                <span>{todo.text}</span>
                <button onClick={this.handleDelete}>del</button>
            </li>
        )
    }
}

export default TodoItem
