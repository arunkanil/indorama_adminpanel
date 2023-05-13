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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>SMS Campaigns</h2>\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n        <!-- <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          [disabled]=\"disableButton\"\n          (click)=\"openModal()\"\n        >\n          Delete\n        </button> -->\n        <!-- <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\n          (click)=\"openModal('Edit')\">\n          Edit\n        </button> -->\n        <button\n          type=\"button\"\n          [disabled]=\"!disableButton\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Create new campaign\n        </button>\n      </div>\n    </div>\n    <!-- <p class=\"text-muted mx-3\">\n      To approve a crop price simply select and edit the record without\n      modifying the data\n    </p> -->\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #messageModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">New Campaign</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"messageModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label class=\"switch\">\n                  <input\n                    type=\"checkbox\"\n                    id=\"isAllFarmers\"\n                    maxlength=\"160\"\n                    name=\"isAllFarmers\"\n                    formControlName=\"isAllFarmers\"\n                  />\n                  <div class=\"slider round\">\n                    <span class=\"on\">Filter</span>\n                    <span class=\"off\">All</span>\n                  </div>\n                </label>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"messageForm.value?.isAllFarmers\" class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"state\">State</label>\n                <select\n                  class=\"form-control\"\n                  id=\"state\"\n                  ngModel\n                  (change)=\"filterLGA($event)\"\n                  name=\"state\"\n                  formControlName=\"state\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"area\">City</label>\n                <select\n                  class=\"form-control\"\n                  id=\"area\"\n                  ngModel\n                  name=\"area\"\n                  formControlName=\"area\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"lga\">LGA</label>\n                <select\n                  class=\"form-control\"\n                  id=\"lga\"\n                  ngModel\n                  (change)=\"filterArea($event)\"\n                  name=\"lga\"\n                  formControlName=\"lga\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"village\">Village</label>\n                <select\n                  class=\"form-control\"\n                  id=\"village\"\n                  ngModel\n                  name=\"village\"\n                  formControlName=\"village\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"form-group\">Farmers selected : {{ NoOfContacts }}</div>\n          <div class=\"form-group\">\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              (click)=\"clearSearch()\"\n            >\n              Clear\n            </button>\n            <button\n              type=\"button\"\n              class=\"btn btn-primary ml-2\"\n              (click)=\"getUsers()\"\n            >\n              <span\n                *ngIf=\"btnLoading\"\n                class=\"spinner-border spinner-border-sm\"\n                role=\"status\"\n                aria-hidden=\"true\"\n              ></span>\n              Search\n            </button>\n          </div> -->\n          <div class=\"form-group\">\n            <label for=\"name\">Message body</label>\n            <textarea\n              rows=\"5\"\n              class=\"form-control\"\n              id=\"message\"\n              maxlength=\"160\"\n              name=\"message\"\n              formControlName=\"message\"\n              placeholder=\"Max 160 characters\"\n            ></textarea>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"messageModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !messageForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Create\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n");

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







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
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: [''],
            area: [''],
            lga: [''],
            state: [''],
        });
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["SmsColumn"]];
        this.rowSelection = 'single';
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
        this.dataservice.getStates(1, 10000, '').valueChanges.subscribe((result) => {
            console.log('getStates', result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    getLGAs(stateid) {
        this.dataservice.getLGAs(1, 10000, '', stateid).valueChanges.subscribe((result) => {
            console.log('getLGAs', result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(lgaid) {
        this.dataservice.getAreas(1, 10000, '', lgaid).valueChanges.subscribe((result) => {
            console.log('getAreas', result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getVillages(lgaid) {
        this.dataservice
            .getVillages(1, 10000, '', lgaid)
            .valueChanges.subscribe((result) => {
            console.log('getVillages', result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    downloadExcel() {
        let resp = {};
        this.btnLoading = true;
        this.dataservice
            .downloadSMSCampaigns()
            .subscribe((result) => {
            var _a;
            resp = result.body;
            console.log(result);
            if (result.status === 200 && result.body.status == 'Success') {
                this.toastr.success(result.body.message);
                this.btnLoading = false;
                window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}${(_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path}`, '_blank');
            }
            else {
                this.btnLoading = false;
                this.toastr.error(result.body.message);
            }
        });
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    filterArea(event) {
        this.filterVillage(event);
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
        console.log('row', event.data);
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        if (this.selectedRows.length > 0) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
        this.router.navigate(['/sms-campaigns/details', this.selectedRows[0].id], {
            state: { data: this.selectedRows },
        });
        console.log(this.selectedRows, this.selectedRows[0]);
    }
    openModal() {
        this.messageModal.show();
    }
    sendMessage() {
        this.btnLoading = true;
        console.log(this.messageForm.value, 'sendmessage');
        this.dataservice.createSMSCampaign(this.messageForm.value).subscribe((result) => {
            console.log('response', result);
            if (result.data.createSmsCampaign) {
                this.toastr.success('Success!');
                this.btnLoading = false;
                this.messageModal.hide();
                this.getSmsCampaigns();
            }
            else {
                this.toastr.error('Failed!');
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
    messageModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['messageModal',] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['detailsModal',] }]
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
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: [''],
            area: [''],
            lga: [''],
            state: [''],
        });
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["DeliveryReportColumn"]];
        this.rowSelection = 'single';
    }
    ngOnInit() {
        this.loading = true;
        this.activatedRouter.params.subscribe((params) => {
            this.id = params['id'];
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
            console.log('getDeliveryReports', result);
            this.rowData = result.data;
            this.btnLoading = false;
        }, (error) => {
            console.error('error caught in component', error);
            this.btnLoading = false;
            this.toastr.error('Unable to fetch data');
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
    messageModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['messageModal',] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['detailsModal',] }]
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