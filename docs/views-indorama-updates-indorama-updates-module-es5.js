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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-indorama-updates-indorama-updates-module"], {
    /***/
    "57+R": function R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesRoutingModule", function () {
        return IndoramaUpdatesRoutingModule;
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


      var _indorama_updates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./indorama-updates.component */
      "r72j");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _indorama_updates_component__WEBPACK_IMPORTED_MODULE_3__["IndoramaUpdatesComponent"],
          data: {
            roles: 'KP_CALLER',
            title: 'Indorama Updates'
          }
        }]
      }];

      var IndoramaUpdatesRoutingModule = function IndoramaUpdatesRoutingModule() {
        _classCallCheck(this, IndoramaUpdatesRoutingModule);
      };

      IndoramaUpdatesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IndoramaUpdatesRoutingModule);
      /***/
    },

    /***/
    "eFNz": function eFNz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesModule", function () {
        return IndoramaUpdatesModule;
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


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _indorama_updates_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./indorama-updates-routing.module */
      "57+R");
      /* harmony import */


      var _indorama_updates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./indorama-updates.component */
      "r72j");

      var IndoramaUpdatesModule = function IndoramaUpdatesModule() {
        _classCallCheck(this, IndoramaUpdatesModule);
      };

      IndoramaUpdatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]), _indorama_updates_routing_module__WEBPACK_IMPORTED_MODULE_8__["IndoramaUpdatesRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_indorama_updates_component__WEBPACK_IMPORTED_MODULE_9__["IndoramaUpdatesComponent"]]
      })], IndoramaUpdatesModule);
      /***/
    },

    /***/
    "fVCG": function fVCG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Indorama Updates</h2>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"disableButton\"\r\n          class=\"btn btn-info\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\"\r\n        >\r\n          Edit\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"!disableButton\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Add New Update\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #cropPriceModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit News</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"cropPriceModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"newsForm\" (ngSubmit)=\"cropPriceSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"Title\">Title</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"Title\"\r\n              name=\"Title\"\r\n              formControlName=\"Title\"\r\n              placeholder=\"Enter title\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Body\">Body</label>\r\n            <textarea\r\n              class=\"form-control\"\r\n              id=\"Body\"\r\n              rows=\"5\"\r\n              name=\"Body\"\r\n              formControlName=\"Body\"\r\n              placeholder=\"Enter Body\"\r\n            ></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Image\">Image</label>\r\n            <div>\r\n              <img\r\n                *ngIf=\"imageUrl\"\r\n                src=\"{{ imageUrl }}\"\r\n                width=\"100\"\r\n                height=\"100\"\r\n                style=\"object-fit: cover\"\r\n              />\r\n            </div>\r\n            <input\r\n              type=\"file\"\r\n              class=\"form-control\"\r\n              id=\"Image\"\r\n              accept=\".jpg,.jpeg,.JPEG,.png\"\r\n              name=\"Image\"\r\n              (change)=\"onChange($event)\"\r\n              formControlName=\"Image\"\r\n              placeholder=\"Choose image\"\r\n            />\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"cropPriceModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !newsForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div\r\n  bsModal\r\n  #deleteModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"deleteModal.hide()\"\r\n        >\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "r72j": function r72j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesComponent", function () {
        return IndoramaUpdatesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_indorama_updates_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./indorama-updates.component.html */
      "fVCG");
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

      var IndoramaUpdatesComponent = /*#__PURE__*/function () {
        function IndoramaUpdatesComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, IndoramaUpdatesComponent);

          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
          this.disableButton = true;
          this.disableNextButton = false;
          this.disablePrevButton = true;
          this.pageSize = 20;
          this.from = 1;
          this.to = 20;
          this.count = 1;
          this.orders = {};
          this.columnDefs = [];
          this.newsForm = this.fb.group({
            Title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [""]
          });
          this.rowData = [];
          this.selectedRows = [];
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.file = null;
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["IndoramaUpdatesColumn"]);
          this.rowSelection = "single";
        }

        _createClass(IndoramaUpdatesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getUpdates(undefined, 1, this.pageSize);
          }
        }, {
          key: "getUpdates",
          value: function getUpdates(id, page, pageSize) {
            var _this = this;

            this.dataservice.getIndoramaUpdates(id, page, pageSize).valueChanges.subscribe(function (result) {
              var _a, _b;

              _this.rowData = result.data.newsAndUpdates.data;
              _this.meta = result.data.newsAndUpdates.meta;

              if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this.disablePrevButton = true;
                _this.disableNextButton = true;
              }
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this2 = this;

            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.dataservice.getIndoramaUpdates(undefined, this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this2.meta = result.data.newsAndUpdates.meta;
              _this2.rowData = result.data.newsAndUpdates.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this3 = this;

            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getIndoramaUpdates(undefined, this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this3.meta = result.data.newsAndUpdates.meta;
              _this3.rowData = result.data.newsAndUpdates.data;
            });
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
          }
        }, {
          key: "openModal",
          value: function openModal(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h;

            this.imageUrl = null;
            this.cropPriceModal.show();

            if (data) {
              this.newsForm = this.fb.group({
                Title: [this.selectedRows[0].attributes.Title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Body: [this.selectedRows[0].attributes.Body, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: [(_b = (_a = this.selectedRows[0].attributes.Images) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
              this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Images) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? "https://indoramaapp.untanglestrategy.com" + ((_h = (_g = (_f = this.selectedRows[0].attributes.Images) === null || _f === void 0 ? void 0 : _f.data[0]) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url) : null;
            } else {
              this.newsForm = this.fb.group({
                Title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
              });
              this.imageUrl = null;
            }
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord() {
            var _this4 = this;

            var resp = {};
            this.dataservice.UpdateIndoramaUpdates({
              isDelete: true
            }, this.selectedRows[0].id, null).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateNewsAndUpdate) {
                _this4.toastr.success("Success!");

                _this4.getUpdates();

                _this4.file = null;

                _this4.deleteModal.hide();

                _this4.gridApi.deselectAll();
              } else {
                _this4.toastr.error("Failed. Please check the fields!");
              }
            });
          }
        }, {
          key: "cropPriceSubmit",
          value: function cropPriceSubmit() {
            var _this5 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.newsForm.value);

            if (!this.disableButton) {
              if (this.file) {
                this.dataservice.upload(this.file).subscribe(function (response) {
                  var _a;

                  if (response.status == 200) {
                    console.log(response);

                    _this5.dataservice.UpdateIndoramaUpdates(_this5.newsForm.value, _this5.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                      resp = result.data;
                      console.log("response", result);

                      if (result.data.updateNewsAndUpdate) {
                        _this5.toastr.success("Success!");

                        _this5.file = null;

                        _this5.getUpdates();

                        _this5.btnLoading = false;

                        _this5.cropPriceModal.hide();

                        _this5.gridApi.deselectAll();
                      } else {
                        _this5.toastr.error("Failed. Please check the fields!");

                        _this5.btnLoading = false;
                      }
                    });
                  }
                });
              } else {
                this.dataservice.UpdateIndoramaUpdates(this.newsForm.value, this.selectedRows[0].id, null).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.updateNewsAndUpdate) {
                    _this5.toastr.success("Success!");

                    _this5.file = null;
                    _this5.btnLoading = false;

                    _this5.cropPriceModal.hide();

                    _this5.gridApi.deselectAll();

                    _this5.getUpdates();
                  } else {
                    _this5.toastr.error("Failed. Please check the fields!");

                    _this5.btnLoading = false;
                  }
                });
              }
            } else {
              this.dataservice.upload(this.file).subscribe(function (response) {
                var _a;

                if (response.status == 200) {
                  console.log(response);

                  _this5.dataservice.AddIndoramaUpdates(_this5.newsForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                    resp = result.data;
                    console.log("response", result);

                    if (result.data.createNewsAndUpdate) {
                      _this5.toastr.success("Success!");

                      _this5.file = null;

                      _this5.cropPriceModal.hide();

                      _this5.btnLoading = false;

                      _this5.getUpdates();

                      _this5.gridApi.deselectAll();
                    } else {
                      _this5.toastr.error("Failed. Please check the fields!");

                      _this5.btnLoading = false;
                    }
                  });
                } else {
                  _this5.toastr.error("Image failed to upload!");

                  _this5.btnLoading = false;
                }
              });
            }
          }
        }]);

        return IndoramaUpdatesComponent;
      }();

      IndoramaUpdatesComponent.ctorParameters = function () {
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

      IndoramaUpdatesComponent.propDecorators = {
        cropPriceModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["cropPriceModal"]
        }],
        detailsModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["detailsModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }]
      };
      IndoramaUpdatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_indorama_updates_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], IndoramaUpdatesComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-indorama-updates-indorama-updates-module-es5.js.map