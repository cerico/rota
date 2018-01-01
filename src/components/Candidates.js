import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
const classNames = require('classnames');
const FontAwesome = require('react-fontawesome');
import styles from './Candidates.css';
import NormalCard from './Cards';
import ActiveCard from './Cards/active';
import { moveCard } from '../state/actions/candidates';
import CandidateSquare from './CandidateSquare';
import {activeCandidate, getImage} from '../utils'

const mapStateToProps = (state) => {
  console.log(state)
  const { active, rest } = activeCandidate(state.candidates)
  return ({
      candidates: state.candidates,
      active: active,
      rest: rest
    })
}

@connect(mapStateToProps, {moveCard,activeCandidate})
@DragDropContext(HTML5Backend)
export default class Candidates extends React.Component  {

  constructor(props) {
    super(props);
    this.moveCard = this.moveCard.bind(this);
    this.changeDisplay = this.changeDisplay.bind(this)
    this.state = { opacity: 1 };
   
  }

  changeDisplay(result){
    this.setState(result)
  }

  moveCard(product, decision) {
    this.props.moveCard(product, decision);
  }

  render (){
    let display
    this.props.location.pathname === '/' ?
      display = 'flex' :
      display = 'none'
    
    const style = {
      general: {
        display: display
      }
    }
    console.log(this.props.active)
    return(
      <div className={styles.grid} style={style.general}>
        <div className={styles.accepted}>
          <FontAwesome
            name='arrow-left'
            size='1x'
          />
        </div>
        {
          this.props.rest.map((product, index) =>
            <NormalCard 
              product={product}
              key = {index}
              classes={styles.offset}
              position="absolute"
              z={-index}
            />
          ) 
        }
         {
          this.props.active.map((product, index) =>
            <ActiveCard 
              product={product}
              classes={styles.candidate}
              position="absolute"
              opacity={this.state.opacity}
              moveCard={this.moveCard}
              changeDisplay={this.changeDisplay}
              key={index}
            />
          ) 
        }
        <div className={styles.rejected}>
          <FontAwesome
            name='arrow-right'
            size='1x'
          />
        </div>
      </div> 
    )
  }
}




