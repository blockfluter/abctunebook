import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AcceptUrl = props => {
    const [inputValue, updateInput] = useState(props.value)
    return (
        <React.Fragment>
            <input
                value={inputValue}
                onKeyDown={e => props.onKeyDown(e)}
                onChange={e => updateInput(e.target.value)}
            />
            <button onClick={() => props.ok(inputValue)}>
                {props.okLabel}
            </button>
            <button onClick={() => props.cancel()}>
                {props.cancelLabel}
            </button>
        </React.Fragment>
    )
}

AcceptUrl.defaultProps = {
    ok: () => {},
    cancel: () => {},
    onKeyDown: () => {},
    okLabel: '',
    cancelLabel: '',
    value: '',
}

AcceptUrl.propTypes = {
    ok: PropTypes.func,
    cancel: PropTypes.func,
    onKeyDown: PropTypes.func,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    value: PropTypes.string,
}
