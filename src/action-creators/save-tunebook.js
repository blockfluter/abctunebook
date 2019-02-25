export const saveTunebook = (collection, name) => {
    return dispatch => {
        const tunes = collection.reduce((agg, tune) => {
            return (agg ? agg + '\n' : '') + tune.abc
        }, null)
        const a = document.createElement('a')
        a.href = `data:text/plain;charset=utf-8,${tunes}`
        a.download = name
        a.click()
    }
}
