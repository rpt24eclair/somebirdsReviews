import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '30s',
};

export default function () {
  http.get('http://localhost:3003/shoes/9056785/reviews');
  sleep(1);
}
