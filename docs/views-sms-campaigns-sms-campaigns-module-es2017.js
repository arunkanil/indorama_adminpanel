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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>SMS Campaigns</h2>\r\n      <div>\r\n        <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          [disabled]=\"disableButton\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Delete\r\n        </button> -->\r\n        <!-- <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <button type=\"button\" [disabled]=\"!disableButton\" class=\"btn btn-primary\" data-toggle=\"modal\"\r\n          (click)=\"openModal()\">\r\n          Create new campaign\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #messageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">New Campaign</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"messageModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"messageForm\" (ngSubmit)=\"sendMessage()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <select class=\"form-control\" id=\"state\" ngModel (change)=\"filterLGA($event)\" name=\"state\"\r\n                  formControlName=\"state\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"area\">Area</label>\r\n                <select class=\"form-control\" id=\"area\" ngModel (change)=\"filterVillage($event)\" name=\"area\" formControlName=\"area\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"lga\">LGA</label>\r\n                <select class=\"form-control\" id=\"lga\" ngModel (change)=\"filterArea($event)\" name=\"lga\" formControlName=\"lga\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"village\">Village</label>\r\n                <select class=\"form-control\" id=\"village\" ngModel name=\"village\" formControlName=\"village\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            Farmers selected : {{NoOfContacts}}\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"clearSearch()\">\r\n              Clear\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-primary ml-2\" (click)=\"getUsers()\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Search\r\n            </button>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Message body</label>\r\n            <textarea rows=\"5\" class=\"form-control\" id=\"body\" name=\"body\" formControlName=\"body\"\r\n              placeholder=\"Max 160 characters\"></textarea>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"messageModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !messageForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Create\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>");

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
        this.pageSize = 100;
        this.count = 1;
        this.columnDefs = [];
        this.Farmers = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.States = [];
        this.rowData = [];
        this.to = "";
        this.selectedRows = [];
        this.years = [];
        this.filter = {};
        this.messageForm = this.fb.group({
            body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
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
        this.getCropPrices();
        this.getAreas();
        this.getLGAs();
        this.getStates();
        this.getVillages();
    }
    getCropPrices() {
        this.dataservice.getCropPrices(1, this.pageSize).valueChanges.subscribe((result) => {
            var _a, _b;
            this.rowData = result.data.cropPrices.data;
            this.meta = result.data.cropPrices.meta;
            if (((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                this.disablePrevButton = true;
                this.disableNextButton = true;
            }
        });
    }
    loadNext() {
        this.count++;
        this.disablePrevButton = false;
        if (this.count === this.meta.pagination.pageCount) {
            this.disableNextButton = true;
        }
        this.dataservice
            .getCropPrices(this.count, this.pageSize)
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
        this.dataservice
            .getCropPrices(this.count, this.pageSize)
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
    clearSearch() {
        this.messageForm.reset();
        this.Farmers = [];
        this.NoOfContacts = 0;
    }
    getUsers() {
        this.dataservice
            .getUsersLarge("Farmer", this.messageForm.value)
            .valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.usersPermissionsUsers.data);
            this.Farmers = Array.from(result.data.usersPermissionsUsers.data, (x) => x.attributes.ContactNumber);
            for (let i = 0; i < this.Farmers.length; i++) {
                if (this.Farmers[i]) {
                    this.to = this.to + this.Farmers[i] + ",";
                }
            }
            this.NoOfContacts = this.Farmers.length;
            console.log("farmers", this.Farmers, this.to);
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
        console.log(this.selectedRows, this.selectedRows[0].attributes.Name);
    }
    openModal(data) {
        this.messageModal.show();
    }
    sendMessage() {
        var _a;
        console.log(this.messageForm.value, "sendmessage");
        let request = {
            api_token: "sw4evLMU9UOK1WFHsarICwcvDnyGN3sVSANPo2VyWX7q6CZ5sNr9OCYKRyQ5",
            to: this.to,
            from: "INDORAMA",
            body: (_a = this.messageForm.value) === null || _a === void 0 ? void 0 : _a.body,
        };
        this.dataservice
            .sendMessage(request)
            .subscribe((result) => {
            console.log("response", result);
            // this.toastr.success("Success!");
            // if (result.data.deleteRetailerProduct) {
            //   this.toastr.success("Success!");
            //   this.deleteModal.hide();
            //   this.getTest();
            // } else {
            //   this.toastr.error("Failed!");
            // }
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