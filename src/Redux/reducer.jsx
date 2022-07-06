let defState = {
    count: 0
}

const reducer = (state = defState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.pyload }
            break;
        case "DECREMENT":
            return { ...state, count: state.count - action.pyload }
            break;

        default:
            return state
            break;
    }
}

export default reducer;