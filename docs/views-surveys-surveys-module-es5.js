(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-surveys-surveys-module"], {
    /***/
    "1V3F": function V3F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Survey details</h2>\r\n      <span>\r\n        <div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"downloadResponses()\"\r\n            [disabled]=\"btnLoading\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Download responses\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-danger\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"deleteModal.show()\"\r\n          >\r\n            Delete\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row p-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Survey Title</label>\r\n          <h5>{{ questions?.attributes?.SurveyTitle }}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Survey Description</label>\r\n          <h5>{{ questions?.attributes?.SurveyDescription }}</h5>\r\n        </div>\r\n      </div>\r\n      <h6>Survey Questions</h6>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div\r\n              class=\"card-body\"\r\n              *ngFor=\"\r\n                let item of questions?.attributes?.Fields;\r\n                let indexOfelement = index\r\n              \"\r\n            >\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <div>\r\n                  <h5 class=\"card-title\">{{ item.FieldName }}</h5>\r\n                  <p class=\"card-text\">\r\n                    Question type : {{ returnQuesType(item.__component) }}\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Field type : {{ returnFieldType(item.FieldType) }}\r\n                  </p>\r\n                  <p class=\"card-text\">Required : {{ item.Mandatory }}</p>\r\n                  <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                    Options :\r\n                    <span\r\n                      *ngFor=\"let option of item.Values\"\r\n                      class=\"badge badge-success mx-1\"\r\n                      >{{ option }}</span\r\n                    >\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"returnChartdata(item.FieldKey).length > 0\" class=\"chart-wrapper\">\r\n                <canvas\r\n                  baseChart\r\n                  class=\"chart\"\r\n                  [data]=\"returnChartdata(item.FieldKey)\"\r\n                  [labels]=\"returnChartLabels(item.FieldKey)\"\r\n                  [chartType]=\"pieChartType\"\r\n                  (chartHover)=\"chartHovered($event)\"\r\n                ></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #deleteModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        This will permanently delete the survey. Are you sure?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"deleteModal.hide()\"\r\n        >\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSurvey()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "8dM2": function dM2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveysModule", function () {
        return SurveysModule;
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


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _surveys_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./surveys.component */
      "sw6f");
      /* harmony import */


      var _surveys_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./surveys-routing.module */
      "jJ9Y");
      /* harmony import */


      var _surveys_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./surveys-detail.component */
      "tUeK");
      /* harmony import */


      var _surveys_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./surveys-add.component */
      "eqIL");

      var SurveysModule = function SurveysModule() {
        _classCallCheck(this, SurveysModule);
      };

      SurveysModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]), _surveys_routing_module__WEBPACK_IMPORTED_MODULE_10__["SurveysRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]],
        declarations: [_surveys_component__WEBPACK_IMPORTED_MODULE_9__["SurveysComponent"], _surveys_detail_component__WEBPACK_IMPORTED_MODULE_11__["SurveyDetailsComponent"], _surveys_add_component__WEBPACK_IMPORTED_MODULE_12__["NewSurveyComponent"]]
      })], SurveysModule);
      /***/
    },

    /***/
    "RIGA": function RIGA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Surveys</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"goToNewSurvey()\"\r\n        >\r\n          Add New Survey\r\n      </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "eqIL": function eqIL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewSurveyComponent", function () {
        return NewSurveyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_surveys_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./surveys-add.component.html */
      "iLUU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../constants/columnMetadata */
      "7nfi");

      var NewSurveyComponent = /*#__PURE__*/function () {
        function NewSurveyComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, NewSurveyComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
          this.isText = true;
          this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverter"];
          this.questions = [];
          this.addForm = this.fb.group({
            FieldName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            __typename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            FieldType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            FieldKey: [""],
            Mandatory: [false],
            Values: [""]
          });
        }

        _createClass(NewSurveyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRouter.params.subscribe(function (params) {
              _this.id = params["id"];
            });
          }
        }, {
          key: "questionSubmit",
          value: function questionSubmit() {
            var _a, _b, _c, _d, _e, _f;

            console.log(this.addForm.value);
            this.addForm.value.FieldKey = this.addForm.value.FieldName.replace(/[^A-Z0-9]/gi, "_");

            if (((_c = (_b = (_a = this.addForm) === null || _a === void 0 ? void 0 : _a.value) === null || _b === void 0 ? void 0 : _b.Values) === null || _c === void 0 ? void 0 : _c.length) > 0) {
              this.addForm.value.Values = (_f = (_e = (_d = this.addForm) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.Values) === null || _f === void 0 ? void 0 : _f.split(",");
            }

            this.questions.push(this.addForm.value);
            this.addForm = this.fb.group({
              FieldName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              __typename: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FieldType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
              FieldKey: [""],
              Mandatory: [false],
              Values: [""]
            });
            console.log(this.questions);
          }
        }, {
          key: "onQuestionTypeChange",
          value: function onQuestionTypeChange(event) {
            if (event.target.value == "ComponentSurveySurveyTextComponent") {
              this.isText = true;
            } else {
              this.isText = false;
            }

            this.addForm.value.FieldType = "";
            console.log(event.target.value, this.isText);
          }
        }, {
          key: "deleteQuestion",
          value: function deleteQuestion(item) {
            console.log(item);
            this.questions.splice(item, 1);
          }
        }, {
          key: "onSurveyDescriptionChange",
          value: function onSurveyDescriptionChange(event) {
            this.SurveyDescription = event.target.value;
          }
        }, {
          key: "onSurveyTitleChange",
          value: function onSurveyTitleChange(event) {
            this.SurveyTitle = event.target.value;
          }
        }, {
          key: "formSubmit",
          value: function formSubmit() {
            var _this2 = this;

            var resp = {};
            console.log(this.addForm.value);

            if (this.SurveyTitle && this.SurveyDescription) {
              this.dataservice.createSurveys(this.SurveyTitle, this.SurveyDescription, this.questions).subscribe(function (result) {
                resp = result.data;
                console.log("response", result);

                if (result.data.createSurveyForm) {
                  _this2.toastr.success("Farm demo added successfully!");

                  _this2.router.navigate(["/surveys/all"]);
                }
              }, function (error) {
                _this2.toastr.error("Failed. Please check the fields!");
              });
            } else {
              this.toastr.error("Please add both title & description");
            }
          }
        }]);

        return NewSurveyComponent;
      }();

      NewSurveyComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      };

      NewSurveyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])], NewSurveyComponent);
      /***/
    },

    /***/
    "iLUU": function iLUU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Add New Survey</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"formSubmit()\">\r\n            Create Survey\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyTitle\">Survey Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"SurveyTitle\" name=\"SurveyTitle\" (change)=\"onSurveyTitleChange($event)\" placeholder=\"Enter survey title\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyDescription\">Survey Description</label>\r\n            <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"SurveyDescription\" (change)=\"onSurveyDescriptionChange($event)\" name=\"SurveyDescription\"\r\n              placeholder=\"Enter survey description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h6 *ngIf=\"questions.length > 0\">Survey Questions</h6>\r\n      <div class=\"row\" *ngIf=\"questions.length > 0\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\" *ngFor=\"let item of questions;let indexOfelement=index;\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">{{item.FieldName}}</h5>\r\n                <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                  (click)=\"deleteQuestion(indexOfelement)\">\r\n                  Delete\r\n                </button>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                Question type : {{item.__typename == \"ComponentSurveySurveyTextComponent\"? \"Text\" : \"Dropdown\"}}\r\n              </p>\r\n              <p class=\"card-text\">\r\n                Required : {{item.Mandatory? \"Yes\" : \"No\"}}\r\n              </p>\r\n              <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                Options : <span *ngFor=\"let option of item.Values\" class=\"badge badge-success mx-1\">{{option}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-3\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"questionSubmit()\" style=\"width: 100%;\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldName\">Question</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"FieldName\" name=\"FieldName\" formControlName=\"FieldName\"\r\n                  placeholder=\"Enter your question\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Question type</label>\r\n                <select class=\"form-control\" id=\"__typename\" name=\"__typename\" (change)=\"onQuestionTypeChange($event)\"\r\n                  formControlName=\"__typename\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"ComponentSurveySurveyTextComponent\">Text</option>\r\n                  <option value=\"ComponentSurveySurveySelectionComponent\">Dropdown</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldType\">Field type</label>\r\n                <select class=\"form-control\" id=\"FieldType\" name=\"FieldType\" formControlName=\"FieldType\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngIf=\"isText\" value=\"TextLong\">Long answer</option>\r\n                  <option *ngIf=\"isText\" value=\"TextShort\">Short answer</option>\r\n                  <option *ngIf=\"!isText\" value=\"Selection\">Selection</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"!isText\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Values\">Options</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Values\" name=\"Values\" formControlName=\"Values\"\r\n                  placeholder=\"Enter options seperated by comma ( , )\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"Mandatory\" name=\"Mandatory\"\r\n                formControlName=\"Mandatory\">\r\n              <label class=\"form-check-label\" for=\"Mandatory\">Required field</label>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-outline-primary ml-2\" [disabled]=\"!addForm.valid\">\r\n            Add question\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "jJ9Y": function jJ9Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveysRoutingModule", function () {
        return SurveysRoutingModule;
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


      var _surveys_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./surveys-add.component */
      "eqIL");
      /* harmony import */


      var _surveys_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./surveys-detail.component */
      "tUeK");
      /* harmony import */


      var _surveys_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./surveys.component */
      "sw6f");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _surveys_component__WEBPACK_IMPORTED_MODULE_5__["SurveysComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'Surveys'
          }
        }, {
          path: 'new_survey',
          // canActivate: [AuthGuard],
          component: _surveys_add_component__WEBPACK_IMPORTED_MODULE_3__["NewSurveyComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'New Survey'
          }
        }, {
          path: 'survey_details/:id',
          // canActivate: [AuthGuard],
          component: _surveys_detail_component__WEBPACK_IMPORTED_MODULE_4__["SurveyDetailsComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'Survey details'
          }
        }]
      }];

      var SurveysRoutingModule = function SurveysRoutingModule() {
        _classCallCheck(this, SurveysRoutingModule);
      };

      SurveysRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SurveysRoutingModule);
      /***/
    },

    /***/
    "sw6f": function sw6f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveysComponent", function () {
        return SurveysComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_surveys_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./surveys.component.html */
      "RIGA");
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

      var SurveysComponent = /*#__PURE__*/function () {
        function SurveysComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, SurveysComponent);

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
          this.cropPriceForm = this.fb.group({
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [""]
          });
          this.rowData = [];
          this.selectedRows = [];
          this.selectedYear = new Date().getFullYear();
          this.years = [];
          this.filter = {};
          this.file = null;
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["SurveysColumn"]);
          this.rowSelection = "single";
        }

        _createClass(SurveysComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getSurveys(1, this.pageSize);
          }
        }, {
          key: "getSurveys",
          value: function getSurveys(page, pageSize) {
            var _this3 = this;

            this.dataservice.getSurveys(page, pageSize).valueChanges.subscribe(function (result) {
              var _a, _b;

              _this3.rowData = result.data.surveyForms.data;
              _this3.meta = result.data.surveyForms.meta;

              if (((_b = (_a = _this3.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this3.disablePrevButton = true;
                _this3.disableNextButton = true;
              }
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this4 = this;

            var _a, _b, _c, _d;

            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;

            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }

            this.dataservice.getSurveys(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this4.meta = result.data.surveyForms.meta;
              _this4.rowData = result.data.surveyForms.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this5 = this;

            this.count--;

            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }

            if (this.count === 1) {
              this.disablePrevButton = true;
            }

            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getSurveys(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this5.meta = result.data.surveyForms.meta;
              _this5.rowData = result.data.surveyForms.data;
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
          key: "goToNewSurvey",
          value: function goToNewSurvey() {
            this.router.navigate(["/surveys/new_survey"]);
          }
        }, {
          key: "onSelectionChanged",
          value: function onSelectionChanged(event) {
            this.selectedRows = this.gridApi.getSelectedRows();
            console.log(this.selectedRows);
            this.router.navigate(["/surveys/survey_details", this.selectedRows[0].id], {
              state: {
                data: this.selectedRows
              }
            });
          }
        }]);

        return SurveysComponent;
      }();

      SurveysComponent.ctorParameters = function () {
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

      SurveysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], SurveysComponent);
      /***/
    },

    /***/
    "tUeK": function tUeK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveyDetailsComponent", function () {
        return SurveyDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_surveys_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./surveys-detail.component.html */
      "1V3F");
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
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");

      var unique = function unique(value, index, self) {
        return self.indexOf(value) === index;
      };

      var SurveyDetailsComponent = /*#__PURE__*/function () {
        function SurveyDetailsComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, SurveyDetailsComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
          this.rowData = [];
          this.questions = {};
          this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
          this.pieChartType = "pie";
          this.resultsProcessed = {};
        }

        _createClass(SurveyDetailsComponent, [{
          key: "ngOnInit",
          value: function () {
            var _ngOnInit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.activatedRouter.params.subscribe(function (params) {
                        _this6.id = params["id"];
                      });
                      this.getSurveyDetails();
                      this.getSurveyResults();

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function ngOnInit() {
              return _ngOnInit.apply(this, arguments);
            }

            return ngOnInit;
          }()
        }, {
          key: "getSurveyDetails",
          value: function () {
            var _getSurveyDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log("start getSurveyDetails");
                      this.dataservice.getSurveyDetails(this.id).subscribe(function (result) {
                        console.log("getSurveyDetails", result.body.data);
                        _this7.questions = result.body.data;
                        console.log("finished getSurveyDetails");
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function getSurveyDetails() {
              return _getSurveyDetails.apply(this, arguments);
            }

            return getSurveyDetails;
          }()
        }, {
          key: "getSurveyResults",
          value: function () {
            var _getSurveyResults = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var data;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      data = {};
                      console.log("start getSurveyResults");
                      this.dataservice.getSurveyResults(this.id).valueChanges.subscribe(function (result) {
                        var _a, _b, _c;

                        _this8.rowData = result.data.surveyResults.data;
                        console.log("getSurveyResults", _this8.rowData);
                        var Fields = (_b = (_a = _this8.questions) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.Fields;
                        console.log(Fields, "fields");

                        var _loop = function _loop(i) {
                          var ans = _this8.rowData.map(function (x) {
                            return x.attributes.SurveyResponse[Fields[i].FieldKey];
                          });

                          var unique_ans = _this8.rowData.map(function (x) {
                            return x.attributes.SurveyResponse[Fields[i].FieldKey];
                          }).filter(unique);

                          var count = 0;
                          var counted_obj = {};

                          for (var j = 0; j < unique_ans.length; j++) {
                            count = 0;

                            for (var k = 0; k < ans.length; k++) {
                              if (unique_ans[j] == ans[k]) {
                                count++;
                              }
                            }

                            counted_obj[unique_ans[j]] = count;
                          }

                          data[Fields[i].FieldKey] = counted_obj;
                        };

                        for (var i = 0; i < Fields.length; i++) {
                          _loop(i);
                        }

                        _this8.resultsProcessed = data;
                        console.log(_this8.resultsProcessed, "resultsProcessed");
                        (_c = _this8.chart) === null || _c === void 0 ? void 0 : _c.update();
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function getSurveyResults() {
              return _getSurveyResults.apply(this, arguments);
            }

            return getSurveyResults;
          }()
        }, {
          key: "returnQuesType",
          value: function returnQuesType(data) {
            if (data == "survey.survey-selection-component") {
              return "Dropdown";
            } else {
              return "Text";
            }
          }
        }, {
          key: "returnFieldType",
          value: function returnFieldType(data) {
            switch (data) {
              case "TextLong":
                return "Long Answer";

              case "TextShort":
                return "Short Answer";

              case "Selection":
                return "Selection";
            }
          }
        }, {
          key: "returnChartLabels",
          value: function returnChartLabels(data) {
            // console.log(Object.keys(this.resultsProcessed[data]));
            if (this.resultsProcessed.hasOwnProperty(data)) {
              return Object.keys(this.resultsProcessed[data]);
            } else {
              return [];
            }
          }
        }, {
          key: "returnChartdata",
          value: function returnChartdata(data) {
            // console.log(Object.values(this.resultsProcessed[data]));
            if (this.resultsProcessed.hasOwnProperty(data)) {
              return Object.values(this.resultsProcessed[data]);
            } else {
              return [];
            }
          }
        }, {
          key: "deleteSurvey",
          value: function deleteSurvey() {
            var _this9 = this;

            this.dataservice.deleteSurvey(this.id).subscribe(function (result) {
              console.log("response", result);

              if (result.data.deleteSurveyForm) {
                _this9.toastr.success("Success!");

                _this9.deleteModal.hide();

                _this9.router.navigate(["/surveys/all"]);
              } else {
                _this9.toastr.error("Failed!");
              }
            });
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(event) {
            console.log(event);
          }
        }, {
          key: "downloadResponses",
          value: function downloadResponses() {
            var _this10 = this;

            this.btnLoading = true;
            this.dataservice.downloadResponses(this.id).subscribe(function (result) {
              console.log("downloadResponses", result.body);
              var url = "https://indoramaapp.untanglestrategy.com" + result.body.path;
              _this10.btnLoading = false;
              window.open(url, "_blank");
            }, function (error) {
              _this10.btnLoading = true;

              _this10.toastr.error("Failed!");
            });
          }
        }]);

        return SurveyDetailsComponent;
      }();

      SurveyDetailsComponent.ctorParameters = function () {
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

      SurveyDetailsComponent.propDecorators = {
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }],
        chart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"]]
        }]
      };
      SurveyDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], SurveyDetailsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-surveys-surveys-module-es5.js.map