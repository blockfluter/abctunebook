import actions from '../actions'
import { loadTunebook } from './load-tunebook';
import { saveTunebook } from './save-tunebook';

function updateCollection(tunes, url) {
    return {
        type: actions.updateCollection,
        tunes,
        url
    }
}
function selectTuneIndex(index) {
    return {
        type: actions.selectTuneIndex,
        index:index.toString()
    }    
}
function selectCopyIndex(index) {
    return {
        type: actions.selectCopyIndex,
        index: index.toString()
    }    
}
function copyTune(abc, attr, tuneIndex) {
    console.log(tuneIndex);
    return {
        type: actions.copyTune,
        abc,
        attr,
        tuneIndex: tuneIndex!== undefined ? tuneIndex.toString() : undefined,
    }    
}   
function saveCollectionUrls() {
    return {
        type: actions.saveCollectionUrls
    }
}
function publishAbcChange(abc){
    return {
        type: actions.publishAbcChange,
        abc
    }
}

function deleteUrl(url) {
    return {
        type: actions.deleteUrl,
        url
    }
}

export default {
    loadTunebook,
    updateCollection,
    selectTuneIndex,
    selectCopyIndex,
    copyTune,
    saveTunebook,
    saveCollectionUrls,
    deleteUrl,
    publishAbcChange,
}