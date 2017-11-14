import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: '',
        }
    }
    render() {
        var buttonTitle = `添加第 ${this.state.items.length + 1} 个todo`
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Ge TODO</h1>
                </header>
                <TodoList todos={this.state.items} handleItem={this.handleItem} />
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
        var i = {
            text: this.state.text,
            id: Date.now(),
            finished: false
        }
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(i),
                text: ''
            }
        })
    }
    handleItem = (item) => {
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
}

class TodoList extends React.Component {
    render() {
        const items = this.props.todos.map(t => (
            <TodoItem key={t.id} item={t} handleItem={this.props.handleItem} />
        ))

        return (
            <ul>{items}</ul>
        )
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super()
        this.state = {
            text: props.item.text,
            id: props.item.id,
            finished: props.item.finished
        }
    }
    render() {
        var t = this.state
        var status = this.state.finished ? "todo-finished" : "todo-unfinished"
        var classList = `todo-item ${status}`

        return (
            <li className={classList}>
                <span>{t.text}</span>
                <button onClick={this.update}>完成</button>
            </li>
        )
    }
    update = (e) => {
        var state = {
            finished: !this.state.finished
        }
        this.setState(state, function () {
            this.props.handleItem(this.state)
        })
    }
}

export default App;
