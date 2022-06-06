import { check } from "k6";
import { writer, produce, reader, consume, createTopic, deleteTopic } from "k6/x/kafka"; // import kafka extension

const bootstrapServers = ["localhost:9092"];
const kafkaTopic = "xk6_kafka_json_topic";

const [producer, _writerError] = writer(bootstrapServers, kafkaTopic);
const [consumer, _readerError] = reader(bootstrapServers, kafkaTopic);

if (__VU == 0) {
    createTopic(bootstrapServers[0], kafkaTopic);
}

export const options = {
    thresholds: {
        // Base thresholds to see if the writer or reader is working
        "kafka.writer.error.count": ["count == 0"],
        "kafka.reader.error.count": ["count == 0"],
    },
};

const TransRequest = {
    "data": {
        "executionState": [],
        "masterTransactionIdRecords": {},
        "containerCuDisplayName": "Management of Logistics",
        "transactionId": "2037199747484",
        "triggerCuId": 1073229459067,
        "containerCuId": 1664299259149,
        "containerCuName": "Management of Logistics",
        "transactionStatus": "COMPLETED",
        "triggerCuName": "warehousingInformationWithDistance",
        "dateTime": 1654524940373,
        "assignedUserId": "1179122605666",
        "assignedStatus": "ASSIGNED",
        "startTime": 1654524940367,
        "endTime": 1654524941149,
        "isUpdateAssigneeApplicable": false,
        "id": 2037199747484,
        "guid": "a1bbe77d-9d29-4bd8-912b-e32b23f35cc4",
        "ownerId": 1179122605666,
        "createdAt": 1654524940367,
        "createdBy": 1179122605666,
        "updatedAt": 1654524941149,
        "updatedBy": 1179122605666,
        "orgUnitId": 280088328566
    },
    "userContext": {
        "tenantId": "astestm302",
        "userId": 1179122605666,
        "emailId": "user9@test.com",
        "orgUnitId": 280088328566
    },
    "logEventTime": 1654524941150,
    "methodName": "save"
}

export default function () {
    for (let index = 0; index < 100; index++) {
        let messages = [{
            key: JSON.stringify(TransRequest)
        }];
        let error = produce(producer, messages);
        check(error, {
            "Messages are sent": (err) => err == undefined,
        });
    }

    // Read 10 messages only
    let [messages, _consumeError] = consume(consumer, 10);

    check(messages, {
        "10 messages are received": (messages) => messages.length == 10,
    });

    check(messages[0], {
        "Topic equals to xk6_kafka_json_topic": (msg) => msg["topic"] == kafkaTopic,
        "Key is correct": (msg) => msg["key"] == JSON.stringify({ correlationId: "test-id-abc-0" }),
        "Time is past": (msg) => new Date(msg["time"]) < new Date(),
        "Partition is zero": (msg) => msg["partition"] == 0,
        "Offset is gte zero": (msg) => msg["offset"] >= 0,
        "High watermark is gte zero": (msg) => msg["highWaterMark"] >= 0,
    });
}

export function teardown(data) {
    if (__VU == 0) {
        // Delete the topic
        const error = deleteTopic(bootstrapServers[0], kafkaTopic);
        if (error === undefined) {
            // If no error returns, it means that the topic
            // is successfully deleted
            console.log("Topic deleted successfully");
        } else {
            console.log("Error while deleting topic: ", error);
        }
    }
    producer.close();
    consumer.close();
}