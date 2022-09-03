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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-marketplace-marketplace-module"], {
    /***/
    "4Ywq": function Ywq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketplaceModule", function () {
        return MarketplaceModule;
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


      var _marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./marketplace.component */
      "jzZ7");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./marketplace-routing.module */
      "iL95");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./marketplace-detail.component */
      "sDOZ"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var MarketplaceModule = function MarketplaceModule() {
        _classCallCheck(this, MarketplaceModule);
      };

      MarketplaceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _marketplace_routing_module__WEBPACK_IMPORTED_MODULE_7__["MarketplaceRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"], _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_10__["MarketplaceDetailComponent"]]
      })], MarketplaceModule);
      /***/
    },

    /***/
    "RA4v": function RA4v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"editModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this listing?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"DeleteMarketplaceProduct()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Listing Details</h2>\r\n      <span>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"editModal.show()\">\r\n          Edit\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n          Delete\r\n        </button>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Item name</td>\r\n                  <td>\r\n                    {{ details?.attributes?.ItemName }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Category</td>\r\n                  <td>{{ details?.attributes?.marketplace_category?.data?.attributes?.CategoryName }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number</td>\r\n                  <td>{{ details?.attributes?.contactNumber }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Price</td>\r\n                  <td>\r\n                    {{\r\n                    details?.attributes?.Price}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Available quantity</td>\r\n                  <td>{{ details?.attributes?.AvailableQty }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Unit</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Unit }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Posted by</td>\r\n                  <td>{{ details?.attributes?.seller?.data?.attributes?.Name }} - {{\r\n                    details?.attributes?.seller?.data?.attributes?.username }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Description</td>\r\n                  <td>\r\n                    {{details?.attributes?.description}}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Images</td>\r\n                  <td>\r\n                    <span *ngFor=\"let item of details?.attributes?.Images.data\">\r\n                      <img src=\"https://indoramaapp.untanglestrategy.com{{ item?.attributes?.url }}\"\r\n                        (click)=\"showImages(item?.attributes?.url)\" alt=\"\"\r\n                        style=\"height: 100px; width: 200px; padding-left: 5px; padding-right: 5px;\" />\r\n                      <!-- <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\"\r\n                        (click)=\"removePic(item)\">\r\n                        Delete\r\n                      </button> -->\r\n                    </span>\r\n                    <div class=\"mt-4\" style=\"display: flex;\">\r\n                      <input type=\"file\" id=\"prof_pic\" style=\"width: 250px;\" accept=\".jpg,.jpeg,.JPEG,.png\" multiple\r\n                        name=\"prof_pic\" (change)=\"onChange($event)\" placeholder=\"Choose image\" />\r\n                      <button type=\"button\" [disabled]=\"btnLoading || !productForm.valid\"\r\n                        class=\"btn btn-outline-primary\" data-toggle=\"modal\" (click)=\"uploadImages()\">\r\n                        <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                          aria-hidden=\"true\"></span>\r\n                        Upload\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div bsModal #editModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n          aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Edit details</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"editModal.hide()\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit()\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"category\">Category</label>\r\n                        <select class=\"form-control\" id=\"category\" required ngModel name=\"category\"\r\n                          formControlName=\"category\">\r\n                          <option value=\"\" disabled selected hidden>Choose...</option>\r\n                          <option *ngFor=\"let item of Categories\" value=\"{{ item.id }}\">\r\n                            {{ item.attributes.CategoryName }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"itemName\">Title</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"itemName\" name=\"itemName\" formControlName=\"itemName\"\r\n                          placeholder=\"Enter title\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"price\">Price</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" formControlName=\"price\"\r\n                          placeholder=\"Enter price\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"unit\">Unit</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"unit\" name=\"unit\" formControlName=\"unit\"\r\n                          placeholder=\"Enter unit\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"availableQty\">Quantity</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"availableQty\" name=\"availableQty\"\r\n                          formControlName=\"availableQty\" placeholder=\"Enter available quantity\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"contactNumber\">Contact Number</label>\r\n                        <input type=\"number\" class=\"form-control\" id=\"contactNumber\" name=\"contactNumber\"\r\n                          formControlName=\"contactNumber\" placeholder=\"Enter Contact number\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <label for=\"description\">Description</label>\r\n                        <textarea class=\"form-control\" id=\"description\" rows=\"5\" name=\"description\"\r\n                          formControlName=\"description\" placeholder=\"Enter description\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"productModal.hide()\">\r\n                    Close\r\n                  </button>\r\n                  <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !productForm.valid\">\r\n                    <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                      aria-hidden=\"true\"></span>\r\n                    Save changes\r\n                  </button>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
      /***/
    },

    /***/
    "hCDv": function hCDv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Marketplace</h2>\r\n      <div>\r\n        <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"openModal()\">\r\n          Add New listing\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- <p class=\"text-muted mx-3\">\r\n      To approve a crop price simply select and edit the record without\r\n      modifying the data\r\n    </p> -->\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular #agGrid style=\"width: 100%; height: 65vh\" id=\"myGrid\" class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\" [rowData]=\"rowData\" [rowSelection]=\"rowSelection\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\" (gridReady)=\"onGridReady($event)\" animateRows=\"true\">\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #productModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add Listing</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"productModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"category\">Category</label>\r\n                <select class=\"form-control\" id=\"category\" required ngModel name=\"category\" formControlName=\"category\">\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Categories\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.CategoryName }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"itemName\">Title</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"itemName\" name=\"itemName\" formControlName=\"itemName\"\r\n                  placeholder=\"Enter title\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"price\">Price</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"price\" name=\"price\" formControlName=\"price\"\r\n                  placeholder=\"Enter price\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"unit\">Unit</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"unit\" name=\"unit\" formControlName=\"unit\"\r\n                  placeholder=\"Enter unit\" />\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"availableQty\">Quantity</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"availableQty\" name=\"availableQty\"\r\n                  formControlName=\"availableQty\" placeholder=\"Enter available quantity\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"contactNumber\">Contact Number</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"contactNumber\" name=\"contactNumber\"\r\n                  formControlName=\"contactNumber\" placeholder=\"Enter Contact number\" />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"description\">Description</label>\r\n                <textarea class=\"form-control\" id=\"description\" rows=\"5\" name=\"description\"\r\n                  formControlName=\"description\" placeholder=\"Enter description\"></textarea>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"images\">Image</label>\r\n                <div>\r\n                  <img *ngIf=\"imageUrl\" src=\"{{ imageUrl }}\" width=\"100\" height=\"100\" style=\"object-fit: cover\" />\r\n                </div>\r\n                <input type=\"file\" id=\"images\" multiple accept=\".jpg,.jpeg,.JPEG,.png\" name=\"images\" (change)=\"onChange($event)\"\r\n                  formControlName=\"images\" placeholder=\"Choose images\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"productModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !productForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "iL95": function iL95(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketplaceRoutingModule", function () {
        return MarketplaceRoutingModule;
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


      var _marketplace_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./marketplace-detail.component */
      "sDOZ");
      /* harmony import */


      var _marketplace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./marketplace.component */
      "jzZ7");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _marketplace_component__WEBPACK_IMPORTED_MODULE_4__["MarketplaceComponent"]
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

      var MarketplaceRoutingModule = function MarketplaceRoutingModule() {
        _classCallCheck(this, MarketplaceRoutingModule);
      };

      MarketplaceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MarketplaceRoutingModule);
      /***/
    },

    /***/
    "jzZ7": function jzZ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketplaceComponent", function () {
        return MarketplaceComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_marketplace_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./marketplace.component.html */
      "hCDv");
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
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");

      var MarketplaceComponent = /*#__PURE__*/function () {
        function MarketplaceComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, MarketplaceComponent);

          this.dataservice = dataservice;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
          this.loading = true;
          this.btnLoading = false;
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

            this.dataservice.getMarketplace().valueChanges.subscribe(function (result) {
              console.log("getMarketplace", result.data.marketplaceProducts.data);
              _this.rowData = result.data.marketplaceProducts.data;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this2 = this;

            this.dataservice.getMarketplaceCategories().valueChanges.subscribe(function (result) {
              console.log("getCategories", result.data.marketplaceCategories.data);
              _this2.Categories = result.data.marketplaceCategories.data;
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
            this.router.navigate(["/marketplace/marketplace_details", this.selectedRows[0].id], {
              state: {
                data: this.selectedRows
              }
            });
          } // On file Select

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
          value: function openModal(data) {
            this.productModal.show();
          }
        }, {
          key: "productSubmit",
          value: function productSubmit() {
            var _this3 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.productForm.value);
            this.dataservice.upload(this.file).subscribe(function (response) {
              if (response.status == 200) {
                console.log(response);

                _this3.dataservice.createMarketplaceProduct(_this3.productForm.value, response.body.map(function (a) {
                  return a.id;
                })).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.createMarketplaceProduct) {
                    _this3.toastr.success("Success!");

                    _this3.getMarketplace();

                    _this3.file = null;

                    _this3.productForm.reset();

                    _this3.productModal.hide();

                    _this3.gridApi.deselectAll();

                    _this3.btnLoading = false;
                  } else {
                    _this3.toastr.error("Failed. Please check the fields!");

                    _this3.btnLoading = false;
                  }
                });
              } else {
                _this3.toastr.error("Image failed to upload!");

                _this3.btnLoading = false;
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

    /***/
    "sDOZ": function sDOZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketplaceDetailComponent", function () {
        return MarketplaceDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_marketplace_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./marketplace-detail.component.html */
      "RA4v");
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

      var MarketplaceDetailComponent = /*#__PURE__*/function () {
        function MarketplaceDetailComponent(dataservice, activatedRouter, router, fb, toastr) {
          _classCallCheck(this, MarketplaceDetailComponent);

          this.dataservice = dataservice;
          this.activatedRouter = activatedRouter;
          this.router = router;
          this.fb = fb;
          this.toastr = toastr;
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
            var _this4 = this;

            this.activatedRouter.params.subscribe(function (params) {
              _this4.id = params["id"];
            });
            this.getSingleMarketplaceProduct();
            this.getCategories();
          }
        }, {
          key: "getSingleMarketplaceProduct",
          value: function getSingleMarketplaceProduct() {
            var _this5 = this;

            this.dataservice.getSingleMarketplaceProduct(this.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c, _d, _e, _f, _g, _h, _j;

              console.log("getSingleMarketplaceProduct", result.data.marketplaceProduct.data);
              _this5.details = result.data.marketplaceProduct.data;
              _this5.productForm = _this5.fb.group({
                itemName: [(_a = _this5.details.attributes) === null || _a === void 0 ? void 0 : _a.ItemName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // images: [this.details.attributes?.Images?.data, Validators.required],
                // userId: [this.details?.attributes?.seller?.data?.attributes?.Name],
                contactNumber: [(_b = _this5.details.attributes) === null || _b === void 0 ? void 0 : _b.contactNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                price: [(_c = _this5.details.attributes) === null || _c === void 0 ? void 0 : _c.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                availableQty: [(_d = _this5.details.attributes) === null || _d === void 0 ? void 0 : _d.AvailableQty, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                unit: [(_e = _this5.details.attributes) === null || _e === void 0 ? void 0 : _e.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                category: [(_h = (_g = (_f = _this5.details.attributes) === null || _f === void 0 ? void 0 : _f.marketplace_category) === null || _g === void 0 ? void 0 : _g.data) === null || _h === void 0 ? void 0 : _h.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                description: [(_j = _this5.details.attributes) === null || _j === void 0 ? void 0 : _j.description, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]
              });
              console.log(_this5.productForm);
              _this5.loading = false;
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this6 = this;

            this.dataservice.getMarketplaceCategories().valueChanges.subscribe(function (result) {
              console.log("getCategories", result.data.marketplaceCategories.data);
              _this6.Categories = result.data.marketplaceCategories.data;
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
          } // On file Select

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
            var _this7 = this;

            var resp = {};
            this.btnLoading = true;
            console.log(this.productForm.value);
            this.dataservice.updateMarketplaceProduct(this.productForm.value, this.id).subscribe(function (result) {
              resp = result.data;
              console.log("response", result);

              if (result.data.updateMarketplaceProduct) {
                _this7.toastr.success("Activity updated successfully!");

                _this7.editModal.hide();

                _this7.btnLoading = false;

                _this7.getSingleMarketplaceProduct();
              } else {
                _this7.toastr.error("Failed. Please check the fields!");

                _this7.btnLoading = false;
              }
            });
          }
        }, {
          key: "uploadImages",
          value: function uploadImages() {
            var _this8 = this;

            var resp = {};
            this.btnLoading = true;
            this.dataservice.upload(this.file).subscribe(function (response) {
              if (response.status == 200) {
                console.log(response);

                _this8.dataservice.updateMarketplaceProductImg(_this8.id, response.body.map(function (a) {
                  return a.id;
                })).subscribe(function (result) {
                  resp = result.data;
                  console.log("response", result);

                  if (result.data.updateMarketplaceProduct) {
                    _this8.toastr.success("Activity updated successfully!");

                    _this8.btnLoading = false;

                    _this8.getSingleMarketplaceProduct();
                  } else {
                    _this8.toastr.error("Failed. Please check the fields!");

                    _this8.btnLoading = false;
                  }
                });
              } else {
                _this8.toastr.error("Image failed to upload!");

                _this8.btnLoading = false;
              }
            });
          }
        }, {
          key: "DeleteMarketplaceProduct",
          value: function DeleteMarketplaceProduct() {
            var _this9 = this;

            this.dataservice.DeleteMarketplaceProduct(this.id).subscribe(function (result) {
              console.log("response", result);

              if (result.data.deleteMarketplaceProduct) {
                _this9.toastr.success("Success!");

                _this9.deleteModal.hide();

                _this9.router.navigate(["/marketplace/all"]);
              } else {
                _this9.toastr.error("Failed!");
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