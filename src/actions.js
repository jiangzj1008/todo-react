const addTodo = (text) => ({
    type: 'ADD_TODO',
    payload: {
        id: Date.now(),
        text
    }
})

const actions = {
    addTodo: addTodo,
}

export default actions
