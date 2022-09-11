(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-surveys-surveys-module"],{

/***/ "1V3F":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/surveys/surveys-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n        <h2>Survey details</h2>\r\n        <span>\r\n          <div>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n              Create Survey\r\n            </button>\r\n            <!-- <button\r\n            type=\"button\"\r\n            class=\"btn btn-danger\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"deleteModal.show()\"\r\n          >\r\n            Delete\r\n          </button> -->\r\n          </div>\r\n        </span>\r\n      </div>\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <form [formGroup]=\"addForm\" (ngSubmit)=\"FormSubmit()\" style=\"width: 100%;\">\r\n            <div class=\"form-group\">\r\n              <label for=\"title\">Survey Title</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" formControlName=\"title\"\r\n                placeholder=\"Enter survey title\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"title\">Survey Description</label>\r\n              <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"description\" name=\"description\"\r\n                formControlName=\"description\" placeholder=\"Enter survey description\"></textarea>\r\n            </div>\r\n            <h6>Survey Questions</h6>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <div style=\"display: flex; justify-content: space-between\">\r\n                      <h5 class=\"card-title\">What is your category?</h5>\r\n                      <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\">\r\n                        Delete\r\n                      </button>\r\n                    </div>\r\n                    <p class=\"card-text\">\r\n                      Question type : Dropdown\r\n                    </p>\r\n                    <p class=\"card-text\">\r\n                      Required : True\r\n                    </p>\r\n                    <p class=\"card-text\">\r\n                      Options : <span class=\"badge badge-success\">Farmer</span> <span\r\n                        class=\"badge badge-success\">Retailer</span>\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"title\">Question</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" formControlName=\"question\"\r\n                    placeholder=\"Enter your question\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"title\">Question type</label>\r\n                  <select class=\"form-control\" id=\"question_type\" name=\"question_type\" formControlName=\"question_type\">\r\n                    <option value=\"\" disabled selected hidden>\r\n                      Choose...\r\n                    </option>\r\n                    <option value=\"text\">Text</option>\r\n                    <option value=\"dropdown\">Dropdown</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"title\">Field type</label>\r\n                  <select class=\"form-control\" id=\"question_type\" name=\"question_type\" formControlName=\"question_type\">\r\n                    <option value=\"\" disabled selected hidden>\r\n                      Choose...\r\n                    </option>\r\n                    <option value=\"long\">Long</option>\r\n                    <option value=\"short\">Short</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"title\">Options</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" formControlName=\"question\"\r\n                    placeholder=\"Enter options seperated by comma ( , )\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"form-check\">\r\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\">\r\n                <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Required field</label>\r\n              </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-outline-primary ml-2\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n              Add question\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

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
/* harmony import */ var _surveys_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./surveys.component */ "sw6f");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _surveys_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./surveys-routing.module */ "jJ9Y");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _surveys_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./surveys-detail.component */ "tUeK");
/* harmony import */ var _surveys_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./surveys-add.component */ "eqIL");





// Dropdowns Component


// Buttons Routing

// Angular




let SurveysModule = class SurveysModule {
};
SurveysModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _surveys_routing_module__WEBPACK_IMPORTED_MODULE_7__["SurveysRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ],
        declarations: [_surveys_component__WEBPACK_IMPORTED_MODULE_4__["SurveysComponent"], _surveys_detail_component__WEBPACK_IMPORTED_MODULE_10__["SurveyDetailsComponent"], _surveys_add_component__WEBPACK_IMPORTED_MODULE_11__["NewSurveyComponent"]],
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Surveys</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <a type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" href=\"/#/surveys/new_survey\">\r\n          Add New Survey\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

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
        this.dataservice
            .createSurveys(this.SurveyTitle, this.SurveyDescription, this.questions)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createSurveyForm) {
                this.toastr.success("Farm demo added successfully!");
                this.router.navigate(["/surveys/all"]);
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Add New Survey</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"formSubmit()\">\r\n            Create Survey\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyTitle\">Survey Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"SurveyTitle\" name=\"SurveyTitle\" (change)=\"onSurveyTitleChange($event)\" placeholder=\"Enter survey title\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"SurveyDescription\">Survey Description</label>\r\n            <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"SurveyDescription\" (change)=\"onSurveyDescriptionChange($event)\" name=\"SurveyDescription\"\r\n              placeholder=\"Enter survey description\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <h6 *ngIf=\"questions.length > 0\">Survey Questions</h6>\r\n      <div class=\"row\" *ngIf=\"questions.length > 0\">\r\n        <div class=\"col\">\r\n          <div class=\"card\">\r\n            <div class=\"card-body\" *ngFor=\"let item of questions;let indexOfelement=index;\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">{{item.FieldName}}</h5>\r\n                <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                  (click)=\"deleteQuestion(indexOfelement)\">\r\n                  Delete\r\n                </button>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                Question type : {{item.__typename}}\r\n              </p>\r\n              <p class=\"card-text\">\r\n                Required : {{item.Mandatory}}\r\n              </p>\r\n              <p *ngIf=\"item.Values\" class=\"card-text\">\r\n                Options : <span *ngFor=\"let option of item.Values\" class=\"badge badge-success mx-1\">{{option}}</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row p-3\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"questionSubmit()\" style=\"width: 100%;\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldName\">Question</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"FieldName\" name=\"FieldName\" formControlName=\"FieldName\"\r\n                  placeholder=\"Enter your question\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Question type</label>\r\n                <select class=\"form-control\" id=\"__typename\" name=\"__typename\" (change)=\"onQuestionTypeChange($event)\"\r\n                  formControlName=\"__typename\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"ComponentSurveySurveyTextComponent\">Text</option>\r\n                  <option value=\"ComponentSurveySurveySelectionComponent\">Dropdown</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"FieldType\">Field type</label>\r\n                <select class=\"form-control\" id=\"FieldType\" name=\"FieldType\" formControlName=\"FieldType\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option *ngIf=\"isText\" value=\"TextLong\">Long answer</option>\r\n                  <option *ngIf=\"isText\" value=\"TextShort\">Short answer</option>\r\n                  <option *ngIf=\"!isText\" value=\"Selection\">Selection</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"!isText\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Values\">Options</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"Values\" name=\"Values\" formControlName=\"Values\"\r\n                  placeholder=\"Enter options seperated by comma ( , )\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"Mandatory\" name=\"Mandatory\"\r\n                formControlName=\"Mandatory\">\r\n              <label class=\"form-check-label\" for=\"Mandatory\">Required field</label>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-outline-primary ml-2\" [disabled]=\"!addForm.valid\">\r\n            Add question\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

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
            },
            {
                path: 'new_survey',
                // canActivate: [AuthGuard],
                component: _surveys_add_component__WEBPACK_IMPORTED_MODULE_3__["NewSurveyComponent"],
            }, {
                path: 'survey_details/:id',
                // canActivate: [AuthGuard],
                component: _surveys_detail_component__WEBPACK_IMPORTED_MODULE_4__["SurveyDetailsComponent"],
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
        this.getSurveys();
    }
    getSurveys() {
        this.dataservice.getSurveys().valueChanges.subscribe((result) => {
            console.log("getSurveys", result.data.surveyForms.data);
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");








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
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverter"];
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.getSurveyResults();
    }
    getSurveyResults() {
        this.dataservice
            .getSurveyResults(this.id)
            .valueChanges.subscribe((result) => {
            console.log("getSurveyResults", result.data.surveyForms.data);
            this.rowData = result.data.surveyForms.data;
        });
    }
};
SurveyDetailsComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SurveyDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
], SurveyDetailsComponent);



/***/ })

}]);
//# sourceMappingURL=views-surveys-surveys-module-es2017.js.map