(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-crop-prices-crop-prices-module"],{

/***/ "JugC":
/*!*****************************************************************!*\
  !*** ./src/app/views/crop-prices/crop-prices-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SoilTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoilTestRoutingModule", function() { return SoilTestRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _crop_prices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crop-prices.component */ "jgNo");




const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'cropprices'
            },
            {
                path: 'all',
                // canActivate: [AuthGuard],
                component: _crop_prices_component__WEBPACK_IMPORTED_MODULE_3__["CropPricesComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Crop Prices'
                }
            },
        ]
    }
];
let SoilTestRoutingModule = class SoilTestRoutingModule {
};
SoilTestRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SoilTestRoutingModule);



/***/ }),

/***/ "N8R/":
/*!*********************************************************!*\
  !*** ./src/app/views/crop-prices/crop-prices.module.ts ***!
  \*********************************************************/
/*! exports provided: CropPricesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPricesModule", function() { return CropPricesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _crop_prices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crop-prices.component */ "jgNo");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _crop_prices_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crop-prices-routing.module */ "JugC");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





// Dropdowns Component


// Buttons Routing

// Angular


let CropPricesModule = class CropPricesModule {
};
CropPricesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _crop_prices_routing_module__WEBPACK_IMPORTED_MODULE_7__["SoilTestRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _crop_prices_component__WEBPACK_IMPORTED_MODULE_4__["CropPricesComponent"],
        ]
    })
], CropPricesModule);



/***/ }),

/***/ "WNzA":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/crop-prices/crop-prices.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Crop Prices Home</h2>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-warning\"\r\n          data-toggle=\"modal\"\r\n          [disabled]=\"disableButton\"\r\n          (click)=\"openApproveModal()\"\r\n        >\r\n          Approve / Reject\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"disableButton\"\r\n          class=\"btn btn-info\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\"\r\n        >\r\n          Edit\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"!disableButton\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Add New Price\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"btn-group float-right mb-3\" dropdown>\r\n            <button\r\n              dropdownToggle\r\n              type=\"button\"\r\n              class=\"btn btn-primary dropdown-toggle\"\r\n            >\r\n              {{ selectedList }}<span class=\"caret\"></span>\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n              <li role=\"menuitem\">\r\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('All')\"\r\n                  >All</a\r\n                >\r\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Approvalpending')\"\r\n                  >Approval pending</a\r\n                >\r\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Rejected')\"\r\n                  >Rejected</a\r\n                >\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\"\r\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #cropPriceModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Crop Price</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"cropPriceModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"cropPriceForm\" (ngSubmit)=\"cropPriceSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">State</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"state\"\r\n              (change)=\"filterMarkets($event)\"\r\n              required\r\n              ngModel\r\n              name=\"state\"\r\n              formControlName=\"state\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"market\">Market</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"market\"\r\n              required\r\n              ngModel\r\n              name=\"market\"\r\n              formControlName=\"market\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of Markets\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"crop\">Crop</label>\r\n            <select\r\n              class=\"form-control\"\r\n              id=\"crop\"\r\n              required\r\n              ngModel\r\n              name=\"crop\"\r\n              formControlName=\"crop\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Price</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"Price\"\r\n              name=\"Price\"\r\n              formControlName=\"Price\"\r\n              placeholder=\"Enter price\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Unit</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              id=\"Unit\"\r\n              name=\"Unit\"\r\n              formControlName=\"Unit\"\r\n              placeholder=\"Enter unit\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Image\">Image</label>\r\n            <div>\r\n              <img\r\n                *ngIf=\"imageUrl\"\r\n                src=\"{{ imageUrl }}\"\r\n                width=\"100\"\r\n                height=\"100\"\r\n                style=\"object-fit: cover\"\r\n              />\r\n            </div>\r\n            <input\r\n              type=\"file\"\r\n              class=\"form-control\"\r\n              id=\"Image\"\r\n              accept=\".jpg,.jpeg,.JPEG,.png\"\r\n              name=\"Image\"\r\n              (change)=\"onChange($event)\"\r\n              formControlName=\"Image\"\r\n              placeholder=\"Choose image\"\r\n            />\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"cropPriceModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !cropPriceForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div\r\n  bsModal\r\n  #approveModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to approve this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"approveOrReject(true)\"\r\n        >\r\n          No! Reject.\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          (click)=\"approveOrReject(false)\"\r\n        >\r\n          Yes! Approve.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "jgNo":
/*!************************************************************!*\
  !*** ./src/app/views/crop-prices/crop-prices.component.ts ***!
  \************************************************************/
/*! exports provided: CropPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPricesComponent", function() { return CropPricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_crop_prices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./crop-prices.component.html */ "WNzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







// import { ActionRenderer } from "../../utils/StatusRenderer";



let CropPricesComponent = class CropPricesComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.disableButton = true;
        this.disableNextButton = false;
        this.disablePrevButton = true;
        this.selectedList = "All";
        this.listCheck = false;
        this.publicationState = "PREVIEW";
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
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [""],
        });
        // frameworkComponents = {
        //   statusRenderer: ActionRenderer,
        // };
        this.rowData = [];
        this.selectedRows = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.file = null;
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["CropPricesColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getCropPrices();
        this.getCrops();
        this.getMarkets();
        this.getStates();
    }
    getCropPrices() {
        this.dataservice
            .getCropPrices(1, this.pageSize, this.publicationState, this.toApprove, this.isRejected)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.rowData = result.data.cropPrices.data;
            this.meta = result.data.cropPrices.meta;
            if (((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                this.disablePrevButton = true;
                this.disableNextButton = true;
            }
            if (((_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < this.pageSize) {
                this.to = (_f = (_e = this.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
            }
        });
    }
    getCrops() {
        this.dataservice.getCrops().valueChanges.subscribe((result) => {
            this.Crops = result.data.crops.data;
        });
    }
    loadNext() {
        var _a, _b, _c, _d;
        this.count++;
        this.disablePrevButton = false;
        this.from = this.from + this.pageSize;
        this.to =
            this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total)
                ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;
        if (this.count === this.meta.pagination.pageCount) {
            this.disableNextButton = true;
        }
        this.dataservice
            .getCropPrices(this.count, this.pageSize, this.publicationState, this.toApprove)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.cropPrices.meta;
            this.rowData = result.data.cropPrices.data;
        });
    }
    loadPrev() {
        this.count--;
        if (this.count < this.meta.pagination.pageCount) {
            this.disableNextButton = false;
        }
        if (this.count === 1) {
            this.disablePrevButton = true;
        }
        this.from = this.from - this.pageSize;
        this.to = this.to - this.rowData.length;
        this.dataservice
            .getCropPrices(this.count, this.pageSize, this.publicationState, this.toApprove)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.cropPrices.meta;
            this.rowData = result.data.cropPrices.data;
        });
    }
    getStates() {
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    getMarkets(id) {
        this.dataservice.getMarkets(id).valueChanges.subscribe((result) => {
            console.log("getMarkets", result.data.markets.data);
            this.Markets = result.data.markets.data;
        });
    }
    filterMarkets(event) {
        this.getMarkets(event.target.value);
    }
    toggleCropPrices(data) {
        switch (data) {
            case "Rejected":
                this.selectedList = "Rejected";
                this.publicationState = "PREVIEW";
                this.toApprove = null;
                this.isRejected = true;
                this.getCropPrices();
                break;
            case "Approvalpending":
                this.selectedList = "Pending";
                this.publicationState = "PREVIEW";
                this.toApprove = null;
                this.isRejected = false;
                this.getCropPrices();
                break;
            case "All":
                this.selectedList = "All";
                this.publicationState = "PREVIEW";
                this.toApprove = undefined;
                this.isRejected = undefined;
                this.getCropPrices();
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
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }
    onRowClicked(event) {
        console.log("row", event.data);
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        if (this.selectedRows.length > 0) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
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
    approveOrReject(check) {
        let published = null;
        if (!check)
            published = new Date();
        this.dataservice
            .UpdateCropPrice(undefined, this.selectedRows[0].id, undefined, check, published)
            .subscribe((result) => {
            console.log("response", result);
            if (result.data.updateCropPrice) {
                this.toastr.success("Success!");
                this.getCropPrices();
                this.file = null;
                this.approveModal.hide();
                this.gridApi.deselectAll();
                this.btnLoading = false;
            }
        }, (error) => {
            this.toastr.error("Failed. Please check the fields!");
            this.btnLoading = false;
        });
    }
    openApproveModal() {
        this.approveModal.show();
    }
    openModal(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.imageUrl = null;
        this.cropPriceModal.show();
        if (data) {
            this.cropPriceForm = this.fb.group({
                crop: [
                    this.selectedRows[0].attributes.crop.data.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
                state: [
                    this.selectedRows[0].attributes.state.data.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
                market: [
                    this.selectedRows[0].attributes.market.data.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
                Price: [this.selectedRows[0].attributes.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Unit: [this.selectedRows[0].attributes.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: [
                    (_b = (_a = this.selectedRows[0].attributes.Image) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            });
            this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Image) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? `${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}` + ((_h = (_g = (_f = this.selectedRows[0].attributes.Image) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url)
                : null;
        }
        else {
            this.cropPriceForm = this.fb.group({
                crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            this.imageUrl = null;
        }
    }
    cropPriceSubmit() {
        let resp = {};
        this.btnLoading = true;
        console.log(this.cropPriceForm.value);
        if (!this.disableButton) {
            if (this.file) {
                this.dataservice.upload(this.file).subscribe((response) => {
                    var _a;
                    if (response.status == 200) {
                        console.log(response);
                        this.dataservice
                            .UpdateCropPrice(this.cropPriceForm.value, this.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                            .subscribe((result) => {
                            resp = result.data;
                            console.log("response", result);
                            if (result.data.updateCropPrice) {
                                this.toastr.success("Success!");
                                this.getCropPrices();
                                this.file = null;
                                this.cropPriceModal.hide();
                                this.gridApi.deselectAll();
                                this.btnLoading = false;
                            }
                        }, (error) => {
                            this.toastr.error("Failed. Please check the fields!");
                            this.btnLoading = false;
                        });
                    }
                });
            }
            else {
                this.dataservice
                    .UpdateCropPrice(this.cropPriceForm.value, this.selectedRows[0].id, null)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.updateCropPrice) {
                        this.toastr.success("Success!");
                        this.getCropPrices();
                        this.file = null;
                        this.cropPriceModal.hide();
                        this.gridApi.deselectAll();
                        this.btnLoading = false;
                    }
                }, (error) => {
                    this.toastr.error("Failed. Please check the fields!");
                    this.btnLoading = false;
                });
            }
        }
        else {
            this.dataservice.upload(this.file).subscribe((response) => {
                var _a;
                if (response.status == 200) {
                    console.log(response);
                    this.dataservice
                        .AddCropPrice(this.cropPriceForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                        .subscribe((result) => {
                        resp = result.data;
                        console.log("response", result);
                        if (result.data.createCropPrice) {
                            this.toastr.success("Success!");
                            this.getCropPrices();
                            this.file = null;
                            this.cropPriceModal.hide();
                            this.gridApi.deselectAll();
                        }
                        this.btnLoading = false;
                    }, (error) => {
                        this.toastr.error("Failed. Please check the fields!");
                        this.btnLoading = false;
                    });
                }
                else {
                    this.toastr.error("Image failed to upload!");
                }
            });
        }
    }
};
CropPricesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
CropPricesComponent.propDecorators = {
    cropPriceModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["cropPriceModal",] }],
    approveModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["approveModal",] }]
};
CropPricesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_crop_prices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], CropPricesComponent);



/***/ })

}]);
//# sourceMappingURL=views-crop-prices-crop-prices-module-es2017.js.map