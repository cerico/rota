import React from 'react';

var classNames = require('classnames');

const WideLogo = ({product}) => {
   
    let useStyle
    var imgStyle = {
      backgroundImage: 'url(\'http://' + window.location.host + '/public/' + product.logo + '\')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '100%',
      fontSize:'0px'
    };
    var divStyle = {
      display: 'inline-block',
      position: 'relative',
      height: '174px',
      marginLeft: '10px',
      marginBottom: '16px'
    };
    var numStyle = {
      fontSize: '6rem',
      borderRadius: '50%',
      margin: '0 auto',
      marginTop: '0px',
      width: '50%',
      height: '80%',
      marginTop: '14px',
      textAlign: 'center',
      paddingTop: '19%',
      border: '2px solid',
      marginLeft: '60px'
    }

    product.logo ? 
      useStyle = imgStyle
      : useStyle = numStyle


    return (
      <div style={divStyle}>
        <div style={useStyle}>{product.number}</div>
      </div>
    )
};

export default WideLogo
