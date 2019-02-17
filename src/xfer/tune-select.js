import React, { Component } from "react";
import { connect } from "react-redux";
import { changeTune } from "../../store";
import styles from "./styles.module.scss";
import IconButton from "../iconButton"
import Midi from "../midi";
import BookBar from "../bookbar";

class TuneSelect extends Component {
    constructor(props) {
        super(props);
	    this.refSelect = React.createRef();
	    this.previousTune = this.previousTune.bind(this);
	    this.nextTune = this.nextTune.bind(this);
    }
    previousTune() {
        const index = Math.max(this.props.tuneIndex - 1, 0);
        this.props.changeTune(index);
    }
    nextTune() {
        const index = Math.min(
            this.props.tuneIndex + 1,
            this.props.titles.length - 1
        );
        this.props.changeTune(index);
    }
    render() {
        return (
            <div className={styles.buttonbar}>
                <IconButton {...{ click: this.previousTune, icon: "arrow-left" }}/>
                <IconButton {...{ click: this.nextTune, icon: "arrow-right" }}/>
                <select
                    ref={this.refSelect}
                    id="tunes"
                    value={this.props.tuneIndex}
                    onChange={() =>
                        this.props.changeTune(this.refSelect.current.value)
                    }>
                    {this.props.titles.map((t, i) => (
                        <option key={i} value={i}>{t}</option>
                    ))}
                </select>
                <Midi />
                <BookBar/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        titles: state.titles,
        tuneIndex: state.tuneIndex
    };
}

const mapDispatchToProps = dispatch => ({
    changeTune(index) {
        dispatch(changeTune(index));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TuneSelect);
