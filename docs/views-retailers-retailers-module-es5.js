(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-retailers-retailers-module"], {
    /***/"JRD6":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/retailers/retailers.component.html ***!
      \************************************************************************************************/
    /*! exports provided: default */
    /***/
    function JRD6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Retailers</h2>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        data-toggle=\"modal\"\n        (click)=\"commentModal.show()\"\n      >\n        Add New Retailer\n      </button>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"btn-group float-right mb-3\" dropdown>\n            <button\n              dropdownToggle\n              type=\"button\"\n              class=\"btn btn-primary dropdown-toggle\"\n            >\n              {{ selectedList }}<span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('All')\"\n                  >All</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Approved')\"\n                  >Approved</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Approvalpending')\"\n                  >Approval pending</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Rejected')\"\n                  >Rejected</a\n                >\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #commentModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Retailer</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"commentModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"formSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"Name\">Name</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Name\"\n                  name=\"Name\"\n                  formControlName=\"Name\"\n                  placeholder=\"Enter  Name\"\n                />\n                <div\n                  *ngIf=\"f.Name.touched && f.Name.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Name.errors.required\">\n                    Name is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"username\"\n                  name=\"username\"\n                  formControlName=\"username\"\n                  placeholder=\"Enter username\"\n                />\n                <div\n                  *ngIf=\"f.username.touched && f.username.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.username.errors.required\">\n                    Username is required.\n                  </div>\n                  <div *ngIf=\"f.username.errors.minlength\">\n                    Username should have minimum 3 characters.\n                  </div>\n                  <div *ngIf=\"f.username.errors.cannotContainSpace\">\n                    Username cannot contain space.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password\"\n                  name=\"password\"\n                  formControlName=\"password\"\n                  placeholder=\"Enter password\"\n                />\n                <div\n                  *ngIf=\"f.password.touched && f.password.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.password.errors.required\">\n                    Password is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ContactNumber\">Contact number</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"ContactNumber\"\n                  name=\"ContactNumber\"\n                  formControlName=\"ContactNumber\"\n                  placeholder=\"Enter contact number\"\n                />\n                <div\n                  *ngIf=\"f.ContactNumber.touched && f.ContactNumber.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.ContactNumber.errors.required\">\n                    Contact number is required.\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\">\n                <label for=\"name\">E-mail</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  name=\"email\"\n                  formControlName=\"email\"\n                  placeholder=\"Enter email\"\n                />\n              </div> -->\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"state\">State</label>\n                <select\n                  class=\"form-control\"\n                  id=\"state\"\n                  required\n                  ngModel\n                  (change)=\"filterLGA($event)\"\n                  name=\"state\"\n                  formControlName=\"state\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.state.touched && f.state.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.state.errors.required\">\n                    State is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lga\">LGA</label>\n                <select\n                  class=\"form-control\"\n                  id=\"lga\"\n                  required\n                  ngModel\n                  (change)=\"filterVillage($event)\"\n                  name=\"lga\"\n                  formControlName=\"lga\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.lga.touched && f.lga.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.lga.errors.required\">\n                    LGA is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"village\">Village</label>\n                <select\n                  class=\"form-control\"\n                  id=\"village\"\n                  required\n                  ngModel\n                  name=\"village\"\n                  formControlName=\"village\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.village.touched && f.village.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.village.errors.required\">\n                    Village is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Gender\">Gender</label>\n                <select\n                  class=\"form-control\"\n                  id=\"Gender\"\n                  required\n                  ngModel\n                  name=\"Gender\"\n                  formControlName=\"Gender\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Male\">Male</option>\n                  <option value=\"Female\">Female</option>\n                </select>\n                <div\n                  *ngIf=\"f.Gender.touched && f.Gender.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Gender.errors.required\">\n                    Gender is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Age\">Age</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Age\"\n                  name=\"Age\"\n                  formControlName=\"Age\"\n                  placeholder=\"Enter age\"\n                />\n                <div\n                  *ngIf=\"f.Age.touched && f.Age.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Age.errors.required\">\n                    Age is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"commentModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !commentForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div\n  bsModal\n  #detailsModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">History</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"detailsModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\"></div>\n    </div>\n  </div>\n</div>\n";

      /***/
    },

    /***/"Ozdv":
    /*!********************************************************!*\
      !*** ./src/app/views/retailers/retailers.component.ts ***!
      \********************************************************/
    /*! exports provided: RetailersComponent */
    /***/
    function Ozdv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "RetailersComponent", function () {
        return RetailersComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_retailers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./retailers.component.html */"JRD6");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      /* harmony import */
      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../constants/columnMetadata */"7nfi");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../utils/username.validator */"1qmy");

      // import { ActionRenderer } from "../../utils/StatusRenderer";

      var RetailersComponent = /*#__PURE__*/function () {
        function RetailersComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, RetailersComponent);
          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
          this.confirmed = undefined;
          this.blocked = undefined;
          this.disableNextButton = false;
          this.disablePrevButton = true;
          this.selectedList = "All";
          this.pageSize = 20;
          this.from = 1;
          this.to = 20;
          this.count = 1;
          this.columnDefs = [];
          // frameworkComponents = {
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
          this.setForm();
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
          key: "setForm",
          value: function setForm() {
            this.commentForm = this.fb.group({
              UserType: ["Retailer"],
              username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__["UsernameValidator"].cannotContainSpace]],
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
            this.dataservice.getRetailers(1, this.pageSize, this.confirmed, this.blocked).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f;
              _this5.rowData = result.data.usersPermissionsUsers.data;
              _this5.meta = result.data.usersPermissionsUsers.meta;
              if (((_b = (_a = _this5.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this5.disablePrevButton = true;
                _this5.disableNextButton = true;
              }
              if (((_d = (_c = _this5.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < _this5.pageSize) {
                _this5.to = (_f = (_e = _this5.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
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
            console.log("row", event.data);
            // this.router.navigate(
            //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
            //   {
            //     state: { data: event.data },
            //   }
            // );
          }
        }, {
          key: "toggleCropPrices",
          value: function toggleCropPrices(data) {
            switch (data) {
              case "Rejected":
                this.selectedList = "Rejected";
                this.blocked = true;
                this.confirmed = undefined;
                this.getRetailers();
                break;
              case "Approvalpending":
                this.selectedList = "Pending";
                this.blocked = false;
                this.confirmed = false;
                this.getRetailers();
                break;
              case "Approved":
                this.selectedList = "Approved";
                this.blocked = false;
                this.confirmed = true;
                this.getRetailers();
                break;
              case "All":
                this.selectedList = "All";
                this.blocked = undefined;
                this.confirmed = undefined;
                this.getRetailers();
                break;
            }
            // if (data == 'Approvalpending') {
            //   this.selectedList = "Approval Pending";
            //   this.publicationState = "PREVIEW";
            //   this.toApprove = null;
            //   this.getCropPrices();
            // }
            // else if{
            // } else {
            //   this.selectedList = "All";
            //   this.publicationState = "PREVIEW";
            //   this.toApprove = undefined;
            //   this.getCropPrices();
            // }
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
            this.btnLoading = true;
            var resp = {};
            this.dataservice.createRetailer(this.commentForm.value).subscribe(function (result) {
              resp = result;
              console.log("response", result);
              if (result) {
                _this8.toastr.success("Retailer added successfully!");
                _this8.btnLoading = false;
                _this8.commentModal.hide();
                _this8.setForm();
                _this8.getRetailers();
              } else {
                _this8.toastr.error("Failed. Please check the fields!");
                _this8.btnLoading = false;
              }
            }, function (error) {
              _this8.btnLoading = false;
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

    /***/"UtIJ":
    /*!*************************************************************!*\
      !*** ./src/app/views/retailers/retailers-routing.module.ts ***!
      \*************************************************************/
    /*! exports provided: RetailersRoutingModule */
    /***/
    function UtIJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "RetailersRoutingModule", function () {
        return RetailersRoutingModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _retailers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./retailers.component */"Ozdv");
      /* harmony import */
      var _retailer_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./retailer-detail.component */"VbHC");
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
      var RetailersRoutingModule = /*#__PURE__*/_createClass(function RetailersRoutingModule() {
        _classCallCheck(this, RetailersRoutingModule);
      });
      RetailersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RetailersRoutingModule);

      /***/
    },

    /***/"VbHC":
    /*!**************************************************************!*\
      !*** ./src/app/views/retailers/retailer-detail.component.ts ***!
      \**************************************************************/
    /*! exports provided: RetailerDetailComponent */
    /***/
    function VbHC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "RetailerDetailComponent", function () {
        return RetailerDetailComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_retailer_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./retailer-detail.component.html */"Zuqq");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../constants/columnMetadata */"7nfi");
      /* harmony import */
      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../../environments/environment */"AytR");
      var RetailerDetailComponent = /*#__PURE__*/function () {
        function RetailerDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, RetailerDetailComponent);
          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
          this.loading = true;
          this.btnText = "Approve / Reject";
          this.disableButton = true;
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
            // email: ["", Validators.required],
            password: [""],
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
            return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl) + url;
          }
        }, {
          key: "getTest",
          value: function getTest() {
            var _this10 = this;
            this.dataservice.getsingleRetailer(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
              console.log("getsingleRetailer", result.data.usersPermissionsUsers.data[0]);
              _this10.details = result.data.usersPermissionsUsers.data[0];
              _this10.agentForm = _this10.fb.group({
                ContactNumber: [(_a = _this10.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Name: [(_b = _this10.details.attributes) === null || _b === void 0 ? void 0 : _b.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // email: [this.details.attributes?.email, Validators.required],
                Bio: [(_c = _this10.details.attributes) === null || _c === void 0 ? void 0 : _c.Bio, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [(_d = _this10.details.attributes) === null || _d === void 0 ? void 0 : _d.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_e = _this10.details.attributes) === null || _e === void 0 ? void 0 : _e.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                state: [(_m = (_l = (_k = (_j = (_h = (_g = (_f = _this10.details) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.lga) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.attributes) === null || _k === void 0 ? void 0 : _k.state) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                password: [""],
                lga: [(_r = (_q = (_p = (_o = _this10.details) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.lga) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                village: [(_v = (_u = (_t = (_s = _this10.details) === null || _s === void 0 ? void 0 : _s.attributes) === null || _t === void 0 ? void 0 : _t.village) === null || _u === void 0 ? void 0 : _u.data) === null || _v === void 0 ? void 0 : _v.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                retailer_categories: [(_z = (_y = (_x = (_w = _this10.details) === null || _w === void 0 ? void 0 : _w.attributes) === null || _x === void 0 ? void 0 : _x.retailer_categories) === null || _y === void 0 ? void 0 : _y.data[0]) === null || _z === void 0 ? void 0 : _z.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              if (((_1 = (_0 = _this10.details) === null || _0 === void 0 ? void 0 : _0.attributes) === null || _1 === void 0 ? void 0 : _1.blocked) === true) {
                _this10.disableButton = true;
                _this10.btnText = "Rejected";
              } else if (((_3 = (_2 = _this10.details) === null || _2 === void 0 ? void 0 : _2.attributes) === null || _3 === void 0 ? void 0 : _3.confirmed) === true) {
                {
                  _this10.disableButton = true;
                  _this10.btnText = "Approved";
                }
              } else if (((_5 = (_4 = _this10.details) === null || _4 === void 0 ? void 0 : _4.attributes) === null || _5 === void 0 ? void 0 : _5.confirmed) === false) {
                return _this10.disableButton = false;
              }
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
          key: "approveOrReject",
          value: function approveOrReject(check) {
            var _this18 = this;
            var payload = {};
            if (check) {
              payload = {
                confirmed: true,
                blocked: false
              };
            } else {
              payload = {
                confirmed: false,
                blocked: true
              };
            }
            this.dataservice.UpdateRetailer(payload, this.id).subscribe(function (result) {
              console.log("response", result);
              if (result.data.updateUsersPermissionsUser) {
                _this18.toastr.success("Updated successfully!");
                _this18.btnLoading = false;
                _this18.approveModal.hide();
                _this18.getTest();
              } else {
                _this18.toastr.error("Something went wrong!");
                _this18.btnLoading = false;
              }
            }, function (error) {
              _this18.btnLoading = false;
            });
            // let published = null;
            // if (!check) published = new Date();
            // this.dataservice
            //   .UpdateCropPrice(
            //     undefined,
            //     this.selectedRows[0].id,
            //     undefined,
            //     check,
            //     published
            //   )
            //   .subscribe(
            //     (result: any) => {
            //       console.log("response", result);
            //       if (result.data.updateCropPrice) {
            //         this.toastr.success("Success!");
            //         this.getCropPrices();
            //         this.file = null;
            //         this.approveModal.hide();
            //         this.gridApi.deselectAll();
            //         this.btnLoading = false;
            //       }
            //     },
            //     (error) => {
            //       this.toastr.error("Failed. Please check the fields!");
            //       this.btnLoading = false;
            //     }
            //   );
          }
        }, {
          key: "openApproveModal",
          value: function openApproveModal() {
            this.approveModal.show();
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
            var _this19 = this;
            var resp = {};
            this.btnLoading = true;
            console.log(this.agentForm.value);
            this.dataservice.UpdateRetailer(this.agentForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);
              if (result.data.updateUsersPermissionsUser) {
                _this19.toastr.success("Retailer updated successfully!");
                _this19.btnLoading = false;
                _this19.myModal.hide();
                _this19.getTest();
              } else {
                _this19.toastr.error("Failed. Please check the fields!");
                _this19.btnLoading = false;
              }
            }, function (error) {
              _this19.btnLoading = false;
            });
          }
        }, {
          key: "ResultSubmit",
          value: function ResultSubmit() {
            var _this20 = this;
            var _a, _b, _c, _d;
            console.log("edit", this.resultForm.value);
            this.btnLoading = true;
            var resp = {};
            console.log(this.resultForm.value);
            this.dataservice.UpdateRetailerProducts(this.resultForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);
              if (result.data.updateRetailerProduct) {
                _this20.toastr.success("Product updated successfully!");
                _this20.btnLoading = false;
                _this20.resultModal.hide();
                _this20.getTest();
              } else {
                _this20.toastr.error("Failed. Please check the fields!");
                _this20.btnLoading = false;
              }
            }, function (error) {
              _this20.btnLoading = false;
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
            var _this21 = this;
            var resp = {};
            this.dataservice.upload(this.file).subscribe(function (response) {
              var _a;
              if (response.status == 200) {
                console.log(response);
                _this21.dataservice.UpdateRetailerPic(_this21.id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);
                  if (result.data.updateUsersPermissionsUser) {
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
          key: "ProductSubmit",
          value: function ProductSubmit() {
            var _this22 = this;
            var resp = {};
            this.btnLoading = true;
            this.dataservice.upload(this.file).subscribe(function (response) {
              var _a, _b, _c, _d, _e;
              if (response.status == 200) {
                console.log(response);
                _this22.dataservice.addRetailerProducts(_this22.productForm.value, (_d = (_c = (_b = (_a = _this22.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, _this22.id, (_e = response.body[0]) === null || _e === void 0 ? void 0 : _e.id).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);
                  if (result.data.createRetailerProduct) {
                    _this22.toastr.success("Success!");
                    _this22.btnLoading = false;
                    _this22.file = null;
                    _this22.getTest();
                    _this22.addProductModal.hide();
                  } else {
                    _this22.toastr.error("Failed!");
                    _this22.btnLoading = false;
                  }
                }, function (error) {
                  _this22.btnLoading = false;
                });
              } else {
                _this22.toastr.error("Image failed to upload!");
                _this22.btnLoading = false;
              }
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct() {
            var _this23 = this;
            this.dataservice.deleteProduct(this.deleteObj.id).subscribe(function (result) {
              console.log("response", result);
              if (result.data.deleteRetailerProduct) {
                _this23.toastr.success("Success!");
                _this23.deleteModal.hide();
                _this23.getTest();
              } else {
                _this23.toastr.error("Failed!");
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
        }],
        approveModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["approveModal"]
        }]
      };
      RetailerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_retailer_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], RetailerDetailComponent);

      /***/
    },

    /***/"Zuqq":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/retailers/retailer-detail.component.html ***!
      \******************************************************************************************************/
    /*! exports provided: default */
    /***/
    function Zuqq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div\n    bsModal\n    #deleteModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this record?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"deleteModal.hide()\"\n          >\n            No! Cancel.\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"deleteProduct()\"\n          >\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    bsModal\n    #approveModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to approve this retailer?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"approveOrReject(false)\"\n          >\n            No! Reject.\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"approveOrReject(true)\"\n          >\n            Yes! Approve.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Retailer Details</h2>\n      <span>\n        <div>\n          <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"addProductModal.show()\"\n          >\n            Add new product\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            data-toggle=\"modal\"\n            (click)=\"myModal.show()\"\n          >\n            Edit\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-warning\"\n            data-toggle=\"modal\"\n            (click)=\"openApproveModal()\"\n          >\n            {{ btnText }}\n          </button>\n          <!-- <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          (click)=\"deleteModal.show()\"\n        >\n          Delete\n        </button> -->\n        </div>\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4>Basic details</h4>\n            </div>\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>{{ details?.id }}</td>\n                </tr>\n                <tr>\n                  <td>Username</td>\n                  <td>{{ details?.attributes?.username }}</td>\n                </tr>\n                <tr>\n                  <td>Profile pic</td>\n                  <td>\n                    <a\n                      href=\"{{ baseURL }}{{\n                        details?.attributes?.prof_pic?.data?.attributes?.url\n                      }}\"\n                      target=\"_blank\"\n                      ><img\n                        class=\"card-img-top\"\n                        style=\"width: 150px; height: 150px\"\n                        src=\"{{ baseURL }}{{\n                          details?.attributes?.prof_pic?.data?.attributes?.url\n                        }}\"\n                        alt=\"Card image cap\"\n                    /></a>\n                    <div style=\"display: flex; justify-content: space-between\">\n                      <input\n                        type=\"file\"\n                        class=\"form-control\"\n                        id=\"prof_pic\"\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\n                        name=\"prof_pic\"\n                        (change)=\"onChange($event)\"\n                        placeholder=\"Choose image\"\n                      />\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-primary\"\n                        data-toggle=\"modal\"\n                        (click)=\"uploadProfPic()\"\n                      >\n                        Upload\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Name</td>\n                  <td>\n                    {{ details?.attributes?.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Contact number</td>\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\n                </tr>\n                <!-- <tr>\n                  <td>Email</td>\n                  <td>\n                    {{ details?.attributes?.email }}\n                  </td>\n                </tr> -->\n                <tr>\n                  <td>Village</td>\n                  <td>\n                    {{ details?.attributes?.village?.data?.attributes?.Name }}\n                  </td>\n                </tr>\n\n                <tr>\n                  <td>LGA</td>\n                  <td>{{ details?.attributes?.lga?.data?.attributes.Name }}</td>\n                </tr>\n                <tr>\n                  <td>State</td>\n                  <td>\n                    {{\n                      details?.attributes?.lga?.data?.attributes?.state?.data\n                        ?.attributes?.Name\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Retailer Category</td>\n                  <td>\n                    {{\n                      details?.attributes?.retailer_categories?.data[0]\n                        ?.attributes?.CategoryName\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Bio</td>\n                  <td style=\"width: 60%\">{{ details?.attributes?.Bio }}</td>\n                </tr>\n                <tr>\n                  <td>Location</td>\n                  <td><a\n                    href=\"https://www.google.com/maps/search/?api=1&query={{\n                      details.attributes?.Latitude}}%2C{{ details.attributes?.Longitude }}\"\n                    target=\"_blank\"\n                    >Click here to view location</a\n                  ></td>\n                </tr>\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col\">\n          <h4>Products</h4>\n          <div class=\"row\">\n            <div\n              class=\"col-4\"\n              *ngFor=\"let item of details?.attributes?.retailer_products?.data\"\n            >\n              <div class=\"card\">\n                <a\n                  href=\"{{\n                    imgUrl(item?.attributes?.Images?.data[0]?.attributes?.url)\n                  }}\"\n                  target=\"_blank\"\n                >\n                  <img\n                    class=\"card-img-top\"\n                    height=\"100\"\n                    width=\"200\"\n                    src=\"{{\n                      imgUrl(item?.attributes?.Images?.data[0]?.attributes?.url)\n                    }}\"\n                    alt=\"Card image cap\"\n                  />\n                </a>\n                <div class=\"card-body\">\n                  <div style=\"display: flex; justify-content: space-between\">\n                    <h5 class=\"card-title\">\n                      Item : {{ item?.attributes?.ItemName }}\n                    </h5>\n                    <!-- <button\n                      type=\"button\"\n                      *ngIf=\"item?.attributes?.soil_test_results?.data[0]\"\n                      class=\"btn btn-primary\"\n                      data-toggle=\"modal\"\n                      (click)=\"openModal(item, 'edit')\"\n                    >\n                      Edit results\n                    </button>\n                    <button\n                      type=\"button\"\n                      *ngIf=\"!item?.attributes?.soil_test_results?.data[0]\"\n                      class=\"btn btn-primary\"\n                      data-toggle=\"modal\"\n                      (click)=\"openModal(item, 'add')\"\n                    >\n                      Add results\n                    </button> -->\n                  </div>\n                  <p class=\"card-text\">\n                    Price : NGN \n                    {{ item?.attributes?.Price }} per\n                    {{ item?.attributes?.Unit }}\n                  </p>\n                  <!-- <p class=\"card-text\">\n                    Created on :\n                    {{ dateConvertor(item?.attributes?.createdAt) }}\n                  </p>\n                  <p class=\"card-text\">\n                    Added by :\n                    {{\n                      item?.attributes?.SampleAddedBy?.data?.attributes?.Name\n                    }}\n                  </p> -->\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary\"\n                    data-toggle=\"modal\"\n                    (click)=\"openModal(item, 'edit')\"\n                  >\n                    Edit\n                  </button>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-danger\"\n                    data-toggle=\"modal\"\n                    (click)=\"openDeleteModal(item)\"\n                  >\n                    Delete\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #myModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit details</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"myModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"Name\">Name</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"Name\"\n                        name=\"Name\"\n                        formControlName=\"Name\"\n                        placeholder=\"Enter Name\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"market\">Contact Number</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"ContactNumber\"\n                        name=\"ContactNumber\"\n                        formControlName=\"ContactNumber\"\n                        placeholder=\"Enter contact number\"\n                      />\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <label for=\"email\">email</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"email\"\n                        name=\"email\"\n                        formControlName=\"email\"\n                        placeholder=\"Enter email\"\n                      />\n                    </div> -->\n                    <div class=\"form-group\">\n                      <label for=\"retailer_categories\">Retailer category</label>\n                      <select\n                        class=\"form-control\"\n                        id=\"retailer_categories\"\n                        required\n                        ngModel\n                        name=\"retailer_categories\"\n                        formControlName=\"retailer_categories\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of Retailers\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.CategoryName }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Bio\">Bio</label>\n                      <textarea\n                        class=\"form-control\"\n                        id=\"Bio\"\n                        name=\"Bio\"\n                        formControlName=\"Bio\"\n                        placeholder=\"Enter Bio\"\n                      ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"password\">Password</label>\n                      <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        id=\"password\"\n                        name=\"password\"\n                        formControlName=\"password\"\n                        placeholder=\"Enter password\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"state\">State</label>\n                      <select\n                        class=\"form-control\"\n                        id=\"state\"\n                        (change)=\"filterLGA($event)\"\n                        required\n                        ngModel\n                        name=\"state\"\n                        formControlName=\"state\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of States\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"lga\">LGA</label>\n                      <select\n                        class=\"form-control\"\n                        id=\"lga\"\n                        (change)=\"filterVillage($event)\"\n                        required\n                        ngModel\n                        name=\"lga\"\n                        formControlName=\"lga\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"village\">Village</label>\n                      <select\n                        class=\"form-control\"\n                        id=\"village\"\n                        required\n                        ngModel\n                        name=\"village\"\n                        formControlName=\"village\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of Villages\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Latitude\">Latitude</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"Latitude\"\n                        name=\"Latitude\"\n                        formControlName=\"Latitude\"\n                        placeholder=\"Enter Latitude\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Longitude\">Longitude</label>\n                      <input\n                        class=\"form-control\"\n                        id=\"Longitude\"\n                        required\n                        ngModel\n                        name=\"Longitude\"\n                        formControlName=\"Longitude\"\n                        placeholder=\"Enter Longitude\"\n                      />\n                    </div>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-secondary\"\n                      (click)=\"myModal.hide()\"\n                    >\n                      Close\n                    </button>\n                    <button\n                      type=\"submit\"\n                      class=\"btn btn-primary ml-2\"\n                      [disabled]=\"btnLoading || !agentForm.valid\"\n                    >\n                      <span\n                        *ngIf=\"btnLoading\"\n                        class=\"spinner-border spinner-border-sm\"\n                        role=\"status\"\n                        aria-hidden=\"true\"\n                      ></span>\n                      Save changes\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #resultModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"resultModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit product</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"resultModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"id\">ID</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"soil_test_sample\"\n                    disabled=\"true\"\n                    name=\"id\"\n                    formControlName=\"id\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"itemName\">Item name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"itemName\"\n                    name=\"itemName\"\n                    formControlName=\"itemName\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"price\">Price (NGN)</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"price\"\n                    name=\"price\"\n                    formControlName=\"price\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"unit\">Unit</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"unit\"\n                    name=\"unit\"\n                    formControlName=\"unit\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"resultModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #addProductModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"productModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add product</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"addProductModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"productForm\" (ngSubmit)=\"ProductSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"itemName\">Item name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"itemName\"\n                    name=\"itemName\"\n                    formControlName=\"itemName\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"price\">Price (NGN)</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"price\"\n                    name=\"price\"\n                    formControlName=\"price\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"unit\">Unit</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"unit\"\n                    name=\"unit\"\n                    formControlName=\"unit\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"Image\">Image</label>\n                  <input\n                    type=\"file\"\n                    class=\"form-control\"\n                    id=\"Image\"\n                    accept=\".jpg,.jpeg,.JPEG,.png\"\n                    name=\"Image\"\n                    (change)=\"onChange($event)\"\n                    formControlName=\"Image\"\n                    placeholder=\"Choose image\"\n                  />\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"addProductModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading || !productForm.valid\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

      /***/
    },

    /***/"d3Ph":
    /*!*****************************************************!*\
      !*** ./src/app/views/retailers/retailers.module.ts ***!
      \*****************************************************/
    /*! exports provided: RetailersModule */
    /***/
    function d3Ph(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "RetailersModule", function () {
        return RetailersModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"SVse");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _retailers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./retailers.component */"Ozdv");
      /* harmony import */
      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-bootstrap/dropdown */"FE24");
      /* harmony import */
      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-bootstrap/tabs */"2ZVE");
      /* harmony import */
      var _retailers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./retailers-routing.module */"UtIJ");
      /* harmony import */
      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ag-grid-angular */"YFAK");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var _retailer_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./retailer-detail.component */"VbHC");

      // Dropdowns Component

      // Buttons Routing

      // Angular

      var RetailersModule = /*#__PURE__*/_createClass(function RetailersModule() {
        _classCallCheck(this, RetailersModule);
      });
      RetailersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _retailers_routing_module__WEBPACK_IMPORTED_MODULE_7__["RetailersRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_retailers_component__WEBPACK_IMPORTED_MODULE_4__["RetailersComponent"], _retailer_detail_component__WEBPACK_IMPORTED_MODULE_10__["RetailerDetailComponent"]]
      })], RetailersModule);

      /***/
    }
  }]);
})();
//# sourceMappingURL=views-retailers-retailers-module-es5.js.map