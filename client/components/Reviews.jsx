import React from 'react';
import Review from './Review.jsx';

function Reviews(props) {
  return (
    <div>
      {
        props.reviews.map(review => {
          return <Review review={review} />
        })
      }
    </div>
  )
}

export default Reviews;