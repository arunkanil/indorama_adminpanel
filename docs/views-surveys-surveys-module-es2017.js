(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-surveys-surveys-module"],{

/***/ "1V3F":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/surveys/surveys-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Survey details</h2>\r\n      <span>\r\n        <div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"downloadResponses()\"\r\n            [disabled]=\"btnLoading\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Download responses\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-danger\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"deleteModal.show()\"\r\n          >\r\n            Delete\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row p-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Survey Title</label>\r\n          <h5>{{ questions?.attributes?.SurveyTitle }}</h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-2\">\r\n        <div class=\"form-group\">\r\n          <label for=\"title\">Survey Description</label>\r\n          <h5>{{ questions?.attributes?.SurveyDescription }}</h5>\r\n        </div>\r\n      </div>\r\n      <h6>Survey Questions</h6>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div\r\n              class=\"card-body\"\r\n              *ngFor=\"\r\n                let item of questions?.attributes?.Fields;\r\n                let indexOfelement = index\r\n              \"\r\n            >\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <div>\r\n                  <h5 class=\"card-title\">{{ item.FieldName }}</h5>\r\n                  <p class=\"card-text\">\r\n                    Question type : {{ returnQuesType(item.__component) }}\r\n                  </p>\r\n                  <p class=\"card-text\">Field type : {{ returnFieldType(item.FieldType) }}</p>\r\n                  <p class=\"card-text\">Required : {{ item.Mandatory }}</p>\r\n                  <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                    Options :\r\n                    <span\r\n                      *ngFor=\"let option of item.Values\"\r\n                      class=\"badge badge-success mx-1\"\r\n                      >{{ option }}</span\r\n                    >\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"chart-wrapper\">\r\n                <canvas\r\n                  baseChart\r\n                  class=\"chart\"\r\n                  [data]=\"returnChartdata(item.FieldKey)\"\r\n                  [labels]=\"returnChartLabels(item.FieldKey)\"\r\n                  [chartType]=\"pieChartType\"\r\n                  (chartClick)=\"chartClicked($event)\"\r\n                ></canvas>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #deleteModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        This will permanently delete the survey. Are you sure?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          (click)=\"deleteModal.hide()\"\r\n        >\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSurvey()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "8dM2":
/*!*************************************************!*\
  !*** ./src/app/views/surveys/surveys.module.ts ***!
  \*************************************************/
/*! exports provided: SurveysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysModule", function() { return SurveysModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "hrfs");
/* harmony import */ var _surveys_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./surveys.component */ "sw6f");
/* harmony import */ var _surveys_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./surveys-routing.module */ "jJ9Y");
/* harmony import */ var _surveys_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./surveys-detail.component */ "tUeK");
/* harmony import */ var _surveys_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./surveys-add.component */ "eqIL");













let SurveysModule = class SurveysModule {
};
SurveysModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_7__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
            _surveys_routing_module__WEBPACK_IMPORTED_MODULE_10__["SurveysRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"]
        ],
        declarations: [_surveys_component__WEBPACK_IMPORTED_MODULE_9__["SurveysComponent"], _surveys_detail_component__WEBPACK_IMPORTED_MODULE_11__["SurveyDetailsComponent"], _surveys_add_component__WEBPACK_IMPORTED_MODULE_12__["NewSurveyComponent"]],
    })
], SurveysModule);



/***/ }),

/***/ "RIGA":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/surveys/surveys.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Surveys</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"goToNewSurvey()\"\r\n        >\r\n          Add New Survey\r\n      </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disableNextButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadNext()\"\r\n          >\r\n            Next\r\n          </button>\r\n          <span class=\"float-right mt-3\"\r\n            >Page {{ meta?.pagination?.page }} of\r\n            {{ meta?.pagination?.pageCount }}</span\r\n          >\r\n          <button\r\n            type=\"button\"\r\n            [disabled]=\"disablePrevButton\"\r\n            class=\"btn btn-primary float-right m-2\"\r\n            (click)=\"loadPrev()\"\r\n          >\r\n            Prev\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "eqIL":
/*!********************************************************!*\
  !*** ./src/app/views/surveys/surveys-add.component.ts ***!
  \********************************************************/
/*! exports provided: NewSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSurveyComponent", function() { return NewSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_surveys_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./surveys-add.component.html */ "iLUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








let NewSurveyComponent = class NewSurveyComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
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
            Values: [""],
        });
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
    }
    questionSubmit() {
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
            Values: [""],
        });
        console.log(this.questions);
    }
    onQuestionTypeChange(event) {
        if (event.target.value == "ComponentSurveySurveyTextComponent") {
            this.isText = true;
        }
        else {
            this.isText = false;
        }
        this.addForm.value.FieldType = "";
        console.log(event.target.value, this.isText);
    }
    deleteQuestion(item) {
        console.log(item);
        this.questions.splice(item, 1);
    }
    onSurveyDescriptionChange(event) {
        this.SurveyDescription = event.target.value;
    }
    onSurveyTitleChange(event) {
        this.SurveyTitle = event.target.value;
    }
    formSubmit() {
        let resp = {};
        console.log(this.addForm.value);
        if (this.SurveyTitle && this.SurveyDescription) {
            this.dataservice
                .createSurveys(this.SurveyTitle, this.SurveyDescription, this.questions)
                .subscribe((result) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createSurveyForm) {
                    this.toastr.success("Farm demo added successfully!");
                    this.router.navigate(["/surveys/all"]);
                }
            }, (error) => {
                this.toastr.error("Failed. Please check the fields!");
            });
        }
        else {
            this.toastr.error("Please add both title & description");
        }
    }
};
NewSurveyComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
NewSurveyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], NewSurveyComponent);



/***/ }),

/***/ "iLUU":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/surveys/surveys-add.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Add New Survey</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"formSubmit()\">\r\n            Create Survey\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyTitle\">Survey Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"SurveyTitle\" name=\"SurveyTitle\" (change)=\"onSurveyTitleChange($event)\" placeholder=\"Enter survey title\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyDescription\">Survey Description</label>\r\n            <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"SurveyDescription\" (change)=\"onSurveyDescriptionChange($event)\" name=\"SurveyDescription\"\r\n              placeholder=\"Enter survey description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h6 *ngIf=\"questions.length > 0\">Survey Questions</h6>\r\n      <div class=\"row\" *ngIf=\"questions.length > 0\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\" *ngFor=\"let item of questions;let indexOfelement=index;\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">{{item.FieldName}}</h5>\r\n                <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                  (click)=\"deleteQuestion(indexOfelement)\">\r\n                  Delete\r\n                </button>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                Question type : {{item.__typename == \"ComponentSurveySurveyTextComponent\"? \"Text\" : \"Dropdown\"}}\r\n              </p>\r\n              <p class=\"card-text\">\r\n                Required : {{item.Mandatory? \"Yes\" : \"No\"}}\r\n              </p>\r\n              <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                Options : <span *ngFor=\"let option of item.Values\" class=\"badge badge-success mx-1\">{{option}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-3\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"questionSubmit()\" style=\"width: 100%;\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldName\">Question</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"FieldName\" name=\"FieldName\" formControlName=\"FieldName\"\r\n                  placeholder=\"Enter your question\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Question type</label>\r\n                <select class=\"form-control\" id=\"__typename\" name=\"__typename\" (change)=\"onQuestionTypeChange($event)\"\r\n                  formControlName=\"__typename\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"ComponentSurveySurveyTextComponent\">Text</option>\r\n                  <option value=\"ComponentSurveySurveySelectionComponent\">Dropdown</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldType\">Field type</label>\r\n                <select class=\"form-control\" id=\"FieldType\" name=\"FieldType\" formControlName=\"FieldType\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngIf=\"isText\" value=\"TextLong\">Long answer</option>\r\n                  <option *ngIf=\"isText\" value=\"TextShort\">Short answer</option>\r\n                  <option *ngIf=\"!isText\" value=\"Selection\">Selection</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"!isText\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Values\">Options</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Values\" name=\"Values\" formControlName=\"Values\"\r\n                  placeholder=\"Enter options seperated by comma ( , )\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"Mandatory\" name=\"Mandatory\"\r\n                formControlName=\"Mandatory\">\r\n              <label class=\"form-check-label\" for=\"Mandatory\">Required field</label>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-outline-primary ml-2\" [disabled]=\"!addForm.valid\">\r\n            Add question\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "jJ9Y":
/*!*********************************************************!*\
  !*** ./src/app/views/surveys/surveys-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SurveysRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysRoutingModule", function() { return SurveysRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _surveys_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./surveys-add.component */ "eqIL");
/* harmony import */ var _surveys_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./surveys-detail.component */ "tUeK");
/* harmony import */ var _surveys_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./surveys.component */ "sw6f");






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
                component: _surveys_component__WEBPACK_IMPORTED_MODULE_5__["SurveysComponent"],
                data: {
                    // roles: 'MANAGER',
                    title: 'Surveys'
                }
            },
            {
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
            },
        ]
    }
];
let SurveysRoutingModule = class SurveysRoutingModule {
};
SurveysRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SurveysRoutingModule);



/***/ }),

/***/ "sw6f":
/*!****************************************************!*\
  !*** ./src/app/views/surveys/surveys.component.ts ***!
  \****************************************************/
/*! exports provided: SurveysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysComponent", function() { return SurveysComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_surveys_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./surveys.component.html */ "RIGA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








let SurveysComponent = class SurveysComponent {
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
        this.cropPriceForm = this.fb.group({
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            market: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [""],
        });
        this.rowData = [];
        this.selectedRows = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.file = null;
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["SurveysColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getSurveys(1, this.pageSize);
    }
    getSurveys(page, pageSize) {
        this.dataservice
            .getSurveys(page, pageSize)
            .valueChanges.subscribe((result) => {
            var _a, _b;
            this.rowData = result.data.surveyForms.data;
            this.meta = result.data.surveyForms.meta;
            if (((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                this.disablePrevButton = true;
                this.disableNextButton = true;
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
            .getSurveys(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.surveyForms.meta;
            this.rowData = result.data.surveyForms.data;
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
            .getSurveys(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.surveyForms.meta;
            this.rowData = result.data.surveyForms.data;
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
    goToNewSurvey() {
        this.router.navigate(["/surveys/new_survey"]);
    }
    onSelectionChanged(event) {
        this.selectedRows = this.gridApi.getSelectedRows();
        console.log(this.selectedRows);
        this.router.navigate(["/surveys/survey_details", this.selectedRows[0].id], {
            state: { data: this.selectedRows },
        });
    }
};
SurveysComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SurveysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], SurveysComponent);



/***/ }),

/***/ "tUeK":
/*!***********************************************************!*\
  !*** ./src/app/views/surveys/surveys-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: SurveyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsComponent", function() { return SurveyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_surveys_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./surveys-detail.component.html */ "1V3F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "hrfs");










const unique = (value, index, self) => {
    return self.indexOf(value) === index;
};
let SurveyDetailsComponent = class SurveyDetailsComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
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
    }
    async ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        await this.getSurveyDetails();
        await this.getSurveyResults();
    }
    async getSurveyDetails() {
        this.dataservice.getSurveyDetails(this.id).subscribe((result) => {
            console.log("getSurveyDetails", result.body.data);
            this.questions = result.body.data;
        });
    }
    async getSurveyResults() {
        let data = {};
        this.dataservice
            .getSurveyResults(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c;
            this.rowData = result.data.surveyResults.data;
            console.log("getSurveyResults", this.rowData);
            let Fields = (_b = (_a = this.questions) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.Fields;
            console.log(Fields, "fields");
            for (let i = 0; i < Fields.length; i++) {
                let ans = this.rowData.map((x) => x.attributes.SurveyResponse[Fields[i].FieldKey]);
                let unique_ans = this.rowData
                    .map((x) => x.attributes.SurveyResponse[Fields[i].FieldKey])
                    .filter(unique);
                let count = 0;
                let counted_obj = {};
                for (let j = 0; j < unique_ans.length; j++) {
                    count = 0;
                    for (let k = 0; k < ans.length; k++) {
                        if (unique_ans[j] == ans[k]) {
                            count++;
                        }
                    }
                    counted_obj[unique_ans[j]] = count;
                }
                data[Fields[i].FieldKey] = counted_obj;
            }
            this.resultsProcessed = data;
            console.log(this.resultsProcessed, "resultsProcessed");
            (_c = this.chart) === null || _c === void 0 ? void 0 : _c.update();
        });
    }
    returnQuesType(data) {
        if (data == "survey.survey-selection-component") {
            return "Dropdown";
        }
        else {
            return "Text";
        }
    }
    returnFieldType(data) {
        switch (data) {
            case "TextLong":
                return "Long Answer";
            case "TextShort":
                return "Short Answer";
            case "Selection":
                return "Selection";
        }
    }
    returnChartLabels(data) {
        // console.log(Object.keys(this.resultsProcessed[data]));
        return Object.keys(this.resultsProcessed[data]);
    }
    returnChartdata(data) {
        // console.log(Object.values(this.resultsProcessed[data]));
        return Object.values(this.resultsProcessed[data]);
    }
    deleteSurvey() {
        this.dataservice.deleteSurvey(this.id).subscribe((result) => {
            console.log("response", result);
            if (result.data.deleteSurveyForm) {
                this.toastr.success("Success!");
                this.deleteModal.hide();
                this.router.navigate(["/surveys/all"]);
            }
            else {
                this.toastr.error("Failed!");
            }
        });
    }
    downloadResponses() {
        this.btnLoading = true;
        this.dataservice.downloadResponses(this.id).subscribe((result) => {
            console.log("downloadResponses", result.body);
            let url = "https://indoramaapp.untanglestrategy.com" + result.body.path;
            this.btnLoading = false;
            window.open(url, "_blank");
        }, (error) => {
            this.btnLoading = true;
            this.toastr.error("Failed!");
        });
    }
};
SurveyDetailsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SurveyDetailsComponent.propDecorators = {
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }],
    chart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"],] }]
};
SurveyDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], SurveyDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=views-surveys-surveys-module-es2017.js.map