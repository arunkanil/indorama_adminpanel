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
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

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
          this.rowSelection = 'single';
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

              console.log('getCustomers', result.data.soilTests.data);
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
          key: "downloadExcel",
          value: function downloadExcel() {
            var _this2 = this;

            var resp = {};
            this.btnLoading = true;
            this.dataservice.downloadSoilTests().subscribe(function (result) {
              var _a;

              resp = result.body;
              console.log(result);

              if (result.status === 200 && result.body.status == 'Success') {
                _this2.toastr.success(result.body.message);

                _this2.btnLoading = false;
                window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl).concat((_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path), '_blank');
              } else {
                _this2.btnLoading = false;

                _this2.toastr.error(result.body.message);
              }
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

            this.dataservice.getsoilTests(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this3.meta = result.data.soilTests.meta;
              _this3.rowData = result.data.soilTests.data;
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
            this.dataservice.getsoilTests(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this4.meta = result.data.soilTests.meta;
              _this4.rowData = result.data.soilTests.data;
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
            this.router.navigate(['/soiltest/test_details', selectedRows[0].id], {
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
          args: ['myModal']
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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <!-- <div\n    bsModal\n    #deleteModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this request?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"deleteModal.hide()\"\n          >\n            No! Cancel.\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteAgent()\">\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Soil Test Details</h2>\n      <span>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"myModal.show()\"\n        >\n          Edit\n        </button>\n        <!-- <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          (click)=\"deleteModal.show()\"\n        >\n          Delete\n        </button> -->\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4>Request details</h4>\n            </div>\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>STR{{ details?.id }}</td>\n                </tr>\n                <!-- <tr>\n                  <td>Test ID</td>\n                  <td>{{ details?.attributes?.SoilTestID }}</td>\n                </tr> -->\n                <tr>\n                  <td>Farmer</td>\n                  <td>\n                    {{ details?.attributes?.Farmer?.data.attributes.Name }}\n                  </td>\n                </tr>\n                <!-- <tr>\n                  <td>Email</td>\n                  <td>\n                    {{ details?.attributes?.Farmer?.data.attributes.email }}\n                  </td>\n                </tr> -->\n                <tr>\n                  <td>Contact number</td>\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\n                </tr>\n                <!-- <tr>\n                  <td>Agronomist</td>\n                  <td>\n                    {{\n                      details?.attributes?.Farmer?.data?.attributes?.agronomist\n                        ?.data?.attributes?.users_permissions_user?.data\n                        ?.attributes?.Name\n                    }}\n                  </td>\n                </tr> -->\n                <tr>\n                  <td>Reason for testing</td>\n                  <td>{{ details?.attributes?.ReasonForSoilTest }}</td>\n                </tr>\n                <tr>\n                  <td>Preferred nutrient</td>\n                  <td>{{ details?.attributes?.nutrient }}</td>\n                </tr>\n                <tr>\n                  <td>City</td>\n                  <td>{{ details?.attributes?.area?.data.attributes.Name }}</td>\n                </tr>\n                <tr>\n                  <td>Postal code</td>\n                  <td>\n                    {{ details?.attributes?.area?.data.attributes.PostalCode }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>LGA</td>\n                  <td>{{ details?.attributes?.lga?.data.attributes.Name }}</td>\n                </tr>\n                <tr>\n                  <td>State</td>\n                  <td>\n                    {{\n                      details?.attributes?.lga?.data?.attributes?.state?.data\n                        ?.attributes?.Name\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Preferred date for sample collection</td>\n                  <td>\n                    {{\n                      dateConverterMin(\n                        details?.attributes?.PreferredCollectionDate\n                      )\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <h4>Samples</h4>\n          <div class=\"row\">\n            <div\n              class=\"col-4\"\n              *ngFor=\"let item of details?.attributes?.soil_test_samples?.data\"\n            >\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div style=\"display: flex; justify-content: space-between\">\n                    <h5 class=\"card-title\">\n                      Sample ID : {{ item?.attributes?.SampleID }}\n                    </h5>\n                    <button\n                      type=\"button\"\n                      *ngIf=\"item?.attributes?.soil_test_results?.data[0]\"\n                      class=\"btn btn-primary\"\n                      data-toggle=\"modal\"\n                      (click)=\"openModal(item, 'edit')\"\n                    >\n                      Edit results\n                    </button>\n                    <button\n                      type=\"button\"\n                      *ngIf=\"!item?.attributes?.soil_test_results?.data[0]\"\n                      class=\"btn btn-primary\"\n                      data-toggle=\"modal\"\n                      (click)=\"openModal(item, 'add')\"\n                    >\n                      Add results\n                    </button>\n                  </div>\n                  <p class=\"card-text\">\n                    Quantity of samples :\n                    {{ item?.attributes?.QuantityOfSamples }}\n                  </p>\n                  <p class=\"card-text\">\n                    Created on :\n                    {{ dateConvertor(item?.attributes?.createdAt) }}\n                  </p>\n                  <p class=\"card-text\">\n                    Added by :\n                    {{\n                      item?.attributes?.SampleAddedBy?.data?.attributes?.Name\n                    }}\n                  </p>\n                  <p>Result updated on : {{dateConvertor(item?.attributes?.soil_test_results?.data[0]\n                    ?.attributes?.updatedAt)}}</p>\n                  <table class=\"table\">\n                    <tbody>\n                      <tr>\n                        <th>Parameter</th>\n                        <th>Value observed</th>\n                      </tr>\n                      <tr>\n                        <td>pH</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.phObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Organic Carbon</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.OrganicCarbonObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Total Nitrogen</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.TotalNitrogenObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Phosphorous</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.PhosphorousObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Pottasium</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.PotassiumObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Calcium</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.CalciumObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Magnesium</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.MagnesiumObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Zinc</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.ZincObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Sulphur</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.SulphurObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Iron</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.IronObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Copper</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.CopperObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Boron</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.BoronObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Manganese</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.ManganeseObserved\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Recommended Urea Qty</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.RecommendedUreaQty\n                          }}\n                        </td>\n                      </tr>\n                      <tr>\n                        <td>Recommended NPK Qty</td>\n                        <td>\n                          {{\n                            item?.attributes?.soil_test_results?.data[0]\n                              ?.attributes?.RecommendedNPKQty\n                          }}\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"col\">\n          <div style=\"display: flex; justify-content: space-between\">\n            <h4>Test Results</h4>\n          </div>\n          <table class=\"table\" *ngFor=\"let item of details.attributes.soil_test_samples.data\">\n            <tbody>\n              <tr>\n                <th>Parameter</th>\n                <th>Value observed</th>\n              </tr>\n              <tr>\n                <td>pH</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.phObserved }}</td>\n              </tr>\n              <tr>\n                <td>Organic Carbon</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.OrganicCarbonObserved }}</td>\n              </tr>\n              <tr>\n                <td>Total Nitrogen</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.TotalNitrogenObserved }}</td>\n              </tr>\n              <tr>\n                <td>Phosphorous</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.PhosphorousObserved }}</td>\n              </tr>\n              <tr>\n                <td>Pottasium</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.PotassiumObserved }}</td>\n              </tr>\n              <tr>\n                <td>Calcium</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.CalciumObserved }}</td>\n              </tr>\n              <tr>\n                <td>Magnesium</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.MagnesiumObserved }}</td>\n              </tr>\n              <tr>\n                <td>Zinc</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.ZincObserved }}</td>\n              </tr>\n              <tr>\n                <td>Sulphur</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.SulphurObserved }}</td>\n              </tr>\n              <tr>\n                <td>Iron</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.IronObserved }}</td>\n              </tr>\n              <tr>\n                <td>Copper</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.CopperObserved }}</td>\n              </tr>\n              <tr>\n                <td>Boron</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.BoronObserved }}</td>\n              </tr>\n              <tr>\n                <td>Manganese</td>\n                <td>{{ item?.attributes?.soil_test_results?.data[0].attributes.ManganeseObserved }}</td>\n              </tr>\n            </tbody>\n          </table>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            data-toggle=\"modal\"\n            (click)=\"commentModal.show()\"\n          >\n            Add Comment\n          </button>\n        </div> -->\n        </div>\n      </div>\n      <div\n        bsModal\n        #myModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit details</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"myModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"Farmer\">Farmer</label>\n                  <select\n                    class=\"form-control\"\n                    id=\"Farmer\"\n                    required\n                    ngModel\n                    name=\"Farmer\"\n                    formControlName=\"Farmer\"\n                  >\n                    <option value=\"\" disabled selected hidden>Choose...</option>\n                    <option *ngFor=\"let item of Farmers\" value=\"{{ item.id }}\">\n                      {{ item.attributes.Name }}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label>Contact Number</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"ContactNumber\"\n                    name=\"ContactNumber\"\n                    formControlName=\"ContactNumber\"\n                    placeholder=\"Enter contact number\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"ReasonForSoilTest\">Reason for test</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"ReasonForSoilTest\"\n                    name=\"ReasonForSoilTest\"\n                    formControlName=\"ReasonForSoilTest\"\n                    placeholder=\"Enter contact number\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"nutrient\">Testing for</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"nutrient\"\n                    name=\"nutrient\"\n                    formControlName=\"nutrient\"\n                    placeholder=\"Enter nutrient\"\n                  />\n                </div>\n                <!-- <div class=\"form-group\">\n                  <label for=\"PreferredCollectionDate\"\n                    >Preferred Collection Date</label\n                  >\n                  <input\n                    type=\"datetime-local\"\n                    class=\"form-control\"\n                    id=\"PreferredCollectionDate\"\n                    name=\"PreferredCollectionDate\"\n                    formControlName=\"PreferredCollectionDate\"\n                    placeholder=\"Enter PreferredCollectionDate\"\n                  />\n                </div> -->\n\n                <div class=\"form-group\">\n                  <label for=\"Status\">Status</label>\n                  <select\n                    class=\"form-control\"\n                    id=\"Status\"\n                    required\n                    ngModel\n                    name=\"Status\"\n                    formControlName=\"Status\"\n                  >\n                    <option value=\"\" disabled selected hidden>Choose...</option>\n                    <option value=\"NEW_REQUEST\">NEW_REQUEST</option>\n                    <option value=\"SAMPLE_COLLECTED\">SAMPLE_COLLECTED</option>\n                    <option value=\"RESULTS_ADDED\">RESULTS_ADDED</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"state\">State</label>\n                  <select\n                    class=\"form-control\"\n                    id=\"state\"\n                    required\n                    ngModel\n                    (change)=\"filterLGA($event)\"\n                    name=\"state\"\n                    formControlName=\"state\"\n                  >\n                    <option value=\"\" disabled selected hidden>Choose...</option>\n                    <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                      {{ item.attributes.Name }}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"lga\">LGA</label>\n                  <select\n                    class=\"form-control\"\n                    id=\"lga\"\n                    required\n                    (change)=\"filterArea($event)\"\n                    ngModel\n                    name=\"lga\"\n                    formControlName=\"lga\"\n                  >\n                    <option value=\"\" disabled selected hidden>Choose...</option>\n                    <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                      {{ item.attributes.Name }}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"area\">City</label>\n                  <select\n                    class=\"form-control\"\n                    id=\"area\"\n                    required\n                    ngModel\n                    name=\"area\"\n                    formControlName=\"area\"\n                  >\n                    <option value=\"\" disabled selected hidden>Choose...</option>\n                    <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                      {{ item.attributes.Name }}\n                    </option>\n                  </select>\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"myModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading || !agentForm.valid\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #resultModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"resultModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add/Edit result</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"resultModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"soil_test_sample\">Soil Test ID</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"soil_test_sample\"\n                        disabled=\"true\"\n                        name=\"soil_test_sample\"\n                        formControlName=\"soil_test_sample\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"phObserved\">ph Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"phObserved\"\n                        name=\"phObserved\"\n                        formControlName=\"phObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"OrganicCarbonObserved\"\n                        >Organic Carbon Observed</label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"OrganicCarbonObserved\"\n                        name=\"OrganicCarbonObserved\"\n                        formControlName=\"OrganicCarbonObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"TotalNitrogenObserved\"\n                        >Total Nitrogen Observed</label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"TotalNitrogenObserved\"\n                        name=\"TotalNitrogenObserved\"\n                        formControlName=\"TotalNitrogenObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ManganeseObserved\">Manganese Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"ManganeseObserved\"\n                        name=\"ManganeseObserved\"\n                        formControlName=\"ManganeseObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"PhosphorousObserved\"\n                        >Phosphorous Observed</label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"PhosphorousObserved\"\n                        name=\"PhosphorousObserved\"\n                        formControlName=\"PhosphorousObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"PotassiumObserved\">Potassium Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"PotassiumObserved\"\n                        name=\"PotassiumObserved\"\n                        formControlName=\"PotassiumObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"CalciumObserved\">Calcium Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"CalciumObserved\"\n                        name=\"CalciumObserved\"\n                        formControlName=\"CalciumObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"MagnesiumObserved\">Magnesium Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"MagnesiumObserved\"\n                        name=\"MagnesiumObserved\"\n                        formControlName=\"MagnesiumObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"ZincObserved\">Zinc Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"ZincObserved\"\n                        name=\"ZincObserved\"\n                        formControlName=\"ZincObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"SulphurObserved\">Sulphur Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"SulphurObserved\"\n                        name=\"SulphurObserved\"\n                        formControlName=\"SulphurObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"IronObserved\">Iron Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"IronObserved\"\n                        name=\"IronObserved\"\n                        formControlName=\"IronObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"CopperObserved\">Copper Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"CopperObserved\"\n                        name=\"CopperObserved\"\n                        formControlName=\"CopperObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"BoronObserved\">Boron Observed</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"BoronObserved\"\n                        name=\"BoronObserved\"\n                        formControlName=\"BoronObserved\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"RecommendedUreaQty\">Recommended Urea Qty</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"RecommendedUreaQty\"\n                        name=\"RecommendedUreaQty\"\n                        formControlName=\"RecommendedUreaQty\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"RecommendedNPKQty\">Recommended NPK Qty</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"RecommendedNPKQty\"\n                        name=\"RecommendedNPKQty\"\n                        formControlName=\"RecommendedNPKQty\"\n                        placeholder=\"Enter value\"\n                      />\n                    </div>\n                  </div>\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"resultModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Soil Analysis Home</h2>\n\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n      <!-- <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\n        New\n      </button> -->\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 500px\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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
          this.LGA = [];
          this.Areas = [];
          this.Farmers = [];
          this.States = [];
          this.Crops = [];
          this.agentForm = this.fb.group({
            ContactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // PreferredCollectionDate: ["", Validators.required],
            ReasonForSoilTest: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Status: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            nutrient: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Farmer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
          this.resultForm = this.fb.group({
            soil_test_sample: [''],
            phObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            OrganicCarbonObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            TotalNitrogenObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            PhosphorousObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            PotassiumObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            CalciumObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            MagnesiumObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            ZincObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            SulphurObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            IronObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            CopperObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            BoronObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            ManganeseObserved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            RecommendedUreaQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            RecommendedNPKQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(SoilTestDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.getLists();
            this.getAreas();
            this.getCrops();
            this.getLGAs();
            this.getStates();
            this.getFarmers();
            this.activatedRouter.params.subscribe(function (params) {
              _this5.id = params['id'];
            });
            this.getTest();
          }
        }, {
          key: "getTest",
          value: function getTest() {
            var _this6 = this;

            this.dataservice.getsingleSoilTests(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;

              console.log('getsingleSoilTests', result.data.soilTest.data);
              _this6.details = result.data.soilTest.data;
              _this6.agentForm = _this6.fb.group({
                ContactNumber: [(_a = _this6.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // PreferredCollectionDate: [
                //   this.details?.attributes?.PreferredCollectionDate,
                //   Validators.required,
                // ],
                ReasonForSoilTest: [(_c = (_b = _this6.details) === null || _b === void 0 ? void 0 : _b.attributes) === null || _c === void 0 ? void 0 : _c.ReasonForSoilTest, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Status: [(_e = (_d = _this6.details) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.Status, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                nutrient: [(_g = (_f = _this6.details) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.nutrient, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Farmer: [(_j = (_h = _this6.details) === null || _h === void 0 ? void 0 : _h.attributes) === null || _j === void 0 ? void 0 : _j.Farmer.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                area: [(_l = (_k = _this6.details) === null || _k === void 0 ? void 0 : _k.attributes) === null || _l === void 0 ? void 0 : _l.area.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                state: [(_o = (_m = _this6.details) === null || _m === void 0 ? void 0 : _m.attributes) === null || _o === void 0 ? void 0 : _o.lga.data.attributes.state.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                lga: [(_q = (_p = _this6.details) === null || _p === void 0 ? void 0 : _p.attributes) === null || _q === void 0 ? void 0 : _q.lga.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              _this6.loading = false;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this7 = this;

            this.dataservice.getCrops(1, 10000, '').valueChanges.subscribe(function (result) {
              console.log('getCrops', result.data.crops.data);
              _this7.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this8 = this;

            this.dataservice.getStates(1, 10000, '').valueChanges.subscribe(function (result) {
              console.log('getStates', result.data.states.data);
              _this8.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(id) {
            var _this9 = this;

            this.dataservice.getLGAs(1, 10000, '', id).valueChanges.subscribe(function (result) {
              console.log('getLGAs', result.data.lgas.data);
              _this9.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this10 = this;

            this.dataservice.getAreas(1, 10000, '', id).valueChanges.subscribe(function (result) {
              console.log('getAreas', result.data.areas.data);
              _this10.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getFarmers",
          value: function getFarmers() {
            var _this11 = this;

            this.dataservice.getUsers(undefined, undefined, 'Farmer').valueChanges.subscribe(function (result) {
              console.log('getFarmers', result.data.usersPermissionsUsers.data);
              _this11.Farmers = result.data.usersPermissionsUsers.data;
            });
          }
        }, {
          key: "dateConvertor",
          value: function dateConvertor(date) {
            if (date == null) {
              return 'Nil';
            }

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
              console.log('response', result);

              if (result.data.updateSoilTest) {
                _this12.toastr.success('Test updated successfully!');

                _this12.btnLoading = false;

                _this12.myModal.hide();

                _this12.getTest();
              } else {
                _this12.toastr.error('Failed. Please check the fields!');

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

            if (this.flag === 'edit') {
              console.log('edit', this.resultForm.value);
              var resp = {};
              console.log(this.resultForm.value);
              this.dataservice.UpdateSoilTestResult(this.resultForm.value).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.updateSoilTestResult) {
                  _this13.toastr.success('Result updated successfully!');

                  _this13.btnLoading = false;

                  _this13.resultModal.hide();

                  _this13.getTest();
                } else {
                  _this13.toastr.error('Failed. Please check the fields!');

                  _this13.btnLoading = false;
                }
              }, function (error) {
                _this13.btnLoading = false;
              });
            } else {
              console.log('new', this.resultForm.value);
              var _resp = {};
              console.log(this.resultForm.value);
              this.dataservice.AddSoilTestResult(this.resultForm.value).subscribe(function (result) {
                _resp = result.data;
                console.log('response', result);

                if (result.data.createSoilTestResult) {
                  _this13.toastr.success('Result added successfully!');

                  _this13.btnLoading = false;

                  _this13.resultModal.hide();

                  _this13.getTest();
                } else {
                  _this13.toastr.error('Failed. Please check the fields!');

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
          args: ['myModal']
        }],
        resultModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['resultModal']
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