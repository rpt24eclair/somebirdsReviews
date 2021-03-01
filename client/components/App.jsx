import React, { useState, useEffect } from 'react';
import Feedback from './Feedback.jsx';
import Reviews from './Reviews.jsx';
import MoreReviewsButton from './MoreReviewsButton.jsx';
import styles from '../styles/app.css';
import Axios from 'axios';

function App(props) {
  const [shoeID, setShoeID] = useState(props.shoeID || 9566);
  const [shoeName, setShoeName] = useState('');
  const [reviewCount, setReviewCount] = useState(3);
  const [reviews, setReviews] = useState(['']);
  const [stars, setStars] = useState('0.0');
  const [fit, setFit] = useState('0.0');
  const [totalReviews, setTotalReviews] = useState(0);
  const [reviewsFetched, setReviewsFetched] = useState(false);
  const [ratingFetched, setRatingFetched] = useState(false);

  useEffect(() => {
    Axios.get(`/shoes/${shoeID}/reviews`)
    .then(reviews => {
      setReviews(reviews.data);
      setReviewsFetched(true);
    })
    .catch(err => {
      console.error(err);
    });
  }, [reviewCount]);

  useEffect(() => {
    Axios.get(`/shoes/${shoeID}/rating`)
    .then(rating => {
      let { name: name, rating_average: stars, fit_feedback_average: fit, review_count: totalReviews } = rating.data;
      setShoeName(name);
      setStars(stars);
      setFit(fit);
      setTotalReviews(totalReviews);
      setRatingFetched(true);
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  return (
    <div>
      {reviewsFetched && ratingFetched && <div className={styles.appContainer}>
        <Feedback shoeName={shoeName} stars={stars} fit={fit}/>
        <Reviews reviews={reviews} />
        <MoreReviewsButton reviewCount={reviewCount} setReviewCount={setReviewCount} />
        <div className={styles.infoContainer}>
          <p className={styles.text}>currently displaying {reviews.length} reviews</p>
        </div>
      </div>}
    </div>
  )
}

export default App;