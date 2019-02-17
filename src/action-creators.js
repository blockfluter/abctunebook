import actions from './actions'
import { loadTunebookAction } from './loadTunebookAction';

function makeActionCreator(type, ...argNames) {
    return function(...args) {
        const action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

function xxx(tunes) {
    console.log(tunes);
    return {
        type: actions.UPDATE_TUNECOLLECTION,
        tunes
    }
}
export default {
    loadTunebook:loadTunebookAction,
    updateCollection:xxx
}
