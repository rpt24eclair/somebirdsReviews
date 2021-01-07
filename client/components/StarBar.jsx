import React from 'react';
import styles from '../styles/star-bar.css';

function StarBar(props) {
  const stars = props.stars; //<- will be of type string eg. '1.5' or number eg. 4
  const numWholeStars = typeof stars === 'string' ? parseInt(stars.split('.')[0]) : stars;
  const hasHalfStar = typeof stars === 'string' && parseInt(stars.split('.')[1]) >= 5 ? true : false;
  const starArr = [];

  for (let i = 0; i < numWholeStars; i++) {
    starArr.push('s');
  }

  return (
    <div>
      {starArr.map(x => <div className={styles.star}></div>)}
      {hasHalfStar && <div className={styles.halfStar}></div>}
    </div>
  )
}

export default StarBar;