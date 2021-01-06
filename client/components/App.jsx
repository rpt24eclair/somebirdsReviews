import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import Axios from 'axios';

function App(props) {
  const [shoeID, setShoeID] = useState(props.shoeID || 1);
  const [reviewCount, setReviewCount] = useState(5);
  const [reviews, setReviews] = useState(['']);
  const [rating, setRating] = useState(['']);

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
      setRating(rating.data);
      console.log(rating.data);
    })
    .catch(err => {
      console.error(err);
    });
  }, [shoeID]);

  return (
    <div>
      <Reviews reviews={reviews} />
    </div>
  )
}

export default App;