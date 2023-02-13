(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-masters-masters-module"],{

/***/ "NPE9":
/*!*************************************************!*\
  !*** ./src/app/views/masters/masters.module.ts ***!
  \*************************************************/
/*! exports provided: MastersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastersModule", function() { return MastersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _masters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./masters.component */ "a/en");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _masters_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./masters-routing.module */ "zU92");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/StatusRenderer */ "MYrn");





// Dropdowns Component


// Buttons Routing

// Angular



let MastersModule = class MastersModule {
};
MastersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _masters_routing_module__WEBPACK_IMPORTED_MODULE_7__["mastersRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _masters_component__WEBPACK_IMPORTED_MODULE_4__["mastersComponent"],
            _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_10__["ActionRenderer"]
        ]
    })
], MastersModule);



/***/ }),

/***/ "a/en":
/*!****************************************************!*\
  !*** ./src/app/views/masters/masters.component.ts ***!
  \****************************************************/
/*! exports provided: mastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mastersComponent", function() { return mastersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_masters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./masters.component.html */ "ejdE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/StatusRenderer */ "MYrn");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");











let mastersComponent = class mastersComponent {
    constructor(dataservice, route, router, fb, toastr) {
        this.dataservice = dataservice;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.columnDefs = [];
        this.loading = true;
        this.disableButton = true;
        this.btnLoading = false;
        // disableNextButton = false;
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
            statusRenderer: new _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_7__["ActionRenderer"](),
        };
        this.stateForm = this.fb.group({
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.lgaForm = this.fb.group({
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.areaForm = this.fb.group({
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            PostalCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.marketForm = this.fb.group({
            market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.cropForm = this.fb.group({
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.villageForm = this.fb.group({
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: [""],
            state: [""],
        });
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.selectedRows = [];
        this.context = { componentParent: this };
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router.url);
        switch (this.router.url) {
            case "/masters/Villages":
                this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["VillageMasterColumn"]];
                this.dataservice.getVillages().valueChanges.subscribe((result) => {
                    console.log("getVillages", result.data.villages.data);
                    this.rowData = result.data.villages.data;
                    // this.meta = result.data.villages.meta;
                    // if (this.meta?.pagination?.pageCount <= 1) {
                    //   this.disablePrevButton = true;
                    //   this.disableNextButton = true;
                    // }
                });
                break;
            case "/masters/Cities":
                this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["AreaMasterColumn"]];
                this.dataservice.getAreas().valueChanges.subscribe((result) => {
                    console.log("getAreas", result.data.areas.data);
                    this.rowData = result.data.areas.data;
                    // this.meta = result.data.areas.meta;
                    // if (this.meta?.pagination?.pageCount <= 1) {
                    //   this.disablePrevButton = true;
                    //   this.disableNextButton = true;
                    // }
                });
                break;
            case "/masters/LGA":
                this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["LGAMasterColumn"]];
                this.dataservice.getLGAs().valueChanges.subscribe((result) => {
                    console.log("getLGAs", result.data.lgas.data);
                    this.rowData = result.data.lgas.data;
                    // this.meta = result.data.lgas.meta;
                    // if (this.meta?.pagination?.pageCount <= 1) {
                    //   this.disablePrevButton = true;
                    //   this.disableNextButton = true;
                    // }
                });
                break;
            case "/masters/States":
                this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["StateMasterColumn"]];
                this.dataservice.getStates().valueChanges.subscribe((result) => {
                    console.log("getStates", result.data.states.data);
                    this.rowData = result.data.states.data;
                    // this.meta = result.data.states.meta;
                    // if (this.meta?.pagination?.pageCount <= 1) {
                    //   this.disablePrevButton = true;
                    //   this.disableNextButton = true;
                    // }
                });
                break;
            case "/masters/Markets":
                this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["MarketMasterColumn"]];
                this.dataservice.getMarkets().valueChanges.subscribe((result) => {
                    console.log("getMarkets", result.data.markets.data);
                    this.rowData = result.data.markets.data;
                    // this.meta = result.data.markets.meta;
                    // if (this.meta?.pagination?.pageCount <= 1) {
                    //   this.disablePrevButton = true;
                    //   this.disableNextButton = true;
                    // }
                });
                break;
            case "/masters/Crops":
                this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["CropMasterColumn"]];
                this.dataservice.getCrops().valueChanges.subscribe((result) => {
                    console.log("getCrops", result.data.crops.data);
                    this.rowData = result.data.crops.data;
                    // this.meta = result.data.crops.meta;
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
    downloadExcel() {
        let masterUrl = "";
        switch (this.router.url) {
            case "/masters/Villages":
                masterUrl = "villages";
                break;
            case "/masters/States":
                masterUrl = "states";
                break;
            case "/masters/Cities":
                masterUrl = "cities";
                break;
            case "/masters/LGA":
                masterUrl = "lgas";
                break;
            case "/masters/Markets":
                masterUrl = "markets";
                break;
            case "/masters/Crops":
                masterUrl = "crops";
                break;
        }
        let resp = {};
        this.btnLoading = true;
        this.dataservice
            .downloadMaster(masterUrl)
            .subscribe((result) => {
            var _a;
            resp = result.body;
            console.log(result);
            if (result.status === 200 && result.body.status == "Success") {
                this.toastr.success(result.body.message);
                this.btnLoading = false;
                window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl}${(_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path}`, "_blank");
            }
            else {
                this.btnLoading = false;
                this.toastr.error(result.body.message);
            }
        });
    }
    getCrops() {
        this.dataservice.getCrops().valueChanges.subscribe((result) => {
            console.log("getCrops", result.data.crops.data);
            this.Crops = result.data.crops.data;
        });
    }
    getStates() {
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    getLGAs(stateid) {
        this.dataservice.getLGAs(stateid).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(lgaid) {
        this.dataservice.getAreas(lgaid).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getVillages(areaid) {
        this.dataservice
            .getVillages(areaid)
            .valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    getMarkets() {
        this.dataservice.getMarkets().valueChanges.subscribe((result) => {
            console.log("getMarkets", result.data.markets.data);
            this.Markets = result.data.markets.data;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }
    onRowClicked(event) {
        console.log("row", event);
        alert("Parent Component Method from " + event + "!");
        // this.router.navigate(
        //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
        //   {
        //     state: { data: event.data },
        //   }
        // );
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        if (this.selectedRows.length > 0) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
        console.log(this.selectedRows, this.selectedRows[0].attributes.Name);
        // this.router.navigate(
        //   ["/cropprices/kp_customer_details", selectedRows[0].id, this.router.url],
        //   {
        //     state: { data: selectedRows },
        //   }
        // );
    }
    openModal(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        switch (this.router.url) {
            case "/masters/Villages":
                this.villageModal.show();
                if (data) {
                    this.villageForm = this.fb.group({
                        village: [
                            this.selectedRows[0].attributes.Name,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                        area: [
                            Number(this.selectedRows[0].attributes.area.data.id),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                        lga: [
                            Number(this.selectedRows[0].attributes.area.data.attributes.lga.data.id),
                        ],
                        state: [
                            Number(this.selectedRows[0].attributes.area.data.attributes.lga.data
                                .attributes.state.data.id),
                        ],
                    });
                }
                else {
                    this.villageForm = this.fb.group({
                        village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        lga: [""],
                        state: [""],
                    });
                }
                break;
            case "/masters/Cities":
                this.areaModal.show();
                if (data) {
                    this.areaForm = this.fb.group({
                        area: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        PostalCode: [
                            this.selectedRows[0].attributes.PostalCode,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                        lga: [
                            Number(this.selectedRows[0].attributes.lga.data.id),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                        state: [
                            Number(this.selectedRows[0].attributes.lga.data.attributes.state.data
                                .id),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                    });
                }
                else {
                    this.areaForm = this.fb.group({
                        area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        PostalCode: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                }
                break;
            case "/masters/LGA":
                this.lgaModal.show();
                if (data) {
                    this.lgaForm = this.fb.group({
                        lga: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        state: [
                            Number(this.selectedRows[0].attributes.state.data.id),
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                    });
                }
                else {
                    this.lgaForm = this.fb.group({
                        lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                }
                break;
            case "/masters/States":
                this.stateModal.show();
                if (data) {
                    this.stateForm = this.fb.group({
                        state: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                }
                else {
                    this.stateForm = this.fb.group({
                        state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                }
                break;
            case "/masters/Markets":
                this.marketModal.show();
                if (data) {
                    this.marketForm = this.fb.group({
                        market: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        state: [
                            this.selectedRows[0].attributes.state.data.id,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                    });
                }
                else {
                    this.marketForm = this.fb.group({
                        market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                }
                break;
            case "/masters/Crops":
                this.cropModal.show();
                if (data) {
                    this.cropForm = this.fb.group({
                        crop: [this.selectedRows[0].attributes.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        Image: [
                            (_b = (_a = this.selectedRows[0].attributes.Image) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id,
                            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                        ],
                    });
                    this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Image) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? `${_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl}` + ((_h = (_g = (_f = this.selectedRows[0].attributes.Image) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url)
                        : null;
                }
                else {
                    this.cropForm = this.fb.group({
                        crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                        Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                    this.imageUrl = null;
                }
                break;
        }
    }
    // On file Select
    onChange(event) {
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
    }
    // loadNext() {
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
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    filterArea(event) {
        this.getAreas(event.target.value);
    }
    stateSubmit() {
        let resp = {};
        console.log(this.stateForm.value);
        if (!this.disableButton) {
            this.dataservice
                .UpdateState(this.stateForm.value, this.selectedRows[0].id)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateState) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.stateModal.hide();
                    this.stateForm.reset();
                    this.dataservice
                        .getStates()
                        .valueChanges.subscribe((result) => {
                        console.log("getStates", result.data.states.data);
                        this.rowData = result.data.states.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
        else {
            this.dataservice.AddStates(this.stateForm.value).subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createState) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.stateModal.hide();
                    this.stateForm.reset();
                    this.dataservice
                        .getStates()
                        .valueChanges.subscribe((result) => {
                        console.log("getStates", result.data.states.data);
                        this.rowData = result.data.states.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            }, (error) => {
                console.log(error);
                this.toastr.error("Failed.");
            });
        }
    }
    lgaSubmit() {
        let resp = {};
        console.log(this.lgaForm.value);
        if (!this.disableButton) {
            this.dataservice
                .UpdateLGA(this.lgaForm.value, this.selectedRows[0].id)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateLga) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.lgaModal.hide();
                    this.lgaForm.reset();
                    this.dataservice.getLGAs().valueChanges.subscribe((result) => {
                        console.log("getLGAs", result.data.lgas.data);
                        this.rowData = result.data.lgas.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
        else {
            this.dataservice.AddLGA(this.lgaForm.value).subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createLga) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.lgaModal.hide();
                    this.lgaForm.reset();
                    this.dataservice.getLGAs().valueChanges.subscribe((result) => {
                        console.log("getLGAs", result.data.lgas.data);
                        this.rowData = result.data.lgas.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
    }
    areaSubmit() {
        let resp = {};
        console.log(this.areaForm.value);
        if (!this.disableButton) {
            this.dataservice
                .UpdateArea(this.areaForm.value, this.selectedRows[0].id)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateArea) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.areaModal.hide();
                    this.areaForm.reset();
                    this.dataservice
                        .getAreas()
                        .valueChanges.subscribe((result) => {
                        console.log("getAreas", result.data.areas.data);
                        this.rowData = result.data.areas.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
        else {
            this.dataservice.AddArea(this.areaForm.value).subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createArea) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.areaModal.hide();
                    this.areaForm.reset();
                    this.dataservice.getAreas().valueChanges.subscribe((result) => {
                        console.log("getAreas", result.data.areas.data);
                        this.rowData = result.data.areas.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
    }
    marketSubmit() {
        let resp = {};
        console.log(this.marketForm.value);
        if (!this.disableButton) {
            this.dataservice
                .UpdateMarket(this.marketForm.value, this.selectedRows[0].id)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateMarket) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.marketModal.hide();
                    this.marketForm.reset();
                    this.dataservice
                        .getMarkets()
                        .valueChanges.subscribe((result) => {
                        console.log("getMarkets", result.data.markets.data);
                        this.rowData = result.data.markets.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
        else {
            this.dataservice
                .AddMarket(this.marketForm.value)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createMarket) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.marketModal.hide();
                    this.marketForm.reset();
                    this.dataservice
                        .getMarkets()
                        .valueChanges.subscribe((result) => {
                        console.log("getMarkets", result.data.markets.data);
                        this.rowData = result.data.markets.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
    }
    cropSubmit() {
        let resp = {};
        this.btnLoading = true;
        console.log(this.cropForm.value);
        if (!this.disableButton) {
            if (this.file) {
                this.dataservice.upload(this.file).subscribe((response) => {
                    var _a;
                    if (response.status == 200) {
                        console.log(response);
                        this.dataservice
                            .UpdateCrop(this.cropForm.value, this.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                            .subscribe((result) => {
                            resp = result.data;
                            console.log("response", result);
                            if (result.data.updateCrop) {
                                this.toastr.success("Success!");
                                this.gridApi.deselectAll();
                                this.cropModal.hide();
                                this.cropForm.reset();
                                this.btnLoading = false;
                                this.dataservice
                                    .getCrops()
                                    .valueChanges.subscribe((result) => {
                                    console.log("getCrops", result.data.crops.data);
                                    this.rowData = result.data.crops.data;
                                });
                            }
                            else {
                                if (result.errors[0].extensions.error.name ==
                                    "ValidationError") {
                                    this.toastr.error("Can't be added as the value already exists");
                                    this.btnLoading = false;
                                }
                                else {
                                    this.toastr.error("Failed. Please check the fields!");
                                    this.btnLoading = false;
                                }
                            }
                        }, (error) => {
                            this.btnLoading = false;
                        });
                    }
                });
            }
            else {
                this.dataservice
                    .UpdateCrop(this.cropForm.value, this.selectedRows[0].id, null)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.updateCrop) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.cropModal.hide();
                        this.cropForm.reset();
                        this.dataservice
                            .getCrops()
                            .valueChanges.subscribe((result) => {
                            console.log("getCrops", result.data.crops.data);
                            this.rowData = result.data.crops.data;
                        });
                    }
                    else {
                        if (result.errors[0].extensions.error.name == "ValidationError") {
                            this.toastr.error("Can't be added as the value already exists");
                        }
                        else {
                            this.toastr.error("Failed. Please check the fields!");
                        }
                    }
                });
            }
        }
        else {
            this.dataservice.upload(this.file).subscribe((response) => {
                var _a;
                if (response.status == 200) {
                    console.log(response);
                    this.dataservice
                        .AddCrop(this.cropForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                        .subscribe((result) => {
                        resp = result.data;
                        console.log("response", result);
                        if (result.data.createCrop) {
                            this.toastr.success("Success!");
                            this.gridApi.deselectAll();
                            this.cropModal.hide();
                            this.cropForm.reset();
                            this.dataservice
                                .getCrops()
                                .valueChanges.subscribe((result) => {
                                console.log("getCrops", result.data.crops.data);
                                this.rowData = result.data.crops.data;
                            });
                        }
                        else {
                            if (result.errors[0].extensions.error.name == "ValidationError") {
                                this.toastr.error("Can't be added as the value already exists");
                            }
                            else {
                                this.toastr.error("Failed. Please check the fields!");
                            }
                        }
                    });
                }
            });
        }
    }
    vilageSubmit() {
        let resp = {};
        console.log(this.villageForm.value);
        if (!this.disableButton) {
            this.dataservice
                .Updatevillage(this.villageForm.value, this.selectedRows[0].id)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateVillage) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.villageModal.hide();
                    this.villageForm.reset();
                    this.dataservice
                        .getVillages()
                        .valueChanges.subscribe((result) => {
                        console.log("getVillages", result.data.villages.data);
                        this.rowData = result.data.villages.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
        else {
            this.dataservice
                .Addvillage(this.villageForm.value)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createVillage) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.villageModal.hide();
                    this.villageForm.reset();
                    this.dataservice
                        .getVillages()
                        .valueChanges.subscribe((result) => {
                        console.log("getVillages", result.data.villages.data);
                        this.rowData = result.data.villages.data;
                    });
                }
                else {
                    if (result.errors[0].extensions.error.name == "ValidationError") {
                        this.toastr.error("Can't be added as the value already exists");
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                }
            });
        }
    }
    deleteRecord() {
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
                this.dataservice
                    .deleteVillage(this.selectedRows[0].id)
                    .subscribe((result) => {
                    console.log("response", result);
                    if (result.data.deleteVillage) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.deleteModal.hide();
                        this.dataservice
                            .getVillages()
                            .valueChanges.subscribe((result) => {
                            this.rowData = result.data.villages.data;
                        });
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
                break;
            case "/masters/Cities":
                this.dataservice
                    .deleteArea(this.selectedRows[0].id)
                    .subscribe((result) => {
                    console.log("response", result);
                    if (result.data.deleteArea) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.deleteModal.hide();
                        this.dataservice
                            .getAreas()
                            .valueChanges.subscribe((result) => {
                            this.rowData = result.data.areas.data;
                        });
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
                break;
            case "/masters/LGA":
                this.dataservice
                    .deleteLGA(this.selectedRows[0].id)
                    .subscribe((result) => {
                    console.log("response", result);
                    if (result.data.deleteLga) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.deleteModal.hide();
                        this.dataservice
                            .getLGAs()
                            .valueChanges.subscribe((result) => {
                            this.rowData = result.data.lgas.data;
                        });
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
                break;
            case "/masters/States":
                this.dataservice
                    .deleteState(this.selectedRows[0].id)
                    .subscribe((result) => {
                    console.log("response", result);
                    if (result.data.deleteState) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.deleteModal.hide();
                        this.dataservice
                            .getStates()
                            .valueChanges.subscribe((result) => {
                            this.rowData = result.data.states.data;
                        });
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
                break;
            case "/masters/Markets":
                this.dataservice
                    .deleteMarket(this.selectedRows[0].id)
                    .subscribe((result) => {
                    console.log("response", result);
                    if (result.data.deleteMarket) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.deleteModal.hide();
                        this.dataservice
                            .getMarkets()
                            .valueChanges.subscribe((result) => {
                            this.rowData = result.data.markets.data;
                        });
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
                break;
            case "/masters/Crops":
                this.dataservice
                    .deleteCrop(this.selectedRows[0].id)
                    .subscribe((result) => {
                    console.log("response", result);
                    if (result.data.deleteCrop) {
                        this.toastr.success("Success!");
                        this.gridApi.deselectAll();
                        this.deleteModal.hide();
                        this.dataservice
                            .getCrops()
                            .valueChanges.subscribe((result) => {
                            this.rowData = result.data.crops.data;
                        });
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
                break;
        }
    }
};
mastersComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
mastersComponent.propDecorators = {
    stateModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["stateModal",] }],
    lgaModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["lgaModal",] }],
    villageModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["villageModal",] }],
    marketModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["marketModal",] }],
    areaModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["areaModal",] }],
    cropModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["cropModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }]
};
mastersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_masters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], mastersComponent);



/***/ }),

/***/ "ejdE":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/masters/masters.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>{{ this.route.snapshot.data.title }} Master</h2>\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          [disabled]=\"disableButton\"\n          (click)=\"deleteModal.show()\"\n        >\n          Delete\n        </button>\n        <button\n          type=\"button\"\n          [disabled]=\"disableButton\"\n          class=\"btn btn-info\"\n          data-toggle=\"modal\"\n          (click)=\"openModal('Edit')\"\n        >\n          Edit\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!disableButton\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New {{ this.route.snapshot.data.title }}\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [context]=\"context\"\n            [pagination]=\"true\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            [frameworkComponents]=\"frameworkComponents\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <!-- <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\n            <button\n              type=\"button\"\n              [disabled]=\"disableNextButton\"\n              class=\"btn btn-primary float-right m-2\"\n              (click)=\"loadNext()\"\n            >\n              Next\n            </button>\n            <span class=\"float-right mt-3\"\n              >Page {{ meta?.pagination?.page }} of\n              {{ meta?.pagination?.pageCount }}</span\n            >\n            <button\n              type=\"button\"\n              [disabled]=\"disablePrevButton\"\n              class=\"btn btn-primary float-right m-2\"\n              (click)=\"loadPrev()\"\n            >\n              Prev\n            </button> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #stateModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit State</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"stateModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"stateForm\" (ngSubmit)=\"stateSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">State</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"state\"\n              name=\"state\"\n              formControlName=\"state\"\n              placeholder=\"Enter State Name\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"stateModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !stateForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #lgaModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit LGA</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"lgaModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"lgaForm\" (ngSubmit)=\"lgaSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"lga\"\n              name=\"lga\"\n              formControlName=\"lga\"\n              placeholder=\"Enter LGA Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"lgaModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !lgaForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #areaModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit City</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"areaModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"areaForm\" (ngSubmit)=\"areaSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"area\">City Name</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"area\"\n              name=\"area\"\n              formControlName=\"area\"\n              placeholder=\"Enter City Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"area\">Postal code</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"PostalCode\"\n              name=\"PostalCode\"\n              formControlName=\"PostalCode\"\n              placeholder=\"Enter Postal Code\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n              (change)=\"filterLGA($event)\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <select\n              class=\"form-control\"\n              id=\"lga\"\n              required\n              ngModel\n              name=\"lga\"\n              formControlName=\"lga\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"areaModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !areaForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #marketModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Market</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"marketModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"marketForm\" (ngSubmit)=\"marketSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"market\">Market</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"market\"\n              name=\"market\"\n              formControlName=\"market\"\n              placeholder=\"Enter Market Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              required\n              ngModel\n              name=\"state\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"marketModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !marketForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #cropModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Crop</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"cropModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"cropForm\" (ngSubmit)=\"cropSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"name\">Crop</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"crop\"\n              name=\"crop\"\n              formControlName=\"crop\"\n              placeholder=\"Enter Crop Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Image\">Image</label>\n            <div>\n              <img\n                *ngIf=\"imageUrl\"\n                src=\"{{ imageUrl }}\"\n                width=\"100\"\n                height=\"100\"\n                style=\"object-fit: cover\"\n              />\n            </div>\n            <input\n              type=\"file\"\n              class=\"form-control\"\n              id=\"Image\"\n              accept=\".jpg,.jpeg,.JPEG,.png\"\n              name=\"Image\"\n              (change)=\"onChange($event)\"\n              formControlName=\"Image\"\n              placeholder=\"Choose image\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"cropModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !cropForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div\n  bsModal\n  #villageModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Village</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"villageModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"villageForm\" (ngSubmit)=\"vilageSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"market\">Village Name</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"village\"\n              name=\"village\"\n              formControlName=\"village\"\n              placeholder=\"Enter Village Name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"state\">State</label>\n            <select\n              class=\"form-control\"\n              id=\"state\"\n              ngModel\n              name=\"state\"\n              (change)=\"filterLGA($event)\"\n              formControlName=\"state\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <select\n              class=\"form-control\"\n              id=\"lga\"\n              ngModel\n              (change)=\"filterArea($event)\"\n              name=\"lga\"\n              formControlName=\"lga\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"area\">City</label>\n            <select\n              class=\"form-control\"\n              id=\"area\"\n              ngModel\n              name=\"area\"\n              formControlName=\"area\"\n            >\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"villageModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !villageForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #deleteModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        Do you want to delete this record?\n      </div>\n      <div class=\"modal-footer justify-content-around\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary\"\n          (click)=\"deleteModal.hide()\"\n        >\n          No! Cancel.\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\n          Yes! Delete.\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "zU92":
/*!*********************************************************!*\
  !*** ./src/app/views/masters/masters-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: mastersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mastersRoutingModule", function() { return mastersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _masters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./masters.component */ "a/en");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'masters'
            },
            {
                path: 'States',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'States',
                    title: 'States'
                }
            },
            {
                path: 'LGA',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'LGA',
                    title: 'LGA'
                }
            },
            {
                path: 'Cities',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'Cities',
                    title: 'Cities'
                }
            },
            {
                path: 'Villages',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'Villages',
                    title: 'Villages'
                }
            },
            {
                path: 'Markets',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'Markets',
                    title: 'Markets'
                }
            },
            {
                path: 'Crops',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'Crops',
                    title: 'Crops'
                }
            }
        ]
    }
];
let mastersRoutingModule = class mastersRoutingModule {
};
mastersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], mastersRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-masters-masters-module-es2017.js.map