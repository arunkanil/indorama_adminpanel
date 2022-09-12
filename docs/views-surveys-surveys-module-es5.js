(function () {
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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Survey details</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n            Download responses\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-danger\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"deleteModal.show()\"\r\n          >\r\n            Delete\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row p-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Survey Title</label>\r\n          <h5>{{questions?.attributes?.SurveyTitle}}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Survey Description</label>\r\n          <h5>{{questions?.attributes?.SurveyDescription}}</h5>\r\n        </div>\r\n      </div>\r\n      <h6>Survey Questions</h6>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\" *ngFor=\"let item of questions?.attributes?.Fields;let indexOfelement=index;\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">{{item.FieldName}}</h5>\r\n                <!-- <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                  (click)=\"deleteQuestion(indexOfelement)\">\r\n                  Delete\r\n                </button> -->\r\n              </div>\r\n              <p class=\"card-text\">\r\n                Question type : {{returnQuesType(item.__component)}}\r\n              </p>\r\n              <p class=\"card-text\">\r\n                Field type : {{item.FieldType}}\r\n              </p>\r\n              <p class=\"card-text\">\r\n                Required : {{item.Mandatory}}\r\n              </p>\r\n              <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                Options : <span *ngFor=\"let option of item.Values\" class=\"badge badge-success mx-1\">{{option}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          This will permanently delete the survey. Are you sure?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSurvey()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
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


      var _surveys_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./surveys.component */
      "sw6f");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _surveys_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./surveys-routing.module */
      "jJ9Y");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _surveys_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./surveys-detail.component */
      "tUeK");
      /* harmony import */


      var _surveys_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./surveys-add.component */
      "eqIL"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var SurveysModule = function SurveysModule() {
        _classCallCheck(this, SurveysModule);
      };

      SurveysModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _surveys_routing_module__WEBPACK_IMPORTED_MODULE_7__["SurveysRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_surveys_component__WEBPACK_IMPORTED_MODULE_4__["SurveysComponent"], _surveys_detail_component__WEBPACK_IMPORTED_MODULE_10__["SurveyDetailsComponent"], _surveys_add_component__WEBPACK_IMPORTED_MODULE_11__["NewSurveyComponent"]]
      })], SurveysModule);
      /***/
    },

    /***/
    "RIGA": function RIGA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Surveys</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <a type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href=\"/#/surveys/new_survey\">\r\n          Add New Survey\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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
            this.dataservice.createSurveys(this.SurveyTitle, this.SurveyDescription, this.questions).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.createSurveyForm) {
                _this2.toastr.success("Farm demo added successfully!");

                _this2.router.navigate(["/surveys/all"]);
              } else {
                _this2.toastr.error("Failed. Please check the fields!");
              }
            });
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


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Add New Survey</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"formSubmit()\">\r\n            Create Survey\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyTitle\">Survey Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"SurveyTitle\" name=\"SurveyTitle\" (change)=\"onSurveyTitleChange($event)\" placeholder=\"Enter survey title\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyDescription\">Survey Description</label>\r\n            <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"SurveyDescription\" (change)=\"onSurveyDescriptionChange($event)\" name=\"SurveyDescription\"\r\n              placeholder=\"Enter survey description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h6 *ngIf=\"questions.length > 0\">Survey Questions</h6>\r\n      <div class=\"row\" *ngIf=\"questions.length > 0\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\" *ngFor=\"let item of questions;let indexOfelement=index;\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">{{item.FieldName}}</h5>\r\n                <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                  (click)=\"deleteQuestion(indexOfelement)\">\r\n                  Delete\r\n                </button>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                Question type : {{item.__typename}}\r\n              </p>\r\n              <p class=\"card-text\">\r\n                Required : {{item.Mandatory}}\r\n              </p>\r\n              <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                Options : <span *ngFor=\"let option of item.Values\" class=\"badge badge-success mx-1\">{{option}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-3\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"questionSubmit()\" style=\"width: 100%;\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldName\">Question</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"FieldName\" name=\"FieldName\" formControlName=\"FieldName\"\r\n                  placeholder=\"Enter your question\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Question type</label>\r\n                <select class=\"form-control\" id=\"__typename\" name=\"__typename\" (change)=\"onQuestionTypeChange($event)\"\r\n                  formControlName=\"__typename\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"ComponentSurveySurveyTextComponent\">Text</option>\r\n                  <option value=\"ComponentSurveySurveySelectionComponent\">Dropdown</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldType\">Field type</label>\r\n                <select class=\"form-control\" id=\"FieldType\" name=\"FieldType\" formControlName=\"FieldType\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngIf=\"isText\" value=\"TextLong\">Long answer</option>\r\n                  <option *ngIf=\"isText\" value=\"TextShort\">Short answer</option>\r\n                  <option *ngIf=\"!isText\" value=\"Selection\">Selection</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"!isText\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Values\">Options</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Values\" name=\"Values\" formControlName=\"Values\"\r\n                  placeholder=\"Enter options seperated by comma ( , )\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"Mandatory\" name=\"Mandatory\"\r\n                formControlName=\"Mandatory\">\r\n              <label class=\"form-check-label\" for=\"Mandatory\">Required field</label>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-outline-primary ml-2\" [disabled]=\"!addForm.valid\">\r\n            Add question\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
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
          component: _surveys_component__WEBPACK_IMPORTED_MODULE_5__["SurveysComponent"]
        }, {
          path: 'new_survey',
          // canActivate: [AuthGuard],
          component: _surveys_add_component__WEBPACK_IMPORTED_MODULE_3__["NewSurveyComponent"]
        }, {
          path: 'survey_details/:id',
          // canActivate: [AuthGuard],
          component: _surveys_detail_component__WEBPACK_IMPORTED_MODULE_4__["SurveyDetailsComponent"]
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
            this.getSurveys();
          }
        }, {
          key: "getSurveys",
          value: function getSurveys() {
            var _this3 = this;

            this.dataservice.getSurveys().valueChanges.subscribe(function (result) {
              console.log("getSurveys", result.data.surveyForms.data);
              _this3.rowData = result.data.surveyForms.data;
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
        }

        _createClass(SurveyDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.activatedRouter.params.subscribe(function (params) {
              _this4.id = params["id"];
            });
            this.getSurveyDetails();
            this.getSurveyResults();
          }
        }, {
          key: "getSurveyDetails",
          value: function getSurveyDetails() {
            var _this5 = this;

            this.dataservice.getSurveyDetails(this.id).subscribe(function (result) {
              console.log("getSurveyDetails", result.body.data);
              _this5.questions = result.body.data;
            });
          }
        }, {
          key: "getSurveyResults",
          value: function getSurveyResults() {
            var _this6 = this;

            this.dataservice.getSurveyResults(this.id).valueChanges.subscribe(function (result) {
              console.log("getSurveyResults", result.data.surveyResults.data);
              _this6.rowData = result.data.surveyResults.data;
            });
          }
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
          key: "deleteSurvey",
          value: function deleteSurvey() {
            var _this7 = this;

            this.dataservice.deleteSurvey(this.id).subscribe(function (result) {
              console.log("response", result);

              if (result.data.deleteSurveyForm) {
                _this7.toastr.success("Success!");

                _this7.deleteModal.hide();

                _this7.router.navigate(["/surveys/all"]);
              } else {
                _this7.toastr.error("Failed!");
              }
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