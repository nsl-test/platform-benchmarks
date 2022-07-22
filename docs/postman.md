# Introduction

In this article, I'll explain how to use a Postman collection I have created to load test our instance of our test API. The process is pretty straightforward, as shown below. You need to feed your exported Postman collection to our postman-to-k6 converter and use the generated k6 script to load test your API.

## Quickstart guide
```
# convert postman collection to k6 test$ postman-to-k6 test-api.json \    -e env.json \    -o k6-script.js
# run load test$ k6 run \    --vus 100 \    --duration 5m \    k6-script.js
```

## In-depth guide

### Our Test API & Its Testing Scenario

To demonstrate the power of k6 in different scenarios, we have created our test API with various example endpoints, which are available ashttps://github.com/nsl-test/platform-benchmarks. We have analysed the usage of micro-services over various integration tests and estimated their criticality https://fractalenterprises.atlassian.net/wiki/spaces/NSLPAAS/pages/2023227409/APIS. The top 5 are available in the Postman collection:

- IAM
- Notification
- Query
- Versioning
- Approvals

The scenario is to test some endpoints of these microservices to anticipate the developer’s challenges.

### Our Test API Postman Collection

To ease testing of our test API and demonstrate the usage of our Postman to k6 converter, I've created a Postman collection with almost all of our test API requests. These collections are synced with [GitHub actions](../.github/workflows/sync.yml). To modify the collection import the existing collection in your postman, modify, export and commit back using PR e.g https://github.com/nsl-test/platform-benchmarks/pull/12/files.  Once merged GitHub actions will update the changes in a public collection. Ensure you don’t update collection ID

![Postman Testst](../docs/postman.png "Postman Testst")


This collection includes a set of collection variables, environment variables, pre-scripts, tests, authorization with two different mechanisms, and usages of the Postman Sandbox API.

### Load Testing Our Test API with The Postman Collection

We have created a makefile wrapper and a docker image that converts your Postman collection to k6 script, using an utility called postman-to-k6. You can read more about its features [here](https://github.com/apideck-libraries/postman-to-k6). For automation we have enforced that each collection is placed in a micro service dir and named collection.json.

use the guide to install conversion tool https://github.com/apideck-libraries/postman-to-k6#local-installation-recommended

To convert `iam` Postman collection to k6 script, you should take the following steps:

1. Clone the repository

2. Observe that [iam/collection.json](../iam/collection.json) is okay to start with

3. Run `var=iam make gen`. If you need more fine-tuning of your test (like we did above), like adding data or changing environment variables inside your code, just take a look at the Options section of the postman-to-k6 README. The script generated by the converter should look like the one below.
    ```js
    // Auto-generated by the postman-to-k6 converter

    import "./libs/shim/core.js";
    import "./libs/shim/expect.js";

    export let options = { maxRedirects: 4 };

    const Pre = Symbol.for("pre");
    const Request = Symbol.for("request");
    postman[Symbol.for("initial")]({
      options,
      collection: {           <---- Test Variables
        RoleId: "",
        SharedRole: "Random123",
        BookName: "BasicBook2022050910595455210",
        SolutionName: "BasicSolution2022050910595455210"
      },
      environment: {         <---- Environment Variables
        BaseURL: "qa3.nslhub.com",
        IamURL: "https://qaiam.nslhub.com",
        SuperAdminTenant: "Super-Admin",
        TenantName: "apiqa0504",
        TenantAdmin: "admin@nslhub.com",
    });

    export default function() {      <---- Postman pre-request functions
      postman[Pre].push(() => {
        let json = {
          id: 2148143410395,
          createdAt: 1650951442555,
          updatedAt: 1650951442555,
          orgUnitId: 1048774332110,
          name: "Amandeep.goyal@nslhub.com",
          email: "Amandeep.goyal@nslhub.com",
          mobileNumber: "7019356279",
          isEnabled: true,
          roles: [
            {
              id: 1118115121063,
              createdAt: 1649163005001,
              updatedAt: 1652095461019,
              name: " Employee",
              description: "",
              isEnabled: true,
              isAdmin: false,
              tagId: 1892314879594,
              roleType: "LOCAL"
            }
          ],
          groups: [],
          customID: "28246",
          autoCustomID: "28246"
        };
        pm.variables.set("UserDetails", JSON.stringify(json));
        let bookId = 1421739491964;
        pm.variables.set("BookId", bookId);
        let solutionId = 1007437723886;
        pm.variables.set("SolutionId", solutionId);
      });

      postman[Request]({            <----- Postman api requests
        name: "Login as tenant admin",
        id: "2d80c629-a4a9-4898-a0b5-920870ef622d",
        ...
      });

      postman[Request]({
        name: "Create role",
        id: "402b01f1-698d-4d54-93d7-3b79a3898fbe",
        ...
      });

      postman[Request]({
        name: "Get Root OrgUnit Details",
        id: "c1213bbd-5aad-4a4c-99be-c944e8dfdccc",
        ...
      });

      postman[Request]({
        name: "Add User to OrgUnit",
        id: "0e15d75d-a811-4e7c-abae-bd2b050cf1e9",
        ...
        }
      });

      postman[Request]({
        name: "Create Org Unit",
        id: "7fb08851-5e27-46f3-bde8-899b0cf1c9ab",
        ...
      });

      postman[Pre].pop();
    }
    ```
    The generated script is a little bit different from normal k6 scripts since it includes various abstractions to support different Postman functionality, but you can mix them with regular HTTP requests from k6. Also, there is a libs directory beside the script that includes shims and libraries needed for the Postman scripts to work correctly.

4. Ensure that Docker-compose/Nerdctl is installed and ready to use. 

5. Bringup local test data collection environment 
  ```docker compose up -d ```

6. Now run the module/k6-script.js as follow 
  ``` ./docker-run.sh iam``` 
The result of running the script is shown in the following console output:

    ```

            /\      |‾‾|  /‾‾/  /‾/
      /\  /  \     |  |_/  /  / /
      /  \/    \    |      |  /  ‾‾\
    /          \   |  |‾\  \ | (_) |
    / __________ \  |__|  \__\ \___/ .io

    execution: local
      output: -
      script: k6-script.js

      duration: 1m0s, iterations: -
          vus: 100,  max: 100

      done [==========================================================] 1m0s / 1m0s

      █ Public APIs

      █ Registration and authentication

      █ Private APIs

      data_received..............: 8.8 MB 146 kB/s
      data_sent..................: 4.8 MB 80 kB/s
      group_duration.............: avg=753.07ms min=239.15ms med=495ms    max=4.06s    p(90)=1.37s    p(95)=1.73s
      http_req_blocked...........: avg=12.31ms  min=362ns    med=1.52µs   max=3.47s    p(90)=1.83µs   p(95)=1.96µs
      http_req_connecting........: avg=1.95ms   min=0s       med=0s       max=779.59ms p(90)=0s       p(95)=0s
      http_req_duration..........: avg=211.11ms min=104.42ms med=183.12ms max=924.43ms p(90)=304.25ms p(95)=404.24ms
      http_req_receiving.........: avg=1ms      min=41.14µs  med=169.38µs max=130.94ms p(90)=328.31µs p(95)=2.22ms
      http_req_sending...........: avg=205.91µs min=38.06µs  med=163.76µs max=113.06ms p(90)=258.45µs p(95)=302.86µs
      http_req_tls_handshaking...: avg=8.69ms   min=0s       med=0s       max=2.43s    p(90)=0s       p(95)=0s
      http_req_waiting...........: avg=209.9ms  min=104.05ms med=182.22ms max=891.77ms p(90)=301.29ms p(95)=402.41ms
      http_reqs..................: 26363  439.382653/s
      iteration_duration.........: avg=2.28s    min=1.43s    med=2.01s    max=6.55s    p(90)=2.86s    p(95)=3.64s
      iterations.................: 2588   43.133267/s
      vus........................: 100    min=100 max=100
      vus_max....................: 100    min=100 max=100

    ```


## Remarks about using the postman-to-k6 converter

### 1️. Should we base our load tests on the Postman converter and our Postman collections?

If you're using the converter as a way of onboarding, no. If you expect to convert your collection continuously and without doing a lot of manual edits afterwards, yes.

We recommend you use the converter as an easy way to onboard and then rewrite your scripts to idiomatic k6 code, as we believe it to be more maintainable and less likely to degrade over time. If you convert from postman collections continuously and run the script output as-is, it might make sense to keep it as is.

### 2. Is everything available out of the box in the converted script?

No. Since k6 uses Goja to run JavaScript, and it is not compatible with browsers' and Node.js APIs, hence there is some missing functionality. This can be fixed by importing bundled JavaScript modules. For a list of compatible libraries, please see jslib.k6.io.

### 3. What adjustments did you make to the script to make it work?

First, I removed the pre-script containing pm.sendRequest, because it is not supported by the converter. Then, I replaced the jsonData.hasOwnProperty syntax with the equivalent k6 syntax for extracting JSON response information: response.json("selector").

## Pro tips
1. Switch to linux/wsl if you are not there already. Install docker
2. Watch [Getting started with API Load Testing](https://www.youtube.com/watch?v=r-Jte8Y8zag&ab_channel=NickChapsas)
3. Watch [Postman for load testing using k6, with Tim Haselaars (k6 Office Hours #43)](https://www.youtube.com/watch?v=Be66Db4wHLA&ab_channel=k6)
4. Learn promql https://valyala.medium.com/promql-tutorial-for-beginners-9ab455142085