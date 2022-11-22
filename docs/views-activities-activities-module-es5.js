(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-activities-activities-module"], {
    /***/"Hcx8":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/activities/activities.component.html ***!
      \**************************************************************************************************/
    /*! exports provided: default */
    /***/
    function Hcx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Activities</h2>\n      <div>\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\n          (click)=\"deleteModal.show()\">\n          Delete\n        </button>\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\n          (click)=\"openModal('Edit')\">\n          Edit\n        </button> -->\n        <button\n          type=\"button\"\n          [disabled]=\"!disableButton\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New Activity\n        </button>\n      </div>\n    </div>\n    <!-- <p class=\"text-muted mx-3\">\n      To approve a crop price simply select and edit the record without\n      modifying the data\n    </p> -->\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #activitiesModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Activity</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"activitiesModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"activitiesSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"ActivityType\"\n                  >Activity Type <span class=\"danger\">*</span></label\n                >\n                <select\n                  class=\"form-control\"\n                  id=\"ActivityType\"\n                  required\n                  ngModel\n                  name=\"ActivityType\"\n                  formControlName=\"ActivityType\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"FarmDemo\">Farm Demo</option>\n                  <option value=\"GroupFarmerTraining\">\n                    Group Farmer Training\n                  </option>\n                  <option value=\"MegaFarmerTraining\">\n                    Mega Farmer Training\n                  </option>\n                  <option value=\"FarmDay\">Farm Day</option>\n                  <option value=\"RetailersTraining\">Retailers Training</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"area\">City <span class=\"danger\">*</span></label>\n                <select\n                  class=\"form-control\"\n                  id=\"area\"\n                  required\n                  ngModel\n                  name=\"area\"\n                  formControlName=\"area\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Latitude\"\n                  >Latitude <span class=\"danger\">*</span></label\n                >\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"Latitude\"\n                  name=\"Latitude\"\n                  formControlName=\"Latitude\"\n                  placeholder=\"Enter Latitude\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Longitude\"\n                  >Longitude <span class=\"danger\">*</span></label\n                >\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"Longitude\"\n                  name=\"Longitude\"\n                  formControlName=\"Longitude\"\n                  placeholder=\"Enter Longitude\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"NoOfAttendees\"\n                  >Number of attendees <span class=\"danger\">*</span></label\n                >\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"NoOfAttendees\"\n                  name=\"NoOfAttendees\"\n                  formControlName=\"NoOfAttendees\"\n                  placeholder=\"Enter no. of attendees\"\n                />\n                <div *ngIf=\"activitiesForm.value.NoOfAttendees > 999999\" class=\"danger\">Maximum 9999999</div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Reason\">Body <span class=\"danger\">*</span></label>\n                <textarea\n                  class=\"form-control\"\n                  id=\"Reason\"\n                  rows=\"5\"\n                  name=\"Reason\"\n                  formControlName=\"Reason\"\n                  placeholder=\"Enter body\"\n                ></textarea>\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"FarmerName\">Farmer name</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"FarmerName\"\n                  name=\"FarmerName\"\n                  formControlName=\"FarmerName\"\n                  placeholder=\"Enter name\"\n                />\n                <div *ngIf=\"checkSpecialCharacters(activitiesForm.value.FarmerName)\" class=\"danger\">Special characters not permitted</div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"crop\">Crop</label>\n                <select\n                  class=\"form-control\"\n                  id=\"crop\"\n                  ngModel\n                  name=\"crop\"\n                  formControlName=\"crop\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ConditionOfCrop\">Condition of crop</label>\n                <select\n                  class=\"form-control\"\n                  id=\"ConditionOfCrop\"\n                  name=\"ConditionOfCrop\"\n                  formControlName=\"ConditionOfCrop\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Good\">Good</option>\n                  <option value=\"VeryGood\">Very Good</option>\n                  <option value=\"Excellent\">Excellent</option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"PlannedFarmDay\">Planned farm day</label>\n                <input\n                  type=\"date\"\n                  class=\"form-control\"\n                  id=\"PlannedFarmDay\"\n                  name=\"PlannedFarmDay\"\n                  formControlName=\"PlannedFarmDay\"\n                  placeholder=\"Enter Date\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Date\">Date <span class=\"danger\">*</span></label>\n                <input\n                  type=\"date\"\n                  class=\"form-control\"\n                  id=\"Date\"\n                  name=\"Date\"\n                  formControlName=\"Date\"\n                  placeholder=\"Enter Date\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Time\">Time <span class=\"danger\">*</span></label>\n                <input\n                  type=\"time\"\n                  class=\"form-control\"\n                  id=\"Time\"\n                  name=\"Time\"\n                  formControlName=\"Time\"\n                  placeholder=\"Enter Time\"\n                />\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"activitiesModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !activitiesForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n";

      /***/
    },

    /***/"bCMp":
    /*!***************************************************************!*\
      !*** ./src/app/views/activities/activity-detail.component.ts ***!
      \***************************************************************/
    /*! exports provided: ActivityDetailComponent */
    /***/
    function bCMp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ActivityDetailComponent", function () {
        return ActivityDetailComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_activity_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./activity-detail.component.html */"hbGJ");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../constants/columnMetadata */"7nfi");
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

    /***/"e3Zl":
    /*!**********************************************************!*\
      !*** ./src/app/views/activities/activities.component.ts ***!
      \**********************************************************/
    /*! exports provided: ActivitiesComponent */
    /***/
    function e3Zl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ActivitiesComponent", function () {
        return ActivitiesComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_activities_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./activities.component.html */"Hcx8");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      /* harmony import */
      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../constants/columnMetadata */"7nfi");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
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
        }]
      };
      ActivitiesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_activities_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], ActivitiesComponent);

      /***/
    },

    /***/"hbGJ":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/activities/activity-detail.component.html ***!
      \*******************************************************************************************************/
    /*! exports provided: default */
    /***/
    function hbGJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this activity?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\n            No! Cancel.\n          </button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteActivity()\">\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Activity Details</h2>\n      <span>\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editModal.show()\">\n          Edit\n        </button>\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\n          Delete\n        </button>\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>{{ details?.id }}</td>\n                </tr>\n                <tr>\n                  <td>Activity type</td>\n                  <td>\n                    {{ returnActivityType(details?.attributes?.ActivityType) }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Date</td>\n                  <td>\n                    {{ dateConverterMin(details?.attributes?.Date) }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Time</td>\n                  <td>{{ details?.attributes?.Time }}</td>\n                </tr>\n                <tr>\n                  <td>City</td>\n                  <td>{{ details?.attributes?.area?.data?.attributes?.Name }}</td>\n                </tr>\n                <tr>\n                  <td>No. of Attendees</td>\n                  <td>\n                    {{\n                    details?.attributes?.NoOfAttendees}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Location</td>\n                  <td>\n                    <a href=\"{{ maplink }}\" target=\"_blank\">Click here to view location</a>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Farmer Name</td>\n                  <td>{{ details?.attributes?.FarmerName }}</td>\n                </tr>\n                <tr>\n                  <td>Crop</td>\n                  <td>\n                    {{ details?.attributes?.crop?.data?.attributes?.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Condition of crop</td>\n                  <td>{{ details?.attributes?.ConditionOfCrop }}</td>\n                </tr>\n                <tr>\n                  <td>Planned farm day</td>\n                  <td>\n                    {{\n                    dateConverterMin(details?.attributes?.PlannedFarmDay)\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Body</td>\n                  <td>\n                    {{details?.attributes?.Reason}}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n          aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Edit details</h4>\n                <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"FormSubmit()\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"ActivityType\">Activity Type <span class=\"danger\">*</span></label>\n                        <select\n                          class=\"form-control\"\n                          id=\"ActivityType\"\n                          required\n                          ngModel\n                          name=\"ActivityType\"\n                          formControlName=\"ActivityType\"\n                        >\n                          <option value=\"\" disabled selected hidden>Choose...</option>\n                          <option value=\"FarmDemo\">Farm Demo</option>\n                          <option value=\"GroupFarmerTraining\">\n                            Group Farmer Training\n                          </option>\n                          <option value=\"MegaFarmerTraining\">\n                            Mega Farmer Training\n                          </option>\n                          <option value=\"FarmDay\">Farm Day</option>\n                          <option value=\"RetailersTraining\">Retailers Training</option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"area\">City <span class=\"danger\">*</span></label>\n                        <select\n                          class=\"form-control\"\n                          id=\"area\"\n                          required\n                          ngModel\n                          name=\"area\"\n                          formControlName=\"area\"\n                        >\n                          <option value=\"\" disabled selected hidden>Choose...</option>\n                          <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\n                            {{ item.attributes.Name }}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Latitude\">Latitude <span class=\"danger\">*</span></label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"Latitude\"\n                          name=\"Latitude\"\n                          formControlName=\"Latitude\"\n                          placeholder=\"Enter Latitude\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Longitude\">Longitude <span class=\"danger\">*</span></label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"Longitude\"\n                          name=\"Longitude\"\n                          formControlName=\"Longitude\"\n                          placeholder=\"Enter Longitude\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"NoOfAttendees\">Number of attendees <span class=\"danger\">*</span></label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"NoOfAttendees\"\n                          name=\"NoOfAttendees\"\n                          formControlName=\"NoOfAttendees\"\n                          placeholder=\"Enter No. of attendees\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Reason\">Body <span class=\"danger\">*</span></label>\n                        <textarea\n                          class=\"form-control\"\n                          id=\"Reason\"\n                          rows=\"5\"\n                          name=\"Reason\"\n                          formControlName=\"Reason\"\n                          placeholder=\"Enter body\"\n                        ></textarea>\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"FarmerName\">Farmer name</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"FarmerName\"\n                          name=\"FarmerName\"\n                          formControlName=\"FarmerName\"\n                          placeholder=\"Enter name\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"crop\">Crop</label>\n                        <select\n                          class=\"form-control\"\n                          id=\"crop\"\n                          ngModel\n                          name=\"crop\"\n                          formControlName=\"crop\"\n                        >\n                          <option value=\"\" disabled selected hidden>Choose...</option>\n                          <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\n                            {{ item.attributes.Name }}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"ConditionOfCrop\">Condition of crop</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"ConditionOfCrop\"\n                          name=\"ConditionOfCrop\"\n                          formControlName=\"ConditionOfCrop\"\n                          placeholder=\"Enter condition\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"PlannedFarmDay\">Planned farm day</label>\n                        <input\n                          type=\"date\"\n                          class=\"form-control\"\n                          id=\"PlannedFarmDay\"\n                          name=\"PlannedFarmDay\"\n                          formControlName=\"PlannedFarmDay\"\n                          placeholder=\"Enter Date\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Date\">Date <span class=\"danger\">*</span></label>\n                        <input\n                          type=\"date\"\n                          class=\"form-control\"\n                          id=\"Date\"\n                          name=\"Date\"\n                          formControlName=\"Date\"\n                          placeholder=\"Enter Date\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"Time\">Time <span class=\"danger\">*</span></label>\n                        <input\n                          type=\"time\"\n                          class=\"form-control\"\n                          id=\"Time\"\n                          name=\"Time\"\n                          formControlName=\"Time\"\n                          placeholder=\"Enter Time\"\n                        />\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-secondary\"\n                    (click)=\"editModal.hide()\"\n                  >\n                    Close\n                  </button>\n                  <button\n                    type=\"submit\"\n                    class=\"btn btn-primary ml-2\"\n                    [disabled]=\"btnLoading || !activitiesForm.valid\"\n                  >\n                    <span\n                      *ngIf=\"btnLoading\"\n                      class=\"spinner-border spinner-border-sm\"\n                      role=\"status\"\n                      aria-hidden=\"true\"\n                    ></span>\n                    Save changes\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>";

      /***/
    },

    /***/"odFu":
    /*!***************************************************************!*\
      !*** ./src/app/views/activities/activities-routing.module.ts ***!
      \***************************************************************/
    /*! exports provided: ActivitiesRoutingModule */
    /***/
    function odFu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ActivitiesRoutingModule", function () {
        return ActivitiesRoutingModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _activities_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./activities.component */"e3Zl");
      /* harmony import */
      var _activity_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./activity-detail.component */"bCMp");
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
      var ActivitiesRoutingModule = /*#__PURE__*/_createClass(function ActivitiesRoutingModule() {
        _classCallCheck(this, ActivitiesRoutingModule);
      });
      ActivitiesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ActivitiesRoutingModule);

      /***/
    },

    /***/"ve2J":
    /*!*******************************************************!*\
      !*** ./src/app/views/activities/activities.module.ts ***!
      \*******************************************************/
    /*! exports provided: ActivitiesModule */
    /***/
    function ve2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ActivitiesModule", function () {
        return ActivitiesModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"SVse");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _activities_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./activities.component */"e3Zl");
      /* harmony import */
      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-bootstrap/dropdown */"FE24");
      /* harmony import */
      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-bootstrap/tabs */"2ZVE");
      /* harmony import */
      var _activities_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./activities-routing.module */"odFu");
      /* harmony import */
      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ag-grid-angular */"YFAK");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var _activity_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./activity-detail.component */"bCMp");

      // Dropdowns Component

      // Buttons Routing

      // Angular

      var ActivitiesModule = /*#__PURE__*/_createClass(function ActivitiesModule() {
        _classCallCheck(this, ActivitiesModule);
      });
      ActivitiesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _activities_routing_module__WEBPACK_IMPORTED_MODULE_7__["ActivitiesRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_activities_component__WEBPACK_IMPORTED_MODULE_4__["ActivitiesComponent"], _activity_detail_component__WEBPACK_IMPORTED_MODULE_10__["ActivityDetailComponent"]]
      })], ActivitiesModule);

      /***/
    }
  }]);
})();
//# sourceMappingURL=views-activities-activities-module-es5.js.map