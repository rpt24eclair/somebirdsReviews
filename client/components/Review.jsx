import React from 'react';
import styles from '../styles/reviews.css';

function Review(props) {
  const { name, headline, review, rating, date } = props.review;

  return (
    <div className={styles.reviewContainer}>
      <div className={styles.leftColumn}>
        <div className="name">
          <b>{name}</b>
        </div>
        <div className="date">
          {date}
        </div>
      </div>
      <div className={styles.middleColumn}>
        <div className="rating">
          {rating}
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className="headline">
          <b>{headline}</b>
        </div>
        <div className="review">
          {review}
        </div>
      </div>
    </div>
  )
}

export default Review;