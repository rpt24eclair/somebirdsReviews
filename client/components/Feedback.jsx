import React from 'react';
import StarBarBig from './StarBarBig.jsx';
import FitBar from './FitBar.jsx';
import styles from '../styles/feedback.css';

function Feedback(props) {

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.heading}>
        Feedback from the Flock
      </div>
      <div className={styles.centeringDiv}>
        <div className={styles.starRating}>
          <div className={styles.starBar}>
            <StarBarBig stars={props.stars} />
          </div>
          <div className={styles.text}>
            {props.stars} out of 5 stars
          </div>
        </div>
        <div className={styles.fitRating}>
          <div className={styles.text}>
            Based on customer reviews our {props.shoeName} are:
          </div>
          <FitBar rating={props.fit}/>
        </div>
      </div>
    </div>
  )
}

export default Feedback;