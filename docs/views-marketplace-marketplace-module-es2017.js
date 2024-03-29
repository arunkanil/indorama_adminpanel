(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-marketplace-marketplace-module"],{

/***/ "4Ywq":
/*!*********************************************************!*\
  !*** ./src/app/views/marketplace/marketplace.module.ts ***!
  \*********************************************************/
/*! exports provided: MarketplaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceModule", function() { return MarketplaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketplace.component */ "jzZ7");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./marketplace-routing.module */ "iL95");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./marketplace-detail.component */ "sDOZ");





// Dropdowns Component


// Buttons Routing

// Angular



let MarketplaceModule = class MarketplaceModule {
};
MarketplaceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_7__["MarketplaceRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"],
            _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_10__["MarketplaceDetailComponent"]
        ]
    })
], MarketplaceModule);



/***/ }),

/***/ "RA4v":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/marketplace/marketplace-detail.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div\r\n    bsModal\r\n    #deleteModal=\"bs-modal\"\r\n    class=\"modal fade\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-labelledby=\"editModalLabel\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this listing?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"deleteModal.hide()\"\r\n          >\r\n            No! Cancel.\r\n          </button>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n            (click)=\"DeleteMarketplaceProduct()\"\r\n          >\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Listing Details</h2>\r\n      <span>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-primary\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"editModal.show()\"\r\n        >\r\n          Edit\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-danger\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"deleteModal.show()\"\r\n        >\r\n          Delete\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Item name</td>\r\n                  <td>\r\n                    {{ details?.attributes?.ItemName }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Category</td>\r\n                  <td>\r\n                    {{\r\n                      details?.attributes?.marketplace_category?.data\r\n                        ?.attributes?.CategoryName\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number</td>\r\n                  <td>{{ details?.attributes?.contactNumber }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Price</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Price }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Available quantity</td>\r\n                  <td>{{ details?.attributes?.AvailableQty }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Unit</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Unit }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Posted by</td>\r\n                  <td>\r\n                    {{ details?.attributes?.seller?.data?.attributes?.Name }} -\r\n                    {{\r\n                      details?.attributes?.seller?.data?.attributes?.username\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Description</td>\r\n                  <td>\r\n                    {{ details?.attributes?.description }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Images</td>\r\n                  <td>\r\n                    <span *ngFor=\"let item of details?.attributes?.Images.data\">\r\n                      <a\r\n                        href=\"{{ baseURL }}{{ item?.attributes?.url }}\"\r\n                        target=\"_blank\"\r\n                        ><img\r\n                          src=\"{{ baseURL }}{{ item?.attributes?.url }}\"\r\n                          alt=\"\"\r\n                          style=\"\r\n                            height: 100px;\r\n                            width: 200px;\r\n                            padding-left: 5px;\r\n                            padding-right: 5px;\r\n                          \"\r\n                      /></a>\r\n                      <!-- <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                        (click)=\"removePic(item)\">\r\n                        Delete\r\n                      </button> -->\r\n                    </span>\r\n                    <div class=\"mt-4\" style=\"display: flex\">\r\n                      <input\r\n                        type=\"file\"\r\n                        id=\"prof_pic\"\r\n                        style=\"width: 250px\"\r\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\r\n                        multiple\r\n                        name=\"prof_pic\"\r\n                        (change)=\"onChange($event)\"\r\n                        placeholder=\"Choose image\"\r\n                      />\r\n                      <button\r\n                        type=\"button\"\r\n                        [disabled]=\"btnLoading || !productForm.valid\"\r\n                        class=\"btn btn-outline-primary\"\r\n                        data-toggle=\"modal\"\r\n                        (click)=\"uploadImages()\"\r\n                      >\r\n                        <span\r\n                          *ngIf=\"btnLoading\"\r\n                          class=\"spinner-border spinner-border-sm\"\r\n                          role=\"status\"\r\n                          aria-hidden=\"true\"\r\n                        ></span>\r\n                        Upload\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div\r\n          bsModal\r\n          #editModal=\"bs-modal\"\r\n          class=\"modal fade\"\r\n          tabindex=\"-1\"\r\n          role=\"dialog\"\r\n          aria-labelledby=\"editModalLabel\"\r\n          aria-hidden=\"true\"\r\n        >\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Edit details</h4>\r\n                <button\r\n                  type=\"button\"\r\n                  class=\"close\"\r\n                  (click)=\"editModal.hide()\"\r\n                  aria-label=\"Close\"\r\n                >\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit()\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"category\">Category</label>\r\n                        <select\r\n                          class=\"form-control\"\r\n                          id=\"category\"\r\n                          required\r\n                          ngModel\r\n                          name=\"category\"\r\n                          formControlName=\"category\"\r\n                        >\r\n                          <option value=\"\" disabled selected hidden>\r\n                            Choose...\r\n                          </option>\r\n                          <option\r\n                            *ngFor=\"let item of Categories\"\r\n                            value=\"{{ item.id }}\"\r\n                          >\r\n                            {{ item.attributes.CategoryName }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"itemName\">Title</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"itemName\"\r\n                          name=\"itemName\"\r\n                          formControlName=\"itemName\"\r\n                          placeholder=\"Enter title\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"price\">Price</label>\r\n                        <input\r\n                          type=\"number\"\r\n                          class=\"form-control\"\r\n                          id=\"price\"\r\n                          name=\"price\"\r\n                          formControlName=\"price\"\r\n                          placeholder=\"Enter price\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"unit\">Unit</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"unit\"\r\n                          name=\"unit\"\r\n                          formControlName=\"unit\"\r\n                          placeholder=\"Enter unit\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"availableQty\">Quantity</label>\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          id=\"availableQty\"\r\n                          name=\"availableQty\"\r\n                          formControlName=\"availableQty\"\r\n                          placeholder=\"Enter available quantity\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"contactNumber\">Contact Number</label>\r\n                        <input\r\n                          type=\"number\"\r\n                          class=\"form-control\"\r\n                          id=\"contactNumber\"\r\n                          name=\"contactNumber\"\r\n                          formControlName=\"contactNumber\"\r\n                          placeholder=\"Enter Contact number\"\r\n                        />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"description\">Description</label>\r\n                        <textarea\r\n                          class=\"form-control\"\r\n                          id=\"description\"\r\n                          rows=\"5\"\r\n                          name=\"description\"\r\n                          formControlName=\"description\"\r\n                          placeholder=\"Enter description\"\r\n                        ></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-secondary\"\r\n                    (click)=\"editModal.hide()\"\r\n                  >\r\n                    Close\r\n                  </button>\r\n                  <button\r\n                    type=\"submit\"\r\n                    class=\"btn btn-primary ml-2\"\r\n                    [disabled]=\"btnLoading || !productForm.valid\"\r\n                  >\r\n                    <span\r\n                      *ngIf=\"btnLoading\"\r\n                      class=\"spinner-border spinner-border-sm\"\r\n                      role=\"status\"\r\n                      aria-hidden=\"true\"\r\n                    ></span>\r\n                    Save changes\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "hCDv":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/marketplace/marketplace.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Marketplace</h2>\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New listing\n        </button>\n      </div>\n    </div>\n    <!-- <p class=\"text-muted mx-3\">\n      To approve a crop price simply select and edit the record without\n      modifying the data\n    </p> -->\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #productModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Listing</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"productModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"category\">Category <span class=\"danger\">*</span></label>\n                <select\n                  class=\"form-control\"\n                  id=\"category\"\n                  required\n                  ngModel\n                  name=\"category\"\n                  formControlName=\"category\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Categories\" value=\"{{ item.id }}\">\n                    {{ item.attributes.CategoryName }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"itemName\">Title <span class=\"danger\">*</span></label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"itemName\"\n                  name=\"itemName\"\n                  formControlName=\"itemName\"\n                  placeholder=\"Enter title\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"price\">Price <span class=\"danger\">*</span></label>\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"price\"\n                  name=\"price\"\n                  formControlName=\"price\"\n                  placeholder=\"Enter price\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"unit\">Unit <span class=\"danger\">*</span></label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"unit\"\n                  name=\"unit\"\n                  formControlName=\"unit\"\n                  placeholder=\"Enter unit\"\n                />\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"availableQty\">Quantity <span class=\"danger\">*</span></label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"availableQty\"\n                  name=\"availableQty\"\n                  formControlName=\"availableQty\"\n                  placeholder=\"Enter available quantity\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"contactNumber\">Contact Number <span class=\"danger\">*</span></label>\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"contactNumber\"\n                  name=\"contactNumber\"\n                  formControlName=\"contactNumber\"\n                  placeholder=\"Enter Contact number\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"description\">Description <span class=\"danger\">*</span></label>\n                <textarea\n                  class=\"form-control\"\n                  id=\"description\"\n                  rows=\"5\"\n                  name=\"description\"\n                  formControlName=\"description\"\n                  placeholder=\"Enter description\"\n                ></textarea>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"images\">Image <span class=\"danger\">*</span></label>\n                <input\n                  type=\"file\"\n                  id=\"images\"\n                  multiple\n                  accept=\".jpg,.jpeg,.JPEG,.png\"\n                  name=\"images\"\n                  (change)=\"onChange($event)\"\n                  formControlName=\"images\"\n                  placeholder=\"Choose images\"\n                />\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"productModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !productForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "iL95":
/*!*****************************************************************!*\
  !*** ./src/app/views/marketplace/marketplace-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MarketplaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceRoutingModule", function() { return MarketplaceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketplace-detail.component */ "sDOZ");
/* harmony import */ var _marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketplace.component */ "jzZ7");





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
                component: _marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"],
                data: {
                    // roles: 'MANAGER',
                    title: 'Marketplace'
                }
            },
            {
                path: 'marketplace_details/:id',
                // canActivate: [AuthGuard],
                component: _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_3__["MarketplaceDetailComponent"],
                data: {
                    // roles: 'MANAGER',
                    title: 'Marketplace Details'
                }
            },
        ]
    }
];
let MarketplaceRoutingModule = class MarketplaceRoutingModule {
};
MarketplaceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MarketplaceRoutingModule);



/***/ }),

/***/ "jzZ7":
/*!************************************************************!*\
  !*** ./src/app/views/marketplace/marketplace.component.ts ***!
  \************************************************************/
/*! exports provided: MarketplaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function() { return MarketplaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marketplace_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marketplace.component.html */ "hCDv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let MarketplaceComponent = class MarketplaceComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.disableNextButton = false;
        this.disablePrevButton = true;
        this.pageSize = 20;
        this.from = 1;
        this.to = 20;
        this.count = 1;
        this.columnDefs = [];
        this.Categories = [];
        this.productForm = this.fb.group({
            itemName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            images: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userId: [localStorage.getItem('uid')],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            availableQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.rowData = [];
        this.selectedRows = [];
        this.file = [];
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["MarketplaceColumn"]];
        this.rowSelection = 'single';
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getMarketplace();
        this.getCategories();
    }
    getMarketplace() {
        this.dataservice
            .getMarketplace(1, this.pageSize)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.rowData = result.data.marketplaceProducts.data;
            this.meta = result.data.marketplaceProducts.meta;
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
            .downloadMarketplace()
            .subscribe((result) => {
            var _a;
            resp = result.body;
            console.log(result);
            if (result.status === 200 && result.body.status == 'Success') {
                this.toastr.success(result.body.message);
                this.btnLoading = false;
                window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}${(_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path}`, '_blank');
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
            .getMarketplace(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.marketplaceProducts.meta;
            this.rowData = result.data.marketplaceProducts.data;
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
            .getMarketplace(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.marketplaceProducts.meta;
            this.rowData = result.data.marketplaceProducts.data;
        });
    }
    getCategories() {
        this.dataservice
            .getMarketplaceCategories()
            .valueChanges.subscribe((result) => {
            console.log('getCategories', result.data.marketplaceCategories.data);
            this.Categories = result.data.marketplaceCategories.data;
        });
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }
    onRowClicked(event) {
        console.log('row', event.data);
    }
    onSelectionChanged(event) {
        var _a;
        this.selectedRows = this.gridApi.getSelectedRows();
        this.router.navigate(['/marketplace/marketplace_details', (_a = this.selectedRows[0]) === null || _a === void 0 ? void 0 : _a.id], {
            state: { data: this.selectedRows },
        });
    }
    // On file Select
    onChange(event) {
        this.file = [];
        for (let i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
    }
    openModal() {
        this.productModal.show();
    }
    productSubmit() {
        let resp = {};
        this.btnLoading = true;
        console.log(this.productForm.value);
        this.dataservice.upload(this.file).subscribe((response) => {
            if (response.status == 200) {
                console.log(response);
                this.dataservice
                    .createMarketplaceProduct(this.productForm.value, response.body.map((a) => a.id))
                    .subscribe((result) => {
                    resp = result.data;
                    console.log('response', result);
                    if (result.data.createMarketplaceProduct) {
                        this.toastr.success('Success!');
                        this.dataservice.getMarketplace(1, this.pageSize).refetch();
                        window.location.reload();
                        this.file = null;
                        this.productForm.reset();
                        this.productModal.hide();
                        this.gridApi.deselectAll();
                        this.btnLoading = false;
                    }
                    else {
                        this.toastr.error('Failed. Please check the fields!');
                        this.btnLoading = false;
                    }
                });
            }
            else {
                this.toastr.error('Image failed to upload!');
                this.btnLoading = false;
            }
        });
    }
};
MarketplaceComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
MarketplaceComponent.propDecorators = {
    productModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['productModal',] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['detailsModal',] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['deleteModal',] }]
};
MarketplaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_marketplace_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], MarketplaceComponent);



/***/ }),

/***/ "sDOZ":
/*!*******************************************************************!*\
  !*** ./src/app/views/marketplace/marketplace-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MarketplaceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketplaceDetailComponent", function() { return MarketplaceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marketplace_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marketplace-detail.component.html */ "RA4v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let MarketplaceDetailComponent = class MarketplaceDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverterMin = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverterMin"];
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
        this.file = [];
        this.Categories = [];
        this.productForm = this.fb.group({
            itemName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // images: ["", Validators.required],
            // userId: [localStorage.getItem("uid")],
            contactNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            availableQty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ngOnInit() {
        this.activatedRouter.params.subscribe((params) => {
            this.id = params['id'];
        });
        this.getSingleMarketplaceProduct();
        this.getCategories();
    }
    getSingleMarketplaceProduct() {
        this.dataservice
            .getSingleMarketplaceProduct(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            console.log('getSingleMarketplaceProduct', result.data.marketplaceProduct.data);
            this.details = result.data.marketplaceProduct.data;
            this.productForm = this.fb.group({
                itemName: [(_a = this.details.attributes) === null || _a === void 0 ? void 0 : _a.ItemName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // images: [this.details.attributes?.Images?.data, Validators.required],
                // userId: [this.details?.attributes?.seller?.data?.attributes?.Name],
                contactNumber: [
                    (_b = this.details.attributes) === null || _b === void 0 ? void 0 : _b.contactNumber,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                price: [(_c = this.details.attributes) === null || _c === void 0 ? void 0 : _c.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                availableQty: [
                    (_d = this.details.attributes) === null || _d === void 0 ? void 0 : _d.AvailableQty,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                unit: [(_e = this.details.attributes) === null || _e === void 0 ? void 0 : _e.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                category: [
                    (_h = (_g = (_f = this.details.attributes) === null || _f === void 0 ? void 0 : _f.marketplace_category) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                description: [
                    (_j = this.details.attributes) === null || _j === void 0 ? void 0 : _j.description,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
            });
            console.log(this.productForm);
            this.loading = false;
        });
    }
    getCategories() {
        this.dataservice
            .getMarketplaceCategories()
            .valueChanges.subscribe((result) => {
            console.log('getCategories', result.data.marketplaceCategories.data);
            this.Categories = result.data.marketplaceCategories.data;
        });
    }
    dateConvertor(date) {
        return new Date(date);
    }
    openModal(data, flag) {
        this.resultModal.show();
        console.log(data, flag);
        this.flag = flag;
    }
    // On file Select
    onChange(event) {
        this.file = [];
        for (let i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
    }
    productSubmit() {
        let resp = {};
        this.btnLoading = true;
        console.log(this.productForm.value);
        this.dataservice
            .updateMarketplaceProduct(this.productForm.value, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log('response', result);
            if (result.data.updateMarketplaceProduct) {
                this.toastr.success('Activity updated successfully!');
                this.editModal.hide();
                this.btnLoading = false;
                this.getSingleMarketplaceProduct();
            }
            else {
                this.toastr.error('Failed. Please check the fields!');
                this.btnLoading = false;
            }
        });
    }
    uploadImages() {
        let resp = {};
        this.btnLoading = true;
        this.dataservice.upload(this.file).subscribe((response) => {
            if (response.status === 200) {
                console.log(response);
                this.dataservice
                    .updateMarketplaceProductImg(this.id, response.body.map((a) => a.id))
                    .subscribe((result) => {
                    resp = result.data;
                    console.log('response', result);
                    if (result.data.updateMarketplaceProduct) {
                        this.toastr.success('Activity updated successfully!');
                        this.btnLoading = false;
                        this.dataservice.getSingleMarketplaceProduct(this.id).refetch();
                    }
                    else {
                        this.toastr.error('Failed. Please check the fields!');
                        this.btnLoading = false;
                    }
                });
            }
            else {
                this.toastr.error('Image failed to upload!');
                this.btnLoading = false;
            }
        });
    }
    DeleteMarketplaceProduct() {
        this.dataservice
            .DeleteMarketplaceProduct(this.id)
            .subscribe((result) => {
            console.log('response', result);
            if (result.data.deleteMarketplaceProduct) {
                this.toastr.success('Success!');
                this.deleteModal.hide();
                this.router.navigate(['/marketplace/all']);
            }
            else {
                this.toastr.error('Failed!');
            }
        });
    }
};
MarketplaceDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
MarketplaceDetailComponent.propDecorators = {
    editModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['editModal',] }],
    resultModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['resultModal',] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['deleteModal',] }]
};
MarketplaceDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_marketplace_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], MarketplaceDetailComponent);



/***/ })

}]);
//# sourceMappingURL=views-marketplace-marketplace-module-es2017.js.map