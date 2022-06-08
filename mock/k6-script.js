import http from 'k6/http';
import { Rate } from 'k6/metrics';
import { check } from 'k6';

const failRate = new Rate('failed_requests');

export let options = {
    stages: [
        { target: 200, duration: '30s' },
        { target: 0, duration: '30s' },
    ],
    thresholds: {
        failed_requests: ['rate<=0'],
        http_req_duration: ['p(95)<500'],
    },
};

export default function () {
    const result = http.get('http://productpage:9080/reviews/100');
    check(result, {
        'http response status code is 200': result.status === 200,
        'id matches': result.body["id"] === "100"
    });
    failRate.add(result.status !== 200);
}