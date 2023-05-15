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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-masters-masters-module"], {
    /***/
    "NPE9": function NPE9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MastersModule", function () {
        return MastersModule;
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


      var _masters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./masters.component */
      "a/en");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _masters_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./masters-routing.module */
      "zU92");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../utils/StatusRenderer */
      "MYrn"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var MastersModule = function MastersModule() {
        _classCallCheck(this, MastersModule);
      };

      MastersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _masters_routing_module__WEBPACK_IMPORTED_MODULE_7__["mastersRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_masters_component__WEBPACK_IMPORTED_MODULE_4__["mastersComponent"], _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_10__["ActionRenderer"]]
      })], MastersModule);
      /***/
    },

    /***/
    "a/en": function aEn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mastersComponent", function () {
        return mastersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_masters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./masters.component.html */
      "ejdE");
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


      var _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../utils/StatusRenderer */
      "MYrn");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var mastersComponent = /*#__PURE__*/function () {
        function mastersComponent(dataservice, route, router, fb, toastr) {
          _classCallCheck(this, mastersComponent);

          this.dataservice = dataservice;
          this.route = route;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.columnDefs = [];
          this.loading = true;
          this.disableButton = true;
          this.btnLoading = false;
          this.disableNextButton = false;
          this.disablePrevButton = true;
          this.searchTerm = ''; // disableNextButton = false;
          // disablePrevButton = true;
          // meta;
          // pageSize = 20;
          // from = 1;
          // to = 20;

          this.count = 1;
          this.Villages = [];
          this.LGA = [];
          this.Areas = [];
          this.States = [];
          this.Markets = [];
          this.Crops = [];
          this.file = null;
          this.pageSize = 20;
          this.from = 1;
          this.to = 20;
          this.frameworkComponents = {
            statusRenderer: new _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_7__["ActionRenderer"]()
          };
          this.stateForm = this.fb.group({
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.lgaForm = this.fb.group({
            lga: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.areaForm = this.fb.group({
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.marketForm = this.fb.group({
            market: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.cropForm = this.fb.group({
            crop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.villageForm = this.fb.group({
            village: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: [''],
            state: ['']
          });
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.selectedRows = [];
          this.context = {
            componentParent: this
          };
          this.rowSelection = 'single';
        }

        _createClass(mastersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            console.log(this.router.url);

            switch (this.router.url) {
              case '/masters/Villages':
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["VillageMasterColumn"]);
                this.dataservice.getVillages(this.count, this.pageSize).valueChanges.subscribe(function (result) {
                  var _a, _b;

                  console.log('getVillages', result.data.villages.data);
                  _this.rowData = result.data.villages.data;
                  _this.meta = result.data.villages.meta;

                  if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                    _this.disablePrevButton = true;
                    _this.disableNextButton = true;
                  }
                });
                break;

              case '/masters/Cities':
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["AreaMasterColumn"]);
                this.dataservice.getAreas(this.count, this.pageSize).valueChanges.subscribe(function (result) {
                  var _a, _b;

                  console.log('getAreas', result.data.areas.data);
                  _this.rowData = result.data.areas.data;
                  _this.meta = result.data.areas.meta;

                  if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                    _this.disablePrevButton = true;
                    _this.disableNextButton = true;
                  }
                });
                break;

              case '/masters/LGA':
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["LGAMasterColumn"]);
                this.dataservice.getLGAs(this.count, this.pageSize).valueChanges.subscribe(function (result) {
                  var _a, _b;

                  console.log('getLGAs', result.data.lgas.data);
                  _this.rowData = result.data.lgas.data;
                  _this.meta = result.data.lgas.meta;

                  if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                    _this.disablePrevButton = true;
                    _this.disableNextButton = true;
                  }
                });
                break;

              case '/masters/States':
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["StateMasterColumn"]);
                this.dataservice.getStates(this.count, this.pageSize).valueChanges.subscribe(function (result) {
                  var _a, _b;

                  console.log('getStates', result.data.states.data);
                  _this.rowData = result.data.states.data;
                  _this.meta = result.data.states.meta;

                  if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                    _this.disablePrevButton = true;
                    _this.disableNextButton = true;
                  }
                });
                break;

              case '/masters/Markets':
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["MarketMasterColumn"]);
                this.dataservice.getMarkets(this.count, this.pageSize).valueChanges.subscribe(function (result) {
                  var _a, _b;

                  console.log('getMarkets', result.data.markets.data);
                  _this.rowData = result.data.markets.data;
                  _this.meta = result.data.markets.meta;

                  if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                    _this.disablePrevButton = true;
                    _this.disableNextButton = true;
                  }
                });
                break;

              case '/masters/Crops':
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["CropMasterColumn"]);
                this.dataservice.getCrops(this.count, this.pageSize).valueChanges.subscribe(function (result) {
                  var _a, _b;

                  console.log('getCrops', result.data.crops.data);
                  _this.rowData = result.data.crops.data;
                  _this.meta = result.data.crops.meta;

                  if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                    _this.disablePrevButton = true;
                    _this.disableNextButton = true;
                  }
                });
                break;
            }

            this.getAreas(this.count, this.pageSize);
            this.getCrops(this.count, this.pageSize);
            this.getLGAs(this.count, this.pageSize);
            this.getMarkets(this.count, this.pageSize);
            this.getStates(this.count, this.pageSize);
            this.getVillages(this.count, this.pageSize);
          }
        }, {
          key: "search",
          value: function search() {
            this.loadData(this.count, this.pageSize, this.searchTerm);
          }
        }, {
          key: "onInputChange",
          value: function onInputChange(value) {
            // if (value.length > 2) {
            //   this.search();
            // }
            // if (value.length == 0) {
            //   this.search();
            // }
            this.search();
          }
        }, {
          key: "loadData",
          value: function loadData(count, pageSize, searchTerm) {
            var masterUrl = '';

            switch (this.router.url) {
              case '/masters/Villages':
                this.getVillages(count, pageSize, searchTerm);
                break;

              case '/masters/States':
                this.getStates(count, pageSize, searchTerm);
                break;

              case '/masters/Cities':
                this.getAreas(count, pageSize, searchTerm);
                break;

              case '/masters/LGA':
                this.getLGAs(count, pageSize, searchTerm);
                break;

              case '/masters/Markets':
                this.getMarkets(count, pageSize, searchTerm);
                break;

              case '/masters/Crops':
                this.getCrops(count, pageSize, searchTerm);
                break;
            }
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.loadData(this.count, this.pageSize, this.searchTerm);
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.loadData(this.count, this.pageSize, this.searchTerm);
          }
        }, {
          key: "downloadExcel",
          value: function downloadExcel() {
            var _this2 = this;

            var masterUrl = '';

            switch (this.router.url) {
              case '/masters/Villages':
                masterUrl = 'villages';
                break;

              case '/masters/States':
                masterUrl = 'states';
                break;

              case '/masters/Cities':
                masterUrl = 'cities';
                break;

              case '/masters/LGA':
                masterUrl = 'lgas';
                break;

              case '/masters/Markets':
                masterUrl = 'markets';
                break;

              case '/masters/Crops':
                masterUrl = 'crops';
                break;
            }

            var resp = {};
            this.btnLoading = true;
            this.dataservice.downloadMaster(masterUrl).subscribe(function (result) {
              var _a;

              resp = result.body;
              console.log(result);

              if (result.status === 200 && result.body.status == 'Success') {
                _this2.toastr.success(result.body.message);

                _this2.btnLoading = false;
                window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl).concat((_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path), '_blank');
              } else {
                _this2.btnLoading = false;

                _this2.toastr.error(result.body.message);
              }
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops(count, pageSize, searchTerm) {
            var _this3 = this;

            this.dataservice.getCrops(count, pageSize, searchTerm).valueChanges.subscribe(function (result) {
              console.log('getCrops2Function', result.data.crops.data);
              _this3.Crops = result.data.crops.data;

              if (_this3.router.url === '/masters/Crops') {
                _this3.rowData = result.data.crops.data;
                _this3.meta = result.data.crops.meta;
              }
            });
          }
        }, {
          key: "getStates",
          value: function getStates(count, pageSize, searchTerm) {
            var _this4 = this;

            this.dataservice.getStates(count, pageSize, searchTerm).valueChanges.subscribe(function (result) {
              console.log('getStates2Function', result.data.states.data);
              _this4.States = result.data.states.data;

              if (_this4.router.url === '/masters/States') {
                _this4.rowData = result.data.states.data;
                _this4.meta = result.data.states.meta;
              }
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(count, pageSize, searchTerm, stateid) {
            var _this5 = this;

            this.dataservice.getLGAs(count, pageSize, searchTerm, stateid).valueChanges.subscribe(function (result) {
              console.log('getLGAs2Function', result.data.lgas.data);
              _this5.LGA = result.data.lgas.data;

              if (_this5.router.url === '/masters/LGA') {
                _this5.rowData = result.data.lgas.data;
                _this5.meta = result.data.lgas.meta;
              }
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(count, pageSize, searchTerm, lgaid) {
            var _this6 = this;

            this.dataservice.getAreas(count, pageSize, searchTerm, lgaid).valueChanges.subscribe(function (result) {
              console.log('getAreas2Function', result.data.areas.data);
              _this6.Areas = result.data.areas.data;

              if (_this6.router.url === '/masters/Cities') {
                _this6.rowData = result.data.areas.data;
                _this6.meta = result.data.areas.meta;
              }
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(count, pageSize, searchTerm, areaid) {
            var _this7 = this;

            this.dataservice.getVillages(count, pageSize, searchTerm, areaid).valueChanges.subscribe(function (result) {
              console.log('getVillages2Function', result.data.villages.data);
              _this7.Villages = result.data.villages.data;

              if (_this7.router.url === '/masters/Villages') {
                _this7.rowData = result.data.villages.data;
                _this7.meta = result.data.villages.meta;
              }
            });
          }
        }, {
          key: "getMarkets",
          value: function getMarkets(count, pageSize, searchTerm) {
            var _this8 = this;

            this.dataservice.getMarkets(count, pageSize, searchTerm).valueChanges.subscribe(function (result) {
              console.log('getMarkets2Function', result.data.markets.data);
              _this8.Markets = result.data.markets.data;

              if (_this8.router.url === '/masters/Markets') {
                _this8.rowData = result.data.markets.data;
                _this8.meta = result.data.markets.meta;
              }
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
            console.log('row', event);
            alert('Parent Component Method from ' + event + '!'); // this.router.navigate(
            //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
            //   {
            //     state: { data: event.data },
            //   }
            // );
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

            console.log(this.selectedRows, this.selectedRows[0].attributes.Name); // this.router.navigate(
            //   ["/cropprices/kp_customer_details", selectedRows[0].id, this.router.url],
            //   {
            //     state: { data: selectedRows },
            //   }
            // );
          }
        }, {
          key: "openModal",
          value: function openModal(data) {
            var _a, _b, _c, _d, _e, _f, _g, _h;

            switch (this.router.url) {
              case '/masters/Villages':
                this.villageModal.show();

                if (data) {
                  this.villageForm = this.fb.group({
                    village: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    area: [Number(this.selectedRows[0].attributes.area.data.id), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    lga: [Number(this.selectedRows[0].attributes.area.data.attributes.lga.data.id)],
                    state: [Number(this.selectedRows[0].attributes.area.data.attributes.lga.data.attributes.state.data.id)]
                  });
                } else {
                  this.villageForm = this.fb.group({
                    village: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    lga: [''],
                    state: ['']
                  });
                }

                break;

              case '/masters/Cities':
                this.areaModal.show();

                if (data) {
                  this.areaForm = this.fb.group({
                    area: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    PostalCode: [this.selectedRows[0].attributes.PostalCode, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    lga: [Number(this.selectedRows[0].attributes.lga.data.id), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: [Number(this.selectedRows[0].attributes.lga.data.attributes.state.data.id), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.areaForm = this.fb.group({
                    area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    PostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    lga: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case '/masters/LGA':
                this.lgaModal.show();

                if (data) {
                  this.lgaForm = this.fb.group({
                    lga: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: [Number(this.selectedRows[0].attributes.state.data.id), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.lgaForm = this.fb.group({
                    lga: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case '/masters/States':
                this.stateModal.show();

                if (data) {
                  this.stateForm = this.fb.group({
                    state: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.stateForm = this.fb.group({
                    state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case '/masters/Markets':
                this.marketModal.show();

                if (data) {
                  this.marketForm = this.fb.group({
                    market: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: [this.selectedRows[0].attributes.state.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.marketForm = this.fb.group({
                    market: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case '/masters/Crops':
                this.cropModal.show();

                if (data) {
                  this.cropForm = this.fb.group({
                    crop: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    Image: [(_b = (_a = this.selectedRows[0].attributes.Image) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                  this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Image) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl) + ((_h = (_g = (_f = this.selectedRows[0].attributes.Image) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url) : null;
                } else {
                  this.cropForm = this.fb.group({
                    crop: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    Image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                  this.imageUrl = null;
                }

                break;
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
          } // loadNext() {
          //   this.count++;
          //    this.disablePrevButton = false;
          //   this.from = this.from + this.pageSize;
          //   this.to =
          //     this.to + this.pageSize > this.meta?.pagination?.total
          //       ? this.meta?.pagination?.total
          //       : this.to + this.pageSize;
          //   if (this.count === this.meta.pagination.pageCount) {
          //     this.disableNextButton = true;
          //   }
          //   // this.dataservice
          //   //   .getFarmDemos(this.count, this.pageSize)
          //   //   .valueChanges.subscribe((result: any) => {
          //   //     this.meta = result.data.farmDemos.meta;
          //   //     this.rowData = result.data.farmDemos.data;
          //   //   });
          // }
          // loadPrev() {
          //   this.count--;
          //   if (this.count < this.meta.pagination.pageCount) {
          //     this.disableNextButton = false;
          //   }
          //   if (this.count === 1) {
          //     this.disablePrevButton = true;
          //   }
          //   this.from = this.from - this.pageSize;
          //   this.to = this.to - this.rowData.length;
          //   // this.dataservice
          //   //   .getFarmDemos(this.count, this.pageSize)
          //   //   .valueChanges.subscribe((result: any) => {
          //   //     this.meta = result.data.farmDemos.meta;
          //   //     this.rowData = result.data.farmDemos.data;
          //   //   });
          // }

        }, {
          key: "filterLGA",
          value: function filterLGA(event) {
            this.getLGAs(this.count, this.pageSize, event.target.value);
          }
        }, {
          key: "filterArea",
          value: function filterArea(event) {
            this.getAreas(this.count, this.pageSize, event.target.value);
          }
        }, {
          key: "stateSubmit",
          value: function stateSubmit() {
            var _this9 = this;

            var resp = {};
            console.log(this.stateForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateState(this.stateForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.updateState) {
                  _this9.toastr.success('Success!');

                  _this9.gridApi.deselectAll();

                  _this9.stateModal.hide();

                  _this9.stateForm.reset();

                  _this9.dataservice.getStates(_this9.count, _this9.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getStates', result.data.states.data);
                    _this9.rowData = result.data.states.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this9.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this9.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            } else {
              this.dataservice.AddStates(this.stateForm.value).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.createState) {
                  _this9.toastr.success('Success!');

                  _this9.gridApi.deselectAll();

                  _this9.stateModal.hide();

                  _this9.stateForm.reset();

                  _this9.dataservice.getStates(_this9.count, _this9.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getStates', result.data.states.data);
                    _this9.rowData = result.data.states.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this9.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this9.toastr.error('Failed. Please check the fields!');
                  }
                }
              }, function (error) {
                console.log(error);

                _this9.toastr.error('Failed.');
              });
            }
          }
        }, {
          key: "lgaSubmit",
          value: function lgaSubmit() {
            var _this10 = this;

            var resp = {};
            console.log(this.lgaForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateLGA(this.lgaForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.updateLga) {
                  _this10.toastr.success('Success!');

                  _this10.gridApi.deselectAll();

                  _this10.lgaModal.hide();

                  _this10.lgaForm.reset();

                  _this10.dataservice.getLGAs(_this10.count, _this10.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getLGAs', result.data.lgas.data);
                    _this10.rowData = result.data.lgas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this10.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this10.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            } else {
              this.dataservice.AddLGA(this.lgaForm.value).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.createLga) {
                  _this10.toastr.success('Success!');

                  _this10.gridApi.deselectAll();

                  _this10.lgaModal.hide();

                  _this10.lgaForm.reset();

                  _this10.dataservice.getLGAs(_this10.count, _this10.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getLGAs', result.data.lgas.data);
                    _this10.rowData = result.data.lgas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this10.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this10.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            }
          }
        }, {
          key: "areaSubmit",
          value: function areaSubmit() {
            var _this11 = this;

            var resp = {};
            console.log(this.areaForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateArea(this.areaForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.updateArea) {
                  _this11.toastr.success('Success!');

                  _this11.gridApi.deselectAll();

                  _this11.areaModal.hide();

                  _this11.areaForm.reset();

                  _this11.dataservice.getAreas(_this11.count, _this11.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getAreas', result.data.areas.data);
                    _this11.rowData = result.data.areas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this11.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this11.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            } else {
              this.dataservice.AddArea(this.areaForm.value).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.createArea) {
                  _this11.toastr.success('Success!');

                  _this11.gridApi.deselectAll();

                  _this11.areaModal.hide();

                  _this11.areaForm.reset();

                  _this11.dataservice.getAreas(_this11.count, _this11.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getAreas', result.data.areas.data);
                    _this11.rowData = result.data.areas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this11.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this11.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            }
          }
        }, {
          key: "marketSubmit",
          value: function marketSubmit() {
            var _this12 = this;

            var resp = {};
            console.log(this.marketForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateMarket(this.marketForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.updateMarket) {
                  _this12.toastr.success('Success!');

                  _this12.gridApi.deselectAll();

                  _this12.marketModal.hide();

                  _this12.marketForm.reset();

                  _this12.dataservice.getMarkets(_this12.count, _this12.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getMarkets', result.data.markets.data);
                    _this12.rowData = result.data.markets.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this12.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this12.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            } else {
              this.dataservice.AddMarket(this.marketForm.value).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.createMarket) {
                  _this12.toastr.success('Success!');

                  _this12.gridApi.deselectAll();

                  _this12.marketModal.hide();

                  _this12.marketForm.reset();

                  _this12.dataservice.getMarkets(_this12.count, _this12.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getMarkets', result.data.markets.data);
                    _this12.rowData = result.data.markets.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this12.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this12.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            }
          }
        }, {
          key: "cropSubmit",
          value: function cropSubmit() {
            var _this13 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.cropForm.value);

            if (!this.disableButton) {
              if (this.file) {
                this.dataservice.upload(this.file).subscribe(function (response) {
                  var _a;

                  if (response.status == 200) {
                    console.log(response);

                    _this13.dataservice.UpdateCrop(_this13.cropForm.value, _this13.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                      resp = result.data;
                      console.log('response', result);

                      if (result.data.updateCrop) {
                        _this13.toastr.success('Success!');

                        _this13.gridApi.deselectAll();

                        _this13.cropModal.hide();

                        _this13.cropForm.reset();

                        _this13.btnLoading = false;

                        _this13.dataservice.getCrops(_this13.count, _this13.pageSize).valueChanges.subscribe(function (result) {
                          console.log('getCrops', result.data.crops.data);
                          _this13.rowData = result.data.crops.data;
                        });
                      } else {
                        if (result.errors[0].extensions.error.name == 'ValidationError') {
                          _this13.toastr.error('Can\'t be added as the value already exists');

                          _this13.btnLoading = false;
                        } else {
                          _this13.toastr.error('Failed. Please check the fields!');

                          _this13.btnLoading = false;
                        }
                      }
                    }, function (error) {
                      _this13.btnLoading = false;
                    });
                  }
                });
              } else {
                this.dataservice.UpdateCrop(this.cropForm.value, this.selectedRows[0].id, null).subscribe(function (result) {
                  resp = result.data;
                  console.log('response', result);

                  if (result.data.updateCrop) {
                    _this13.toastr.success('Success!');

                    _this13.gridApi.deselectAll();

                    _this13.cropModal.hide();

                    _this13.cropForm.reset();

                    _this13.dataservice.getCrops(_this13.count, _this13.pageSize).valueChanges.subscribe(function (result) {
                      console.log('getCrops', result.data.crops.data);
                      _this13.rowData = result.data.crops.data;
                    });
                  } else {
                    if (result.errors[0].extensions.error.name == 'ValidationError') {
                      _this13.toastr.error('Can\'t be added as the value already exists');
                    } else {
                      _this13.toastr.error('Failed. Please check the fields!');
                    }
                  }
                });
              }
            } else {
              this.dataservice.upload(this.file).subscribe(function (response) {
                var _a;

                if (response.status == 200) {
                  console.log(response);

                  _this13.dataservice.AddCrop(_this13.cropForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                    resp = result.data;
                    console.log('response', result);

                    if (result.data.createCrop) {
                      _this13.toastr.success('Success!');

                      _this13.gridApi.deselectAll();

                      _this13.cropModal.hide();

                      _this13.cropForm.reset();

                      _this13.dataservice.getCrops(_this13.count, _this13.pageSize).valueChanges.subscribe(function (result) {
                        console.log('getCrops', result.data.crops.data);
                        _this13.rowData = result.data.crops.data;
                      });
                    } else {
                      if (result.errors[0].extensions.error.name == 'ValidationError') {
                        _this13.toastr.error('Can\'t be added as the value already exists');
                      } else {
                        _this13.toastr.error('Failed. Please check the fields!');
                      }
                    }
                  });
                }
              });
            }
          }
        }, {
          key: "vilageSubmit",
          value: function vilageSubmit() {
            var _this14 = this;

            var resp = {};
            console.log(this.villageForm.value);

            if (!this.disableButton) {
              this.dataservice.Updatevillage(this.villageForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.updateVillage) {
                  _this14.toastr.success('Success!');

                  _this14.gridApi.deselectAll();

                  _this14.villageModal.hide();

                  _this14.villageForm.reset();

                  _this14.dataservice.getVillages(_this14.count, _this14.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getVillages', result.data.villages.data);
                    _this14.rowData = result.data.villages.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this14.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this14.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            } else {
              this.dataservice.Addvillage(this.villageForm.value).subscribe(function (result) {
                resp = result.data;
                console.log('response', result);

                if (result.data.createVillage) {
                  _this14.toastr.success('Success!');

                  _this14.gridApi.deselectAll();

                  _this14.villageModal.hide();

                  _this14.villageForm.reset();

                  _this14.dataservice.getVillages(_this14.count, _this14.pageSize).valueChanges.subscribe(function (result) {
                    console.log('getVillages', result.data.villages.data);
                    _this14.rowData = result.data.villages.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == 'ValidationError') {
                    _this14.toastr.error('Can\'t be added as the value already exists');
                  } else {
                    _this14.toastr.error('Failed. Please check the fields!');
                  }
                }
              });
            }
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord() {
            var _this15 = this;

            // this.lgaForm = this.fb.group({
            //   isDelete: [true, Validators.required],
            // });
            // this.stateForm = this.fb.group({
            //   isDelete: [true, Validators.required],
            // });
            // this.villageForm = this.fb.group({
            //   isDelete: [true, Validators.required],
            // });
            // this.lgaForm = this.fb.group({
            //   isDelete: [true, Validators.required],
            // });
            // this.marketForm = this.fb.group({
            //   isDelete: [true, Validators.required],
            // });
            // this.cropForm = this.fb.group({
            //   isDelete: [true, Validators.required],
            // });
            console.log(this.lgaForm.value);

            switch (this.router.url) {
              case '/masters/Villages':
                this.dataservice.deleteVillage(this.selectedRows[0].id).subscribe(function (result) {
                  console.log('response', result);

                  if (result.data.deleteVillage) {
                    _this15.toastr.success('Success!');

                    _this15.gridApi.deselectAll();

                    _this15.deleteModal.hide();

                    _this15.dataservice.getVillages(_this15.count, _this15.pageSize).valueChanges.subscribe(function (result) {
                      _this15.rowData = result.data.villages.data;
                    });
                  } else {
                    _this15.toastr.error('Failed!');
                  }
                });
                break;

              case '/masters/Cities':
                this.dataservice.deleteArea(this.selectedRows[0].id).subscribe(function (result) {
                  console.log('response', result);

                  if (result.data.deleteArea) {
                    _this15.toastr.success('Success!');

                    _this15.gridApi.deselectAll();

                    _this15.deleteModal.hide();

                    _this15.dataservice.getAreas(_this15.count, _this15.pageSize).valueChanges.subscribe(function (result) {
                      _this15.rowData = result.data.areas.data;
                    });
                  } else {
                    _this15.toastr.error('Failed!');
                  }
                });
                break;

              case '/masters/LGA':
                this.dataservice.deleteLGA(this.selectedRows[0].id).subscribe(function (result) {
                  console.log('response', result);

                  if (result.data.deleteLga) {
                    _this15.toastr.success('Success!');

                    _this15.gridApi.deselectAll();

                    _this15.deleteModal.hide();

                    _this15.dataservice.getLGAs(_this15.count, _this15.pageSize).valueChanges.subscribe(function (result) {
                      _this15.rowData = result.data.lgas.data;
                    });
                  } else {
                    _this15.toastr.error('Failed!');
                  }
                });
                break;

              case '/masters/States':
                this.dataservice.deleteState(this.selectedRows[0].id).subscribe(function (result) {
                  console.log('response', result);

                  if (result.data.deleteState) {
                    _this15.toastr.success('Success!');

                    _this15.gridApi.deselectAll();

                    _this15.deleteModal.hide();

                    _this15.dataservice.getStates(_this15.count, _this15.pageSize).valueChanges.subscribe(function (result) {
                      _this15.rowData = result.data.states.data;
                    });
                  } else {
                    _this15.toastr.error('Failed!');
                  }
                });
                break;

              case '/masters/Markets':
                this.dataservice.deleteMarket(this.selectedRows[0].id).subscribe(function (result) {
                  console.log('response', result);

                  if (result.data.deleteMarket) {
                    _this15.toastr.success('Success!');

                    _this15.gridApi.deselectAll();

                    _this15.deleteModal.hide();

                    _this15.dataservice.getMarkets(_this15.count, _this15.pageSize).valueChanges.subscribe(function (result) {
                      _this15.rowData = result.data.markets.data;
                    });
                  } else {
                    _this15.toastr.error('Failed!');
                  }
                });
                break;

              case '/masters/Crops':
                this.dataservice.deleteCrop(this.selectedRows[0].id).subscribe(function (result) {
                  console.log('response', result);

                  if (result.data.deleteCrop) {
                    _this15.toastr.success('Success!');

                    _this15.gridApi.deselectAll();

                    _this15.deleteModal.hide();

                    _this15.dataservice.getCrops(_this15.count, _this15.pageSize).valueChanges.subscribe(function (result) {
                      _this15.rowData = result.data.crops.data;
                    });
                  } else {
                    _this15.toastr.error('Failed!');
                  }
                });
                break;
            }
          }
        }]);

        return mastersComponent;
      }();

      mastersComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      mastersComponent.propDecorators = {
        stateModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['stateModal']
        }],
        lgaModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['lgaModal']
        }],
        villageModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['villageModal']
        }],
        marketModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['marketModal']
        }],
        areaModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['areaModal']
        }],
        cropModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['cropModal']
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['deleteModal']
        }],
        searchInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['searchInput', {
            "static": true
          }]
        }]
      };
      mastersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_masters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], mastersComponent);
      /***/
    },

    /***/
    "ejdE": function ejdE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>{{ this.route.snapshot.data.title }} Master</h2>\n      <div>\n        <input\n          #searchInput\n          class=\"search-input\"\n          type=\"text\"\n          [(ngModel)]=\"searchTerm\"\n          name=\"searchField\"\n          placeholder=\"Search...\"\n          (input)=\"onInputChange($event.target.value)\"\n        />\n        <button\n          type=\"button\"\n          class=\"btn btn-outline-primary\"\n          data-toggle=\"modal\"\n          (click)=\"downloadExcel()\"\n        >\n          Download excel\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          [disabled]=\"disableButton\"\n          (click)=\"deleteModal.show()\"\n        >\n          Delete\n        </button>\n        <button\n          type=\"button\"\n          [disabled]=\"disableButton\"\n          class=\"btn btn-info\"\n          data-toggle=\"modal\"\n          (click)=\"openModal('Edit')\"\n        >\n          Edit\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!disableButton\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New {{ this.route.snapshot.data.title }}\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [context]=\"context\"\n            [pagination]=\"false\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            [frameworkComponents]=\"frameworkComponents\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #stateModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit State</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"stateModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"stateForm\" (ngSubmit)=\"stateSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">State</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"state\"\n              name=\"state\"\n              formControlName=\"state\"\n              placeholder=\"Enter State Name\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"stateModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !stateForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #lgaModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit LGA</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"lgaModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"lgaForm\" (ngSubmit)=\"lgaSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"lga\"\n              name=\"lga\"\n              formControlName=\"lga\"\n              placeholder=\"Enter LGA Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"lgaModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !lgaForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #areaModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit City</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"areaModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"areaForm\" (ngSubmit)=\"areaSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"area\">City Name</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"area\"\n              name=\"area\"\n              formControlName=\"area\"\n              placeholder=\"Enter City Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"area\">Postal code</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"PostalCode\"\n              name=\"PostalCode\"\n              formControlName=\"PostalCode\"\n              placeholder=\"Enter Postal Code\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n              (change)=\"filterLGA($event)\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <select\n              class=\"form-control\"\n              id=\"lga\"\n              required\n              ngModel\n              name=\"lga\"\n              formControlName=\"lga\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"areaModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !areaForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #marketModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Market</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"marketModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"marketForm\" (ngSubmit)=\"marketSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"market\">Market</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"market\"\n              name=\"market\"\n              formControlName=\"market\"\n              placeholder=\"Enter Market Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"marketModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !marketForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #cropModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Crop</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"cropModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"cropForm\" (ngSubmit)=\"cropSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Crop</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"crop\"\n              name=\"crop\"\n              formControlName=\"crop\"\n              placeholder=\"Enter Crop Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Image\">Image</label>\n            <div>\n              <img\n                *ngIf=\"imageUrl\"\n                src=\"{{ imageUrl }}\"\n                width=\"100\"\n                height=\"100\"\n                style=\"object-fit: cover\"\n              />\n            </div>\n            <input\n              type=\"file\"\n              class=\"form-control\"\n              id=\"Image\"\n              accept=\".jpg,.jpeg,.JPEG,.png\"\n              name=\"Image\"\n              (change)=\"onChange($event)\"\n              formControlName=\"Image\"\n              placeholder=\"Choose image\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"cropModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !cropForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #villageModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Village</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"villageModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"villageForm\" (ngSubmit)=\"vilageSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"market\">Village Name</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"village\"\n              name=\"village\"\n              formControlName=\"village\"\n              placeholder=\"Enter Village Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              ngModel\n              name=\"state\"\n              (change)=\"filterLGA($event)\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <select\n              class=\"form-control\"\n              id=\"lga\"\n              ngModel\n              (change)=\"filterArea($event)\"\n              name=\"lga\"\n              formControlName=\"lga\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"area\">City</label>\n            <select\n              class=\"form-control\"\n              id=\"area\"\n              ngModel\n              name=\"area\"\n              formControlName=\"area\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"villageModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !villageForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #deleteModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        Do you want to delete this record?\n      </div>\n      <div class=\"modal-footer justify-content-around\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary\"\n          (click)=\"deleteModal.hide()\"\n        >\n          No! Cancel.\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\n          Yes! Delete.\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "zU92": function zU92(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mastersRoutingModule", function () {
        return mastersRoutingModule;
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


      var _masters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./masters.component */
      "a/en");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'masters'
        }, {
          path: 'States',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'States',
            title: 'States'
          }
        }, {
          path: 'LGA',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'LGA',
            title: 'LGA'
          }
        }, {
          path: 'Cities',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'Cities',
            title: 'Cities'
          }
        }, {
          path: 'Villages',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'Villages',
            title: 'Villages'
          }
        }, {
          path: 'Markets',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'Markets',
            title: 'Markets'
          }
        }, {
          path: 'Crops',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'Crops',
            title: 'Crops'
          }
        }]
      }];

      var mastersRoutingModule = function mastersRoutingModule() {
        _classCallCheck(this, mastersRoutingModule);
      };

      mastersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      }) // tslint:disable-next-line:class-name
      ], mastersRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-masters-masters-module-es5.js.map