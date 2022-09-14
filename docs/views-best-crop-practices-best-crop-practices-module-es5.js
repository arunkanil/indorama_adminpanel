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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-best-crop-practices-best-crop-practices-module"], {
    /***/
    "FfNu": function FfNu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestCropPracticesRoutingModule", function () {
        return BestCropPracticesRoutingModule;
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


      var _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./best-crop-practices.component */
      "QSep");

      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_3__["BestCropPracticesComponent"],
          data: {
            roles: 'KP_CALLER',
            title: 'Best Crop Practices'
          }
        }]
      }];

      var BestCropPracticesRoutingModule = function BestCropPracticesRoutingModule() {
        _classCallCheck(this, BestCropPracticesRoutingModule);
      };

      BestCropPracticesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BestCropPracticesRoutingModule);
      /***/
    },

    /***/
    "QSep": function QSep(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestCropPracticesComponent", function () {
        return BestCropPracticesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_best_crop_practices_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./best-crop-practices.component.html */
      "VS0m");
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

      var BestCropPracticesComponent = /*#__PURE__*/function () {
        function BestCropPracticesComponent(dataservice, router, fb, toastr) {
          _classCallCheck(this, BestCropPracticesComponent);

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
          this.practicesForm = this.fb.group({
            crop: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            content: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            File: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.rowData = [];
          this.selectedRows = [];
          this.filter = {};
          this.file = null;
          this.image = null;
          this.columnDefs = _toConsumableArray(_constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["CropPricesColumn"]);
          this.rowSelection = "single";
        }

        _createClass(BestCropPracticesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = true;
            console.log(this.router);
            this.getBestCropPractises();
            this.getCrops();
          }
        }, {
          key: "getBestCropPractises",
          value: function getBestCropPractises() {
            var _this = this;

            this.dataservice.getBestCropPractises().valueChanges.subscribe(function (result) {
              _this.rowData = result.data.bestCropPractises.data;
            });
          }
        }, {
          key: "getCrops",
          value: function getCrops() {
            var _this2 = this;

            this.dataservice.getCrops().valueChanges.subscribe(function (result) {
              _this2.Crops = result.data.crops.data;
            });
          } // On file Select

        }, {
          key: "onChange",
          value: function onChange(event, check) {
            if (check == true) {
              this.file = [];

              for (var i = 0; i < event.target.files.length; i++) {
                this.file.push(event.target.files[i]);
              }
            } else {
              this.image = [];

              for (var i = 0; i < event.target.files.length; i++) {
                this.image.push(event.target.files[i]);
              }
            }

            console.log(this.file, this.image);
          }
        }, {
          key: "openModal",
          value: function openModal(data) {
            this.deleteModal.show();
            this.deleteId = data.id;
          }
        }, {
          key: "deletePractice",
          value: function deletePractice() {
            var _this3 = this;

            this.dataservice.deleteBestPractice(this.deleteId).subscribe(function (result) {
              console.log("response", result);

              if (result.data.deleteBestCropPractise) {
                _this3.dataservice.getBestCropPractises().refetch();

                _this3.toastr.success("Success!");

                _this3.deleteModal.hide();
              } else {
                _this3.toastr.error("Failed!");
              }
            });
          }
        }, {
          key: "practicesSubmit",
          value: function practicesSubmit() {
            var _this4 = this;

            var resp = {};
            var image = null;
            var file = null;
            this.btnLoading = true;
            console.log(this.practicesForm.value);
            this.dataservice.upload(this.image).subscribe(function (imgResponse) {
              var _a;

              if (imgResponse.status == 200) {
                image = (_a = imgResponse.body[0]) === null || _a === void 0 ? void 0 : _a.id;
                console.log(imgResponse);

                _this4.dataservice.upload(_this4.file).subscribe(function (fileResponse) {
                  var _a;

                  if (fileResponse.status == 200) {
                    file = (_a = fileResponse.body[0]) === null || _a === void 0 ? void 0 : _a.id;
                    console.log(fileResponse);

                    _this4.dataservice.createBestCropPractise(_this4.practicesForm.value, image, file).subscribe(function (result) {
                      resp = result.data;
                      console.log("response", result);

                      if (result.data.createBestCropPractise) {
                        _this4.toastr.success("Success!");

                        _this4.dataservice.getBestCropPractises().refetch();

                        _this4.practicesModal.hide();
                      } else {
                        _this4.toastr.error("Failed. Please check the fields!");

                        _this4.btnLoading = false;
                      }
                    });
                  } else {
                    _this4.toastr.error("Image failed to upload!");

                    _this4.btnLoading = false;
                  }
                });
              } else {
                _this4.toastr.error("Image failed to upload!");

                _this4.btnLoading = false;
              }
            });
          }
        }]);

        return BestCropPracticesComponent;
      }();

      BestCropPracticesComponent.ctorParameters = function () {
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

      BestCropPracticesComponent.propDecorators = {
        practicesModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["practicesModal"]
        }],
        deleteModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ["deleteModal"]
        }]
      };
      BestCropPracticesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_best_crop_practices_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], BestCropPracticesComponent);
      /***/
    },

    /***/
    "VS0m": function VS0m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>Best Crop Practices</h2>\r\n      <div>\r\n        <button type=\"button\" [disabled]=\"!disableButton\" class=\"btn btn-primary\" data-toggle=\"modal\"\r\n          (click)=\"practicesModal.show()\">\r\n          Add New\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-3\" *ngFor=\"let item of rowData\">\r\n          <div class=\"card\">\r\n            <div class=\"img-container\">\r\n              <img class=\"card-img-top\" height=\"200\" width=\"200\"\r\n                src=\"https://indoramaapp.untanglestrategy.com{{item?.attributes?.cropImage?.data?.attributes?.url}}\" alt=\"Card image cap\" />\r\n              <div class=\"overlay\">\r\n                <div class=\"overlay-text\"><a target=\"_blank\"\r\n                    href=\"https://indoramaapp.untanglestrategy.com{{item?.attributes?.media?.data?.attributes?.url}}\" style=\"color: white;\">Click\r\n                    to view file</a></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div style=\"display: flex; justify-content: space-between\">\r\n                <h5 class=\"card-title\">\r\n                  {{item.attributes.crop.data.attributes.Name}}\r\n                </h5>\r\n                <div>\r\n                  <button type=\"button\" class=\"btn btn-outline-primary p-1\" (click)=\"openModal(item)\">\r\n                    <img src=\"../../../assets/deleteIcon.svg\">\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <p class=\"card-text\">\r\n                {{item.attributes.content}}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #practicesModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add/Edit Practice</h4>\r\n        <button type=\"button\" class=\"close\" (click)=\"practicesModal.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"practicesForm\" (ngSubmit)=\"practicesSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"crop\">Crop</label>\r\n            <select class=\"form-control\" id=\"crop\" required ngModel name=\"crop\" formControlName=\"crop\">\r\n              <option value=\"\" disabled selected hidden>Choose...</option>\r\n              <option *ngFor=\"let item of Crops\" value=\"{{ item.id }}\">\r\n                {{ item.attributes.Name }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"content\">Description</label>\r\n            <textarea type=\"text\" class=\"form-control\" id=\"content\" maxlength=\"150\" name=\"content\" rows=\"3\" formControlName=\"content\"\r\n              placeholder=\"Enter content\"></textarea>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"File\">PDF File</label>\r\n            <div><input type=\"file\" id=\"File\" accept=\".pdf\" name=\"File\" (change)=\"onChange($event,true)\"\r\n              formControlName=\"File\" placeholder=\"Choose file\" /></div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"Image\">Preview image</label>\r\n            <div>\r\n              <img *ngIf=\"imageUrl\" src=\"{{ imageUrl }}\" width=\"100\" height=\"100\" style=\"object-fit: cover\" />\r\n            </div>\r\n            <input type=\"file\" id=\"Image\" accept=\".jpg,.jpeg,.JPEG,.png\" name=\"Image\"\r\n              (change)=\"onChange($event,false)\" formControlName=\"Image\" placeholder=\"Choose image\" />\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"practicesModal.hide()\">\r\n            Close\r\n          </button>\r\n          <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !practicesForm.valid\">\r\n            <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body text-center\">\r\n        Do you want to delete this record?\r\n      </div>\r\n      <div class=\"modal-footer justify-content-around\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n          No! Cancel.\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deletePractice()\">\r\n          Yes! Delete.\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
      /***/
    },

    /***/
    "mjQe": function mjQe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BestCropPracticesModule", function () {
        return BestCropPracticesModule;
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


      var _best_crop_practices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./best-crop-practices.component */
      "QSep");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _best_crop_practices_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./best-crop-practices-routing.module */
      "FfNu");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ag-grid-angular */
      "YFAK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI"); // Dropdowns Component
      // Buttons Routing
      // Angular


      var BestCropPracticesModule = function BestCropPracticesModule() {
        _classCallCheck(this, BestCropPracticesModule);
      };

      BestCropPracticesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _best_crop_practices_routing_module__WEBPACK_IMPORTED_MODULE_7__["BestCropPracticesRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_best_crop_practices_component__WEBPACK_IMPORTED_MODULE_4__["BestCropPracticesComponent"]]
      })], BestCropPracticesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-best-crop-practices-best-crop-practices-module-es5.js.map