import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { AbcControls } from './abc-controls'
import 'abcjs/abcjs-midi.css'

export const TuneEdit = props => {
    const fixedElement = React.createRef()
    const scrollingElement = React.createRef()

    useEffect(() => {
        if (scrollingElement && fixedElement) {
            scrollingElement.current.style.marginTop = `${fixedElement.current.clientHeight}px`
        }
    })
    return (
        <React.Fragment>
            <div ref={fixedElement} className="controlbar">
                <Link to="/load">Load</Link>
            </div>
            <div ref={scrollingElement} className="container">
                <AbcControls {...props} />
            </div>
        </React.Fragment>
    )
}

TuneEdit.defaultProps = {
    textId: 't1',
    midiId: 'm1',
    warningsId: 'w1',
    canvasId: 'c1',
    abcEditor: false,
    collectionUrls: [],
    soundFontUrl: '',
    publishAbcChange: () => {},
    readOnly: false,
}

TuneEdit.propTypes = {
    midiId: PropTypes.string,
    warningsId: PropTypes.string,
    textId: PropTypes.string,
    canvasId: PropTypes.string,
    abcText: PropTypes.string,
    collectionUrls: PropTypes.array,
    publishAbcChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
}
