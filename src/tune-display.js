import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import 'abcjs/abcjs-midi.css'

import { makeDomEditor } from './makeDomEditor'

export const TuneDisplay = props => {
    const [domEditor, setDomEditor] = useState(null)
    const [abcText, setAbcText] = useState(props.abcText);
    
    useEffect(() => {
        makeDomEditor(props);
    })
    useEffect(() => {
        setAbcText(props.abcText);
    })
    return (
        <React.Fragment>
            <textarea
                data-testid={props.textId}
                id={props.textId}
                value={abcText}
                onChange={e => setAbcText(e.target.value) }
            />
            <div
                data-testid={props.warningsId}
                id={props.warningsId}
            />
            <div
                data-testid={props.midiId}
                id={props.midiId}
            />
            <div
                data-testid={props.canvasId}
                id={props.canvasId}
            />
        </React.Fragment>
    )
}

TuneDisplay.defaultProps = {
    textId: 't1',
    midiId: 'm1',
    warningsId: 'w1',
    canvasId: 'c1',
    abcEditor: false,
}

TuneDisplay.propTypes = {
    midiId: PropTypes.string,
    warningsId: PropTypes.string,
    textId: PropTypes.string,
    canvasId: PropTypes.string,
    abcText: PropTypes.string
}
