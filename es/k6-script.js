import http from 'k6/http';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    old: {
      executor: 'constant-vus',
      exec: 'old',
      vus: 500,
      duration: '30s',
    },
    neww: {
      executor: 'constant-vus',
      exec: 'neww',
      vus: 500,
      duration: '30s',
    },
  },
};

const Q1 = {
  "query": {
    "bool": {
      "must": [
        {
          "constant_score": {
            "filter": {
              "match": {
                "txnAttrMapping.Scoredetails_Reserved_Report2022041111505441962.Name.values.keyword": "Dhoni"
              }
            }
          }
        }
      ],
      "filter": [
        {
          "match": {
            "entityName": "Scoredetails_Reserved_Report2022041111505441962"
          }
        }
      ]
    }
  }
};

const Q2 = {
  "size": 100,
  "query": {
    "bool": {
      "filter": [
        {
          "match": {
            "entityName.keyword": {
              "query": "Scoredetails_Reserved_Report2022041111505441962",
              "operator": "OR",
              "prefix_length": 0,
              "max_expansions": 50,
              "fuzzy_transpositions": true,
              "lenient": false,
              "zero_terms_query": "NONE",
              "auto_generate_synonyms_phrase_query": true,
              "boost": 1.0
            }
          }
        },
        {
          "bool": {
            "must": [
              {
                "match": {
                  "txnAttrMapping.Scoredetails_Reserved_Report2022041111505441962.Name.values.keyword": {
                    "query": "Dhoni",
                    "operator": "OR",
                    "prefix_length": 0,
                    "max_expansions": 50,
                    "fuzzy_transpositions": true,
                    "lenient": false,
                    "zero_terms_query": "NONE",
                    "auto_generate_synonyms_phrase_query": true,
                    "boost": 1.0
                  }
                }
              }
            ],
            "adjust_pure_negative": true,
            "boost": 1.0
          }
        }
      ],
      "adjust_pure_negative": true,
      "boost": 1.0
    }
  }
};

const Q3 = {
  "query": {
    "bool": {
      "filter": [
        {
          "match": {
              "txnAttrMapping.Scoredetails_Reserved_Report2022041111505441962.Name.values": "Dhoni"
          }
        }
      ]
    }
  }
}

export function neww() {
  http.request('GET','https://vpc-elasticsearch-qa3-1-n4rliz2iqsjphfpiw5lbfcpjom.ap-south-1.es.amazonaws.com/nsl_txn_eql_entity_record_apiqa0504/_search', JSON.stringify(Q3), {
    headers: { 'Content-Type': 'application/json' },
  });
}


export function old(req) {
  http.request('GET','https://vpc-elasticsearch-qa3-1-n4rliz2iqsjphfpiw5lbfcpjom.ap-south-1.es.amazonaws.com/nsl_txn_eql_entity_record_apiqa0504/_search', JSON.stringify(Q2), {
    headers: { 'Content-Type': 'application/json' },
  });
}