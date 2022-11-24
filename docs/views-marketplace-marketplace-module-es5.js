(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-marketplace-marketplace-module"], {
    /***/"4Ywq":
    /*!*********************************************************!*\
      !*** ./src/app/views/marketplace/marketplace.module.ts ***!
      \*********************************************************/
    /*! exports provided: MarketplaceModule */
    /***/
    function Ywq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MarketplaceModule", function () {
        return MarketplaceModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common */"SVse");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./marketplace.component */"jzZ7");
      /* harmony import */
      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-bootstrap/dropdown */"FE24");
      /* harmony import */
      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-bootstrap/tabs */"2ZVE");
      /* harmony import */
      var _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./marketplace-routing.module */"iL95");
      /* harmony import */
      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ag-grid-angular */"YFAK");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./marketplace-detail.component */"sDOZ");

      // Dropdowns Component

      // Buttons Routing

      // Angular

      var MarketplaceModule = /*#__PURE__*/_createClass(function MarketplaceModule() {
        _classCallCheck(this, MarketplaceModule);
      });
      MarketplaceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_7__["MarketplaceRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"], _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_10__["MarketplaceDetailComponent"]]
      })], MarketplaceModule);

      /***/
    },

    /***/"RA4v":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/marketplace/marketplace-detail.component.html ***!
      \***********************************************************************************************************/
    /*! exports provided: default */
    /***/
    function RA4v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div\n    bsModal\n    #deleteModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"editModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this listing?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"deleteModal.hide()\"\n          >\n            No! Cancel.\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"DeleteMarketplaceProduct()\"\n          >\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Listing Details</h2>\n      <span>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"editModal.show()\"\n        >\n          Edit\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-danger\"\n          data-toggle=\"modal\"\n          (click)=\"deleteModal.show()\"\n        >\n          Delete\n        </button>\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>{{ details?.id }}</td>\n                </tr>\n                <tr>\n                  <td>Item name</td>\n                  <td>\n                    {{ details?.attributes?.ItemName }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Category</td>\n                  <td>\n                    {{\n                      details?.attributes?.marketplace_category?.data\n                        ?.attributes?.CategoryName\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Contact number</td>\n                  <td>{{ details?.attributes?.contactNumber }}</td>\n                </tr>\n                <tr>\n                  <td>Price</td>\n                  <td>\n                    NGN {{ details?.attributes?.Price }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Available quantity</td>\n                  <td>{{ details?.attributes?.AvailableQty }}</td>\n                </tr>\n                <tr>\n                  <td>Unit</td>\n                  <td>\n                    {{ details?.attributes?.Unit }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Posted by</td>\n                  <td>\n                    {{ details?.attributes?.seller?.data?.attributes?.Name }} -\n                    {{\n                      details?.attributes?.seller?.data?.attributes?.username\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Description</td>\n                  <td>\n                    {{ details?.attributes?.description }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Images</td>\n                  <td>\n                    <span *ngFor=\"let item of details?.attributes?.Images.data\">\n                      <a\n                        href=\"{{ baseURL }}{{ item?.attributes?.url }}\"\n                        target=\"_blank\"\n                        ><img\n                          src=\"{{ baseURL }}{{ item?.attributes?.url }}\"\n                          alt=\"\"\n                          style=\"\n                            height: 100px;\n                            width: 200px;\n                            padding-left: 5px;\n                            padding-right: 5px;\n                          \"\n                      /></a>\n                      <!-- <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\n                        (click)=\"removePic(item)\">\n                        Delete\n                      </button> -->\n                    </span>\n                    <div class=\"mt-4\" style=\"display: flex\">\n                      <input\n                        type=\"file\"\n                        id=\"prof_pic\"\n                        style=\"width: 250px\"\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\n                        multiple\n                        name=\"prof_pic\"\n                        (change)=\"onChange($event)\"\n                        placeholder=\"Choose image\"\n                      />\n                      <button\n                        type=\"button\"\n                        [disabled]=\"btnLoading || !productForm.valid\"\n                        class=\"btn btn-outline-primary\"\n                        data-toggle=\"modal\"\n                        (click)=\"uploadImages()\"\n                      >\n                        <span\n                          *ngIf=\"btnLoading\"\n                          class=\"spinner-border spinner-border-sm\"\n                          role=\"status\"\n                          aria-hidden=\"true\"\n                        ></span>\n                        Upload\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div\n          bsModal\n          #editModal=\"bs-modal\"\n          class=\"modal fade\"\n          tabindex=\"-1\"\n          role=\"dialog\"\n          aria-labelledby=\"editModalLabel\"\n          aria-hidden=\"true\"\n        >\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Edit details</h4>\n                <button\n                  type=\"button\"\n                  class=\"close\"\n                  (click)=\"editModal.hide()\"\n                  aria-label=\"Close\"\n                >\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit()\">\n                  <div class=\"row\">\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"category\">Category</label>\n                        <select\n                          class=\"form-control\"\n                          id=\"category\"\n                          required\n                          ngModel\n                          name=\"category\"\n                          formControlName=\"category\"\n                        >\n                          <option value=\"\" disabled selected hidden>\n                            Choose...\n                          </option>\n                          <option\n                            *ngFor=\"let item of Categories\"\n                            value=\"{{ item.id }}\"\n                          >\n                            {{ item.attributes.CategoryName }}\n                          </option>\n                        </select>\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"itemName\">Title</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"itemName\"\n                          name=\"itemName\"\n                          formControlName=\"itemName\"\n                          placeholder=\"Enter title\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"price\">Price</label>\n                        <input\n                          type=\"number\"\n                          class=\"form-control\"\n                          id=\"price\"\n                          name=\"price\"\n                          formControlName=\"price\"\n                          placeholder=\"Enter price\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"unit\">Unit</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"unit\"\n                          name=\"unit\"\n                          formControlName=\"unit\"\n                          placeholder=\"Enter unit\"\n                        />\n                      </div>\n                    </div>\n                    <div class=\"col\">\n                      <div class=\"form-group\">\n                        <label for=\"availableQty\">Quantity</label>\n                        <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          id=\"availableQty\"\n                          name=\"availableQty\"\n                          formControlName=\"availableQty\"\n                          placeholder=\"Enter available quantity\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"contactNumber\">Contact Number</label>\n                        <input\n                          type=\"number\"\n                          class=\"form-control\"\n                          id=\"contactNumber\"\n                          name=\"contactNumber\"\n                          formControlName=\"contactNumber\"\n                          placeholder=\"Enter Contact number\"\n                        />\n                      </div>\n                      <div class=\"form-group\">\n                        <label for=\"description\">Description</label>\n                        <textarea\n                          class=\"form-control\"\n                          id=\"description\"\n                          rows=\"5\"\n                          name=\"description\"\n                          formControlName=\"description\"\n                          placeholder=\"Enter description\"\n                        ></textarea>\n                      </div>\n                    </div>\n                  </div>\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-secondary\"\n                    (click)=\"editModal.hide()\"\n                  >\n                    Close\n                  </button>\n                  <button\n                    type=\"submit\"\n                    class=\"btn btn-primary ml-2\"\n                    [disabled]=\"btnLoading || !productForm.valid\"\n                  >\n                    <span\n                      *ngIf=\"btnLoading\"\n                      class=\"spinner-border spinner-border-sm\"\n                      role=\"status\"\n                      aria-hidden=\"true\"\n                    ></span>\n                    Save changes\n                  </button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

      /***/
    },

    /***/"hCDv":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/marketplace/marketplace.component.html ***!
      \****************************************************************************************************/
    /*! exports provided: default */
    /***/
    function hCDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Marketplace</h2>\n      <div>\n        <button\n          type=\"button\"\n          class=\"btn btn-primary\"\n          data-toggle=\"modal\"\n          (click)=\"openModal()\"\n        >\n          Add New listing\n        </button>\n      </div>\n    </div>\n    <!-- <p class=\"text-muted mx-3\">\n      To approve a crop price simply select and edit the record without\n      modifying the data\n    </p> -->\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            (gridReady)=\"onGridReady($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\">{{from}} to {{to}}  of {{meta?.pagination?.total}}</span>\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #productModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Listing</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"productModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"category\">Category <span class=\"danger\">*</span></label>\n                <select\n                  class=\"form-control\"\n                  id=\"category\"\n                  required\n                  ngModel\n                  name=\"category\"\n                  formControlName=\"category\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Categories\" value=\"{{ item.id }}\">\n                    {{ item.attributes.CategoryName }}\n                  </option>\n                </select>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"itemName\">Title <span class=\"danger\">*</span></label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"itemName\"\n                  name=\"itemName\"\n                  formControlName=\"itemName\"\n                  placeholder=\"Enter title\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"price\">Price (NGN) <span class=\"danger\">*</span></label>\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"price\"\n                  name=\"price\"\n                  formControlName=\"price\"\n                  placeholder=\"Enter price\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"unit\">Unit <span class=\"danger\">*</span></label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"unit\"\n                  name=\"unit\"\n                  formControlName=\"unit\"\n                  placeholder=\"Enter unit\"\n                />\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"availableQty\">Quantity <span class=\"danger\">*</span></label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"availableQty\"\n                  name=\"availableQty\"\n                  formControlName=\"availableQty\"\n                  placeholder=\"Enter available quantity\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"contactNumber\">Contact Number <span class=\"danger\">*</span></label>\n                <input\n                  type=\"number\"\n                  class=\"form-control\"\n                  id=\"contactNumber\"\n                  name=\"contactNumber\"\n                  formControlName=\"contactNumber\"\n                  placeholder=\"Enter Contact number\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label for=\"description\">Description <span class=\"danger\">*</span></label>\n                <textarea\n                  class=\"form-control\"\n                  id=\"description\"\n                  rows=\"5\"\n                  name=\"description\"\n                  formControlName=\"description\"\n                  placeholder=\"Enter description\"\n                ></textarea>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"images\">Image <span class=\"danger\">*</span></label>\n                <input\n                  type=\"file\"\n                  id=\"images\"\n                  multiple\n                  accept=\".jpg,.jpeg,.JPEG,.png\"\n                  name=\"images\"\n                  (change)=\"onChange($event)\"\n                  formControlName=\"images\"\n                  placeholder=\"Choose images\"\n                />\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"productModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !productForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";

      /***/
    },

    /***/"iL95":
    /*!*****************************************************************!*\
      !*** ./src/app/views/marketplace/marketplace-routing.module.ts ***!
      \*****************************************************************/
    /*! exports provided: MarketplaceRoutingModule */
    /***/
    function iL95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MarketplaceRoutingModule", function () {
        return MarketplaceRoutingModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./marketplace-detail.component */"sDOZ");
      /* harmony import */
      var _marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./marketplace.component */"jzZ7");
      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'Marketplace'
          }
        }, {
          path: 'marketplace_details/:id',
          // canActivate: [AuthGuard],
          component: _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_3__["MarketplaceDetailComponent"],
          data: {
            // roles: 'MANAGER',
            title: 'Marketplace Details'
          }
        }]
      }];
      var MarketplaceRoutingModule = /*#__PURE__*/_createClass(function MarketplaceRoutingModule() {
        _classCallCheck(this, MarketplaceRoutingModule);
      });
      MarketplaceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MarketplaceRoutingModule);

      /***/
    },

    /***/"jzZ7":
    /*!************************************************************!*\
      !*** ./src/app/views/marketplace/marketplace.component.ts ***!
      \************************************************************/
    /*! exports provided: MarketplaceComponent */
    /***/
    function jzZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function () {
        return MarketplaceComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_marketplace_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./marketplace.component.html */"hCDv");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      /* harmony import */
      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../constants/columnMetadata */"7nfi");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      var MarketplaceComponent = /*#__PURE__*/function () {
        function MarketplaceComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, MarketplaceComponent);
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
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            images: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            userId: [localStorage.getItem("uid")],
            contactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            availableQty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.rowData = [];
          this.selectedRows = [];
          this.file = [];
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["MarketplaceColumn"]);
          this.rowSelection = "single";
        }
        _createClass(MarketplaceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getMarketplace();
            this.getCategories();
          }
        }, {
          key: "getMarketplace",
          value: function getMarketplace() {
            var _this = this;
            this.dataservice.getMarketplace(1, this.pageSize).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f;
              _this.rowData = result.data.marketplaceProducts.data;
              _this.meta = result.data.marketplaceProducts.meta;
              if (((_b = (_a = _this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.pageCount) <= 1) {
                _this.disablePrevButton = true;
                _this.disableNextButton = true;
              }
              if (((_d = (_c = _this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total) < _this.pageSize) {
                _this.to = (_f = (_e = _this.meta) === null || _e === void 0 ? void 0 : _e.pagination) === null || _f === void 0 ? void 0 : _f.total;
              }
            });
          }
        }, {
          key: "loadNext",
          value: function loadNext() {
            var _this2 = this;
            var _a, _b, _c, _d;
            this.count++;
            this.disablePrevButton = false;
            this.from = this.from + this.pageSize;
            this.to = this.to + this.pageSize > ((_b = (_a = this.meta) === null || _a === void 0 ? void 0 : _a.pagination) === null || _b === void 0 ? void 0 : _b.total) ? (_d = (_c = this.meta) === null || _c === void 0 ? void 0 : _c.pagination) === null || _d === void 0 ? void 0 : _d.total : this.to + this.pageSize;
            if (this.count === this.meta.pagination.pageCount) {
              this.disableNextButton = true;
            }
            this.dataservice.getMarketplace(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this2.meta = result.data.marketplaceProducts.meta;
              _this2.rowData = result.data.marketplaceProducts.data;
            });
          }
        }, {
          key: "loadPrev",
          value: function loadPrev() {
            var _this3 = this;
            this.count--;
            if (this.count < this.meta.pagination.pageCount) {
              this.disableNextButton = false;
            }
            if (this.count === 1) {
              this.disablePrevButton = true;
            }
            this.from = this.from - this.pageSize;
            this.to = this.to - this.rowData.length;
            this.dataservice.getMarketplace(this.count, this.pageSize).valueChanges.subscribe(function (result) {
              _this3.meta = result.data.marketplaceProducts.meta;
              _this3.rowData = result.data.marketplaceProducts.data;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this4 = this;
            this.dataservice.getMarketplaceCategories().valueChanges.subscribe(function (result) {
              console.log("getCategories", result.data.marketplaceCategories.data);
              _this4.Categories = result.data.marketplaceCategories.data;
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
            var _a;
            this.selectedRows = this.gridApi.getSelectedRows();
            this.router.navigate(["/marketplace/marketplace_details", (_a = this.selectedRows[0]) === null || _a === void 0 ? void 0 : _a.id], {
              state: {
                data: this.selectedRows
              }
            });
          }
          // On file Select
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.file = [];
            for (var i = 0; i < event.target.files.length; i++) {
              this.file.push(event.target.files[i]);
            }
            console.log(this.file);
          }
        }, {
          key: "openModal",
          value: function openModal() {
            this.productModal.show();
          }
        }, {
          key: "productSubmit",
          value: function productSubmit() {
            var _this5 = this;
            var resp = {};
            this.btnLoading = true;
            console.log(this.productForm.value);
            this.dataservice.upload(this.file).subscribe(function (response) {
              if (response.status == 200) {
                console.log(response);
                _this5.dataservice.createMarketplaceProduct(_this5.productForm.value, response.body.map(function (a) {
                  return a.id;
                })).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);
                  if (result.data.createMarketplaceProduct) {
                    _this5.toastr.success("Success!");
                    _this5.dataservice.getMarketplace(1, _this5.pageSize).refetch();
                    window.location.reload();
                    _this5.file = null;
                    _this5.productForm.reset();
                    _this5.productModal.hide();
                    _this5.gridApi.deselectAll();
                    _this5.btnLoading = false;
                  } else {
                    _this5.toastr.error("Failed. Please check the fields!");
                    _this5.btnLoading = false;
                  }
                });
              } else {
                _this5.toastr.error("Image failed to upload!");
                _this5.btnLoading = false;
              }
            });
          }
        }]);
        return MarketplaceComponent;
      }();
      MarketplaceComponent.ctorParameters = function () {
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
      MarketplaceComponent.propDecorators = {
        productModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["productModal"]
        }],
        detailsModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["detailsModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }]
      };
      MarketplaceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_marketplace_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], MarketplaceComponent);

      /***/
    },

    /***/"sDOZ":
    /*!*******************************************************************!*\
      !*** ./src/app/views/marketplace/marketplace-detail.component.ts ***!
      \*******************************************************************/
    /*! exports provided: MarketplaceDetailComponent */
    /***/
    function sDOZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "MarketplaceDetailComponent", function () {
        return MarketplaceDetailComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_marketplace_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./marketplace-detail.component.html */"RA4v");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      /* harmony import */
      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! @angular/forms */"s7LF");
      /* harmony import */
      var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../../constants/columnMetadata */"7nfi");
      /* harmony import */
      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ../../../environments/environment */"AytR");
      var MarketplaceDetailComponent = /*#__PURE__*/function () {
        function MarketplaceDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, MarketplaceDetailComponent);
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
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // images: ["", Validators.required],
            // userId: [localStorage.getItem("uid")],
            contactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            availableQty: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
          });
        }
        _createClass(MarketplaceDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;
            this.activatedRouter.params.subscribe(function (params) {
              _this6.id = params["id"];
            });
            this.getSingleMarketplaceProduct();
            this.getCategories();
          }
        }, {
          key: "getSingleMarketplaceProduct",
          value: function getSingleMarketplaceProduct() {
            var _this7 = this;
            this.dataservice.getSingleMarketplaceProduct(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;
              console.log("getSingleMarketplaceProduct", result.data.marketplaceProduct.data);
              _this7.details = result.data.marketplaceProduct.data;
              _this7.productForm = _this7.fb.group({
                itemName: [(_a = _this7.details.attributes) === null || _a === void 0 ? void 0 : _a.ItemName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // images: [this.details.attributes?.Images?.data, Validators.required],
                // userId: [this.details?.attributes?.seller?.data?.attributes?.Name],
                contactNumber: [(_b = _this7.details.attributes) === null || _b === void 0 ? void 0 : _b.contactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                price: [(_c = _this7.details.attributes) === null || _c === void 0 ? void 0 : _c.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                availableQty: [(_d = _this7.details.attributes) === null || _d === void 0 ? void 0 : _d.AvailableQty, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                unit: [(_e = _this7.details.attributes) === null || _e === void 0 ? void 0 : _e.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                category: [(_h = (_g = (_f = _this7.details.attributes) === null || _f === void 0 ? void 0 : _f.marketplace_category) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                description: [(_j = _this7.details.attributes) === null || _j === void 0 ? void 0 : _j.description, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              console.log(_this7.productForm);
              _this7.loading = false;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this8 = this;
            this.dataservice.getMarketplaceCategories().valueChanges.subscribe(function (result) {
              console.log("getCategories", result.data.marketplaceCategories.data);
              _this8.Categories = result.data.marketplaceCategories.data;
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
          // On file Select
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.file = [];
            for (var i = 0; i < event.target.files.length; i++) {
              this.file.push(event.target.files[i]);
            }
            console.log(this.file);
          }
        }, {
          key: "productSubmit",
          value: function productSubmit() {
            var _this9 = this;
            var resp = {};
            this.btnLoading = true;
            console.log(this.productForm.value);
            this.dataservice.updateMarketplaceProduct(this.productForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);
              if (result.data.updateMarketplaceProduct) {
                _this9.toastr.success("Activity updated successfully!");
                _this9.editModal.hide();
                _this9.btnLoading = false;
                _this9.getSingleMarketplaceProduct();
              } else {
                _this9.toastr.error("Failed. Please check the fields!");
                _this9.btnLoading = false;
              }
            });
          }
        }, {
          key: "uploadImages",
          value: function uploadImages() {
            var _this10 = this;
            var resp = {};
            this.btnLoading = true;
            this.dataservice.upload(this.file).subscribe(function (response) {
              if (response.status == 200) {
                console.log(response);
                _this10.dataservice.updateMarketplaceProductImg(_this10.id, response.body.map(function (a) {
                  return a.id;
                })).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);
                  if (result.data.updateMarketplaceProduct) {
                    _this10.toastr.success("Activity updated successfully!");
                    _this10.btnLoading = false;
                    _this10.dataservice.getSingleMarketplaceProduct(_this10.id).refetch();
                  } else {
                    _this10.toastr.error("Failed. Please check the fields!");
                    _this10.btnLoading = false;
                  }
                });
              } else {
                _this10.toastr.error("Image failed to upload!");
                _this10.btnLoading = false;
              }
            });
          }
        }, {
          key: "DeleteMarketplaceProduct",
          value: function DeleteMarketplaceProduct() {
            var _this11 = this;
            this.dataservice.DeleteMarketplaceProduct(this.id).subscribe(function (result) {
              console.log("response", result);
              if (result.data.deleteMarketplaceProduct) {
                _this11.toastr.success("Success!");
                _this11.deleteModal.hide();
                _this11.router.navigate(["/marketplace/all"]);
              } else {
                _this11.toastr.error("Failed!");
              }
            });
          }
        }]);
        return MarketplaceDetailComponent;
      }();
      MarketplaceDetailComponent.ctorParameters = function () {
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
      MarketplaceDetailComponent.propDecorators = {
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
      MarketplaceDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_marketplace_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], MarketplaceDetailComponent);

      /***/
    }
  }]);
})();
//# sourceMappingURL=views-marketplace-marketplace-module-es5.js.map