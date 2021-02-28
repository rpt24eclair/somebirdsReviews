import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  var url = 'http://localhost:3003/shoes/9078345/reviews';
  var payload = JSON.stringify({
      name: "Meyvi",
      headline: "Posting",
      review: "Blah!",
      rating: 5,
      fit_feedback: -1,
      shoe_id: 9078345
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
};
