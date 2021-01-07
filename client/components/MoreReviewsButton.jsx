import React from 'react';
import styles from '../styles/more-reviews-button.css';

function MoreReviewsButton(props) {

  const { reviewCount, setReviewCount } = props;
  const handleClick = () => {
    setReviewCount(reviewCount + 3);
  };

  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button} onClick={handleClick}>
        <p className={styles.text}>LOAD MORE REVIEWS</p>
      </div>
    </div>
  )
}

export default MoreReviewsButton;