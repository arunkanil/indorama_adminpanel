(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-activities-activities-module"],{

/***/ "Hcx8":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/activities/activities.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Activities</h2>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-secondary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"downloadActivitiesModal.show()\"\r\n        >\r\n          Download sheets\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-secondary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"uploadActivitiesModal.show()\"\r\n        >\r\n          Upload sheet\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"!disableButton\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Add New Activity\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\"\r\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #activitiesModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Activity</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"activitiesModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"activitiesSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"ActivityType\"\r\n                  >Activity Type <span class=\"danger\">*</span></label\r\n                >\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"ActivityType\"\r\n                  required\r\n                  ngModel\r\n                  name=\"ActivityType\"\r\n                  formControlName=\"ActivityType\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"FarmDemo\">Farm Demo</option>\r\n                  <option value=\"GroupFarmerTraining\">\r\n                    Group Farmer Training\r\n                  </option>\r\n                  <option value=\"MegaFarmerTraining\">\r\n                    Mega Farmer Training\r\n                  </option>\r\n                  <option value=\"FarmDay\">Farm Day</option>\r\n                  <option value=\"RetailersTraining\">Retailers Training</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"state\"\r\n                  required\r\n                  ngModel\r\n                  name=\"state\"\r\n                  formControlName=\"state\"\r\n                  (change)=\"filterLGA($event)\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"lga\">LGA</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"lga\"\r\n                  required\r\n                  ngModel\r\n                  name=\"lga\"\r\n                  formControlName=\"lga\"\r\n                  (change)=\"filterArea($event)\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"area\">City <span class=\"danger\">*</span></label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"area\"\r\n                  required\r\n                  ngModel\r\n                  name=\"area\"\r\n                  formControlName=\"area\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"NoOfAttendees\"\r\n                  >Number of attendees</label\r\n                >\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"form-control\"\r\n                  id=\"NoOfAttendees\"\r\n                  name=\"NoOfAttendees\"\r\n                  formControlName=\"NoOfAttendees\"\r\n                  placeholder=\"Enter no. of attendees\"\r\n                />\r\n                <div\r\n                  *ngIf=\"activitiesForm.value.NoOfAttendees > 999999\"\r\n                  class=\"danger\"\r\n                >\r\n                  Maximum 9999999\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Reason\">Body</label>\r\n                <textarea\r\n                  class=\"form-control\"\r\n                  id=\"Reason\"\r\n                  rows=\"5\"\r\n                  name=\"Reason\"\r\n                  formControlName=\"Reason\"\r\n                  placeholder=\"Enter body\"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FarmerName\">Farmer name</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"FarmerName\"\r\n                  name=\"FarmerName\"\r\n                  formControlName=\"FarmerName\"\r\n                  placeholder=\"Enter name\"\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    checkSpecialCharacters(activitiesForm.value.FarmerName)\r\n                  \"\r\n                  class=\"danger\"\r\n                >\r\n                  Special characters not permitted\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"crop\">Crop <span class=\"danger\">*</span></label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"crop\"\r\n                  ngModel\r\n                  name=\"crop\"\r\n                  formControlName=\"crop\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"ConditionOfCrop\"\r\n                  name=\"ConditionOfCrop\"\r\n                  formControlName=\"ConditionOfCrop\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"Good\">Good</option>\r\n                  <option value=\"VeryGood\">Very Good</option>\r\n                  <option value=\"Excellent\">Excellent</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"PlannedFarmDay\"\r\n                  name=\"PlannedFarmDay\"\r\n                  formControlName=\"PlannedFarmDay\"\r\n                  placeholder=\"Enter Date\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Date\">Date <span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"Date\"\r\n                  name=\"Date\"\r\n                  formControlName=\"Date\"\r\n                  placeholder=\"Enter Date\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Time\">Time</label>\r\n                <input\r\n                  type=\"time\"\r\n                  class=\"form-control\"\r\n                  id=\"Time\"\r\n                  name=\"Time\"\r\n                  formControlName=\"Time\"\r\n                  placeholder=\"Enter Time\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"activitiesModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !activitiesForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div\r\n  bsModal\r\n  #downloadActivitiesModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Download Activity</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"downloadActivitiesModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"downloadExcelForm\" (ngSubmit)=\"downloadActivities()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"fromDate\">From<span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"fromDate\"\r\n                  required\r\n                  ngModel\r\n                  name=\"fromDate\"\r\n                  formControlName=\"fromDate\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"toDate\">From<span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"toDate\"\r\n                  required\r\n                  ngModel\r\n                  name=\"toDate\"\r\n                  formControlName=\"toDate\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"downloadActivitiesModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !downloadExcelForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Download\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #uploadActivitiesModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Upload Activities</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"uploadActivitiesModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"uploadExcelForm\" (ngSubmit)=\"uploadActivities()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Image\">Excel file</label>\r\n                <input\r\n                  type=\"file\"\r\n                  class=\"form-control\"\r\n                  id=\"File\"\r\n                  accept=\".xlsx\"\r\n                  name=\"File\"\r\n                  (change)=\"onChange($event)\"\r\n                  formControlName=\"File\"\r\n                  placeholder=\"Choose file\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row template-download\">\r\n            <a href=\"/assets/activities_template.xlsx\" download=\"activities_template.xlsx\" target=\"_blank\">Download Template</a>\r\n          </div>\r\n          \r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"uploadActivitiesModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !uploadExcelForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Upload\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

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
        this.States = [];
        this.LGA = [];
        this.Crops = [];
        this.activitiesForm = this.fb.group({
            ActivityType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: [""],
            Longitude: [""],
            NoOfAttendees: [""],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            crop: [""],
            FarmerName: [""],
            PlannedFarmDay: [""],
            ConditionOfCrop: [""],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Time: [""],
            Reason: [""],
        });
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.getActivity();
        this.getStates();
        this.getLGAs();
        this.getAreas();
        this.getCrops();
    }
    getActivity() {
        this.dataservice
            .getActivity(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25, _26, _27, _28, _29, _30;
            console.log("getActivity", (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.activity) === null || _b === void 0 ? void 0 : _b.data);
            this.details = (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.activity) === null || _d === void 0 ? void 0 : _d.data;
            this.activitiesForm = this.fb.group({
                ActivityType: [
                    (_f = (_e = this.details) === null || _e === void 0 ? void 0 : _e.attributes) === null || _f === void 0 ? void 0 : _f.ActivityType,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                Latitude: [(_h = (_g = this.details) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.Latitude],
                Longitude: [(_k = (_j = this.details) === null || _j === void 0 ? void 0 : _j.attributes) === null || _k === void 0 ? void 0 : _k.Longitude],
                NoOfAttendees: [
                    (_m = (_l = this.details) === null || _l === void 0 ? void 0 : _l.attributes) === null || _m === void 0 ? void 0 : _m.NoOfAttendees,
                ],
                state: [(_x = (_w = (_v = (_u = (_t = (_s = (_r = (_q = (_p = (_o = this.details) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.area) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.attributes) === null || _s === void 0 ? void 0 : _s.lga) === null || _t === void 0 ? void 0 : _t.data) === null || _u === void 0 ? void 0 : _u.attributes) === null || _v === void 0 ? void 0 : _v.state) === null || _w === void 0 ? void 0 : _w.data) === null || _x === void 0 ? void 0 : _x.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                lga: [(_4 = (_3 = (_2 = (_1 = (_0 = (_z = (_y = this.details) === null || _y === void 0 ? void 0 : _y.attributes) === null || _z === void 0 ? void 0 : _z.area) === null || _0 === void 0 ? void 0 : _0.data) === null || _1 === void 0 ? void 0 : _1.attributes) === null || _2 === void 0 ? void 0 : _2.lga) === null || _3 === void 0 ? void 0 : _3.data) === null || _4 === void 0 ? void 0 : _4.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                area: [(_8 = (_7 = (_6 = (_5 = this.details) === null || _5 === void 0 ? void 0 : _5.attributes) === null || _6 === void 0 ? void 0 : _6.area) === null || _7 === void 0 ? void 0 : _7.data) === null || _8 === void 0 ? void 0 : _8.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                crop: [(_12 = (_11 = (_10 = (_9 = this.details) === null || _9 === void 0 ? void 0 : _9.attributes) === null || _10 === void 0 ? void 0 : _10.crop) === null || _11 === void 0 ? void 0 : _11.data) === null || _12 === void 0 ? void 0 : _12.id],
                FarmerName: [(_14 = (_13 = this.details) === null || _13 === void 0 ? void 0 : _13.attributes) === null || _14 === void 0 ? void 0 : _14.FarmerName],
                PlannedFarmDay: [(_16 = (_15 = this.details) === null || _15 === void 0 ? void 0 : _15.attributes) === null || _16 === void 0 ? void 0 : _16.PlannedFarmDay],
                ConditionOfCrop: [(_18 = (_17 = this.details) === null || _17 === void 0 ? void 0 : _17.attributes) === null || _18 === void 0 ? void 0 : _18.ConditionOfCrop],
                Date: [(_20 = (_19 = this.details) === null || _19 === void 0 ? void 0 : _19.attributes) === null || _20 === void 0 ? void 0 : _20.Date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Time: [(_22 = (_21 = this.details) === null || _21 === void 0 ? void 0 : _21.attributes) === null || _22 === void 0 ? void 0 : _22.Time,],
                Reason: [(_24 = (_23 = this.details) === null || _23 === void 0 ? void 0 : _23.attributes) === null || _24 === void 0 ? void 0 : _24.Reason],
            });
            this.maplink =
                "https://maps.google.com/?q=" + ((_27 = (_26 = (_25 = this.details) === null || _25 === void 0 ? void 0 : _25.attributes) === null || _26 === void 0 ? void 0 : _26.Latitude) === null || _27 === void 0 ? void 0 : _27.toString()) +
                    "," + ((_30 = (_29 = (_28 = this.details) === null || _28 === void 0 ? void 0 : _28.attributes) === null || _29 === void 0 ? void 0 : _29.Longitude) === null || _30 === void 0 ? void 0 : _30.toString());
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
    getStates() {
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            this.States = result.data.states.data;
        });
    }
    getLGAs(id) {
        this.dataservice.getLGAs(id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    filterArea(event) {
        this.getAreas(event.target.value);
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    returnActivityType(data) {
        if (data)
            return data.replace(/([A-Z])/g, " $1").trim();
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
        this.btnLoading = true;
        this.dataservice
            .updateActivity(this.activitiesForm.value, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateActivity) {
                this.toastr.success("Activity updated successfully!");
                this.btnLoading = false;
                this.editModal.hide();
                this.getActivity();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let ActivitiesComponent = class ActivitiesComponent {
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
        this.count = 1;
        this.columnDefs = [];
        this.States = [];
        this.LGA = [];
        this.Areas = [];
        this.Crops = [];
        this.file = null;
        this.activitiesForm = this.fb.group({
            ActivityType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Latitude: [""],
            Longitude: [""],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            NoOfAttendees: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1)],
            ],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            FarmerName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z ]*")],
            PlannedFarmDay: [""],
            ConditionOfCrop: [""],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Time: [""],
            Reason: [""],
        });
        this.downloadExcelForm = this.fb.group({
            fromDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            toDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.uploadExcelForm = this.fb.group({
            File: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.rowData = [];
        this.pageSize = 20;
        this.from = 1;
        this.to = 20;
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
    checkSpecialCharacters(data) {
        let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (format.test(data)) {
            return true;
        }
        else {
            return false;
        }
    }
    getLGAs(id) {
        this.dataservice.getLGAs(id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    filterArea(event) {
        this.getAreas(event.target.value);
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    getActivities() {
        console.log("jshdbfkjhsdfkjsdf");
        this.dataservice
            .getActivities(1, this.pageSize)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.meta = result.data.activities.meta;
            if (((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                this.disablePrevButton = true;
                this.disableNextButton = true;
            }
            if (((_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < this.pageSize) {
                this.to = (_f = (_e = this.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
            }
            this.rowData = result.data.activities.data;
        });
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
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
            .getActivities(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.activities.meta;
            this.rowData = result.data.activities.data;
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
            .getActivities(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.activities.meta;
            this.rowData = result.data.activities.data;
        });
    }
    getCrops() {
        this.dataservice.getCrops().valueChanges.subscribe((result) => {
            this.Crops = result.data.crops.data;
        });
    }
    getStates() {
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            this.States = result.data.states.data;
        });
    }
    getAreas(lgaid) {
        this.dataservice.getAreas(lgaid).valueChanges.subscribe((result) => {
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
    onChange(event) {
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
    }
    onSelectionChanged(event) {
        let selectedRows = this.gridApi.getSelectedRows();
        this.router.navigate(["/activities/activity_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    openModal() {
        this.activitiesModal.show();
    }
    activitiesSubmit() {
        console.log("Values before submit", this.activitiesForm.value);
        let resp = {};
        this.btnLoading = true;
        this.dataservice
            .createActivity(this.activitiesForm.value)
            .subscribe((result) => {
            resp = result.data;
            if (result.data.createActivity) {
                this.toastr.success("Success!");
                this.getActivities();
                this.activitiesForm.reset();
                this.btnLoading = false;
                this.activitiesModal.hide();
                this.gridApi.deselectAll();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
            }
        });
    }
    downloadActivities() {
        console.log(this.downloadExcelForm.value);
        let resp = {};
        this.btnLoading = true;
        this.dataservice
            .downloadActivities(this.downloadExcelForm.value)
            .subscribe((result) => {
            var _a;
            resp = result.body;
            console.log(result);
            if (result.status === 200 && result.body.status == "Success") {
                this.toastr.success(result.body.message);
                this.btnLoading = false;
                window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}${(_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path}`, "_blank");
            }
            else {
                this.btnLoading = false;
                this.toastr.error(result.body.message);
            }
        });
    }
    uploadActivities() {
        let resp = {};
        this.dataservice.uploadActivities(this.file).subscribe((response) => {
            if (response.status == 200) {
                console.log(response);
                this.toastr.success("Success!");
                this.file = null;
                this.getActivities();
                this.uploadActivitiesModal.hide();
            }
            else {
                this.toastr.error("Failed!");
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
    downloadActivitiesModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["downloadActivitiesModal",] }],
    uploadActivitiesModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["uploadActivitiesModal",] }]
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this activity?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\n            No! Cancel.\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteActivity()\">\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Activity Details</h2>\n      <span>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editModal.show()\">\n          Edit\n        </button>\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\n          Delete\n        </button>\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>{{ details?.id }}</td>\n                </tr>\n                <tr>\n                  <td>Activity type</td>\n                  <td>\n                    {{ returnActivityType(details?.attributes?.ActivityType) }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Date</td>\n                  <td>\n                    {{ dateConverterMin(details?.attributes?.Date) }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Time</td>\n                  <td>{{ details?.attributes?.Time }}</td>\n                </tr>\n                <tr>\n                  <td>City</td>\n                  <td>{{ details?.attributes?.area?.data?.attributes?.Name }}</td>\n                </tr>\n                <tr>\n                  <td>No. of Attendees</td>\n                  <td>\n                    {{\n                    details?.attributes?.NoOfAttendees}}\n                  </td>\n                </tr>\n\n                <tr>\n                  <td>Farmer Name</td>\n                  <td>{{ details?.attributes?.FarmerName }}</td>\n                </tr>\n                <tr>\n                  <td>Crop</td>\n                  <td>\n                    {{ details?.attributes?.crop?.data?.attributes?.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Condition of crop</td>\n                  <td>{{ details?.attributes?.ConditionOfCrop }}</td>\n                </tr>\n                <tr>\n                  <td>Planned farm day</td>\n                  <td>\n                    {{\n                    dateConverterMin(details?.attributes?.PlannedFarmDay)\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Body</td>\n                  <td>\n                    {{details?.attributes?.Reason}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n          aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Edit details</h4>\n                <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"FormSubmit()\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"ActivityType\">Activity Type <span class=\"danger\">*</span></label>\n                        <select\n                          class=\"form-control\"\n                          id=\"ActivityType\"\n                          required\n                          ngModel\n                          name=\"ActivityType\"\n                          formControlName=\"ActivityType\"\n                        >\n                          <option value=\"\" disabled selected hidden>Choose...</option>\n                          <option value=\"FarmDemo\">Farm Demo</option>\n                          <option value=\"GroupFarmerTraining\">\n                            Group Farmer Training\n                          </option>\n                          <option value=\"MegaFarmerTraining\">\n                            Mega Farmer Training\n                          </option>\n                          <option value=\"FarmDay\">Farm Day</option>\n                          <option value=\"RetailersTraining\">Retailers Training</option>\n                        </select>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"state\">State <span class=\"danger\">*</span></label>\n                        <select\n                          class=\"form-control\"\n                          id=\"state\"\n                          required\n                          ngModel\n                          name=\"state\"\n                          formControlName=\"state\"\n                          (change)=\"filterLGA($event)\"\n                        >\n                          <option value=\"\" disabled selected hidden>\n                            Choose...\n                          </option>\n                          <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                            {{ item.attributes.Name }}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"lga\">LGA <span class=\"danger\">*</span></label>\n                        <select\n                          class=\"form-control\"\n                          id=\"lga\"\n                          required\n                          ngModel\n                          name=\"lga\"\n                          formControlName=\"lga\"\n                          (change)=\"filterArea($event)\"\n                        >\n                          <option value=\"\" disabled selected hidden>\n                            Choose...\n                          </option>\n                          <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                            {{ item.attributes.Name }}\n                          </option>\n                        </select>\n                      </div>\n\n\n                      <div class=\"form-group\">\n                        <label for=\"area\">City <span class=\"danger\">*</span></label>\n                        <select\n                          class=\"form-control\"\n                          id=\"area\"\n                          required\n                          ngModel\n                          name=\"area\"\n                          formControlName=\"area\"\n                        >\n                          <option value=\"\" disabled selected hidden>Choose...</option>\n                          <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                            {{ item.attributes.Name }}\n                          </option>\n                        </select>\n                      </div>\n\n                      <div class=\"form-group\">\n                        <label for=\"NoOfAttendees\">Number of attendees</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"NoOfAttendees\"\n                          name=\"NoOfAttendees\"\n                          formControlName=\"NoOfAttendees\"\n                          placeholder=\"Enter No. of attendees\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Reason\">Body </label>\n                        <textarea\n                          class=\"form-control\"\n                          id=\"Reason\"\n                          rows=\"5\"\n                          name=\"Reason\"\n                          formControlName=\"Reason\"\n                          placeholder=\"Enter body\"\n                        ></textarea>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"FarmerName\">Farmer name</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"FarmerName\"\n                          name=\"FarmerName\"\n                          formControlName=\"FarmerName\"\n                          placeholder=\"Enter name\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"crop\">Crop</label>\n                        <select\n                          class=\"form-control\"\n                          id=\"crop\"\n                          ngModel\n                          name=\"crop\"\n                          formControlName=\"crop\"\n                        >\n                          <option value=\"\" disabled selected hidden>Choose...</option>\n                          <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\n                            {{ item.attributes.Name }}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"ConditionOfCrop\">Condition of crop</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"ConditionOfCrop\"\n                          name=\"ConditionOfCrop\"\n                          formControlName=\"ConditionOfCrop\"\n                          placeholder=\"Enter condition\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"PlannedFarmDay\">Planned farm day</label>\n                        <input\n                          type=\"date\"\n                          class=\"form-control\"\n                          id=\"PlannedFarmDay\"\n                          name=\"PlannedFarmDay\"\n                          formControlName=\"PlannedFarmDay\"\n                          placeholder=\"Enter Date\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Date\">Date <span class=\"danger\">*</span></label>\n                        <input\n                          type=\"date\"\n                          class=\"form-control\"\n                          id=\"Date\"\n                          name=\"Date\"\n                          formControlName=\"Date\"\n                          placeholder=\"Enter Date\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Time\">Time</label>\n                        <input\n                          type=\"time\"\n                          class=\"form-control\"\n                          id=\"Time\"\n                          name=\"Time\"\n                          formControlName=\"Time\"\n                          placeholder=\"Enter Time\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-secondary\"\n                    (click)=\"editModal.hide()\"\n                  >\n                    Close\n                  </button>\n                  <button\n                    type=\"submit\"\n                    class=\"btn btn-primary ml-2\"\n                    [disabled]=\"btnLoading || !activitiesForm.valid\"\n                  >\n                    <span\n                      *ngIf=\"btnLoading\"\n                      class=\"spinner-border spinner-border-sm\"\n                      role=\"status\"\n                      aria-hidden=\"true\"\n                    ></span>\n                    Save changes\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");

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
                data: {
                    // roles: 'MANAGER',
                    title: 'Activities'
                }
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