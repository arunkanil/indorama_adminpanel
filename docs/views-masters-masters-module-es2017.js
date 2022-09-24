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
            case "/masters/Areas":
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
            case "/masters/Areas":
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
                    });
                }
                else {
                    this.cropForm = this.fb.group({
                        crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                    });
                }
                break;
        }
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
        console.log(this.cropForm.value);
        if (!this.disableButton) {
            this.dataservice
                .UpdateCrop(this.cropForm.value, this.selectedRows[0].id)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateCrop) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.cropModal.hide();
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
        else {
            this.dataservice.AddCrop(this.cropForm.value).subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createCrop) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.cropModal.hide();
                    this.dataservice.getCrops().valueChanges.subscribe((result) => {
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
            case "/masters/Areas":
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>{{ this.route.snapshot.data.title }} Master</h2>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"disableButton\"\r\n          class=\"btn btn-info\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\"\r\n        >\r\n          Edit\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          [disabled]=\"!disableButton\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Add New {{ this.route.snapshot.data.title }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [context]=\"context\"\r\n            [pagination]=\"true\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            [frameworkComponents]=\"frameworkComponents\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <!-- <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n            <button\r\n              type=\"button\"\r\n              [disabled]=\"disableNextButton\"\r\n              class=\"btn btn-primary float-right m-2\"\r\n              (click)=\"loadNext()\"\r\n            >\r\n              Next\r\n            </button>\r\n            <span class=\"float-right mt-3\"\r\n              >Page {{ meta?.pagination?.page }} of\r\n              {{ meta?.pagination?.pageCount }}</span\r\n            >\r\n            <button\r\n              type=\"button\"\r\n              [disabled]=\"disablePrevButton\"\r\n              class=\"btn btn-primary float-right m-2\"\r\n              (click)=\"loadPrev()\"\r\n            >\r\n              Prev\r\n            </button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #stateModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit State</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"stateModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"stateForm\" (ngSubmit)=\"stateSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">State</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n              placeholder=\"Enter State Name\"\r\n            />\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"stateModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !stateForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #lgaModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit LGA</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"lgaModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"lgaForm\" (ngSubmit)=\"lgaSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"lga\">LGA</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"lga\"\r\n              name=\"lga\"\r\n              formControlName=\"lga\"\r\n              placeholder=\"Enter LGA Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"lgaModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !lgaForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #areaModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Area</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"areaModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"areaForm\" (ngSubmit)=\"areaSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">Area Name</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"area\"\r\n              name=\"area\"\r\n              formControlName=\"area\"\r\n              placeholder=\"Enter Area Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">Postal code</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"PostalCode\"\r\n              name=\"PostalCode\"\r\n              formControlName=\"PostalCode\"\r\n              placeholder=\"Enter Postal Code\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n              (change)=\"filterLGA($event)\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lga\">LGA</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"lga\"\r\n              required\r\n              ngModel\r\n              name=\"lga\"\r\n              formControlName=\"lga\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"areaModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !areaForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #marketModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Market</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"marketModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"marketForm\" (ngSubmit)=\"marketSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"market\">Market</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"market\"\r\n              name=\"market\"\r\n              formControlName=\"market\"\r\n              placeholder=\"Enter Market Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"marketModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !marketForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #cropModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Crop</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"cropModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"cropForm\" (ngSubmit)=\"cropSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Crop</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"crop\"\r\n              name=\"crop\"\r\n              formControlName=\"crop\"\r\n              placeholder=\"Enter Crop Name\"\r\n            />\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"cropModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !cropForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #villageModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Village</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"villageModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"villageForm\" (ngSubmit)=\"vilageSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"market\">Village Name</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"village\"\r\n              name=\"village\"\r\n              formControlName=\"village\"\r\n              placeholder=\"Enter Village Name\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              ngModel\r\n              name=\"state\"\r\n              (change)=\"filterLGA($event)\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"lga\">LGA</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"lga\"\r\n              ngModel\r\n              (change)=\"filterArea($event)\"\r\n              name=\"lga\"\r\n              formControlName=\"lga\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"area\">Area</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"area\"\r\n              ngModel\r\n              name=\"area\"\r\n              formControlName=\"area\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"villageModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !villageForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #deleteModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"deleteModal.hide()\"\r\n        >\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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
                path: 'Areas',
                // canActivate: [AuthGuard],
                component: _masters_component__WEBPACK_IMPORTED_MODULE_3__["mastersComponent"],
                data: {
                    roles: 'Areas',
                    title: 'Areas'
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