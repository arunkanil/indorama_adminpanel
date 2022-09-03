(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-surveys-surveys-module"],{

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
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _surveys_component__WEBPACK_IMPORTED_MODULE_4__["SurveysComponent"],
        ]
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Surveys</h2>\r\n      <div>\r\n        <!-- <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" [disabled]=\"disableButton\"\r\n          (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n        <button type=\"button\" [disabled]=\"disableButton\" class=\"btn btn-info\" data-toggle=\"modal\"\r\n          (click)=\"openModal('Edit')\">\r\n          Edit\r\n        </button> -->\r\n        <a type=\"button\" [disabled]=\"!disableButton\" class=\"btn btn-primary\" data-toggle=\"modal\" href=\"/#/surveys/new_survey\">\r\n          Add New Survey\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #cropPriceModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Listing</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"cropPriceModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"cropPriceForm\" (ngSubmit)=\"cropPriceSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"state\">Category</label>\r\n            <select class=\"form-control\" id=\"state\" (change)=\"filterMarkets($event)\" required ngModel name=\"state\"\r\n              formControlName=\"state\">\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"Title\" name=\"Title\" formControlName=\"Title\"\r\n              placeholder=\"Enter title\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Price</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"Price\" name=\"Price\" formControlName=\"Price\"\r\n              placeholder=\"Enter price\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Unit</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"Unit\" name=\"Unit\" formControlName=\"Unit\"\r\n              placeholder=\"Enter unit\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Quantity</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"Quantity\" name=\"Quantity\" formControlName=\"Quantity\"\r\n              placeholder=\"Enter quantity\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"name\">Contact Number</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"ContactNumber\" name=\"ContactNumber\"\r\n              formControlName=\"ContactNumber\" placeholder=\"Enter Contact number\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Image\">Image</label>\r\n            <div>\r\n              <img *ngIf=\"imageUrl\" src=\"{{ imageUrl }}\" width=\"100\" height=\"100\" style=\"object-fit: cover\" />\r\n            </div>\r\n            <input type=\"file\" class=\"form-control\" id=\"Image\" accept=\".jpg,.jpeg,.JPEG,.png\" name=\"Image\"\r\n              (change)=\"onChange($event)\" formControlName=\"Image\" placeholder=\"Choose image\" />\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"cropPriceModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !cropPriceForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

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
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["dateConverter"];
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Add New Survey</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n            Create Survey\r\n          </button>\r\n          <!-- <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button> -->\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"FormSubmit()\" style=\"width: 100%;\">\r\n          <div class=\"form-group\">\r\n            <label for=\"title\">Survey Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" formControlName=\"title\"\r\n              placeholder=\"Enter survey title\" />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"title\">Survey Description</label>\r\n            <textarea type=\"text\" class=\"form-control\" rows=\"4\" id=\"description\" name=\"description\"\r\n              formControlName=\"description\" placeholder=\"Enter survey description\"></textarea>\r\n          </div>\r\n          <h6>Survey Questions</h6>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                  <div style=\"display: flex; justify-content: space-between\">\r\n                    <h5 class=\"card-title\">What is your category?</h5>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\">\r\n                      Delete\r\n                    </button>\r\n                  </div>\r\n                  <p class=\"card-text\">\r\n                    Question type : Dropdown\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Required : True\r\n                  </p>\r\n                  <p class=\"card-text\">\r\n                    Options : <span class=\"badge badge-success\">Farmer</span> <span\r\n                      class=\"badge badge-success\">Retailer</span>\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Question</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" formControlName=\"question\"\r\n                  placeholder=\"Enter your question\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Question type</label>\r\n                <select class=\"form-control\" id=\"question_type\" name=\"question_type\" formControlName=\"question_type\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"text\">Text</option>\r\n                  <option value=\"dropdown\">Dropdown</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Field type</label>\r\n                <select class=\"form-control\" id=\"question_type\" name=\"question_type\" formControlName=\"question_type\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"long\">Long</option>\r\n                  <option value=\"short\">Short</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Options</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"question\" name=\"question\" formControlName=\"question\"\r\n                  placeholder=\"Enter options seperated by comma ( , )\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\">\r\n              <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Required field</label>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-outline-primary ml-2\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Add question\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

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
/* harmony import */ var _surveys_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./surveys.component */ "sw6f");





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
                component: _surveys_component__WEBPACK_IMPORTED_MODULE_4__["SurveysComponent"],
            },
            {
                path: 'new_survey',
                // canActivate: [AuthGuard],
                component: _surveys_add_component__WEBPACK_IMPORTED_MODULE_3__["NewSurveyComponent"],
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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");









let SurveysComponent = class SurveysComponent {
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
        this.Markets = [];
        this.Crops = [];
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
        this.getCropPrices();
        this.getCrops();
        this.getMarkets();
        this.getStates();
    }
    getCropPrices() {
        this.dataservice.getCropPrices().valueChanges.subscribe((result) => {
            console.log("getCropPrices", result.data.cropPrices.data);
            this.rowData = result.data.cropPrices.data;
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
    getMarkets(id) {
        this.dataservice.getMarkets(id).valueChanges.subscribe((result) => {
            console.log("getMarkets", result.data.markets.data);
            this.Markets = result.data.markets.data;
        });
    }
    filterMarkets(event) {
        this.getMarkets(event.target.value);
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
        if (this.selectedRows.length > 0) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
        console.log(this.selectedRows, this.selectedRows[0].attributes.Name);
    }
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
        console.log(event.target.files[0]);
    }
    openModal(data) {
        this.router.navigate(["/surveys/new_survey"]);
    }
    cropPriceSubmit() {
        let resp = {};
        console.log(this.cropPriceForm.value);
        if (!this.disableButton) {
            if (this.file) {
                this.dataservice.upload(this.file).subscribe((response) => {
                    var _a;
                    if (response.status == 200) {
                        console.log(response);
                        this.dataservice
                            .UpdateCropPrice(this.cropPriceForm.value, this.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                            .subscribe((result) => {
                            resp = result.data;
                            console.log("response", result);
                            if (result.data.updateCropPrice) {
                                this.toastr.success("Success!");
                                this.getCropPrices();
                                this.file = null;
                                this.cropPriceModal.hide();
                                this.gridApi.deselectAll();
                            }
                            else {
                                this.toastr.error("Failed. Please check the fields!");
                            }
                        });
                    }
                });
            }
            else {
                this.dataservice
                    .UpdateCropPrice(this.cropPriceForm.value, this.selectedRows[0].id, null)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.updateCropPrice) {
                        this.toastr.success("Success!");
                        this.getCropPrices();
                        this.file = null;
                        this.cropPriceModal.hide();
                        this.gridApi.deselectAll();
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                    }
                });
            }
        }
        else {
            this.dataservice.upload(this.file).subscribe((response) => {
                var _a;
                if (response.status == 200) {
                    console.log(response);
                    this.dataservice
                        .AddCropPrice(this.cropPriceForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                        .subscribe((result) => {
                        resp = result.data;
                        console.log("response", result);
                        if (result.data.createCropPrice) {
                            this.toastr.success("Success!");
                            this.getCropPrices();
                            this.file = null;
                            this.cropPriceModal.hide();
                            this.gridApi.deselectAll();
                        }
                        else {
                            this.toastr.error("Failed. Please check the fields!");
                        }
                    });
                }
                else {
                    this.toastr.error("Image failed to upload!");
                }
            });
        }
    }
};
SurveysComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SurveysComponent.propDecorators = {
    cropPriceModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["cropPriceModal",] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["detailsModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }]
};
SurveysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_surveys_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], SurveysComponent);



/***/ })

}]);
//# sourceMappingURL=views-surveys-surveys-module-es2017.js.map