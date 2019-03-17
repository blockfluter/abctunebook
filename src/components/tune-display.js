import React from 'react'
import PropTypes from 'prop-types'
import { AbcControls } from './abc-controls'
import 'abcjs/abcjs-midi.css'

export const TuneDisplay = props => {

    return (
        <div className="container">
            <AbcControls {...props}/>
        </div>
    )
}

TuneDisplay.defaultProps = {
    textId: 't1',
    midiId: 'm1',
    warningsId: 'w1',
    canvasId: 'c1',
    abcEditor: false,
    collectionUrls: [],
    soundFontUrl: '',
    publishAbcChange: () => { },
    readOnly: true,
}

TuneDisplay.propTypes = {
    midiId: PropTypes.string,
    warningsId: PropTypes.string,
    textId: PropTypes.string,
    canvasId: PropTypes.string,
    abcText: PropTypes.string,
    collectionUrls: PropTypes.array,
    publishAbcChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
}
