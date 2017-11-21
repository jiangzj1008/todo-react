import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Filter from './Filter'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const TODO_FILTERS = {
    [SHOW_ALL]: () => true,
    [SHOW_ACTIVE]: todo => !todo.completed,
    [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
    constructor(props) {
        super()
        this.state = {
            filter: SHOW_ALL
        }
    }

    static propTypes = {
        todos: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
    }

    onShow = (filter) => {
        this.setState({filter})
    }

    render() {
        const {todos, actions} = this.props
        const {filter} = this.state
        const todoOnShow = todos.filter(TODO_FILTERS[filter])
        const itemlist = todoOnShow.map((todo) =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
        )
        return (
            <section className="main">
                <ul className="todo-list">
                    {itemlist}
                </ul>
                <Filter onShow={this.onShow} />
            </section>
        )
    }
}


export default MainSection
