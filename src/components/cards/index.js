import React from 'react';
import CardBody from './body';
import Header from './header';
import Footer from './footer';
import styles from './card.css'
const classNames = require('classnames');

export default class Card extends React.Component {

  render(){

    const classes = classNames(styles.card,this.props.classes)
    
    const cardStyle = {
      background: this.props.product.background,
      color: this.props.product.color,
      position: this.props.position,
      zIndex: this.props.z
    };

    return (
      <a href={this.props.product.url} className={classes} style={cardStyle}>
        <div className={styles.inner}>
          <Header {...this.props}/>
          <CardBody {...this.props}/>
          <Footer {...this.props}/>
        </div>
      </a>
    )
  }
}