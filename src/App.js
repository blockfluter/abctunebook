import React from 'react'
import { connect } from 'react-redux'
import actionCreators from './action-creators'

import { AcceptUrl } from './accept-url'
import { TuneDisplay } from './tune-display'
import { TuneSelect } from './tune-select'

import style from './app.module.scss'

const App = props => {
    return (
        <div className={style.wrapper}>
            <AcceptUrl
                ok={url => props.loadTunebook(url)}
                okLabel="Okay"
                cancelLabel="Cancel"
            />
            <TuneSelect
                titles={props.titles}
                selectTune={x => props.selectTuneIndex(x)}
            />
            <TuneDisplay abcText={props.abcText} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        abcText: state.abcText,
        titles: state.titles,
    }
}

const mapDispatchToProps = dispatch => ({
    loadTunebook(url) {
        dispatch(actionCreators.loadTunebook(url))
    },
    selectTuneIndex(index) {
        dispatch(actionCreators.selectTuneIndex(index))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
