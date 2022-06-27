import http from 'k6/http';
import counter from "k6/x/counter"

export const options = {
  discardResponseBodies: true,
  scenarios: {
    insertAndSearchGSI: {
      executor: 'ramping-arrival-rate',
      exec: 'old',
      startRate: 300,
      timeUnit: '1m',
	    preAllocatedVUs: 2,
      maxVUs: 50,
    },
    insertAndSearchBooks: {
      executor: 'ramping-arrival-rate',
      exec: 'new2',
      startRate: 300,
      timeUnit: '1m',
	    preAllocatedVUs: 2,
      maxVUs: 50,
    },
    addGEMappings: {
      executor: 'constant-vus',
      exec: 'new2',
      startRate: 300,
      timeUnit: '1m',
	    preAllocatedVUs: 2,
      maxVUs: 50,
      stages: [
        { duration: '1m', target: 20 },
        { duration: '2m', target: 20 }
      ]
    }, // add 10 mappings per second
  },
}

const Q1 = {}
const Q2 = {}
const Q3 = {}
const Q4 = {}

export function new1() {
  counter.up()
  http.request('GET','https://vpc-elasticsearch-qa3-1-n4rliz2iqsjphfpiw5lbfcpjom.ap-south-1.es.amazonaws.com/nsl_txn_eql_entity_record_apiqa0504/_search', JSON.stringify(Q3), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export function new2() {
  http.request('GET','https://vpc-elasticsearch-qa3-1-n4rliz2iqsjphfpiw5lbfcpjom.ap-south-1.es.amazonaws.com/nsl_txn_eql_entity_record_apiqa0504v4/_search', JSON.stringify(Q4), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export function old(req) {
  http.request('GET','https://vpc-elasticsearch-qa3-1-n4rliz2iqsjphfpiw5lbfcpjom.ap-south-1.es.amazonaws.com/nsl_txn_eql_entity_record_apiqa0504/_search', JSON.stringify(Q2), {
    headers: { 'Content-Type': 'application/json' },
  });
}
