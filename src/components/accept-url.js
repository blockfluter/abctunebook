import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const AcceptUrl = props => {
    const [inputValue, updateInput] = useState(props.url)
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
                <span className="fa fa-comments" />
                &nbsp;Enter the URL address of an ABC tune or collection. &nbsp;
                <a
                    href="https://www.google.com/search?q=abc+tunebook"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Find tunebooks
                </a>
                <div>
                    <input
                        placeholder="http://tunebook-to-read"
                        value={inputValue}
                        onKeyDown={e => props.onKeyDown(e)}
                        onChange={e => updateInput(e.target.value)}
                    />
                    <button onClick={() => props.ok(inputValue)}>{props.okLabel}</button>
                    <Link to={'/view'}>
                        <button>{props.cancelLabel}</button>
                    </Link>
                </div>
            </div>
            <div ref={scrollingElement} className="container links">
                {props.collectionUrls.map((item, index) => {
                    return (
                        <div className="icon_link" key={index}>
                            <span className="fa fa-trash" onClick={() => props.deleteUrl(item)} />
                            <button onClick={() => props.ok(item)}>{item}</button>
                        </div>
                    )
                })}
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
