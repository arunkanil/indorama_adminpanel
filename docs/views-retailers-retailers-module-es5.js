(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-retailers-retailers-module"], {
    /***/
    "JRD6": function JRD6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Retailers</h2>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary\"\r\n        data-toggle=\"modal\"\r\n        (click)=\"commentModal.show()\"\r\n      >\r\n        Add New Retailer\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #commentModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Retailer</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"commentModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"formSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Name\">Name</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"Name\"\r\n                  name=\"Name\"\r\n                  formControlName=\"Name\"\r\n                  placeholder=\"Enter  Name\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"username\"\r\n                  name=\"username\"\r\n                  formControlName=\"username\"\r\n                  placeholder=\"Enter username\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input\r\n                  type=\"password\"\r\n                  class=\"form-control\"\r\n                  id=\"password\"\r\n                  name=\"password\"\r\n                  formControlName=\"password\"\r\n                  placeholder=\"Enter password\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"ContactNumber\">Contact number</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"ContactNumber\"\r\n                  name=\"ContactNumber\"\r\n                  formControlName=\"ContactNumber\"\r\n                  placeholder=\"Enter contact number\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">E-mail</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"email\"\r\n                  name=\"email\"\r\n                  formControlName=\"email\"\r\n                  placeholder=\"Enter email\"\r\n                />\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"state\"\r\n                  required\r\n                  ngModel\r\n                  (change)=\"filterLGA($event)\"\r\n                  name=\"state\"\r\n                  formControlName=\"state\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"lga\">LGA</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"lga\"\r\n                  required\r\n                  ngModel\r\n                  (change)=\"filterVillage($event)\"\r\n                  name=\"lga\"\r\n                  formControlName=\"lga\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"village\">Village</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"village\"\r\n                  required\r\n                  ngModel\r\n                  name=\"village\"\r\n                  formControlName=\"village\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Gender\">Gender</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"Gender\"\r\n                  required\r\n                  ngModel\r\n                  name=\"Gender\"\r\n                  formControlName=\"Gender\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"Male\">Male</option>\r\n                  <option value=\"Female\">Female</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Age\">Age</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"Age\"\r\n                  name=\"Age\"\r\n                  formControlName=\"Age\"\r\n                  placeholder=\"Enter age\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"commentModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !commentForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div\r\n  bsModal\r\n  #detailsModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">History</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"detailsModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Ozdv": function Ozdv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailersComponent", function () {
        return RetailersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_retailers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./retailers.component.html */
      "JRD6");
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
      "LqlI"); // import { ActionRenderer } from "../../utils/StatusRenderer";


      var RetailersComponent = /*#__PURE__*/function () {
        function RetailersComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, RetailersComponent);

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
          this.commentForm = this.fb.group({
            UserType: ["Retailer"],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [""]
          }); // frameworkComponents = {
          //   statusRenderer: ActionRenderer,
          // };

          this.rowData = [];
          this.Villages = [];
          this.LGA = [];
          this.Areas = [];
          this.States = [];
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["RetailersColumn"]);
          this.rowSelection = "single";
        }

        _createClass(RetailersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getRetailers();
            this.getAreas();
            this.getLGAs();
            this.getStates();
            this.getVillages();
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this = this;

            this.dataservice.getStates().valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            var _this2 = this;

            this.dataservice.getLGAs(id).valueChanges.subscribe(function (result) {
              console.log("getLGAs", result.data.lgas.data);
              _this2.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this3 = this;

            this.dataservice.getAreas(id).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this3.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(id) {
            var _this4 = this;

            this.dataservice.getVillages(id).valueChanges.subscribe(function (result) {
              console.log("getVillages", result.data.villages.data);
              _this4.Villages = result.data.villages.data;
            });
          }
        }, {
          key: "getRetailers",
          value: function getRetailers() {
            var _this5 = this;

            this.dataservice.getRetailers(1, this.pageSize).valueChanges.subscribe(function (result) {
              var _a, _b;

              _this5.rowData = result.data.usersPermissionsUsers.data;
              _this5.meta = result.data.usersPermissionsUsers.meta;

              if (((_b = (_a = _this5.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this5.disablePrevButton = true;
                _this5.disableNextButton = true;
              }
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this6 = this;

            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.dataservice.getRetailers(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this6.meta = result.data.usersPermissionsUsers.meta;
              _this6.rowData = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this7 = this;

            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getRetailers(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this7.meta = result.data.usersPermissionsUsers.meta;
              _this7.rowData = result.data.usersPermissionsUsers.data;
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
            this.router.navigate(["/retailers/retailer_details", selectedRows[0].id], {
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
            var _this8 = this;

            console.log(this.commentForm.value);
            var resp = {};
            this.dataservice.createRetailer(this.commentForm.value).subscribe(function (result) {
              resp = result;
              console.log("response", result);

              if (result) {
                _this8.toastr.success("Retailer added successfully!");

                _this8.commentModal.hide();

                _this8.getRetailers();
              } else {
                _this8.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }]);

        return RetailersComponent;
      }();

      RetailersComponent.ctorParameters = function () {
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

      RetailersComponent.propDecorators = {
        commentModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["commentModal"]
        }],
        detailsModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["detailsModal"]
        }]
      };
      RetailersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_retailers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], RetailersComponent);
      /***/
    },

    /***/
    "UtIJ": function UtIJ(module, __webpack_exports__, __webpack_require__) {
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


      var _retailers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./retailers.component */
      "Ozdv");
      /* harmony import */


      var _retailer_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./retailer-detail.component */
      "VbHC");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'retailers'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _retailers_component__WEBPACK_IMPORTED_MODULE_3__["RetailersComponent"],
          data: {
            roles: 'KP_CALLER',
            title: 'Retailers'
          }
        }, {
          path: 'retailer_details/:id',
          // canActivate: [AuthGuard],
          component: _retailer_detail_component__WEBPACK_IMPORTED_MODULE_4__["RetailerDetailComponent"],
          data: {
            roles: 'MANAGER',
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
    "VbHC": function VbHC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailerDetailComponent", function () {
        return RetailerDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_retailer_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./retailer-detail.component.html */
      "Zuqq");
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

      var RetailerDetailComponent = /*#__PURE__*/function () {
        function RetailerDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, RetailerDetailComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
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
          this.agentForm = this.fb.group({
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // username: ["", Validators.required],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Farmer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            retailer_categories: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Bio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.resultForm = this.fb.group({
            id: [""],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.productForm = this.fb.group({
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(RetailerDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.getLists();
            this.getAreas();
            this.getCrops();
            this.getLGAs();
            this.getStates();
            this.getVillages();
            this.getFarmers();
            this.getRetailers();
            this.activatedRouter.params.subscribe(function (params) {
              _this9.id = params["id"];
            });
            this.getTest();
          }
        }, {
          key: "imgUrl",
          value: function imgUrl(url) {
            return "https://indoramaapp.untanglestrategy.com" + url;
          }
        }, {
          key: "getTest",
          value: function getTest() {
            var _this10 = this;

            this.dataservice.getsingleRetailer(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;

              console.log("getsingleRetailer", result.data.usersPermissionsUsers.data[0]);
              _this10.details = result.data.usersPermissionsUsers.data[0];
              _this10.agentForm = _this10.fb.group({
                ContactNumber: [(_a = _this10.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Name: [(_b = _this10.details.attributes) === null || _b === void 0 ? void 0 : _b.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                email: [(_c = _this10.details.attributes) === null || _c === void 0 ? void 0 : _c.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Bio: [(_d = _this10.details.attributes) === null || _d === void 0 ? void 0 : _d.Bio, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [(_e = _this10.details.attributes) === null || _e === void 0 ? void 0 : _e.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_f = _this10.details.attributes) === null || _f === void 0 ? void 0 : _f.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                state: [(_o = (_m = (_l = (_k = (_j = (_h = (_g = _this10.details) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.lga) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.attributes) === null || _l === void 0 ? void 0 : _l.state) === null || _m === void 0 ? void 0 : _m.data) === null || _o === void 0 ? void 0 : _o.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                lga: [(_s = (_r = (_q = (_p = _this10.details) === null || _p === void 0 ? void 0 : _p.attributes) === null || _q === void 0 ? void 0 : _q.lga) === null || _r === void 0 ? void 0 : _r.data) === null || _s === void 0 ? void 0 : _s.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                village: [(_w = (_v = (_u = (_t = _this10.details) === null || _t === void 0 ? void 0 : _t.attributes) === null || _u === void 0 ? void 0 : _u.village) === null || _v === void 0 ? void 0 : _v.data) === null || _w === void 0 ? void 0 : _w.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                retailer_categories: [(_0 = (_z = (_y = (_x = _this10.details) === null || _x === void 0 ? void 0 : _x.attributes) === null || _y === void 0 ? void 0 : _y.retailer_categories) === null || _z === void 0 ? void 0 : _z.data[0]) === null || _0 === void 0 ? void 0 : _0.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              _this10.loading = false;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this11 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              console.log("getCrops", result.data.crops.data);
              _this11.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this12 = this;

            this.dataservice.getStates().valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this12.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            var _this13 = this;

            this.dataservice.getLGAs(id).valueChanges.subscribe(function (result) {
              console.log("getLGAs", result.data.lgas.data);
              _this13.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this14 = this;

            this.dataservice.getAreas(id).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this14.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getRetailers",
          value: function getRetailers() {
            var _this15 = this;

            this.dataservice.getRetailerCategories().valueChanges.subscribe(function (result) {
              console.log("getRetailers", result.data.retailerCategories.data);
              _this15.Retailers = result.data.retailerCategories.data;
            });
          }
        }, {
          key: "getFarmers",
          value: function getFarmers() {
            var _this16 = this;

            this.dataservice.getUsers(undefined, undefined, "Farmer").valueChanges.subscribe(function (result) {
              console.log("getFarmers", result.data.usersPermissionsUsers.data);
              _this16.Farmers = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(id) {
            var _this17 = this;

            this.dataservice.getVillages(id).valueChanges.subscribe(function (result) {
              console.log("getVillages", result.data.villages.data);
              _this17.Villages = result.data.villages.data;
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
            var _this18 = this;

            var resp = {};
            console.log(this.agentForm.value);
            this.dataservice.UpdateRetailer(this.agentForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateUsersPermissionsUser) {
                _this18.toastr.success("Retailer updated successfully!");

                _this18.myModal.hide();

                _this18.getTest();
              } else {
                _this18.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "ResultSubmit",
          value: function ResultSubmit() {
            var _this19 = this;

            var _a, _b, _c, _d;

            console.log("edit", this.resultForm.value);
            var resp = {};
            console.log(this.resultForm.value);
            this.dataservice.UpdateRetailerProducts(this.resultForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateRetailerProduct) {
                _this19.toastr.success("Product updated successfully!");

                _this19.resultModal.hide();

                _this19.getTest();
              } else {
                _this19.toastr.error("Failed. Please check the fields!");
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
          key: "filterVillage",
          value: function filterVillage(event) {
            this.getVillages(event.target.value);
          }
        }, {
          key: "uploadProfPic",
          value: function uploadProfPic() {
            var _this20 = this;

            var resp = {};
            this.dataservice.upload(this.file).subscribe(function (response) {
              var _a;

              if (response.status == 200) {
                console.log(response);

                _this20.dataservice.UpdateRetailerPic(_this20.id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.updateUsersPermissionsUser) {
                    _this20.toastr.success("Success!");

                    _this20.file = null;

                    _this20.getTest();

                    _this20.addProductModal.hide();
                  } else {
                    _this20.toastr.error("Failed!");
                  }
                });
              } else {
                _this20.toastr.error("Image failed to upload!");
              }
            });
          }
        }, {
          key: "ProductSubmit",
          value: function ProductSubmit() {
            var _this21 = this;

            var resp = {};
            this.dataservice.upload(this.file).subscribe(function (response) {
              var _a, _b, _c, _d, _e;

              if (response.status == 200) {
                console.log(response);

                _this21.dataservice.addRetailerProducts(_this21.productForm.value, (_d = (_c = (_b = (_a = _this21.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, _this21.id, (_e = response.body[0]) === null || _e === void 0 ? void 0 : _e.id).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.createRetailerProduct) {
                    _this21.toastr.success("Success!");

                    _this21.file = null;

                    _this21.getTest();

                    _this21.addProductModal.hide();
                  } else {
                    _this21.toastr.error("Failed!");
                  }
                });
              } else {
                _this21.toastr.error("Image failed to upload!");
              }
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct() {
            var _this22 = this;

            this.dataservice.deleteProduct(this.deleteObj.id).subscribe(function (result) {
              console.log("response", result);

              if (result.data.deleteRetailerProduct) {
                _this22.toastr.success("Success!");

                _this22.deleteModal.hide();

                _this22.getTest();
              } else {
                _this22.toastr.error("Failed!");
              }
            });
          }
        }]);

        return RetailerDetailComponent;
      }();

      RetailerDetailComponent.ctorParameters = function () {
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

      RetailerDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
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
      RetailerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_retailer_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], RetailerDetailComponent);
      /***/
    },

    /***/
    "Zuqq": function Zuqq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this record?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            (click)=\"deleteProduct()\"\r\n          >\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Retailer Details</h2>\r\n      <span>\r\n        <div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-outline-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"addProductModal.show()\"\r\n          >\r\n            Add new product\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"myModal.show()\"\r\n          >\r\n            Edit\r\n          </button>\r\n          <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button> -->\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Basic details</h4>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Username</td>\r\n                  <td>{{ details?.attributes?.username }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Profile pic</td>\r\n                  <td>\r\n                    <a\r\n                      href=\"https://indoramaapp.untanglestrategy.com{{\r\n                        details?.attributes?.prof_pic?.data?.attributes?.url\r\n                      }}\"\r\n                      target=\"_blank\"\r\n                      ><img\r\n                        class=\"card-img-top\"\r\n                        style=\"width: 150px; height: 150px\"\r\n                        src=\"https://indoramaapp.untanglestrategy.com{{\r\n                          details?.attributes?.prof_pic?.data?.attributes?.url\r\n                        }}\"\r\n                        alt=\"Card image cap\"\r\n                    /></a>\r\n                    <div style=\"display: flex; justify-content: space-between\">\r\n                      <input\r\n                        type=\"file\"\r\n                        class=\"form-control\"\r\n                        id=\"prof_pic\"\r\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\r\n                        name=\"prof_pic\"\r\n                        (change)=\"onChange($event)\"\r\n                        placeholder=\"Choose image\"\r\n                      />\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        data-toggle=\"modal\"\r\n                        (click)=\"uploadProfPic()\"\r\n                      >\r\n                        Upload\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number</td>\r\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Email</td>\r\n                  <td>\r\n                    {{ details?.attributes?.email }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Village</td>\r\n                  <td>\r\n                    {{ details?.attributes?.village?.data?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>LGA</td>\r\n                  <td>{{ details?.attributes?.lga?.data?.attributes.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>State</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.lga?.data?.attributes?.state?.data\r\n                        ?.attributes?.Name\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Retailer Category</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.retailer_categories?.data[0]\r\n                        ?.attributes?.CategoryName\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Bio</td>\r\n                  <td style=\"width: 60%\">{{ details?.attributes?.Bio }}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr> -->\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h4>Products</h4>\r\n          <div class=\"row\">\r\n            <div\r\n              class=\"col-4\"\r\n              *ngFor=\"let item of details?.attributes?.retailer_products?.data\"\r\n            >\r\n              <div class=\"card\">\r\n                <a\r\n                  href=\"{{\r\n                    imgUrl(item?.attributes?.Images?.data[0]?.attributes?.url)\r\n                  }}\"\r\n                  target=\"_blank\"\r\n                >\r\n                  <img\r\n                    class=\"card-img-top\"\r\n                    height=\"100\"\r\n                    width=\"200\"\r\n                    src=\"{{\r\n                      imgUrl(item?.attributes?.Images?.data[0]?.attributes?.url)\r\n                    }}\"\r\n                    alt=\"Card image cap\"\r\n                  />\r\n                </a>\r\n                <div class=\"card-body\">\r\n                  <div style=\"display: flex; justify-content: space-between\">\r\n                    <h5 class=\"card-title\">\r\n                      Item : {{ item?.attributes?.ItemName }}\r\n                    </h5>\r\n                    <!-- <button\r\n                      type=\"button\"\r\n                      *ngIf=\"item?.attributes?.soil_test_results?.data[0]\"\r\n                      class=\"btn btn-primary\"\r\n                      data-toggle=\"modal\"\r\n                      (click)=\"openModal(item, 'edit')\"\r\n                    >\r\n                      Edit results\r\n                    </button>\r\n                    <button\r\n                      type=\"button\"\r\n                      *ngIf=\"!item?.attributes?.soil_test_results?.data[0]\"\r\n                      class=\"btn btn-primary\"\r\n                      data-toggle=\"modal\"\r\n                      (click)=\"openModal(item, 'add')\"\r\n                    >\r\n                      Add results\r\n                    </button> -->\r\n                  </div>\r\n                  <p class=\"card-text\">\r\n                    Price :\r\n                    {{ item?.attributes?.Price }} per\r\n                    {{ item?.attributes?.Unit }}\r\n                  </p>\r\n                  <!-- <p class=\"card-text\">\r\n                    Created on :\r\n                    {{ dateConvertor(item?.attributes?.createdAt) }}\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Added by :\r\n                    {{\r\n                      item?.attributes?.SampleAddedBy?.data?.attributes?.Name\r\n                    }}\r\n                  </p> -->\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-primary\"\r\n                    data-toggle=\"modal\"\r\n                    (click)=\"openModal(item, 'edit')\"\r\n                  >\r\n                    Edit\r\n                  </button>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-danger\"\r\n                    data-toggle=\"modal\"\r\n                    (click)=\"openDeleteModal(item)\"\r\n                  >\r\n                    Delete\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #myModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit details</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"myModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Name\">Name</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"Name\"\r\n                        name=\"Name\"\r\n                        formControlName=\"Name\"\r\n                        placeholder=\"Enter Name\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"market\">Contact Number</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"ContactNumber\"\r\n                        name=\"ContactNumber\"\r\n                        formControlName=\"ContactNumber\"\r\n                        placeholder=\"Enter contact number\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"email\">email</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"email\"\r\n                        name=\"email\"\r\n                        formControlName=\"email\"\r\n                        placeholder=\"Enter email\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"retailer_categories\">Retailer category</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"retailer_categories\"\r\n                        required\r\n                        ngModel\r\n                        name=\"retailer_categories\"\r\n                        formControlName=\"retailer_categories\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option\r\n                          *ngFor=\"let item of Retailers\"\r\n                          value=\"{{ item.id }}\"\r\n                        >\r\n                          {{ item.attributes.CategoryName }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Bio\">Bio</label>\r\n                      <textarea\r\n                        class=\"form-control\"\r\n                        id=\"Bio\"\r\n                        name=\"Bio\"\r\n                        formControlName=\"Bio\"\r\n                        placeholder=\"Enter Bio\"\r\n                      ></textarea>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"state\">State</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"state\"\r\n                        (change)=\"filterLGA($event)\"\r\n                        required\r\n                        ngModel\r\n                        name=\"state\"\r\n                        formControlName=\"state\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option\r\n                          *ngFor=\"let item of States\"\r\n                          value=\"{{ item.id }}\"\r\n                        >\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"lga\">LGA</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"lga\"\r\n                        (change)=\"filterVillage($event)\"\r\n                        required\r\n                        ngModel\r\n                        name=\"lga\"\r\n                        formControlName=\"lga\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"village\">Village</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"village\"\r\n                        required\r\n                        ngModel\r\n                        name=\"village\"\r\n                        formControlName=\"village\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option\r\n                          *ngFor=\"let item of Villages\"\r\n                          value=\"{{ item.id }}\"\r\n                        >\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Latitude\">Latitude</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"Latitude\"\r\n                        name=\"Latitude\"\r\n                        formControlName=\"Latitude\"\r\n                        placeholder=\"Enter Latitude\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Longitude\">Longitude</label>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        id=\"Longitude\"\r\n                        required\r\n                        ngModel\r\n                        name=\"Longitude\"\r\n                        formControlName=\"Longitude\"\r\n                        placeholder=\"Enter Longitude\"\r\n                      />\r\n                    </div>\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn btn-secondary\"\r\n                      (click)=\"myModal.hide()\"\r\n                    >\r\n                      Close\r\n                    </button>\r\n                    <button\r\n                      type=\"submit\"\r\n                      class=\"btn btn-primary ml-2\"\r\n                      [disabled]=\"btnLoading || !agentForm.valid\"\r\n                    >\r\n                      <span\r\n                        *ngIf=\"btnLoading\"\r\n                        class=\"spinner-border spinner-border-sm\"\r\n                        role=\"status\"\r\n                        aria-hidden=\"true\"\r\n                      ></span>\r\n                      Save changes\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #resultModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"resultModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit product</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"resultModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"id\">ID</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"soil_test_sample\"\r\n                    disabled=\"true\"\r\n                    name=\"id\"\r\n                    formControlName=\"id\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemName\">Item name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"itemName\"\r\n                    name=\"itemName\"\r\n                    formControlName=\"itemName\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\">Price</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"price\"\r\n                    name=\"price\"\r\n                    formControlName=\"price\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"unit\">Unit</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"unit\"\r\n                    name=\"unit\"\r\n                    formControlName=\"unit\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-secondary\"\r\n                  (click)=\"resultModal.hide()\"\r\n                >\r\n                  Close\r\n                </button>\r\n                <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary ml-2\"\r\n                  [disabled]=\"btnLoading\"\r\n                >\r\n                  <span\r\n                    *ngIf=\"btnLoading\"\r\n                    class=\"spinner-border spinner-border-sm\"\r\n                    role=\"status\"\r\n                    aria-hidden=\"true\"\r\n                  ></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #addProductModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"productModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add product</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"addProductModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"productForm\" (ngSubmit)=\"ProductSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemName\">Item name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"itemName\"\r\n                    name=\"itemName\"\r\n                    formControlName=\"itemName\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\">Price</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"price\"\r\n                    name=\"price\"\r\n                    formControlName=\"price\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"unit\">Unit</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"unit\"\r\n                    name=\"unit\"\r\n                    formControlName=\"unit\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"Image\">Image</label>\r\n                  <input\r\n                    type=\"file\"\r\n                    class=\"form-control\"\r\n                    id=\"Image\"\r\n                    accept=\".jpg,.jpeg,.JPEG,.png\"\r\n                    name=\"Image\"\r\n                    (change)=\"onChange($event)\"\r\n                    formControlName=\"Image\"\r\n                    placeholder=\"Choose image\"\r\n                  />\r\n                </div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-secondary\"\r\n                  (click)=\"addProductModal.hide()\"\r\n                >\r\n                  Close\r\n                </button>\r\n                <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary ml-2\"\r\n                  [disabled]=\"btnLoading || !productForm.valid\"\r\n                >\r\n                  <span\r\n                    *ngIf=\"btnLoading\"\r\n                    class=\"spinner-border spinner-border-sm\"\r\n                    role=\"status\"\r\n                    aria-hidden=\"true\"\r\n                  ></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "d3Ph": function d3Ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailersModule", function () {
        return RetailersModule;
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


      var _retailers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./retailers.component */
      "Ozdv");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _retailers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./retailers-routing.module */
      "UtIJ");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _retailer_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./retailer-detail.component */
      "VbHC"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var RetailersModule = function RetailersModule() {
        _classCallCheck(this, RetailersModule);
      };

      RetailersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _retailers_routing_module__WEBPACK_IMPORTED_MODULE_7__["RetailersRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_retailers_component__WEBPACK_IMPORTED_MODULE_4__["RetailersComponent"], _retailer_detail_component__WEBPACK_IMPORTED_MODULE_10__["RetailerDetailComponent"]]
      })], RetailersModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-retailers-retailers-module-es5.js.map