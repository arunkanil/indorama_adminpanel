(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sms-campaigns-sms-campaigns-module"],{

/***/ "0OHv":
/*!*************************************************************!*\
  !*** ./src/app/views/sms-campaigns/sms-campaigns.module.ts ***!
  \*************************************************************/
/*! exports provided: SMSCampaignsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMSCampaignsModule", function() { return SMSCampaignsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _sms_campaigns_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sms-campaigns.component */ "7yLV");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _sms_campaigns_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sms-campaigns-routing.module */ "cx32");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _sms_campaigns_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sms-campaigns-detail.component */ "CckM");





// Dropdowns Component


// Buttons Routing

// Angular



let SMSCampaignsModule = class SMSCampaignsModule {
};
SMSCampaignsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _sms_campaigns_routing_module__WEBPACK_IMPORTED_MODULE_7__["SMSCampaignsRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _sms_campaigns_component__WEBPACK_IMPORTED_MODULE_4__["SMSCampaignsComponent"],
            _sms_campaigns_detail_component__WEBPACK_IMPORTED_MODULE_10__["SMSCampaignsDetailComponent"]
        ]
    })
], SMSCampaignsModule);



/***/ }),

/***/ "6DdS":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/sms-campaigns/sms-campaigns.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>SMS Campaigns</h2>\r\n      <div>\r\n        <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          [disabled]=\"disableButton\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Delete\r\n        </button> -->\r\n        <!-- <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"!disableButton\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Create new campaign\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #messageModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">New Campaign</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"messageModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label class=\"switch\">\r\n                  <input\r\n                    type=\"checkbox\"\r\n                    id=\"isAllFarmers\"\r\n                    maxlength=\"160\"\r\n                    name=\"isAllFarmers\"\r\n                    formControlName=\"isAllFarmers\"\r\n                  />\r\n                  <div class=\"slider round\">\r\n                    <span class=\"on\">Filter</span>\r\n                    <span class=\"off\">All</span>\r\n                  </div>\r\n                </label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"messageForm.value?.isAllFarmers\" class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"state\"\r\n                  ngModel\r\n                  (change)=\"filterLGA($event)\"\r\n                  name=\"state\"\r\n                  formControlName=\"state\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"area\">City</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"area\"\r\n                  ngModel\r\n                  (change)=\"filterVillage($event)\"\r\n                  name=\"area\"\r\n                  formControlName=\"area\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"lga\">LGA</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"lga\"\r\n                  ngModel\r\n                  (change)=\"filterArea($event)\"\r\n                  name=\"lga\"\r\n                  formControlName=\"lga\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"village\">Village</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"village\"\r\n                  ngModel\r\n                  name=\"village\"\r\n                  formControlName=\"village\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"form-group\">Farmers selected : {{ NoOfContacts }}</div>\r\n          <div class=\"form-group\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-secondary\"\r\n              (click)=\"clearSearch()\"\r\n            >\r\n              Clear\r\n            </button>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-primary ml-2\"\r\n              (click)=\"getUsers()\"\r\n            >\r\n              <span\r\n                *ngIf=\"btnLoading\"\r\n                class=\"spinner-border spinner-border-sm\"\r\n                role=\"status\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              Search\r\n            </button>\r\n          </div> -->\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Message body</label>\r\n            <textarea\r\n              rows=\"5\"\r\n              class=\"form-control\"\r\n              id=\"message\"\r\n              maxlength=\"160\"\r\n              name=\"message\"\r\n              formControlName=\"message\"\r\n              placeholder=\"Max 160 characters\"\r\n            ></textarea>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"messageModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !messageForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Create\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n");

/***/ }),

/***/ "7yLV":
/*!****************************************************************!*\
  !*** ./src/app/views/sms-campaigns/sms-campaigns.component.ts ***!
  \****************************************************************/
/*! exports provided: SMSCampaignsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMSCampaignsComponent", function() { return SMSCampaignsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sms_campaigns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sms-campaigns.component.html */ "6DdS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");







// import { ActionRenderer } from "../../utils/StatusRenderer";


let SMSCampaignsComponent = class SMSCampaignsComponent {
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
        this.pageSize = 20;
        this.from = 1;
        this.to = 20;
        this.count = 1;
        this.columnDefs = [];
        this.Farmers = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.States = [];
        this.rowData = [];
        this.selectedRows = [];
        this.years = [];
        this.filter = {};
        this.messageForm = this.fb.group({
            isAllFarmers: [false],
            message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: [""],
            area: [""],
            lga: [""],
            state: [""],
        });
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["SmsColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getSmsCampaigns();
        this.getAreas();
        this.getLGAs();
        this.getStates();
        this.getVillages();
    }
    getSmsCampaigns() {
        this.dataservice
            .getSmsCampaigns(1, this.pageSize)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.rowData = result.data.smsCampaigns.data;
            this.meta = result.data.smsCampaigns.meta;
            if (((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                this.disablePrevButton = true;
                this.disableNextButton = true;
            }
            if (((_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < this.pageSize) {
                this.to = (_f = (_e = this.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
            }
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
            .getSmsCampaigns(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.smsCampaigns.meta;
            this.rowData = result.data.smsCampaigns.data;
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
            .getSmsCampaigns(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.smsCampaigns.meta;
            this.rowData = result.data.smsCampaigns.data;
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
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    filterArea(event) {
        this.getAreas(event.target.value);
    }
    filterVillage(event) {
        this.getVillages(event.target.value);
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
        this.router.navigate(["/sms-campaigns/details", this.selectedRows[0].id], {
            state: { data: this.selectedRows },
        });
        console.log(this.selectedRows, this.selectedRows[0]);
    }
    openModal() {
        this.messageModal.show();
    }
    sendMessage() {
        this.btnLoading = true;
        console.log(this.messageForm.value, "sendmessage");
        this.dataservice.createSMSCampaign(this.messageForm.value).subscribe((result) => {
            console.log("response", result);
            if (result.data.createSmsCampaign) {
                this.toastr.success("Success!");
                this.btnLoading = false;
                this.messageModal.hide();
                this.getSmsCampaigns();
            }
            else {
                this.toastr.error("Failed!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
        });
    }
};
SMSCampaignsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SMSCampaignsComponent.propDecorators = {
    messageModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["messageModal",] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["detailsModal",] }]
};
SMSCampaignsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_sms_campaigns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], SMSCampaignsComponent);



/***/ }),

/***/ "CckM":
/*!***********************************************************************!*\
  !*** ./src/app/views/sms-campaigns/sms-campaigns-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: SMSCampaignsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMSCampaignsDetailComponent", function() { return SMSCampaignsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sms_campaigns_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sms-campaigns-detail.component.html */ "TbiA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");







// import { ActionRenderer } from "../../utils/StatusRenderer";


let SMSCampaignsDetailComponent = class SMSCampaignsDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverter"];
        this.dateConverterMin = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverterMin"];
        this.loading = true;
        this.btnLoading = false;
        this.columnDefs = [];
        this.rowData = [];
        this.details = [];
        this.messageForm = this.fb.group({
            isAllFarmers: [false],
            message: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: [""],
            area: [""],
            lga: [""],
            state: [""],
        });
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["DeliveryReportColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        console.log(this.router);
        this.getSmsCampaigns();
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }
    getSmsCampaigns() {
        this.dataservice
            .getSmsCampaigns(1, 10, this.id)
            .valueChanges.subscribe((result) => {
            this.details = result.data.smsCampaigns.data[0];
            console.log(this.details);
        });
    }
    getDeliveryReports() {
        var _a, _b, _c, _d, _e, _f;
        this.btnLoading = true;
        this.dataservice
            .fetchMessage((_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.apiKey, (_f = (_e = (_d = (_c = this.details) === null || _c === void 0 ? void 0 : _c.attributes) === null || _d === void 0 ? void 0 : _d.SMSGatewayResponse) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.message_id)
            .subscribe((result) => {
            console.log("getDeliveryReports", result);
            this.rowData = result.data;
            this.btnLoading = false;
        }, (error) => {
            console.error("error caught in component", error);
            this.btnLoading = false;
            this.toastr.error("Unable to fetch data");
        });
    }
};
SMSCampaignsDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SMSCampaignsDetailComponent.propDecorators = {
    messageModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["messageModal",] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["detailsModal",] }]
};
SMSCampaignsDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_sms_campaigns_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], SMSCampaignsDetailComponent);



/***/ }),

/***/ "TbiA":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/sms-campaigns/sms-campaigns-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>SMS Campaign Details</h2>\r\n      <span> </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Target</td>\r\n                  <td *ngIf=\"details?.attributes?.isAllFarmers\">\r\n                    <b>All Farmers</b>\r\n                  </td>\r\n                  <td *ngIf=\"!details?.attributes?.isAllFarmers\">\r\n                    State -\r\n                    <b>{{\r\n                      details?.attributes?.state?.data?.attributes?.Name\r\n                    }}</b\r\n                    ><br />LGA -\r\n                    <b>{{ details?.attributes?.lga?.data?.attributes?.Name }}</b\r\n                    ><br />City -\r\n                    <b>{{\r\n                      details?.attributes?.area?.data?.attributes?.Name\r\n                    }}</b\r\n                    ><br />Village -\r\n                    <b>{{\r\n                      details?.attributes?.village?.data?.attributes?.Name\r\n                    }}</b>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Message</td>\r\n                  <td>\r\n                    {{ details?.attributes?.message }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConverter(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Status</td>\r\n                  <td *ngIf=\"!details?.attributes?.SMSGatewayResponse?.data\">\r\n                    {{\r\n                      details?.attributes?.SMSGatewayResponse?.error?.message\r\n                    }}\r\n                  </td>\r\n                  <td *ngIf=\"details?.attributes?.SMSGatewayResponse?.data\">\r\n                    {{ details?.attributes?.SMSGatewayResponse?.data?.message }}\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-primary float-right m-2\"\r\n              [disabled]=\"btnLoading\"\r\n              (click)=\"getDeliveryReports()\"\r\n            >\r\n              <span\r\n                *ngIf=\"btnLoading\"\r\n                class=\"spinner-border spinner-border-sm\"\r\n                role=\"status\"\r\n                aria-hidden=\"true\"\r\n              ></span>\r\n              Fetch Delivery Report\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"rowData.length > 0\" class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [pagination]=\"true\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "cx32":
/*!*********************************************************************!*\
  !*** ./src/app/views/sms-campaigns/sms-campaigns-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SMSCampaignsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMSCampaignsRoutingModule", function() { return SMSCampaignsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sms_campaigns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sms-campaigns.component */ "7yLV");
/* harmony import */ var _sms_campaigns_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sms-campaigns-detail.component */ "CckM");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'sms-campaigns'
            },
            {
                path: 'all',
                // canActivate: [AuthGuard],
                component: _sms_campaigns_component__WEBPACK_IMPORTED_MODULE_3__["SMSCampaignsComponent"],
                data: {
                    title: 'SMS Campaign'
                }
            },
            {
                path: 'details/:id',
                // canActivate: [AuthGuard],
                component: _sms_campaigns_detail_component__WEBPACK_IMPORTED_MODULE_4__["SMSCampaignsDetailComponent"],
                data: {
                    title: 'SMS Campaign Details'
                }
            },
        ]
    }
];
let SMSCampaignsRoutingModule = class SMSCampaignsRoutingModule {
};
SMSCampaignsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SMSCampaignsRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-sms-campaigns-sms-campaigns-module-es2017.js.map