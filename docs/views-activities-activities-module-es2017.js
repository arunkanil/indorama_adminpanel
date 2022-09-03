(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-activities-activities-module"],{

/***/ "Hcx8":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/activities/activities.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Activities</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <button type=\"button\" [disabled]=\"!disableButton\" class=\"btn btn-primary\" data-toggle=\"modal\"\r\n          (click)=\"openModal()\">\r\n          Add New Activity\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #activitiesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Activity</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"activitiesModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"activitiesSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"ActivityType\">Activity Type</label>\r\n                <select class=\"form-control\" id=\"ActivityType\" required ngModel\r\n                  name=\"ActivityType\" formControlName=\"ActivityType\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"FarmDemo\">Farm Demo</option>\r\n                  <option value=\"GroupFarmerTraining\">Group Farmer Training</option>\r\n                  <option value=\"MegaFarmerTraining\">Mega Farmer Training</option>\r\n                  <option value=\"FarmDay\">Farm Day</option>\r\n                  <option value=\"RetailersTraining\">Retailers Training</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"area\">Area</label>\r\n                <select class=\"form-control\" id=\"area\" required ngModel name=\"area\" formControlName=\"area\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Latitude\">Latitude</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\" formControlName=\"Latitude\"\r\n                  placeholder=\"Enter Latitude\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Longitude\">Longitude</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Longitude\" name=\"Longitude\" formControlName=\"Longitude\"\r\n                  placeholder=\"Enter Longitude\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"NoOfAttendees\">Number of attendees</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NoOfAttendees\" name=\"NoOfAttendees\"\r\n                  formControlName=\"NoOfAttendees\" placeholder=\"Enter No. of attendees\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"FarmerName\">Farmer name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"FarmerName\" name=\"FarmerName\" formControlName=\"FarmerName\"\r\n                  placeholder=\"Enter name\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"crop\">Crop</label>\r\n                <select class=\"form-control\" id=\"crop\" required ngModel name=\"crop\" formControlName=\"crop\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"ConditionOfCrop\" name=\"ConditionOfCrop\"\r\n                  formControlName=\"ConditionOfCrop\" placeholder=\"Enter condition\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"PlannedFarmDay\" name=\"PlannedFarmDay\" formControlName=\"PlannedFarmDay\"\r\n                  placeholder=\"Enter Date\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Date\">Date</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"Date\" name=\"Date\" formControlName=\"Date\"\r\n                  placeholder=\"Enter Date\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Time\">Time</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"Time\" name=\"Time\" formControlName=\"Time\"\r\n                  placeholder=\"Enter Time\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Reason\">Body</label>\r\n                <textarea class=\"form-control\" id=\"Reason\" rows=\"5\" name=\"Reason\" formControlName=\"Reason\"\r\n                  placeholder=\"Enter body\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activitiesModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !activitiesForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "bCMp":
/*!***************************************************************!*\
  !*** ./src/app/views/activities/activity-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityDetailComponent", function() { return ActivityDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_activity_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./activity-detail.component.html */ "hbGJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let ActivityDetailComponent = class ActivityDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
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
        this.Areas = [];
        this.Crops = [];
        this.activitiesForm = this.fb.group({
            ActivityType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            NoOfAttendees: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            crop: [""],
            FarmerName: [""],
            PlannedFarmDay: [""],
            ConditionOfCrop: [""],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.getActivity();
        this.getAreas();
        this.getCrops();
    }
    getActivity() {
        this.dataservice
            .getActivity(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            console.log("getActivity", result.data.activity.data);
            this.details = result.data.activity.data;
            this.activitiesForm = this.fb.group({
                ActivityType: [(_a = this.details.attributes) === null || _a === void 0 ? void 0 : _a.ActivityType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,],
                Latitude: [(_b = this.details.attributes) === null || _b === void 0 ? void 0 : _b.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_c = this.details.attributes) === null || _c === void 0 ? void 0 : _c.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NoOfAttendees: [(_d = this.details.attributes) === null || _d === void 0 ? void 0 : _d.NoOfAttendees, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,],
                area: [(_g = (_f = (_e = this.details.attributes) === null || _e === void 0 ? void 0 : _e.area) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                crop: [(_k = (_j = (_h = this.details.attributes) === null || _h === void 0 ? void 0 : _h.crop) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.id],
                FarmerName: [(_l = this.details.attributes) === null || _l === void 0 ? void 0 : _l.FarmerName],
                PlannedFarmDay: [(_m = this.details.attributes) === null || _m === void 0 ? void 0 : _m.PlannedFarmDay],
                ConditionOfCrop: [(_o = this.details.attributes) === null || _o === void 0 ? void 0 : _o.ConditionOfCrop],
                Date: [(_p = this.details.attributes) === null || _p === void 0 ? void 0 : _p.Date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Time: [(_q = this.details.attributes) === null || _q === void 0 ? void 0 : _q.Time, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Reason: [(_r = this.details.attributes) === null || _r === void 0 ? void 0 : _r.Reason, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            });
            this.maplink =
                "https://maps.google.com/?q=" + ((_s = this.details.attributes.Latitude) === null || _s === void 0 ? void 0 : _s.toString()) +
                    "," + ((_t = this.details.attributes.Longitude) === null || _t === void 0 ? void 0 : _t.toString());
            this.loading = false;
        });
    }
    getCrops() {
        this.dataservice.getCrops().valueChanges.subscribe((result) => {
            console.log("getCrops", result.data.crops.data);
            this.Crops = result.data.crops.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(id).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    dateConvertor(date) {
        return new Date(date);
    }
    openModal(data, flag) {
        this.resultModal.show();
        console.log(data, flag);
        this.flag = flag;
    }
    FormSubmit() {
        let resp = {};
        console.log(this.activitiesForm.value);
        this.dataservice
            .updateActivity(this.activitiesForm.value, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateActivity) {
                this.toastr.success("Activity updated successfully!");
                this.editModal.hide();
                this.getActivity();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    deleteActivity() {
        this.dataservice.deleteActivity(this.id).subscribe((result) => {
            console.log("response", result);
            if (result.data.deleteActivity) {
                this.toastr.success("Success!");
                this.deleteModal.hide();
                this.router.navigate(["/activities/all"]);
            }
            else {
                this.toastr.error("Failed!");
            }
        });
    }
};
ActivityDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ActivityDetailComponent.propDecorators = {
    editModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["editModal",] }],
    resultModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["resultModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }]
};
ActivityDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_activity_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ActivityDetailComponent);



/***/ }),

/***/ "e3Zl":
/*!**********************************************************!*\
  !*** ./src/app/views/activities/activities.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function() { return ActivitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_activities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./activities.component.html */ "Hcx8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");









let ActivitiesComponent = class ActivitiesComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.disableButton = true;
        this.orders = {};
        this.columnDefs = [];
        this.States = [];
        this.Areas = [];
        this.Crops = [];
        this.activitiesForm = this.fb.group({
            ActivityType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            NoOfAttendees: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            crop: [""],
            FarmerName: [""],
            PlannedFarmDay: [""],
            ConditionOfCrop: [""],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.rowData = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["ActivitiesColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        this.getActivities();
        this.getCrops();
        this.getAreas();
        this.getStates();
    }
    getActivities() {
        this.dataservice.getActivities().valueChanges.subscribe((result) => {
            console.log("getActivities", result.data.activities.data);
            this.rowData = result.data.activities.data;
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
    getAreas(lgaid) {
        this.dataservice.getAreas(lgaid).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
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
        let selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows, selectedRows[0].attributes.Name);
        this.router.navigate(["/activities/activity_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    openModal(data) {
        this.activitiesModal.show();
    }
    activitiesSubmit() {
        let resp = {};
        console.log(this.activitiesForm.value);
        this.dataservice
            .createActivity(this.activitiesForm.value)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createActivity) {
                this.toastr.success("Success!");
                this.getActivities();
                this.activitiesForm.reset();
                this.activitiesModal.hide();
                this.gridApi.deselectAll();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
};
ActivitiesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
ActivitiesComponent.propDecorators = {
    activitiesModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["activitiesModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }]
};
ActivitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_activities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], ActivitiesComponent);



/***/ }),

/***/ "hbGJ":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/activities/activity-detail.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this activity?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteActivity()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Activity Details</h2>\r\n      <span>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editModal.show()\">\r\n          Edit\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Activity type</td>\r\n                  <td>\r\n                    {{ details?.attributes?.ActivityType }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Date</td>\r\n                  <td>\r\n                    {{ dateConverterMin(details?.attributes?.Date) }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Time</td>\r\n                  <td>{{ details?.attributes?.Time }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Area</td>\r\n                  <td>{{ details?.attributes?.area?.data?.attributes?.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>No. of Attendees</td>\r\n                  <td>\r\n                    {{\r\n                    details?.attributes?.NoOfAttendees}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Location</td>\r\n                  <td>\r\n                    <a href=\"{{ maplink }}\" target=\"_blank\">Click here to view location</a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>FarmerName</td>\r\n                  <td>{{ details?.attributes?.FarmerName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Crop</td>\r\n                  <td>\r\n                    {{ details?.attributes?.crop?.data?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Condition Of crop</td>\r\n                  <td>{{ details?.attributes?.ConditionOfCrop }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Planned farm day</td>\r\n                  <td>\r\n                    {{\r\n                    dateConverterMin(details?.attributes?.PlannedFarmDay)\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Reason</td>\r\n                  <td>\r\n                    {{details?.attributes?.Reason}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n          aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Edit details</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"FormSubmit()\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"ActivityType\">Activity Type</label>\r\n                        <select class=\"form-control\" id=\"ActivityType\" required ngModel name=\"ActivityType\"\r\n                          formControlName=\"ActivityType\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option value=\"FarmDemo\">Farm Demo</option>\r\n                          <option value=\"GroupFarmerTraining\">Group Farmer Training</option>\r\n                          <option value=\"MegaFarmerTraining\">Mega Farmer Training</option>\r\n                          <option value=\"FarmDay\">Farm Day</option>\r\n                          <option value=\"RetailersTraining\">Retailers Training</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"area\">Area</label>\r\n                        <select class=\"form-control\" id=\"area\" required ngModel name=\"area\" formControlName=\"area\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.Name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Latitude\">Latitude</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\" formControlName=\"Latitude\"\r\n                          placeholder=\"Enter Latitude\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Longitude\">Longitude</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Longitude\" name=\"Longitude\"\r\n                          formControlName=\"Longitude\" placeholder=\"Enter Longitude\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"NoOfAttendees\">Number of attendees</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"NoOfAttendees\" name=\"NoOfAttendees\"\r\n                          formControlName=\"NoOfAttendees\" placeholder=\"Enter No. of attendees\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"FarmerName\">Farmer name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"FarmerName\" name=\"FarmerName\"\r\n                          formControlName=\"FarmerName\" placeholder=\"Enter name\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"crop\">Crop</label>\r\n                        <select class=\"form-control\" id=\"crop\" required ngModel name=\"crop\" formControlName=\"crop\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.Name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"ConditionOfCrop\" name=\"ConditionOfCrop\"\r\n                          formControlName=\"ConditionOfCrop\" placeholder=\"Enter condition\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                        <input type=\"date\" class=\"form-control\" id=\"PlannedFarmDay\" name=\"PlannedFarmDay\"\r\n                          formControlName=\"PlannedFarmDay\" placeholder=\"Enter Date\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Date\">Date</label>\r\n                        <input type=\"date\" class=\"form-control\" id=\"Date\" name=\"Date\" formControlName=\"Date\"\r\n                          placeholder=\"Enter Date\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Time\">Time</label>\r\n                        <input type=\"time\" class=\"form-control\" id=\"Time\" name=\"Time\" formControlName=\"Time\"\r\n                          placeholder=\"Enter Time\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Reason\">Body</label>\r\n                        <textarea class=\"form-control\" id=\"Reason\" rows=\"5\" name=\"Reason\" formControlName=\"Reason\"\r\n                          placeholder=\"Enter body\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activitiesModal.hide()\">\r\n                    Close\r\n                  </button>\r\n                  <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !activitiesForm.valid\">\r\n                    <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                      aria-hidden=\"true\"></span>\r\n                    Save changes\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "odFu":
/*!***************************************************************!*\
  !*** ./src/app/views/activities/activities-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ActivitiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesRoutingModule", function() { return ActivitiesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _activities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activities.component */ "e3Zl");
/* harmony import */ var _activity_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activity-detail.component */ "bCMp");





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
                component: _activities_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesComponent"],
            },
            {
                path: 'activity_details/:id',
                // canActivate: [AuthGuard],
                component: _activity_detail_component__WEBPACK_IMPORTED_MODULE_4__["ActivityDetailComponent"],
                data: {
                    // roles: 'MANAGER',
                    title: 'Activity Details'
                }
            },
        ]
    }
];
let ActivitiesRoutingModule = class ActivitiesRoutingModule {
};
ActivitiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ActivitiesRoutingModule);



/***/ }),

/***/ "ve2J":
/*!*******************************************************!*\
  !*** ./src/app/views/activities/activities.module.ts ***!
  \*******************************************************/
/*! exports provided: ActivitiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function() { return ActivitiesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./activities.component */ "e3Zl");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _activities_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./activities-routing.module */ "odFu");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _activity_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activity-detail.component */ "bCMp");





// Dropdowns Component


// Buttons Routing

// Angular



let ActivitiesModule = class ActivitiesModule {
};
ActivitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _activities_routing_module__WEBPACK_IMPORTED_MODULE_7__["ActivitiesRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _activities_component__WEBPACK_IMPORTED_MODULE_4__["ActivitiesComponent"],
            _activity_detail_component__WEBPACK_IMPORTED_MODULE_10__["ActivityDetailComponent"]
        ]
    })
], ActivitiesModule);



/***/ })

}]);
//# sourceMappingURL=views-activities-activities-module-es2017.js.map