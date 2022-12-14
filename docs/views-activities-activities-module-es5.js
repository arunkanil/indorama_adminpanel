(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-activities-activities-module"], {
    /***/
    "Hcx8": function Hcx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Activities</h2>\r\n      <div>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-secondary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"downloadActivitiesModal.show()\"\r\n        >\r\n          Download sheets\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-outline-secondary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"uploadActivitiesModal.show()\"\r\n        >\r\n          Upload sheet\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          [disabled]=\"!disableButton\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"openModal()\"\r\n        >\r\n          Add New Activity\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\"\r\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #activitiesModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Activity</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"activitiesModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"activitiesSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"ActivityType\"\r\n                  >Activity Type <span class=\"danger\">*</span></label\r\n                >\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"ActivityType\"\r\n                  required\r\n                  ngModel\r\n                  name=\"ActivityType\"\r\n                  formControlName=\"ActivityType\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"FarmDemo\">Farm Demo</option>\r\n                  <option value=\"GroupFarmerTraining\">\r\n                    Group Farmer Training\r\n                  </option>\r\n                  <option value=\"MegaFarmerTraining\">\r\n                    Mega Farmer Training\r\n                  </option>\r\n                  <option value=\"FarmDay\">Farm Day</option>\r\n                  <option value=\"RetailersTraining\">Retailers Training</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"area\">City <span class=\"danger\">*</span></label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"area\"\r\n                  required\r\n                  ngModel\r\n                  name=\"area\"\r\n                  formControlName=\"area\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Latitude\"\r\n                  >Latitude <span class=\"danger\">*</span></label\r\n                >\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"form-control\"\r\n                  id=\"Latitude\"\r\n                  name=\"Latitude\"\r\n                  formControlName=\"Latitude\"\r\n                  placeholder=\"Enter Latitude\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Longitude\"\r\n                  >Longitude <span class=\"danger\">*</span></label\r\n                >\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"form-control\"\r\n                  id=\"Longitude\"\r\n                  name=\"Longitude\"\r\n                  formControlName=\"Longitude\"\r\n                  placeholder=\"Enter Longitude\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"NoOfAttendees\"\r\n                  >Number of attendees <span class=\"danger\">*</span></label\r\n                >\r\n                <input\r\n                  type=\"number\"\r\n                  class=\"form-control\"\r\n                  id=\"NoOfAttendees\"\r\n                  name=\"NoOfAttendees\"\r\n                  formControlName=\"NoOfAttendees\"\r\n                  placeholder=\"Enter no. of attendees\"\r\n                />\r\n                <div\r\n                  *ngIf=\"activitiesForm.value.NoOfAttendees > 999999\"\r\n                  class=\"danger\"\r\n                >\r\n                  Maximum 9999999\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Reason\">Body <span class=\"danger\">*</span></label>\r\n                <textarea\r\n                  class=\"form-control\"\r\n                  id=\"Reason\"\r\n                  rows=\"5\"\r\n                  name=\"Reason\"\r\n                  formControlName=\"Reason\"\r\n                  placeholder=\"Enter body\"\r\n                ></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FarmerName\">Farmer name</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"FarmerName\"\r\n                  name=\"FarmerName\"\r\n                  formControlName=\"FarmerName\"\r\n                  placeholder=\"Enter name\"\r\n                />\r\n                <div\r\n                  *ngIf=\"\r\n                    checkSpecialCharacters(activitiesForm.value.FarmerName)\r\n                  \"\r\n                  class=\"danger\"\r\n                >\r\n                  Special characters not permitted\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"crop\">Crop</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"crop\"\r\n                  ngModel\r\n                  name=\"crop\"\r\n                  formControlName=\"crop\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"ConditionOfCrop\"\r\n                  name=\"ConditionOfCrop\"\r\n                  formControlName=\"ConditionOfCrop\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"Good\">Good</option>\r\n                  <option value=\"VeryGood\">Very Good</option>\r\n                  <option value=\"Excellent\">Excellent</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"PlannedFarmDay\"\r\n                  name=\"PlannedFarmDay\"\r\n                  formControlName=\"PlannedFarmDay\"\r\n                  placeholder=\"Enter Date\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Date\">Date <span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"Date\"\r\n                  name=\"Date\"\r\n                  formControlName=\"Date\"\r\n                  placeholder=\"Enter Date\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Time\">Time <span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"time\"\r\n                  class=\"form-control\"\r\n                  id=\"Time\"\r\n                  name=\"Time\"\r\n                  formControlName=\"Time\"\r\n                  placeholder=\"Enter Time\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"activitiesModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !activitiesForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div\r\n  bsModal\r\n  #downloadActivitiesModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Download Activity</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"downloadActivitiesModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"downloadExcelForm\" (ngSubmit)=\"downloadActivities()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"fromDate\">From<span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"fromDate\"\r\n                  required\r\n                  ngModel\r\n                  name=\"fromDate\"\r\n                  formControlName=\"fromDate\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"toDate\">From<span class=\"danger\">*</span></label>\r\n                <input\r\n                  type=\"date\"\r\n                  class=\"form-control\"\r\n                  id=\"toDate\"\r\n                  required\r\n                  ngModel\r\n                  name=\"toDate\"\r\n                  formControlName=\"toDate\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"downloadActivitiesModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !downloadExcelForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Download\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #uploadActivitiesModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Upload Activities</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"uploadActivitiesModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"uploadExcelForm\" (ngSubmit)=\"uploadActivities()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Image\">Excel file</label>\r\n                <input\r\n                  type=\"file\"\r\n                  class=\"form-control\"\r\n                  id=\"File\"\r\n                  accept=\".xlsx\"\r\n                  name=\"File\"\r\n                  (change)=\"onChange($event)\"\r\n                  formControlName=\"File\"\r\n                  placeholder=\"Choose file\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row template-download\">\r\n            <a href=\"/assets/activities_template.xlsx\" download=\"activities_template.xlsx\" target=\"_blank\">Download Template</a>\r\n          </div>\r\n          \r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"uploadActivitiesModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !uploadExcelForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Upload\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "bCMp": function bCMp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityDetailComponent", function () {
        return ActivityDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activity_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activity-detail.component.html */
      "hbGJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var ActivityDetailComponent = /*#__PURE__*/function () {
        function ActivityDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, ActivityDetailComponent);

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
            Reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }

        _createClass(ActivityDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRouter.params.subscribe(function (params) {
              _this.id = params["id"];
            });
            this.getActivity();
            this.getAreas();
            this.getCrops();
          }
        }, {
          key: "getActivity",
          value: function getActivity() {
            var _this2 = this;

            this.dataservice.getActivity(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13;

              console.log("getActivity", (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.activity) === null || _b === void 0 ? void 0 : _b.data);
              _this2.details = (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.activity) === null || _d === void 0 ? void 0 : _d.data;
              _this2.activitiesForm = _this2.fb.group({
                ActivityType: [(_f = (_e = _this2.details) === null || _e === void 0 ? void 0 : _e.attributes) === null || _f === void 0 ? void 0 : _f.ActivityType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [(_h = (_g = _this2.details) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_k = (_j = _this2.details) === null || _j === void 0 ? void 0 : _j.attributes) === null || _k === void 0 ? void 0 : _k.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NoOfAttendees: [(_m = (_l = _this2.details) === null || _l === void 0 ? void 0 : _l.attributes) === null || _m === void 0 ? void 0 : _m.NoOfAttendees, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                area: [(_r = (_q = (_p = (_o = _this2.details) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.area) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                crop: [(_v = (_u = (_t = (_s = _this2.details) === null || _s === void 0 ? void 0 : _s.attributes) === null || _t === void 0 ? void 0 : _t.crop) === null || _u === void 0 ? void 0 : _u.data) === null || _v === void 0 ? void 0 : _v.id],
                FarmerName: [(_x = (_w = _this2.details) === null || _w === void 0 ? void 0 : _w.attributes) === null || _x === void 0 ? void 0 : _x.FarmerName],
                PlannedFarmDay: [(_z = (_y = _this2.details) === null || _y === void 0 ? void 0 : _y.attributes) === null || _z === void 0 ? void 0 : _z.PlannedFarmDay],
                ConditionOfCrop: [(_1 = (_0 = _this2.details) === null || _0 === void 0 ? void 0 : _0.attributes) === null || _1 === void 0 ? void 0 : _1.ConditionOfCrop],
                Date: [(_3 = (_2 = _this2.details) === null || _2 === void 0 ? void 0 : _2.attributes) === null || _3 === void 0 ? void 0 : _3.Date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Time: [(_5 = (_4 = _this2.details) === null || _4 === void 0 ? void 0 : _4.attributes) === null || _5 === void 0 ? void 0 : _5.Time, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Reason: [(_7 = (_6 = _this2.details) === null || _6 === void 0 ? void 0 : _6.attributes) === null || _7 === void 0 ? void 0 : _7.Reason, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              _this2.maplink = "https://maps.google.com/?q=" + ((_10 = (_9 = (_8 = _this2.details) === null || _8 === void 0 ? void 0 : _8.attributes) === null || _9 === void 0 ? void 0 : _9.Latitude) === null || _10 === void 0 ? void 0 : _10.toString()) + "," + ((_13 = (_12 = (_11 = _this2.details) === null || _11 === void 0 ? void 0 : _11.attributes) === null || _12 === void 0 ? void 0 : _12.Longitude) === null || _13 === void 0 ? void 0 : _13.toString());
              _this2.loading = false;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this3 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              console.log("getCrops", result.data.crops.data);
              _this3.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(id) {
            var _this4 = this;

            this.dataservice.getAreas(id).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this4.Areas = result.data.areas.data;
            });
          }
        }, {
          key: "returnActivityType",
          value: function returnActivityType(data) {
            if (data) return data.replace(/([A-Z])/g, " $1").trim();
          }
        }, {
          key: "dateConvertor",
          value: function dateConvertor(date) {
            return new Date(date);
          }
        }, {
          key: "openModal",
          value: function openModal(data, flag) {
            this.resultModal.show();
            console.log(data, flag);
            this.flag = flag;
          }
        }, {
          key: "FormSubmit",
          value: function FormSubmit() {
            var _this5 = this;

            var resp = {};
            console.log(this.activitiesForm.value);
            this.btnLoading = true;
            this.dataservice.updateActivity(this.activitiesForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateActivity) {
                _this5.toastr.success("Activity updated successfully!");

                _this5.btnLoading = false;

                _this5.editModal.hide();

                _this5.getActivity();
              } else {
                _this5.toastr.error("Failed. Please check the fields!");

                _this5.btnLoading = false;
              }
            });
          }
        }, {
          key: "deleteActivity",
          value: function deleteActivity() {
            var _this6 = this;

            this.dataservice.deleteActivity(this.id).subscribe(function (result) {
              console.log("response", result);

              if (result.data.deleteActivity) {
                _this6.toastr.success("Success!");

                _this6.deleteModal.hide();

                _this6.router.navigate(["/activities/all"]);
              } else {
                _this6.toastr.error("Failed!");
              }
            });
          }
        }]);

        return ActivityDetailComponent;
      }();

      ActivityDetailComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      ActivityDetailComponent.propDecorators = {
        editModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["editModal"]
        }],
        resultModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["resultModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }]
      };
      ActivityDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_activity_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], ActivityDetailComponent);
      /***/
    },

    /***/
    "e3Zl": function e3Zl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function () {
        return ActivitiesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_activities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./activities.component.html */
      "Hcx8");
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


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var ActivitiesComponent = /*#__PURE__*/function () {
        function ActivitiesComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, ActivitiesComponent);

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
          this.Areas = [];
          this.Crops = [];
          this.file = null;
          this.activitiesForm = this.fb.group({
            ActivityType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            NoOfAttendees: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            crop: [""],
            FarmerName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-zA-Z ]*")],
            PlannedFarmDay: [""],
            ConditionOfCrop: [""],
            Date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Time: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.downloadExcelForm = this.fb.group({
            fromDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            toDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.uploadExcelForm = this.fb.group({
            File: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.rowData = [];
          this.pageSize = 20;
          this.from = 1;
          this.to = 20;
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["ActivitiesColumn"]);
          this.rowSelection = "single";
        }

        _createClass(ActivitiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            this.getActivities();
            this.getCrops();
            this.getAreas();
            this.getStates();
          }
        }, {
          key: "checkSpecialCharacters",
          value: function checkSpecialCharacters(data) {
            var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

            if (format.test(data)) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "getActivities",
          value: function getActivities() {
            var _this7 = this;

            console.log("jshdbfkjhsdfkjsdf");
            this.dataservice.getActivities(1, this.pageSize).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f;

              _this7.meta = result.data.activities.meta;

              if (((_b = (_a = _this7.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this7.disablePrevButton = true;
                _this7.disableNextButton = true;
              }

              if (((_d = (_c = _this7.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < _this7.pageSize) {
                _this7.to = (_f = (_e = _this7.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
              }

              _this7.rowData = result.data.activities.data;
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this8 = this;

            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.dataservice.getActivities(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this8.meta = result.data.activities.meta;
              _this8.rowData = result.data.activities.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this9 = this;

            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getActivities(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this9.meta = result.data.activities.meta;
              _this9.rowData = result.data.activities.data;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this10 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              _this10.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this11 = this;

            this.dataservice.getStates().valueChanges.subscribe(function (result) {
              _this11.States = result.data.states.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(lgaid) {
            var _this12 = this;

            this.dataservice.getAreas(lgaid).valueChanges.subscribe(function (result) {
              _this12.Areas = result.data.areas.data;
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
            console.log("row", event.data);
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.file = [];

            for (var i = 0; i < event.target.files.length; i++) {
              this.file.push(event.target.files[i]);
            }

            console.log(this.file);
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            var selectedRows = this.gridApi.getSelectedRows();
            this.router.navigate(["/activities/activity_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal() {
            this.activitiesModal.show();
          }
        }, {
          key: "activitiesSubmit",
          value: function activitiesSubmit() {
            var _this13 = this;

            var resp = {};
            this.btnLoading = true;
            this.dataservice.createActivity(this.activitiesForm.value).subscribe(function (result) {
              resp = result.data;

              if (result.data.createActivity) {
                _this13.toastr.success("Success!");

                _this13.getActivities();

                _this13.activitiesForm.reset();

                _this13.btnLoading = false;

                _this13.activitiesModal.hide();

                _this13.gridApi.deselectAll();
              } else {
                _this13.toastr.error("Failed. Please check the fields!");

                _this13.btnLoading = false;
              }
            });
          }
        }, {
          key: "downloadActivities",
          value: function downloadActivities() {
            var _this14 = this;

            console.log(this.downloadExcelForm.value);
            var resp = {};
            this.btnLoading = true;
            this.dataservice.downloadActivities(this.downloadExcelForm.value).subscribe(function (result) {
              var _a;

              resp = result.body;
              console.log(result);

              if (result.status === 200 && result.body.status == "Success") {
                _this14.toastr.success(result.body.message);

                _this14.btnLoading = false;
                window.open("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl).concat((_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path), "_blank");
              } else {
                _this14.btnLoading = false;

                _this14.toastr.error(result.body.message);
              }
            });
          }
        }, {
          key: "uploadActivities",
          value: function uploadActivities() {
            var _this15 = this;

            var resp = {};
            this.dataservice.uploadActivities(this.file).subscribe(function (response) {
              if (response.status == 200) {
                console.log(response);

                _this15.toastr.success("Success!");

                _this15.file = null;

                _this15.getActivities();

                _this15.uploadActivitiesModal.hide();
              } else {
                _this15.toastr.error("Failed!");
              }
            });
          }
        }]);

        return ActivitiesComponent;
      }();

      ActivitiesComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      ActivitiesComponent.propDecorators = {
        activitiesModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["activitiesModal"]
        }],
        downloadActivitiesModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["downloadActivitiesModal"]
        }],
        uploadActivitiesModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["uploadActivitiesModal"]
        }]
      };
      ActivitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_activities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], ActivitiesComponent);
      /***/
    },

    /***/
    "hbGJ": function hbGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this activity?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteActivity()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Activity Details</h2>\r\n      <span>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editModal.show()\">\r\n          Edit\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Activity type</td>\r\n                  <td>\r\n                    {{ returnActivityType(details?.attributes?.ActivityType) }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Date</td>\r\n                  <td>\r\n                    {{ dateConverterMin(details?.attributes?.Date) }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Time</td>\r\n                  <td>{{ details?.attributes?.Time }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>City</td>\r\n                  <td>{{ details?.attributes?.area?.data?.attributes?.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>No. of Attendees</td>\r\n                  <td>\r\n                    {{\r\n                    details?.attributes?.NoOfAttendees}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Location</td>\r\n                  <td>\r\n                    <a href=\"{{ maplink }}\" target=\"_blank\">Click here to view location</a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Farmer Name</td>\r\n                  <td>{{ details?.attributes?.FarmerName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Crop</td>\r\n                  <td>\r\n                    {{ details?.attributes?.crop?.data?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Condition of crop</td>\r\n                  <td>{{ details?.attributes?.ConditionOfCrop }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Planned farm day</td>\r\n                  <td>\r\n                    {{\r\n                    dateConverterMin(details?.attributes?.PlannedFarmDay)\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Body</td>\r\n                  <td>\r\n                    {{details?.attributes?.Reason}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n          aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Edit details</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"FormSubmit()\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"ActivityType\">Activity Type <span class=\"danger\">*</span></label>\r\n                        <select\r\n                          class=\"form-control\"\r\n                          id=\"ActivityType\"\r\n                          required\r\n                          ngModel\r\n                          name=\"ActivityType\"\r\n                          formControlName=\"ActivityType\"\r\n                        >\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option value=\"FarmDemo\">Farm Demo</option>\r\n                          <option value=\"GroupFarmerTraining\">\r\n                            Group Farmer Training\r\n                          </option>\r\n                          <option value=\"MegaFarmerTraining\">\r\n                            Mega Farmer Training\r\n                          </option>\r\n                          <option value=\"FarmDay\">Farm Day</option>\r\n                          <option value=\"RetailersTraining\">Retailers Training</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"area\">City <span class=\"danger\">*</span></label>\r\n                        <select\r\n                          class=\"form-control\"\r\n                          id=\"area\"\r\n                          required\r\n                          ngModel\r\n                          name=\"area\"\r\n                          formControlName=\"area\"\r\n                        >\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.Name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Latitude\">Latitude <span class=\"danger\">*</span></label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"Latitude\"\r\n                          name=\"Latitude\"\r\n                          formControlName=\"Latitude\"\r\n                          placeholder=\"Enter Latitude\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Longitude\">Longitude <span class=\"danger\">*</span></label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"Longitude\"\r\n                          name=\"Longitude\"\r\n                          formControlName=\"Longitude\"\r\n                          placeholder=\"Enter Longitude\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"NoOfAttendees\">Number of attendees <span class=\"danger\">*</span></label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"NoOfAttendees\"\r\n                          name=\"NoOfAttendees\"\r\n                          formControlName=\"NoOfAttendees\"\r\n                          placeholder=\"Enter No. of attendees\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Reason\">Body <span class=\"danger\">*</span></label>\r\n                        <textarea\r\n                          class=\"form-control\"\r\n                          id=\"Reason\"\r\n                          rows=\"5\"\r\n                          name=\"Reason\"\r\n                          formControlName=\"Reason\"\r\n                          placeholder=\"Enter body\"\r\n                        ></textarea>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"FarmerName\">Farmer name</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"FarmerName\"\r\n                          name=\"FarmerName\"\r\n                          formControlName=\"FarmerName\"\r\n                          placeholder=\"Enter name\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"crop\">Crop</label>\r\n                        <select\r\n                          class=\"form-control\"\r\n                          id=\"crop\"\r\n                          ngModel\r\n                          name=\"crop\"\r\n                          formControlName=\"crop\"\r\n                        >\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.Name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"ConditionOfCrop\"\r\n                          name=\"ConditionOfCrop\"\r\n                          formControlName=\"ConditionOfCrop\"\r\n                          placeholder=\"Enter condition\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                        <input\r\n                          type=\"date\"\r\n                          class=\"form-control\"\r\n                          id=\"PlannedFarmDay\"\r\n                          name=\"PlannedFarmDay\"\r\n                          formControlName=\"PlannedFarmDay\"\r\n                          placeholder=\"Enter Date\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Date\">Date <span class=\"danger\">*</span></label>\r\n                        <input\r\n                          type=\"date\"\r\n                          class=\"form-control\"\r\n                          id=\"Date\"\r\n                          name=\"Date\"\r\n                          formControlName=\"Date\"\r\n                          placeholder=\"Enter Date\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Time\">Time <span class=\"danger\">*</span></label>\r\n                        <input\r\n                          type=\"time\"\r\n                          class=\"form-control\"\r\n                          id=\"Time\"\r\n                          name=\"Time\"\r\n                          formControlName=\"Time\"\r\n                          placeholder=\"Enter Time\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-secondary\"\r\n                    (click)=\"editModal.hide()\"\r\n                  >\r\n                    Close\r\n                  </button>\r\n                  <button\r\n                    type=\"submit\"\r\n                    class=\"btn btn-primary ml-2\"\r\n                    [disabled]=\"btnLoading || !activitiesForm.valid\"\r\n                  >\r\n                    <span\r\n                      *ngIf=\"btnLoading\"\r\n                      class=\"spinner-border spinner-border-sm\"\r\n                      role=\"status\"\r\n                      aria-hidden=\"true\"\r\n                    ></span>\r\n                    Save changes\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
      /***/
    },

    /***/
    "odFu": function odFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesRoutingModule", function () {
        return ActivitiesRoutingModule;
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


      var _activities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./activities.component */
      "e3Zl");
      /* harmony import */


      var _activity_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./activity-detail.component */
      "bCMp");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _activities_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'Activities'
          }
        }, {
          path: 'activity_details/:id',
          // canActivate: [AuthGuard],
          component: _activity_detail_component__WEBPACK_IMPORTED_MODULE_4__["ActivityDetailComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'Activity Details'
          }
        }]
      }];

      var ActivitiesRoutingModule = function ActivitiesRoutingModule() {
        _classCallCheck(this, ActivitiesRoutingModule);
      };

      ActivitiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivitiesRoutingModule);
      /***/
    },

    /***/
    "ve2J": function ve2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function () {
        return ActivitiesModule;
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


      var _activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./activities.component */
      "e3Zl");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _activities_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./activities-routing.module */
      "odFu");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _activity_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./activity-detail.component */
      "bCMp"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var ActivitiesModule = function ActivitiesModule() {
        _classCallCheck(this, ActivitiesModule);
      };

      ActivitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _activities_routing_module__WEBPACK_IMPORTED_MODULE_7__["ActivitiesRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_activities_component__WEBPACK_IMPORTED_MODULE_4__["ActivitiesComponent"], _activity_detail_component__WEBPACK_IMPORTED_MODULE_10__["ActivityDetailComponent"]]
      })], ActivitiesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-activities-activities-module-es5.js.map