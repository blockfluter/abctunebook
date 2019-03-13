import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import actionCreators from './action-creators/action-creators'

import { AcceptUrl } from './components/accept-url'
import { TuneDisplay } from './components/tune-display'
import { TuneSelect } from './components/tune-select'
import { setUrlList } from './services/url-list-storage'

import './components/main.scss'
import 'font-awesome/css/font-awesome.min.css'

const acceptUrl = props => {
    return (
        <AcceptUrl
            ok={url => props.loadTunebook(props, url)}
            deleteUrl={url => props.deleteUrl(url)}
            url={props.url}
            collectionUrls={props.collectionUrls}
            okLabel="Okay"
            cancelLabel="Cancel"
        />
    )
}

const tuneSelect = props => {
    return (
        <React.Fragment>
            <TuneSelect
                {...props}
                titles={props.titles}
                tuneIndex={props.tuneIndex}
                selectTune={x => props.selectTuneIndex(x)}
                selectCopy={x => props.selectCopyIndex(x)}
                copyTune={x => props.copyTune(props.abcText, props.url, props.tuneIndex)}
                abcText={props.abcText}
                copies={props.copies}
                copyIndex={props.copyIndex}
                saveTunebook={props.saveTunebook}
                canCopy={props.canCopy}
            />
            <TuneDisplay abcText={props.abcText} collectionUrls={props.collectionUrls} />
        </React.Fragment>
    )
}

const App = props => {
    useEffect(() => {
        setUrlList(props.collectionUrls)
    }, [props.collectionUrls])
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/load" />} />
                <Route exact path="/view" render={() => tuneSelect(props)} />
                <Route exact path="/load" render={() => acceptUrl(props)} />
            </Switch>
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        abcText: state.abcText,
        titles: state.titles,
        tuneIndex: state.tuneIndex,
        copies: state.copies,
        url: state.url,
        copyIndex: state.copyIndex,
        collectionUrls: state.collectionUrls,
        canCopy: state.canCopy,
    }
}

const mapDispatchToProps = dispatch => ({
    loadTunebook(props, url) {
        dispatch(actionCreators.loadTunebook(props, url))
    },
    selectTuneIndex(index) {
        dispatch(actionCreators.selectTuneIndex(index))
    },
    selectCopyIndex(index) {
        dispatch(actionCreators.selectCopyIndex(index))
    },
    copyTune(abc, attribution, tuneIndex) {
        dispatch(actionCreators.copyTune(abc, attribution, tuneIndex))
    },
    saveTunebook(copies, title) {
        dispatch(actionCreators.saveTunebook(copies, title))
    },
    deleteUrl(url) {
        dispatch(actionCreators.deleteUrl(url))
    },
})

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
)
