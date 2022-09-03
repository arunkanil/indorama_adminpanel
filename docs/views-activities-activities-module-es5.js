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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Activities</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <button type=\"button\" [disabled]=\"!disableButton\" class=\"btn btn-primary\" data-toggle=\"modal\"\r\n          (click)=\"openModal()\">\r\n          Add New Activity\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #activitiesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Activity</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"activitiesModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"activitiesSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"ActivityType\">Activity Type</label>\r\n                <select class=\"form-control\" id=\"ActivityType\" required ngModel\r\n                  name=\"ActivityType\" formControlName=\"ActivityType\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"FarmDemo\">Farm Demo</option>\r\n                  <option value=\"GroupFarmerTraining\">Group Farmer Training</option>\r\n                  <option value=\"MegaFarmerTraining\">Mega Farmer Training</option>\r\n                  <option value=\"FarmDay\">Farm Day</option>\r\n                  <option value=\"RetailersTraining\">Retailers Training</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"area\">Area</label>\r\n                <select class=\"form-control\" id=\"area\" required ngModel name=\"area\" formControlName=\"area\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Latitude\">Latitude</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\" formControlName=\"Latitude\"\r\n                  placeholder=\"Enter Latitude\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Longitude\">Longitude</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Longitude\" name=\"Longitude\" formControlName=\"Longitude\"\r\n                  placeholder=\"Enter Longitude\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"NoOfAttendees\">Number of attendees</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"NoOfAttendees\" name=\"NoOfAttendees\"\r\n                  formControlName=\"NoOfAttendees\" placeholder=\"Enter No. of attendees\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"FarmerName\">Farmer name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"FarmerName\" name=\"FarmerName\" formControlName=\"FarmerName\"\r\n                  placeholder=\"Enter name\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"crop\">Crop</label>\r\n                <select class=\"form-control\" id=\"crop\" required ngModel name=\"crop\" formControlName=\"crop\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"ConditionOfCrop\" name=\"ConditionOfCrop\"\r\n                  formControlName=\"ConditionOfCrop\" placeholder=\"Enter condition\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"PlannedFarmDay\" name=\"PlannedFarmDay\" formControlName=\"PlannedFarmDay\"\r\n                  placeholder=\"Enter Date\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Date\">Date</label>\r\n                <input type=\"date\" class=\"form-control\" id=\"Date\" name=\"Date\" formControlName=\"Date\"\r\n                  placeholder=\"Enter Date\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Time\">Time</label>\r\n                <input type=\"time\" class=\"form-control\" id=\"Time\" name=\"Time\" formControlName=\"Time\"\r\n                  placeholder=\"Enter Time\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Reason\">Body</label>\r\n                <textarea class=\"form-control\" id=\"Reason\" rows=\"5\" name=\"Reason\" formControlName=\"Reason\"\r\n                  placeholder=\"Enter body\"></textarea>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activitiesModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !activitiesForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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
              var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

              console.log("getActivity", result.data.activity.data);
              _this2.details = result.data.activity.data;
              _this2.activitiesForm = _this2.fb.group({
                ActivityType: [(_a = _this2.details.attributes) === null || _a === void 0 ? void 0 : _a.ActivityType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [(_b = _this2.details.attributes) === null || _b === void 0 ? void 0 : _b.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_c = _this2.details.attributes) === null || _c === void 0 ? void 0 : _c.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                NoOfAttendees: [(_d = _this2.details.attributes) === null || _d === void 0 ? void 0 : _d.NoOfAttendees, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                area: [(_g = (_f = (_e = _this2.details.attributes) === null || _e === void 0 ? void 0 : _e.area) === null || _f === void 0 ? void 0 : _f.data) === null || _g === void 0 ? void 0 : _g.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                crop: [(_k = (_j = (_h = _this2.details.attributes) === null || _h === void 0 ? void 0 : _h.crop) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.id],
                FarmerName: [(_l = _this2.details.attributes) === null || _l === void 0 ? void 0 : _l.FarmerName],
                PlannedFarmDay: [(_m = _this2.details.attributes) === null || _m === void 0 ? void 0 : _m.PlannedFarmDay],
                ConditionOfCrop: [(_o = _this2.details.attributes) === null || _o === void 0 ? void 0 : _o.ConditionOfCrop],
                Date: [(_p = _this2.details.attributes) === null || _p === void 0 ? void 0 : _p.Date, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Time: [(_q = _this2.details.attributes) === null || _q === void 0 ? void 0 : _q.Time, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Reason: [(_r = _this2.details.attributes) === null || _r === void 0 ? void 0 : _r.Reason, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              _this2.maplink = "https://maps.google.com/?q=" + ((_s = _this2.details.attributes.Latitude) === null || _s === void 0 ? void 0 : _s.toString()) + "," + ((_t = _this2.details.attributes.Longitude) === null || _t === void 0 ? void 0 : _t.toString());
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
            this.dataservice.updateActivity(this.activitiesForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateActivity) {
                _this5.toastr.success("Activity updated successfully!");

                _this5.editModal.hide();

                _this5.getActivity();
              } else {
                _this5.toastr.error("Failed. Please check the fields!");
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
            Reason: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.rowData = [];
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
          key: "getActivities",
          value: function getActivities() {
            var _this7 = this;

            this.dataservice.getActivities().valueChanges.subscribe(function (result) {
              console.log("getActivities", result.data.activities.data);
              _this7.rowData = result.data.activities.data;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this8 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              console.log("getCrops", result.data.crops.data);
              _this8.Crops = result.data.crops.data;
            });
          }
        }, {
          key: "getStates",
          value: function getStates() {
            var _this9 = this;

            this.dataservice.getStates().valueChanges.subscribe(function (result) {
              console.log("getStates", result.data.states.data);
              _this9.States = result.data.states.data;
            });
          }
        }, {
          key: "getAreas",
          value: function getAreas(lgaid) {
            var _this10 = this;

            this.dataservice.getAreas(lgaid).valueChanges.subscribe(function (result) {
              console.log("getAreas", result.data.areas.data);
              _this10.Areas = result.data.areas.data;
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
            console.log(selectedRows, selectedRows[0].attributes.Name);
            this.router.navigate(["/activities/activity_details", selectedRows[0].id], {
              state: {
                data: selectedRows
              }
            });
          }
        }, {
          key: "openModal",
          value: function openModal(data) {
            this.activitiesModal.show();
          }
        }, {
          key: "activitiesSubmit",
          value: function activitiesSubmit() {
            var _this11 = this;

            var resp = {};
            console.log(this.activitiesForm.value);
            this.dataservice.createActivity(this.activitiesForm.value).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createActivity) {
                _this11.toastr.success("Success!");

                _this11.getActivities();

                _this11.activitiesForm.reset();

                _this11.activitiesModal.hide();

                _this11.gridApi.deselectAll();
              } else {
                _this11.toastr.error("Failed. Please check the fields!");
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
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this activity?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteActivity()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Activity Details</h2>\r\n      <span>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editModal.show()\">\r\n          Edit\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Activity type</td>\r\n                  <td>\r\n                    {{ details?.attributes?.ActivityType }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Date</td>\r\n                  <td>\r\n                    {{ dateConverterMin(details?.attributes?.Date) }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Time</td>\r\n                  <td>{{ details?.attributes?.Time }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Area</td>\r\n                  <td>{{ details?.attributes?.area?.data?.attributes?.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>No. of Attendees</td>\r\n                  <td>\r\n                    {{\r\n                    details?.attributes?.NoOfAttendees}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Location</td>\r\n                  <td>\r\n                    <a href=\"{{ maplink }}\" target=\"_blank\">Click here to view location</a>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>FarmerName</td>\r\n                  <td>{{ details?.attributes?.FarmerName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Crop</td>\r\n                  <td>\r\n                    {{ details?.attributes?.crop?.data?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Condition Of crop</td>\r\n                  <td>{{ details?.attributes?.ConditionOfCrop }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Planned farm day</td>\r\n                  <td>\r\n                    {{\r\n                    dateConverterMin(details?.attributes?.PlannedFarmDay)\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Reason</td>\r\n                  <td>\r\n                    {{details?.attributes?.Reason}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n          aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Edit details</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form [formGroup]=\"activitiesForm\" (ngSubmit)=\"FormSubmit()\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"ActivityType\">Activity Type</label>\r\n                        <select class=\"form-control\" id=\"ActivityType\" required ngModel name=\"ActivityType\"\r\n                          formControlName=\"ActivityType\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option value=\"FarmDemo\">Farm Demo</option>\r\n                          <option value=\"GroupFarmerTraining\">Group Farmer Training</option>\r\n                          <option value=\"MegaFarmerTraining\">Mega Farmer Training</option>\r\n                          <option value=\"FarmDay\">Farm Day</option>\r\n                          <option value=\"RetailersTraining\">Retailers Training</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"area\">Area</label>\r\n                        <select class=\"form-control\" id=\"area\" required ngModel name=\"area\" formControlName=\"area\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.Name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Latitude\">Latitude</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\" formControlName=\"Latitude\"\r\n                          placeholder=\"Enter Latitude\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Longitude\">Longitude</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"Longitude\" name=\"Longitude\"\r\n                          formControlName=\"Longitude\" placeholder=\"Enter Longitude\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"NoOfAttendees\">Number of attendees</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"NoOfAttendees\" name=\"NoOfAttendees\"\r\n                          formControlName=\"NoOfAttendees\" placeholder=\"Enter No. of attendees\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"FarmerName\">Farmer name</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"FarmerName\" name=\"FarmerName\"\r\n                          formControlName=\"FarmerName\" placeholder=\"Enter name\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"crop\">Crop</label>\r\n                        <select class=\"form-control\" id=\"crop\" required ngModel name=\"crop\" formControlName=\"crop\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.Name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"ConditionOfCrop\">Condition of crop</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"ConditionOfCrop\" name=\"ConditionOfCrop\"\r\n                          formControlName=\"ConditionOfCrop\" placeholder=\"Enter condition\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"PlannedFarmDay\">Planned farm day</label>\r\n                        <input type=\"date\" class=\"form-control\" id=\"PlannedFarmDay\" name=\"PlannedFarmDay\"\r\n                          formControlName=\"PlannedFarmDay\" placeholder=\"Enter Date\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Date\">Date</label>\r\n                        <input type=\"date\" class=\"form-control\" id=\"Date\" name=\"Date\" formControlName=\"Date\"\r\n                          placeholder=\"Enter Date\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Time\">Time</label>\r\n                        <input type=\"time\" class=\"form-control\" id=\"Time\" name=\"Time\" formControlName=\"Time\"\r\n                          placeholder=\"Enter Time\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"Reason\">Body</label>\r\n                        <textarea class=\"form-control\" id=\"Reason\" rows=\"5\" name=\"Reason\" formControlName=\"Reason\"\r\n                          placeholder=\"Enter body\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activitiesModal.hide()\">\r\n                    Close\r\n                  </button>\r\n                  <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !activitiesForm.valid\">\r\n                    <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                      aria-hidden=\"true\"></span>\r\n                    Save changes\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
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
          component: _activities_component__WEBPACK_IMPORTED_MODULE_3__["ActivitiesComponent"]
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