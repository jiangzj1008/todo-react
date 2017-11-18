import React, { Component } from 'react'
import './App.css'
import actions from './actions'

class App extends Component {
    constructor(props) {
        super(props)
        this.store = this.props.store
        this.state = {
            items: props.state.items,
            text: props.state.text
        }
    }
    render() {
        var buttonTitle = `添加`
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Ge TODO</h1>
                </header>
                <TodoList todos={this.state.items} updateItem={this.updateItem} deleteItem={this.deleteItem} />
                <div>
                    <input onChange={this.handleChange} value={this.state.text} placeholder="代办事项" />
                    <button onClick={this.handleSubmit}>{buttonTitle}</button>
                </div>
            </div>
        );
    }
    handleChange = (e) => {
        var state = {
            text: e.target.value
        }
        this.setState(state)
    }
    handleSubmit = (e) => {
        let action = actions.addTodo(this.state.text)
        this.store.dispatch(action)
        this.setState((prevState) => {
            return this.store.getState()
        })
    }
    updateItem = (item) => {
        var index = 0
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === item.id) {
                index = i
                break
            }
        }
        this.setState((prevState) => {
            prevState.items.splice(index, 1, item)
            return {
                items: prevState.items,
            }
        })
    }
    deleteItem = (item) => {
        var index = 0
        for (var i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id === item.id) {
                index = i
                break
            }
        }
        this.setState((prevState) => {
            prevState.items.splice(index, 1)
            return {
                items: prevState.items,
            }
        })
    }
}

class TodoList extends React.Component {
    render() {
        const items = this.props.todos.map(t => (
            <TodoItem key={t.id} item={t} updateItem={this.props.updateItem} deleteItem={this.props.deleteItem} />
        ))

        return (
            <ul>{items}</ul>
        )
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super()
        this.state = props.item
    }
    render() {
        var t = this.state
        var status = t.finished ? "todo-finished" : "todo-unfinished"
        var text = t.finished ? "未完成" : "完成"
        var classList = `todo-item ${status}`

        return (
            <li className={classList}>
                <div>
                    <p>{t.text}</p>
                    <button onClick={this.updateStatus}>{text}</button>
                    <button onClick={this.delete}>{"删除"}</button>
                </div>
                <div>
                    <p>{`${t.time} h`}</p>
                    <button onClick={this.updateTime}>{"-"}</button>
                    <button onClick={this.updateTime}>{"+"}</button>
                </div>
            </li>
        )
    }
    updateStatus = (e) => {
        var state = {
            finished: !this.state.finished
        }
        this.setState(state, function () {
            this.props.updateItem(this.state)
        })
    }
    delete = (e) => {
        this.props.deleteItem(this.state)
    }
    updateTime = (e) => {
        var op = e.target.innerHTML
        var step = 1
        if (op === "-") {
            step = -1
        }
        var t = this.state.time + step
        if (t < 0) {
            t = 0
        }
        var state = {time: t}
        this.setState(state, function () {
            this.props.updateItem(this.state)
        })
    }
}

export default App;
