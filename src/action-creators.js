import actions from './actions'
import { loadTunebookAction } from './loadTunebookAction';



function updateCollection(tunes) {
    return {
        type: actions.UPDATE_TUNECOLLECTION,
        tunes
    }
}
function selectTuneIndex(index) {
    return {
        type: actions.SELECT_TUNEINDEX,
        index
    }    
}
export default {
    loadTunebook:loadTunebookAction,
    updateCollection,
    selectTuneIndex
}
