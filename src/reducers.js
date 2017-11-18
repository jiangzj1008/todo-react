const defaultState = {
    items: [],
    text: '',
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let {text, id} = action.payload
            let item = {
                text: text,
                id: id,
                finished: false,
                time: 0
            }
            let newState = Object.assign({}, state, {
                items: state.items.concat(item),
                text: ''
            })
            return newState
        default:
            return state
    }
}


export default reducer;
