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
          this.btnLoading = false; // disableNextButton = false;
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
          this.frameworkComponents = {
            statusRenderer: new _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_7__["ActionRenderer"]()
          };
          this.stateForm = this.fb.group({
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.lgaForm = this.fb.group({
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.areaForm = this.fb.group({
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PostalCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.marketForm = this.fb.group({
            market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.cropForm = this.fb.group({
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.villageForm = this.fb.group({
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: [""],
            state: [""]
          });
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.selectedRows = [];
          this.context = {
            componentParent: this
          };
          this.rowSelection = "single";
        }

        _createClass(mastersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loading = true;
            console.log(this.router.url);

            switch (this.router.url) {
              case "/masters/Villages":
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["VillageMasterColumn"]);
                this.dataservice.getVillages().valueChanges.subscribe(function (result) {
                  console.log("getVillages", result.data.villages.data);
                  _this.rowData = result.data.villages.data; // this.meta = result.data.villages.meta;
                  // if (this.meta?.pagination?.pageCount <= 1) {
                  //   this.disablePrevButton = true;
                  //   this.disableNextButton = true;
                  // }
                });
                break;

              case "/masters/Areas":
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["AreaMasterColumn"]);
                this.dataservice.getAreas().valueChanges.subscribe(function (result) {
                  console.log("getAreas", result.data.areas.data);
                  _this.rowData = result.data.areas.data; // this.meta = result.data.areas.meta;
                  // if (this.meta?.pagination?.pageCount <= 1) {
                  //   this.disablePrevButton = true;
                  //   this.disableNextButton = true;
                  // }
                });
                break;

              case "/masters/LGA":
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["LGAMasterColumn"]);
                this.dataservice.getLGAs().valueChanges.subscribe(function (result) {
                  console.log("getLGAs", result.data.lgas.data);
                  _this.rowData = result.data.lgas.data; // this.meta = result.data.lgas.meta;
                  // if (this.meta?.pagination?.pageCount <= 1) {
                  //   this.disablePrevButton = true;
                  //   this.disableNextButton = true;
                  // }
                });
                break;

              case "/masters/States":
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["StateMasterColumn"]);
                this.dataservice.getStates().valueChanges.subscribe(function (result) {
                  console.log("getStates", result.data.states.data);
                  _this.rowData = result.data.states.data; // this.meta = result.data.states.meta;
                  // if (this.meta?.pagination?.pageCount <= 1) {
                  //   this.disablePrevButton = true;
                  //   this.disableNextButton = true;
                  // }
                });
                break;

              case "/masters/Markets":
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["MarketMasterColumn"]);
                this.dataservice.getMarkets().valueChanges.subscribe(function (result) {
                  console.log("getMarkets", result.data.markets.data);
                  _this.rowData = result.data.markets.data; // this.meta = result.data.markets.meta;
                  // if (this.meta?.pagination?.pageCount <= 1) {
                  //   this.disablePrevButton = true;
                  //   this.disableNextButton = true;
                  // }
                });
                break;

              case "/masters/Crops":
                this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["CropMasterColumn"]);
                this.dataservice.getCrops().valueChanges.subscribe(function (result) {
                  console.log("getCrops", result.data.crops.data);
                  _this.rowData = result.data.crops.data; // this.meta = result.data.crops.meta;
                  // if (this.meta?.pagination?.pageCount <= 1) {
                  //   this.disablePrevButton = true;
                  //   this.disableNextButton = true;
                  // }
                });
                break;
            }

            this.getAreas();
            this.getCrops();
            this.getLGAs();
            this.getMarkets();
            this.getStates();
            this.getVillages();
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this2 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              console.log("getCrops", result.data.crops.data);
              _this2.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this3 = this;

            this.dataservice.getStates().valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this3.States = result.data.states.data;
            });
          }
        }, {
          key: "getLGAs",
          value: function getLGAs(stateid) {
            var _this4 = this;

            this.dataservice.getLGAs(stateid).valueChanges.subscribe(function (result) {
              console.log("getLGAs", result.data.lgas.data);
              _this4.LGA = result.data.lgas.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(lgaid) {
            var _this5 = this;

            this.dataservice.getAreas(lgaid).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this5.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "getVillages",
          value: function getVillages(areaid) {
            var _this6 = this;

            this.dataservice.getVillages(areaid).valueChanges.subscribe(function (result) {
              console.log("getVillages", result.data.villages.data);
              _this6.Villages = result.data.villages.data;
            });
          }
        }, {
          key: "getMarkets",
          value: function getMarkets() {
            var _this7 = this;

            this.dataservice.getMarkets().valueChanges.subscribe(function (result) {
              console.log("getMarkets", result.data.markets.data);
              _this7.Markets = result.data.markets.data;
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
            console.log("row", event);
            alert("Parent Component Method from " + event + "!"); // this.router.navigate(
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
              case "/masters/Villages":
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
                    village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    lga: [""],
                    state: [""]
                  });
                }

                break;

              case "/masters/Areas":
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
                    area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    PostalCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case "/masters/LGA":
                this.lgaModal.show();

                if (data) {
                  this.lgaForm = this.fb.group({
                    lga: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: [Number(this.selectedRows[0].attributes.state.data.id), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.lgaForm = this.fb.group({
                    lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case "/masters/States":
                this.stateModal.show();

                if (data) {
                  this.stateForm = this.fb.group({
                    state: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.stateForm = this.fb.group({
                    state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case "/masters/Markets":
                this.marketModal.show();

                if (data) {
                  this.marketForm = this.fb.group({
                    market: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: [this.selectedRows[0].attributes.state.data.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                } else {
                  this.marketForm = this.fb.group({
                    market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                }

                break;

              case "/masters/Crops":
                this.cropModal.show();

                if (data) {
                  this.cropForm = this.fb.group({
                    crop: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    Image: [(_b = (_a = this.selectedRows[0].attributes.Image) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
                  });
                  this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Image) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl) + ((_h = (_g = (_f = this.selectedRows[0].attributes.Image) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url) : null;
                } else {
                  this.cropForm = this.fb.group({
                    crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
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
            this.getLGAs(event.target.value);
          }
        }, {
          key: "filterArea",
          value: function filterArea(event) {
            this.getAreas(event.target.value);
          }
        }, {
          key: "stateSubmit",
          value: function stateSubmit() {
            var _this8 = this;

            var resp = {};
            console.log(this.stateForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateState(this.stateForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateState) {
                  _this8.toastr.success("Success!");

                  _this8.gridApi.deselectAll();

                  _this8.stateModal.hide();

                  _this8.stateForm.reset();

                  _this8.dataservice.getStates().valueChanges.subscribe(function (result) {
                    console.log("getStates", result.data.states.data);
                    _this8.rowData = result.data.states.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this8.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this8.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            } else {
              this.dataservice.AddStates(this.stateForm.value).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.createState) {
                  _this8.toastr.success("Success!");

                  _this8.gridApi.deselectAll();

                  _this8.stateModal.hide();

                  _this8.stateForm.reset();

                  _this8.dataservice.getStates().valueChanges.subscribe(function (result) {
                    console.log("getStates", result.data.states.data);
                    _this8.rowData = result.data.states.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this8.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this8.toastr.error("Failed. Please check the fields!");
                  }
                }
              }, function (error) {
                console.log(error);

                _this8.toastr.error("Failed.");
              });
            }
          }
        }, {
          key: "lgaSubmit",
          value: function lgaSubmit() {
            var _this9 = this;

            var resp = {};
            console.log(this.lgaForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateLGA(this.lgaForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateLga) {
                  _this9.toastr.success("Success!");

                  _this9.gridApi.deselectAll();

                  _this9.lgaModal.hide();

                  _this9.lgaForm.reset();

                  _this9.dataservice.getLGAs().valueChanges.subscribe(function (result) {
                    console.log("getLGAs", result.data.lgas.data);
                    _this9.rowData = result.data.lgas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this9.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this9.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            } else {
              this.dataservice.AddLGA(this.lgaForm.value).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.createLga) {
                  _this9.toastr.success("Success!");

                  _this9.gridApi.deselectAll();

                  _this9.lgaModal.hide();

                  _this9.lgaForm.reset();

                  _this9.dataservice.getLGAs().valueChanges.subscribe(function (result) {
                    console.log("getLGAs", result.data.lgas.data);
                    _this9.rowData = result.data.lgas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this9.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this9.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            }
          }
        }, {
          key: "areaSubmit",
          value: function areaSubmit() {
            var _this10 = this;

            var resp = {};
            console.log(this.areaForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateArea(this.areaForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateArea) {
                  _this10.toastr.success("Success!");

                  _this10.gridApi.deselectAll();

                  _this10.areaModal.hide();

                  _this10.areaForm.reset();

                  _this10.dataservice.getAreas().valueChanges.subscribe(function (result) {
                    console.log("getAreas", result.data.areas.data);
                    _this10.rowData = result.data.areas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this10.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this10.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            } else {
              this.dataservice.AddArea(this.areaForm.value).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.createArea) {
                  _this10.toastr.success("Success!");

                  _this10.gridApi.deselectAll();

                  _this10.areaModal.hide();

                  _this10.areaForm.reset();

                  _this10.dataservice.getAreas().valueChanges.subscribe(function (result) {
                    console.log("getAreas", result.data.areas.data);
                    _this10.rowData = result.data.areas.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this10.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this10.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            }
          }
        }, {
          key: "marketSubmit",
          value: function marketSubmit() {
            var _this11 = this;

            var resp = {};
            console.log(this.marketForm.value);

            if (!this.disableButton) {
              this.dataservice.UpdateMarket(this.marketForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateMarket) {
                  _this11.toastr.success("Success!");

                  _this11.gridApi.deselectAll();

                  _this11.marketModal.hide();

                  _this11.marketForm.reset();

                  _this11.dataservice.getMarkets().valueChanges.subscribe(function (result) {
                    console.log("getMarkets", result.data.markets.data);
                    _this11.rowData = result.data.markets.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this11.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this11.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            } else {
              this.dataservice.AddMarket(this.marketForm.value).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.createMarket) {
                  _this11.toastr.success("Success!");

                  _this11.gridApi.deselectAll();

                  _this11.marketModal.hide();

                  _this11.marketForm.reset();

                  _this11.dataservice.getMarkets().valueChanges.subscribe(function (result) {
                    console.log("getMarkets", result.data.markets.data);
                    _this11.rowData = result.data.markets.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this11.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this11.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            }
          }
        }, {
          key: "cropSubmit",
          value: function cropSubmit() {
            var _this12 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.cropForm.value);

            if (!this.disableButton) {
              if (this.file) {
                this.dataservice.upload(this.file).subscribe(function (response) {
                  var _a;

                  if (response.status == 200) {
                    console.log(response);

                    _this12.dataservice.UpdateCrop(_this12.cropForm.value, _this12.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                      resp = result.data;
                      console.log("response", result);

                      if (result.data.updateCrop) {
                        _this12.toastr.success("Success!");

                        _this12.gridApi.deselectAll();

                        _this12.cropModal.hide();

                        _this12.cropForm.reset();

                        _this12.btnLoading = false;

                        _this12.dataservice.getCrops().valueChanges.subscribe(function (result) {
                          console.log("getCrops", result.data.crops.data);
                          _this12.rowData = result.data.crops.data;
                        });
                      } else {
                        if (result.errors[0].extensions.error.name == "ValidationError") {
                          _this12.toastr.error("Can't be added as the value already exists");

                          _this12.btnLoading = false;
                        } else {
                          _this12.toastr.error("Failed. Please check the fields!");

                          _this12.btnLoading = false;
                        }
                      }
                    }, function (error) {
                      _this12.btnLoading = false;
                    });
                  }
                });
              } else {
                this.dataservice.UpdateCrop(this.cropForm.value, this.selectedRows[0].id, null).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.updateCrop) {
                    _this12.toastr.success("Success!");

                    _this12.gridApi.deselectAll();

                    _this12.cropModal.hide();

                    _this12.cropForm.reset();

                    _this12.dataservice.getCrops().valueChanges.subscribe(function (result) {
                      console.log("getCrops", result.data.crops.data);
                      _this12.rowData = result.data.crops.data;
                    });
                  } else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                      _this12.toastr.error("Can't be added as the value already exists");
                    } else {
                      _this12.toastr.error("Failed. Please check the fields!");
                    }
                  }
                });
              }
            } else {
              this.dataservice.upload(this.file).subscribe(function (response) {
                var _a;

                if (response.status == 200) {
                  console.log(response);

                  _this12.dataservice.AddCrop(_this12.cropForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id).subscribe(function (result) {
                    resp = result.data;
                    console.log("response", result);

                    if (result.data.createCrop) {
                      _this12.toastr.success("Success!");

                      _this12.gridApi.deselectAll();

                      _this12.cropModal.hide();

                      _this12.cropForm.reset();

                      _this12.dataservice.getCrops().valueChanges.subscribe(function (result) {
                        console.log("getCrops", result.data.crops.data);
                        _this12.rowData = result.data.crops.data;
                      });
                    } else {
                      if (result.errors[0].extensions.error.name == "ValidationError") {
                        _this12.toastr.error("Can't be added as the value already exists");
                      } else {
                        _this12.toastr.error("Failed. Please check the fields!");
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
            var _this13 = this;

            var resp = {};
            console.log(this.villageForm.value);

            if (!this.disableButton) {
              this.dataservice.Updatevillage(this.villageForm.value, this.selectedRows[0].id).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.updateVillage) {
                  _this13.toastr.success("Success!");

                  _this13.gridApi.deselectAll();

                  _this13.villageModal.hide();

                  _this13.villageForm.reset();

                  _this13.dataservice.getVillages().valueChanges.subscribe(function (result) {
                    console.log("getVillages", result.data.villages.data);
                    _this13.rowData = result.data.villages.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this13.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this13.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            } else {
              this.dataservice.Addvillage(this.villageForm.value).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.createVillage) {
                  _this13.toastr.success("Success!");

                  _this13.gridApi.deselectAll();

                  _this13.villageModal.hide();

                  _this13.villageForm.reset();

                  _this13.dataservice.getVillages().valueChanges.subscribe(function (result) {
                    console.log("getVillages", result.data.villages.data);
                    _this13.rowData = result.data.villages.data;
                  });
                } else {
                  if (result.errors[0].extensions.error.name == "ValidationError") {
                    _this13.toastr.error("Can't be added as the value already exists");
                  } else {
                    _this13.toastr.error("Failed. Please check the fields!");
                  }
                }
              });
            }
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord() {
            var _this14 = this;

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
              case "/masters/Villages":
                this.dataservice.deleteVillage(this.selectedRows[0].id).subscribe(function (result) {
                  console.log("response", result);

                  if (result.data.deleteVillage) {
                    _this14.toastr.success("Success!");

                    _this14.gridApi.deselectAll();

                    _this14.deleteModal.hide();

                    _this14.dataservice.getVillages().valueChanges.subscribe(function (result) {
                      _this14.rowData = result.data.villages.data;
                    });
                  } else {
                    _this14.toastr.error("Failed!");
                  }
                });
                break;

              case "/masters/Areas":
                this.dataservice.deleteArea(this.selectedRows[0].id).subscribe(function (result) {
                  console.log("response", result);

                  if (result.data.deleteArea) {
                    _this14.toastr.success("Success!");

                    _this14.gridApi.deselectAll();

                    _this14.deleteModal.hide();

                    _this14.dataservice.getAreas().valueChanges.subscribe(function (result) {
                      _this14.rowData = result.data.areas.data;
                    });
                  } else {
                    _this14.toastr.error("Failed!");
                  }
                });
                break;

              case "/masters/LGA":
                this.dataservice.deleteLGA(this.selectedRows[0].id).subscribe(function (result) {
                  console.log("response", result);

                  if (result.data.deleteLga) {
                    _this14.toastr.success("Success!");

                    _this14.gridApi.deselectAll();

                    _this14.deleteModal.hide();

                    _this14.dataservice.getLGAs().valueChanges.subscribe(function (result) {
                      _this14.rowData = result.data.lgas.data;
                    });
                  } else {
                    _this14.toastr.error("Failed!");
                  }
                });
                break;

              case "/masters/States":
                this.dataservice.deleteState(this.selectedRows[0].id).subscribe(function (result) {
                  console.log("response", result);

                  if (result.data.deleteState) {
                    _this14.toastr.success("Success!");

                    _this14.gridApi.deselectAll();

                    _this14.deleteModal.hide();

                    _this14.dataservice.getStates().valueChanges.subscribe(function (result) {
                      _this14.rowData = result.data.states.data;
                    });
                  } else {
                    _this14.toastr.error("Failed!");
                  }
                });
                break;

              case "/masters/Markets":
                this.dataservice.deleteMarket(this.selectedRows[0].id).subscribe(function (result) {
                  console.log("response", result);

                  if (result.data.deleteMarket) {
                    _this14.toastr.success("Success!");

                    _this14.gridApi.deselectAll();

                    _this14.deleteModal.hide();

                    _this14.dataservice.getMarkets().valueChanges.subscribe(function (result) {
                      _this14.rowData = result.data.markets.data;
                    });
                  } else {
                    _this14.toastr.error("Failed!");
                  }
                });
                break;

              case "/masters/Crops":
                this.dataservice.deleteCrop(this.selectedRows[0].id).subscribe(function (result) {
                  console.log("response", result);

                  if (result.data.deleteCrop) {
                    _this14.toastr.success("Success!");

                    _this14.gridApi.deselectAll();

                    _this14.deleteModal.hide();

                    _this14.dataservice.getCrops().valueChanges.subscribe(function (result) {
                      _this14.rowData = result.data.crops.data;
                    });
                  } else {
                    _this14.toastr.error("Failed!");
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
          args: ["stateModal"]
        }],
        lgaModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["lgaModal"]
        }],
        villageModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["villageModal"]
        }],
        marketModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["marketModal"]
        }],
        areaModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["areaModal"]
        }],
        cropModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["cropModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>{{ this.route.snapshot.data.title }} Master</h2>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"disableButton\"\r\n          class=\"btn btn-info\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\"\r\n        >\r\n          Edit\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          [disabled]=\"!disableButton\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Add New {{ this.route.snapshot.data.title }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [context]=\"context\"\r\n            [pagination]=\"true\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            [frameworkComponents]=\"frameworkComponents\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <!-- <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n            <button\r\n              type=\"button\"\r\n              [disabled]=\"disableNextButton\"\r\n              class=\"btn btn-primary float-right m-2\"\r\n              (click)=\"loadNext()\"\r\n            >\r\n              Next\r\n            </button>\r\n            <span class=\"float-right mt-3\"\r\n              >Page {{ meta?.pagination?.page }} of\r\n              {{ meta?.pagination?.pageCount }}</span\r\n            >\r\n            <button\r\n              type=\"button\"\r\n              [disabled]=\"disablePrevButton\"\r\n              class=\"btn btn-primary float-right m-2\"\r\n              (click)=\"loadPrev()\"\r\n            >\r\n              Prev\r\n            </button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #stateModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit State</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"stateModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"stateForm\" (ngSubmit)=\"stateSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">State</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n              placeholder=\"Enter State Name\"\r\n            />\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"stateModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !stateForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #lgaModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit LGA</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"lgaModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"lgaForm\" (ngSubmit)=\"lgaSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"lga\">LGA</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"lga\"\r\n              name=\"lga\"\r\n              formControlName=\"lga\"\r\n              placeholder=\"Enter LGA Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"lgaModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !lgaForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #areaModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit City</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"areaModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"areaForm\" (ngSubmit)=\"areaSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">City Name</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"area\"\r\n              name=\"area\"\r\n              formControlName=\"area\"\r\n              placeholder=\"Enter City Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">Postal code</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"PostalCode\"\r\n              name=\"PostalCode\"\r\n              formControlName=\"PostalCode\"\r\n              placeholder=\"Enter Postal Code\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n              (change)=\"filterLGA($event)\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lga\">LGA</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"lga\"\r\n              required\r\n              ngModel\r\n              name=\"lga\"\r\n              formControlName=\"lga\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"areaModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !areaForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #marketModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Market</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"marketModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"marketForm\" (ngSubmit)=\"marketSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"market\">Market</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"market\"\r\n              name=\"market\"\r\n              formControlName=\"market\"\r\n              placeholder=\"Enter Market Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"marketModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !marketForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #cropModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Crop</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"cropModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"cropForm\" (ngSubmit)=\"cropSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Crop</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"crop\"\r\n              name=\"crop\"\r\n              formControlName=\"crop\"\r\n              placeholder=\"Enter Crop Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Image\">Image</label>\r\n            <div>\r\n              <img\r\n                *ngIf=\"imageUrl\"\r\n                src=\"{{ imageUrl }}\"\r\n                width=\"100\"\r\n                height=\"100\"\r\n                style=\"object-fit: cover\"\r\n              />\r\n            </div>\r\n            <input\r\n              type=\"file\"\r\n              class=\"form-control\"\r\n              id=\"Image\"\r\n              accept=\".jpg,.jpeg,.JPEG,.png\"\r\n              name=\"Image\"\r\n              (change)=\"onChange($event)\"\r\n              formControlName=\"Image\"\r\n              placeholder=\"Choose image\"\r\n            />\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"cropModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !cropForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #villageModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Village</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"villageModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"villageForm\" (ngSubmit)=\"vilageSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"market\">Village Name</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"village\"\r\n              name=\"village\"\r\n              formControlName=\"village\"\r\n              placeholder=\"Enter Village Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              ngModel\r\n              name=\"state\"\r\n              (change)=\"filterLGA($event)\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lga\">LGA</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"lga\"\r\n              ngModel\r\n              (change)=\"filterArea($event)\"\r\n              name=\"lga\"\r\n              formControlName=\"lga\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">City</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"area\"\r\n              ngModel\r\n              name=\"area\"\r\n              formControlName=\"area\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"villageModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !villageForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #deleteModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"deleteModal.hide()\"\r\n        >\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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
          path: 'Areas',
          // canActivate: [AuthGuard],
          component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
          data: {
            roles: 'Areas',
            title: 'Areas'
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
      })], mastersRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-masters-masters-module-es5.js.map