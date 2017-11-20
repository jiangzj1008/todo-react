import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/index'

// 与下面的class写法一样
// const App = ({todos, actions}) => (
//     <div>
//         <Header addTodo={actions.addTodo} />
//         <MainSection todos={todos} actions={actions} />
//     </div>
// )

class App extends React.Component {
    render() {
        const {todos, actions} = this.props
        return (
            <div>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppContainer
