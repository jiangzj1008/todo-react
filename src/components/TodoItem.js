import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/TodoItem.css'

class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
    }

    handleDelete = () => {
        const {todo, deleteTodo} = this.props
        deleteTodo(todo.id)
    }

    handleComplete = () => {
        const {todo, completeTodo} = this.props
        completeTodo(todo.id)
    }

    render() {
        const {todo} = this.props
        var c = todo.completed? 'completed' : 'todo'
        return (
            <li>
                <span className={c}>{todo.text}</span>
                <button onClick={this.handleComplete}>complete</button>
                <button onClick={this.handleDelete}>del</button>
            </li>
        )
    }
}

export default TodoItem
