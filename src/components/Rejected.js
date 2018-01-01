import React from 'react';
import { connect } from 'react-redux';
const classNames = require('classnames');
import styles from './Candidates.css';
import NormalCard from './Cards';


const mapStateToProps = (state) => {
  return ({
      rejected: state.rejected
    })
}

@connect(mapStateToProps, {})
export default class Candidates extends React.Component  {

  constructor(props) {
    super(props);

  }

  render (){
    
    const style = {
      general: {
        display: 'flex'
      }
    }
  
    return(
      <div className={styles.grid} style={style.general}>
        {
          this.props.rejected.map((product, index) =>
            <NormalCard 
              product={product}
              key = {index}
              position="relative"
              z="0"
            />
          ) 
        }
      </div> 
    )
  }
}