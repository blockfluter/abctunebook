import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const controls = props => {
    return (
        <React.Fragment>
            <span className='fa fa-arrow-left'    enabled={(props.tuneIndex > 0).toString()}
                onClick={() => props.selectTune(Math.max(0, props.tuneIndex - 1))}
            />
            <span className='fa fa-arrow-right'
                enabled={(props.tuneIndex < props.titles.length - 1).toString()}
                onClick={() =>
                    props.selectTune(Math.min(props.titles.length - 1, props.tuneIndex + 1))
                }
            />
            <span>
                <label>Originals:</label>
                <select onChange={e => props.selectTune(e.target.value)} value={props.tuneIndex}>
                    {props.titles.map((t, i) => (
                        <option key={i} value={i}>
                            {t}
                        </option>
                    ))}
                </select>
            </span>
            {props.canCopy === true && (
                <button onClick={() => props.copyTune(props.abcText, 'xxx')}><i className='fa fa-copy'/> Copy</button>
            )}
        </React.Fragment>
    )
}

const copyControls = props => {
    return (
        <React.Fragment>
            <span>
                <label>Copies:</label>
                <select onChange={e => props.selectCopy(e.target.value)} value={props.copyIndex}>
                    {props.copies.map((t, i) => (
                        <option key={i} value={i}>
                            {[i + 1, ': ', t.title].join('')}
                        </option>
                    ))}
                </select>
            </span>
            <button
                onClick={() => {
                    props.saveTunebook(props.copies, 'tunebook')
                }}
            >
             <i className='fa fa-download'/>   Download
            </button>
        </React.Fragment>
    )
}

export const TuneSelect = props => {
    return (
        <div className="controlbar">
            <span role="button">
                <Link to="/load">Load</Link>
            </span>
            {props.titles.length > 0 && controls(props)}
            {props.copies.length > 0 && copyControls(props)}
        </div>
    )
}
TuneSelect.defaultProps = {
    titles: [],
    selectTune: () => {},
    canCopy: true,
    copyTune: () => {},
    abcText: '',
    selectCopy: () => {},
    saveTunebook: () => {},
}

TuneSelect.propTypes = {
    titles: PropTypes.array,
    selectTune: PropTypes.func,
    canCopy: PropTypes.bool,
    copyTune: PropTypes.func,
    abcText: PropTypes.string,
    selectCopy: PropTypes.func,
    saveTunebook: PropTypes.func,
}
