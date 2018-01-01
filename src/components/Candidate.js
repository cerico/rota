import React from "react";
import { connect } from "react-redux";
const classNames = require("classnames");
import { Link } from "react-router-dom";
import MdHighlightOff from "react-icons/lib/md/highlight-off";
import { selectCandidate } from "../selectors/candidate";
import style from "./Candidate.css";

const Candidate = props => {
  return props.Candidate ? (
    <div>
      <div className={classNames(style.candidate, style.imageContainer)}>
        <img className={style.image} src={props.candidate.image} />
      </div>
      <div className={classNames(style.candidate, style.detail)}>
        <Link style={{ float: "right" }} to="/">
          <MdHighlightOff size={40} />
        </Link>
        <div className="change">
          <h1 className={style.candidateName}>
            {props.candidate.name}
            <span className={style.country}> ({props.candidate.country})</span>
          </h1>
          <div className={style.description} />
          <ul />
        </div>
      </div>
    </div>
  ) : null;
};

const mapStateToProps = (state, ownProps) => {
  return {
    candidate: selectCandidate(state.candidates, ownProps.match.params.id)
  };
};

export default connect(mapStateToProps)(Candidate);
