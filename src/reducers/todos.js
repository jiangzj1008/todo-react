import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const todos = function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    text: action.text
                }
            ]

        case DELETE_TODO:
            let newState_1 = state.filter((todo) => {
                return todo.id !== action.id
            })
            return newState_1

        case COMPLETE_TODO:
            let newState = state.map((todo) => {
                if (todo.id === action.id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return newState

        default:
            return state
    }
}

export default todos
