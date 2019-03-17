import actions from '../actions'


const updateCollection = (state, action) => {

    var collectionUrls = [...state.collectionUrls,action.url].filter((value, index, self)=> { 
        return self.indexOf(value) === index;
    }); 
    
    return {
        ...state,
        tunes: action.tunes,
        abcText: action.tunes.tuneAbc(0),
        titles: action.tunes.titles(),
        tuneIndex: '0',
        url: action.url,
        collectionUrls
    }
}
const selectTuneIndex= (state, action) => {
    const matches = state.copies.filter((item, index) => {
        return action.index === item.index && state.url === item.attribution;
    });
    return {
        ...state,
        abcText: state.tunes.tuneAbc(action.index),
        tuneIndex: action.index.toString(),
        canCopy: matches.length === 0
    }
}
const selectCopyIndex= (state, action) => {
    return {
        ...state,
        abcText: state.copies[action.index].abc,
        copyIndex: action.index,
    }
}
const publishAbcChange= (state, action) => {
    return {
        ...state,
        abcText: action.abc,
    }
}
const copyTune = (state, action) => {
    console.log(action);
    return {
        ...state,
        copyIndex: state.copies.length,
        canCopy: false,
        copies: [...state.copies, {
            abc: action.abc.replace(/\nZ.*/, `$&\nZ:taken from ${action.attr}`),
            attribution: action.attr,
            index: action.tuneIndex!== undefined ? action.tuneIndex.toString() : undefined,
            title: action.abc.match(/\nT:(.*)/)[1],
        }]
    }
}
const deleteUrl = (state, action) => {
    return {
        ...state,
        collectionUrls: state.collectionUrls.filter(item=>item!==action.url)
    }
}

const reducerFunctions = {
    [actions.updateCollection]: updateCollection,
    [actions.selectTuneIndex]: selectTuneIndex,
    [actions.selectCopyIndex]: selectCopyIndex,
    [actions.copyTune]: copyTune,
    [actions.deleteUrl]: deleteUrl,
    [actions.publishAbcChange]: publishAbcChange,
}

export const reducer = (state, action) => {
//    console.log(state, action)
    if (reducerFunctions[action.type]) {
        const result = reducerFunctions[action.type](state, action)
//        console.log("R:", result);
        return result;
    }
    return state
}
