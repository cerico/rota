import React from "react";
import CardBody from "./body";
import Header from "./header";
import Footer from "./footer";
import styles from "./card.css";
const classNames = require("classnames");

export default class Card extends React.Component {
  render() {
    const classes = classNames(styles.card, this.props.classes);
    const product = this.props.product;
    const cardStyle = {
      background: product.background,
      color: product.color,
      position: this.props.position,
      zIndex: this.props.z
    };

    return (
      <a href={product.url} className={classes} style={cardStyle}>
        <div className={styles.inner}>
          <Header {...this.props} />
          <CardBody {...this.props} />
          <Footer {...this.props} />
        </div>
      </a>
    );
  }
}
