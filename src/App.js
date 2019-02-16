import React from 'react'
import { connect } from 'react-redux';
import actions from './action-creators';

import { AcceptUrl } from './accept-url'
import { TuneDisplay } from './tune-display'

import style from './app.module.scss'

const App = (props) => {
    return (
        <div className={style.wrapper}>
            <AcceptUrl ok={url => props.loadTunebook(url)} okLabel="Okay" cancelLabel="Cancel" />
            <TuneDisplay abcText="T:Title"/>
        </div>
    )
}
const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = dispatch => ({
    loadTunebook(url) {
        dispatch(actions.loadTunebook(url));
    }
});
export default connect(null, mapDispatchToProps)(App);