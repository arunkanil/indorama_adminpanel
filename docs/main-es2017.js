(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashikvashraf/Documents/AngularProjects/indorama_adminpanel/src/main.ts */"zUnb");


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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "EApP");







let AuthenticationService = class AuthenticationService {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        console.log("curentuser", this.currentUserSubject);
        return this.currentUserSubject.value;
    }
    login(data) {
        return this.http
            .post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl}/api/auth/local/`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            // login successful if there's a jwt token in the response
            console.log(user);
            if (user.jwt && (user.user.UserType == "Admin" || user.user.UserType == "Marketing")) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("token", user.jwt);
                localStorage.setItem("username", user.user.username);
                localStorage.setItem("uid", user.user.id);
                localStorage.setItem("user_type", user.user.UserType);
                localStorage.setItem("email", user.user.email);
                localStorage.setItem("name", user.user.Name);
                localStorage.setItem("phone_number", user.user.ContactNumber);
                localStorage.setItem("currentUser", JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            else {
                this.toastr.error("You're not authorized");
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
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "nbgS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-angular/http */ "F/12");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client/link/context */ "MWEN");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
// import { NgModule } from "@angular/core";
// import { APOLLO_OPTIONS, APOLLO_NAMED_OPTIONS } from "apollo-angular";
// import {
//   ApolloClientOptions,
//   ApolloLink,
//   InMemoryCache,
// } from "@apollo/client/core";
// import { setContext } from "@apollo/client/link/context";
// import { HttpLink } from "apollo-angular/http";
// import { environment } from "../environments/environment";

// const uri = `${environment.apiUrl}/graphql`;
// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   const basic = setContext((operation, context) => ({
//     headers: {
//       Accept: "charset=utf-8",
//     },
//   }));
//   // Get the authentication token from local storage if it exists
//   const token = localStorage.getItem("token");
//   const auth = setContext((operation, context) => ({
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }));
//   return {
//     link: ApolloLink.from([basic, auth, httpLink.create({ uri })]),
//     cache: new InMemoryCache(),
//   };
// }
// export function createNamedApollo(
//   httpLink: HttpLink
// ): Record<string, ApolloClientOptions<any>> {
//   const basic = setContext((operation, context) => ({
//     headers: {
//       Accept: "charset=utf-8",
//     },
//   }));
//   return {
//     second: {
//       name: "second",
//       link: ApolloLink.from([ basic, httpLink.create({ uri }) ]),
//       cache: new InMemoryCache(),
//     },
//   };
// }
// @NgModule({
//   providers: [
//     {
//       provide: APOLLO_OPTIONS,
//       useFactory: createApollo,
//       deps: [HttpLink],
//     },
//     {
//       provide: APOLLO_NAMED_OPTIONS,
//       deps: [HttpLink],
//       useFactory: createNamedApollo,
//     },
//   ],
// })
// export class GraphQLModule {}







const uri = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl}/graphql`;
function createApollo(httpLink) {
    const basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((operation, context) => ({
        headers: {
            Accept: 'charset=utf-8'
        }
    }));
    const auth = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((operation, context) => {
        const token = localStorage.getItem('token');
        if (token === null) {
            return {};
        }
        else {
            return {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
        }
    });
    const link = _apollo_client_core__WEBPACK_IMPORTED_MODULE_5__["ApolloLink"].from([basic, auth, httpLink.create({ uri })]);
    const cache = new _apollo_client_core__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"]();
    return {
        link,
        cache
    };
}
let GraphQLModule = class GraphQLModule {
};
GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ],
        providers: [{
                provide: apollo_angular__WEBPACK_IMPORTED_MODULE_3__["APOLLO_OPTIONS"],
                useFactory: createApollo,
                deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpLink"]]
            }]
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
    apiUrl: "https://indoramaapp.untanglestrategy.com"
    // apiUrl: "https://farmgrow.indoramafertilizers.com:88"
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
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"].filter((item) => item.role === localStorage.getItem('user_type') || item.role === '');
        this.authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
        // console.log("constructor",this.currentUser.user.UserType)
    }
    toggleMinimize(e) {
        var _a;
        this.sidebarMinimized = e;
        console.log((_a = this.currentUser.user) === null || _a === void 0 ? void 0 : _a.UserType);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication.service */ "1BUF");









let LoginComponent = class LoginComponent {
    constructor(dataservice, route, router, authenticationService, toastr) {
        this.dataservice = dataservice;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
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
        this.loading = true;
        this.loginForm = this.usForm.value;
        console.log(this.loginForm);
        this.loading = true;
        this.router.navigate(["/dashboard"]);
        // this.toastr.success("Login successful");
        this.authenticationService
            .login(this.loginForm)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe((data) => {
            this.loading = false;
            this.router.navigate([this.returnUrl]);
            this.toastr.success("Login successful");
        }, (error) => {
            this.error = error;
            this.loading = false;
            console.log(error);
            this.toastr.error(error.error.error.message);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent.propDecorators = {
    usForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["usForm",] }]
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-angular */ "nbgS");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");








const FarmDemosQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($page: Int, $pageSize: Int) {
    farmDemos(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          AreaOfField
          isPesticidesUsed
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
          DateOfHarvesting
          Season
          Status
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const FarmDemoQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    farmDemo(id: $id) {
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
          AreaOfField
          isPesticidesUsed
          DateOfHarvesting
          Season
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Status
          Images {
            data {
              id
              attributes {
                name
                previewUrl
                url
              }
            }
          }
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const AddFarmDemoMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $farmer: String
    $latitude: Float
    $longitude: Float
    $lga: ID
    $state: ID
    $crop: ID
    $area: String
    $farmerPractise: ComponentFarmDemoFarmDemoPractiseInput
    $indoramaPractise: ComponentFarmDemoFarmDemoPractiseInput
    $dateOfHarvesting: Date
    $season: String
    $Status: ENUM_FARMDEMO_STATUS
    $isPesticidesUsed: Boolean
    $images: [ID]
  ) {
    createFarmDemo(
      data: {
        Farmer: $farmer
        FarmLocationLatitude: $latitude
        FarmLocationLongitude: $longitude
        lgas: $lga
        state: $state
        crop: $crop
        Status: $Status
        AreaOfField: $area
        FarmerPractise: $farmerPractise
        IndoramaPractise: $indoramaPractise
        isPesticidesUsed: $isPesticidesUsed
        DateOfHarvesting: $dateOfHarvesting
        Season: $season
        Images: $images
      }
    ) {
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Status
          AreaOfField
          isPesticidesUsed
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
          DateOfHarvesting
          Season
        }
      }
    }
  }
`;
const UpdateFarmDemo = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $id: ID!
    $farmer: String
    $latitude: Float
    $longitude: Float
    $lga: ID
    $crop: ID
    $area: String
    $farmerPractise: ComponentFarmDemoFarmDemoPractiseInput
    $indoramaPractise: ComponentFarmDemoFarmDemoPractiseInput
    $dateOfHarvesting: Date
    $season: String
    $isPesticidesUsed: Boolean
    $images: [ID]
    $Status: ENUM_FARMDEMO_STATUS
    $state: ID
  ) {
    updateFarmDemo(
      id: $id
      data: {
        Farmer: $farmer
        FarmLocationLatitude: $latitude
        FarmLocationLongitude: $longitude
        lgas: $lga
        crop: $crop
        Status: $Status
        state: $state
        AreaOfField: $area
        FarmerPractise: $farmerPractise
        IndoramaPractise: $indoramaPractise
        isPesticidesUsed: $isPesticidesUsed
        DateOfHarvesting: $dateOfHarvesting
        Season: $season
        Images: $images
      }
    ) {
      data {
        id
        attributes {
          Farmer
          FarmLocationLatitude
          FarmLocationLongitude
          Status
          Season
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          AreaOfField
          isPesticidesUsed
          FarmerPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          IndoramaPractise {
            id
            Yield
            DateOfSowing
            DateOfDemonstration
            FirstUreaApplication
            SecondUreaApplication
          }
          Images {
            data {
              attributes {
                url
              }
            }
          }
          DateOfHarvesting
          Season
        }
      }
    }
  }
`;
const CropsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query {
    crops(pagination: { limit: 10000 }, sort: "createdAt:desc") {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CropsMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $image: ID) {
    createCrop(data: { Name: $Name, Image: $image }) {
      data {
        id
        attributes {
          Name
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateCrops = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $id: ID!, $isDelete: Boolean, $image: ID) {
    updateCrop(
      id: $id
      data: { Name: $Name, Image: $image, isDelete: $isDelete }
    ) {
      data {
        id
        attributes {
          Name
          isDelete
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const StatesQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query {
    states(pagination: { limit: 10000 }, sort: "createdAt:desc") {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          markets {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const StatesMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String) {
    createState(data: { Name: $Name }) {
      data {
        id
        attributes {
          Name
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          markets {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateState = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $id: ID!, $isDelete: Boolean) {
    updateState(id: $id, data: { Name: $Name, isDelete: $isDelete }) {
      data {
        id
        attributes {
          Name
          lgas {
            data {
              id
              attributes {
                Name
              }
            }
          }
          markets {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
          isDelete
        }
      }
    }
  }
`;
const LGAquery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    lgas(
      pagination: { limit: 10000 }
      sort: "createdAt:desc"
      filters: { state: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const LGAmutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $state: ID) {
    createLga(data: { Name: $Name, state: $state }) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateLGA = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $state: ID, $id: ID!, $isDelete: Boolean) {
    updateLga(
      id: $id
      data: { Name: $Name, isDelete: $isDelete, state: $state }
    ) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const Villagesquery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    villages(
      pagination: { limit: 10000 }
      sort: "createdAt:desc"
      filters: { area: { lga: { id: { eq: $id } } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          area {
            data {
              id
              attributes {
                Name
                PostalCode
                lga {
                  data {
                    id
                    attributes {
                      Name
                      state {
                        data {
                          id
                          attributes {
                            Name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          localizations {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
        __typename
      }
    }
  }
`;
const VillageMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $area: ID) {
    createVillage(data: { Name: $Name, area: $area }) {
      data {
        id
        attributes {
          Name
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateVillage = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $area: ID, $id: ID!, $isDelete: Boolean) {
    updateVillage(
      id: $id
      data: { Name: $Name, area: $area, isDelete: $isDelete }
    ) {
      data {
        id
        attributes {
          Name
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          isDelete
        }
      }
    }
  }
`;
const Areasquery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    areas(
      pagination: { limit: 10000 }
      sort: "createdAt:desc"
      filters: { lga: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          PostalCode
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          villages {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const AreaMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $PostalCode: Long, $lga: ID) {
    createArea(data: { Name: $Name, PostalCode: $PostalCode, lga: $lga }) {
      data {
        id
        attributes {
          Name
          PostalCode
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          villages {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateArea = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $Name: String
    $lga: ID
    $PostalCode: Long
    $id: ID!
    $isDelete: Boolean
  ) {
    updateArea(
      id: $id
      data: {
        Name: $Name
        PostalCode: $PostalCode
        lga: $lga
        isDelete: $isDelete
      }
    ) {
      data {
        id
        attributes {
          Name
          PostalCode
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          villages {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const MarketQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    markets(
      pagination: { limit: 10000 }
      sort: "createdAt:desc"
      filters: { state: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const MarketMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $state: ID) {
    createMarket(data: { Name: $Name, state: $state }) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const UpdateMarket = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Name: String, $state: ID, $id: ID!, $isDelete: Boolean) {
    updateMarket(
      id: $id
      data: { Name: $Name, isDelete: $isDelete, state: $state }
    ) {
      data {
        id
        attributes {
          Name
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const CropPricesQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query (
    $page: Int
    $pageSize: Int
    $publicationState: PublicationState
    $publishedAt: DateTime
    $Rejected: Boolean
  ) {
    cropPrices(
      publicationState: $publicationState
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: {
        and: [
          { publishedAt: { eq: $publishedAt } }
          { Rejected: { eq: $Rejected } }
        ]
      }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Unit
          Rejected
          market {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Image {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                url
                previewUrl
              }
            }
          }
          user {
            data {
              id
              attributes {
                Name
                UserType
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
const UpdateCropPriceMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation updateCropPrice(
    $id: ID!
    $crop: ID
    $price: Float
    $state: ID
    $unit: String
    $market: ID
    $image: ID
    $Rejected: Boolean
    $published: DateTime
  ) {
    updateCropPrice(
      id: $id
      data: {
        crop: $crop
        Price: $price
        state: $state
        Unit: $unit
        market: $market
        Image: $image
        Rejected: $Rejected
        publishedAt: $published
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          Unit
          state {
            data {
              attributes {
                Name
              }
            }
          }
          market {
            data {
              attributes {
                Name
              }
            }
          }
          Rejected
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const CropPriceMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation addCropPrice(
    $crop: ID
    $price: Float
    $state: ID
    $unit: String
    $market: ID
    $image: ID
    $published: DateTime
    $user: ID
  ) {
    createCropPrice(
      data: {
        crop: $crop
        Price: $price
        state: $state
        Unit: $unit
        Rejected: false
        market: $market
        Image: $image
        publishedAt: $published
        user: $user
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          Unit
          state {
            data {
              attributes {
                Name
              }
            }
          }
          market {
            data {
              attributes {
                Name
              }
            }
          }
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const RetailerQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($page: Int, $pageSize: Int, $confirmed: Boolean, $blocked: Boolean) {
    usersPermissionsUsers(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: {
        UserType: { eq: "Retailer" }
        confirmed: { eq: $confirmed }
        blocked: { eq: $blocked }
      }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          Name
          email
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          UserType
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          Bio
          Latitude
          Longitude
          blocked
          confirmed
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
        }
      }
    }
  }
`;
const SoilTestQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($page: Int, $pageSize: Int) {
    soilTests(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          SoilTestID
          Status
          ReasonForSoilTest
          ContactNumber
          nutrient
          Farmer {
            data {
              attributes {
                username
                email

                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          area {
            data {
              attributes {
                Name
                PostalCode
              }
            }
          }
          soil_test_samples {
            data {
              attributes {
                SampleID
              }
            }
          }
          PreferredCollectionDate
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const SingleSoilTestQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    soilTest(id: $id) {
      data {
        id
        attributes {
          SoilTestID
          Status
          ReasonForSoilTest
          ContactNumber
          nutrient
          Farmer {
            data {
              id
              attributes {
                username
                email

                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
                PostalCode
              }
            }
          }
          soil_test_samples {
            data {
              id
              attributes {
                SampleID
                QuantityOfSamples
                createdAt
                updatedAt
                SampleAddedBy {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
                soil_test_results {
                  data {
                    id
                    attributes {
                      soil_test_sample {
                        data {
                          id
                          attributes {
                            SampleID
                          }
                        }
                      }
                      phObserved
                      OrganicCarbonObserved
                      TotalNitrogenObserved
                      PhosphorousObserved
                      PotassiumObserved
                      CalciumObserved
                      MagnesiumObserved
                      ZincObserved
                      SulphurObserved
                      IronObserved
                      CopperObserved
                      BoronObserved
                      ManganeseObserved
                      RecommendedNPKQty
                      RecommendedUreaQty
                      updatedAt
                    }
                  }
                }
              }
            }
          }
          PreferredCollectionDate
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateSoilTest = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation updateSoilTest(
    $soilTestId: ID!
    $contactNumber: String
    $preferredCollectionDate: DateTime
    $reason: String
    $farmerID: ID
    $areaID: ID
    $lgaID: ID
    $soilTestDisplayID: String
    $status: ENUM_SOILTEST_STATUS
    $nutrient: String
  ) {
    updateSoilTest(
      id: $soilTestId
      data: {
        ContactNumber: $contactNumber
        PreferredCollectionDate: $preferredCollectionDate
        ReasonForSoilTest: $reason
        Farmer: $farmerID
        area: $areaID
        lga: $lgaID
        SoilTestID: $soilTestDisplayID
        Status: $status
        nutrient: $nutrient
      }
    ) {
      data {
        id
        attributes {
          ContactNumber
          PreferredCollectionDate
          ReasonForSoilTest
          Farmer {
            data {
              id
              attributes {
                username
                Name
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
              }
            }
          }
          SoilTestID
          Status
          nutrient
        }
      }
    }
  }
`;
const UsersQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($UserType: String, $page: Int, $pageSize: Int) {
    usersPermissionsUsers(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
      filters: { UserType: { eq: $UserType } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          Name
          email
          blocked
          confirmed
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
        }
      }
    }
  }
`;
const AddSoilTestResult = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation soilTestAddResult(
    $soilTestSampleID: ID
    $ph: String
    $Carbon: String
    $Nitrogen: String
    $phosphorous: String
    $pottassium: String
    $calcium: String
    $magnesium: String
    $zinc: String
    $sulphur: String
    $iron: String
    $copper: String
    $boron: String
    $manganese: String
    $RecommendedNPKQty: String
    $RecommendedUreaQty: String
  ) {
    createSoilTestResult(
      data: {
        soil_test_sample: $soilTestSampleID
        phObserved: $ph
        OrganicCarbonObserved: $Carbon
        TotalNitrogenObserved: $Nitrogen
        PhosphorousObserved: $phosphorous
        PotassiumObserved: $pottassium
        CalciumObserved: $calcium
        MagnesiumObserved: $magnesium
        ZincObserved: $zinc
        SulphurObserved: $sulphur
        IronObserved: $iron
        CopperObserved: $copper
        BoronObserved: $boron
        ManganeseObserved: $manganese
        RecommendedNPKQty: $RecommendedNPKQty
        RecommendedUreaQty: $RecommendedUreaQty
      }
    ) {
      data {
        attributes {
          soil_test_sample {
            data {
              id
              attributes {
                SampleID
              }
            }
          }
          phObserved
          OrganicCarbonObserved
          TotalNitrogenObserved
          PhosphorousObserved
          PotassiumObserved
          CalciumObserved
          MagnesiumObserved
          ZincObserved
          SulphurObserved
          CopperObserved
          IronObserved
          BoronObserved
          ManganeseObserved
        }
      }
    }
  }
`;
const UpdateSoilTestResult = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation soilTestAddResult(
    $id: ID!
    $soilTestSampleID: ID
    $ph: String
    $Carbon: String
    $Nitrogen: String
    $phosphorous: String
    $pottassium: String
    $calcium: String
    $magnesium: String
    $zinc: String
    $sulphur: String
    $iron: String
    $copper: String
    $boron: String
    $manganese: String
    $RecommendedNPKQty: String
    $RecommendedUreaQty: String
  ) {
    updateSoilTestResult(
      id: $id
      data: {
        soil_test_sample: $soilTestSampleID
        phObserved: $ph
        OrganicCarbonObserved: $Carbon
        TotalNitrogenObserved: $Nitrogen
        PhosphorousObserved: $phosphorous
        PotassiumObserved: $pottassium
        CalciumObserved: $calcium
        MagnesiumObserved: $magnesium
        ZincObserved: $zinc
        SulphurObserved: $sulphur
        IronObserved: $iron
        CopperObserved: $copper
        BoronObserved: $boron
        ManganeseObserved: $manganese
        RecommendedNPKQty: $RecommendedNPKQty
        RecommendedUreaQty: $RecommendedUreaQty
      }
    ) {
      data {
        attributes {
          soil_test_sample {
            data {
              id
              attributes {
                SampleID
              }
            }
          }
          phObserved
          OrganicCarbonObserved
          TotalNitrogenObserved
          PhosphorousObserved
          PotassiumObserved
          CalciumObserved
          MagnesiumObserved
          ZincObserved
          SulphurObserved
          CopperObserved
          IronObserved
          BoronObserved
          ManganeseObserved
        }
      }
    }
  }
`;
const GetSingleRetailerQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID) {
    usersPermissionsUsers(filters: { id: { eq: $id } }) {
      data {
        id
        attributes {
          username
          Name
          blocked
          confirmed
          email
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              id
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          agronomist_lgas {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                      lgas {
                        data {
                          id
                          attributes {
                            Name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              id
              attributes {
                url
              }
            }
          }
          createdAt
          updatedAt
          blocked
          ContactNumber
        }
      }
    }
  }
`;
const updateRetailerProfPic = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation editRetailer($id: ID!, $prof_pic: ID) {
    updateUsersPermissionsUser(id: $id, data: { prof_pic: $prof_pic }) {
      data {
        id
        attributes {
          username
          Name
          email
          prof_pic {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
        }
      }
    }
  }
`;
const updateRetailerQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation editRetailer(
    $id: ID!
    $name: String
    $village: ID
    $lga: ID
    $UserType: ENUM_USERSPERMISSIONSUSER_USERTYPE
    $categories: [ID]
    $bio: String
    $latitude: Float
    $longitude: Float
    $profpic: ID
    $password: String
    $blocked: Boolean
    $confirmed: Boolean
    $contactNumber: String
    $agronomist_lgas: [ID]
  ) {
    updateUsersPermissionsUser(
      id: $id
      data: {
        Name: $name
        village: $village
        lga: $lga
        UserType: $UserType
        retailer_categories: $categories
        Bio: $bio
        blocked: $blocked
        password: $password
        confirmed: $confirmed
        Latitude: $latitude
        Longitude: $longitude
        prof_pic: $profpic
        ContactNumber: $contactNumber
        agronomist_lgas: $agronomist_lgas
      }
    ) {
      data {
        id
        attributes {
          username
          Name
          email
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          retailer_categories {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          retailer_products {
            data {
              attributes {
                ItemName
                Price
                Unit
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
          agronomist_lgas {
            data {
              id
              attributes {
                Name
                state {
                  data {
                    id
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
          UserType
          Bio
          Latitude
          Longitude
          UserType
          prof_pic {
            data {
              attributes {
                url
              }
            }
          }
          ContactNumber
          confirmed
          blocked
        }
      }
    }
  }
`;
const getRetailerCategories = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query {
    retailerCategories {
      data {
        id
        attributes {
          CategoryName
          createdAt
          CategoryImage {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;
const createdRetailerProducts = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $ItemName: String
    $Price: Int
    $Unit: String
    $Images: [ID]
    $retailer_category: ID
    $retailers: [ID]
  ) {
    createRetailerProduct(
      data: {
        ItemName: $ItemName
        Price: $Price
        Unit: $Unit
        Images: $Images
        retailer_category: $retailer_category
        retailers: $retailers
      }
    ) {
      data {
        id
        attributes {
          ItemName
          Unit
          Price
          Images {
            data {
              id
            }
          }
          retailer_category {
            data {
              id
            }
          }
          retailers {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
const updateRetailerProducts = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation editRetailerProduct(
    $productId: ID!
    $itemName: String
    $price: Int
    $unit: String
    $images: [ID]
    $isApproved: Boolean
    $retailer: [ID]
    $retailer_category: ID
  ) {
    updateRetailerProduct(
      id: $productId
      data: {
        ItemName: $itemName
        Price: $price
        Unit: $unit
        Images: $images
        isApproved: $isApproved
        retailers: $retailer
        retailer_category: $retailer_category
      }
    ) {
      data {
        attributes {
          ItemName
          Price
          Unit
          retailers {
            data {
              id
              attributes {
                Name
              }
            }
          }
          retailer_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          isApproved
        }
      }
    }
  }
`;
const DeleteStatesMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteState(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteLGAMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteLga(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteAreaMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteArea(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteVillageMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteVillage(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteCropMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteCrop(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteMarketMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteMarket(id: $id) {
      data {
        attributes {
          Name
        }
      }
    }
  }
`;
const DeleteFarmdemo = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteFarmDemo(id: $id) {
      data {
        attributes {
          Farmer
          DateOfHarvesting
        }
      }
    }
  }
`;
const DeleteRetailerProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteRetailerProduct(id: $id) {
      data {
        attributes {
          ItemName
          Price
        }
      }
    }
  }
`;
const DeleteFile = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteUploadFile(id: $id) {
      data {
        id
      }
    }
  }
`;
const DeleteUser = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteUsersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
        }
      }
    }
  }
`;
const DeleteBestPractice = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteBestCropPractise(id: $id) {
      data {
        attributes {
          content
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const DeleteActivity = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteActivity(id: $id) {
      data {
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
        }
      }
    }
  }
`;
const DeleteMarketplaceProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteMarketplaceProduct(id: $id) {
      data {
        attributes {
          ItemName
          Price
          AvailableQty
        }
      }
    }
  }
`;
const CreateAgronomist = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($areas: [ID], $user: ID) {
    createAgronomist(data: { areas: $areas, users_permissions_user: $user }) {
      data {
        id
        attributes {
          users_permissions_user {
            data {
              id
              attributes {
                username
                Name
                UserType
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const getAgronomist = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($user: ID) {
    agronomists(filters: { users_permissions_user: { id: { eq: $user } } }) {
      data {
        id
        attributes {
          users_permissions_user {
            data {
              id
              attributes {
                username
                Name
                UserType
              }
            }
          }
          areas {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;
const queryUsersLarge = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($UserType: String, $village: ID, $lga: ID, $area: ID, $state: ID) {
    usersPermissionsUsers(
      pagination: { limit: 10000 }
      sort: "createdAt:desc"
      filters: {
        UserType: { eq: $UserType }
        village: {
          or: [{ id: { eq: $village } }, { area: { id: { eq: $area } } }]
        }
        lga: { or: [{ id: { eq: $lga } }, { state: { id: { eq: $state } } }] }
      }
    ) {
      data {
        id
        attributes {
          Name
          ContactNumber
        }
      }
    }
  }
`;
const getIndoramaUpdates = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query (
    $isDelete: Boolean
    $isActive: Boolean
    $id: ID
    $page: Int
    $pageSize: Int
  ) {
    newsAndUpdates(
      sort: "createdAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
      filters: {
        isActive: { eq: $isActive }
        isDelete: { eq: $isDelete }
        id: { eq: $id }
      }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          Title
          Body
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          isActive
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const UpdateIndoramaUpdates = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $id: ID!
    $Title: String
    $Body: String
    $isDelete: Boolean
    $isActive: Boolean
    $Images: [ID]
  ) {
    updateNewsAndUpdate(
      id: $id
      data: {
        Title: $Title
        Body: $Body
        isActive: $isActive
        isDelete: $isDelete
        Images: $Images
      }
    ) {
      data {
        id
        attributes {
          Title
          Body
          isActive
          isDelete
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const CreateIndoramaUpdates = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($Title: String, $Body: String, $Images: [ID]) {
    createNewsAndUpdate(
      data: {
        Title: $Title
        Body: $Body
        isActive: true
        isDelete: false
        Images: $Images
      }
    ) {
      data {
        id
        attributes {
          Title
          Body
          isActive
          isDelete
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GetMarketplace = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($pageNumber: Int, $pageSize: Int, $categoryFilter: [ID]) {
    marketplaceProducts(
      filters: { marketplace_category: { id: { in: $categoryFilter } } }
      pagination: { page: $pageNumber, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              attributes {
                Name
                username
                ContactNumber
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const GetMarketplaceSingleProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID!) {
    marketplaceProduct(id: $id) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              attributes {
                Name
                username
                ContactNumber
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CreateMarketplaceProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation sellItemMarketplace(
    $itemName: String
    $images: [ID]
    $userId: ID
    $contactNumber: String
    $price: Int
    $availableQty: Int
    $unit: String
    $category: ID
    $description: String
  ) {
    createMarketplaceProduct(
      data: {
        ItemName: $itemName
        Images: $images
        seller: $userId
        contactNumber: $contactNumber
        Price: $price
        AvailableQty: $availableQty
        Unit: $unit
        marketplace_category: $category
        description: $description
      }
    ) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
const UpdateMarketplaceProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation updateMarketplaceProduct(
    $itemName: String
    $images: [ID]
    $contactNumber: String
    $price: Int
    $id: ID!
    $availableQty: Int
    $unit: String
    $category: ID
    $description: String
  ) {
    updateMarketplaceProduct(
      id: $id
      data: {
        ItemName: $itemName
        Images: $images
        contactNumber: $contactNumber
        Price: $price
        AvailableQty: $availableQty
        Unit: $unit
        marketplace_category: $category
        description: $description
      }
    ) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
const UpdateMarketplaceProductImg = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation updateMarketplaceProduct($images: [ID], $id: ID!) {
    updateMarketplaceProduct(id: $id, data: { Images: $images }) {
      data {
        id
        attributes {
          ItemName
          Images {
            data {
              id
              attributes {
                url
              }
            }
          }
          seller {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
          description
          contactNumber
          Price
          AvailableQty
          Unit
          marketplace_category {
            data {
              id
              attributes {
                CategoryName
              }
            }
          }
          createdAt
        }
      }
    }
  }
`;
const GetBestCropPractices = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query getBestCropPractises($cropFilter: ID, $page: Int, $pageSize: Int) {
    bestCropPractises(
      filters: { crop: { id: { eq: $cropFilter } } }
      pagination: { page: $page, pageSize: $pageSize }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
        }
      }
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          media {
            data {
              id
              attributes {
                name
                formats
                url
                size
                mime
                ext
              }
            }
          }
          content
          cropImage {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const CreateBestCropPractices = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($crop: ID, $media: ID, $content: String, $cropImage: ID) {
    createBestCropPractise(
      data: {
        crop: $crop
        media: $media
        content: $content
        cropImage: $cropImage
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          media {
            data {
              id
              attributes {
                name
                formats
                url
                size
                mime
                ext
              }
            }
          }
          content
          cropImage {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GetMarketplaceCategories = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query {
    marketplaceCategories(
      filters: { isDelete: { eq: false }, isActive: { eq: true } }
      sort: "CategoryName:asc"
    ) {
      data {
        id
        attributes {
          CategoryName
          CategoryImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          isDelete
          isActive
        }
      }
    }
  }
`;
const GetActivities = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query getActivities($page: Int, $pageSize: Int) {
    activities(
      sort: "createdAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ActivityType
          Time
          createdAt
        }
      }
    }
  }
`;
const GetSingleActivity = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query getActivities($id: ID) {
    activity(id: $id) {
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ActivityType
          Time
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CreateActivities = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $FarmerName: String
    $Date: Date
    $Latitude: Float
    $Longitude: Float
    $NoOfAttendees: Int
    $crop: ID
    $ConditionOfCrop: String
    $PlannedFarmDay: Date
    $Reason: String
    $area: ID
    $ActivityType: ENUM_ACTIVITY_ACTIVITYTYPE
    $Time: String
  ) {
    createActivity(
      data: {
        FarmerName: $FarmerName
        Date: $Date
        Latitude: $Latitude
        Longitude: $Longitude
        NoOfAttendees: $NoOfAttendees
        crop: $crop
        ConditionOfCrop: $ConditionOfCrop
        PlannedFarmDay: $PlannedFarmDay
        Reason: $Reason
        area: $area
        ActivityType: $ActivityType
        Time: $Time
      }
    ) {
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ActivityType
          Time
        }
      }
    }
  }
`;
const UpdateActivity = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $FarmerName: String
    $Date: Date
    $Latitude: Float
    $Longitude: Float
    $NoOfAttendees: Int
    $crop: ID
    $ConditionOfCrop: String
    $PlannedFarmDay: Date
    $Reason: String
    $area: ID
    $ActivityType: ENUM_ACTIVITY_ACTIVITYTYPE
    $Time: String
    $id: ID!
  ) {
    updateActivity(
      id: $id
      data: {
        FarmerName: $FarmerName
        Date: $Date
        Latitude: $Latitude
        Longitude: $Longitude
        NoOfAttendees: $NoOfAttendees
        crop: $crop
        ConditionOfCrop: $ConditionOfCrop
        PlannedFarmDay: $PlannedFarmDay
        Reason: $Reason
        area: $area
        ActivityType: $ActivityType
        Time: $Time
      }
    ) {
      data {
        id
        attributes {
          FarmerName
          Date
          Latitude
          Longitude
          NoOfAttendees
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ConditionOfCrop
          PlannedFarmDay
          Reason
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ActivityType
          Time
        }
      }
    }
  }
`;
const getDashboardStats = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query dashboardAPI($state: ID, $fromDate: DateTime, $toDate: DateTime) {
    soilTests(
      filters: {
        and: [
          { lga: { state: { id: { eq: $state } } } }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    soilTestSamples(
      filters: {
        and: [
          { soil_test: { lga: { state: { id: { eq: $state } } } } }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    soilTestResults(
      filters: {
        and: [
          {
            soil_test_sample: {
              soil_test: { lga: { state: { id: { eq: $state } } } }
            }
          }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    farmDemos {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
const getCropPricesDashboard = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID, $market: ID, $fromDate: DateTime, $toDate: DateTime) {
    cropPrices(
      publicationState: LIVE
      pagination: { limit: 10000 }
      sort: "publishedAt:desc"
      filters: {
        crop: { id: { eq: $id } }
        market: { id: { eq: $market } }
        publishedAt: { between: [$fromDate, $toDate] }
      }
    ) {
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Unit
          market {
            data {
              id
              attributes {
                Name
              }
            }
          }
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;
const getFarmDemoStatsDashboard = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query dashboardAPI(
    $state: ID
    $status: String
    $fromDate: DateTime
    $toDate: DateTime
  ) {
    all: farmDemos(
      filters: {
        state: { id: { eq: $state } }
        createdAt: { between: [$fromDate, $toDate] }
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
    status: farmDemos(
      filters: {
        and: [
          { state: { id: { eq: $state } } }
          { Status: { eq: $status } }
          { createdAt: { between: [$fromDate, $toDate] } }
        ]
      }
    ) {
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
const getallChats = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($limit: Int, $start: Int, $key: String, $isAskIndorama: Boolean) {
    chats(
      filters: {
        members: {
          or: [{ username: { containsi: $key } }, { Name: { containsi: $key } }]
        }
        isAskIndorama: { eq: $isAskIndorama }
      }
      sort: "updatedAt:desc"
      pagination: { limit: $limit, start: $start }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          isAskIndorama
          members {
            data {
              id
              attributes {
                username
                Name
                UserType
                Name
                prof_pic {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          chatInitiatedBy {
            data {
              id
              attributes {
                username
                Name
                UserType
                Name
                prof_pic {
                  data {
                    id
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getChatMessages = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($id: ID!) {
    chat(id: $id) {
      data {
        id
        attributes {
          messages {
            data {
              id
              attributes {
                message
                createdAt
                updatedAt
                image_attachment {
                  data {
                    id
                    attributes {
                      name
                      width
                      height
                      url
                    }
                  }
                }
                from_user {
                  data {
                    id
                    attributes {
                      username
                      Name
                      UserType
                      prof_pic {
                        data {
                          id
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
                to_user {
                  data {
                    id
                    attributes {
                      username
                      Name
                      UserType
                      prof_pic {
                        data {
                          id
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                }
                chat {
                  data {
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const getSurveys = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($page: Int, $pageSize: Int) {
    surveyForms(
      sort: "updatedAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          SurveyTitle
          SurveyDescription
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const CreateSurveys = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation (
    $SurveyTitle: String
    $SurveyDescription: String
    $Fields: [SurveyFormFieldsDynamicZoneInput!]
  ) {
    createSurveyForm(
      data: {
        SurveyTitle: $SurveyTitle
        SurveyDescription: $SurveyDescription
        Fields: $Fields
      }
    ) {
      data {
        id
        attributes {
          SurveyTitle
          SurveyDescription
          Fields {
            __typename
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getSurveyResults = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($limit: Int, $start: Int, $id: ID) {
    surveyResults(
      sort: "updatedAt:desc"
      pagination: { limit: $limit, start: $start }
      filters: { survey_form: { id: { eq: $id } } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          SurveyResponse
          createdAt
        }
      }
    }
  }
`;
const deleteSurvey = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation ($id: ID!) {
    deleteSurveyForm(id: $id) {
      data {
        attributes {
          SurveyTitle
          SurveyDescription
        }
      }
    }
  }
`;
const getDashboardAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query {
    advertisement {
      data {
        id
        attributes {
          AdImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          updatedAt
        }
      }
    }
  }
`;
const getRetailerAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query {
    retailerAdvertisement {
      data {
        id
        attributes {
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          updatedAt
        }
      }
    }
  }
`;
const updateDashboardAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation updateAdvertisement($imageId: ID, $clickUrl: String) {
    updateAdvertisement(
      data: { AdImage: $imageId, url: $clickUrl, isActive: true }
    ) {
      data {
        id
        attributes {
          AdImage {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const updateRetailerAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation updateAdvertisement($imageId: ID, $clickUrl: String) {
    updateRetailerAdvertisement(
      data: { Image: $imageId, url: $clickUrl, isActive: true }
    ) {
      data {
        id
        attributes {
          Image {
            data {
              id
              attributes {
                url
              }
            }
          }
          url
          isActive
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getSmsCampaigns = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query ($page: Int, $pageSize: Int, $id: ID) {
    smsCampaigns(
      sort: "updatedAt:desc"
      pagination: { page: $page, pageSize: $pageSize }
      filters: { id: { eq: $id } }
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          message
          isAllFarmers
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          recipients {
            data {
              id
              attributes {
                Name
                ContactNumber
              }
            }
          }
          apiKey
          SMSGatewayResponse
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const createSMSCampaign = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  mutation createSMSCampaign(
    $message: String
    $state: ID
    $lga: ID
    $area: ID
    $village: ID
    $isAllFarmers: Boolean
  ) {
    createSmsCampaign(
      data: {
        message: $message
        state: $state
        lga: $lga
        area: $area
        village: $village
        isAllFarmers: $isAllFarmers
      }
    ) {
      data {
        id
        attributes {
          message
          state {
            data {
              id
              attributes {
                Name
              }
            }
          }
          lga {
            data {
              id
              attributes {
                Name
              }
            }
          }
          area {
            data {
              id
              attributes {
                Name
              }
            }
          }
          village {
            data {
              id
              attributes {
                Name
              }
            }
          }
          recipients {
            data {
              id
              attributes {
                Name
                ContactNumber
              }
            }
          }
          apiKey
          SMSGatewayResponse
          isAllFarmers
          createdAt
          updatedAt
        }
      }
    }
  }
`;
const getPendingRetailerApprovals = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query getPendingRetailerApprovals {
    usersPermissionsUsers(
      filters: {
        and: [
          { confirmed: { eq: false } }
          { blocked: { eq: false } }
          { UserType: { eq: "Retailer" } }
        ]
      }
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          username
          Name
          Bio
          email
          confirmed
          blocked
          UserType
          ContactNumber
          isContactNumberVerified
        }
      }
    }
  }
`;
const readApprovalCropPrices = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"] `
  query readApprovalCropPrices {
    cropPrices(
      filters: { publishedAt: { eq: null }, Rejected: { eq: false } }
      publicationState: PREVIEW
      sort: "createdAt:desc"
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          crop {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Price
          Unit
          market {
            data {
              id
              attributes {
                Name
              }
            }
          }
          Image {
            data {
              attributes {
                url
              }
            }
          }
          Rejected
          user {
            data {
              id
              attributes {
                Name
                username
              }
            }
          }
        }
      }
    }
  }
`;
let DataService = class DataService {
    constructor(http, apollo, toastr) {
        this.http = http;
        this.apollo = apollo;
        this.toastr = toastr;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.params = new URLSearchParams();
    }
    handleError(error) {
        let errorMessage = "Unknown error!";
        console.log(error);
        // if (error.error instanceof ErrorEvent) {
        //   // Client-side errors
        //   errorMessage = `Error: ${error.error.message}`;
        // } else {
        //   // Server-side errors
        //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        // }
        if (error.error.message)
            this.toastr.error(error.error.message);
        if (error.status !== 200) {
            this.toastr.error(error.error.error.Message);
            this.toastr.error(error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
    }
    Login(data) {
        const httpOptions1 = {
            observe: "response",
        };
        return this.http.post(this.baseURL + `/auth/login/`, data, httpOptions1);
    }
    createRetailer(data) {
        const httpOptions1 = {
            observe: "response",
        };
        return this.http.post(this.baseURL + `/api/users`, data, httpOptions1);
    }
    fetchMessage(api_token, message_id) {
        return this.http
            .get(`https://www.bulksmsnigeria.com/api/v2/delivery?api_token=${api_token}&message_id=${message_id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getSurveyDetails(data) {
        const httpOptions1 = {
            observe: "response",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/survey-forms/${data}?populate=Fields`, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    downloadActivities(data) {
        const httpOptions1 = {
            observe: "response",
        };
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/activity/download?fromDate=${data.fromDate}&toDate=${data.toDate}`, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    downloadResponses(data) {
        const httpOptions1 = {
            observe: "response",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/survey-result/download?surveyForm=${data}`, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getSoilTestStats(data, fromDate, toDate) {
        const httpOptions1 = {
            observe: "response",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/dashboard-soil-npk?stateId=${data}&fromDate=${fromDate}T00:00:00.000Z&toDate=${toDate}T23:59:59.000Z`, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getFarmDemoYieldStats(data, fromDate, toDate) {
        const httpOptions1 = {
            observe: "response",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api/dashboard-farm-demo?stateId=${data}&fromDate=${fromDate}T00:00:00.000Z&toDate=${toDate}T23:59:59.000Z`, httpOptions1)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
    getDashboardStats(data, fromDate, toDate) {
        return this.apollo.watchQuery({
            query: getDashboardStats,
            fetchPolicy: "no-cache",
            variables: {
                state: data,
                fromDate: `${fromDate}T00:00:00.000Z`,
                toDate: `${toDate}T23:59:59.000Z`,
            },
        });
    }
    getCropPricesDashboard(id, market, fromDate, toDate) {
        return this.apollo.watchQuery({
            query: getCropPricesDashboard,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
                market: market,
                fromDate: `${fromDate}T00:00:00.000Z`,
                toDate: `${toDate}T23:59:59.000Z`,
            },
        });
    }
    getFarmDemoStatsDashboard(state, status, fromDate, toDate) {
        return this.apollo.watchQuery({
            query: getFarmDemoStatsDashboard,
            fetchPolicy: "no-cache",
            variables: {
                state: state,
                status: status,
                fromDate: `${fromDate}T00:00:00.000Z`,
                toDate: `${toDate}T23:59:59.000Z`,
            },
        });
    }
    getPendingRetailerApprovals() {
        return this.apollo.watchQuery({
            query: getPendingRetailerApprovals,
            fetchPolicy: "no-cache",
        });
    }
    getApprovalCropPrices() {
        return this.apollo.watchQuery({
            query: readApprovalCropPrices,
            fetchPolicy: "no-cache",
        });
    }
    getallChats(limit, start, key, isAskIndorama) {
        return this.apollo.watchQuery({
            query: getallChats,
            fetchPolicy: "no-cache",
            variables: {
                limit: limit,
                start: start,
                key: key ? key : undefined,
                isAskIndorama: isAskIndorama ? isAskIndorama : undefined,
            },
        });
    }
    getSurveys(limit, start, key) {
        return this.apollo.watchQuery({
            query: getSurveys,
            fetchPolicy: "no-cache",
            variables: {
                limit: limit,
                start: start,
                key: key ? key : undefined,
            },
        });
    }
    getSmsCampaigns(page, pageSize, id) {
        return this.apollo.watchQuery({
            query: getSmsCampaigns,
            fetchPolicy: "no-cache",
            variables: {
                page: page,
                pageSize: pageSize,
                id: id,
            },
        });
    }
    createSMSCampaign(data) {
        return this.apollo.mutate({
            mutation: createSMSCampaign,
            fetchPolicy: "no-cache",
            variables: {
                message: data.message,
                state: data.state ? data.state : undefined,
                lga: data.lga ? data.lga : undefined,
                area: data.area ? data.area : undefined,
                village: data.village ? data.village : undefined,
                isAllFarmers: !data.isAllFarmers,
            },
        });
    }
    getSurveyResults(id) {
        return this.apollo.watchQuery({
            query: getSurveyResults,
            fetchPolicy: "no-cache",
            variables: {
                limit: 10000,
                id: id,
            },
        });
    }
    createSurveys(SurveyTitle, SurveyDescription, Fields) {
        return this.apollo.mutate({
            mutation: CreateSurveys,
            fetchPolicy: "no-cache",
            variables: {
                SurveyTitle: SurveyTitle,
                SurveyDescription: SurveyDescription,
                Fields: Fields,
            },
        });
    }
    deleteSurvey(id) {
        return this.apollo.mutate({
            mutation: deleteSurvey,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    getChatMessages(id) {
        return this.apollo.watchQuery({
            query: getChatMessages,
            variables: {
                id: id,
            },
            fetchPolicy: "no-cache",
        });
    }
    getFarmDemos(page, pageSize) {
        return this.apollo.watchQuery({
            query: FarmDemosQuery,
            fetchPolicy: "no-cache",
            variables: {
                page: page,
                pageSize: pageSize,
            },
        });
    }
    getSingleFarmDemo(id) {
        return this.apollo.watchQuery({
            query: FarmDemoQuery,
            variables: {
                id: id,
            },
            fetchPolicy: "no-cache",
        });
    }
    getCrops() {
        return this.apollo.watchQuery({
            query: CropsQuery,
            fetchPolicy: "no-cache",
        });
    }
    getStates() {
        return this.apollo.watchQuery({
            query: StatesQuery,
            fetchPolicy: "no-cache",
        });
    }
    getLGAs(id) {
        return this.apollo.watchQuery({
            query: LGAquery,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
        });
    }
    getVillages(id) {
        return this.apollo.watchQuery({
            query: Villagesquery,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
        });
    }
    getAreas(id) {
        return this.apollo.watchQuery({
            query: Areasquery,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
        });
    }
    getMarkets(id) {
        return this.apollo.watchQuery({
            query: MarketQuery,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
        });
    }
    getCropPrices(page, pageSize, PublicationState, publishedAt, Rejected) {
        return this.apollo.watchQuery({
            query: CropPricesQuery,
            fetchPolicy: "no-cache",
            variables: {
                page: page,
                pageSize: pageSize,
                publicationState: PublicationState,
                publishedAt: publishedAt,
                Rejected: Rejected,
            },
        });
    }
    getRetailers(page, pageSize, confirmed, blocked) {
        return this.apollo.watchQuery({
            query: RetailerQuery,
            fetchPolicy: "no-cache",
            variables: {
                page: page,
                pageSize: pageSize,
                confirmed: confirmed,
                blocked: blocked,
            },
        });
    }
    getRetailerCategories() {
        return this.apollo.watchQuery({
            query: getRetailerCategories,
            fetchPolicy: "no-cache",
        });
    }
    getUsers(page, pageSize, UserType) {
        let variables = {
            page: page,
            pageSize: pageSize,
        };
        if (UserType != null) {
            variables["UserType"] = UserType;
        }
        return this.apollo.watchQuery({
            query: UsersQuery,
            fetchPolicy: "no-cache",
            variables: variables,
        });
    }
    getUsersLarge(UserType, data) {
        return this.apollo.watchQuery({
            query: queryUsersLarge,
            fetchPolicy: "no-cache",
            variables: {
                UserType: UserType,
                village: data.village ? data.village : null,
                lga: data.lga ? data.lga : null,
                area: data.area ? data.area : null,
                state: data.state ? data.state : null,
            },
        });
    }
    getsoilTests(page, pageSize) {
        return this.apollo.watchQuery({
            query: SoilTestQuery,
            fetchPolicy: "no-cache",
            variables: {
                page: page,
                pageSize: pageSize,
            },
        });
    }
    getsingleSoilTests(id) {
        return this.apollo.watchQuery({
            query: SingleSoilTestQuery,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
        });
    }
    getsingleRetailer(id) {
        return this.apollo.watchQuery({
            query: GetSingleRetailerQuery,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
        });
    }
    AddFarmdemo(farmdemo) {
        return this.apollo.mutate({
            mutation: AddFarmDemoMutation,
            variables: {
                farmer: farmdemo.Farmer,
                latitude: parseFloat(farmdemo.FarmLocationLatitude),
                longitude: parseFloat(farmdemo.FarmLocationLongitude),
                lga: farmdemo.lga,
                state: farmdemo.state,
                crop: farmdemo.Crops,
                area: farmdemo.AreaOfField,
                farmerPractise: farmdemo.ComponentFarmDemoFarmDemoPractiseInput,
                indoramaPractise: farmdemo.ComponentFarmDemoFarmDemoPractiseInput,
                dateOfHarvesting: farmdemo.dateOfHarvesting,
                season: farmdemo.Season,
                Status: farmdemo.Status,
                isPesticidesUsed: farmdemo.isPesticidesUsed == "true" ? true : false,
                images: farmdemo.images,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddStates(state) {
        return this.apollo.mutate({
            mutation: StatesMutation,
            variables: {
                Name: state.state,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddLGA(lga) {
        return this.apollo.mutate({
            mutation: LGAmutation,
            variables: {
                Name: lga.lga,
                state: lga.state,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddArea(area) {
        return this.apollo.mutate({
            mutation: AreaMutation,
            variables: {
                Name: area.area,
                lga: area.lga,
                PostalCode: area.PostalCode,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddMarket(market) {
        return this.apollo.mutate({
            mutation: MarketMutation,
            variables: {
                Name: market.market,
                state: market.state,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddCrop(crop, image) {
        return this.apollo.mutate({
            mutation: CropsMutation,
            variables: {
                Name: crop.crop,
                image: image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    Addvillage(village) {
        return this.apollo.mutate({
            mutation: VillageMutation,
            variables: {
                Name: village.village,
                area: village.area,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddCropPrice(price, image) {
        return this.apollo.mutate({
            mutation: CropPriceMutation,
            variables: {
                crop: price.crop,
                price: parseFloat(price.Price),
                unit: price.Unit,
                state: price.state,
                market: price.market,
                image: image,
                user: parseInt(localStorage.getItem("uid")),
                published: new Date(),
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddIndoramaUpdates(price, imageid) {
        return this.apollo.mutate({
            mutation: CreateIndoramaUpdates,
            variables: {
                Title: price.Title,
                Body: price.Body,
                Images: imageid ? imageid : price.Image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    createBestCropPractise(price, imageid, media) {
        return this.apollo.mutate({
            mutation: CreateBestCropPractices,
            variables: {
                crop: price.crop,
                content: price.content,
                cropImage: imageid,
                media: media,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    createMarketplaceProduct(price, imageid) {
        return this.apollo.mutate({
            mutation: CreateMarketplaceProduct,
            variables: {
                itemName: price.itemName,
                images: imageid,
                userId: price.userId,
                contactNumber: String(price.contactNumber),
                price: price.price,
                availableQty: parseInt(price.availableQty),
                unit: price.unit,
                category: parseInt(price.category),
                description: price.description,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    updateMarketplaceProduct(price, id, imageid) {
        return this.apollo.mutate({
            mutation: UpdateMarketplaceProduct,
            variables: {
                id: id,
                itemName: price.itemName,
                images: imageid,
                // userId: price.userId,
                contactNumber: String(price.contactNumber),
                price: price.price,
                availableQty: parseInt(price.availableQty),
                unit: price.unit,
                category: parseInt(price.category),
                description: price.description,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    updateMarketplaceProductImg(id, imageid) {
        return this.apollo.mutate({
            mutation: UpdateMarketplaceProductImg,
            variables: {
                id: id,
                images: imageid,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    createActivity(price) {
        return this.apollo.mutate({
            mutation: CreateActivities,
            variables: {
                FarmerName: price.FarmerName ? price.FarmerName : undefined,
                Date: price.Date,
                Latitude: parseFloat(price.Latitude),
                Longitude: parseFloat(price.Longitude),
                NoOfAttendees: parseInt(price.NoOfAttendees),
                crop: price.crop ? price.crop : undefined,
                ConditionOfCrop: price.ConditionOfCrop
                    ? price.ConditionOfCrop
                    : undefined,
                PlannedFarmDay: price.PlannedFarmDay ? price.PlannedFarmDay : undefined,
                Reason: price.Reason,
                area: price.area,
                ActivityType: price.ActivityType,
                Time: price.Time,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    getAgronomist(id) {
        return this.apollo.watchQuery({
            query: getAgronomist,
            variables: {
                user: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    getIndoramaUpdates(id, page, pageSize) {
        return this.apollo.watchQuery({
            query: getIndoramaUpdates,
            variables: {
                id: id,
                isActive: true,
                isDelete: false,
                page: page,
                pageSize: pageSize,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    getMarketplace(pageNumber, pageSize, categoryFilter) {
        return this.apollo.watchQuery({
            query: GetMarketplace,
            variables: {
                pageNumber: pageNumber,
                pageSize: pageSize,
                categoryFilter: categoryFilter,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    getSingleMarketplaceProduct(id) {
        return this.apollo.watchQuery({
            query: GetMarketplaceSingleProduct,
            variables: {
                id: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    getBestCropPractises(page, pageSize, cropFilter) {
        return this.apollo.watchQuery({
            query: GetBestCropPractices,
            variables: {
                page: page,
                pageSize: pageSize,
                cropFilter: cropFilter,
            },
            errorPolicy: "all",
        });
    }
    getActivities(page, pageSize) {
        return this.apollo.watchQuery({
            query: GetActivities,
            fetchPolicy: "no-cache",
            variables: {
                page: page,
                pageSize: pageSize,
            },
            errorPolicy: "all",
        });
    }
    getActivity(id) {
        return this.apollo.watchQuery({
            query: GetSingleActivity,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    getMarketplaceCategories(id) {
        return this.apollo.watchQuery({
            query: GetMarketplaceCategories,
            fetchPolicy: "no-cache",
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    createAgronomist(data, id) {
        return this.apollo.mutate({
            mutation: CreateAgronomist,
            variables: {
                areas: data.area,
                user: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateCropPrice(price, id, imageid, Rejected, published) {
        return this.apollo.mutate({
            mutation: UpdateCropPriceMutation,
            variables: {
                id: id,
                crop: price === null || price === void 0 ? void 0 : price.crop,
                price: (price === null || price === void 0 ? void 0 : price.Price) ? parseFloat(price === null || price === void 0 ? void 0 : price.Price) : undefined,
                unit: price === null || price === void 0 ? void 0 : price.Unit,
                state: price === null || price === void 0 ? void 0 : price.state,
                market: price === null || price === void 0 ? void 0 : price.market,
                published: published,
                Rejected: Rejected,
                image: imageid ? imageid : price === null || price === void 0 ? void 0 : price.Image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddSoilTestResult(result) {
        return this.apollo.mutate({
            mutation: AddSoilTestResult,
            variables: {
                soilTestSampleID: result.soil_test_sample,
                zinc: result.ZincObserved,
                boron: result.BoronObserved,
                iron: result.IronObserved,
                calcium: result.CalciumObserved,
                Carbon: result.OrganicCarbonObserved,
                phosphorous: result.PhosphorousObserved,
                magnesium: result.MagnesiumObserved,
                ph: result.phObserved,
                copper: result.CopperObserved,
                Nitrogen: result.TotalNitrogenObserved,
                manganese: result.ManganeseObserved,
                pottassium: result.PotassiumObserved,
                sulphur: result.SulphurObserved,
                RecommendedNPKQty: result.RecommendedNPKQty,
                RecommendedUreaQty: result.RecommendedUreaQty,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateSoilTestResult(result) {
        return this.apollo.mutate({
            mutation: UpdateSoilTestResult,
            variables: {
                id: result.id,
                zinc: result.ZincObserved,
                boron: result.BoronObserved,
                iron: result.IronObserved,
                calcium: result.CalciumObserved,
                Carbon: result.OrganicCarbonObserved,
                phosphorous: result.PhosphorousObserved,
                magnesium: result.MagnesiumObserved,
                ph: result.phObserved,
                copper: result.CopperObserved,
                Nitrogen: result.TotalNitrogenObserved,
                manganese: result.ManganeseObserved,
                pottassium: result.PotassiumObserved,
                sulphur: result.SulphurObserved,
                RecommendedNPKQty: result.RecommendedNPKQty,
                RecommendedUreaQty: result.RecommendedUreaQty,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateCrop(crop, id, Imageid) {
        return this.apollo.mutate({
            mutation: UpdateCrops,
            variables: {
                Name: crop.crop,
                isDelete: crop.isDelete,
                id: id,
                image: Imageid,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateState(data, id) {
        return this.apollo.mutate({
            mutation: UpdateState,
            variables: {
                Name: data.state,
                isDelete: data.isDelete,
                id: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateLGA(data, id) {
        return this.apollo.mutate({
            mutation: UpdateLGA,
            variables: {
                Name: data.lga,
                state: data.state,
                isDelete: data.isDelete,
                id: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateMarket(data, id) {
        return this.apollo.mutate({
            mutation: UpdateMarket,
            variables: {
                Name: data.market,
                state: data.state,
                isDelete: data.isDelete,
                id: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateArea(area, id) {
        return this.apollo.mutate({
            mutation: UpdateArea,
            variables: {
                Name: area.area,
                lga: area.lga,
                PostalCode: area.PostalCode,
                isDelete: area.isDelete,
                id: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    Updatevillage(village, id) {
        return this.apollo.mutate({
            mutation: UpdateVillage,
            variables: {
                Name: village.village,
                area: village.area,
                isDelete: village.isDelete,
                id: id,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateSoilTest(test, soilTestId) {
        return this.apollo.mutate({
            mutation: UpdateSoilTest,
            variables: {
                soilTestId: soilTestId,
                contactNumber: test.ContactNumber,
                preferredCollectionDate: test.PreferredCollectionDate,
                reason: test.ReasonForSoilTest,
                farmerID: test.Farmer,
                areaID: test.area,
                lgaID: test.lga,
                soilTestDisplayID: test.soilTestDisplayID,
                status: test.Status,
                nutrient: test.nutrient,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateFarmDemo(data, id) {
        return this.apollo.mutate({
            mutation: UpdateFarmDemo,
            variables: {
                id: id,
                farmer: data.Farmer,
                longitude: parseFloat(data.FarmLocationLongitude),
                latitude: parseFloat(data.FarmLocationLatitude),
                lga: data.lga,
                state: data.state,
                crop: data.Crops,
                area: data.AreaOfField,
                farmerPractise: {
                    Yield: parseFloat(data.Yield_F),
                    DateOfSowing: data.DateOfSowing_F,
                    DateOfDemonstration: data.DateOfDemonstration_F,
                    FirstUreaApplication: data.FirstUreaApplication_F,
                    SecondUreaApplication: data.SecondUreaApplication_F,
                },
                indoramaPractise: {
                    Yield: parseFloat(data.Yield_I),
                    DateOfSowing: data.DateOfSowing_I,
                    DateOfDemonstration: data.DateOfDemonstration_I,
                    FirstUreaApplication: data.FirstUreaApplication_I,
                    SecondUreaApplication: data.SecondUreaApplication_I,
                },
                // isPesticidesUsed: data.isPesticidesUsed,
                images: data.images,
                season: data.Season,
                Status: data.Status,
                dateOfHarvesting: data.DateOfHarvesting,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateRetailer(data, id) {
        return this.apollo.mutate({
            mutation: updateRetailerQuery,
            variables: {
                id: id,
                categories: data.retailer_categories,
                name: data.Name,
                latitude: data.Latitude ? parseFloat(data.Latitude) : undefined,
                longitude: data.Longitude ? parseFloat(data.Longitude) : undefined,
                village: data.village,
                password: data.password ? data.password : undefined,
                lga: data.lga,
                bio: data.Bio,
                agronomist_lgas: data.agronomist_lgas,
                blocked: data.blocked == "true" ? true : false,
                confirmed: data.confirmed,
                UserType: data === null || data === void 0 ? void 0 : data.UserType,
                contactNumber: data.ContactNumber,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateRetailerPic(id, image) {
        return this.apollo.mutate({
            mutation: updateRetailerProfPic,
            variables: {
                id: id,
                prof_pic: image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    AddFarmdemoPic(id, image) {
        return this.apollo.mutate({
            mutation: UpdateFarmDemo,
            variables: {
                id: id,
                images: image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    addRetailerProducts(data, retailer_category, retailer, image) {
        return this.apollo.mutate({
            mutation: createdRetailerProducts,
            variables: {
                ItemName: data.itemName,
                Price: parseInt(data.price),
                Unit: data.unit,
                Images: image,
                isApproved: true,
                retailer_category: retailer_category,
                retailers: retailer,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateRetailerProducts(data, retailer_category, retailer) {
        return this.apollo.mutate({
            mutation: updateRetailerProducts,
            variables: {
                productId: data.id,
                itemName: data.itemName,
                price: parseInt(data.price),
                unit: data.unit,
                // images: data.,
                isApproved: true,
                retailer_category: retailer_category,
                retailer: retailer,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    UpdateIndoramaUpdates(price, id, imageid) {
        return this.apollo.mutate({
            mutation: UpdateIndoramaUpdates,
            variables: {
                id: id,
                Title: price === null || price === void 0 ? void 0 : price.Title,
                isDelete: price === null || price === void 0 ? void 0 : price.isDelete,
                Body: price === null || price === void 0 ? void 0 : price.Body,
                Images: imageid ? imageid : price === null || price === void 0 ? void 0 : price.Image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    updateActivity(price, id) {
        return this.apollo.mutate({
            mutation: UpdateActivity,
            variables: {
                id: id,
                FarmerName: price.FarmerName,
                Date: price.Date,
                Latitude: parseFloat(price.Latitude),
                Longitude: parseFloat(price.Longitude),
                NoOfAttendees: parseInt(price.NoOfAttendees),
                crop: price.crop,
                ConditionOfCrop: price.ConditionOfCrop,
                PlannedFarmDay: price.PlannedFarmDay,
                Reason: price.Reason,
                area: price.area,
                ActivityType: price.ActivityType,
                Time: price.Time,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    upload(file) {
        var _a;
        const formData = new FormData();
        for (var i = 0; i < file.length; i++) {
            // formData.append("file[]",  file[i]);
            formData.append("files", file[i], (_a = file[i]) === null || _a === void 0 ? void 0 : _a.name);
        }
        // formData.append("files", file, file?.name);
        console.log(formData);
        const httpOptions1 = {
            observe: "response",
        };
        return this.http.post(this.baseURL + `/api/upload`, formData, httpOptions1);
    }
    uploadActivities(file) {
        var _a;
        const formData = new FormData();
        for (var i = 0; i < file.length; i++) {
            // formData.append("file[]",  file[i]);
            formData.append("file", file[i], (_a = file[i]) === null || _a === void 0 ? void 0 : _a.name);
        }
        // formData.append("files", file, file?.name);
        console.log(formData);
        const httpOptions1 = {
            observe: "response",
        };
        return this.http.post(this.baseURL + `/api/activity/upload`, formData, httpOptions1);
    }
    deleteArea(id) {
        return this.apollo.mutate({
            mutation: DeleteAreaMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteVillage(id) {
        return this.apollo.mutate({
            mutation: DeleteVillageMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteLGA(id) {
        return this.apollo.mutate({
            mutation: DeleteLGAMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteState(id) {
        return this.apollo.mutate({
            mutation: DeleteStatesMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteMarket(id) {
        return this.apollo.mutate({
            mutation: DeleteMarketMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteCrop(id) {
        return this.apollo.mutate({
            mutation: DeleteCropMutation,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteFarmDemo(id) {
        return this.apollo.mutate({
            mutation: DeleteFarmdemo,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteProduct(id) {
        return this.apollo.mutate({
            mutation: DeleteRetailerProduct,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteFile(id) {
        return this.apollo.mutate({
            mutation: DeleteFile,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteUser(id) {
        return this.apollo.mutate({
            mutation: DeleteUser,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteBestPractice(id) {
        return this.apollo.mutate({
            mutation: DeleteBestPractice,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    deleteActivity(id) {
        return this.apollo.mutate({
            mutation: DeleteActivity,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    DeleteMarketplaceProduct(id) {
        return this.apollo.mutate({
            mutation: DeleteMarketplaceProduct,
            variables: {
                id: id,
            },
            errorPolicy: "all",
        });
    }
    getDashboardAd() {
        return this.apollo.watchQuery({
            query: getDashboardAd,
            fetchPolicy: "no-cache",
        });
    }
    getRetailerAd() {
        return this.apollo.watchQuery({
            query: getRetailerAd,
            fetchPolicy: "no-cache",
        });
    }
    updateRetailerAd(url, image) {
        return this.apollo.mutate({
            mutation: updateRetailerAd,
            variables: {
                // clickUrl: url,
                imageId: image,
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache",
        });
    }
    updateDashboardAd(url, image) {
        return this.apollo.mutate({
            mutation: updateDashboardAd,
            fetchPolicy: "no-cache",
            variables: {
                // clickUrl: url,
                imageId: image,
            },
            errorPolicy: "all",
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./graphql.module */ "4KHl");










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
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppAsideModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppBreadcrumbModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppHeaderModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppSidebarModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(),
            _graphql_module__WEBPACK_IMPORTED_MODULE_17__["GraphQLModule"],
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__["P404Component"],
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__["P500Component"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _containers__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutComponent"],
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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
                path: 'sms-campaigns',
                loadChildren: () => Promise.all(/*! import() | views-sms-campaigns-sms-campaigns-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-sms-campaigns-sms-campaigns-module")]).then(__webpack_require__.bind(null, /*! ./views/sms-campaigns/sms-campaigns.module */ "0OHv")).then(m => m.SMSCampaignsModule)
            },
            {
                path: 'farmdemo',
                loadChildren: () => Promise.all(/*! import() | views-farm-demo-farm-demo-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("default~views-farm-demo-farm-demo-module~views-soil-test-soil-test-module"), __webpack_require__.e("views-farm-demo-farm-demo-module")]).then(__webpack_require__.bind(null, /*! ./views/farm-demo/farm-demo.module */ "6rTd")).then(m => m.FarmDemoModule)
            },
            {
                path: 'chat',
                loadChildren: () => Promise.all(/*! import() | views-chat-chat-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-chat-chat-module")]).then(__webpack_require__.bind(null, /*! ./views/chat/chat.module */ "jykL")).then(m => m.ChatModule)
            },
            {
                path: 'activities',
                loadChildren: () => Promise.all(/*! import() | views-activities-activities-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-activities-activities-module")]).then(__webpack_require__.bind(null, /*! ./views/activities/activities.module */ "ve2J")).then(m => m.ActivitiesModule)
            },
            {
                path: 'surveys',
                loadChildren: () => Promise.all(/*! import() | views-surveys-surveys-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("default~views-dashboard-dashboard-module~views-surveys-surveys-module"), __webpack_require__.e("views-surveys-surveys-module")]).then(__webpack_require__.bind(null, /*! ./views/surveys/surveys.module */ "8dM2")).then(m => m.SurveysModule)
            },
            {
                path: 'marketplace',
                loadChildren: () => Promise.all(/*! import() | views-marketplace-marketplace-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-marketplace-marketplace-module")]).then(__webpack_require__.bind(null, /*! ./views/marketplace/marketplace.module */ "4Ywq")).then(m => m.MarketplaceModule)
            },
            {
                path: 'best-crop-practices',
                loadChildren: () => Promise.all(/*! import() | views-best-crop-practices-best-crop-practices-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-best-crop-practices-best-crop-practices-module")]).then(__webpack_require__.bind(null, /*! ./views/best-crop-practices/best-crop-practices.module */ "mjQe")).then(m => m.BestCropPracticesModule)
            },
            {
                path: 'indorama_updates',
                loadChildren: () => Promise.all(/*! import() | views-indorama-updates-indorama-updates-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-indorama-updates-indorama-updates-module")]).then(__webpack_require__.bind(null, /*! ./views/indorama-updates/indorama-updates.module */ "eFNz")).then(m => m.IndoramaUpdatesModule)
            },
            {
                path: 'soiltest',
                loadChildren: () => Promise.all(/*! import() | views-soil-test-soil-test-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-farm-demo-farm-demo-module~views-soil-test-soil-test-module"), __webpack_require__.e("views-soil-test-soil-test-module")]).then(__webpack_require__.bind(null, /*! ./views/soil-test/soil-test.module */ "/dPm")).then(m => m.SoilTestModule)
            },
            {
                path: 'cropprices',
                loadChildren: () => Promise.all(/*! import() | views-crop-prices-crop-prices-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-crop-prices-crop-prices-module")]).then(__webpack_require__.bind(null, /*! ./views/crop-prices/crop-prices.module */ "N8R/")).then(m => m.CropPricesModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | views-dashboard-dashboard-module */[__webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-dashboard-dashboard-module~views-surveys-surveys-module"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "6dU7")).then(m => m.DashboardModule)
            },
            {
                path: 'advertisement',
                loadChildren: () => Promise.all(/*! import() | views-advertisement-advertisement-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-advertisement-advertisement-module")]).then(__webpack_require__.bind(null, /*! ./views/advertisement/advertisement.module */ "Th2f")).then(m => m.AdvertisementModule)
            },
            {
                path: 'retailers',
                loadChildren: () => Promise.all(/*! import() | views-retailers-retailers-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("common"), __webpack_require__.e("views-retailers-retailers-module")]).then(__webpack_require__.bind(null, /*! ./views/retailers/retailers.module */ "d3Ph")).then(m => m.RetailersModule)
            },
            {
                path: 'users',
                loadChildren: () => Promise.all(/*! import() | views-users-users-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("common"), __webpack_require__.e("views-users-users-module")]).then(__webpack_require__.bind(null, /*! ./views/users/users.module */ "QSsw")).then(m => m.UsersModule)
            },
            {
                path: 'masters',
                loadChildren: () => Promise.all(/*! import() | views-masters-masters-module */[__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-masters-masters-module")]).then(__webpack_require__.bind(null, /*! ./views/masters/masters.module */ "NPE9")).then(m => m.MastersModule)
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
    // {
    //   name: "Dashboard",
    //   url: "/dashboard",
    //   icon: "icon-speedometer",
    //   role: "",
    // },
    {
        name: "Activities",
        url: "/activities/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Marketplace",
        url: "/marketplace/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Indorama Updates",
        url: "/indorama_updates/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "SMS Campaigns",
        url: "/sms-campaigns/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Farm Demo",
        url: "/farmdemo/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Soil Analysis",
        url: "/soiltest/customers",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Crop Prices",
        url: "/cropprices/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Retailers",
        url: "/retailers/all",
        icon: "icon-cursor",
        role: "",
    },
    {
        name: "Users",
        url: "/users/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Best crop practices",
        url: "/best-crop-practices/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Surveys",
        url: "/surveys/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Chat",
        url: "/chat/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Advertisement",
        url: "/advertisement/all",
        icon: "icon-cursor",
        role: "Admin",
    },
    {
        name: "Masters",
        url: "/soiltest/enquiries",
        icon: 'icon-cursor',
        role: "Admin",
        children: [
            {
                name: "States",
                url: "/masters/States",
            },
            {
                name: "LGA",
                url: "/masters/LGA",
            },
            {
                name: "City",
                url: "/masters/Cities",
            },
            {
                name: "Villages",
                url: "/masters/Villages",
            },
            {
                name: "Markets",
                url: "/masters/Markets",
            },
            {
                name: "Crops",
                url: "/masters/Crops",
            },
        ],
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
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [navbarBrandRouterLink]=\"['/dashboard']\" [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo_new.png',width:200,alt: 'CartIntoCar Logo'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/logo_new.png', width: 200, alt: 'CartIntoCar Logo'}\"\r\n  [sidebarToggler]=\"'lg'\">\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    {{userName}}\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n        dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.png\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" />\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\"><i class=\"fa fa-user\"></i>{{userName}}</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\"\r\n    (minimizedChange)=\"toggleMinimize($event)\">\r\n    <app-sidebar-nav [navItems]=\"navItems\"></app-sidebar-nav>\r\n    <!-- <app-sidebar-minimizer></app-sidebar-minimizer> -->\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <cui-breadcrumb>\r\n    </cui-breadcrumb>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n<app-footer>\r\n  <span><a>Indorama Agronomy App</a> &copy; 2022 Untangle_</span>\r\n  <!-- <span class=\"ml-auto\">Powered by <a href=\"https://www.upsquad.in\">upsquad</a></span> -->\r\n</app-footer>");

/***/ }),

/***/ "nAJl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"app-body bg-image\">\r\n  <main class=\"main d-flex align-items-center\" style=\"background-color: rgba(0, 0, 0, 0.8);\">\r\n    <div class=\"login-box\">\r\n      <div class=\"card p-4\" style=\"width: fit-content;\">\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h1>Login</h1>\r\n            <p class=\"text-muted\">Welcome back! Please log in to your account</p>\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n              </div>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\"\r\n                required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div> -->\r\n<!-- <div class=\"bg-image\"> -->\r\n<div class=\"d-md-flex h-md-100 align-items-center\">\r\n  <div class=\"col-md-6 p-0 bg-black h-md-100 login-screen\">\r\n    <div\r\n      class=\"text-white d-md-flex align-items-center h-100 text-center justify-content-center\"\r\n    >\r\n      <div class=\"container-fluid bg-image\" style=\"height: 100vh\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 p-0 bg-white h-md-100\">\r\n    <div class=\"d-md-flex align-items-center h-md-100 justify-content-center\">\r\n      <div class=\"container-fluid fallback-image\" style=\"height: 100vh\">\r\n        <form\r\n          class=\"login-box\"\r\n          #usForm=\"ngForm\"\r\n          (ngSubmit)=\"onSubmit()\"\r\n          style=\"background: #ffffff75; padding: 20px; border-radius: 10px\"\r\n        >\r\n          <img\r\n            src=\"assets/img/brand/logo_new.png\"\r\n            width=\"300\"\r\n            style=\"margin-bottom: 25px\"\r\n          />\r\n          <h3 class=\"mt-3\">Admin Panel</h3>\r\n          <p class=\"text-muted\">Welcome back! Please log in to your account</p>\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n            </div>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"Username\"\r\n              id=\"login\"\r\n              maxlength=\"80\"\r\n              size=\"30\"\r\n              ngModel\r\n              value=\"\"\r\n              name=\"identifier\"\r\n              required\r\n            />\r\n          </div>\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n            </div>\r\n            <input\r\n              type=\"password\"\r\n              class=\"form-control\"\r\n              placeholder=\"Password\"\r\n              id=\"password\"\r\n              size=\"30\"\r\n              ngModel\r\n              name=\"password\"\r\n              value=\"\"\r\n              required\r\n            />\r\n          </div>\r\n          <!-- <div class=\"row\"> -->\r\n          <!-- <div class=\"col-6\"> -->\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"loading\"\r\n            style=\"background-color: #108d51; color: white\"\r\n          >\r\n            <span\r\n              *ngIf=\"loading\"\r\n              class=\"spinner-border spinner-border-sm mr-1\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            >\r\n            </span\r\n            >Login\r\n          </button>\r\n          <!-- </div> -->\r\n          <!-- </div> -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- </div> -->\r\n");

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
//# sourceMappingURL=main-es2017.js.map