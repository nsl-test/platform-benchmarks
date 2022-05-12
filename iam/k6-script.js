// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";

export let options = { maxRedirects: 4 };

const Pre = Symbol.for("pre");
const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  collection: {
    UserName: "Amandeep.goyal@nslhub.com",
    RoleId: "",
    SharedRole: "Random123",
    BookName: "BasicBook2022050910595455210",
    SolutionName: "BasicSolution2022050910595455210"
  },
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

  postman[Request]({
    name: "Login as usercco",
    id: "99483a5c-e8c3-42f4-b10f-d4613c099778",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/login/v2/login-action",
    data:
      '{\n    "userName": "{{UserCCO}}",\n    "encryptedPassword": "J8JAIlEDnLvsHzljoQJ4VcWCdcVNJTYzWlc7yZaTRcH5roLNs6trxwD+Ax/XCy3UvJzxSDNLVaa2a7YVcVddeHC6oXuFMf0pNxYWTGi4Tl+ha36Y0DPd4VBFeqvRfDvB2UnUSR+vfIJ56c8SNe0E644yjrCwxXWqAE2B0jTQgfA=",\n    "tenantName": "{{TenantName}}",\n    "clientId": "{{TenantName}}"\n}',
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
    name: "Get Book Tree By Id",
    id: "56bd66a4-1020-44ae-827f-181b50dd7f35",
    method: "GET",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/roles/getBookTreeById?id={{BookId}}&roleId={{RoleId}}&searchCriteria=",
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json",
      accept: "application/json, text/plain, */*"
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        pm.expect(pm.response.json().bookId).to.eq(
          `${pm.variables.get("BookId")}`
        );
        pm.expect(pm.response.json().bookName).to.eq(
          pm.variables.get("BookName")
        );
        pm.expect(pm.response.json().solDtos[0].gsiName).to.eq(
          pm.variables.get("SolutionName")
        );
        pm.expect(pm.response.json().solDtos[0].gsiId).to.eq(
          `${pm.variables.get("SolutionId")}`
        );
      });
    }
  });

  postman[Request]({
    name: "Fetch by username",
    id: "1375d10d-84b2-43b5-b554-2169dd2c105f",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/user/getAllUsersBySearchTerm?pageNumber=0&pageSize=10&searchTerm={{UserName}}&isActive=false",
    data: "{}",
    headers: {
      Authorization: "{{BearerToken}}",
      "Accept-Language": "en"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "Update Local Role & Attact to Book",
    id: "c767fedd-5872-4e48-b7b1-09b787798cdc",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/roles/createRoleAndAttachToBooks?bklist={{BookId}}",
    data:
      '{\r\n    "id": {{RoleId}},\r\n    "createdAt": {{CreatedAt}},\r\n    "updatedAt": {{UpdatedAt}},\r\n    "name": "{{RoleName}}",\r\n    "description": "",\r\n    "isEnabled": true,\r\n    "isAdmin": false,\r\n    "tagId": {{TagId}},\r\n    "users": [\r\n        {{UserDetails}}\r\n    ],\r\n    "groups": []\r\n}',
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json",
      accept: "application/json, text/plain, */*"
    },
    pre() {
      let role = {
        id: 1118115121063,
        createdAt: 1649163005001,
        updatedAt: 1652095461019,
        name: " Employee",
        description: "",
        isEnabled: true,
        isAdmin: false,
        tagId: 1892314879594,
        roleType: "LOCAL"
      };
      pm.variables.set("RoleId", role.id);
      pm.variables.set("RoleName", role.name);
      pm.variables.set("TagId", role.tagId);
      pm.variables.set("CreatedAt", role.createdAt);
      pm.variables.set("UpdatedAt", role.updatedAt);
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        pm.expect(pm.response.json().message).to.eq(
          "Role updated successfully"
        );
      });
    }
  });

  postman[Request]({
    name: "Get Role Details - Local Role Copy 2",
    id: "f32762be-a414-4beb-a41c-7c1a48b97e5c",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/roles/getB2cRoles?pageNumber=0&pageSize=10",
    data: '{"isActive":true,"roleName":"{{RoleName}}"}',
    headers: {
      authority: "b2c.qa3.nslhub.com",
      "sec-ch-ua":
        '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
      traceparent: "00-670b399b03706ec4dfe80007a4bc49a7-42c17ed83ad5cbca-01",
      "accept-language": "en",
      "sec-ch-ua-mobile": "?0",
      authorization: "{{BearerToken}}",
      "content-type": "application/json",
      accept: "application/json, text/plain, */*",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "sec-ch-ua-platform": '"Windows"',
      origin: "https://b2c.qa3.nslhub.com",
      "sec-fetch-site": "same-origin",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://b2c.qa3.nslhub.com/admin/viewLocalRole",
      cookie: "_ga=GA1.2.1007264212.1627288780"
    },
    pre() {
      pm.variables.set("RoleId", "1118115121063");
      pm.variables.set("RoleName", " Employee");
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        let isValid = false;
        pm.response.json().rolesList.forEach(roleName => {
          if (
            roleName.id == pm.variables.get("RoleId") &&
            roleName.name == pm.variables.get("RoleName")
          ) {
            pm.variables.set("TagId", roleName.tagId);
            pm.variables.set("CreatedAt", roleName.createdAt);
            pm.variables.set("UpdatedAt", roleName.updatedAt);
            isValid = true;
          }
        });
        pm.expect(isValid).to.eq(true);
      });
    }
  });

  postman[Request]({
    name: "Save Irdr's",
    id: "fdd97665-6b18-48f9-8814-17bb1b7eb4fd",
    method: "POST",
    address:
      "https://{{TenantName}}.{{BaseURL}}/dsd-orch/nsl-iam/api/user/saveIRDRs",
    data:
      '[\r\n    {\r\n        "bookId": {{BookId}},\r\n        "design": true,\r\n        "gsiId": "{{SolutionId}}",\r\n        "irdr": {\r\n            "decisionRight": true,\r\n            "disableParentRoleAccess": false,\r\n            "executionRight": false,\r\n            "informationRight": true,\r\n            "rightHolderId": {{RoleId}},\r\n            "rightHolderName": "{{RoleName}}",\r\n            "rightHolderType": "ROLE"\r\n        }\r\n    },\r\n    {\r\n        "bookId": {{BookId}},\r\n        "design": false,\r\n        "gsiId": "{{SolutionId}}",\r\n        "irdr": {\r\n            "decisionRight": false,\r\n            "disableParentRoleAccess": false,\r\n            "executionRight": true,\r\n            "informationRight": true,\r\n            "rightHolderId": {{RoleId}},\r\n            "rightHolderName": "{{RoleName}}",\r\n            "rightHolderType": "ROLE"\r\n        }\r\n    }\r\n]',
    headers: {
      "accept-language": "en",
      authorization: "{{BearerToken}}",
      "content-type": "application/json",
      accept: "application/json, text/plain, */*"
    },
    pre() {
      pm.variables.set("RoleId", "1118115121063");
      pm.variables.set("RoleName", " Employee");
    },
    post(response) {
      pm.test("Check status code", function() {
        pm.expect(pm.response.code).to.eq(200);
        pm.expect(pm.response.json().message).to.eq("IRDRs Successfully Saved");
      });
    }
  });

  postman[Pre].pop();
}
