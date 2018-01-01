import React from "react";
import { Link } from "react-router-dom";
import { DropTarget, DragSource } from "react-dnd";
const classNames = require("classnames");
import Card from "./index";
import CardBody from "./body";
import Header from "./header";
import Footer from "./footer";
import styles from "./card.css";

const source = {
  beginDrag(props) {
    props.changeDisplay({ opacity: 0 });
    return {
      id: "l",
      x: "f"
    };
  },
  endDrag(props, monitor) {
    let width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    props.changeDisplay({ opacity: 1 });
    if (monitor.getClientOffset() && monitor.getClientOffset().x < 320) {
      props.moveCard(props.product, "ACCEPTED");
    } else if (
      monitor.getClientOffset() &&
      monitor.getClientOffset().x > width - 320
    ) {
      props.moveCard(props.product, "REJECTED");
    }
  }
};

@DropTarget("l", {}, connectDragSource => ({
  connectDropTarget: connectDragSource.dropTarget()
}))
@DragSource("l", source, (connectDragSource, monitor) => ({
  connectDragSource: connectDragSource.dragSource()
}))
export default class ProductItem extends React.Component {
  render() {
    const {
      connectDropTarget,
      connectDragSource,
      product,
      opacity
    } = this.props;

    const classes = classNames(styles.card, this.props.classes);

    const cardStyle = {
      background: product.background,
      color: product.color,
      opacity: opacity
    };

    return connectDragSource(
      connectDropTarget(
        <a href={product.url} className={classes} style={cardStyle}>
          <div className={styles.inner}>
            <Header {...this.props} />
            <CardBody {...this.props} />
            <Footer {...this.props} />
          </div>
        </a>
      )
    );
  }
}
