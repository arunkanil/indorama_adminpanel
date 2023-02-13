(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-indorama-updates-indorama-updates-module"],{

/***/ "57+R":
/*!***************************************************************************!*\
  !*** ./src/app/views/indorama-updates/indorama-updates-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: IndoramaUpdatesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesRoutingModule", function() { return IndoramaUpdatesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _indorama_updates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indorama-updates.component */ "r72j");




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
                component: _indorama_updates_component__WEBPACK_IMPORTED_MODULE_3__["IndoramaUpdatesComponent"],
                data: {
                    roles: 'KP_CALLER',
                    title: 'Indorama Updates'
                }
            },
        ]
    }
];
let IndoramaUpdatesRoutingModule = class IndoramaUpdatesRoutingModule {
};
IndoramaUpdatesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IndoramaUpdatesRoutingModule);



/***/ }),

/***/ "eFNz":
/*!*******************************************************************!*\
  !*** ./src/app/views/indorama-updates/indorama-updates.module.ts ***!
  \*******************************************************************/
/*! exports provided: IndoramaUpdatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesModule", function() { return IndoramaUpdatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _indorama_updates_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indorama-updates-routing.module */ "57+R");
/* harmony import */ var _indorama_updates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./indorama-updates.component */ "r72j");










let IndoramaUpdatesModule = class IndoramaUpdatesModule {
};
IndoramaUpdatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
            _indorama_updates_routing_module__WEBPACK_IMPORTED_MODULE_8__["IndoramaUpdatesRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _indorama_updates_component__WEBPACK_IMPORTED_MODULE_9__["IndoramaUpdatesComponent"],
        ]
    })
], IndoramaUpdatesModule);



/***/ }),

/***/ "fVCG":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/indorama-updates/indorama-updates.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Indorama Updates</h2>\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          [disabled]=\"disableButton\"\n          (click)=\"deleteModal.show()\"\n        >\n          Delete\n        </button>\n        <button\n          type=\"button\"\n          [disabled]=\"disableButton\"\n          class=\"btn btn-info\"\n          data-toggle=\"modal\"\n          (click)=\"openModal('Edit')\"\n        >\n          Edit\n        </button>\n        <button\n          type=\"button\"\n          [disabled]=\"!disableButton\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New Update\n        </button>\n      </div>\n    </div>\n    <!-- <p class=\"text-muted mx-3\">\n      To approve a crop price simply select and edit the record without\n      modifying the data\n    </p> -->\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #cropPriceModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add/Edit News</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"cropPriceModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"newsForm\" (ngSubmit)=\"cropPriceSubmit()\">\n          <div class=\"form-group\">\n            <label for=\"Title\">Title</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"Title\"\n              name=\"Title\"\n              formControlName=\"Title\"\n              placeholder=\"Enter title\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Body\">Body</label>\n            <textarea\n              class=\"form-control\"\n              id=\"Body\"\n              rows=\"5\"\n              name=\"Body\"\n              formControlName=\"Body\"\n              placeholder=\"Enter Body\"\n            ></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"Image\">Image</label>\n            <div>\n              <img\n                *ngIf=\"imageUrl\"\n                src=\"{{ imageUrl }}\"\n                width=\"100\"\n                height=\"100\"\n                style=\"object-fit: cover\"\n              />\n            </div>\n            <input\n              type=\"file\"\n              class=\"form-control\"\n              id=\"Image\"\n              accept=\".jpg,.jpeg,.JPEG,.png\"\n              name=\"Image\"\n              (change)=\"onChange($event)\"\n              formControlName=\"Image\"\n              placeholder=\"Choose image\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"cropPriceModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !newsForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<div\n  bsModal\n  #deleteModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body text-center\">\n        Do you want to delete this record?\n      </div>\n      <div class=\"modal-footer justify-content-around\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary\"\n          (click)=\"deleteModal.hide()\"\n        >\n          No! Cancel.\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteRecord()\">\n          Yes! Delete.\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "r72j":
/*!**********************************************************************!*\
  !*** ./src/app/views/indorama-updates/indorama-updates.component.ts ***!
  \**********************************************************************/
/*! exports provided: IndoramaUpdatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesComponent", function() { return IndoramaUpdatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_indorama_updates_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./indorama-updates.component.html */ "fVCG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let IndoramaUpdatesComponent = class IndoramaUpdatesComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.loading = true;
        this.btnLoading = false;
        this.disableButton = true;
        this.disableNextButton = false;
        this.disablePrevButton = true;
        this.pageSize = 20;
        this.from = 1;
        this.to = 20;
        this.count = 1;
        this.orders = {};
        this.columnDefs = [];
        this.newsForm = this.fb.group({
            Title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: [""],
        });
        this.rowData = [];
        this.selectedRows = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.file = null;
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["IndoramaUpdatesColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getUpdates(undefined, 1, this.pageSize);
    }
    getUpdates(id, page, pageSize) {
        this.dataservice
            .getIndoramaUpdates(id, page, pageSize)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.rowData = result.data.newsAndUpdates.data;
            this.meta = result.data.newsAndUpdates.meta;
            if (((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                this.disablePrevButton = true;
                this.disableNextButton = true;
            }
            if (((_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < this.pageSize) {
                this.to = (_f = (_e = this.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
            }
        });
    }
    downloadExcel() {
        let resp = {};
        this.btnLoading = true;
        this.dataservice
            .downloadIndoramaUpdates()
            .subscribe((result) => {
            var _a;
            resp = result.body;
            console.log(result);
            if (result.status === 200 && result.body.status == "Success") {
                this.toastr.success(result.body.message);
                this.btnLoading = false;
                window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}${(_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path}`, "_blank");
            }
            else {
                this.btnLoading = false;
                this.toastr.error(result.body.message);
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
            .getIndoramaUpdates(undefined, this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.newsAndUpdates.meta;
            this.rowData = result.data.newsAndUpdates.data;
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
            .getIndoramaUpdates(undefined, this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.newsAndUpdates.meta;
            this.rowData = result.data.newsAndUpdates.data;
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
        if (this.selectedRows.length > 0) {
            this.disableButton = false;
        }
        else {
            this.disableButton = true;
        }
    }
    // On file Select
    onChange(event) {
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
    }
    openModal(data) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.imageUrl = null;
        this.cropPriceModal.show();
        if (data) {
            this.newsForm = this.fb.group({
                Title: [this.selectedRows[0].attributes.Title, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Body: [this.selectedRows[0].attributes.Body, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: [
                    (_b = (_a = this.selectedRows[0].attributes.Images) === null || _a === void 0 ? void 0 : _a.data[0]) === null || _b === void 0 ? void 0 : _b.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            });
            this.imageUrl = ((_e = (_d = (_c = this.selectedRows[0].attributes.Images) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ? `${this.baseURL}` + ((_h = (_g = (_f = this.selectedRows[0].attributes.Images) === null || _f === void 0 ? void 0 : _f.data[0]) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.url)
                : null;
        }
        else {
            this.newsForm = this.fb.group({
                Title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Body: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
            this.imageUrl = null;
        }
    }
    deleteRecord() {
        let resp = {};
        this.dataservice
            .UpdateIndoramaUpdates({ isDelete: true }, this.selectedRows[0].id, null)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateNewsAndUpdate) {
                this.toastr.success("Success!");
                this.getUpdates();
                this.file = null;
                this.deleteModal.hide();
                this.gridApi.deselectAll();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    cropPriceSubmit() {
        let resp = {};
        this.btnLoading = true;
        console.log(this.newsForm.value);
        if (!this.disableButton) {
            if (this.file) {
                this.dataservice.upload(this.file).subscribe((response) => {
                    var _a;
                    if (response.status == 200) {
                        console.log(response);
                        this.dataservice
                            .UpdateIndoramaUpdates(this.newsForm.value, this.selectedRows[0].id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                            .subscribe((result) => {
                            resp = result.data;
                            console.log("response", result);
                            if (result.data.updateNewsAndUpdate) {
                                this.toastr.success("Success!");
                                this.file = null;
                                this.getUpdates();
                                this.btnLoading = false;
                                this.cropPriceModal.hide();
                                this.newsForm.reset();
                                this.gridApi.deselectAll();
                            }
                            else {
                                this.toastr.error("Failed. Please check the fields!");
                                this.btnLoading = false;
                            }
                        });
                    }
                });
            }
            else {
                this.dataservice
                    .UpdateIndoramaUpdates(this.newsForm.value, this.selectedRows[0].id, null)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.updateNewsAndUpdate) {
                        this.toastr.success("Success!");
                        this.file = null;
                        this.btnLoading = false;
                        this.cropPriceModal.hide();
                        this.newsForm.reset();
                        this.gridApi.deselectAll();
                        this.getUpdates();
                    }
                    else {
                        this.toastr.error("Failed. Please check the fields!");
                        this.btnLoading = false;
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
                        .AddIndoramaUpdates(this.newsForm.value, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                        .subscribe((result) => {
                        resp = result.data;
                        console.log("response", result);
                        if (result.data.createNewsAndUpdate) {
                            this.toastr.success("Success!");
                            this.file = null;
                            this.cropPriceModal.hide();
                            this.newsForm.reset();
                            this.btnLoading = false;
                            this.getUpdates();
                            this.gridApi.deselectAll();
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
    }
};
IndoramaUpdatesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
IndoramaUpdatesComponent.propDecorators = {
    cropPriceModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["cropPriceModal",] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["detailsModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }]
};
IndoramaUpdatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_indorama_updates_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], IndoramaUpdatesComponent);



/***/ })

}]);
//# sourceMappingURL=views-indorama-updates-indorama-updates-module-es2017.js.map