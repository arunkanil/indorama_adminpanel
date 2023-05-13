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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-crop-prices-crop-prices-module"], {
    /***/
    "JugC": function JugC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoilTestRoutingModule", function () {
        return SoilTestRoutingModule;
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


      var _crop_prices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crop-prices.component */
      "jgNo");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _crop_prices_component__WEBPACK_IMPORTED_MODULE_3__["CropPricesComponent"],
          data: {
            roles: 'KP_CALLER',
            title: 'Crop Prices'
          }
        }]
      }];

      var SoilTestRoutingModule = function SoilTestRoutingModule() {
        _classCallCheck(this, SoilTestRoutingModule);
      };

      SoilTestRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SoilTestRoutingModule);
      /***/
    },

    /***/
    "N8R/": function N8R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPricesModule", function () {
        return CropPricesModule;
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


      var _crop_prices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./crop-prices.component */
      "jgNo");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _crop_prices_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./crop-prices-routing.module */
      "JugC");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var CropPricesModule = function CropPricesModule() {
        _classCallCheck(this, CropPricesModule);
      };

      CropPricesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _crop_prices_routing_module__WEBPACK_IMPORTED_MODULE_7__["SoilTestRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_crop_prices_component__WEBPACK_IMPORTED_MODULE_4__["CropPricesComponent"]]
      })], CropPricesModule);
      /***/
    },

    /***/
    "WNzA": function WNzA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Crop Prices Home</h2>\n      <div>\n        <button\n          type=\"button\"\n          class=\"btn btn-outline-primary\"\n          data-toggle=\"modal\"\n          (click)=\"downloadExcel()\"\n        >\n          Download excel\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-warning\"\n          data-toggle=\"modal\"\n          [disabled]=\"disableButton\"\n          (click)=\"openApproveModal()\"\n        >\n          Approve / Reject\n        </button>\n        <button\n          type=\"button\"\n          [disabled]=\"disableButton\"\n          class=\"btn btn-info\"\n          data-toggle=\"modal\"\n          (click)=\"openModal('Edit')\"\n        >\n          Edit\n        </button>\n        <button\n          type=\"button\"\n          [disabled]=\"!disableButton\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New Price\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"btn-group float-right mb-3\" dropdown>\n            <button\n              dropdownToggle\n              type=\"button\"\n              class=\"btn btn-primary dropdown-toggle\"\n            >\n              {{ selectedList }}<span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('All')\"\n                  >All</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Approvalpending')\"\n                  >Approval pending</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Rejected')\"\n                  >Rejected</a\n                >\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #cropPriceModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Crop Price</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"cropPriceModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"cropPriceForm\" (ngSubmit)=\"cropPriceSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              (change)=\"filterMarkets($event)\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"market\">Market</label>\n            <select\n              class=\"form-control\"\n              id=\"market\"\n              required\n              ngModel\n              name=\"market\"\n              formControlName=\"market\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of Markets\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"crop\">Crop</label>\n            <select\n              class=\"form-control\"\n              id=\"crop\"\n              required\n              ngModel\n              name=\"crop\"\n              formControlName=\"crop\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Price</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"Price\"\n              name=\"Price\"\n              formControlName=\"Price\"\n              placeholder=\"Enter price\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Unit</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"Unit\"\n              name=\"Unit\"\n              formControlName=\"Unit\"\n              placeholder=\"Enter unit\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Image\">Image</label>\n            <div>\n              <img\n                *ngIf=\"imageUrl\"\n                src=\"{{ imageUrl }}\"\n                width=\"100\"\n                height=\"100\"\n                style=\"object-fit: cover\"\n              />\n            </div>\n            <input\n              type=\"file\"\n              class=\"form-control\"\n              id=\"Image\"\n              accept=\".jpg,.jpeg,.JPEG,.png\"\n              name=\"Image\"\n              (change)=\"onChange($event)\"\n              formControlName=\"Image\"\n              placeholder=\"Choose image\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"cropPriceModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !cropPriceForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div\n  bsModal\n  #approveModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        Do you want to approve this record?\n      </div>\n      <div class=\"modal-footer justify-content-around\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary\"\n          (click)=\"approveOrReject(true)\"\n        >\n          No! Reject.\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"approveOrReject(false)\"\n        >\n          Yes! Approve.\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "jgNo": function jgNo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPricesComponent", function () {
        return CropPricesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_crop_prices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./crop-prices.component.html */
      "WNzA");
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


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR"); // import { ActionRenderer } from "../../utils/StatusRenderer";


      var CropPricesComponent = /*#__PURE__*/function () {
        function CropPricesComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, CropPricesComponent);

          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
          this.disableButton = true;
          this.disableNextButton = false;
          this.disablePrevButton = true;
          this.selectedList = 'All';
          this.listCheck = false;
          this.publicationState = 'PREVIEW';
          this.toApprove = undefined;
          this.isRejected = undefined;
          this.columnDefs = [];
          this.States = [];
          this.Markets = [];
          this.Crops = [];
          this.pageSize = 20;
          this.from = 1;
          this.to = 20;
          this.count = 1;
          this.cropPriceForm = this.fb.group({
            crop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            market: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ['']
          }); // frameworkComponents = {
          //   statusRenderer: ActionRenderer,
          // };

          this.rowData = [];
          this.selectedRows = [];
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.file = null;
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["CropPricesColumn"]);
          this.rowSelection = 'single';
        }

        _createClass(CropPricesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getCropPrices();
            this.getCrops();
            this.getMarkets();
            this.getStates();
          }
        }, {
          key: "getCropPrices",
          value: function getCropPrices() {
            var _this = this;

            this.dataservice.getCropPrices(1, this.pageSize, this.publicationState, this.toApprove, this.isRejected).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f;

              _this.rowData = result.data.cropPrices.data;
              _this.meta = result.data.cropPrices.meta;

              if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this.disablePrevButton = true;
                _this.disableNextButton = true;
              }

              if (((_d = (_c = _this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < _this.pageSize) {
                _this.to = (_f = (_e = _this.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
              }
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this2 = this;

            this.dataservice.getCrops(1, 10000, '').valueChanges.subscribe(function (result) {
              _this2.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this3 = this;

            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.dataservice.getCropPrices(this.count, this.pageSize, this.publicationState, this.toApprove).valueChanges.subscribe(function (result) {
              _this3.meta = result.data.cropPrices.meta;
              _this3.rowData = result.data.cropPrices.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this4 = this;

            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getCropPrices(this.count, this.pageSize, this.publicationState, this.toApprove).valueChanges.subscribe(function (result) {
              _this4.meta = result.data.cropPrices.meta;
              _this4.rowData = result.data.cropPrices.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this5 = this;

            this.dataservice.getStates(1, 10000, '').valueChanges.subscribe(function (result) {
              console.log('getStates', result.data.states.data);
              _this5.States = result.data.states.data;
            });
          }
        }, {
          key: "getMarkets",
          value: function getMarkets(id) {
            var _this6 = this;

            this.dataservice.getMarkets(1, 10000, '', id).valueChanges.subscribe(function (result) {
              console.log('getMarkets', result.data.markets.data);
              _this6.Markets = result.data.markets.data;
            });
          }
        }, {
          key: "filterMarkets",
          value: function filterMarkets(event) {
            this.getMarkets(event.target.value);
          }
        }, {
          key: "toggleCropPrices",
          value: function toggleCropPrices(data) {
            switch (data) {
              case 'Rejected':
                this.selectedList = 'Rejected';
                this.publicationState = 'PREVIEW';
                this.toApprove = null;
                this.isRejected = true;
                this.getCropPrices();
                break;

              case 'Approvalpending':
                this.selectedList = 'Pending';
                this.publicationState = 'PREVIEW';
                this.toApprove = null;
                this.isRejected = false;
                this.getCropPrices();
                break;

              case 'All':
                this.selectedList = 'All';
                this.publicationState = 'PREVIEW';
                this.toApprove = undefined;
                this.isRejected = undefined;
                this.getCropPrices();
                break;
            } // if (data == 'Approvalpending') {
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
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
            this.gridApi.sizeColumnsToFit();
          }
        }, {
          key: "onRowClicked",
          value: function onRowClicked(event) {
            console.log('row', event.data);
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            this.selectedRows = this.gridApi.getSelectedRows();

            if (this.selectedRows.length > 0) {
              this.disableButton = false;
            } else {
              this.disableButton = true;
            }
          } // On file Select

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
          key: "approveOrReject",
          value: function approveOrReject(check) {
            var _this7 = this;

            var published = null;

            if (!check) {
              published = new Date();
            }

            this.dataservice.UpdateCropPrice(undefined, this.selectedRows[0].id, undefined, check, published).subscribe(function (result) {
              console.log('response', result);

              if (result.data.updateCropPrice) {
                _this7.toastr.success('Success!');

                _this7.getCropPrices();

                _this7.file = null;

                _this7.approveModal.hide();

                _this7.gridApi.deselectAll();

                _this7.btnLoading = false;
              }
            }, function (error) {
              _this7.toastr.error('Failed. Please check the fields!');

              _this7.btnLoading = false;
            });
          }
        }, {
          key: "downloadExcel",
          value: function downloadExcel() {
            var _this8 = this;

            var resp = {};
            this.btnLoading = true;
            this.dataservice.downloadCropPrices().subscribe(function (result) {
              var _a;

              resp = result.body;
              console.log(result);

              if (result.status === 200 && result.body.status == 'Success') {
                _this8.toastr.success(result.body.message);

                _this8.btnLoading = false;
                window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl).concat((_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path), '_blank');
              } else {
                _this8.btnLoading = false;

                _this8.toastr.error(result.body.message);
              }
            });
          }
        }, {
          key: "openApproveModal",
          value: function openApproveModal() {
            this.approveModal.show();
          }
        }, {
          key: "openModal",
          value: function openModal(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h;

            this.imageUrl = null;
            this.cropPriceModal.show();

            if (data) {
              this.cropPriceForm = this.fb.group({
                crop: [this.selectedRows[0].attributes.crop.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                state: [this.selectedRows[0].attributes.state.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                market: [this.selectedRows[0].attributes.market.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Price: [this.selectedRows[0].attributes.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Unit: [this.selectedRows[0].attributes.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: [(_b = (_a = this.selectedRows[0].attributes.Image) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
              this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Image) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl) + ((_h = (_g = (_f = this.selectedRows[0].attributes.Image) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url) : null;
            } else {
              this.cropPriceForm = this.fb.group({
                crop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                market: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
              this.imageUrl = null;
            }
          }
        }, {
          key: "cropPriceSubmit",
          value: function cropPriceSubmit() {
            var _this9 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.cropPriceForm.value);

            if (!this.disableButton) {
              if (this.file) {
                this.dataservice.upload(this.file).subscribe(function (response) {
                  var _a;

                  if (response.status == 200) {
                    console.log(response);

                    _this9.dataservice.UpdateCropPrice(_this9.cropPriceForm.value, _this9.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                      resp = result.data;
                      console.log('response', result);

                      if (result.data.updateCropPrice) {
                        _this9.toastr.success('Success!');

                        _this9.getCropPrices();

                        _this9.file = null;

                        _this9.cropPriceModal.hide();

                        _this9.cropPriceForm.reset();

                        _this9.gridApi.deselectAll();

                        _this9.btnLoading = false;
                      }
                    }, function (error) {
                      _this9.toastr.error('Failed. Please check the fields!');

                      _this9.btnLoading = false;
                    });
                  }
                });
              } else {
                this.dataservice.UpdateCropPrice(this.cropPriceForm.value, this.selectedRows[0].id, null).subscribe(function (result) {
                  resp = result.data;
                  console.log('response', result);

                  if (result.data.updateCropPrice) {
                    _this9.toastr.success('Success!');

                    _this9.getCropPrices();

                    _this9.file = null;

                    _this9.cropPriceModal.hide();

                    _this9.cropPriceForm.reset();

                    _this9.gridApi.deselectAll();

                    _this9.btnLoading = false;
                  }
                }, function (error) {
                  _this9.toastr.error('Failed. Please check the fields!');

                  _this9.btnLoading = false;
                });
              }
            } else {
              this.dataservice.upload(this.file).subscribe(function (response) {
                var _a;

                if (response.status == 200) {
                  console.log(response);

                  _this9.dataservice.AddCropPrice(_this9.cropPriceForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                    resp = result.data;
                    console.log('response', result);

                    if (result.data.createCropPrice) {
                      _this9.toastr.success('Success!');

                      _this9.getCropPrices();

                      _this9.file = null;

                      _this9.cropPriceModal.hide();

                      _this9.cropPriceForm.reset();

                      _this9.gridApi.deselectAll();
                    }

                    _this9.btnLoading = false;
                  }, function (error) {
                    _this9.toastr.error('Failed. Please check the fields!');

                    _this9.btnLoading = false;
                  });
                } else {
                  _this9.toastr.error('Image failed to upload!');
                }
              });
            }
          }
        }]);

        return CropPricesComponent;
      }();

      CropPricesComponent.ctorParameters = function () {
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

      CropPricesComponent.propDecorators = {
        cropPriceModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['cropPriceModal']
        }],
        approveModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['approveModal']
        }]
      };
      CropPricesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_crop_prices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], CropPricesComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-crop-prices-crop-prices-module-es5.js.map