import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const AcceptUrl = props => {
    const [inputValue, updateInput] = useState(props.url)
    return (
        <React.Fragment>
            <p>
                <span className="fa fa-comments" />
                &nbsp;Enter the URL address of an ABC tune or collection. &nbsp;
                <a href="https://www.google.com/search?q=abc+tunebook" target="_blank" rel="noopener noreferrer">
                    Find tunebooks
                </a>
            </p>
            <div className="controlbar">
                <input
                    value={inputValue}
                    onKeyDown={e => props.onKeyDown(e)}
                    onChange={e => updateInput(e.target.value)}
                />
                <button onClick={() => props.ok(inputValue)}>{props.okLabel}</button>
                <Link to={'/view'}>
                    <button>{props.cancelLabel}</button>
                </Link>

                <div className="links">
                    {props.collectionUrls.map((item, index) => {
                        return (
                            <div className='icon_link' key={index}>
                                <span className="fa fa-trash" onClick={() => props.deleteUrl(item)} />
                                <button onClick={() => props.ok(item)} >
                                    {item}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

AcceptUrl.defaultProps = {
    ok: () => {},
    onKeyDown: () => {},
    okLabel: '',
    cancelLabel: '',
    value: '',
    collectionUrls: [],
    deleteUrl: () => {},
}

AcceptUrl.propTypes = {
    ok: PropTypes.func,
    onKeyDown: PropTypes.func,
    okLabel: PropTypes.string,
    cancelLabel: PropTypes.string,
    value: PropTypes.string,
    collectionUrls: PropTypes.array,
    deleteUrl: PropTypes.func,
}
