import React from 'react';
import styles from './header.css'

const Header = (props) => {

    const colourStyle = {
      borderColor: props.product.color,
      fontFamily: 'roboto'
    };

    const textStyle = {
      fontSize: '1.4rem',
      color: props.product.color,
      marginBottom: '.3rem'
    };

    return (
      <header className={styles.header} style={colourStyle}>
        <div style={textStyle}>{props.product.name}</div>     
      </header>
    )
};

export default Header;