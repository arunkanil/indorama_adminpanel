(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-users-users-module"], {
    /***/
    "QSsw": function QSsw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
        return UsersModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./users.component */
      "xSMm");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./users-routing.module */
      "VY+B");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./user-detail.component */
      "W5lF"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var UsersModule = function UsersModule() {
        _classCallCheck(this, UsersModule);
      };

      UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _users_routing_module__WEBPACK_IMPORTED_MODULE_7__["RetailersRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"], _user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"]]
      })], UsersModule);
      /***/
    },

    /***/
    "VY+B": function VYB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailersRoutingModule", function () {
        return RetailersRoutingModule;
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


      var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users.component */
      "xSMm");
      /* harmony import */


      var _user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-detail.component */
      "W5lF");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'retailers'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
          data: {
            title: 'Users'
          }
        }, {
          path: 'user_details/:id',
          // canActivate: [AuthGuard],
          component: _user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"],
          data: {
            title: 'Retailer Details'
          }
        }]
      }];

      var RetailersRoutingModule = function RetailersRoutingModule() {
        _classCallCheck(this, RetailersRoutingModule);
      };

      RetailersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RetailersRoutingModule);
      /***/
    },

    /***/
    "W5lF": function W5lF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function () {
        return UserDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-detail.component.html */
      "XCQh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var UserDetailComponent = /*#__PURE__*/function () {
        function UserDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, UserDetailComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
          this.loading = true;
          this.details = [];
          this.btnLoading = false;
          this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
          this.users = [];
          this.Villages = [];
          this.LGA = [];
          this.Areas = [];
          this.Retailers = [];
          this.Farmers = [];
          this.States = [];
          this.Crops = [];
          this.file = null;
          this.dispArea = false;
          this.agentForm = this.fb.group({
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // username: ["", Validators.required],
            blocked: [""],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // email: ["", Validators.required],
            Farmer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            UserType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Bio: [""],
            password: [""],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: [""],
            Longitude: [""]
          });
          this.resultForm = this.fb.group({
            id: [""],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.areaForm = this.fb.group({
            state: [""],
            agronomist_lgas: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.productForm = this.fb.group({
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(UserDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getLists();
            this.getAreas();
            this.getCrops();
            this.getLGAs();
            this.getStates();
            this.getVillages();
            this.getFarmers();
            this.getRetailers();
            this.activatedRouter.params.subscribe(function (params) {
              _this.id = params["id"];
            });
            this.getTest();
          }
        }, {
          key: "imgUrl",
          value: function imgUrl(url) {
            return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl) + url;
          }
        }, {
          key: "getTest",
          value: function getTest() {
            var _this2 = this;

            this.dataservice.getsingleRetailer(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;

              console.log("getsingleRetailer", result.data.usersPermissionsUsers.data[0]);
              _this2.details = result.data.usersPermissionsUsers.data[0];
              _this2.agentForm = _this2.fb.group({
                ContactNumber: [(_a = _this2.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Name: [(_b = _this2.details.attributes) === null || _b === void 0 ? void 0 : _b.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // email: [this.details.attributes?.email, Validators.required],
                Bio: [(_c = _this2.details.attributes) === null || _c === void 0 ? void 0 : _c.Bio],
                Latitude: [(_d = _this2.details.attributes) === null || _d === void 0 ? void 0 : _d.Latitude],
                Longitude: [(_e = _this2.details.attributes) === null || _e === void 0 ? void 0 : _e.Longitude],
                state: [(_m = (_l = (_k = (_j = (_h = (_g = (_f = _this2.details) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.lga) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.attributes) === null || _k === void 0 ? void 0 : _k.state) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                lga: [(_r = (_q = (_p = (_o = _this2.details) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.lga) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                village: [(_v = (_u = (_t = (_s = _this2.details) === null || _s === void 0 ? void 0 : _s.attributes) === null || _t === void 0 ? void 0 : _t.village) === null || _u === void 0 ? void 0 : _u.data) === null || _v === void 0 ? void 0 : _v.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                password: [""],
                blocked: [(_x = (_w = _this2.details) === null || _w === void 0 ? void 0 : _w.attributes) === null || _x === void 0 ? void 0 : _x.blocked],
                UserType: [(_z = (_y = _this2.details) === null || _y === void 0 ? void 0 : _y.attributes) === null || _z === void 0 ? void 0 : _z.UserType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              _this2.loading = false;
              _this2.dispArea = ((_1 = (_0 = _this2.details) === null || _0 === void 0 ? void 0 : _0.attributes) === null || _1 === void 0 ? void 0 : _1.UserType) == "Agronomist" ? true : false;

              if (_this2.dispArea == true) {
                _this2.agronomists = (_4 = (_3 = (_2 = _this2.details) === null || _2 === void 0 ? void 0 : _2.attributes) === null || _3 === void 0 ? void 0 : _3.agronomist_lgas) === null || _4 === void 0 ? void 0 : _4.data; // this.dataservice
                //   .getAgronomist(this.id)
                //   .valueChanges.subscribe((result: any) => {
                //     console.log("getAgronomist", result?.data?.agronomists?.data);
                //     this.agronomists = result?.data?.agronomists?.data[0];
                //   });
              }
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this3 = this;

            this.dataservice.getCrops(1, 10000, "").valueChanges.subscribe(function (result) {
              console.log("getCrops", result.data.crops.data);
              _this3.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this4 = this;

            this.dataservice.getStates(1, 10000, "").valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this4.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            var _this5 = this;

            this.dataservice.getLGAs(1, 10000, "", id).valueChanges.subscribe(function (result) {
              console.log("getLGAs", result.data.lgas.data);
              _this5.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this6 = this;

            this.dataservice.getAreas(1, 10000, "", id).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this6.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getRetailers",
          value: function getRetailers() {
            var _this7 = this;

            this.dataservice.getRetailerCategories().valueChanges.subscribe(function (result) {
              console.log("getRetailers", result.data.retailerCategories.data);
              _this7.Retailers = result.data.retailerCategories.data;
            });
          }
        }, {
          key: "getFarmers",
          value: function getFarmers() {
            var _this8 = this;

            this.dataservice.getUsers(undefined, undefined, "Farmer").valueChanges.subscribe(function (result) {
              console.log("getFarmers", result.data.usersPermissionsUsers.data);
              _this8.Farmers = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(id) {
            var _this9 = this;

            this.dataservice.getVillages(1, 10000, "", id).valueChanges.subscribe(function (result) {
              console.log("getVillages", result.data.villages.data);
              _this9.Villages = result.data.villages.data;
            });
          }
        }, {
          key: "dateConvertor",
          value: function dateConvertor(date) {
            return new Date(date);
          }
        }, {
          key: "getLists",
          value: function getLists() {
            this.loading = true;
          }
        }, {
          key: "openModal",
          value: function openModal(data, flag) {
            var _a, _b, _c;

            this.resultModal.show();
            console.log(data, flag);
            this.flag = flag;
            this.resultForm = this.fb.group({
              id: [data === null || data === void 0 ? void 0 : data.id],
              soil_test_sample: [data === null || data === void 0 ? void 0 : data.id],
              itemName: [(_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.ItemName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              price: [(_b = data === null || data === void 0 ? void 0 : data.attributes) === null || _b === void 0 ? void 0 : _b.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              unit: [(_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
          }
        }, {
          key: "openDeleteModal",
          value: function openDeleteModal(data) {
            this.deleteObj = data;
            this.deleteModal.show();
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this10 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.agentForm.value);
            this.dataservice.UpdateRetailer(this.agentForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateUsersPermissionsUser) {
                _this10.toastr.success("User updated successfully!");

                _this10.btnLoading = false;

                _this10.myModal.hide();

                _this10.getTest();
              } else {
                _this10.toastr.error("Failed. Please check the fields!");

                _this10.btnLoading = false;
              }
            }, function (error) {
              _this10.btnLoading = false;
            });
          }
        }, {
          key: "ResultSubmit",
          value: function ResultSubmit() {
            var _this11 = this;

            var _a, _b, _c, _d;

            console.log("edit", this.resultForm.value);
            var resp = {};
            console.log(this.resultForm.value);
            this.dataservice.UpdateRetailerProducts(this.resultForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateRetailerProduct) {
                _this11.toastr.success("Product updated successfully!");

                _this11.resultModal.hide();

                _this11.getTest();
              } else {
                _this11.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.file = [];

            for (var i = 0; i < event.target.files.length; i++) {
              this.file.push(event.target.files[i]);
            }

            console.log(this.file);
          }
        }, {
          key: "filterLGA",
          value: function filterLGA(event) {
            this.getLGAs(event.target.value);
          }
        }, {
          key: "filterArea",
          value: function filterArea(event) {
            this.getAreas(event.target.value);
          }
        }, {
          key: "filterVillage",
          value: function filterVillage(event) {
            this.getVillages(event.target.value);
          }
        }, {
          key: "uploadProfPic",
          value: function uploadProfPic() {
            var _this12 = this;

            var resp = {};
            this.dataservice.upload(this.file).subscribe(function (response) {
              var _a;

              if (response.status == 200) {
                console.log(response);

                _this12.dataservice.UpdateRetailerPic(_this12.id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.updateUsersPermissionsUser) {
                    _this12.toastr.success("Success!");

                    _this12.file = null;

                    _this12.getTest();

                    _this12.addProductModal.hide();
                  } else {
                    _this12.toastr.error("Failed!");
                  }
                });
              } else {
                _this12.toastr.error("Image failed to upload!");
              }
            });
          }
        }, {
          key: "AreaSubmit",
          value: function AreaSubmit() {
            var _this13 = this;

            var resp = {};
            console.log(this.areaForm.value);
            this.dataservice.UpdateRetailer(this.areaForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateUsersPermissionsUser) {
                _this13.toastr.success("User updated successfully!");

                _this13.areaModal.hide();

                _this13.getTest();
              } else {
                _this13.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "ProductSubmit",
          value: function ProductSubmit() {
            var _this14 = this;

            var resp = {};
            this.dataservice.upload(this.file).subscribe(function (response) {
              var _a, _b, _c, _d, _e;

              if (response.status == 200) {
                console.log(response);

                _this14.dataservice.addRetailerProducts(_this14.productForm.value, (_d = (_c = (_b = (_a = _this14.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, _this14.id, (_e = response.body[0]) === null || _e === void 0 ? void 0 : _e.id).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.createRetailerProduct) {
                    _this14.toastr.success("Success!");

                    _this14.file = null;

                    _this14.getTest();

                    _this14.addProductModal.hide();
                  } else {
                    _this14.toastr.error("Failed!");
                  }
                });
              } else {
                _this14.toastr.error("Image failed to upload!");
              }
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct() {
            var _this15 = this;

            var _a, _b;

            if (((_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.UserType) !== "Agronomist") {
              this.dataservice.deleteUser(this.id).subscribe(function (result) {
                console.log("response", result);

                if (result.data.deleteUsersPermissionsUser) {
                  _this15.toastr.success("Success!");

                  _this15.deleteModal.hide();

                  _this15.router.navigate(["/users/all"]);
                } else {
                  _this15.toastr.error("Failed!");
                }
              });
            } else {
              this.toastr.error("Can't delete Agronomist. Try setting as blocked.");
            }
          }
        }]);

        return UserDetailComponent;
      }();

      UserDetailComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      UserDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }],
        areaModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["areaModal"]
        }],
        resultModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["resultModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }],
        addProductModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["addProductModal"]
        }]
      };
      UserDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_user_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], UserDetailComponent);
      /***/
    },

    /***/
    "XCQh": function XCQh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div\n    bsModal\n    #deleteModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this record?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"deleteModal.hide()\"\n          >\n            No! Cancel.\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"deleteProduct()\"\n          >\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    bsModal\n    #areaModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit assigned areas</h4>\n          <button\n            type=\"button\"\n            class=\"close\"\n            (click)=\"myModal.hide()\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form [formGroup]=\"areaForm\" (ngSubmit)=\"AreaSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"state\">State</label>\n              <select\n                class=\"form-control\"\n                id=\"state\"\n                (change)=\"filterLGA($event)\"\n                ngModel\n                name=\"state\"\n                formControlName=\"state\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                  {{ item.attributes.Name }}\n                </option>\n              </select>\n            </div>\n            <!-- <div class=\"form-group\">\n              <label for=\"lga\">LGA</label>\n              <select\n                class=\"form-control\"\n                id=\"lga\"\n                (change)=\"filterArea($event)\"\n                ngModel\n                name=\"lga\"\n                formControlName=\"lga\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                  {{ item.attributes.Name }}\n                </option>\n              </select>\n            </div> -->\n            <div class=\"form-group\">\n              <label for=\"agronomist_lgas\">LGAs</label>\n              <select\n                class=\"form-control\"\n                id=\"agronomist_lgas\"\n                multiple\n                required\n                ngModel\n                name=\"agronomist_lgas\"\n                formControlName=\"agronomist_lgas\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                  {{ item.attributes.Name }}\n                </option>\n              </select>\n            </div>\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              (click)=\"areaModal.hide()\"\n            >\n              Close\n            </button>\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary ml-2\"\n              [disabled]=\"btnLoading || !areaForm.valid\"\n            >\n              <span\n                *ngIf=\"btnLoading\"\n                class=\"spinner-border spinner-border-sm\"\n                role=\"status\"\n                aria-hidden=\"true\"\n              ></span>\n              Save changes\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>User Details</h2>\n      <span>\n        <div>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            data-toggle=\"modal\"\n            (click)=\"myModal.show()\"\n          >\n            Edit\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-danger\"\n            data-toggle=\"modal\"\n            (click)=\"deleteModal.show()\"\n          >\n            Delete\n          </button>\n        </div>\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4>Basic details</h4>\n            </div>\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>{{ details?.id }}</td>\n                </tr>\n                <tr>\n                  <td>Username</td>\n                  <td>{{ details?.attributes?.username }}</td>\n                </tr>\n                <tr>\n                  <td>Status</td>\n                  <td>\n                    <span\n                      *ngIf=\"details?.attributes?.blocked\"\n                      class=\"text-danger\"\n                      >Blocked</span\n                    ><span *ngIf=\"!details?.attributes?.blocked\" class=\"text-success\">Active</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Profile pic</td>\n                  <td>\n                    <a\n                      href=\"{{ baseURL }}{{\n                        details?.attributes?.prof_pic?.data?.attributes?.url\n                      }}\"\n                      target=\"_blank\"\n                      ><img\n                        class=\"card-img-top\"\n                        style=\"width: 150px; height: 150px\"\n                        src=\"{{ baseURL }}{{\n                          details?.attributes?.prof_pic?.data?.attributes?.url\n                        }}\"\n                        alt=\"No image found\"\n                    /></a>\n                    <div style=\"display: flex\">\n                      <input\n                        type=\"file\"\n                        class=\"form-control\"\n                        id=\"prof_pic\"\n                        style=\"width: 250px\"\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\n                        name=\"prof_pic\"\n                        (change)=\"onChange($event)\"\n                        placeholder=\"Choose image\"\n                      />\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-primary\"\n                        data-toggle=\"modal\"\n                        (click)=\"uploadProfPic()\"\n                      >\n                        Upload\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Name</td>\n                  <td>\n                    {{ details?.attributes?.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Contact number</td>\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\n                </tr>\n                <tr>\n                  <td>User type</td>\n                  <td>{{ details?.attributes?.UserType }}</td>\n                </tr>\n                 <tr>\n                  <td>Referred by (Agronomist Name)</td>\n                  <td>\n                    {{ details?.attributes?.referred_agronomist.data.attributes.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Village</td>\n                  <td>\n                    {{ details?.attributes?.village?.data?.attributes?.Name }}\n                  </td>\n                </tr>\n\n                <tr>\n                  <td>LGA</td>\n                  <td>{{ details?.attributes?.lga?.data?.attributes.Name }}</td>\n                </tr>\n                <tr>\n                  <td>State</td>\n                  <td>\n                    {{\n                      details?.attributes?.lga?.data?.attributes?.state?.data\n                        ?.attributes?.Name\n                    }}\n                  </td>\n                </tr>\n                <!-- <tr>\n                  <td>Retailer Category</td>\n                  <td>\n                    {{\n                    details?.attributes?.retailer_categories?.data[0]?.attributes?.CategoryName\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Bio</td>\n                  <td style=\"width: 60%\">{{ details?.attributes?.Bio }}</td>\n                </tr> -->\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div *ngIf=\"dispArea\" class=\"col\">\n          <div style=\"display: flex; justify-content: space-between\">\n            <h4>LGAs assigned</h4>\n            <button\n              type=\"button\"\n              class=\"btn btn-primary\"\n              data-toggle=\"modal\"\n              (click)=\"areaModal.show()\"\n            >\n              Edit LGAs\n            </button>\n          </div>\n          <ul>\n            <li *ngFor=\"let item of agronomists\">\n              {{ item?.attributes?.Name }}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div\n        bsModal\n        #myModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit details</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"myModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"Name\"\n                        >Name<span class=\"danger\">*</span></label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"Name\"\n                        name=\"Name\"\n                        formControlName=\"Name\"\n                        placeholder=\"Enter Name\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"market\"\n                        >Contact Number<span class=\"danger\">*</span></label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"ContactNumber\"\n                        name=\"ContactNumber\"\n                        formControlName=\"ContactNumber\"\n                        placeholder=\"Enter contact number\"\n                      />\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <label for=\"email\">email</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"email\"\n                        name=\"email\"\n                        formControlName=\"email\"\n                        placeholder=\"Enter email\"\n                      />\n                    </div> -->\n                    <div class=\"form-group\">\n                      <label for=\"UserType\"\n                        >User type<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"UserType\"\n                        required\n                        ngModel\n                        name=\"UserType\"\n                        formControlName=\"UserType\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option value=\"Farmer\">Farmer</option>\n                        <option value=\"Retailer\">Retailer</option>\n                        <option value=\"Agronomist\">Agronomist</option>\n                        <option value=\"Admin\">Admin</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Bio\">Bio</label>\n                      <textarea\n                        class=\"form-control\"\n                        id=\"Bio\"\n                        name=\"Bio\"\n                        formControlName=\"Bio\"\n                        placeholder=\"Enter Bio\"\n                      ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"password\">Password</label>\n                      <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        id=\"password\"\n                        name=\"password\"\n                        formControlName=\"password\"\n                        placeholder=\"Enter password\"\n                      />\n                    </div>\n                    <!-- <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"checkbox\" ngModel name=\"blocked\"\n                        formControlName=\"blocked\" id=\"blocked\">\n                      <label class=\"form-check-label\" for=\"blocked\">\n                        Blocked\n                      </label>\n                    </div> -->\n                    <!-- <div class=\"form-group\">\n                      <label for=\"blocked\">Active status</label>\n                      <input class=\"form-control\" type=\"checkbox\" id=\"blocked\" required ngModel name=\"blocked\"\n                        formControlName=\"blocked\" />\n                    </div> -->\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"state\"\n                        >State<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"state\"\n                        (change)=\"filterLGA($event)\"\n                        required\n                        ngModel\n                        name=\"state\"\n                        formControlName=\"state\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of States\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"lga\">LGA<span class=\"danger\">*</span></label>\n                      <select\n                        class=\"form-control\"\n                        id=\"lga\"\n                        (change)=\"filterVillage($event)\"\n                        required\n                        ngModel\n                        name=\"lga\"\n                        formControlName=\"lga\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"village\"\n                        >Village<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"village\"\n                        required\n                        ngModel\n                        name=\"village\"\n                        formControlName=\"village\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of Villages\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Latitude\">Latitude</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"Latitude\"\n                        name=\"Latitude\"\n                        formControlName=\"Latitude\"\n                        placeholder=\"Enter Latitude\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Longitude\">Longitude</label>\n                      <input\n                        class=\"form-control\"\n                        id=\"Longitude\"\n                        ngModel\n                        name=\"Longitude\"\n                        formControlName=\"Longitude\"\n                        placeholder=\"Enter Longitude\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"blocked\"\n                        >Status<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"blocked\"\n                        ngModel\n                        name=\"blocked\"\n                        formControlName=\"blocked\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option value=\"true\">Blocked</option>\n                        <option value=\"false\">Active</option>\n                      </select>\n                    </div>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-secondary\"\n                      (click)=\"myModal.hide()\"\n                    >\n                      Close\n                    </button>\n                    <button\n                      type=\"submit\"\n                      class=\"btn btn-primary ml-2\"\n                      [disabled]=\"btnLoading || !agentForm.valid\"\n                    >\n                      <span\n                        *ngIf=\"btnLoading\"\n                        class=\"spinner-border spinner-border-sm\"\n                        role=\"status\"\n                        aria-hidden=\"true\"\n                      ></span>\n                      Save changes\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #resultModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"resultModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit product</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"resultModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"id\">ID</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"soil_test_sample\"\n                    disabled=\"true\"\n                    name=\"id\"\n                    formControlName=\"id\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"itemName\">Item name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"itemName\"\n                    name=\"itemName\"\n                    formControlName=\"itemName\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"price\">Price</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"price\"\n                    name=\"price\"\n                    formControlName=\"price\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"unit\">Unit</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"unit\"\n                    name=\"unit\"\n                    formControlName=\"unit\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"resultModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #addProductModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"productModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add product</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"addProductModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"productForm\" (ngSubmit)=\"ProductSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"itemName\">Item name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"itemName\"\n                    name=\"itemName\"\n                    formControlName=\"itemName\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"price\">Price</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"price\"\n                    name=\"price\"\n                    formControlName=\"price\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"unit\">Unit</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"unit\"\n                    name=\"unit\"\n                    formControlName=\"unit\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"Image\">Image</label>\n                  <input\n                    type=\"file\"\n                    class=\"form-control\"\n                    id=\"Image\"\n                    accept=\".jpg,.jpeg,.JPEG,.png\"\n                    name=\"Image\"\n                    (change)=\"onChange($event)\"\n                    formControlName=\"Image\"\n                    placeholder=\"Choose image\"\n                  />\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"addProductModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading || !productForm.valid\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "tvqY": function tvqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n\n      <h2>Users</h2>\n\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        data-toggle=\"modal\"\n        (click)=\"commentModal.show()\"\n      >\n        Add New User\n      </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #commentModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add User</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"commentModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"formSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"Name\">Name</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Name\"\n                  name=\"Name\"\n                  formControlName=\"Name\"\n                  placeholder=\"Enter  Name\"\n                />\n                <div\n                  *ngIf=\"f.Name.touched && f.Name.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Name.errors.required\">Name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"username\"\n                  name=\"username\"\n                  formControlName=\"username\"\n                  placeholder=\"Enter username\"\n                />\n                <div\n                  *ngIf=\"f.username.touched && f.username.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.username.errors.required\">\n                    Username is required.\n                  </div>\n                  <div *ngIf=\"f.username.errors.minlength\">\n                    Username should have minimum 3 characters.\n                  </div>\n                  <div *ngIf=\"f.username.errors.cannotContainSpace\">\n                    Username cannot contain space.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password\"\n                  name=\"password\"\n                  formControlName=\"password\"\n                  placeholder=\"Enter password\"\n                />\n                <div\n                  *ngIf=\"f.password.touched && f.password.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.password.errors.required\">\n                    Password is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"UserType\">User type</label>\n                <select\n                  class=\"form-control\"\n                  id=\"UserType\"\n                  required\n                  ngModel\n                  name=\"UserType\"\n                  formControlName=\"UserType\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Farmer\">Farmer</option>\n                  <option value=\"Retailer\">Retailer</option>\n                  <option value=\"Agronomist\">Agronomist</option>\n                  <option value=\"Admin\">Admin</option>\n                  <option value=\"Marketing\">Marketing</option>\n                </select>\n                <div\n                  *ngIf=\"f.UserType.touched && f.UserType.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.UserType.errors.required\">\n                    User type is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ContactNumber\">Contact number</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"ContactNumber\"\n                  name=\"ContactNumber\"\n                  formControlName=\"ContactNumber\"\n                  placeholder=\"Enter contact number\"\n                />\n                <div\n                  *ngIf=\"f.ContactNumber.touched && f.ContactNumber.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.ContactNumber.errors.required\">\n                    Contact number is required.\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\">\n                <label for=\"name\">E-mail</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  name=\"email\"\n                  formControlName=\"email\"\n                  placeholder=\"Enter email\"\n                />\n              </div> -->\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"state\">State</label>\n                <select\n                  class=\"form-control\"\n                  id=\"state\"\n                  required\n                  ngModel\n                  (change)=\"filterLGA($event)\"\n                  name=\"state\"\n                  formControlName=\"state\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.state.touched && f.state.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.state.errors.required\">State is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lga\">LGA</label>\n                <select\n                  class=\"form-control\"\n                  id=\"lga\"\n                  required\n                  ngModel\n                  (change)=\"filterVillage($event)\"\n                  name=\"lga\"\n                  formControlName=\"lga\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div *ngIf=\"f.lga.touched && f.lga.invalid\" class=\"text-danger\">\n                  <div *ngIf=\"f.lga.errors.required\">LGA is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"village\">Village</label>\n                <select\n                  class=\"form-control\"\n                  id=\"village\"\n                  required\n                  ngModel\n                  name=\"village\"\n                  formControlName=\"village\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.village.touched && f.village.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.village.errors.required\">\n                    Village is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Gender\">Gender</label>\n                <select\n                  class=\"form-control\"\n                  id=\"Gender\"\n                  required\n                  ngModel\n                  name=\"Gender\"\n                  formControlName=\"Gender\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Male\">Male</option>\n                  <option value=\"Female\">Female</option>\n                </select>\n                <div\n                  *ngIf=\"f.Gender.touched && f.Gender.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Gender.errors.required\">\n                    Gender is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Age\">Age</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Age\"\n                  name=\"Age\"\n                  formControlName=\"Age\"\n                  placeholder=\"Enter age\"\n                />\n                <div *ngIf=\"f.Age.touched && f.Age.invalid\" class=\"text-danger\">\n                  <div *ngIf=\"f.Age.errors.required\">Age is required.</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"commentModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !commentForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "xSMm": function xSMm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
        return UsersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./users.component.html */
      "tvqY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../utils/username.validator */
      "1qmy");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var UsersComponent = /*#__PURE__*/function () {
        function UsersComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, UsersComponent);

          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
          this.disableNextButton = false;
          this.disablePrevButton = true;
          this.pageSize = 20;
          this.from = 1;
          this.to = 20;
          this.count = 1;
          this.columnDefs = [];
          this.rowData = [];
          this.Villages = [];
          this.LGA = [];
          this.Areas = [];
          this.States = [];
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["UsersColumn"]);
          this.setForm();
          this.rowSelection = "single";
        }

        _createClass(UsersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getRetailers();
            this.getStates();
          }
        }, {
          key: "setForm",
          value: function setForm() {
            this.commentForm = this.fb.group({
              UserType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__["UsernameValidator"].cannotContainSpace]],
              email: ["nodata@email.com"],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              Gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              Age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              state: [""]
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.commentForm.controls;
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this16 = this;

            this.dataservice.getStates(1, 10000, "").valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this16.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            var _this17 = this;

            this.dataservice.getLGAs(1, 10000, "", id).valueChanges.subscribe(function (result) {
              console.log("getLGAs", result.data.lgas.data);
              _this17.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this18 = this;

            this.dataservice.getAreas(1, 10000, "", id).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this18.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(id) {
            var _this19 = this;

            this.dataservice.getVillages(1, 10000, "", id).valueChanges.subscribe(function (result) {
              console.log("getVillages", result.data.villages.data);
              _this19.Villages = result.data.villages.data;
            });
          }
        }, {
          key: "getRetailers",
          value: function getRetailers() {
            var _this20 = this;

            this.dataservice.getUsers(1, this.pageSize).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f;

              _this20.rowData = result.data.usersPermissionsUsers.data;
              _this20.meta = result.data.usersPermissionsUsers.meta;

              if (((_b = (_a = _this20.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this20.disablePrevButton = true;
                _this20.disableNextButton = true;
              }

              if (((_d = (_c = _this20.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < _this20.pageSize) {
                _this20.to = (_f = (_e = _this20.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
              }
            });
          }
        }, {
          key: "downloadExcel",
          value: function downloadExcel() {
            var _this21 = this;

            var resp = {};
            this.btnLoading = true;
            this.dataservice.downloadUsers().subscribe(function (result) {
              var _a;

              resp = result.body;
              console.log(result);

              if (result.status === 200 && result.body.status == "Success") {
                _this21.toastr.success(result.body.message);

                _this21.btnLoading = false;
                window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl).concat((_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path), "_blank");
              } else {
                _this21.btnLoading = false;

                _this21.toastr.error(result.body.message);
              }
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this22 = this;

            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.dataservice.getUsers(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this22.meta = result.data.usersPermissionsUsers.meta;
              _this22.rowData = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this23 = this;

            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getUsers(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this23.meta = result.data.usersPermissionsUsers.meta;
              _this23.rowData = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "filterLGA",
          value: function filterLGA(event) {
            this.getLGAs(event.target.value);
          }
        }, {
          key: "filterVillage",
          value: function filterVillage(event) {
            this.getVillages(event.target.value);
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
            this.gridApi.sizeColumnsToFit();
          }
        }, {
          key: "onRowClicked",
          value: function onRowClicked(event) {
            console.log("row", event.data); // this.router.navigate(
            //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
            //   {
            //     state: { data: event.data },
            //   }
            // );
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            console.log(selectedRows, event);
            this.router.navigate(["/users/user_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(data) {
            this.detailsModal.show();
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            var _this24 = this;

            this.btnLoading = true;
            console.log(this.commentForm.value);
            var resp = {};
            this.dataservice.createRetailer(this.commentForm.value).subscribe(function (result) {
              resp = result;
              console.log("response", result);

              if (result) {
                _this24.toastr.success("User added successfully!");

                _this24.btnLoading = false;

                _this24.commentModal.hide();

                _this24.setForm();

                _this24.getRetailers();
              } else {
                _this24.toastr.error("Failed. Please check the fields!");

                _this24.btnLoading = false;
              }
            }, function (error) {
              _this24.btnLoading = false;
            });
          }
        }]);

        return UsersComponent;
      }();

      UsersComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      UsersComponent.propDecorators = {
        commentModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["commentModal"]
        }],
        detailsModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["detailsModal"]
        }]
      };
      UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], UsersComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-users-users-module-es5.js.map