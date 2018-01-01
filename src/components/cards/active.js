import React from 'react';
import { Link } from 'react-router-dom';
import Card from './index';
import CardBody from './body';
import Header from './header';
import Footer from './footer';
import { DropTarget, DragSource } from 'react-dnd';
import styles from './card.css'
const classNames = require('classnames');

const listSource = {
  beginDrag(props) {
    props.changeDisplay({opacity:0})
    // props.moveCard(props.product, 'TRANSIT');
    return {
      id: "l",
      x: "f"
    };
  },
  endDrag(props,monitor) {
    
    let width = window.innerWidth ||
       document.documentElement.clientWidth || 
       document.body.clientWidth
    props.changeDisplay({opacity:1})
    if (monitor.getClientOffset() && monitor.getClientOffset().x < 320) {
      props.moveCard(props.product, 'ACCEPTED');
    } else if (monitor.getClientOffset() && monitor.getClientOffset().x > (width - 320)) {
      props.moveCard(props.product, 'REJECTED');
    } 
  }
};

const listTarget = {}

@DropTarget('list', listTarget, connectDragSource => ({
  connectDropTarget: connectDragSource.dropTarget(),
}))
@DragSource('list', listSource, (connectDragSource, monitor) => ({
  connectDragSource: connectDragSource.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class ProductItem extends React.Component  {

  render() {
    const { connectDropTarget, connectDragSource, product, x, styling, isDragging } = this.props;
    
    const classes = classNames(styles.card,this.props.classes)

    const cardStyle = {
      background: this.props.product.background,
      color: this.props.product.color,
      opacity: this.props.opacity
    };

    return connectDragSource(connectDropTarget(
      <a href={this.props.product.url} className={classes} style={cardStyle}>
        <div className={styles.inner}>
          <Header {...this.props}/>
          <CardBody {...this.props}/>
          <Footer {...this.props}/>
        </div>
      </a>
    ))
  }
}
      
   