// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    BaseURL: "qa3.nslhub.com",
    IamURL: "https://qaiam.nslhub.com",
    SuperAdminTenant: "Super-Admin",
    TenantName: "apiqa0504",
    TenantAdmin: "admin@nslhub.com",
    AdminPassword: "admin",
    CCORoleId: 1841833683818,
    RoleCCO: "CCO",
    UserCCOManager: "userccomanager",
    UserCCO: "usercco",
    UserCCOId: 322589991331,
    UserCCO1: "usercco1",
    UserCCO1Id: 1972120016659,
    CCHRoleId: 234529237640,
    RoleCCH: "CCH",
    UserCCH: "usercch",
    RoleCCA: "CCA",
    UserCCA: "usercca",
    Password: "test",
    BearerToken: "undefined undefined",
    TenantName2: "apiqaei0504",
    TenantAdmin2: "admin@nslhub.com",
    AdminPassword2: "admin",
    DsdFileStoreURL: "https://ava-nlg-dev.nslhub.com",
    RefreshToken: null,
    WaitTime: 30000,
    NUMBER: "",
    COUNT: "",
    UserCCOEmailId: "usercco@nslhub.com",
    UserCCO1EmailId: "usercco1@nslhub.com",
    UserCCOManagerEmailId: "userccomanager@nslhub.com",
    UserCCAId: 2044956951239,
    UserCCA1Id: 2043386291967,
    UserCCA1: "usercca1",
    CCARoleId: 368848764661,
    UserCCOManagerId: 2119243203126,
    UserCCH1: "usercch1",
    OuCCO: "oucco",
    OuCCOId: "191876919025",
    UserOuCCO: "useroucco",
    UserOuCCO1: "useroucco1",
    UserOuCCOId: 1657502426387,
    UserOuCCOId1: 668079088379,
    GN: "",
    SolutionPublisher: "SolutionPublisher",
    SolutionPublisherId: 824925532392,
    TenantNameStage: "apiqa0504stage",
    TenantNameProd: "apiqa0504prod",
    TenantNameStageClientId: "apiqa0504_staging",
    UserCCHId: 398151345508,
    TraceAuditRole: "auditdata",
    TraceAuditRoleId: 1873250222640,
    AuditDesigner: "auditdesigner",
    AuditDesignerId: 1139785560613,
    AuditReviewer: "auditreviewer",
    AuditReviewerId: 996441711937,
    AuditDesignerEmailId: "auditdesigner@nslhub.com",
    SuperAdminUserName: "platformadmin@nslhub.com",
    SuperAdminPassword: "padmin@123",
    SaasTenantName: "apiqasaas0802",
    SaasUserCCO: "usercco",
    SaasUserCCOId: "1173118793932",
    SaasTenantId: 28606,
    SuperAdminUserId: "-827185515",
    SuperAdminUser: "platformadmin",
    SaasRoleCCO: "CCO",
    SaasTenantAdmin: "admin@nslhub.com",
    SaasUserCCH: "usercch",
    SaasUserCCHId: "933373429905",
    SaasRoleCCH: "CCH",
    SaasUserCCA: "usercca",
    SaasUserCCAId: "1588750292491",
    SaasRoleCCA: "CCA",
    RoleManager: "Manager",
    ManagerRoleId: 829265664407,
    RoleEmployee: "Employee",
    EmployeeRoleId: 2040409113899,
    RoleFinance: "Finance",
    FinanceRoleId: 1764637492961,
    TenantAdminId: 894878720178,
    Tenant2AdminId: 1597011094011,
    T2UserCCOId: 1386113498793,
    T2CCORoleId: 239407227356,
    EmployeeUser: "employeeuser",
    EmployeeUserId: 1917645633263,
    FinanceUser: "financeuser",
    FinanceUserId: 820077520635,
    FinanceUser1: "financeuser1",
    FinanceUserId1: "1192769182955",
    EmployeeUser1: "employeeuser1",
    EmployeeUserId1: "1228497924811",
    ManagerUser: "manageruser",
    ManagerUserId: 1732001198107,
    ManagerUser1: "manageruser1",
    ManagerUserId1: "897141596215",
    UserCCHEmailId: "usercch@nslhub.com",
    UserCCAEmailId: "usercca@nslhub.com",
    UserCCA1EmailId: "usercca1@nslhub.com",
    UserCCH1EmailId: "usercch1@nslhub.com",
    UserCCH1Id: 632745185759,
    SAASAdminUserId: "242233047416",
    SaasUserCCO1Id: "464692553728",
    SaasUserCCOManagerId: "202094916017",
    ManagerUser1Id: 1989195344420,
    FinanceUser1Id: 1829479253660,
    EmployeeUser1Id: 1178159858335,
    T2UserCCO1Id: 878542497800,
    StageAdmin: "stageadmin@nslhub.com",
    UserCCC: "userccc",
    UserCCC1: "userccc1",
    UserCCCManager: "usercccmanager",
    RoleSolutionCustomizer: "SolutionCustomizer",
    UserCCCId: "668849564311",
    UserCCC1Id: "1607519294012",
    SolutionCustomizerRoleId: "639989182448",
    T3UserCCO1Id: 405650278408,
    Tenant3AdminId: 982435399574,
    T3UserCCOId: 1424682699760,
    T3CCORoleId: 129071126100,
    TenantName3: "apiqa3ten0604",
    REVIEW_WAITTIME: "5000"
  }
});

export default function() {
  postman[Request]({
    name: "Assign - usercco1",
    id: "712beddd-3dfa-4fea-8e04-4fd66e4ea913",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/secmcc/transaction/reAssign?transactionId={{TransactionId1}}&userId={{UserCCO1Id}}",
    data:
      '{\r\n\t"triggerCuId": "{{TriggerCuId1}}",\r\n\t"gsiId": "{{SolutionId}}",\r\n\t"transID": "{{TransactionId1}}"\r\n}',
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: "{{BearerToken}}",
      traceparent: "00-42817721b6410b73e2d7a6a479b48553-59477548f520c665-01",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "Content-Type": "application/json",
      "Accept-Language": "en"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        pm.expect(pm.response.json().message).to.eq("assigned successfully");
        pm.expect(pm.response.json().result).to.eq(
          "successfully assigned to user - " + pm.variables.get("UserCCO1Id")
        );
      });
      setTimeout(() => {}, pm.environment.get("WaitTime") / 3);
    }
  });

  postman[Request]({
    name: "Transaction History",
    id: "acee0451-794d-4a7d-b4a3-3f15a6b67b13",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/secmcc/transaction/history/{{TransactionId}}/{{SolutionId}}",
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        pm.expect(pm.response.json().result.transactionStatus).to.eq(
          "COMPLETED"
        );
      });
    }
  });

  postman[Request]({
    name: "Triggered Txn - Action History",
    id: "e2091ba1-2696-4a5b-9fe2-38a08b44772b",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/secmcc/transaction/cuTxnData/{{TransactionId}}/{{ContextualId}}",
    headers: {
      authority: "apiqa0109.qa3.nslhub.com",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
      traceparent: "00-492097fee5fda191c0de73c72940312a-5c7c4a7a061a7698-01",
      "accept-language": "en",
      "sec-ch-ua-mobile": "?0",
      authorization: "{{BearerToken}}",
      accept: "application/json, text/plain, */*",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://apiqa0109.qa3.nslhub.com/mylibrary/pending-transactions"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
        pm.expect(pm.response.json().message).to.eq(
          "cuDetails fetched successfully"
        );
        pm.expect(pm.response.json().result.gsiId).to.eq(
          pm.variables.get("SolutionId")
        );
        pm.expect(pm.response.json().result.transactionId).to.eq(
          pm.variables.get("TransactionId")
        );
        pm.expect(pm.response.json().result.cuContextualId).to.eq(
          pm.variables.get("ContextualId")
        );
      });
    }
  });

  postman[Request]({
    name: "Escalate - userccomanager",
    id: "f4b4ea96-1f89-42ac-949b-3452d4d45a00",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/secmcc/transaction/escalate?comment=undefined",
    data:
      '{\r\n\t"triggerCuId": "{{TriggerCuId1}}",\r\n\t"gsiId": "{{SolutionId}}",\r\n\t"transID": "{{TransId2}}"\r\n}',
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: "{{BearerToken}}",
      traceparent: "00-42817721b6410b73e2d7a6a479b48553-59477548f520c665-01",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36",
      "Content-Type": "application/json",
      "Accept-Language": "en"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        pm.expect(pm.response.json().message).to.eq("escalated successfully");
        pm.expect(pm.response.json().result).to.eq(
          "successfully escalated to user - " +
            pm.variables.get("UserCCOManagerId")
        );
      });

      setTimeout(() => {}, pm.environment.get("WaitTime"));
    }
  });
}
