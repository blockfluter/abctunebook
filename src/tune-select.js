import React from 'react'
import styles from './tune-select.module.scss'

export const TuneSelect = props => {
    return (
        <select onChange={(e)=>props.selectTune(e.target.value)}>
            {props.titles.map((t, i) => (
                <option key={i} value={i}>
                    {t}
                </option>
            ))}
        </select>
    )
}
TuneSelect.defaultProps = {
    titles: [],
    selectTune: () => { },
};