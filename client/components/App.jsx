import React, { useState, useEffect } from 'react';
import Feedback from './Feedback.jsx';
import Reviews from './Reviews.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import styles from '../styles/app.css';
import Axios from 'axios';

function App(props) {
  const [shoeID, setShoeID] = useState(props.shoeID || 1);
  const [reviewCount, setReviewCount] = useState(3);
  const [reviews, setReviews] = useState(['']);
  const [stars, setStars] = useState('0.0');
  const [fit, setFit] = useState('0.0');
  const [totalReviews, setTotalReviews] = useState(0);

  useEffect(() => {
    Axios.get(`/shoes/${shoeID}/reviews/${reviewCount}`)
    .then(reviews => {
      setReviews(reviews.data);
      console.log(reviews.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [reviewCount]);

  useEffect(() => {
    Axios.get(`/shoes/${shoeID}/rating`)
    .then(rating => {
      let { rating_average: stars, fit_feedback_average: fit, review_count: totalReviews } = rating.data;
      setStars(stars);
      setFit(fit);
      setTotalReviews(totalReviews);
      console.table(rating.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  return (
    <div className={styles.appContainer}>
      <Feedback />
      <Reviews reviews={reviews} />
      <MoreReviewsButton reviewCount={reviewCount} setReviewCount={setReviewCount} />
      <div className={styles.infoContainer}>
        <p className={styles.text}>currently displaying {reviews.length} of {totalReviews} reviews</p>
      </div>
    </div>
  )
}

export default App;