// We are ingesting GSI, BOOKs, GE structure and GE records in same index per tenant
// All the fields which are to store are created using explicit mapping
// https://vpc-elasticsearch-qa3-1-n4rliz2iqsjphfpiw5lbfcpjom.ap-south-1.es.amazonaws.com
DELETE /tn01_gs

GET /

PUT /tn01_gs
{
    "settings": {
        "index": {
            "number_of_shards": 3,
            "number_of_replicas": 0
        }
    },
    "mappings": {
        "_routing": {
            "required": true
        },
        "properties": {
            "recordType": {
                "type": "keyword"
            },
            "name": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "schemaId": {
                "type": "keyword"
            },
            "typeahead_1": {
                "type": "search_as_you_type"
            },
            "typeahead_2": {
                "type": "search_as_you_type"
            },
            "data": {
                "properties": {
                    "_dname": {
                        "type": "text"
                    },
                    "_desc": {
                        "type": "text",
                        "index": false
                    },
                    "_ont": {
                        "type": "text"
                    },
                    "_loc": {
                        "type": "geo_point"
                    },
                    "_fields": {
                        "type": "nested",
                        "properties": {
                            "name": {
                                "type": "text",
                                "fields": {
                                    "keyword": {
                                        "type": "keyword",
                                        "ignore_above": 256
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "ir": {
                "type": "nested",
                "properties": {
                    "_oid": {
                        "type": "long"
                    },
                    "_ro": {
                        "type": "keyword"
                    }
                }
            }
        }
    }
}

GET _cat/indices/tn01_gs

POST tn01_gs/_doc/gsi-001?routing=GSI
{
    "recordType": "GSI",
    "name": "Sample Gsi",
    "schemaId": "schmea-001",
    "data": {
        "_dname": "Repair",
        "_ont": [
            "manufaturing",
            "health"
        ]
    },
    "ir": [
        {
            "_oid": 11
        },
        {
            "_ro": "sales"
        }
    ]
}

POST tn01_gs/_doc/book-001?routing=BOOK
{
    "recordType": "BOOK",
    "name": "Sample book",
    "schemaId": "schmea-002",
    "data": {
        "_dname": "Repair",
        "_ont": [
            "manufaturing",
            "health"
        ]
    },
    "ir": [
        {
            "_oid": 11
        },
        {
            "_ro": "sales"
        }
    ]
}

POST tn01_gs/_doc/ge-001?routing=GE
{
    "recordType": "GE",
    "name": "SampleGe",
    "schemaId": "schmea-003",
    "data": {
        "_fields": [
            {
                "name": "id"
            },
            {
                "name": "age"
            },
            {
                "name": "email"
            },
            {
                "name": "name"
            }
        ]
    },
    "ir": [
        {
            "_oid": 11
        },
        {
            "_ro": "sales"
        }
    ]
}

GET /tn01_gs/_mapping

PUT /tn01_gs/_mapping
{
    "properties": {
        "data": {
            "properties": {
                "id": {
                    "type": "keyword",
                    "index": false
                },
                "age": {
                    "type": "long",
                    "index": false
                },
                "email": {
                    "type": "keyword",
                    "index": false
                },
                "name": {
                    "type": "text",
                    "fields": {
                        "keyword": {
                            "type": "keyword",
                            "ignore_above": 256
                        }
                    }
                }
            }
        }
    }
}

DELETE /tn01_gs/_doc/F3fWo4EBGfmRM6QRwQVN?routing=SampleGe


POST /tn01_gs/_doc/SampleGe-record_id?routing=SampleGe
{
  "recordType": "Records",
  "name": "SampleGe",
  "schemaId": "schmea-004",
  "data": {
      "id": "record_id",
      "age": 11,
      "email": "book@gmail.com" ,
      "name": "sample ge record value"
  },
  "ir": [
        {
            "_oid": 11
        },
        {
            "_ro": "sales"
        }
    ]
}

GET /tn01_gs/_search
{
    "query": {
        "multi_match": {
            "query": "sample",
            "fields": []
        }
    }
}

GET /tn01_gs/_search?size=0
{
    "query": {
        "bool": {
            "must": [
                {
                    "multi_match": {
                        "query": "sample",
                        "lenient": true,
                        "fields": [
                            "name",
                            "data.*"
                        ]
                    }
                }
            ],
            "filter": [
                {
                    "nested": {
                        "path": "ir",
                        "query": {
                            "bool": {
                                "should": [
                                    {
                                        "match": {
                                            "ir._ro": "sales"
                                        }
                                    }
                                ]
                            }
                        }
                    }
                }
            ]
        }
    },
    "aggs": {
        "top_sites": {
            "terms": {
                "field": "recordType",
                "order": {
                    "top_hit": "desc"
                }
            },
            "aggs": {
                "top_tags_hits": {
                    "top_hits": {}
                },
                "top_hit": {
                    "max": {
                        "script": {
                            "source": "_score"
                        }
                    }
                }
            }
        }
    }
}
