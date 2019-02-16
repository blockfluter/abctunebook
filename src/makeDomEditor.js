import abcjs from 'abcjs/midi'

export function makeDomEditor(props) {
    return new abcjs.Editor(props.textId, {
        midi_id: props.midiId,
        warnings_id: props.warningsId,
        canvas_id: props.canvasId,
        generate_midi: true,
        abcjsParams: {
            generateInline: true,
            generateDownload: false,
        },
    })
}
