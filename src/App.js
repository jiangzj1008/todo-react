import React, { Component } from 'react';
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
        this.state = {
            text: props.item.text,
            id: props.item.id,
            finished: props.item.finished
        }
    }
    render() {
        var t = this.state
        var status = t.finished ? "todo-finished" : "todo-unfinished"
        var text = t.finished ? "未完成" : "完成"
        var classList = `todo-item ${status}`

        return (
            <li className={classList}>
                <p>{t.text}</p>
                <button onClick={this.update}>{text}</button>
                <button onClick={this.delete}>{"删除"}</button>
            </li>
        )
    }
    update = (e) => {
        console.log('change');
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
}

export default App;
