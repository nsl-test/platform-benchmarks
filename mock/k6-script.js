import http from 'k6/http';
import { Rate } from 'k6/metrics';
import { check } from 'k6';

const failRate = new Rate('failed_requests');

export let options = {
    stages: [
        { duration: '1m', target: 20 },
        { duration: '3m', target: 20 },
        { duration: '1m', target: 0 },
    ],
    thresholds: {
        http_req_failed: ['rate<0.02'], // http errors should be less than 2%
        http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
    },
};

export default function () {
    const result = http.get('http://10.99.177.245:9080/productpage?u=normal');
    check(result, {
        'http response status code is 200': result.status === 200,
    });
    failRate.add(result.status !== 200);
}