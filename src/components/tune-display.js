import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import 'abcjs/abcjs-midi.css'

import { makeDomEditor } from '../abc-integration/make-dom-editor'
import { setUrlList, getUrlList } from '../services/url-list-storage'

export const TuneDisplay = props => {
    const [abcText, setAbcText] = useState(props.abcText)

    useEffect(() => {
        makeDomEditor(props)
    })
    useEffect(() => {
        setAbcText(props.abcText)
    }, [props.abcText])
    useEffect(() => {
        setUrlList(props.collectionUrls);
    }, [props.collectionUrls])
 
    return (
        <div className="container">
            <div className="col1">
                <div data-testid={props.midiId} id={props.midiId} />
                <textarea
                    data-testid={props.textId}
                    id={props.textId}
                    value={abcText}
                    onChange={e => setAbcText(e.target.value)}
                />
                <div data-testid={props.warningsId} id={props.warningsId} />
            </div>
            <div className="col2">
                <div data-testid={props.canvasId} id={props.canvasId} />
            </div>
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
}

TuneDisplay.propTypes = {
    midiId: PropTypes.string,
    warningsId: PropTypes.string,
    textId: PropTypes.string,
    canvasId: PropTypes.string,
    abcText: PropTypes.string,
    collectionUrls: PropTypes.array,
}
