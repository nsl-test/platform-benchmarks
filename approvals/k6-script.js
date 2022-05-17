// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";

export let options = { maxRedirects: 4 };

const Pre = Symbol.for("pre");
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
    REVIEW_WAITTIME: "5000",
    UserCCOEncryptedPassword:
      "J8JAIlEDnLvsHzljoQJ4VcWCdcVNJTYzWlc7yZaTRcH5roLNs6trxwD+Ax/XCy3UvJzxSDNLVaa2a7YVcVddeHC6oXuFMf0pNxYWTGi4Tl+ha36Y0DPd4VBFeqvRfDvB2UnUSR+vfIJ56c8SNe0E644yjrCwxXWqAE2B0jTQgfA=",
    TenantAdminEncryptedPassword:
      "DRvI9/JkLbPgrwPepaVkJwRN9Zts4u09mL6fOg3OwIg84c7XRkqwEVQx0tbfo42Kuiaiw3dbvMfd4eQUG9AXg6zdZtsrGnz+/+Ik5gdkSO3npvFCSq/6GEgQERPNEqNfwQODLphZfmkxr87LayYQ+3up+2Umi+4RG0pxVb8g3sM="
  }
});

export default function() {
  postman[Pre].push(() => {
    pm.variables.set("SolutionId", "1479665240150");
    pm.variables.set("EntityId", "1125583457112");
    pm.variables.set("CuId", "1217982231832");
  });

  postman[Request]({
    name: "user login iam",
    id: "2e11e5f8-cbdc-4032-9d29-1d5b76374e65",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/login/v2/login-action",
    data:
      '{\n    "userName": "{{UserCCO}}",\n    "encryptedPassword": "{{UserCCOEncryptedPassword}}",\n    "tenantName": "{{TenantName}}",\n    "clientId": "{{TenantName}}"\n}',
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "Accept-Language": "en"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });

      pm.environment.set(
        "BearerToken",
        pm.response.json().result.token_type +
          " " +
          pm.response.json().result.access_token
      );
      pm.environment.set(
        "RefreshToken",
        pm.response.json()["result"]["refresh_token"]
      );
    }
  });

  postman[Request]({
    name: "GET Approvals List - solutionId",
    id: "e94e7b13-61d8-43d2-a5d2-5c74c731e1e1",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-approvals/api/review/details/{{SolutionId}}",
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json"
    },
    post(response) {
      pm.test("Check For Status Code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });
      pm.test("Check Response Values", function() {
        pm.expect(pm.response.json().message).to.eq(
          "No active review process found for BET id 1479665240150"
        );
      });
    }
  });

  postman[Request]({
    name: "GET Approvals List - entityId",
    id: "076edd0b-a168-44de-ba49-c575552f952d",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-approvals/api/review/details/{{EntityId}}",
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json"
    },
    post(response) {
      pm.test("Check For Status Code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });
      pm.test("Check Response Values", function() {
        pm.expect(pm.response.json().message).to.eq(
          "No active review process found for BET id 1125583457112"
        );
      });
    }
  });

  postman[Request]({
    name: "GET Approvals List - cuid",
    id: "8a4f148c-1c2f-482e-9fc3-74d45baed700",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-approvals/api/review/details/{{CuId}}",
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json"
    },
    post(response) {
      pm.test("Check For Status Code", function() {
        pm.expect(pm.response.code).to.eq(200);
      });
      pm.test("Check Response Values", function() {
        pm.expect(pm.response.json().message).to.eq(
          "No active review process found for BET id 1217982231832"
        );
      });
    }
  });

  postman[Pre].pop();
}
