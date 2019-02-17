import actions from './actions'

const reducerFunctions = {
    [actions.LOAD_TUNEBOOK]: (state, action) => {
        return state
    },
    [actions.UPDATE_TUNECOLLECTION]: (state, action) => {
        return { ...state, tunes: action.tunes, abcText:action.tunes.tuneAbc(0) }
    },
}

export const reducer = (state, action) => {
    if (reducerFunctions[action.type]) {
        return reducerFunctions[action.type](state, action)
    }
    console.log('nada', action)
    return state
}
