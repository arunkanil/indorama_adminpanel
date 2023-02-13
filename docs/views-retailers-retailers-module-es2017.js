(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-retailers-retailers-module"],{

/***/ "JRD6":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/retailers/retailers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Retailers</h2>\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n        <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        data-toggle=\"modal\"\n        (click)=\"commentModal.show()\"\n      >\n        Add New Retailer\n      </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"btn-group float-right mb-3\" dropdown>\n            <button\n              dropdownToggle\n              type=\"button\"\n              class=\"btn btn-primary dropdown-toggle\"\n            >\n              {{ selectedList }}<span class=\"caret\"></span>\n            </button>\n            <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n              <li role=\"menuitem\">\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('All')\"\n                  >All</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Approved')\"\n                  >Approved</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Approvalpending')\"\n                  >Approval pending</a\n                >\n                <a class=\"dropdown-item\" (click)=\"toggleCropPrices('Rejected')\"\n                  >Rejected</a\n                >\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #commentModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Retailer</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"commentModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"formSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"Name\">Name</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Name\"\n                  name=\"Name\"\n                  formControlName=\"Name\"\n                  placeholder=\"Enter  Name\"\n                />\n                <div\n                  *ngIf=\"f.Name.touched && f.Name.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Name.errors.required\">\n                    Name is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"username\"\n                  name=\"username\"\n                  formControlName=\"username\"\n                  placeholder=\"Enter username\"\n                />\n                <div\n                  *ngIf=\"f.username.touched && f.username.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.username.errors.required\">\n                    Username is required.\n                  </div>\n                  <div *ngIf=\"f.username.errors.minlength\">\n                    Username should have minimum 3 characters.\n                  </div>\n                  <div *ngIf=\"f.username.errors.cannotContainSpace\">\n                    Username cannot contain space.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password\"\n                  name=\"password\"\n                  formControlName=\"password\"\n                  placeholder=\"Enter password\"\n                />\n                <div\n                  *ngIf=\"f.password.touched && f.password.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.password.errors.required\">\n                    Password is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ContactNumber\">Contact number</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"ContactNumber\"\n                  name=\"ContactNumber\"\n                  formControlName=\"ContactNumber\"\n                  placeholder=\"Enter contact number\"\n                />\n                <div\n                  *ngIf=\"f.ContactNumber.touched && f.ContactNumber.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.ContactNumber.errors.required\">\n                    Contact number is required.\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\">\n                <label for=\"name\">E-mail</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  name=\"email\"\n                  formControlName=\"email\"\n                  placeholder=\"Enter email\"\n                />\n              </div> -->\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"state\">State</label>\n                <select\n                  class=\"form-control\"\n                  id=\"state\"\n                  required\n                  ngModel\n                  (change)=\"filterLGA($event)\"\n                  name=\"state\"\n                  formControlName=\"state\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.state.touched && f.state.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.state.errors.required\">\n                    State is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lga\">LGA</label>\n                <select\n                  class=\"form-control\"\n                  id=\"lga\"\n                  required\n                  ngModel\n                  (change)=\"filterVillage($event)\"\n                  name=\"lga\"\n                  formControlName=\"lga\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.lga.touched && f.lga.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.lga.errors.required\">\n                    LGA is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"village\">Village</label>\n                <select\n                  class=\"form-control\"\n                  id=\"village\"\n                  required\n                  ngModel\n                  name=\"village\"\n                  formControlName=\"village\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.village.touched && f.village.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.village.errors.required\">\n                    Village is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Gender\">Gender</label>\n                <select\n                  class=\"form-control\"\n                  id=\"Gender\"\n                  required\n                  ngModel\n                  name=\"Gender\"\n                  formControlName=\"Gender\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Male\">Male</option>\n                  <option value=\"Female\">Female</option>\n                </select>\n                <div\n                  *ngIf=\"f.Gender.touched && f.Gender.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Gender.errors.required\">\n                    Gender is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Age\">Age</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Age\"\n                  name=\"Age\"\n                  formControlName=\"Age\"\n                  placeholder=\"Enter age\"\n                />\n                <div\n                  *ngIf=\"f.Age.touched && f.Age.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Age.errors.required\">\n                    Age is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"commentModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !commentForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div\n  bsModal\n  #detailsModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">History</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"detailsModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\"></div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "Ozdv":
/*!********************************************************!*\
  !*** ./src/app/views/retailers/retailers.component.ts ***!
  \********************************************************/
/*! exports provided: RetailersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersComponent", function() { return RetailersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_retailers_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./retailers.component.html */ "JRD6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/username.validator */ "1qmy");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







// import { ActionRenderer } from "../../utils/StatusRenderer";




let RetailersComponent = class RetailersComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.confirmed = undefined;
        this.blocked = undefined;
        this.disableNextButton = false;
        this.disablePrevButton = true;
        this.selectedList = "All";
        this.pageSize = 20;
        this.from = 1;
        this.to = 20;
        this.count = 1;
        this.columnDefs = [];
        // frameworkComponents = {
        //   statusRenderer: ActionRenderer,
        // };
        this.rowData = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.States = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["RetailersColumn"]];
        this.setForm();
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getRetailers();
        this.getAreas();
        this.getLGAs();
        this.getStates();
        this.getVillages();
    }
    getStates() {
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    downloadExcel() {
        let resp = {};
        this.btnLoading = true;
        this.dataservice
            .downloadRetailers()
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
    setForm() {
        this.commentForm = this.fb.group({
            UserType: ["Retailer"],
            username: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4),
                    _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__["UsernameValidator"].cannotContainSpace,
                ],
            ],
            email: ["nodata@email.com"],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [""],
        });
    }
    get f() {
        return this.commentForm.controls;
    }
    getLGAs(id) {
        this.dataservice.getLGAs(id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(id).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getVillages(id) {
        this.dataservice.getVillages(id).valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    getRetailers() {
        this.dataservice
            .getRetailers(1, this.pageSize, this.confirmed, this.blocked)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.rowData = result.data.usersPermissionsUsers.data;
            this.meta = result.data.usersPermissionsUsers.meta;
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
            .getRetailers(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.usersPermissionsUsers.meta;
            this.rowData = result.data.usersPermissionsUsers.data;
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
            .getRetailers(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.usersPermissionsUsers.meta;
            this.rowData = result.data.usersPermissionsUsers.data;
        });
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
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
        // this.router.navigate(
        //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
        //   {
        //     state: { data: event.data },
        //   }
        // );
    }
    toggleCropPrices(data) {
        switch (data) {
            case "Rejected":
                this.selectedList = "Rejected";
                this.blocked = true;
                this.confirmed = undefined;
                this.getRetailers();
                break;
            case "Approvalpending":
                this.selectedList = "Pending";
                this.blocked = false;
                this.confirmed = false;
                this.getRetailers();
                break;
            case "Approved":
                this.selectedList = "Approved";
                this.blocked = false;
                this.confirmed = true;
                this.getRetailers();
                break;
            case "All":
                this.selectedList = "All";
                this.blocked = undefined;
                this.confirmed = undefined;
                this.getRetailers();
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
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows, event);
        this.router.navigate(["/retailers/retailer_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    openModal(data) {
        this.detailsModal.show();
    }
    formSubmit() {
        console.log(this.commentForm.value);
        this.btnLoading = true;
        let resp = {};
        this.dataservice.createRetailer(this.commentForm.value).subscribe((result) => {
            resp = result;
            console.log("response", result);
            if (result) {
                this.toastr.success("Retailer added successfully!");
                this.btnLoading = false;
                this.commentModal.hide();
                this.setForm();
                this.getRetailers();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
        });
    }
};
RetailersComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
RetailersComponent.propDecorators = {
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["detailsModal",] }]
};
RetailersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_retailers_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], RetailersComponent);



/***/ }),

/***/ "UtIJ":
/*!*************************************************************!*\
  !*** ./src/app/views/retailers/retailers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RetailersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersRoutingModule", function() { return RetailersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _retailers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./retailers.component */ "Ozdv");
/* harmony import */ var _retailer_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retailer-detail.component */ "VbHC");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'retailers'
            },
            {
                path: 'all',
                // canActivate: [AuthGuard],
                component: _retailers_component__WEBPACK_IMPORTED_MODULE_3__["RetailersComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Retailers'
                }
            },
            {
                path: 'retailer_details/:id',
                // canActivate: [AuthGuard],
                component: _retailer_detail_component__WEBPACK_IMPORTED_MODULE_4__["RetailerDetailComponent"],
                data: {
                    roles: 'MANAGER',
                    title: 'Retailer Details'
                }
            },
        ]
    }
];
let RetailersRoutingModule = class RetailersRoutingModule {
};
RetailersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RetailersRoutingModule);



/***/ }),

/***/ "VbHC":
/*!**************************************************************!*\
  !*** ./src/app/views/retailers/retailer-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: RetailerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailerDetailComponent", function() { return RetailerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_retailer_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./retailer-detail.component.html */ "Zuqq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let RetailerDetailComponent = class RetailerDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.loading = true;
        this.btnText = "Approve / Reject";
        this.disableButton = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
        this.users = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.Retailers = [];
        this.Farmers = [];
        this.States = [];
        this.Crops = [];
        this.file = null;
        this.agentForm = this.fb.group({
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // username: ["", Validators.required],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // email: ["", Validators.required],
            password: [""],
            Farmer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            retailer_categories: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Bio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.resultForm = this.fb.group({
            id: [""],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.productForm = this.fb.group({
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getLists();
        this.getAreas();
        this.getCrops();
        this.getLGAs();
        this.getStates();
        this.getVillages();
        this.getFarmers();
        this.getRetailers();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.getTest();
    }
    imgUrl(url) {
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}` + url;
    }
    getTest() {
        this.dataservice
            .getsingleRetailer(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;
            console.log("getsingleRetailer", result.data.usersPermissionsUsers.data[0]);
            this.details = result.data.usersPermissionsUsers.data[0];
            this.agentForm = this.fb.group({
                ContactNumber: [
                    (_a = this.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                Name: [(_b = this.details.attributes) === null || _b === void 0 ? void 0 : _b.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // email: [this.details.attributes?.email, Validators.required],
                Bio: [(_c = this.details.attributes) === null || _c === void 0 ? void 0 : _c.Bio, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [(_d = this.details.attributes) === null || _d === void 0 ? void 0 : _d.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_e = this.details.attributes) === null || _e === void 0 ? void 0 : _e.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                state: [
                    (_m = (_l = (_k = (_j = (_h = (_g = (_f = this.details) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.lga) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.attributes) === null || _k === void 0 ? void 0 : _k.state) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                password: [""],
                lga: [(_r = (_q = (_p = (_o = this.details) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.lga) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                village: [
                    (_v = (_u = (_t = (_s = this.details) === null || _s === void 0 ? void 0 : _s.attributes) === null || _t === void 0 ? void 0 : _t.village) === null || _u === void 0 ? void 0 : _u.data) === null || _v === void 0 ? void 0 : _v.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                retailer_categories: [
                    (_z = (_y = (_x = (_w = this.details) === null || _w === void 0 ? void 0 : _w.attributes) === null || _x === void 0 ? void 0 : _x.retailer_categories) === null || _y === void 0 ? void 0 : _y.data[0]) === null || _z === void 0 ? void 0 : _z.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
            });
            if (((_1 = (_0 = this.details) === null || _0 === void 0 ? void 0 : _0.attributes) === null || _1 === void 0 ? void 0 : _1.blocked) === true) {
                this.disableButton = true;
                this.btnText = "Rejected";
            }
            else if (((_3 = (_2 = this.details) === null || _2 === void 0 ? void 0 : _2.attributes) === null || _3 === void 0 ? void 0 : _3.confirmed) === true) {
                {
                    this.disableButton = true;
                    this.btnText = "Approved";
                }
            }
            else if (((_5 = (_4 = this.details) === null || _4 === void 0 ? void 0 : _4.attributes) === null || _5 === void 0 ? void 0 : _5.confirmed) === false) {
                return (this.disableButton = false);
            }
            this.loading = false;
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
    getLGAs(id) {
        this.dataservice.getLGAs(id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(id).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getRetailers() {
        this.dataservice
            .getRetailerCategories()
            .valueChanges.subscribe((result) => {
            console.log("getRetailers", result.data.retailerCategories.data);
            this.Retailers = result.data.retailerCategories.data;
        });
    }
    getFarmers() {
        this.dataservice
            .getUsers(undefined, undefined, "Farmer")
            .valueChanges.subscribe((result) => {
            console.log("getFarmers", result.data.usersPermissionsUsers.data);
            this.Farmers = result.data.usersPermissionsUsers.data;
        });
    }
    getVillages(id) {
        this.dataservice.getVillages(id).valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    dateConvertor(date) {
        return new Date(date);
    }
    getLists() {
        this.loading = true;
    }
    approveOrReject(check) {
        let payload = {};
        if (check) {
            payload = {
                confirmed: true,
                blocked: false,
            };
        }
        else {
            payload = {
                confirmed: false,
                blocked: true,
            };
        }
        this.dataservice.UpdateRetailer(payload, this.id).subscribe((result) => {
            console.log("response", result);
            if (result.data.updateUsersPermissionsUser) {
                this.toastr.success("Updated successfully!");
                this.btnLoading = false;
                this.approveModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Something went wrong!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
        });
        // let published = null;
        // if (!check) published = new Date();
        // this.dataservice
        //   .UpdateCropPrice(
        //     undefined,
        //     this.selectedRows[0].id,
        //     undefined,
        //     check,
        //     published
        //   )
        //   .subscribe(
        //     (result: any) => {
        //       console.log("response", result);
        //       if (result.data.updateCropPrice) {
        //         this.toastr.success("Success!");
        //         this.getCropPrices();
        //         this.file = null;
        //         this.approveModal.hide();
        //         this.gridApi.deselectAll();
        //         this.btnLoading = false;
        //       }
        //     },
        //     (error) => {
        //       this.toastr.error("Failed. Please check the fields!");
        //       this.btnLoading = false;
        //     }
        //   );
    }
    openApproveModal() {
        this.approveModal.show();
    }
    openModal(data, flag) {
        var _a, _b, _c;
        this.resultModal.show();
        console.log(data, flag);
        this.flag = flag;
        this.resultForm = this.fb.group({
            id: [data === null || data === void 0 ? void 0 : data.id],
            soil_test_sample: [data === null || data === void 0 ? void 0 : data.id],
            itemName: [(_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.ItemName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: [(_b = data === null || data === void 0 ? void 0 : data.attributes) === null || _b === void 0 ? void 0 : _b.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: [(_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    openDeleteModal(data) {
        this.deleteObj = data;
        this.deleteModal.show();
    }
    FormSubmit() {
        let resp = {};
        this.btnLoading = true;
        console.log(this.agentForm.value);
        this.dataservice.UpdateRetailer(this.agentForm.value, this.id).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUsersPermissionsUser) {
                this.toastr.success("Retailer updated successfully!");
                this.btnLoading = false;
                this.myModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
        });
    }
    ResultSubmit() {
        var _a, _b, _c, _d;
        console.log("edit", this.resultForm.value);
        this.btnLoading = true;
        let resp = {};
        console.log(this.resultForm.value);
        this.dataservice
            .UpdateRetailerProducts(this.resultForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateRetailerProduct) {
                this.toastr.success("Product updated successfully!");
                this.btnLoading = false;
                this.resultModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
        });
    }
    onChange(event) {
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    filterVillage(event) {
        this.getVillages(event.target.value);
    }
    uploadProfPic() {
        let resp = {};
        this.dataservice.upload(this.file).subscribe((response) => {
            var _a;
            if (response.status == 200) {
                console.log(response);
                this.dataservice
                    .UpdateRetailerPic(this.id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.updateUsersPermissionsUser) {
                        this.toastr.success("Success!");
                        this.file = null;
                        this.getTest();
                        this.addProductModal.hide();
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
            }
            else {
                this.toastr.error("Image failed to upload!");
            }
        });
    }
    ProductSubmit() {
        let resp = {};
        this.btnLoading = true;
        this.dataservice.upload(this.file).subscribe((response) => {
            var _a, _b, _c, _d, _e;
            if (response.status == 200) {
                console.log(response);
                this.dataservice
                    .addRetailerProducts(this.productForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id, (_e = response.body[0]) === null || _e === void 0 ? void 0 : _e.id)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.createRetailerProduct) {
                        this.toastr.success("Success!");
                        this.btnLoading = false;
                        this.file = null;
                        this.getTest();
                        this.addProductModal.hide();
                    }
                    else {
                        this.toastr.error("Failed!");
                        this.btnLoading = false;
                    }
                }, (error) => {
                    this.btnLoading = false;
                });
            }
            else {
                this.toastr.error("Image failed to upload!");
                this.btnLoading = false;
            }
        });
    }
    deleteProduct() {
        this.dataservice
            .deleteProduct(this.deleteObj.id)
            .subscribe((result) => {
            console.log("response", result);
            if (result.data.deleteRetailerProduct) {
                this.toastr.success("Success!");
                this.deleteModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed!");
            }
        });
    }
};
RetailerDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
RetailerDetailComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }],
    resultModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["resultModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }],
    addProductModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["addProductModal",] }],
    approveModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["approveModal",] }]
};
RetailerDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_retailer_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], RetailerDetailComponent);



/***/ }),

/***/ "Zuqq":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/retailers/retailer-detail.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this record?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            (click)=\"deleteProduct()\"\r\n          >\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div\r\n    bsModal\r\n    #approveModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to approve this retailer?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"approveOrReject(false)\"\r\n          >\r\n            No! Reject.\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            (click)=\"approveOrReject(true)\"\r\n          >\r\n            Yes! Approve.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Retailer Details</h2>\r\n      <span>\r\n        <div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-outline-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"addProductModal.show()\"\r\n          >\r\n            Add new product\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"myModal.show()\"\r\n          >\r\n            Edit\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-warning\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"openApproveModal()\"\r\n          >\r\n            {{ btnText }}\r\n          </button>\r\n          <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button> -->\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Basic details</h4>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Username</td>\r\n                  <td>{{ details?.attributes?.username }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Profile pic</td>\r\n                  <td>\r\n                    <a\r\n                      href=\"{{ baseURL }}{{\r\n                        details?.attributes?.prof_pic?.data?.attributes?.url\r\n                      }}\"\r\n                      target=\"_blank\"\r\n                      ><img\r\n                        class=\"card-img-top\"\r\n                        style=\"width: 150px; height: 150px\"\r\n                        src=\"{{ baseURL }}{{\r\n                          details?.attributes?.prof_pic?.data?.attributes?.url\r\n                        }}\"\r\n                        alt=\"Card image cap\"\r\n                    /></a>\r\n                    <div style=\"display: flex; justify-content: space-between\">\r\n                      <input\r\n                        type=\"file\"\r\n                        class=\"form-control\"\r\n                        id=\"prof_pic\"\r\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\r\n                        name=\"prof_pic\"\r\n                        (change)=\"onChange($event)\"\r\n                        placeholder=\"Choose image\"\r\n                      />\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        data-toggle=\"modal\"\r\n                        (click)=\"uploadProfPic()\"\r\n                      >\r\n                        Upload\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number</td>\r\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>Email</td>\r\n                  <td>\r\n                    {{ details?.attributes?.email }}\r\n                  </td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>Village</td>\r\n                  <td>\r\n                    {{ details?.attributes?.village?.data?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>LGA</td>\r\n                  <td>{{ details?.attributes?.lga?.data?.attributes.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>State</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.lga?.data?.attributes?.state?.data\r\n                        ?.attributes?.Name\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Retailer Category</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.retailer_categories?.data[0]\r\n                        ?.attributes?.CategoryName\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Bio</td>\r\n                  <td style=\"width: 60%\">{{ details?.attributes?.Bio }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Location</td>\r\n                  <td><a\r\n                    href=\"https://www.google.com/maps/search/?api=1&query={{\r\n                      details.attributes?.Latitude}}%2C{{ details.attributes?.Longitude }}\"\r\n                    target=\"_blank\"\r\n                    >Click here to view location</a\r\n                  ></td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h4>Products</h4>\r\n          <div class=\"row\">\r\n            <div\r\n              class=\"col-4\"\r\n              *ngFor=\"let item of details?.attributes?.retailer_products?.data\"\r\n            >\r\n              <div class=\"card\">\r\n                <a\r\n                  href=\"{{\r\n                    imgUrl(item?.attributes?.Images?.data[0]?.attributes?.url)\r\n                  }}\"\r\n                  target=\"_blank\"\r\n                >\r\n                  <img\r\n                    class=\"card-img-top\"\r\n                    height=\"100\"\r\n                    width=\"200\"\r\n                    src=\"{{\r\n                      imgUrl(item?.attributes?.Images?.data[0]?.attributes?.url)\r\n                    }}\"\r\n                    alt=\"Card image cap\"\r\n                  />\r\n                </a>\r\n                <div class=\"card-body\">\r\n                  <div style=\"display: flex; justify-content: space-between\">\r\n                    <h5 class=\"card-title\">\r\n                      Item : {{ item?.attributes?.ItemName }}\r\n                    </h5>\r\n                    <!-- <button\r\n                      type=\"button\"\r\n                      *ngIf=\"item?.attributes?.soil_test_results?.data[0]\"\r\n                      class=\"btn btn-primary\"\r\n                      data-toggle=\"modal\"\r\n                      (click)=\"openModal(item, 'edit')\"\r\n                    >\r\n                      Edit results\r\n                    </button>\r\n                    <button\r\n                      type=\"button\"\r\n                      *ngIf=\"!item?.attributes?.soil_test_results?.data[0]\"\r\n                      class=\"btn btn-primary\"\r\n                      data-toggle=\"modal\"\r\n                      (click)=\"openModal(item, 'add')\"\r\n                    >\r\n                      Add results\r\n                    </button> -->\r\n                  </div>\r\n                  <p class=\"card-text\">\r\n                    Price :\r\n                    {{ item?.attributes?.Price }} per\r\n                    {{ item?.attributes?.Unit }}\r\n                  </p>\r\n                  <!-- <p class=\"card-text\">\r\n                    Created on :\r\n                    {{ dateConvertor(item?.attributes?.createdAt) }}\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Added by :\r\n                    {{\r\n                      item?.attributes?.SampleAddedBy?.data?.attributes?.Name\r\n                    }}\r\n                  </p> -->\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-primary\"\r\n                    data-toggle=\"modal\"\r\n                    (click)=\"openModal(item, 'edit')\"\r\n                  >\r\n                    Edit\r\n                  </button>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-danger\"\r\n                    data-toggle=\"modal\"\r\n                    (click)=\"openDeleteModal(item)\"\r\n                  >\r\n                    Delete\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #myModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit details</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"myModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Name\">Name</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"Name\"\r\n                        name=\"Name\"\r\n                        formControlName=\"Name\"\r\n                        placeholder=\"Enter Name\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"market\">Contact Number</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"ContactNumber\"\r\n                        name=\"ContactNumber\"\r\n                        formControlName=\"ContactNumber\"\r\n                        placeholder=\"Enter contact number\"\r\n                      />\r\n                    </div>\r\n                    <!-- <div class=\"form-group\">\r\n                      <label for=\"email\">email</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"email\"\r\n                        name=\"email\"\r\n                        formControlName=\"email\"\r\n                        placeholder=\"Enter email\"\r\n                      />\r\n                    </div> -->\r\n                    <div class=\"form-group\">\r\n                      <label for=\"retailer_categories\">Retailer category</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"retailer_categories\"\r\n                        required\r\n                        ngModel\r\n                        name=\"retailer_categories\"\r\n                        formControlName=\"retailer_categories\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option\r\n                          *ngFor=\"let item of Retailers\"\r\n                          value=\"{{ item.id }}\"\r\n                        >\r\n                          {{ item.attributes.CategoryName }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Bio\">Bio</label>\r\n                      <textarea\r\n                        class=\"form-control\"\r\n                        id=\"Bio\"\r\n                        name=\"Bio\"\r\n                        formControlName=\"Bio\"\r\n                        placeholder=\"Enter Bio\"\r\n                      ></textarea>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"password\">Password</label>\r\n                      <input\r\n                        type=\"password\"\r\n                        class=\"form-control\"\r\n                        id=\"password\"\r\n                        name=\"password\"\r\n                        formControlName=\"password\"\r\n                        placeholder=\"Enter password\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"state\">State</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"state\"\r\n                        (change)=\"filterLGA($event)\"\r\n                        required\r\n                        ngModel\r\n                        name=\"state\"\r\n                        formControlName=\"state\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option\r\n                          *ngFor=\"let item of States\"\r\n                          value=\"{{ item.id }}\"\r\n                        >\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"lga\">LGA</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"lga\"\r\n                        (change)=\"filterVillage($event)\"\r\n                        required\r\n                        ngModel\r\n                        name=\"lga\"\r\n                        formControlName=\"lga\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"village\">Village</label>\r\n                      <select\r\n                        class=\"form-control\"\r\n                        id=\"village\"\r\n                        required\r\n                        ngModel\r\n                        name=\"village\"\r\n                        formControlName=\"village\"\r\n                      >\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option\r\n                          *ngFor=\"let item of Villages\"\r\n                          value=\"{{ item.id }}\"\r\n                        >\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Latitude\">Latitude</label>\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"Latitude\"\r\n                        name=\"Latitude\"\r\n                        formControlName=\"Latitude\"\r\n                        placeholder=\"Enter Latitude\"\r\n                      />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Longitude\">Longitude</label>\r\n                      <input\r\n                        class=\"form-control\"\r\n                        id=\"Longitude\"\r\n                        required\r\n                        ngModel\r\n                        name=\"Longitude\"\r\n                        formControlName=\"Longitude\"\r\n                        placeholder=\"Enter Longitude\"\r\n                      />\r\n                    </div>\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"btn btn-secondary\"\r\n                      (click)=\"myModal.hide()\"\r\n                    >\r\n                      Close\r\n                    </button>\r\n                    <button\r\n                      type=\"submit\"\r\n                      class=\"btn btn-primary ml-2\"\r\n                      [disabled]=\"btnLoading || !agentForm.valid\"\r\n                    >\r\n                      <span\r\n                        *ngIf=\"btnLoading\"\r\n                        class=\"spinner-border spinner-border-sm\"\r\n                        role=\"status\"\r\n                        aria-hidden=\"true\"\r\n                      ></span>\r\n                      Save changes\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #resultModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"resultModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit product</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"resultModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"id\">ID</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"soil_test_sample\"\r\n                    disabled=\"true\"\r\n                    name=\"id\"\r\n                    formControlName=\"id\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemName\">Item name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"itemName\"\r\n                    name=\"itemName\"\r\n                    formControlName=\"itemName\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\">Price</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"price\"\r\n                    name=\"price\"\r\n                    formControlName=\"price\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"unit\">Unit</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"unit\"\r\n                    name=\"unit\"\r\n                    formControlName=\"unit\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-secondary\"\r\n                  (click)=\"resultModal.hide()\"\r\n                >\r\n                  Close\r\n                </button>\r\n                <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary ml-2\"\r\n                  [disabled]=\"btnLoading\"\r\n                >\r\n                  <span\r\n                    *ngIf=\"btnLoading\"\r\n                    class=\"spinner-border spinner-border-sm\"\r\n                    role=\"status\"\r\n                    aria-hidden=\"true\"\r\n                  ></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div\r\n        bsModal\r\n        #addProductModal=\"bs-modal\"\r\n        class=\"modal fade\"\r\n        tabindex=\"-1\"\r\n        role=\"dialog\"\r\n        aria-labelledby=\"productModalLabel\"\r\n        aria-hidden=\"true\"\r\n      >\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add product</h4>\r\n              <button\r\n                type=\"button\"\r\n                class=\"close\"\r\n                (click)=\"addProductModal.hide()\"\r\n                aria-label=\"Close\"\r\n              >\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"productForm\" (ngSubmit)=\"ProductSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemName\">Item name</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"itemName\"\r\n                    name=\"itemName\"\r\n                    formControlName=\"itemName\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\">Price</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"price\"\r\n                    name=\"price\"\r\n                    formControlName=\"price\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"unit\">Unit</label>\r\n                  <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"unit\"\r\n                    name=\"unit\"\r\n                    formControlName=\"unit\"\r\n                    placeholder=\"Enter value\"\r\n                  />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"Image\">Image</label>\r\n                  <input\r\n                    type=\"file\"\r\n                    class=\"form-control\"\r\n                    id=\"Image\"\r\n                    accept=\".jpg,.jpeg,.JPEG,.png\"\r\n                    name=\"Image\"\r\n                    (change)=\"onChange($event)\"\r\n                    formControlName=\"Image\"\r\n                    placeholder=\"Choose image\"\r\n                  />\r\n                </div>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"btn btn-secondary\"\r\n                  (click)=\"addProductModal.hide()\"\r\n                >\r\n                  Close\r\n                </button>\r\n                <button\r\n                  type=\"submit\"\r\n                  class=\"btn btn-primary ml-2\"\r\n                  [disabled]=\"btnLoading || !productForm.valid\"\r\n                >\r\n                  <span\r\n                    *ngIf=\"btnLoading\"\r\n                    class=\"spinner-border spinner-border-sm\"\r\n                    role=\"status\"\r\n                    aria-hidden=\"true\"\r\n                  ></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "d3Ph":
/*!*****************************************************!*\
  !*** ./src/app/views/retailers/retailers.module.ts ***!
  \*****************************************************/
/*! exports provided: RetailersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersModule", function() { return RetailersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _retailers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retailers.component */ "Ozdv");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _retailers_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retailers-routing.module */ "UtIJ");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _retailer_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./retailer-detail.component */ "VbHC");





// Dropdowns Component


// Buttons Routing

// Angular



let RetailersModule = class RetailersModule {
};
RetailersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _retailers_routing_module__WEBPACK_IMPORTED_MODULE_7__["RetailersRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _retailers_component__WEBPACK_IMPORTED_MODULE_4__["RetailersComponent"],
            _retailer_detail_component__WEBPACK_IMPORTED_MODULE_10__["RetailerDetailComponent"]
        ]
    })
], RetailersModule);



/***/ })

}]);
//# sourceMappingURL=views-retailers-retailers-module-es2017.js.map