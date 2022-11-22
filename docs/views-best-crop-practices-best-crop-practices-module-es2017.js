(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-best-crop-practices-best-crop-practices-module"],{

/***/ "FfNu":
/*!*********************************************************************************!*\
  !*** ./src/app/views/best-crop-practices/best-crop-practices-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: BestCropPracticesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestCropPracticesRoutingModule", function() { return BestCropPracticesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./best-crop-practices.component */ "QSep");




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
                component: _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_3__["BestCropPracticesComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Best Crop Practices'
                }
            },
        ]
    }
];
let BestCropPracticesRoutingModule = class BestCropPracticesRoutingModule {
};
BestCropPracticesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BestCropPracticesRoutingModule);



/***/ }),

/***/ "QSep":
/*!****************************************************************************!*\
  !*** ./src/app/views/best-crop-practices/best-crop-practices.component.ts ***!
  \****************************************************************************/
/*! exports provided: BestCropPracticesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestCropPracticesComponent", function() { return BestCropPracticesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_best_crop_practices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./best-crop-practices.component.html */ "VS0m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let BestCropPracticesComponent = class BestCropPracticesComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.disableButton = true;
        this.title = "Verification";
        this.orders = {};
        this.columnDefs = [];
        this.Crops = [];
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.practicesForm = this.fb.group({
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            content: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            File: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.rowData = [];
        this.selectedRows = [];
        this.filter = {};
        this.file = null;
        this.image = null;
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["CropPricesColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getBestCropPractises();
        this.getCrops();
    }
    getBestCropPractises() {
        this.dataservice
            .getBestCropPractises()
            .valueChanges.subscribe((result) => {
            this.rowData = result.data.bestCropPractises.data;
        });
    }
    getCrops() {
        this.dataservice.getCrops().valueChanges.subscribe((result) => {
            this.Crops = result.data.crops.data;
        });
    }
    // On file Select
    onChange(event, check) {
        if (check == true) {
            this.file = [];
            for (var i = 0; i < event.target.files.length; i++) {
                this.file.push(event.target.files[i]);
            }
        }
        else {
            this.image = [];
            for (var i = 0; i < event.target.files.length; i++) {
                this.image.push(event.target.files[i]);
            }
        }
        console.log(this.file, this.image);
    }
    openModal(data) {
        this.deleteModal.show();
        this.deleteId = data.id;
    }
    deletePractice() {
        this.dataservice
            .deleteBestPractice(this.deleteId)
            .subscribe((result) => {
            console.log("response", result);
            if (result.data.deleteBestCropPractise) {
                this.dataservice.getBestCropPractises().refetch();
                this.toastr.success("Success!");
                this.deleteModal.hide();
            }
            else {
                this.toastr.error("Failed!");
            }
        });
    }
    practicesSubmit() {
        let resp = {};
        let image = null;
        let file = null;
        this.btnLoading = true;
        console.log(this.practicesForm.value);
        this.dataservice.upload(this.image).subscribe((imgResponse) => {
            var _a;
            if (imgResponse.status == 200) {
                image = (_a = imgResponse.body[0]) === null || _a === void 0 ? void 0 : _a.id;
                console.log(imgResponse);
                this.dataservice.upload(this.file).subscribe((fileResponse) => {
                    var _a;
                    if (fileResponse.status == 200) {
                        file = (_a = fileResponse.body[0]) === null || _a === void 0 ? void 0 : _a.id;
                        console.log(fileResponse);
                        this.dataservice
                            .createBestCropPractise(this.practicesForm.value, image, file)
                            .subscribe((result) => {
                            resp = result.data;
                            console.log("response", result);
                            if (result.data.createBestCropPractise) {
                                this.toastr.success("Success!");
                                this.practicesForm.reset();
                                this.dataservice.getBestCropPractises().refetch();
                                this.practicesModal.hide();
                                this.btnLoading = false;
                            }
                            else {
                                this.toastr.error("Failed. Please check the fields!");
                                this.btnLoading = false;
                            }
                        });
                    }
                    else {
                        this.toastr.error("Image failed to upload!");
                        this.btnLoading = false;
                    }
                });
            }
            else {
                this.toastr.error("Image failed to upload!");
                this.btnLoading = false;
            }
        });
    }
};
BestCropPracticesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
BestCropPracticesComponent.propDecorators = {
    practicesModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["practicesModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }]
};
BestCropPracticesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_best_crop_practices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], BestCropPracticesComponent);



/***/ }),

/***/ "VS0m":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/best-crop-practices/best-crop-practices.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\n      <h2>Best Crop Practices</h2>\n      <div>\n        <button type=\"button\" [disabled]=\"!disableButton\" class=\"btn btn-primary\" data-toggle=\"modal\"\n          (click)=\"practicesModal.show()\">\n          Add New\n        </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-3\" *ngFor=\"let item of rowData\">\n          <div class=\"card\">\n            <div class=\"img-container\">\n              <img class=\"card-img-top\" height=\"200\" width=\"200\"\n                src=\"{{baseURL}}{{item?.attributes?.cropImage?.data?.attributes?.url}}\" alt=\"Card image cap\" />\n              <div class=\"overlay\">\n                <div class=\"overlay-text\"><a target=\"_blank\"\n                    href=\"{{baseURL}}{{item?.attributes?.media?.data?.attributes?.url}}\" style=\"color: white;\">Click\n                    to view file</a></div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <div style=\"display: flex; justify-content: space-between\">\n                <h5 class=\"card-title\">\n                  {{item.attributes.crop.data.attributes.Name}}\n                </h5>\n                <div>\n                  <button type=\"button\" class=\"btn btn-outline-primary p-1\" (click)=\"openModal(item)\">\n                    <img src=\"assets/deleteIcon.svg\">\n                  </button>\n                </div>\n              </div>\n              <p class=\"card-text\">\n                {{item.attributes.content}}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div bsModal #practicesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit Practice</h4>\n        <button type=\"button\" class=\"close\" (click)=\"practicesModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"practicesForm\" (ngSubmit)=\"practicesSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"crop\">Crop</label>\n            <select class=\"form-control\" id=\"crop\" required ngModel name=\"crop\" formControlName=\"crop\">\n              <option value=\"\" disabled selected hidden>Choose...</option>\n              <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\n                {{ item.attributes.Name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"content\">Description</label>\n            <textarea type=\"text\" class=\"form-control\" id=\"content\" maxlength=\"150\" name=\"content\" rows=\"3\" formControlName=\"content\"\n              placeholder=\"Enter description\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"File\">PDF File</label>\n            <div><input type=\"file\" id=\"File\" accept=\".pdf\" name=\"File\" (change)=\"onChange($event,true)\"\n              formControlName=\"File\" placeholder=\"Choose file\" /></div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Image\">Preview image</label>\n            <div>\n              <img *ngIf=\"imageUrl\" src=\"{{ imageUrl }}\" width=\"100\" height=\"100\" style=\"object-fit: cover\" />\n            </div>\n            <input type=\"file\" id=\"Image\" accept=\".jpg,.jpeg,.JPEG,.png\" name=\"Image\"\n              (change)=\"onChange($event,false)\" formControlName=\"Image\" placeholder=\"Choose image\" />\n          </div>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"practicesModal.hide()\">\n            Close\n          </button>\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !practicesForm.valid\">\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        Do you want to delete this record?\n      </div>\n      <div class=\"modal-footer justify-content-around\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\n          No! Cancel.\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePractice()\">\n          Yes! Delete.\n        </button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "mjQe":
/*!*************************************************************************!*\
  !*** ./src/app/views/best-crop-practices/best-crop-practices.module.ts ***!
  \*************************************************************************/
/*! exports provided: BestCropPracticesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestCropPracticesModule", function() { return BestCropPracticesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./best-crop-practices.component */ "QSep");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _best_crop_practices_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./best-crop-practices-routing.module */ "FfNu");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





// Dropdowns Component


// Buttons Routing

// Angular


let BestCropPracticesModule = class BestCropPracticesModule {
};
BestCropPracticesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _best_crop_practices_routing_module__WEBPACK_IMPORTED_MODULE_7__["BestCropPracticesRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_4__["BestCropPracticesComponent"],
        ]
    })
], BestCropPracticesModule);



/***/ })

}]);
//# sourceMappingURL=views-best-crop-practices-best-crop-practices-module-es2017.js.map