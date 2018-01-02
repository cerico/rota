import React from "react";
import { connect } from "react-redux";
const classNames = require("classnames");
import styles from "./Candidates.css";
import NormalCard from "./cards";

const mapStateToProps = state => {
  return {
    accepted: state.accepted
  };
};

@connect(mapStateToProps, {})
export default class Candidates extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      general: {
        display: "flex"
      }
    };

    return (
      <div className={styles.grid} style={style.general}>
        {this.props.accepted.map((product, index) => (
          <NormalCard product={product} key={index} position="relative" z="0" />
        ))}
      </div>
    );
  }
}
