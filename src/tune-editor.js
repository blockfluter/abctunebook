import abcjs from 'abcjs/midi'

export const TuneEditor = (abc) => {
    let tuneBook = new abcjs.TuneBook(abc);
    function titles(){
        return tuneBook.tunes.map(
            (t, i) => `${Number(i) + 1}. ${t.title}`
        )
    }
    function tuneCount(){
        return tuneBook.tunes.length
    }
    const tuneAbc = n => {
        return n >= 0 && n < tuneBook.tunes.length
            ? tuneBook.tunes[n].abc
            : ''
    }
    return Object.freeze({
        titles,
        tuneCount,
        tuneAbc
    })
}

