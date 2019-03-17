import React, { useEffect, useState } from 'react'
import { makeDomEditor } from '../abc-integration/make-dom-editor'

export const AbcControls = props => {
    const [abcText, setAbcText] = useState(props.abcText)

    useEffect(() => {
        makeDomEditor(props)
    })
    useEffect(() => {
        setAbcText(props.abcText)
    }, [props.abcText])

    return (
        <React.Fragment>
            <div className="col1">
                <div data-testid={props.midiId} id={props.midiId} />
                <textarea
                    readOnly={props.readOny}
                    data-testid={props.textId}
                    id={props.textId}
                    value={abcText}
                    onChange={e => setAbcText(e.target.value)}
                    onBlur={e => props.publishAbcChange(e.target.value)}
                />
                <div data-testid={props.warningsId} id={props.warningsId} />
            </div>
            <div className="col2">
                <div data-testid={props.canvasId} id={props.canvasId} />
            </div>
        </React.Fragment>
    )
}
