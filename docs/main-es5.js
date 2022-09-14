(function () {
  var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81;

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! E:\Projects\Angular Apps\indorama_adminpanel\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1BUF": function BUF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem("currentUser")));
          this.currentUser = this.currentUserSubject.asObservable();
        }

        _createClass(AuthenticationService, [{
          key: "currentUserValue",
          get: function get() {
            console.log("curentuser", this.currentUserSubject);
            return this.currentUserSubject.value;
          }
        }, {
          key: "login",
          value: function login(data) {
            var _this = this;

            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl, "api/auth/local/"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
              // login successful if there's a jwt token in the response
              console.log(user);

              if (user.jwt) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("token", user.jwt);
                localStorage.setItem("username", user.user.username);
                localStorage.setItem("uid", user.user.id);
                localStorage.setItem("user_type", user.user.UserType);
                localStorage.setItem("email", user.user.email);
                localStorage.setItem('name', user.user.Name);
                localStorage.setItem('phone_number', user.user.ContactNumber);
                localStorage.setItem("currentUser", JSON.stringify(user));

                _this.currentUserSubject.next(user);
              }

              return user;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            // remove user from local storage to log user out
            localStorage.removeItem("currentUser");
            localStorage.removeItem("token");
            this.currentUserSubject.next(null);
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthenticationService);
      /***/
    },

    /***/
    "4KHl": function KHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createApollo", function () {
        return createApollo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createNamedApollo", function () {
        return createNamedApollo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GraphQLModule", function () {
        return GraphQLModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! apollo-angular */
      "nbgS");
      /* harmony import */


      var _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @apollo/client/core */
      "ALmS");
      /* harmony import */


      var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @apollo/client/link/context */
      "MWEN");
      /* harmony import */


      var apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! apollo-angular/http */
      "F/12");

      var uri = "https://indoramaapp.untanglestrategy.com/graphql";

      function createApollo(httpLink) {
        var basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
          return {
            headers: {
              Accept: "charset=utf-8"
            }
          };
        }); // Get the authentication token from local storage if it exists

        var token = localStorage.getItem("token");
        var auth = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
          return {
            headers: {
              Authorization: "Bearer ".concat(token)
            }
          };
        });
        return {
          link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([basic, auth, httpLink.create({
            uri: uri
          })]),
          cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
        };
      }

      function createNamedApollo(httpLink) {
        var basic = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_4__["setContext"])(function (operation, context) {
          return {
            headers: {
              Accept: "charset=utf-8"
            }
          };
        });
        return {
          second: {
            name: "second",
            link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"].from([basic, httpLink.create({
              uri: uri
            })]),
            cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]()
          }
        };
      }

      var GraphQLModule = function GraphQLModule() {
        _classCallCheck(this, GraphQLModule);
      };

      GraphQLModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{
          provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
          useFactory: createApollo,
          deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]]
        }, {
          provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_NAMED_OPTIONS"],
          deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]],
          useFactory: createNamedApollo
        }]
      })], GraphQLModule);
      /***/
    },

    /***/
    "8gg5": function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        apiUrl: "https://indoramaapp.untanglestrategy.com/"
      };
      /***/
    },

    /***/
    "DodC": function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p": function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "JPqG": function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../views/login/authentication.service */
      "1BUF");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent(router, authenticationService) {
          var _this2 = this;

          _classCallCheck(this, DefaultLayoutComponent);

          this.router = router;
          this.authenticationService = authenticationService;
          this.sidebarMinimized = false;
          this.userName = localStorage.getItem("username");
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"].filter(function (item) {
            return item.role == localStorage.getItem("user_type") || item.role == "";
          });
          this.authenticationService.currentUser.subscribe(function (x) {
            return _this2.currentUser = x;
          }); // console.log("constructor",this.currentUser.user.UserType)
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            var _a;

            this.sidebarMinimized = e;
            console.log((_a = this.currentUser.user) === null || _a === void 0 ? void 0 : _a.UserType);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authenticationService.logout();
            this.router.navigate(["/login"]);
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      };

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _views_login_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], DefaultLayoutComponent);
      /***/
    },

    /***/
    "Lrxh": function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "QB/w": function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./authentication.service */
      "1BUF");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(dataservice, route, router, authenticationService, toastr) {
          _classCallCheck(this, LoginComponent);

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

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.loginForm = this.usForm.value;
            console.log(this.loginForm);
            this.loading = true;
            this.router.navigate(["/dashboard"]);
            this.toastr.success("Login successful");
            this.authenticationService.login(this.loginForm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (data) {
              _this3.loading = false;

              _this3.router.navigate([_this3.returnUrl]);

              _this3.toastr.success("Login successful");
            }, function (error) {
              _this3.error = error;
              _this3.loading = false;
              console.log(error.error.message[0].messages[0].message);

              _this3.toastr.error("Error", error.error.message[0].messages[0].message);
            });
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      LoginComponent.propDecorators = {
        usForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["usForm"]
        }]
      };
      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], LoginComponent);
      /***/
    },

    /***/
    "R7Hv": function R7Hv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var apollo_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! apollo-angular */
      "nbgS");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");

      var FarmDemosQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  query ($page: Int, $pageSize: Int) {\n    farmDemos(\n      pagination: { page: $page, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          Farmer\n          FarmLocationLatitude\n          FarmLocationLongitude\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          AreaOfField\n          isPesticidesUsed\n          FarmerPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          IndoramaPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          Images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          DateOfHarvesting\n          Season\n          Status\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var FarmDemoQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    farmDemo(id: $id) {\n      data {\n        id\n        attributes {\n          Farmer\n          FarmLocationLatitude\n          FarmLocationLongitude\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          createdAt\n          AreaOfField\n          isPesticidesUsed\n          DateOfHarvesting\n          Season\n          FarmerPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          IndoramaPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          Status\n          Images {\n            data {\n              id\n              attributes {\n                name\n                previewUrl\n                url\n              }\n            }\n          }\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var AddFarmDemoMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  mutation (\n    $farmer: String\n    $latitude: Float\n    $longitude: Float\n    $lga: ID\n    $state: ID\n    $crop: ID\n    $area: String\n    $farmerPractise: ComponentFarmDemoFarmDemoPractiseInput\n    $indoramaPractise: ComponentFarmDemoFarmDemoPractiseInput\n    $dateOfHarvesting: Date\n    $season: String\n    $Status: ENUM_FARMDEMO_STATUS\n    $isPesticidesUsed: Boolean\n    $images: [ID]\n  ) {\n    createFarmDemo(\n      data: {\n        Farmer: $farmer\n        FarmLocationLatitude: $latitude\n        FarmLocationLongitude: $longitude\n        lgas: $lga\n        state: $state\n        crop: $crop\n        Status: $Status\n        AreaOfField: $area\n        FarmerPractise: $farmerPractise\n        IndoramaPractise: $indoramaPractise\n        isPesticidesUsed: $isPesticidesUsed\n        DateOfHarvesting: $dateOfHarvesting\n        Season: $season\n        Images: $images\n      }\n    ) {\n      data {\n        id\n        attributes {\n          Farmer\n          FarmLocationLatitude\n          FarmLocationLongitude\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Status\n          AreaOfField\n          isPesticidesUsed\n          FarmerPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          IndoramaPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          Images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          DateOfHarvesting\n          Season\n        }\n      }\n    }\n  }\n"])));

      var _UpdateFarmDemo = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  mutation (\n    $id: ID!\n    $farmer: String\n    $latitude: Float\n    $longitude: Float\n    $lga: ID\n    $crop: ID\n    $area: String\n    $farmerPractise: ComponentFarmDemoFarmDemoPractiseInput\n    $indoramaPractise: ComponentFarmDemoFarmDemoPractiseInput\n    $dateOfHarvesting: Date\n    $season: String\n    $isPesticidesUsed: Boolean\n    $images: [ID]\n    $Status: ENUM_FARMDEMO_STATUS\n    $state: ID\n  ) {\n    updateFarmDemo(\n      id: $id\n      data: {\n        Farmer: $farmer\n        FarmLocationLatitude: $latitude\n        FarmLocationLongitude: $longitude\n        lgas: $lga\n        crop: $crop\n        Status: $Status\n        state: $state\n        AreaOfField: $area\n        FarmerPractise: $farmerPractise\n        IndoramaPractise: $indoramaPractise\n        isPesticidesUsed: $isPesticidesUsed\n        DateOfHarvesting: $dateOfHarvesting\n        Season: $season\n        Images: $images\n      }\n    ) {\n      data {\n        id\n        attributes {\n          Farmer\n          FarmLocationLatitude\n          FarmLocationLongitude\n          Status\n          Season\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          AreaOfField\n          isPesticidesUsed\n          FarmerPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          IndoramaPractise {\n            id\n            Yield\n            DateOfSowing\n            DateOfDemonstration\n            FirstUreaApplication\n            SecondUreaApplication\n          }\n          Images {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          DateOfHarvesting\n          Season\n        }\n      }\n    }\n  }\n"])));

      var CropsQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  query {\n    crops(pagination: { limit: 100 }, sort: \"createdAt:desc\") {\n      data {\n        id\n        attributes {\n          Name\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var CropsMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  mutation ($Name: String) {\n    createCrop(data: { Name: $Name }) {\n      data {\n        id\n        attributes {\n          Name\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var UpdateCrops = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $id: ID!, $isDelete: Boolean) {\n    updateCrop(id: $id, data: { Name: $Name, isDelete: $isDelete }) {\n      data {\n        id\n        attributes {\n          Name\n          isDelete\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var StatesQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  query {\n    states(pagination: { limit: 100 }, sort: \"createdAt:desc\") {\n      data {\n        id\n        attributes {\n          Name\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          markets {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var StatesMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  mutation ($Name: String) {\n    createState(data: { Name: $Name }) {\n      data {\n        id\n        attributes {\n          Name\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          markets {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _UpdateState = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $id: ID!, $isDelete: Boolean) {\n    updateState(id: $id, data: { Name: $Name, isDelete: $isDelete }) {\n      data {\n        id\n        attributes {\n          Name\n          lgas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          markets {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          isDelete\n        }\n      }\n    }\n  }\n"])));

      var LGAquery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    lgas(\n      pagination: { limit: 100 }\n      sort: \"createdAt:desc\"\n      filters: { state: { id: { eq: $id } } }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          areas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var LGAmutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $state: ID) {\n    createLga(data: { Name: $Name, state: $state }) {\n      data {\n        id\n        attributes {\n          Name\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          areas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var _UpdateLGA = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $state: ID, $id: ID!, $isDelete: Boolean) {\n    updateLga(\n      id: $id\n      data: { Name: $Name, isDelete: $isDelete, state: $state }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          areas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var Villagesquery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    villages(\n      pagination: { limit: 100 }\n      sort: \"createdAt:desc\"\n      filters: { area: { lga: { id: { eq: $id } } } }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          area {\n            data {\n              id\n              attributes {\n                Name\n                PostalCode\n                lga {\n                  data {\n                    id\n                    attributes {\n                      Name\n                      state {\n                        data {\n                          id\n                          attributes {\n                            Name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n          localizations {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n        __typename\n      }\n    }\n  }\n"])));
      var VillageMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $area: ID) {\n    createVillage(data: { Name: $Name, area: $area }) {\n      data {\n        id\n        attributes {\n          Name\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var UpdateVillage = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $area: ID, $id: ID!, $isDelete: Boolean) {\n    updateVillage(\n      id: $id\n      data: { Name: $Name, area: $area, isDelete: $isDelete }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          isDelete\n        }\n      }\n    }\n  }\n"])));
      var Areasquery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    areas(\n      pagination: { limit: 100 }\n      sort: \"createdAt:desc\"\n      filters: { lga: { id: { eq: $id } } }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          PostalCode\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          villages {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var AreaMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $PostalCode: Long, $lga: ID) {\n    createArea(data: { Name: $Name, PostalCode: $PostalCode, lga: $lga }) {\n      data {\n        id\n        attributes {\n          Name\n          PostalCode\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          villages {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var _UpdateArea = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  mutation (\n    $Name: String\n    $lga: ID\n    $PostalCode: Long\n    $id: ID!\n    $isDelete: Boolean\n  ) {\n    updateArea(\n      id: $id\n      data: {\n        Name: $Name\n        PostalCode: $PostalCode\n        lga: $lga\n        isDelete: $isDelete\n      }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          PostalCode\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          villages {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var MarketQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    markets(\n      pagination: { limit: 100 }\n      sort: \"createdAt:desc\"\n      filters: { state: { id: { eq: $id } } }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var MarketMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $state: ID) {\n    createMarket(data: { Name: $Name, state: $state }) {\n      data {\n        id\n        attributes {\n          Name\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var _UpdateMarket = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  mutation ($Name: String, $state: ID, $id: ID!, $isDelete: Boolean) {\n    updateMarket(\n      id: $id\n      data: { Name: $Name, isDelete: $isDelete, state: $state }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var CropPricesQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  query ($page: Int, $pageSize: Int) {\n    cropPrices(\n      publicationState: PREVIEW\n      pagination: { page: $page, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Price\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Unit\n          market {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Image {\n            data {\n              id\n              attributes {\n                name\n                alternativeText\n                caption\n                width\n                height\n                url\n                previewUrl\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          publishedAt\n        }\n      }\n    }\n  }\n"])));
      var UpdateCropPriceMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  mutation updateCropPrice(\n    $id: ID!\n    $crop: ID\n    $price: Float\n    $state: ID\n    $unit: String\n    $market: ID\n    $image: ID\n    $published: DateTime\n  ) {\n    updateCropPrice(\n      id: $id\n      data: {\n        crop: $crop\n        Price: $price\n        state: $state\n        Unit: $unit\n        market: $market\n        Image: $image\n        publishedAt: $published\n      }\n    ) {\n      data {\n        id\n        attributes {\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Price\n          Unit\n          state {\n            data {\n              attributes {\n                Name\n              }\n            }\n          }\n          market {\n            data {\n              attributes {\n                Name\n              }\n            }\n          }\n          Image {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var CropPriceMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  mutation addCropPrice(\n    $crop: ID\n    $price: Float\n    $state: ID\n    $unit: String\n    $market: ID\n    $image: ID\n    $published: DateTime\n  ) {\n    createCropPrice(\n      data: {\n        crop: $crop\n        Price: $price\n        state: $state\n        Unit: $unit\n        market: $market\n        Image: $image\n        publishedAt: $published\n      }\n    ) {\n      data {\n        id\n        attributes {\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Price\n          Unit\n          state {\n            data {\n              attributes {\n                Name\n              }\n            }\n          }\n          market {\n            data {\n              attributes {\n                Name\n              }\n            }\n          }\n          Image {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var RetailerQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  query ($page: Int, $pageSize: Int) {\n    usersPermissionsUsers(\n      pagination: { page: $page, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n      filters: { UserType: { eq: \"Retailer\" } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          username\n          Name\n          email\n          village {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          retailer_products {\n            data {\n              attributes {\n                ItemName\n                Price\n                Unit\n                Images {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          UserType\n          Bio\n          Latitude\n          Longitude\n          UserType\n          prof_pic {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          ContactNumber\n        }\n      }\n    }\n  }\n"])));
      var SoilTestQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  query ($page: Int, $pageSize: Int) {\n    soilTests(\n      pagination: { page: $page, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          SoilTestID\n          Status\n          ReasonForSoilTest\n          ContactNumber\n          nutrient\n          Farmer {\n            data {\n              attributes {\n                username\n                email\n                agronomist {\n                  data {\n                    id\n                    attributes {\n                      users_permissions_user {\n                        data {\n                          id\n                          attributes {\n                            username\n                            email\n                            Name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          area {\n            data {\n              attributes {\n                Name\n                PostalCode\n              }\n            }\n          }\n          soil_test_samples {\n            data {\n              attributes {\n                SampleID\n              }\n            }\n          }\n          PreferredCollectionDate\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var SingleSoilTestQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    soilTest(id: $id) {\n      data {\n        id\n        attributes {\n          SoilTestID\n          Status\n          ReasonForSoilTest\n          ContactNumber\n          nutrient\n          Farmer {\n            data {\n              id\n              attributes {\n                username\n                email\n                agronomist {\n                  data {\n                    id\n                    attributes {\n                      users_permissions_user {\n                        data {\n                          id\n                          attributes {\n                            username\n                            email\n                            Name\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          area {\n            data {\n              id\n              attributes {\n                Name\n                PostalCode\n              }\n            }\n          }\n          soil_test_samples {\n            data {\n              id\n              attributes {\n                SampleID\n                QuantityOfSamples\n                createdAt\n                updatedAt\n                SampleAddedBy {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n                soil_test_results {\n                  data {\n                    id\n                    attributes {\n                      soil_test_sample {\n                        data {\n                          id\n                          attributes {\n                            SampleID\n                          }\n                        }\n                      }\n                      phObserved\n                      OrganicCarbonObserved\n                      TotalNitrogenObserved\n                      PhosphorousObserved\n                      PotassiumObserved\n                      CalciumObserved\n                      MagnesiumObserved\n                      ZincObserved\n                      SulphurObserved\n                      IronObserved\n                      CopperObserved\n                      BoronObserved\n                      ManganeseObserved\n                      updatedAt\n                    }\n                  }\n                }\n              }\n            }\n          }\n          PreferredCollectionDate\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _UpdateSoilTest = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  mutation updateSoilTest(\n    $soilTestId: ID!\n    $contactNumber: String\n    $preferredCollectionDate: DateTime\n    $reason: String\n    $farmerID: ID\n    $areaID: ID\n    $lgaID: ID\n    $soilTestDisplayID: String\n    $status: ENUM_SOILTEST_STATUS\n    $nutrient: String\n  ) {\n    updateSoilTest(\n      id: $soilTestId\n      data: {\n        ContactNumber: $contactNumber\n        PreferredCollectionDate: $preferredCollectionDate\n        ReasonForSoilTest: $reason\n        Farmer: $farmerID\n        area: $areaID\n        lga: $lgaID\n        SoilTestID: $soilTestDisplayID\n        Status: $status\n        nutrient: $nutrient\n      }\n    ) {\n      data {\n        id\n        attributes {\n          ContactNumber\n          PreferredCollectionDate\n          ReasonForSoilTest\n          Farmer {\n            data {\n              id\n              attributes {\n                username\n                Name\n              }\n            }\n          }\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          SoilTestID\n          Status\n          nutrient\n        }\n      }\n    }\n  }\n"])));

      var UsersQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  query ($UserType: String, $page: Int, $pageSize: Int) {\n    usersPermissionsUsers(\n      pagination: { page: $page, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n      filters: { UserType: { eq: $UserType } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          username\n          Name\n          email\n          village {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          retailer_categories {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          retailer_products {\n            data {\n              attributes {\n                ItemName\n                Price\n                Unit\n                Images {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          UserType\n          Bio\n          Latitude\n          Longitude\n          UserType\n          prof_pic {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          ContactNumber\n        }\n      }\n    }\n  }\n"])));

      var _AddSoilTestResult = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  mutation soilTestAddResult(\n    $soilTestSampleID: ID\n    $ph: String\n    $Carbon: String\n    $Nitrogen: String\n    $phosphorous: String\n    $pottassium: String\n    $calcium: String\n    $magnesium: String\n    $zinc: String\n    $sulphur: String\n    $iron: String\n    $copper: String\n    $boron: String\n    $manganese: String\n  ) {\n    createSoilTestResult(\n      data: {\n        soil_test_sample: $soilTestSampleID\n        phObserved: $ph\n        OrganicCarbonObserved: $Carbon\n        TotalNitrogenObserved: $Nitrogen\n        PhosphorousObserved: $phosphorous\n        PotassiumObserved: $pottassium\n        CalciumObserved: $calcium\n        MagnesiumObserved: $magnesium\n        ZincObserved: $zinc\n        SulphurObserved: $sulphur\n        IronObserved: $iron\n        CopperObserved: $copper\n        BoronObserved: $boron\n        ManganeseObserved: $manganese\n      }\n    ) {\n      data {\n        attributes {\n          soil_test_sample {\n            data {\n              id\n              attributes {\n                SampleID\n              }\n            }\n          }\n          phObserved\n          OrganicCarbonObserved\n          TotalNitrogenObserved\n          PhosphorousObserved\n          PotassiumObserved\n          CalciumObserved\n          MagnesiumObserved\n          ZincObserved\n          SulphurObserved\n          CopperObserved\n          IronObserved\n          BoronObserved\n          ManganeseObserved\n        }\n      }\n    }\n  }\n"])));

      var _UpdateSoilTestResult = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  mutation soilTestAddResult(\n    $id: ID!\n    $soilTestSampleID: ID\n    $ph: String\n    $Carbon: String\n    $Nitrogen: String\n    $phosphorous: String\n    $pottassium: String\n    $calcium: String\n    $magnesium: String\n    $zinc: String\n    $sulphur: String\n    $iron: String\n    $copper: String\n    $boron: String\n    $manganese: String\n  ) {\n    updateSoilTestResult(\n      id: $id\n      data: {\n        soil_test_sample: $soilTestSampleID\n        phObserved: $ph\n        OrganicCarbonObserved: $Carbon\n        TotalNitrogenObserved: $Nitrogen\n        PhosphorousObserved: $phosphorous\n        PotassiumObserved: $pottassium\n        CalciumObserved: $calcium\n        MagnesiumObserved: $magnesium\n        ZincObserved: $zinc\n        SulphurObserved: $sulphur\n        IronObserved: $iron\n        CopperObserved: $copper\n        BoronObserved: $boron\n        ManganeseObserved: $manganese\n      }\n    ) {\n      data {\n        attributes {\n          soil_test_sample {\n            data {\n              id\n              attributes {\n                SampleID\n              }\n            }\n          }\n          phObserved\n          OrganicCarbonObserved\n          TotalNitrogenObserved\n          PhosphorousObserved\n          PotassiumObserved\n          CalciumObserved\n          MagnesiumObserved\n          ZincObserved\n          SulphurObserved\n          CopperObserved\n          IronObserved\n          BoronObserved\n          ManganeseObserved\n        }\n      }\n    }\n  }\n"])));

      var GetSingleRetailerQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  query ($id: ID) {\n    usersPermissionsUsers(filters: { id: { eq: $id } }) {\n      data {\n        id\n        attributes {\n          username\n          Name\n          email\n          village {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          retailer_categories {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          retailer_products {\n            data {\n              id\n              attributes {\n                ItemName\n                Price\n                Unit\n                Images {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          UserType\n          Bio\n          Latitude\n          Longitude\n          UserType\n          prof_pic {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          blocked\n          ContactNumber\n        }\n      }\n    }\n  }\n"])));
      var updateRetailerProfPic = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  mutation editRetailer($id: ID!, $prof_pic: ID) {\n    updateUsersPermissionsUser(id: $id, data: { prof_pic: $prof_pic }) {\n      data {\n        id\n        attributes {\n          username\n          Name\n          email\n          prof_pic {\n            data {\n              id\n              attributes {\n                name\n                url\n              }\n            }\n          }\n          village {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          retailer_categories {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          retailer_products {\n            data {\n              attributes {\n                ItemName\n                Price\n                Unit\n                Images {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          UserType\n          Bio\n          Latitude\n          Longitude\n          UserType\n          prof_pic {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          ContactNumber\n        }\n      }\n    }\n  }\n"])));
      var updateRetailerQuery = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  mutation editRetailer(\n    $id: ID!\n    $name: String\n    $village: ID\n    $lga: ID\n    $UserType: ENUM_USERSPERMISSIONSUSER_USERTYPE\n    $categories: [ID]\n    $bio: String\n    $latitude: Float\n    $longitude: Float\n    $profpic: ID\n    $blocked: Boolean\n    $contactNumber: String\n  ) {\n    updateUsersPermissionsUser(\n      id: $id\n      data: {\n        Name: $name\n        village: $village\n        lga: $lga\n        UserType: $UserType\n        retailer_categories: $categories\n        Bio: $bio\n        blocked: $blocked\n        Latitude: $latitude\n        Longitude: $longitude\n        prof_pic: $profpic\n        ContactNumber: $contactNumber\n      }\n    ) {\n      data {\n        id\n        attributes {\n          username\n          Name\n          email\n          village {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          lga {\n            data {\n              id\n              attributes {\n                Name\n                state {\n                  data {\n                    id\n                    attributes {\n                      Name\n                    }\n                  }\n                }\n              }\n            }\n          }\n          retailer_categories {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          retailer_products {\n            data {\n              attributes {\n                ItemName\n                Price\n                Unit\n                Images {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          UserType\n          Bio\n          Latitude\n          Longitude\n          UserType\n          prof_pic {\n            data {\n              attributes {\n                url\n              }\n            }\n          }\n          ContactNumber\n          blocked\n        }\n      }\n    }\n  }\n"])));

      var _getRetailerCategories = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  query {\n    retailerCategories {\n      data {\n        id\n        attributes {\n          CategoryName\n          createdAt\n          CategoryImage {\n            data {\n              id\n              attributes {\n                name\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var createdRetailerProducts = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  mutation (\n    $ItemName: String\n    $Price: Int\n    $Unit: String\n    $Images: [ID]\n    $retailer_category: ID\n    $retailers: [ID]\n  ) {\n    createRetailerProduct(\n      data: {\n        ItemName: $ItemName\n        Price: $Price\n        Unit: $Unit\n        Images: $Images\n        retailer_category: $retailer_category\n        retailers: $retailers\n      }\n    ) {\n      data {\n        id\n        attributes {\n          ItemName\n          Unit\n          Price\n          Images {\n            data {\n              id\n            }\n          }\n          retailer_category {\n            data {\n              id\n            }\n          }\n          retailers {\n            data {\n              id\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var updateRetailerProducts = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  mutation editRetailerProduct(\n    $productId: ID!\n    $itemName: String\n    $price: Int\n    $unit: String\n    $images: [ID]\n    $isApproved: Boolean\n    $retailer: [ID]\n    $retailer_category: ID\n  ) {\n    updateRetailerProduct(\n      id: $productId\n      data: {\n        ItemName: $itemName\n        Price: $price\n        Unit: $unit\n        Images: $images\n        isApproved: $isApproved\n        retailers: $retailer\n        retailer_category: $retailer_category\n      }\n    ) {\n      data {\n        attributes {\n          ItemName\n          Price\n          Unit\n          retailers {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          retailer_category {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          isApproved\n        }\n      }\n    }\n  }\n"])));
      var DeleteStatesMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteState(id: $id) {\n      data {\n        attributes {\n          Name\n        }\n      }\n    }\n  }\n"])));
      var DeleteLGAMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteLga(id: $id) {\n      data {\n        attributes {\n          Name\n        }\n      }\n    }\n  }\n"])));
      var DeleteAreaMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteArea(id: $id) {\n      data {\n        attributes {\n          Name\n        }\n      }\n    }\n  }\n"])));
      var DeleteVillageMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteVillage(id: $id) {\n      data {\n        attributes {\n          Name\n        }\n      }\n    }\n  }\n"])));
      var DeleteCropMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteCrop(id: $id) {\n      data {\n        attributes {\n          Name\n        }\n      }\n    }\n  }\n"])));
      var DeleteMarketMutation = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteMarket(id: $id) {\n      data {\n        attributes {\n          Name\n        }\n      }\n    }\n  }\n"])));
      var DeleteFarmdemo = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteFarmDemo(id: $id) {\n      data {\n        attributes {\n          Farmer\n          DateOfHarvesting\n        }\n      }\n    }\n  }\n"])));
      var DeleteRetailerProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteRetailerProduct(id: $id) {\n      data {\n        attributes {\n          ItemName\n          Price\n        }\n      }\n    }\n  }\n"])));
      var DeleteFile = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteUploadFile(id: $id) {\n      data {\n        id\n      }\n    }\n  }\n"])));
      var DeleteUser = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteUsersPermissionsUser(id: $id) {\n      data {\n        id\n        attributes {\n          username\n        }\n      }\n    }\n  }\n"])));
      var DeleteBestPractice = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteBestCropPractise(id: $id) {\n      data {\n        attributes {\n          content\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var DeleteActivity = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteActivity(id: $id) {\n      data {\n        attributes {\n          FarmerName\n          Date\n          Latitude\n          Longitude\n          NoOfAttendees\n        }\n      }\n    }\n  }\n"])));

      var _DeleteMarketplaceProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteMarketplaceProduct(id: $id) {\n      data {\n        attributes {\n          ItemName\n          Price\n          AvailableQty\n        }\n      }\n    }\n  }\n"])));

      var CreateAgronomist = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n  mutation ($areas: [ID], $user: ID) {\n    createAgronomist(data: { areas: $areas, users_permissions_user: $user }) {\n      data {\n        id\n        attributes {\n          users_permissions_user {\n            data {\n              id\n              attributes {\n                username\n                Name\n                UserType\n              }\n            }\n          }\n          areas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var _getAgronomist = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  query ($user: ID) {\n    agronomists(filters: { users_permissions_user: { id: { eq: $user } } }) {\n      data {\n        id\n        attributes {\n          users_permissions_user {\n            data {\n              id\n              attributes {\n                username\n                Name\n                UserType\n              }\n            }\n          }\n          areas {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var queryUsersLarge = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  query ($UserType: String, $village: ID, $lga: ID, $area: ID, $state: ID) {\n    usersPermissionsUsers(\n      pagination: { limit: 10000 }\n      sort: \"createdAt:desc\"\n      filters: {\n        UserType: { eq: $UserType }\n        village: {\n          or: [{ id: { eq: $village } }, { area: { id: { eq: $area } } }]\n        }\n        lga: { or: [{ id: { eq: $lga } }, { state: { id: { eq: $state } } }] }\n      }\n    ) {\n      data {\n        id\n        attributes {\n          Name\n          ContactNumber\n        }\n      }\n    }\n  }\n"])));

      var _getIndoramaUpdates = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  query (\n    $isDelete: Boolean\n    $isActive: Boolean\n    $id: ID\n    $page: Int\n    $pageSize: Int\n  ) {\n    newsAndUpdates(\n      sort: \"createdAt:desc\"\n      pagination: { page: $page, pageSize: $pageSize }\n      filters: {\n        isActive: { eq: $isActive }\n        isDelete: { eq: $isDelete }\n        id: { eq: $id }\n      }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          Title\n          Body\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          isActive\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _UpdateIndoramaUpdates = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  mutation (\n    $id: ID!\n    $Title: String\n    $Body: String\n    $isDelete: Boolean\n    $isActive: Boolean\n    $Images: [ID]\n  ) {\n    updateNewsAndUpdate(\n      id: $id\n      data: {\n        Title: $Title\n        Body: $Body\n        isActive: $isActive\n        isDelete: $isDelete\n        Images: $Images\n      }\n    ) {\n      data {\n        id\n        attributes {\n          Title\n          Body\n          isActive\n          isDelete\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var CreateIndoramaUpdates = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  mutation ($Title: String, $Body: String, $Images: [ID]) {\n    createNewsAndUpdate(\n      data: {\n        Title: $Title\n        Body: $Body\n        isActive: true\n        isDelete: false\n        Images: $Images\n      }\n    ) {\n      data {\n        id\n        attributes {\n          Title\n          Body\n          isActive\n          isDelete\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var GetMarketplace = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  query ($pageNumber: Int, $pageSize: Int, $categoryFilter: [ID]) {\n    marketplaceProducts(\n      filters: { marketplace_category: { id: { in: $categoryFilter } } }\n      pagination: { page: $pageNumber, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          ItemName\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          seller {\n            data {\n              attributes {\n                Name\n                username\n                ContactNumber\n              }\n            }\n          }\n          description\n          contactNumber\n          Price\n          AvailableQty\n          Unit\n          marketplace_category {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var GetMarketplaceSingleProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["\n  query ($id: ID!) {\n    marketplaceProduct(id: $id) {\n      data {\n        id\n        attributes {\n          ItemName\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          seller {\n            data {\n              attributes {\n                Name\n                username\n                ContactNumber\n              }\n            }\n          }\n          description\n          contactNumber\n          Price\n          AvailableQty\n          Unit\n          marketplace_category {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var CreateMarketplaceProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["\n  mutation sellItemMarketplace(\n    $itemName: String\n    $images: [ID]\n    $userId: ID\n    $contactNumber: String\n    $price: Int\n    $availableQty: Int\n    $unit: String\n    $category: ID\n    $description: String\n  ) {\n    createMarketplaceProduct(\n      data: {\n        ItemName: $itemName\n        Images: $images\n        seller: $userId\n        contactNumber: $contactNumber\n        Price: $price\n        AvailableQty: $availableQty\n        Unit: $unit\n        marketplace_category: $category\n        description: $description\n      }\n    ) {\n      data {\n        id\n        attributes {\n          ItemName\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          seller {\n            data {\n              id\n              attributes {\n                Name\n                username\n              }\n            }\n          }\n          description\n          contactNumber\n          Price\n          AvailableQty\n          Unit\n          marketplace_category {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          createdAt\n        }\n      }\n    }\n  }\n"])));
      var UpdateMarketplaceProduct = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["\n  mutation updateMarketplaceProduct(\n    $itemName: String\n    $images: [ID]\n    $contactNumber: String\n    $price: Int\n    $id: ID!\n    $availableQty: Int\n    $unit: String\n    $category: ID\n    $description: String\n  ) {\n    updateMarketplaceProduct(\n      id: $id\n      data: {\n        ItemName: $itemName\n        Images: $images\n        contactNumber: $contactNumber\n        Price: $price\n        AvailableQty: $availableQty\n        Unit: $unit\n        marketplace_category: $category\n        description: $description\n      }\n    ) {\n      data {\n        id\n        attributes {\n          ItemName\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          seller {\n            data {\n              id\n              attributes {\n                Name\n                username\n              }\n            }\n          }\n          description\n          contactNumber\n          Price\n          AvailableQty\n          Unit\n          marketplace_category {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          createdAt\n        }\n      }\n    }\n  }\n"])));
      var UpdateMarketplaceProductImg = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["\n  mutation updateMarketplaceProduct($images: [ID], $id: ID!) {\n    updateMarketplaceProduct(id: $id, data: { Images: $images }) {\n      data {\n        id\n        attributes {\n          ItemName\n          Images {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          seller {\n            data {\n              id\n              attributes {\n                Name\n                username\n              }\n            }\n          }\n          description\n          contactNumber\n          Price\n          AvailableQty\n          Unit\n          marketplace_category {\n            data {\n              id\n              attributes {\n                CategoryName\n              }\n            }\n          }\n          createdAt\n        }\n      }\n    }\n  }\n"])));
      var GetBestCropPractices = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["\n  query getBestCropPractises($cropFilter: ID, $page: Int, $pageSize: Int) {\n    bestCropPractises(\n      filters: { crop: { id: { eq: $cropFilter } } }\n      pagination: { page: $page, pageSize: $pageSize }\n      sort: \"createdAt:desc\"\n    ) {\n      meta {\n        pagination {\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          media {\n            data {\n              id\n              attributes {\n                name\n                formats\n                url\n                size\n                mime\n                ext\n              }\n            }\n          }\n          content\n          cropImage {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var CreateBestCropPractices = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["\n  mutation ($crop: ID, $media: ID, $content: String, $cropImage: ID) {\n    createBestCropPractise(\n      data: {\n        crop: $crop\n        media: $media\n        content: $content\n        cropImage: $cropImage\n      }\n    ) {\n      data {\n        id\n        attributes {\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          media {\n            data {\n              id\n              attributes {\n                name\n                formats\n                url\n                size\n                mime\n                ext\n              }\n            }\n          }\n          content\n          cropImage {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
      var GetMarketplaceCategories = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["\n  query {\n    marketplaceCategories(\n      filters: { isDelete: { eq: false }, isActive: { eq: true } }\n      sort: \"CategoryName:asc\"\n    ) {\n      data {\n        id\n        attributes {\n          CategoryName\n          CategoryImage {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          isDelete\n          isActive\n        }\n      }\n    }\n  }\n"])));
      var GetActivities = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["\n  query getActivities($page: Int, $pageSize: Int) {\n    activities(\n      sort: \"createdAt:desc\"\n      pagination: { page: $page, pageSize: $pageSize }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          FarmerName\n          Date\n          Latitude\n          Longitude\n          NoOfAttendees\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ConditionOfCrop\n          PlannedFarmDay\n          Reason\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ActivityType\n          Time\n          createdAt\n        }\n      }\n    }\n  }\n"])));
      var GetSingleActivity = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["\n  query getActivities($id: ID) {\n    activity(id: $id) {\n      data {\n        id\n        attributes {\n          FarmerName\n          Date\n          Latitude\n          Longitude\n          NoOfAttendees\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ConditionOfCrop\n          PlannedFarmDay\n          Reason\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ActivityType\n          Time\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));
      var CreateActivities = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["\n  mutation (\n    $FarmerName: String\n    $Date: Date\n    $Latitude: Float\n    $Longitude: Float\n    $NoOfAttendees: Int\n    $crop: ID\n    $ConditionOfCrop: String\n    $PlannedFarmDay: Date\n    $Reason: String\n    $area: ID\n    $ActivityType: ENUM_ACTIVITY_ACTIVITYTYPE\n    $Time: String\n  ) {\n    createActivity(\n      data: {\n        FarmerName: $FarmerName\n        Date: $Date\n        Latitude: $Latitude\n        Longitude: $Longitude\n        NoOfAttendees: $NoOfAttendees\n        crop: $crop\n        ConditionOfCrop: $ConditionOfCrop\n        PlannedFarmDay: $PlannedFarmDay\n        Reason: $Reason\n        area: $area\n        ActivityType: $ActivityType\n        Time: $Time\n      }\n    ) {\n      data {\n        id\n        attributes {\n          FarmerName\n          Date\n          Latitude\n          Longitude\n          NoOfAttendees\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ConditionOfCrop\n          PlannedFarmDay\n          Reason\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ActivityType\n          Time\n        }\n      }\n    }\n  }\n"])));
      var UpdateActivity = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["\n  mutation (\n    $FarmerName: String\n    $Date: Date\n    $Latitude: Float\n    $Longitude: Float\n    $NoOfAttendees: Int\n    $crop: ID\n    $ConditionOfCrop: String\n    $PlannedFarmDay: Date\n    $Reason: String\n    $area: ID\n    $ActivityType: ENUM_ACTIVITY_ACTIVITYTYPE\n    $Time: String\n    $id: ID!\n  ) {\n    updateActivity(\n      id: $id\n      data: {\n        FarmerName: $FarmerName\n        Date: $Date\n        Latitude: $Latitude\n        Longitude: $Longitude\n        NoOfAttendees: $NoOfAttendees\n        crop: $crop\n        ConditionOfCrop: $ConditionOfCrop\n        PlannedFarmDay: $PlannedFarmDay\n        Reason: $Reason\n        area: $area\n        ActivityType: $ActivityType\n        Time: $Time\n      }\n    ) {\n      data {\n        id\n        attributes {\n          FarmerName\n          Date\n          Latitude\n          Longitude\n          NoOfAttendees\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ConditionOfCrop\n          PlannedFarmDay\n          Reason\n          area {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          ActivityType\n          Time\n        }\n      }\n    }\n  }\n"])));

      var _getDashboardStats = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["\n  query dashboardAPI {\n    crops {\n      data {\n        id\n        attributes {\n          Name\n          crop_prices {\n            data {\n              id\n              attributes {\n                Price\n                publishedAt\n              }\n            }\n          }\n        }\n      }\n    }\n    soilTests {\n      meta {\n        pagination {\n          total\n        }\n      }\n    }\n    soilTestSamples {\n      meta {\n        pagination {\n          total\n        }\n      }\n    }\n    soilTestResults {\n      meta {\n        pagination {\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          soil_test_sample {\n            data {\n              attributes {\n                soil_test {\n                  data {\n                    attributes {\n                      lga {\n                        data {\n                          attributes {\n                            state {\n                              data {\n                                attributes {\n                                  Name\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    farmDemos {\n      meta {\n        pagination {\n          total\n        }\n      }\n    }\n  }\n"])));

      var _getCropPricesDashboard = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["\n  query ($id: ID, $market: ID) {\n    cropPrices(\n      publicationState: LIVE\n      pagination: { limit: 100 }\n      sort: \"publishedAt:desc\"\n      filters: { crop: { id: { eq: $id } }, market: { id: { eq: $market } } }\n    ) {\n      data {\n        id\n        attributes {\n          crop {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Price\n          state {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          Unit\n          market {\n            data {\n              id\n              attributes {\n                Name\n              }\n            }\n          }\n          createdAt\n          updatedAt\n          publishedAt\n        }\n      }\n    }\n  }\n"])));

      var _getallChats = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["\n  query ($limit: Int, $start: Int, $key: String, $isAskIndorama: Boolean) {\n    chats(\n      filters: {\n        members: {\n          or: [{ username: { containsi: $key } }, { Name: { containsi: $key } }]\n        }\n        isAskIndorama: { eq: $isAskIndorama }\n      }\n      sort: \"updatedAt:desc\"\n      pagination: { limit: $limit, start: $start }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          isAskIndorama\n          members {\n            data {\n              id\n              attributes {\n                username\n                Name\n                UserType\n                Name\n                prof_pic {\n                  data {\n                    id\n                    attributes {\n                      name\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          chatInitiatedBy {\n            data {\n              id\n              attributes {\n                username\n                Name\n                UserType\n                Name\n                prof_pic {\n                  data {\n                    id\n                    attributes {\n                      name\n                      url\n                    }\n                  }\n                }\n              }\n            }\n          }\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _getChatMessages = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["\n  query ($id: ID!) {\n    chat(id: $id) {\n      data {\n        id\n        attributes {\n          messages {\n            data {\n              id\n              attributes {\n                message\n                createdAt\n                updatedAt\n                image_attachment {\n                  data {\n                    id\n                    attributes {\n                      name\n                      width\n                      height\n                      url\n                    }\n                  }\n                }\n                from_user {\n                  data {\n                    id\n                    attributes {\n                      username\n                      Name\n                      UserType\n                      prof_pic {\n                        data {\n                          id\n                          attributes {\n                            url\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                to_user {\n                  data {\n                    id\n                    attributes {\n                      username\n                      Name\n                      UserType\n                      prof_pic {\n                        data {\n                          id\n                          attributes {\n                            url\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n                chat {\n                  data {\n                    id\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));

      var _getSurveys = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["\n  query ($page: Int, $pageSize: Int) {\n    surveyForms(\n      sort: \"updatedAt:desc\"\n      pagination: { page: $page, pageSize: $pageSize }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          SurveyTitle\n          SurveyDescription\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var CreateSurveys = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["\n  mutation (\n    $SurveyTitle: String\n    $SurveyDescription: String\n    $Fields: [SurveyFormFieldsDynamicZoneInput!]\n  ) {\n    createSurveyForm(\n      data: {\n        SurveyTitle: $SurveyTitle\n        SurveyDescription: $SurveyDescription\n        Fields: $Fields\n      }\n    ) {\n      data {\n        id\n        attributes {\n          SurveyTitle\n          SurveyDescription\n          Fields {\n            __typename\n          }\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _getSurveyResults = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["\n  query ($limit: Int, $start: Int, $id: ID) {\n    surveyResults(\n      sort: \"updatedAt:desc\"\n      pagination: { limit: $limit, start: $start }\n      filters: { survey_form: { id: { eq: $id } } }\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          SurveyResponse\n          createdAt\n        }\n      }\n    }\n  }\n"])));

      var _deleteSurvey = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["\n  mutation ($id: ID!) {\n    deleteSurveyForm(id: $id) {\n      data {\n        attributes {\n          SurveyTitle\n          SurveyDescription\n        }\n      }\n    }\n  }\n"])));

      var _getDashboardAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["\n  query {\n    advertisement {\n      data {\n        id\n        attributes {\n          AdImage {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          url\n          isActive\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _getRetailerAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["\n  query {\n    retailerAdvertisement {\n      data {\n        id\n        attributes {\n          Image {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          url\n          isActive\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _updateDashboardAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["\n  mutation updateAdvertisement($imageId: ID, $clickUrl: String) {\n    updateAdvertisement(\n      data: { AdImage: $imageId, url: $clickUrl, isActive: true }\n    ) {\n      data {\n        id\n        attributes {\n          AdImage {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          url\n          isActive\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var _updateRetailerAd = apollo_angular__WEBPACK_IMPORTED_MODULE_5__["gql"](_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["\n  mutation updateAdvertisement($imageId: ID, $clickUrl: String) {\n    updateRetailerAdvertisement(\n      data: { Image: $imageId, url: $clickUrl, isActive: true }\n    ) {\n      data {\n        id\n        attributes {\n          Image {\n            data {\n              id\n              attributes {\n                url\n              }\n            }\n          }\n          url\n          isActive\n          createdAt\n          updatedAt\n        }\n      }\n    }\n  }\n"])));

      var DataService = /*#__PURE__*/function () {
        function DataService(http, apollo, toastr) {
          _classCallCheck(this, DataService);

          this.http = http;
          this.apollo = apollo;
          this.toastr = toastr;
          this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
          this.params = new URLSearchParams();
        }

        _createClass(DataService, [{
          key: "handleError",
          value: function handleError(error) {
            var errorMessage = "Unknown error!";
            console.log(error);
            window.alert(error.error.error.message); // if (error.error instanceof ErrorEvent) {
            //   // Client-side errors
            //   errorMessage = `Error: ${error.error.message}`;
            // } else {
            //   // Server-side errors
            //   errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            // }

            if (error.status !== 200) {
              this.toastr.error(error.error.error.Message);
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
            }
          }
        }, {
          key: "Login",
          value: function Login(data) {
            var httpOptions1 = {
              observe: "response"
            };
            return this.http.post(this.baseURL + "auth/login/", data, httpOptions1);
          }
        }, {
          key: "createRetailer",
          value: function createRetailer(data) {
            var httpOptions1 = {
              observe: "response"
            };
            return this.http.post(this.baseURL + "api/users", data, httpOptions1);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage(data) {
            var httpOptions1 = {
              observe: "response",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            };
            return this.http.post("https://www.bulksmsnigeria.com/api/v1/sms/create", data, httpOptions1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
          }
        }, {
          key: "getSurveyDetails",
          value: function getSurveyDetails(data) {
            var httpOptions1 = {
              observe: "response",
              headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("token"))
              }
            };
            return this.http.get("http://13.89.242.79/api/survey-forms/".concat(data, "?populate=Fields"), httpOptions1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
          }
        }, {
          key: "getDashboardStats",
          value: function getDashboardStats() {
            return this.apollo.watchQuery({
              query: _getDashboardStats,
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getCropPricesDashboard",
          value: function getCropPricesDashboard(id, market) {
            return this.apollo.watchQuery({
              query: _getCropPricesDashboard,
              fetchPolicy: "no-cache",
              variables: {
                id: id,
                market: market
              }
            });
          }
        }, {
          key: "getallChats",
          value: function getallChats(limit, start, key, isAskIndorama) {
            return this.apollo.watchQuery({
              query: _getallChats,
              fetchPolicy: "no-cache",
              variables: {
                limit: limit,
                start: start,
                key: key ? key : undefined,
                isAskIndorama: isAskIndorama ? isAskIndorama : undefined
              }
            });
          }
        }, {
          key: "getSurveys",
          value: function getSurveys(limit, start, key) {
            return this.apollo.watchQuery({
              query: _getSurveys,
              fetchPolicy: "no-cache",
              variables: {
                limit: limit,
                start: start,
                key: key ? key : undefined
              }
            });
          }
        }, {
          key: "getSurveyResults",
          value: function getSurveyResults(id) {
            return this.apollo.watchQuery({
              query: _getSurveyResults,
              fetchPolicy: "no-cache",
              variables: {
                limit: 10000,
                id: id
              }
            });
          }
        }, {
          key: "createSurveys",
          value: function createSurveys(SurveyTitle, SurveyDescription, Fields) {
            return this.apollo.mutate({
              mutation: CreateSurveys,
              fetchPolicy: "no-cache",
              variables: {
                SurveyTitle: SurveyTitle,
                SurveyDescription: SurveyDescription,
                Fields: Fields
              }
            });
          }
        }, {
          key: "deleteSurvey",
          value: function deleteSurvey(id) {
            return this.apollo.mutate({
              mutation: _deleteSurvey,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getChatMessages",
          value: function getChatMessages(id) {
            return this.apollo.watchQuery({
              query: _getChatMessages,
              variables: {
                id: id
              },
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getFarmDemos",
          value: function getFarmDemos(page, pageSize) {
            return this.apollo.watchQuery({
              query: FarmDemosQuery,
              fetchPolicy: "no-cache",
              variables: {
                page: page,
                pageSize: pageSize
              }
            });
          }
        }, {
          key: "getSingleFarmDemo",
          value: function getSingleFarmDemo(id) {
            return this.apollo.watchQuery({
              query: FarmDemoQuery,
              variables: {
                id: id
              },
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            return this.apollo.watchQuery({
              query: CropsQuery,
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            return this.apollo.watchQuery({
              query: StatesQuery,
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            return this.apollo.watchQuery({
              query: LGAquery,
              fetchPolicy: "no-cache",
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(id) {
            return this.apollo.watchQuery({
              query: Villagesquery,
              fetchPolicy: "no-cache",
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            return this.apollo.watchQuery({
              query: Areasquery,
              fetchPolicy: "no-cache",
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "getMarkets",
          value: function getMarkets(id) {
            return this.apollo.watchQuery({
              query: MarketQuery,
              fetchPolicy: "no-cache",
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "getCropPrices",
          value: function getCropPrices(page, pageSize) {
            return this.apollo.watchQuery({
              query: CropPricesQuery,
              fetchPolicy: "no-cache",
              variables: {
                page: page,
                pageSize: pageSize
              }
            });
          }
        }, {
          key: "getRetailers",
          value: function getRetailers(page, pageSize) {
            return this.apollo.watchQuery({
              query: RetailerQuery,
              fetchPolicy: "no-cache",
              variables: {
                page: page,
                pageSize: pageSize
              }
            });
          }
        }, {
          key: "getRetailerCategories",
          value: function getRetailerCategories() {
            return this.apollo.watchQuery({
              query: _getRetailerCategories,
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getUsers",
          value: function getUsers(page, pageSize, UserType) {
            return this.apollo.watchQuery({
              query: UsersQuery,
              fetchPolicy: "no-cache",
              variables: {
                UserType: UserType,
                page: page,
                pageSize: pageSize
              }
            });
          }
        }, {
          key: "getUsersLarge",
          value: function getUsersLarge(UserType, data) {
            return this.apollo.watchQuery({
              query: queryUsersLarge,
              fetchPolicy: "no-cache",
              variables: {
                UserType: UserType,
                village: data.village ? data.village : null,
                lga: data.lga ? data.lga : null,
                area: data.area ? data.area : null,
                state: data.state ? data.state : null
              }
            });
          }
        }, {
          key: "getsoilTests",
          value: function getsoilTests(page, pageSize) {
            return this.apollo.watchQuery({
              query: SoilTestQuery,
              fetchPolicy: "no-cache",
              variables: {
                page: page,
                pageSize: pageSize
              }
            });
          }
        }, {
          key: "getsingleSoilTests",
          value: function getsingleSoilTests(id) {
            return this.apollo.watchQuery({
              query: SingleSoilTestQuery,
              fetchPolicy: "no-cache",
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "getsingleRetailer",
          value: function getsingleRetailer(id) {
            return this.apollo.watchQuery({
              query: GetSingleRetailerQuery,
              fetchPolicy: "no-cache",
              variables: {
                id: id
              }
            });
          }
        }, {
          key: "AddFarmdemo",
          value: function AddFarmdemo(farmdemo) {
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
                images: farmdemo.images
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddStates",
          value: function AddStates(state) {
            return this.apollo.mutate({
              mutation: StatesMutation,
              variables: {
                Name: state.state
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddLGA",
          value: function AddLGA(lga) {
            return this.apollo.mutate({
              mutation: LGAmutation,
              variables: {
                Name: lga.lga,
                state: lga.state
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddArea",
          value: function AddArea(area) {
            return this.apollo.mutate({
              mutation: AreaMutation,
              variables: {
                Name: area.area,
                lga: area.lga,
                PostalCode: area.PostalCode
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddMarket",
          value: function AddMarket(market) {
            return this.apollo.mutate({
              mutation: MarketMutation,
              variables: {
                Name: market.market,
                state: market.state
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddCrop",
          value: function AddCrop(crop) {
            return this.apollo.mutate({
              mutation: CropsMutation,
              variables: {
                Name: crop.crop
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "Addvillage",
          value: function Addvillage(village) {
            return this.apollo.mutate({
              mutation: VillageMutation,
              variables: {
                Name: village.village,
                area: village.area
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddCropPrice",
          value: function AddCropPrice(price, image) {
            return this.apollo.mutate({
              mutation: CropPriceMutation,
              variables: {
                crop: price.crop,
                price: parseFloat(price.Price),
                unit: price.Unit,
                state: price.state,
                market: price.market,
                image: image,
                published: new Date()
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddIndoramaUpdates",
          value: function AddIndoramaUpdates(price, imageid) {
            return this.apollo.mutate({
              mutation: CreateIndoramaUpdates,
              variables: {
                Title: price.Title,
                Body: price.Body,
                Images: imageid ? imageid : price.Image
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "createBestCropPractise",
          value: function createBestCropPractise(price, imageid, media) {
            return this.apollo.mutate({
              mutation: CreateBestCropPractices,
              variables: {
                crop: price.crop,
                content: price.content,
                cropImage: imageid,
                media: media
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "createMarketplaceProduct",
          value: function createMarketplaceProduct(price, imageid) {
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
                description: price.description
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "updateMarketplaceProduct",
          value: function updateMarketplaceProduct(price, id, imageid) {
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
                description: price.description
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "updateMarketplaceProductImg",
          value: function updateMarketplaceProductImg(id, imageid) {
            return this.apollo.mutate({
              mutation: UpdateMarketplaceProductImg,
              variables: {
                id: id,
                images: imageid
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "createActivity",
          value: function createActivity(price) {
            return this.apollo.mutate({
              mutation: CreateActivities,
              variables: {
                FarmerName: price.FarmerName ? price.FarmerName : undefined,
                Date: price.Date,
                Latitude: parseFloat(price.Latitude),
                Longitude: parseFloat(price.Longitude),
                NoOfAttendees: parseInt(price.NoOfAttendees),
                crop: price.crop ? price.crop : undefined,
                ConditionOfCrop: price.ConditionOfCrop ? price.ConditionOfCrop : undefined,
                PlannedFarmDay: price.PlannedFarmDay ? price.PlannedFarmDay : undefined,
                Reason: price.Reason,
                area: price.area,
                ActivityType: price.ActivityType,
                Time: price.Time
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getAgronomist",
          value: function getAgronomist(id) {
            return this.apollo.watchQuery({
              query: _getAgronomist,
              variables: {
                user: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getIndoramaUpdates",
          value: function getIndoramaUpdates(id, page, pageSize) {
            return this.apollo.watchQuery({
              query: _getIndoramaUpdates,
              variables: {
                id: id,
                isActive: true,
                isDelete: false,
                page: page,
                pageSize: pageSize
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getMarketplace",
          value: function getMarketplace(pageNumber, pageSize, categoryFilter) {
            return this.apollo.watchQuery({
              query: GetMarketplace,
              variables: {
                pageNumber: pageNumber,
                pageSize: pageSize,
                categoryFilter: categoryFilter
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getSingleMarketplaceProduct",
          value: function getSingleMarketplaceProduct(id) {
            return this.apollo.watchQuery({
              query: GetMarketplaceSingleProduct,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getBestCropPractises",
          value: function getBestCropPractises(page, pageSize, cropFilter) {
            return this.apollo.watchQuery({
              query: GetBestCropPractices,
              variables: {
                page: page,
                pageSize: pageSize,
                cropFilter: cropFilter
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getActivities",
          value: function getActivities(page, pageSize) {
            return this.apollo.watchQuery({
              query: GetActivities,
              variables: {
                page: page,
                pageSize: pageSize
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getActivity",
          value: function getActivity(id) {
            return this.apollo.watchQuery({
              query: GetSingleActivity,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getMarketplaceCategories",
          value: function getMarketplaceCategories(id) {
            return this.apollo.watchQuery({
              query: GetMarketplaceCategories,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "createAgronomist",
          value: function createAgronomist(data, id) {
            return this.apollo.mutate({
              mutation: CreateAgronomist,
              variables: {
                areas: data.area,
                user: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateCropPrice",
          value: function UpdateCropPrice(price, id, imageid) {
            return this.apollo.mutate({
              mutation: UpdateCropPriceMutation,
              variables: {
                id: id,
                crop: price.crop,
                price: parseFloat(price.Price),
                unit: price.Unit,
                state: price.state,
                market: price.market,
                published: new Date(),
                image: imageid ? imageid : price.Image
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddSoilTestResult",
          value: function AddSoilTestResult(result) {
            return this.apollo.mutate({
              mutation: _AddSoilTestResult,
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
                sulphur: result.SulphurObserved
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateSoilTestResult",
          value: function UpdateSoilTestResult(result) {
            return this.apollo.mutate({
              mutation: _UpdateSoilTestResult,
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
                sulphur: result.SulphurObserved
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateCrop",
          value: function UpdateCrop(crop, id) {
            return this.apollo.mutate({
              mutation: UpdateCrops,
              variables: {
                Name: crop.crop,
                isDelete: crop.isDelete,
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateState",
          value: function UpdateState(data, id) {
            return this.apollo.mutate({
              mutation: _UpdateState,
              variables: {
                Name: data.state,
                isDelete: data.isDelete,
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateLGA",
          value: function UpdateLGA(data, id) {
            return this.apollo.mutate({
              mutation: _UpdateLGA,
              variables: {
                Name: data.lga,
                state: data.state,
                isDelete: data.isDelete,
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateMarket",
          value: function UpdateMarket(data, id) {
            return this.apollo.mutate({
              mutation: _UpdateMarket,
              variables: {
                Name: data.market,
                state: data.state,
                isDelete: data.isDelete,
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateArea",
          value: function UpdateArea(area, id) {
            return this.apollo.mutate({
              mutation: _UpdateArea,
              variables: {
                Name: area.area,
                lga: area.lga,
                PostalCode: area.PostalCode,
                isDelete: area.isDelete,
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "Updatevillage",
          value: function Updatevillage(village, id) {
            return this.apollo.mutate({
              mutation: UpdateVillage,
              variables: {
                Name: village.village,
                area: village.area,
                isDelete: village.isDelete,
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateSoilTest",
          value: function UpdateSoilTest(test, soilTestId) {
            return this.apollo.mutate({
              mutation: _UpdateSoilTest,
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
                nutrient: test.nutrient
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateFarmDemo",
          value: function UpdateFarmDemo(data, id) {
            return this.apollo.mutate({
              mutation: _UpdateFarmDemo,
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
                  SecondUreaApplication: data.SecondUreaApplication_F
                },
                indoramaPractise: {
                  Yield: parseFloat(data.Yield_I),
                  DateOfSowing: data.DateOfSowing_I,
                  DateOfDemonstration: data.DateOfDemonstration_I,
                  FirstUreaApplication: data.FirstUreaApplication_I,
                  SecondUreaApplication: data.SecondUreaApplication_I
                },
                // isPesticidesUsed: data.isPesticidesUsed,
                images: data.images,
                season: data.Season,
                Status: data.Status,
                dateOfHarvesting: data.DateOfHarvesting
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateRetailer",
          value: function UpdateRetailer(data, id) {
            return this.apollo.mutate({
              mutation: updateRetailerQuery,
              variables: {
                id: id,
                categories: data.retailer_categories,
                name: data.Name,
                latitude: parseFloat(data.Latitude),
                longitude: parseFloat(data.Longitude),
                village: data.village,
                lga: data.lga,
                bio: data.Bio,
                blocked: data.blocked == "true" ? true : false,
                UserType: data === null || data === void 0 ? void 0 : data.UserType,
                contactNumber: data.ContactNumber
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateRetailerPic",
          value: function UpdateRetailerPic(id, image) {
            return this.apollo.mutate({
              mutation: updateRetailerProfPic,
              variables: {
                id: id,
                prof_pic: image
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "AddFarmdemoPic",
          value: function AddFarmdemoPic(id, image) {
            return this.apollo.mutate({
              mutation: _UpdateFarmDemo,
              variables: {
                id: id,
                images: image
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "addRetailerProducts",
          value: function addRetailerProducts(data, retailer_category, retailer, image) {
            return this.apollo.mutate({
              mutation: createdRetailerProducts,
              variables: {
                ItemName: data.itemName,
                Price: parseInt(data.price),
                Unit: data.unit,
                Images: image,
                isApproved: true,
                retailer_category: retailer_category,
                retailers: retailer
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateRetailerProducts",
          value: function UpdateRetailerProducts(data, retailer_category, retailer) {
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
                retailer: retailer
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "UpdateIndoramaUpdates",
          value: function UpdateIndoramaUpdates(price, id, imageid) {
            return this.apollo.mutate({
              mutation: _UpdateIndoramaUpdates,
              variables: {
                id: id,
                Title: price === null || price === void 0 ? void 0 : price.Title,
                isDelete: price === null || price === void 0 ? void 0 : price.isDelete,
                Body: price === null || price === void 0 ? void 0 : price.Body,
                Images: imageid ? imageid : price === null || price === void 0 ? void 0 : price.Image
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "updateActivity",
          value: function updateActivity(price, id) {
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
                Time: price.Time
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "upload",
          value: function upload(file) {
            var _a;

            var formData = new FormData();

            for (var i = 0; i < file.length; i++) {
              // formData.append("file[]",  file[i]);
              formData.append("files", file[i], (_a = file[i]) === null || _a === void 0 ? void 0 : _a.name);
            } // formData.append("files", file, file?.name);


            console.log(formData);
            var httpOptions1 = {
              observe: "response"
            };
            return this.http.post(this.baseURL + "api/upload", formData, httpOptions1);
          }
        }, {
          key: "deleteArea",
          value: function deleteArea(id) {
            return this.apollo.mutate({
              mutation: DeleteAreaMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteVillage",
          value: function deleteVillage(id) {
            return this.apollo.mutate({
              mutation: DeleteVillageMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteLGA",
          value: function deleteLGA(id) {
            return this.apollo.mutate({
              mutation: DeleteLGAMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteState",
          value: function deleteState(id) {
            return this.apollo.mutate({
              mutation: DeleteStatesMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteMarket",
          value: function deleteMarket(id) {
            return this.apollo.mutate({
              mutation: DeleteMarketMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteCrop",
          value: function deleteCrop(id) {
            return this.apollo.mutate({
              mutation: DeleteCropMutation,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteFarmDemo",
          value: function deleteFarmDemo(id) {
            return this.apollo.mutate({
              mutation: DeleteFarmdemo,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(id) {
            return this.apollo.mutate({
              mutation: DeleteRetailerProduct,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteFile",
          value: function deleteFile(id) {
            return this.apollo.mutate({
              mutation: DeleteFile,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteUser",
          value: function deleteUser(id) {
            return this.apollo.mutate({
              mutation: DeleteUser,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteBestPractice",
          value: function deleteBestPractice(id) {
            return this.apollo.mutate({
              mutation: DeleteBestPractice,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "deleteActivity",
          value: function deleteActivity(id) {
            return this.apollo.mutate({
              mutation: DeleteActivity,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "DeleteMarketplaceProduct",
          value: function DeleteMarketplaceProduct(id) {
            return this.apollo.mutate({
              mutation: _DeleteMarketplaceProduct,
              variables: {
                id: id
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "getDashboardAd",
          value: function getDashboardAd() {
            return this.apollo.watchQuery({
              query: _getDashboardAd,
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "getRetailerAd",
          value: function getRetailerAd() {
            return this.apollo.watchQuery({
              query: _getRetailerAd,
              fetchPolicy: "no-cache"
            });
          }
        }, {
          key: "updateRetailerAd",
          value: function updateRetailerAd(url, image) {
            return this.apollo.mutate({
              mutation: _updateRetailerAd,
              variables: {
                clickUrl: url,
                imageId: image
              },
              errorPolicy: "all"
            });
          }
        }, {
          key: "updateDashboardAd",
          value: function updateDashboardAd(url, image) {
            return this.apollo.mutate({
              mutation: _updateDashboardAd,
              variables: {
                clickUrl: url,
                imageId: image
              },
              errorPolicy: "all"
            });
          }
        }]);

        return DataService;
      }();

      DataService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
        }];
      };

      DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], apollo_angular__WEBPACK_IMPORTED_MODULE_5__["Apollo"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])], DataService);
      /***/
    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var _graphql_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./graphql.module */
      "4KHl"); // Import containers
      // const APP_CONTAINERS = [
      //   DefaultLayoutComponent
      // ];
      // Import routing module
      // Import 3rd party components
      // import { TabsModule } from 'ngx-bootstrap/tabs';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppBreadcrumbModule"].forRoot(), ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppHeaderModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_14__["AppSidebarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_16__["BsDropdownModule"].forRoot(), _graphql_module__WEBPACK_IMPORTED_MODULE_17__["GraphQLModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _views_error_404_component__WEBPACK_IMPORTED_MODULE_11__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_12__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _containers__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "beVS": function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_login_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/login/auth.guard */
      "nl+3"); // Import Containers


      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Page 500'
        }
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
          title: 'Login Page'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        canActivate: [_views_login_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [{
          path: 'sms-campaigns',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-sms-campaigns-sms-campaigns-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-sms-campaigns-sms-campaigns-module")]).then(__webpack_require__.bind(null,
            /*! ./views/sms-campaigns/sms-campaigns.module */
            "0OHv")).then(function (m) {
              return m.SMSCampaignsModule;
            });
          }
        }, {
          path: 'farmdemo',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-farm-demo-farm-demo-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("default~views-farm-demo-farm-demo-module~views-soil-test-soil-test-module"), __webpack_require__.e("views-farm-demo-farm-demo-module")]).then(__webpack_require__.bind(null,
            /*! ./views/farm-demo/farm-demo.module */
            "6rTd")).then(function (m) {
              return m.FarmDemoModule;
            });
          }
        }, {
          path: 'chat',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-chat-chat-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-chat-chat-module")]).then(__webpack_require__.bind(null,
            /*! ./views/chat/chat.module */
            "jykL")).then(function (m) {
              return m.ChatModule;
            });
          }
        }, {
          path: 'activities',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-activities-activities-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-activities-activities-module")]).then(__webpack_require__.bind(null,
            /*! ./views/activities/activities.module */
            "ve2J")).then(function (m) {
              return m.ActivitiesModule;
            });
          }
        }, {
          path: 'surveys',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-surveys-surveys-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-surveys-surveys-module")]).then(__webpack_require__.bind(null,
            /*! ./views/surveys/surveys.module */
            "8dM2")).then(function (m) {
              return m.SurveysModule;
            });
          }
        }, {
          path: 'marketplace',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-marketplace-marketplace-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-marketplace-marketplace-module")]).then(__webpack_require__.bind(null,
            /*! ./views/marketplace/marketplace.module */
            "4Ywq")).then(function (m) {
              return m.MarketplaceModule;
            });
          }
        }, {
          path: 'best-crop-practices',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-best-crop-practices-best-crop-practices-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-best-crop-practices-best-crop-practices-module")]).then(__webpack_require__.bind(null,
            /*! ./views/best-crop-practices/best-crop-practices.module */
            "mjQe")).then(function (m) {
              return m.BestCropPracticesModule;
            });
          }
        }, {
          path: 'indorama_updates',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-indorama-updates-indorama-updates-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-indorama-updates-indorama-updates-module")]).then(__webpack_require__.bind(null,
            /*! ./views/indorama-updates/indorama-updates.module */
            "eFNz")).then(function (m) {
              return m.IndoramaUpdatesModule;
            });
          }
        }, {
          path: 'soiltest',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-soil-test-soil-test-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-farm-demo-farm-demo-module~views-soil-test-soil-test-module"), __webpack_require__.e("views-soil-test-soil-test-module")]).then(__webpack_require__.bind(null,
            /*! ./views/soil-test/soil-test.module */
            "/dPm")).then(function (m) {
              return m.SoilTestModule;
            });
          }
        }, {
          path: 'cropprices',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-crop-prices-crop-prices-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-crop-prices-crop-prices-module")]).then(__webpack_require__.bind(null,
            /*! ./views/crop-prices/crop-prices.module */
            "N8R/")).then(function (m) {
              return m.CropPricesModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-dashboard-dashboard-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'advertisement',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-advertisement-advertisement-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-advertisement-advertisement-module")]).then(__webpack_require__.bind(null,
            /*! ./views/advertisement/advertisement.module */
            "Th2f")).then(function (m) {
              return m.AdvertisementModule;
            });
          }
        }, {
          path: 'retailers',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-retailers-retailers-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-retailers-retailers-module")]).then(__webpack_require__.bind(null,
            /*! ./views/retailers/retailers.module */
            "d3Ph")).then(function (m) {
              return m.RetailersModule;
            });
          }
        }, {
          path: 'users',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-users-users-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-users-users-module")]).then(__webpack_require__.bind(null,
            /*! ./views/users/users.module */
            "QSsw")).then(function (m) {
              return m.UsersModule;
            });
          }
        }, {
          path: 'masters',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-masters-masters-module */
            [__webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~5020e6bb"), __webpack_require__.e("default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"), __webpack_require__.e("default~views-activities-activities-module~views-advertisement-advertisement-module~views-best-crop-~b517c4b1"), __webpack_require__.e("views-masters-masters-module")]).then(__webpack_require__.bind(null,
            /*! ./views/masters/masters.module */
            "NPE9")).then(function (m) {
              return m.MastersModule;
            });
          }
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq": function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [// {
      //   name: "Dashboard",
      //   url: "/dashboard",
      //   icon: "icon-speedometer",
      //   role: "",
      // },
      {
        name: "Activities",
        url: "/activities/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Marketplace",
        url: "/marketplace/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Indorama Updates",
        url: "/indorama_updates/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "SMS Campaigns",
        url: "/sms-campaigns/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Farm Demo",
        url: "/farmdemo/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Soil Analysis",
        url: "/soiltest/customers",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Crop Prices",
        url: "/cropprices/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Retailers",
        url: "/retailers/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Users",
        url: "/users/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Best crop practices",
        url: "/best-crop-practices/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Surveys",
        url: "/surveys/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Chat",
        url: "/chat/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Advertisement",
        url: "/advertisement/all",
        icon: "icon-cursor",
        role: ""
      }, {
        name: "Masters",
        url: "/soiltest/enquiries",
        icon: 'icon-cursor',
        role: "",
        children: [{
          name: "States",
          url: "/masters/States"
        }, {
          name: "LGA",
          url: "/masters/LGA"
        }, {
          name: "Area",
          url: "/masters/Areas"
        }, {
          name: "Villages",
          url: "/masters/Villages"
        }, {
          name: "Markets",
          url: "/masters/Markets"
        }, {
          name: "Crops",
          url: "/masters/Crops"
        }]
      }];
      /***/
    },

    /***/
    "dxhq": function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "lm8q": function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header [navbarBrandRouterLink]=\"['/dashboard']\" [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.png',width:200,alt: 'CartIntoCar Logo'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/logo.png', width: 200, alt: 'CartIntoCar Logo'}\"\r\n  [sidebarToggler]=\"'lg'\">\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    {{userName}}\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"\r\n        dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.png\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\" />\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\"><i class=\"fa fa-user\"></i>{{userName}}</a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\"\r\n    (minimizedChange)=\"toggleMinimize($event)\">\r\n    <app-sidebar-nav [navItems]=\"navItems\"></app-sidebar-nav>\r\n    <!-- <app-sidebar-minimizer></app-sidebar-minimizer> -->\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <cui-breadcrumb>\r\n    </cui-breadcrumb>\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </main>\r\n</div>\r\n<app-footer>\r\n  <span><a>Indorama Agronomy App</a> &copy; 2022 Untangle_</span>\r\n  <!-- <span class=\"ml-auto\">Powered by <a href=\"https://www.upsquad.in\">upsquad</a></span> -->\r\n</app-footer>";
      /***/
    },

    /***/
    "nAJl": function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "nSew": function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <div class=\"app-body bg-image\">\r\n  <main class=\"main d-flex align-items-center\" style=\"background-color: rgba(0, 0, 0, 0.8);\">\r\n    <div class=\"login-box\">\r\n      <div class=\"card p-4\" style=\"width: fit-content;\">\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h1>Login</h1>\r\n            <p class=\"text-muted\">Welcome back! Please log in to your account</p>\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n            </div>\r\n            <div class=\"input-group mb-4\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n              </div>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\"\r\n                required>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div> -->\r\n<!-- <div class=\"bg-image\"> -->\r\n<div class=\"d-md-flex h-md-100 align-items-center\">\r\n  <div class=\"col-md-6 p-0 bg-black h-md-100 login-screen\">\r\n    <div class=\"text-white d-md-flex align-items-center h-100 text-center justify-content-center\">\r\n      <div class=\"container-fluid bg-image\" style=\" height: 100vh \">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6 p-0 bg-white h-md-100\">\r\n    <div class=\"d-md-flex align-items-center h-md-100 justify-content-center\">\r\n      <div class=\"container-fluid fallback-image\" style=\" height: 100vh \">\r\n        <form class=\"login-box\" #usForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" style=\"\r\n        background: #ffffff75;\r\n        padding: 20px;\r\n        border-radius: 10px;\r\n    \">\r\n          <img src='assets/img/brand/logo.png' width=\"300\" style=\"margin-bottom: 25px;\"/>\r\n          <h3 class=\"mt-3\">Admin Panel</h3>\r\n          <p class=\"text-muted\">Welcome back! Please log in to your account</p>\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" id=\"login\" maxlength=\"80\" size=\"30\" ngModel\r\n              value=\"\" name=\"identifier\" required>\r\n          </div>\r\n          <div class=\"input-group mb-4\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n            </div>\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\" size=\"30\" ngModel\r\n              name=\"password\" value=\"\" required>\r\n          </div>\r\n          <!-- <div class=\"row\"> -->\r\n          <!-- <div class=\"col-6\"> -->\r\n          <button type=\"submit\" class=\"btn btn-lg px-4\" style=\"background-color: #108D51; color: white;\">\r\n            <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\">\r\n            </span>Login\r\n          </button>\r\n          <!-- </div> -->\r\n          <!-- </div> -->\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- </div> -->";
      /***/
    },

    /***/
    "nl+3": function nl3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authentication.service */
      "1BUF");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authenticationService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authenticationService = authenticationService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var currentUser = this.authenticationService.currentUserValue;

            if (currentUser) {
              console.log(currentUser, 'authguard', route.data.roles); // check if route is restricted by role

              if (route.data.roles && route.data.roles.indexOf(currentUser.user.UserType) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/500']);
                console.log('authguard failed');
                return false;
              } // authorised so return true


              return true;
            }

            console.log(currentUser, 'authguard il kerilla', route.data.roles); // not logged in so redirect to login page with the return url

            this.router.navigate(['/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], AuthGuard);
      /***/
    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map