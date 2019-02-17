import React from 'react'
import { connect } from 'react-redux'
import actionCreators from './action-creators'

import { AcceptUrl } from './accept-url'
import { TuneDisplay } from './tune-display'

import style from './app.module.scss'

const App = props => {
    console.log(actionCreators);
    return (
        <div className={style.wrapper}>
            <AcceptUrl
                ok={url => props.loadTunebook(url)}
                okLabel="Okay"
                cancelLabel="Cancel"
            />
            <TuneDisplay abcText={props.abcText} />
        </div>
    )
}
const mapStateToProps = state => {
    return {
        abcText: state.abcText,
    }
}

const mapDispatchToProps = dispatch => ({
    loadTunebook(url) {
        dispatch(actionCreators.loadTunebook(url))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
