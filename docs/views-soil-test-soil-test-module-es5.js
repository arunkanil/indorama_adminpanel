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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-soil-test-soil-test-module"], {
    /***/
    "/dPm": function dPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoilTestModule", function () {
        return SoilTestModule;
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


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "Osdn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _soil_test_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./soil-test-routing.module */
      "OfZf");
      /* harmony import */


      var _soil_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./soil-home.component */
      "3I1K");
      /* harmony import */


      var _soil_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./soil-detail.component */
      "tdzO"); // Angular
      // import { TypographyComponent } from './typography.component';
      // Theme Routing


      var SoilTestModule = function SoilTestModule() {
        _classCallCheck(this, SoilTestModule);
      };

      SoilTestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _soil_test_routing_module__WEBPACK_IMPORTED_MODULE_7__["SoilTestRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"].withComponents([]), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_5__["CarouselModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_soil_home_component__WEBPACK_IMPORTED_MODULE_8__["SoilHomeComponent"], _soil_detail_component__WEBPACK_IMPORTED_MODULE_9__["SoilTestDetailComponent"]]
      })], SoilTestModule);
      /***/
    },

    /***/
    "3I1K": function I1K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoilHomeComponent", function () {
        return SoilHomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_soil_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./soil-home.component.html */
      "pj57");
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

      var SoilHomeComponent = /*#__PURE__*/function () {
        function SoilHomeComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, SoilHomeComponent);

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
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["SoilAnalysisColumns"]);
          this.rowSelection = "single";
        }

        _createClass(SoilHomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLists();
          }
        }, {
          key: "getLists",
          value: function getLists() {
            var _this = this;

            this.loading = true;
            this.dataservice.getsoilTests(1, this.pageSize).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f;

              console.log("getCustomers", result.data.soilTests.data);
              _this.rowData = result.data.soilTests.data;
              _this.meta = result.data.soilTests.meta;

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

            this.dataservice.getsoilTests(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this2.meta = result.data.soilTests.meta;
              _this2.rowData = result.data.soilTests.data;
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
            this.dataservice.getsoilTests(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this3.meta = result.data.soilTests.meta;
              _this3.rowData = result.data.soilTests.data;
            });
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            console.log(selectedRows);
            this.router.navigate(["/soiltest/test_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }]);

        return SoilHomeComponent;
      }();

      SoilHomeComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      SoilHomeComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }]
      };
      SoilHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_soil_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], SoilHomeComponent);
      /***/
    },

    /***/
    "JdqK": function JdqK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <!-- <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this request?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Soil Test Details</h2>\r\n      <span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"myModal.show()\"\r\n        >\r\n          Edit\r\n        </button>\r\n        <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button> -->\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Request details</h4>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>STR{{ details?.id }}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>Test ID</td>\r\n                  <td>{{ details?.attributes?.SoilTestID }}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>Farmer</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Farmer?.data.attributes.Name }}\r\n                  </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>Email</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Farmer?.data.attributes.email }}\r\n                  </td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>Contact number</td>\r\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>Agronomist</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.Farmer?.data?.attributes?.agronomist\r\n                        ?.data?.attributes?.users_permissions_user?.data\r\n                        ?.attributes?.Name\r\n                    }}\r\n                  </td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>Reason for testing</td>\r\n                  <td>{{ details?.attributes?.ReasonForSoilTest }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Preferred nutrient</td>\r\n                  <td>{{ details?.attributes?.nutrient }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>City</td>\r\n                  <td>{{ details?.attributes?.area?.data.attributes.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Postal code</td>\r\n                  <td>\r\n                    {{ details?.attributes?.area?.data.attributes.PostalCode }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>LGA</td>\r\n                  <td>{{ details?.attributes?.lga?.data.attributes.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>State</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.lga?.data?.attributes?.state?.data\r\n                        ?.attributes?.Name\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Preferred date for sample collection</td>\r\n                  <td>\r\n                    {{\r\n                      dateConverterMin(\r\n                        details?.attributes?.PreferredCollectionDate\r\n                      )\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <h4>Samples</h4>\r\n          <div class=\"row\">\r\n            <div\r\n              class=\"col-4\"\r\n              *ngFor=\"let item of details?.attributes?.soil_test_samples?.data\"\r\n            >\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div style=\"display: flex; justify-content: space-between\">\r\n                    <h5 class=\"card-title\">\r\n                      Sample ID : {{ item?.attributes?.SampleID }}\r\n                    </h5>\r\n                    <button\r\n                      type=\"button\"\r\n                      *ngIf=\"item?.attributes?.soil_test_results?.data[0]\"\r\n                      class=\"btn btn-primary\"\r\n                      data-toggle=\"modal\"\r\n                      (click)=\"openModal(item, 'edit')\"\r\n                    >\r\n                      Edit results\r\n                    </button>\r\n                    <button\r\n                      type=\"button\"\r\n                      *ngIf=\"!item?.attributes?.soil_test_results?.data[0]\"\r\n                      class=\"btn btn-primary\"\r\n                      data-toggle=\"modal\"\r\n                      (click)=\"openModal(item, 'add')\"\r\n                    >\r\n                      Add results\r\n                    </button>\r\n                  </div>\r\n                  <p class=\"card-text\">\r\n                    Quantity of samples :\r\n                    {{ item?.attributes?.QuantityOfSamples }}\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Created on :\r\n                    {{ dateConvertor(item?.attributes?.createdAt) }}\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Added by :\r\n                    {{\r\n                      item?.attributes?.SampleAddedBy?.data?.attributes?.Name\r\n                    }}\r\n                  </p>\r\n                  <p>Result updated on : {{dateConvertor(item?.attributes?.soil_test_results?.data[0]\r\n                    ?.attributes?.updatedAt)}}</p>\r\n                  <table class=\"table\">\r\n                    <tbody>\r\n                      <tr>\r\n                        <th>Parameter</th>\r\n                        <th>Value observed</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>pH</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.phObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Organic Carbon</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.OrganicCarbonObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Total Nitrogen</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.TotalNitrogenObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Phosphorous</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.PhosphorousObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Pottasium</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.PotassiumObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Calcium</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.CalciumObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Magnesium</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.MagnesiumObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Zinc</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.ZincObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Sulphur</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.SulphurObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Iron</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.IronObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Copper</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.CopperObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Boron</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.BoronObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Manganese</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.ManganeseObserved\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Recommended Urea Qty</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.RecommendedUreaQty\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Recommended NPK Qty</td>\r\n                        <td>\r\n                          {{\r\n                            item?.attributes?.soil_test_results?.data[0]\r\n                              ?.attributes?.RecommendedNPKQty\r\n                          }}\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"col\">\r\n          <div style=\"display: flex; justify-content: space-between\">\r\n            <h4>Test Results</h4>\r\n          </div>\r\n          <table class=\"table\" *ngFor=\"let item of details.attributes.soil_test_samples.data\">\r\n            <tbody>\r\n              <tr>\r\n                <th>Parameter</th>\r\n                <th>Value observed</th>\r\n              </tr>\r\n              <tr>\r\n                <td>pH</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.phObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Organic Carbon</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.OrganicCarbonObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Total Nitrogen</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.TotalNitrogenObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Phosphorous</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.PhosphorousObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Pottasium</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.PotassiumObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Calcium</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.CalciumObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Magnesium</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.MagnesiumObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Zinc</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.ZincObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Sulphur</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.SulphurObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Iron</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.IronObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Copper</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.CopperObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Boron</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.BoronObserved }}</td>\r\n              </tr>\r\n              <tr>\r\n                <td>Manganese</td>\r\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.ManganeseObserved }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"commentModal.show()\"\r\n          >\r\n            Add Comment\r\n          </button>\r\n        </div> -->\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #myModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit details</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"myModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"Farmer\">Farmer</label>\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"Farmer\"\r\n                    required\r\n                    ngModel\r\n                    name=\"Farmer\"\r\n                    formControlName=\"Farmer\"\r\n                  >\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option *ngFor=\"let item of Farmers\" value=\"{{ item.id }}\">\r\n                      {{ item.attributes.Name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"market\">Contact Number</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"ContactNumber\"\r\n                    name=\"ContactNumber\"\r\n                    formControlName=\"ContactNumber\"\r\n                    placeholder=\"Enter contact number\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"ReasonForSoilTest\">Reason for test</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"ReasonForSoilTest\"\r\n                    name=\"ReasonForSoilTest\"\r\n                    formControlName=\"ReasonForSoilTest\"\r\n                    placeholder=\"Enter contact number\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"nutrient\">Testing for</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"nutrient\"\r\n                    name=\"nutrient\"\r\n                    formControlName=\"nutrient\"\r\n                    placeholder=\"Enter nutrient\"\r\n                  />\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                  <label for=\"PreferredCollectionDate\"\r\n                    >Preferred Collection Date</label\r\n                  >\r\n                  <input\r\n                    type=\"datetime-local\"\r\n                    class=\"form-control\"\r\n                    id=\"PreferredCollectionDate\"\r\n                    name=\"PreferredCollectionDate\"\r\n                    formControlName=\"PreferredCollectionDate\"\r\n                    placeholder=\"Enter PreferredCollectionDate\"\r\n                  />\r\n                </div> -->\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"Status\">Status</label>\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"Status\"\r\n                    required\r\n                    ngModel\r\n                    name=\"Status\"\r\n                    formControlName=\"Status\"\r\n                  >\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option value=\"NEW_REQUEST\">NEW_REQUEST</option>\r\n                    <option value=\"SAMPLE_COLLECTED\">SAMPLE_COLLECTED</option>\r\n                    <option value=\"RESULTS_ADDED\">RESULTS_ADDED</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"state\">State</label>\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"state\"\r\n                    required\r\n                    ngModel\r\n                    (change)=\"filterLGA($event)\"\r\n                    name=\"state\"\r\n                    formControlName=\"state\"\r\n                  >\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                      {{ item.attributes.Name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"lga\">LGA</label>\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"lga\"\r\n                    required\r\n                    (change)=\"filterArea($event)\"\r\n                    ngModel\r\n                    name=\"lga\"\r\n                    formControlName=\"lga\"\r\n                  >\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                      {{ item.attributes.Name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"area\">City</label>\r\n                  <select\r\n                    class=\"form-control\"\r\n                    id=\"area\"\r\n                    required\r\n                    ngModel\r\n                    name=\"area\"\r\n                    formControlName=\"area\"\r\n                  >\r\n                    <option value=\"\" disabled selected hidden>Choose...</option>\r\n                    <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                      {{ item.attributes.Name }}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-secondary\"\r\n                  (click)=\"myModal.hide()\"\r\n                >\r\n                  Close\r\n                </button>\r\n                <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary ml-2\"\r\n                  [disabled]=\"btnLoading || !agentForm.valid\"\r\n                >\r\n                  <span\r\n                    *ngIf=\"btnLoading\"\r\n                    class=\"spinner-border spinner-border-sm\"\r\n                    role=\"status\"\r\n                    aria-hidden=\"true\"\r\n                  ></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #resultModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"resultModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add/Edit result</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"resultModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"soil_test_sample\">Soil Test ID</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"soil_test_sample\"\r\n                        disabled=\"true\"\r\n                        name=\"soil_test_sample\"\r\n                        formControlName=\"soil_test_sample\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"phObserved\">ph Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"phObserved\"\r\n                        name=\"phObserved\"\r\n                        formControlName=\"phObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"OrganicCarbonObserved\"\r\n                        >Organic Carbon Observed</label\r\n                      >\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"OrganicCarbonObserved\"\r\n                        name=\"OrganicCarbonObserved\"\r\n                        formControlName=\"OrganicCarbonObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"TotalNitrogenObserved\"\r\n                        >Total Nitrogen Observed</label\r\n                      >\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"TotalNitrogenObserved\"\r\n                        name=\"TotalNitrogenObserved\"\r\n                        formControlName=\"TotalNitrogenObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"ManganeseObserved\">Manganese Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"ManganeseObserved\"\r\n                        name=\"ManganeseObserved\"\r\n                        formControlName=\"ManganeseObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"PhosphorousObserved\"\r\n                        >Phosphorous Observed</label\r\n                      >\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"PhosphorousObserved\"\r\n                        name=\"PhosphorousObserved\"\r\n                        formControlName=\"PhosphorousObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"PotassiumObserved\">Potassium Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"PotassiumObserved\"\r\n                        name=\"PotassiumObserved\"\r\n                        formControlName=\"PotassiumObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"CalciumObserved\">Calcium Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"CalciumObserved\"\r\n                        name=\"CalciumObserved\"\r\n                        formControlName=\"CalciumObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"MagnesiumObserved\">Magnesium Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"MagnesiumObserved\"\r\n                        name=\"MagnesiumObserved\"\r\n                        formControlName=\"MagnesiumObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"ZincObserved\">Zinc Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"ZincObserved\"\r\n                        name=\"ZincObserved\"\r\n                        formControlName=\"ZincObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"SulphurObserved\">Sulphur Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"SulphurObserved\"\r\n                        name=\"SulphurObserved\"\r\n                        formControlName=\"SulphurObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"IronObserved\">Iron Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"IronObserved\"\r\n                        name=\"IronObserved\"\r\n                        formControlName=\"IronObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"CopperObserved\">Copper Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"CopperObserved\"\r\n                        name=\"CopperObserved\"\r\n                        formControlName=\"CopperObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"BoronObserved\">Boron Observed</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"BoronObserved\"\r\n                        name=\"BoronObserved\"\r\n                        formControlName=\"BoronObserved\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"RecommendedUreaQty\">Recommended Urea Qty</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"RecommendedUreaQty\"\r\n                        name=\"RecommendedUreaQty\"\r\n                        formControlName=\"RecommendedUreaQty\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"RecommendedNPKQty\">Recommended NPK Qty</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"RecommendedNPKQty\"\r\n                        name=\"RecommendedNPKQty\"\r\n                        formControlName=\"RecommendedNPKQty\"\r\n                        placeholder=\"Enter value\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-secondary\"\r\n                  (click)=\"resultModal.hide()\"\r\n                >\r\n                  Close\r\n                </button>\r\n                <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary ml-2\"\r\n                  [disabled]=\"btnLoading\"\r\n                >\r\n                  <span\r\n                    *ngIf=\"btnLoading\"\r\n                    class=\"spinner-border spinner-border-sm\"\r\n                    role=\"status\"\r\n                    aria-hidden=\"true\"\r\n                  ></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "OfZf": function OfZf(module, __webpack_exports__, __webpack_require__) {
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


      var _soil_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./soil-detail.component */
      "tdzO");
      /* harmony import */


      var _soil_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./soil-home.component */
      "3I1K");

      var routes = [{
        path: '',
        // data: {
        //   title: 'Theme'
        // },
        children: [{
          path: '',
          redirectTo: 'soiltest'
        }, {
          path: 'customers',
          // canActivate: [AuthGuard],
          component: _soil_home_component__WEBPACK_IMPORTED_MODULE_4__["SoilHomeComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Soil Analysis'
          }
        }, {
          path: 'test_details/:id',
          // canActivate: [AuthGuard],
          component: _soil_detail_component__WEBPACK_IMPORTED_MODULE_3__["SoilTestDetailComponent"],
          data: {
            roles: 'MANAGER',
            title: 'Test Details'
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
    "pj57": function pj57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Soil Analysis Home</h2>\r\n      <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n        New\r\n      </button> -->\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 500px\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "tdzO": function tdzO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoilTestDetailComponent", function () {
        return SoilTestDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_soil_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./soil-detail.component.html */
      "JdqK");
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

      var SoilTestDetailComponent = /*#__PURE__*/function () {
        function SoilTestDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, SoilTestDetailComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.details = [];
          this.btnLoading = false;
          this.dateConverterMin = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverterMin"];
          this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
          this.users = [];
          this.Villages = [];
          this.LGA = [];
          this.Areas = [];
          this.Farmers = [];
          this.States = [];
          this.Crops = [];
          this.agentForm = this.fb.group({
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // PreferredCollectionDate: ["", Validators.required],
            ReasonForSoilTest: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Status: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            nutrient: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Farmer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.resultForm = this.fb.group({
            soil_test_sample: [""],
            phObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            OrganicCarbonObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            TotalNitrogenObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            PhosphorousObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            PotassiumObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            CalciumObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MagnesiumObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            ZincObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            SulphurObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            IronObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            CopperObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            BoronObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            ManganeseObserved: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            RecommendedUreaQty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            RecommendedNPKQty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(SoilTestDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.getLists();
            this.getAreas();
            this.getCrops();
            this.getLGAs();
            this.getStates();
            this.getVillages();
            this.getFarmers();
            this.activatedRouter.params.subscribe(function (params) {
              _this4.id = params["id"];
            });
            this.getTest();
          }
        }, {
          key: "getTest",
          value: function getTest() {
            var _this5 = this;

            this.dataservice.getsingleSoilTests(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

              console.log("getsingleSoilTests", result.data.soilTest.data);
              _this5.details = result.data.soilTest.data;
              _this5.agentForm = _this5.fb.group({
                ContactNumber: [(_a = _this5.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // PreferredCollectionDate: [
                //   this.details?.attributes?.PreferredCollectionDate,
                //   Validators.required,
                // ],
                ReasonForSoilTest: [(_c = (_b = _this5.details) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.ReasonForSoilTest, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Status: [(_e = (_d = _this5.details) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.Status, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                nutrient: [(_g = (_f = _this5.details) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.nutrient, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Farmer: [(_j = (_h = _this5.details) === null || _h === void 0 ? void 0 : _h.attributes) === null || _j === void 0 ? void 0 : _j.Farmer.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                area: [(_l = (_k = _this5.details) === null || _k === void 0 ? void 0 : _k.attributes) === null || _l === void 0 ? void 0 : _l.area.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                state: [(_o = (_m = _this5.details) === null || _m === void 0 ? void 0 : _m.attributes) === null || _o === void 0 ? void 0 : _o.lga.data.attributes.state.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                lga: [(_q = (_p = _this5.details) === null || _p === void 0 ? void 0 : _p.attributes) === null || _q === void 0 ? void 0 : _q.lga.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              _this5.loading = false;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this6 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              console.log("getCrops", result.data.crops.data);
              _this6.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this7 = this;

            this.dataservice.getStates().valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this7.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            var _this8 = this;

            this.dataservice.getLGAs(id).valueChanges.subscribe(function (result) {
              console.log("getLGAs", result.data.lgas.data);
              _this8.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this9 = this;

            this.dataservice.getAreas(id).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this9.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getFarmers",
          value: function getFarmers() {
            var _this10 = this;

            this.dataservice.getUsers(undefined, undefined, "Farmer").valueChanges.subscribe(function (result) {
              console.log("getFarmers", result.data.usersPermissionsUsers.data);
              _this10.Farmers = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages() {
            var _this11 = this;

            this.dataservice.getVillages().valueChanges.subscribe(function (result) {
              console.log("getVillages", result.data.villages.data);
              _this11.Villages = result.data.villages.data;
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
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30, _31, _32, _33, _34, _35, _36, _37, _38;

            this.resultModal.show();
            console.log(data, flag);
            this.flag = flag;
            this.resultForm = this.fb.group({
              id: [(_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.soil_test_results) === null || _b === void 0 ? void 0 : _b.data[0]) === null || _c === void 0 ? void 0 : _c.id],
              soil_test_sample: [data === null || data === void 0 ? void 0 : data.id],
              phObserved: [(_g = (_f = (_e = (_d = data === null || data === void 0 ? void 0 : data.attributes) === null || _d === void 0 ? void 0 : _d.soil_test_results) === null || _e === void 0 ? void 0 : _e.data[0]) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.phObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              OrganicCarbonObserved: [(_l = (_k = (_j = (_h = data === null || data === void 0 ? void 0 : data.attributes) === null || _h === void 0 ? void 0 : _h.soil_test_results) === null || _j === void 0 ? void 0 : _j.data[0]) === null || _k === void 0 ? void 0 : _k.attributes) === null || _l === void 0 ? void 0 : _l.OrganicCarbonObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              TotalNitrogenObserved: [(_q = (_p = (_o = (_m = data === null || data === void 0 ? void 0 : data.attributes) === null || _m === void 0 ? void 0 : _m.soil_test_results) === null || _o === void 0 ? void 0 : _o.data[0]) === null || _p === void 0 ? void 0 : _p.attributes) === null || _q === void 0 ? void 0 : _q.TotalNitrogenObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              PhosphorousObserved: [(_u = (_t = (_s = (_r = data === null || data === void 0 ? void 0 : data.attributes) === null || _r === void 0 ? void 0 : _r.soil_test_results) === null || _s === void 0 ? void 0 : _s.data[0]) === null || _t === void 0 ? void 0 : _t.attributes) === null || _u === void 0 ? void 0 : _u.PhosphorousObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              PotassiumObserved: [(_y = (_x = (_w = (_v = data === null || data === void 0 ? void 0 : data.attributes) === null || _v === void 0 ? void 0 : _v.soil_test_results) === null || _w === void 0 ? void 0 : _w.data[0]) === null || _x === void 0 ? void 0 : _x.attributes) === null || _y === void 0 ? void 0 : _y.PotassiumObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              CalciumObserved: [(_2 = (_1 = (_0 = (_z = data === null || data === void 0 ? void 0 : data.attributes) === null || _z === void 0 ? void 0 : _z.soil_test_results) === null || _0 === void 0 ? void 0 : _0.data[0]) === null || _1 === void 0 ? void 0 : _1.attributes) === null || _2 === void 0 ? void 0 : _2.CalciumObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              MagnesiumObserved: [(_6 = (_5 = (_4 = (_3 = data === null || data === void 0 ? void 0 : data.attributes) === null || _3 === void 0 ? void 0 : _3.soil_test_results) === null || _4 === void 0 ? void 0 : _4.data[0]) === null || _5 === void 0 ? void 0 : _5.attributes) === null || _6 === void 0 ? void 0 : _6.MagnesiumObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              ZincObserved: [(_10 = (_9 = (_8 = (_7 = data === null || data === void 0 ? void 0 : data.attributes) === null || _7 === void 0 ? void 0 : _7.soil_test_results) === null || _8 === void 0 ? void 0 : _8.data[0]) === null || _9 === void 0 ? void 0 : _9.attributes) === null || _10 === void 0 ? void 0 : _10.ZincObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              SulphurObserved: [(_14 = (_13 = (_12 = (_11 = data === null || data === void 0 ? void 0 : data.attributes) === null || _11 === void 0 ? void 0 : _11.soil_test_results) === null || _12 === void 0 ? void 0 : _12.data[0]) === null || _13 === void 0 ? void 0 : _13.attributes) === null || _14 === void 0 ? void 0 : _14.SulphurObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              IronObserved: [(_18 = (_17 = (_16 = (_15 = data === null || data === void 0 ? void 0 : data.attributes) === null || _15 === void 0 ? void 0 : _15.soil_test_results) === null || _16 === void 0 ? void 0 : _16.data[0]) === null || _17 === void 0 ? void 0 : _17.attributes) === null || _18 === void 0 ? void 0 : _18.IronObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              CopperObserved: [(_22 = (_21 = (_20 = (_19 = data === null || data === void 0 ? void 0 : data.attributes) === null || _19 === void 0 ? void 0 : _19.soil_test_results) === null || _20 === void 0 ? void 0 : _20.data[0]) === null || _21 === void 0 ? void 0 : _21.attributes) === null || _22 === void 0 ? void 0 : _22.CopperObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              BoronObserved: [(_26 = (_25 = (_24 = (_23 = data === null || data === void 0 ? void 0 : data.attributes) === null || _23 === void 0 ? void 0 : _23.soil_test_results) === null || _24 === void 0 ? void 0 : _24.data[0]) === null || _25 === void 0 ? void 0 : _25.attributes) === null || _26 === void 0 ? void 0 : _26.BoronObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              ManganeseObserved: [(_30 = (_29 = (_28 = (_27 = data === null || data === void 0 ? void 0 : data.attributes) === null || _27 === void 0 ? void 0 : _27.soil_test_results) === null || _28 === void 0 ? void 0 : _28.data[0]) === null || _29 === void 0 ? void 0 : _29.attributes) === null || _30 === void 0 ? void 0 : _30.ManganeseObserved, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              RecommendedUreaQty: [(_34 = (_33 = (_32 = (_31 = data === null || data === void 0 ? void 0 : data.attributes) === null || _31 === void 0 ? void 0 : _31.soil_test_results) === null || _32 === void 0 ? void 0 : _32.data[0]) === null || _33 === void 0 ? void 0 : _33.attributes) === null || _34 === void 0 ? void 0 : _34.RecommendedUreaQty, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
              RecommendedNPKQty: [(_38 = (_37 = (_36 = (_35 = data === null || data === void 0 ? void 0 : data.attributes) === null || _35 === void 0 ? void 0 : _35.soil_test_results) === null || _36 === void 0 ? void 0 : _36.data[0]) === null || _37 === void 0 ? void 0 : _37.attributes) === null || _38 === void 0 ? void 0 : _38.RecommendedNPKQty, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
            });
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this12 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.agentForm.value);
            this.dataservice.UpdateSoilTest(this.agentForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateSoilTest) {
                _this12.toastr.success("Test updated successfully!");

                _this12.btnLoading = false;

                _this12.myModal.hide();

                _this12.getTest();
              } else {
                _this12.toastr.error("Failed. Please check the fields!");

                _this12.btnLoading = false;
              }
            }, function (error) {
              _this12.btnLoading = false;
            });
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
          key: "ResultSubmit",
          value: function ResultSubmit() {
            var _this13 = this;

            this.btnLoading = true;

            if (this.flag == "edit") {
              console.log("edit", this.resultForm.value);
              var resp = {};
              console.log(this.resultForm.value);
              this.dataservice.UpdateSoilTestResult(this.resultForm.value).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateSoilTestResult) {
                  _this13.toastr.success("Result updated successfully!");

                  _this13.btnLoading = false;

                  _this13.resultModal.hide();

                  _this13.getTest();
                } else {
                  _this13.toastr.error("Failed. Please check the fields!");

                  _this13.btnLoading = false;
                }
              }, function (error) {
                _this13.btnLoading = false;
              });
            } else {
              console.log("new", this.resultForm.value);
              var _resp = {};
              console.log(this.resultForm.value);
              this.dataservice.AddSoilTestResult(this.resultForm.value).subscribe(function (result) {
                _resp = result.data;
                console.log("response", result);

                if (result.data.createSoilTestResult) {
                  _this13.toastr.success("Result added successfully!");

                  _this13.btnLoading = false;

                  _this13.resultModal.hide();

                  _this13.getTest();
                } else {
                  _this13.toastr.error("Failed. Please check the fields!");

                  _this13.btnLoading = false;
                }
              }, function (error) {
                _this13.btnLoading = false;
              });
            }
          }
        }]);

        return SoilTestDetailComponent;
      }();

      SoilTestDetailComponent.ctorParameters = function () {
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

      SoilTestDetailComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["myModal"]
        }],
        resultModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["resultModal"]
        }]
      };
      SoilTestDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_soil_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], SoilTestDetailComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-soil-test-soil-test-module-es5.js.map