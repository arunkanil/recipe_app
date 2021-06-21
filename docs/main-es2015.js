(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Projects\jewelv2.0\src\main.ts */"zUnb");


/***/ }),

/***/ "1BUF":
/*!*******************************************************!*\
  !*** ./src/app/views/login/authentication.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        console.log("curentuser", this.currentUserSubject);
        return this.currentUserSubject.value;
    }
    login(data) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}auth/local/`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            // login successful if there's a jwt token in the response
            console.log(user);
            if (user.jwt) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("token", user.jwt);
                localStorage.setItem("username", user.user.username);
                localStorage.setItem("uid", user.user.id);
                localStorage.setItem("user_type", user.user.UserType);
                localStorage.setItem("email", user.user.email);
                // localStorage.setItem('name', user.data.user_data.name);
                // localStorage.setItem('phone_number', user.data.user_data.phone_number);
                // localStorage.setItem('shop_name', user.data.shops_details[0]?.shop_name);
                // localStorage.setItem('shop_id', user.data.shops_details[0]?.shop);
                localStorage.setItem("currentUser", JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
        localStorage.removeItem("token");
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthenticationService);



/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "nbgS");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/link/context */ "MWEN");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular/http */ "F/12");






const uri = "https://jewel-core.telemarketing.untanglepro.com/graphql"; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    const basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])((operation, context) => ({
        headers: {
            Accept: "charset=utf-8",
        },
    }));
    // Get the authentication token from local storage if it exists
    const token = localStorage.getItem("token");
    const auth = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])((operation, context) => ({
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }));
    return {
        link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([basic, auth, httpLink.create({ uri })]),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
    };
}
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            {
                provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                useFactory: createApollo,
                deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]],
            },
        ],
    })
], GraphQLModule);



/***/ }),

/***/ "8gg5":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./404.component.html */ "nAJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let P404Component = class P404Component {
    constructor() { }
};
P404Component.ctorParameters = () => [];
P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P404Component);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiUrl: "https://jewel-core.telemarketing.untanglepro.com/"
};


/***/ }),

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "JPqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "JPqG":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./default-layout.component.html */ "lm8q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/login/authentication.service */ "1BUF");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_nav */ "c2Qq");






let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.sidebarMinimized = false;
        this.userName = localStorage.getItem("username");
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"].filter((item) => item.role == localStorage.getItem("user_type") || item.role == "");
        this.authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
        console.log("constructor", this.currentUser.user.UserType);
    }
    ;
    toggleMinimize(e) {
        var _a;
        this.sidebarMinimized = e;
        console.log((_a = this.currentUser.user) === null || _a === void 0 ? void 0 : _a.UserType);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(["/login"]);
    }
};
DefaultLayoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], DefaultLayoutComponent);



/***/ }),

/***/ "Lrxh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "nSew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.service */ "1BUF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let LoginComponent = class LoginComponent {
    constructor(dataservice, route, router, authenticationService) {
        this.dataservice = dataservice;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loginForm = {};
        this.result = {};
        this.error = "";
        this.loading = false;
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(["/"]);
        }
    }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    }
    onSubmit() {
        this.loginForm = this.usForm.value;
        console.log(this.loginForm);
        this.loading = true;
        this.authenticationService
            .login(this.loginForm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
            .subscribe((data) => {
            this.loading = false;
            this.router.navigate([this.returnUrl]);
            alert(data.message);
        }, (error) => {
            this.error = error;
            this.loading = false;
            console.log(error);
            alert(error.error.message);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
LoginComponent.propDecorators = {
    usForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["usForm",] }]
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
], LoginComponent);



/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular */ "nbgS");





const AgentsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query AgentsQuery {
    teleCallerContacts {
      id
      Name
      Contact_Number_1
      Contact_Number_2
      Contact_Number_3
      group {
        Name
        Description
      }
      Email
    }
  }
`;
const AgentsSingleQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query ($id: ID!) {
    teleCallerContact(id: $id) {
      id
      Name
      Email
      group {
        Name
        Description
      }
      Contact_Number_1
      Contact_Number_2
      Contact_Number_3
      telecaller_remarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
          }
        }
      }
    }
  }
`;
const AddAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation (
    $name: String!
    $group: ID!
    $email: String!
    $phone1: Long!
    $phone2: Long!
    $phone3: Long!
  ) {
    createTeleCallerContact(
      input: {
        data: {
          Name: $name
          Email: $email
          Contact_Number_1: $phone1
          Contact_Number_2: $phone2
          Contact_Number_3: $phone3
          group: $group
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const GroupsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query GroupsQuery {
    groups {
      id
      Name
      Description
    }
  }
`;
const localitiesQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query {
    localities {
      id
      Name
      post_office {
        Name
        id
        Pincode
      }
    }
  }
`;
const UpdateAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation (
    $id: ID!
    $name: String!
    $group: ID!
    $email: String!
    $phone1: Long!
    $phone2: Long!
    $phone3: Long!
  ) {
    updateTeleCallerContact(
      input: {
        where: { id: $id }
        data: {
          Name: $name
          Email: $email
          Contact_Number_1: $phone1
          Contact_Number_2: $phone2
          Contact_Number_3: $phone3
          group: $group
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const DeleteAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation ($id: ID!) {
    deleteTeleCallerContact(input: { where: { id: $id } }) {
      teleCallerContact {
        id
        Name
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        group {
          Name
          Description
        }
        Email
      }
    }
  }
`;
const AddCommentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation ($id: ID!, $remarks: String!, $date: DateTime!) {
    updateTeleCallerContact(
      input: {
        where: { id: $id }
        data: {
          telecaller_remarks: {
            RemarksText: $remarks
            CallHistory: { event_date_time: $date }
          }
        }
      }
    ) {
      teleCallerContact {
        id
        Name
        Email
        group {
          Name
          Description
        }
        Contact_Number_1
        Contact_Number_2
        Contact_Number_3
        telecaller_remarks {
          RemarksText
          CallHistory {
            event_date_time
            users_permissions_user {
              username
            }
          }
        }
      }
    }
  }
`;
const CustomersQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query {
    customers {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      MarriageMonth
      kp_caller_assigned {
        email
        username
      }
      tele_caller_contact {
        Name
        id
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
        }
      }
    }
  }
`;
const CustomersFilterQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query (
    $is_verified: Boolean
    $kp_caller_assigned_null: Boolean
    $kp_id: ID
    $MarriageMonth_null: Boolean
    $MarriageDate_null: Boolean
  ) {
    customers(
      where: {
        is_verified: $is_verified
        kp_caller_assigned_null: $kp_caller_assigned_null
        kp_caller_assigned: $kp_id
        MarriageDate_null: $MarriageDate_null
        MarriageMonth_null: $MarriageMonth_null
      }
    ) {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      MarriageMonth
      kp_caller_assigned {
        email
        username
      }
      tele_caller_contact {
        Name
        id
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
        }
      }
    }
  }
`;
const CustomerSingleQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query ($id: ID!) {
    customer(id: $id) {
      id
      is_verified
      NameOfBride
      NameOfFather
      NameOfMother
      MarriageDate
      MarriageMonth
      tele_caller_contact {
        Name
        id
      }
      kp_caller_assigned {
        email
        username
      }
      created_at
      FieldReport {
        id
        FinancialBackground
        QtyOfGold
        PreferredWeddingSet
        PlanningForReplacementAfterWedding
        OldGoldExchangeQty
        NoCostEmiRequired
        EmiTenure
        EmiIntervals
        TokenAdvance
        RateAdvance
        EnquiriesFromOthers
        AdvancePaidToOtherJewellery
        NumberOfNewMarriageAddress
      }
      Address {
        id
        HouseName
        Landmark
        locality {
          Name
        }
        post_office {
          Name
          Pincode
          district {
            Name
          }
        }
        GeoLocation {
          Latitude
          Longitude
          GoogleMapURL
        }
      }
      TelecallerRemarks {
        RemarksText
        CallHistory {
          event_date_time
          users_permissions_user {
            username
            email
          }
        }
      }
    }
  }
`;
const AddCustomerMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation (
    $NameOfBride: String!
    $NameOfFather: String!
    $NameOfMother: String!
    $MarriageDate: Date!
    $MarriageMonth: Int!
    $tele_caller_contact: ID!
    $HouseName: String!
    $Landmark: String!
    $locality: ID!
  ) {
    createCustomer(
      input: {
        data: {
          NameOfBride: $NameOfBride
          NameOfFather: $NameOfFather
          NameOfMother: $NameOfMother
          MarriageDate: $MarriageDate
          MarriageMonth: $MarriageMonth
          tele_caller_contact: $tele_caller_contact
          Address: {
            HouseName: $HouseName
            Landmark: $Landmark
            locality: $locality
          }
        }
      }
    ) {
      customer {
        id
        NameOfBride
        NameOfFather
        NameOfMother
        MarriageDate
        MarriageMonth
        tele_caller_contact {
          Name
          id
        }
        created_at
        Address {
          id
          HouseName
          Landmark
          locality {
            Name
          }
          post_office {
            Name
            Pincode
            district {
              Name
            }
          }
          GeoLocation {
            Latitude
            Longitude
            GoogleMapURL
          }
        }
      }
    }
  }
`;
const AddCustomerCommentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation (
    $id: ID!
    $remarks: String!
    $date: DateTime!
    $is_verified: Boolean
  ) {
    updateCustomer(
      input: {
        where: { id: $id }
        data: {
          TelecallerRemarks: {
            RemarksText: $remarks
            CallHistory: { event_date_time: $date }
          }
          is_verified: $is_verified
        }
      }
    ) {
      customer {
        id
        is_verified
        NameOfBride
        NameOfFather
        NameOfMother
        MarriageDate
        MarriageMonth
        tele_caller_contact {
          Name
          id
        }
        created_at
        Address {
          id
          HouseName
          Landmark
          locality {
            Name
          }
          post_office {
            Name
            Pincode
            district {
              Name
            }
          }
          GeoLocation {
            Latitude
            Longitude
            GoogleMapURL
          }
        }
      }
    }
  }
`;
const SetKpCallerMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(input: { where: { id: $id }, data: { kp_customer: $cust_id } }) {
      user {
        id
        kp_customer {
          id
          NameOfBride
          NameOfFather
        }
      }
    }
  }
`;
const SetFieldAgentMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  mutation ($id: ID!, $cust_id: [ID!]!) {
    updateUser(input: { where: { id: $id }, data: { customers: $cust_id } }) {
      user {
        id
        customers {
          NameOfBride
          id
          NameOfFather
          MarriageDate
        }
      }
    }
  }
`;
const UsersQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_4__["gql"] `
  query ($type: String!) {
    users(where: { UserType: $type }) {
      id
      username
      email
      role {
        id
        name
        type
      }
      UserType
    }
  }
`;
let DataService = class DataService {
    constructor(http, apollo) {
        this.http = http;
        this.apollo = apollo;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        this.params = new URLSearchParams();
    }
    Login(data) {
        const httpOptions1 = {
            observe: "response",
        };
        return this.http.post(this.baseURL + `auth/login/`, data, httpOptions1);
    }
    getOrders() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`,
            }),
            observe: "response",
        };
        return this.http.get(this.baseURL + "order/1/shop/", httpOptions);
    }
    getAgents() {
        return this.apollo.watchQuery({
            query: AgentsQuery,
        });
    }
    getSingleAgent(id) {
        return this.apollo.watchQuery({
            query: AgentsSingleQuery,
            variables: {
                id: id,
            },
        });
    }
    AddAgent(agent) {
        return this.apollo.mutate({
            mutation: AddAgentMutation,
            variables: {
                name: agent.name,
                email: agent.email,
                group: agent.group,
                phone1: agent.phone1,
                phone2: agent.phone2,
                phone3: agent.phone3,
            },
            errorPolicy: "all",
        });
    }
    EditAgent(id, agent) {
        return this.apollo.mutate({
            mutation: UpdateAgentMutation,
            variables: {
                id: id,
                name: agent.name,
                email: agent.email,
                group: agent.group,
                phone1: agent.phone1,
                phone2: agent.phone2,
                phone3: agent.phone3,
            },
            errorPolicy: "all",
        });
    }
    AddComment(id, agent) {
        let date = new Date();
        console.log(date.toISOString());
        return this.apollo.mutate({
            mutation: AddCommentMutation,
            variables: {
                id: id,
                remarks: agent.RemarksText,
                date: new Date().toISOString(),
            },
            errorPolicy: "all",
        });
    }
    DeleteAgent(id) {
        return this.apollo.mutate({
            mutation: DeleteAgentMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    getGroups() {
        return this.apollo.watchQuery({
            query: GroupsQuery,
        });
    }
    getLocalities() {
        return this.apollo.watchQuery({
            query: localitiesQuery,
        });
    }
    getCustomers() {
        return this.apollo.watchQuery({
            query: CustomersQuery,
        });
    }
    getUsers(type) {
        return this.apollo.watchQuery({
            query: UsersQuery,
            variables: { type: type },
        });
    }
    getCustomersFilter(verified) {
        return this.apollo.watchQuery({
            query: CustomersFilterQuery,
            variables: verified,
        });
    }
    getSingleCustomer(id) {
        return this.apollo.watchQuery({
            query: CustomerSingleQuery,
            variables: {
                id: id,
            },
        });
    }
    Addcustomer(Customer) {
        return this.apollo.mutate({
            mutation: AddCustomerMutation,
            variables: {
                NameOfBride: Customer.NameOfBride,
                NameOfFather: Customer.NameOfFather,
                NameOfMother: Customer.NameOfMother,
                MarriageDate: Customer.MarriageDate,
                MarriageMonth: parseInt(Customer.MarriageMonth),
                tele_caller_contact: Customer.tele_caller_contact,
                HouseName: Customer.HouseName,
                Landmark: Customer.Landmark,
                locality: Customer.locality,
            },
            errorPolicy: "all",
        });
    }
    AddCustomerComment(id, agent) {
        return this.apollo.mutate({
            mutation: AddCustomerCommentMutation,
            variables: {
                id: id,
                remarks: agent.RemarksText,
                date: new Date().toISOString(),
                is_verified: agent.is_verified,
            },
            errorPolicy: "all",
        });
    }
    SetKpCaller(id, cust_id) {
        return this.apollo.mutate({
            mutation: SetKpCallerMutation,
            variables: {
                id: id,
                cust_id: cust_id,
            },
            errorPolicy: "all",
        });
    }
    SetFieldAgent(id, cust_id) {
        return this.apollo.mutate({
            mutation: SetFieldAgentMutation,
            variables: {
                id: id,
                cust_id: cust_id,
            },
            errorPolicy: "all",
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], apollo_angular__WEBPACK_IMPORTED_MODULE_4__["Apollo"]])
], DataService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "t17N");





let AppComponent = class AppComponent {
    constructor(router, iconSet) {
        this.router = router;
        this.iconSet = iconSet;
        // iconSet singleton
        iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])
], AppComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./graphql.module */ "4KHl");

// import { BrowserModule } from '@angular/platform-browser';





// import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';


// const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
//   suppressScrollX: true
// };

// Import containers




// const APP_CONTAINERS = [
//   DefaultLayoutComponent
// ];

// Import routing module

// Import 3rd party components

// import { TabsModule } from 'ngx-bootstrap/tabs';

let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            // BrowserModule,
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppAsideModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppBreadcrumbModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppSidebarModule"],
            // PerfectScrollbarModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
            // TabsModule.forRoot(),
            // IconModule,
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__["IconSetModule"].forRoot(),
            _graphql_module__WEBPACK_IMPORTED_MODULE_16__["GraphQLModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            // ...APP_CONTAINERS,
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_10__["P404Component"],
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_11__["P500Component"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutComponent"],
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            },
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_7__["IconSetService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_login_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/login/auth.guard */ "nl+3");



// Import Containers





const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        canActivate: [_views_login_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: 'telecaller',
                loadChildren: () => Promise.all(/*! import() | views-telecaller-telecaller-module */[__webpack_require__.e("default~views-kpcaller-kpcaller-module~views-manager-manager-module~views-telecaller-telecaller-module"), __webpack_require__.e("views-telecaller-telecaller-module")]).then(__webpack_require__.bind(null, /*! ./views/telecaller/telecaller.module */ "ZTOn")).then(m => m.TelecallerModule)
            },
            {
                path: 'manager',
                loadChildren: () => Promise.all(/*! import() | views-manager-manager-module */[__webpack_require__.e("default~views-kpcaller-kpcaller-module~views-manager-manager-module~views-telecaller-telecaller-module"), __webpack_require__.e("views-manager-manager-module")]).then(__webpack_require__.bind(null, /*! ./views/manager/manager.module */ "5Q6f")).then(m => m.ManagerModule)
            },
            {
                path: 'kpcaller',
                loadChildren: () => Promise.all(/*! import() | views-kpcaller-kpcaller-module */[__webpack_require__.e("default~views-kpcaller-kpcaller-module~views-manager-manager-module~views-telecaller-telecaller-module"), __webpack_require__.e("views-kpcaller-kpcaller-module")]).then(__webpack_require__.bind(null, /*! ./views/kpcaller/kpcaller.module */ "/oiM")).then(m => m.KpCallerModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | views-dashboard-dashboard-module */ "views-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "6dU7")).then(m => m.DashboardModule)
            }
        ]
    },
    { path: '**', component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "c2Qq":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        role: ""
    },
    {
        name: 'Agents',
        url: '/telecaller/agents',
        icon: 'icon-note',
        role: "TELE_CALLER"
    },
    {
        name: 'Customers',
        url: '/telecaller/customers',
        icon: 'icon-basket-loaded',
        role: "TELE_CALLER"
    },
    {
        name: 'Verification',
        url: '/kpcaller/verification',
        icon: 'icon-cursor',
        role: "KP_CALLER"
    },
    {
        name: 'Assigned',
        url: '/kpcaller/assigned',
        icon: 'icon-cursor',
        role: "KP_CALLER"
    },
    {
        name: 'DNF',
        url: '/kpcaller/dnf',
        icon: 'icon-cursor',
        role: "KP_CALLER"
    },
    {
        name: 'Verified List',
        url: '/manager/verified_list',
        icon: 'icon-phone',
        role: "MANAGER"
    },
    {
        name: 'Customers',
        url: '/manager/customers',
        icon: 'icon-basket-loaded',
        role: "MANAGER"
    },
];


/***/ }),

/***/ "dxhq":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./500.component.html */ "Lrxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let P500Component = class P500Component {
    constructor() { }
};
P500Component.ctorParameters = () => [];
P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P500Component);



/***/ }),

/***/ "lm8q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [navbarBrandRouterLink]=\"['/dashboard']\" [fixed]=\"true\"\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.png',width:200,alt: 'CartIntoCar Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CartIntoCar Logo'}\"\n  [sidebarToggler]=\"'lg'\">\n  <ul class=\"nav navbar-nav ml-auto\">\n    {{userName}}\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\n        dropdownToggle (click)=\"false\">\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" />\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\n        <a class=\"dropdown-item\"><i class=\"fa fa-user\"></i>{{userName}}</a>\n        <div class=\"divider\"></div>\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\n      </div>\n    </li>\n  </ul>\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\"\n    (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <cui-breadcrumb>\n    </cui-breadcrumb>\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div>\n  </main>\n</div>\n<app-footer>\n  <span><a>Jewel Telecaller</a> &copy; 2021 jewel.</span>\n  <!-- <span class=\"ml-auto\">Powered by <a href=\"https://www.upsquad.in\">upsquad</a></span> -->\n</app-footer>");

/***/ }),

/***/ "nAJl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"app-body bg-image\">\n  <main class=\"main d-flex align-items-center\" style=\"background-color: rgba(0, 0, 0, 0.8);\">\n    <div class=\"login-box\">\n      <div class=\"card p-4\" style=\"width: fit-content;\">\n        <div class=\"card-body\">\n          <form>\n            <h1>Login</h1>\n            <p class=\"text-muted\">Welcome back! Please log in to your account</p>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n            </div>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\"\n                required>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-6\">\n                <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </main>\n</div> -->\n<!-- <div class=\"bg-image\"> -->\n<div class=\"d-md-flex h-md-100 align-items-center\">\n  <div class=\"col-md-6 p-0 bg-black h-md-100 login-screen\">\n    <div class=\"text-white d-md-flex align-items-center h-100 text-center justify-content-center\">\n      <div class=\"container-fluid bg-image\" style=\" height: 100vh \">\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 p-0 bg-white h-md-100\">\n    <div class=\"d-md-flex align-items-center h-md-100 justify-content-center\">\n      <div class=\"container-fluid fallback-image\" style=\" height: 100vh \">\n        <form class=\"login-box\" #usForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <h1>JEWEL</h1>\n          <p class=\"text-muted\">Welcome back! Please log in to your account</p>\n          <div class=\"input-group mb-3\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" id=\"login\" maxlength=\"80\" size=\"30\" ngModel\n              value=\"\" name=\"identifier\" required>\n          </div>\n          <div class=\"input-group mb-4\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n            </div>\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\" size=\"30\" ngModel\n              name=\"password\" value=\"\" required>\n          </div>\n          <!-- <div class=\"row\"> -->\n          <!-- <div class=\"col-6\"> -->\n          <button type=\"submit\" class=\"btn btn-lg px-4\" style=\"background-color: #43425D; color: white;\">\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\">\n            </span>Login\n          </button>\n          <!-- </div> -->\n          <!-- </div> -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- </div> -->");

/***/ }),

/***/ "nl+3":
/*!*******************************************!*\
  !*** ./src/app/views/login/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "1BUF");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            console.log(currentUser, 'authguard', route.data.roles);
            // check if route is restricted by role
            if (route.data.roles &&
                route.data.roles.indexOf(currentUser.user.UserType) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/500']);
                console.log('authguard failed');
                return false;
            }
            // authorised so return true
            return true;
        }
        console.log(currentUser, 'authguard il kerilla', route.data.roles);
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map