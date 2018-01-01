import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Candidates.css';
import { getFirst, getLast, getImage } from '../utils'

class CandidateSquare extends React.Component  {

  render() {

    const candidate = this.props.candidate
    candidate.country = 'norway'
    candidate.url = `/candidates/${candidate.id}`
    
    return (
      <article className={styles.candidate}>
          <Link to={candidate.url}>
            <img className={styles.image} src={candidate.logo}/>       
            <div className={styles.info}>
              <h1 className={styles.title}>{candidate.name}</h1>
            </div>
          </Link>
      </article>
    )
  }
}

export default CandidateSquare