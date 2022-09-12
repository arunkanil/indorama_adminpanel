(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-advertisement-advertisement-module"],{

/***/ "+S+2":
/*!****************************************************************!*\
  !*** ./src/app/views/advertisement/advertisement.component.ts ***!
  \****************************************************************/
/*! exports provided: AdvertisementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementComponent", function() { return AdvertisementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_advertisement_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./advertisement.component.html */ "A3hC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");








let AdvertisementComponent = class AdvertisementComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.disableButton = true;
        this.orders = {};
        this.advertisementForm = this.fb.group({
            clickUrl: [""],
            File: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.rowData = [];
        this.file = null;
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getAdvertisements();
    }
    getAdvertisements() {
        this.dataservice.getDashboardAd().valueChanges.subscribe((result) => {
            console.log("advertisement", result.data.advertisement.data);
            this.advertisement = result.data.advertisement.data;
        });
        this.dataservice.getRetailerAd().valueChanges.subscribe((result) => {
            console.log("retailerAdvertisement", result.data.retailerAdvertisement.data);
            this.retailerAdvertisement = result.data.retailerAdvertisement.data;
        });
    }
    // On file Select
    onChange(event, check) {
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
    }
    openModal(data) {
        // this.deleteModal.show();
        this.check = data;
        console.log(data);
        this.advertisementModal.show();
    }
    advertisementSubmit() {
        let resp = {};
        let file = null;
        this.btnLoading = true;
        console.log(this.advertisementForm.value);
        this.dataservice.upload(this.file).subscribe((fileResponse) => {
            var _a, _b, _c, _d, _e;
            if (fileResponse.status == 200) {
                file = (_a = fileResponse.body[0]) === null || _a === void 0 ? void 0 : _a.id;
                console.log(fileResponse);
                if (this.check == true) {
                    this.dataservice
                        .updateRetailerAd((_c = (_b = this.advertisementForm) === null || _b === void 0 ? void 0 : _b.value) === null || _c === void 0 ? void 0 : _c.clickUrl, file)
                        .subscribe((result) => {
                        resp = result.data;
                        console.log("response", result);
                        if (result.data.updateRetailerAdvertisement) {
                            this.toastr.success("Success!");
                            this.getAdvertisements();
                            this.btnLoading = false;
                            this.advertisementModal.hide();
                        }
                        else {
                            this.toastr.error("Failed. Please check the fields!");
                            this.btnLoading = false;
                        }
                    });
                }
                else {
                    this.dataservice
                        .updateDashboardAd((_e = (_d = this.advertisementForm) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.clickUrl, file)
                        .subscribe((result) => {
                        resp = result.data;
                        console.log("response", result);
                        if (result.data.updateAdvertisement) {
                            this.toastr.success("Success!");
                            this.getAdvertisements();
                            this.btnLoading = false;
                            this.advertisementModal.hide();
                        }
                        else {
                            this.toastr.error("Failed. Please check the fields!");
                            this.btnLoading = false;
                        }
                    });
                }
            }
            else {
                this.toastr.error("Image failed to upload!");
                this.btnLoading = false;
            }
        });
    }
};
AdvertisementComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
AdvertisementComponent.propDecorators = {
    advertisementModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["advertisementModal",] }]
};
AdvertisementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_advertisement_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], AdvertisementComponent);



/***/ }),

/***/ "A3hC":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/advertisement/advertisement.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Best Crop Practices</h2>\r\n      <div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <p class=\"text-muted\">Images to uploaded need to be of 375 x 80 resolution</p>\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"card\">\r\n            <div class=\"img-container\">\r\n              <img class=\"card-img-top\" height=\"200\" width=\"200\"\r\n                src=\"https://indoramaapp.untanglestrategy.com{{retailerAdvertisement?.attributes?.Image?.data?.attributes?.url}}\" alt=\"Card image cap\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"overlay-text\"><a target=\"_blank\"\r\n                    href=\"https://indoramaapp.untanglestrategy.com{{retailerAdvertisement?.attributes?.Image?.data?.attributes?.url}}\" style=\"color: white;\">Click\r\n                    to view file</a></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">\r\n                  Retailer Advertisement\r\n                </h5>\r\n                <div>\r\n                  <!-- <button type=\"button\" class=\"btn btn-outline-primary p-1\">\r\n                    <img src=\"../../../assets/edit.svg\">\r\n                  </button> -->\r\n                  <button type=\"button\" class=\"btn btn-outline-primary p-1\" (click)=\"openModal(true)\">\r\n                    Change\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                {{retailerAdvertisement?.attributes?.url}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"card\">\r\n            <div class=\"img-container\">\r\n              <img class=\"card-img-top\" height=\"200\" width=\"200\"\r\n                src=\"https://indoramaapp.untanglestrategy.com{{advertisement?.attributes?.AdImage?.data?.attributes?.url}}\" alt=\"Card image cap\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"overlay-text\"><a target=\"_blank\"\r\n                    href=\"https://indoramaapp.untanglestrategy.com{{advertisement?.attributes?.AdImage?.data?.attributes?.url}}\" style=\"color: white;\">Click\r\n                    to view file</a></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">\r\n                  Dashboard Advertisement\r\n                </h5>\r\n                <div>\r\n                  <!-- <button type=\"button\" class=\"btn btn-outline-primary p-1\">\r\n                    <img src=\"../../../assets/edit.svg\">\r\n                  </button> -->\r\n                  <button type=\"button\" class=\"btn btn-outline-primary p-1\" (click)=\"openModal(false)\">\r\n                    Change\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                {{advertisement?.attributes?.url}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #advertisementModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Change Advertisement</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"advertisementModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"advertisementForm\" (ngSubmit)=\"advertisementSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"content\">Redirect URL (Optional)</label>\r\n            <textarea type=\"text\" class=\"form-control\" id=\"clickUrl\" maxlength=\"150\" name=\"clickUrl\" rows=\"3\" formControlName=\"clickUrl\"\r\n              placeholder=\"Enter URL\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"File\">Image</label>\r\n            <div><input type=\"file\" id=\"File\" accept=\".jpg, .jpeg, .png\" name=\"File\" (change)=\"onChange($event)\"\r\n              formControlName=\"File\" placeholder=\"Choose file\" /></div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"advertisementModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !advertisementForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>");

/***/ }),

/***/ "Th2f":
/*!*************************************************************!*\
  !*** ./src/app/views/advertisement/advertisement.module.ts ***!
  \*************************************************************/
/*! exports provided: AdvertisementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementModule", function() { return AdvertisementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _advertisement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advertisement.component */ "+S+2");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _advertisement_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./advertisement-routing.module */ "fW/N");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");





// Dropdowns Component


// Buttons Routing

// Angular


let AdvertisementModule = class AdvertisementModule {
};
AdvertisementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _advertisement_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdvertisementRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _advertisement_component__WEBPACK_IMPORTED_MODULE_4__["AdvertisementComponent"],
        ]
    })
], AdvertisementModule);



/***/ }),

/***/ "fW/N":
/*!*********************************************************************!*\
  !*** ./src/app/views/advertisement/advertisement-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AdvertisementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertisementRoutingModule", function() { return AdvertisementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _advertisement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./advertisement.component */ "+S+2");




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
                component: _advertisement_component__WEBPACK_IMPORTED_MODULE_3__["AdvertisementComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Advertisement'
                }
            },
        ]
    }
];
let AdvertisementRoutingModule = class AdvertisementRoutingModule {
};
AdvertisementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdvertisementRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-advertisement-advertisement-module-es2017.js.map