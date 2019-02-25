import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const AcceptUrl = props => {
    const [inputValue, updateInput] = useState(props.url)
    return (
        <div className='controlbar'>
            <input
                value={inputValue}
                onKeyDown={e => props.onKeyDown(e)}
                onChange={e => updateInput(e.target.value)}
            />
            <button onClick={() => props.ok(inputValue)}>{props.okLabel}</button>
            <Link to={'/'}>
                <button>{props.cancelLabel}</button>
            </Link>
            <div className="links">
                {props.collectionUrls.map((item, index) => {
                    return (
                        <a href="#" onClick={() => props.ok(item)} key={index}>
                            {item}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

AcceptUrl.defaultProps = {
    ok: () => {},
    onKeyDown: () => {},
    okLabel: '',
    cancelLabel: '',
    value: '',
    collectionUrls: [],
}

AcceptUrl.propTypes = {
    ok: PropTypes.func,
    onKeyDown: PropTypes.func,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    value: PropTypes.string,
    collectionUrls: PropTypes.array,
}
