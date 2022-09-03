(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-users-users-module"],{

/***/ "QSsw":
/*!*********************************************!*\
  !*** ./src/app/views/users/users.module.ts ***!
  \*********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "xSMm");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "2ZVE");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users-routing.module */ "VY+B");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "YFAK");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-detail.component */ "W5lF");





// Dropdowns Component


// Buttons Routing

// Angular



let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]),
            _users_routing_module__WEBPACK_IMPORTED_MODULE_7__["RetailersRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ],
        declarations: [
            _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
            _user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"]
        ]
    })
], UsersModule);



/***/ }),

/***/ "VY+B":
/*!*****************************************************!*\
  !*** ./src/app/views/users/users-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RetailersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersRoutingModule", function() { return RetailersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "xSMm");
/* harmony import */ var _user_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-detail.component */ "W5lF");





const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'retailers'
            },
            {
                path: 'all',
                // canActivate: [AuthGuard],
                component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
                data: {
                    title: 'Retailers'
                }
            },
            {
                path: 'user_details/:id',
                // canActivate: [AuthGuard],
                component: _user_detail_component__WEBPACK_IMPORTED_MODULE_4__["UserDetailComponent"],
                data: {
                    title: 'Retailer Details'
                }
            },
        ]
    }
];
let RetailersRoutingModule = class RetailersRoutingModule {
};
RetailersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RetailersRoutingModule);



/***/ }),

/***/ "W5lF":
/*!******************************************************!*\
  !*** ./src/app/views/users/user-detail.component.ts ***!
  \******************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-detail.component.html */ "XCQh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");









let UserDetailComponent = class UserDetailComponent {
    constructor(dataservice, activatedRouter, router, fb, toastr) {
        this.dataservice = dataservice;
        this.activatedRouter = activatedRouter;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.details = [];
        this.btnLoading = false;
        this.dateConverter = _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_8__["dateConverter"];
        this.users = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.Retailers = [];
        this.Farmers = [];
        this.States = [];
        this.Crops = [];
        this.file = null;
        this.dispArea = false;
        this.agentForm = this.fb.group({
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            // username: ["", Validators.required],
            blocked: [""],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Farmer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            UserType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Bio: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Longitude: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.resultForm = this.fb.group({
            id: [""],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.areaForm = this.fb.group({
            state: [""],
            area: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: [""],
        });
        this.productForm = this.fb.group({
            Image: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    ngOnInit() {
        this.getLists();
        this.getAreas();
        this.getCrops();
        this.getLGAs();
        this.getStates();
        this.getVillages();
        this.getFarmers();
        this.getRetailers();
        this.activatedRouter.params.subscribe((params) => {
            this.id = params["id"];
        });
        this.getTest();
    }
    imgUrl(url) {
        return "https://indoramaapp.untanglestrategy.com" + url;
    }
    getTest() {
        this.dataservice
            .getsingleRetailer(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2;
            console.log("getsingleRetailer", result.data.usersPermissionsUsers.data[0]);
            this.details = result.data.usersPermissionsUsers.data[0];
            this.agentForm = this.fb.group({
                ContactNumber: [
                    (_a = this.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                Name: [(_b = this.details.attributes) === null || _b === void 0 ? void 0 : _b.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                email: [(_c = this.details.attributes) === null || _c === void 0 ? void 0 : _c.email, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Bio: [(_d = this.details.attributes) === null || _d === void 0 ? void 0 : _d.Bio, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Latitude: [(_e = this.details.attributes) === null || _e === void 0 ? void 0 : _e.Latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                Longitude: [(_f = this.details.attributes) === null || _f === void 0 ? void 0 : _f.Longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                state: [
                    (_o = (_m = (_l = (_k = (_j = (_h = (_g = this.details) === null || _g === void 0 ? void 0 : _g.attributes) === null || _h === void 0 ? void 0 : _h.lga) === null || _j === void 0 ? void 0 : _j.data) === null || _k === void 0 ? void 0 : _k.attributes) === null || _l === void 0 ? void 0 : _l.state) === null || _m === void 0 ? void 0 : _m.data) === null || _o === void 0 ? void 0 : _o.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                lga: [(_s = (_r = (_q = (_p = this.details) === null || _p === void 0 ? void 0 : _p.attributes) === null || _q === void 0 ? void 0 : _q.lga) === null || _r === void 0 ? void 0 : _r.data) === null || _s === void 0 ? void 0 : _s.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                village: [
                    (_w = (_v = (_u = (_t = this.details) === null || _t === void 0 ? void 0 : _t.attributes) === null || _u === void 0 ? void 0 : _u.village) === null || _v === void 0 ? void 0 : _v.data) === null || _w === void 0 ? void 0 : _w.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                blocked: [(_y = (_x = this.details) === null || _x === void 0 ? void 0 : _x.attributes) === null || _y === void 0 ? void 0 : _y.blocked],
                UserType: [(_0 = (_z = this.details) === null || _z === void 0 ? void 0 : _z.attributes) === null || _0 === void 0 ? void 0 : _0.UserType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            });
            this.loading = false;
            this.dispArea =
                ((_2 = (_1 = this.details) === null || _1 === void 0 ? void 0 : _1.attributes) === null || _2 === void 0 ? void 0 : _2.UserType) == "Agronomist" ? true : false;
            if (this.dispArea == true) {
                this.dataservice
                    .getAgronomist(this.id)
                    .valueChanges.subscribe((result) => {
                    var _a, _b, _c, _d;
                    console.log("getAgronomist", (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.agronomists) === null || _b === void 0 ? void 0 : _b.data);
                    this.agronomists = (_d = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.agronomists) === null || _d === void 0 ? void 0 : _d.data[0];
                });
            }
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
    getLGAs(id) {
        this.dataservice.getLGAs(id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(id).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getRetailers() {
        this.dataservice
            .getRetailerCategories()
            .valueChanges.subscribe((result) => {
            console.log("getRetailers", result.data.retailerCategories.data);
            this.Retailers = result.data.retailerCategories.data;
        });
    }
    getFarmers() {
        this.dataservice
            .getUsers("Farmer")
            .valueChanges.subscribe((result) => {
            console.log("getFarmers", result.data.usersPermissionsUsers.data);
            this.Farmers = result.data.usersPermissionsUsers.data;
        });
    }
    getVillages(id) {
        this.dataservice.getVillages(id).valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    dateConvertor(date) {
        return new Date(date);
    }
    getLists() {
        this.loading = true;
    }
    openModal(data, flag) {
        var _a, _b, _c;
        this.resultModal.show();
        console.log(data, flag);
        this.flag = flag;
        this.resultForm = this.fb.group({
            id: [data === null || data === void 0 ? void 0 : data.id],
            soil_test_sample: [data === null || data === void 0 ? void 0 : data.id],
            itemName: [(_a = data === null || data === void 0 ? void 0 : data.attributes) === null || _a === void 0 ? void 0 : _a.ItemName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: [(_b = data === null || data === void 0 ? void 0 : data.attributes) === null || _b === void 0 ? void 0 : _b.Price, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: [(_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.Unit, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
    }
    openDeleteModal(data) {
        this.deleteObj = data;
        this.deleteModal.show();
    }
    FormSubmit() {
        let resp = {};
        console.log(this.agentForm.value);
        this.dataservice
            .UpdateRetailer(this.agentForm.value, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUsersPermissionsUser) {
                this.toastr.success("Retailer updated successfully!");
                this.myModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    ResultSubmit() {
        var _a, _b, _c, _d;
        console.log("edit", this.resultForm.value);
        let resp = {};
        console.log(this.resultForm.value);
        this.dataservice
            .UpdateRetailerProducts(this.resultForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateRetailerProduct) {
                this.toastr.success("Product updated successfully!");
                this.resultModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
    onChange(event) {
        this.file = event.target.files[0];
        console.log(event.target.files[0]);
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    filterArea(event) {
        this.getAreas(event.target.value);
    }
    filterVillage(event) {
        this.getVillages(event.target.value);
    }
    uploadProfPic() {
        let resp = {};
        this.dataservice.upload(this.file).subscribe((response) => {
            var _a;
            if (response.status == 200) {
                console.log(response);
                this.dataservice
                    .UpdateRetailerPic(this.id, (_a = response.body[0]) === null || _a === void 0 ? void 0 : _a.id)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.updateUsersPermissionsUser) {
                        this.toastr.success("Success!");
                        this.file = null;
                        this.getTest();
                        this.addProductModal.hide();
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
            }
            else {
                this.toastr.error("Image failed to upload!");
            }
        });
    }
    AreaSubmit() {
        let resp = {};
        console.log(this.areaForm.value);
        this.dataservice
            .createAgronomist(this.areaForm.value, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createAgronomist) {
                this.toastr.success("Success!");
                window.location.reload();
                this.areaModal.hide();
            }
            else {
                this.toastr.error("Failed!");
            }
        });
    }
    ProductSubmit() {
        let resp = {};
        this.dataservice.upload(this.file).subscribe((response) => {
            var _a, _b, _c, _d, _e;
            if (response.status == 200) {
                console.log(response);
                this.dataservice
                    .addRetailerProducts(this.productForm.value, (_d = (_c = (_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.retailer_categories) === null || _c === void 0 ? void 0 : _c.data[0]) === null || _d === void 0 ? void 0 : _d.id, this.id, (_e = response.body[0]) === null || _e === void 0 ? void 0 : _e.id)
                    .subscribe((result) => {
                    resp = result.data;
                    console.log("response", result);
                    if (result.data.createRetailerProduct) {
                        this.toastr.success("Success!");
                        this.file = null;
                        this.getTest();
                        this.addProductModal.hide();
                    }
                    else {
                        this.toastr.error("Failed!");
                    }
                });
            }
            else {
                this.toastr.error("Image failed to upload!");
            }
        });
    }
    deleteProduct() {
        var _a, _b;
        if (((_b = (_a = this.details) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.UserType) !== "Agronomist") {
            this.dataservice.deleteUser(this.id).subscribe((result) => {
                console.log("response", result);
                if (result.data.deleteUsersPermissionsUser) {
                    this.toastr.success("Success!");
                    this.deleteModal.hide();
                    this.router.navigate(["/users"]);
                }
                else {
                    this.toastr.error("Failed!");
                }
            });
        }
        else {
            this.toastr.error("Can't delete Agronomist. Try setting as blocked.");
        }
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
UserDetailComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["myModal",] }],
    areaModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["areaModal",] }],
    resultModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["resultModal",] }],
    deleteModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["deleteModal",] }],
    addProductModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["addProductModal",] }]
};
UserDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_user_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], UserDetailComponent);



/***/ }),

/***/ "XCQh":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/user-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div bsModal #deleteModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-body text-center\">\r\n          Do you want to delete this record?\r\n        </div>\r\n        <div class=\"modal-footer justify-content-around\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteModal.hide()\">\r\n            No! Cancel.\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteProduct()\">\r\n            Yes! Delete.\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div bsModal #areaModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Edit assigned areas</h4>\r\n          <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form [formGroup]=\"areaForm\" (ngSubmit)=\"AreaSubmit()\">\r\n            <div class=\"form-group\">\r\n              <label for=\"state\">State</label>\r\n              <select class=\"form-control\" id=\"state\" (change)=\"filterLGA($event)\" ngModel name=\"state\"\r\n                formControlName=\"state\">\r\n                <option value=\"\" disabled selected hidden>\r\n                  Choose...\r\n                </option>\r\n                <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                  {{ item.attributes.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lga\">LGA</label>\r\n              <select class=\"form-control\" id=\"lga\" (change)=\"filterArea($event)\" ngModel name=\"lga\"\r\n                formControlName=\"lga\">\r\n                <option value=\"\" disabled selected hidden>\r\n                  Choose...\r\n                </option>\r\n                <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                  {{ item.attributes.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"area\">Area</label>\r\n              <select class=\"form-control\" id=\"area\" multiple required ngModel name=\"area\"\r\n                formControlName=\"area\">\r\n                <option value=\"\" disabled selected hidden>\r\n                  Choose...\r\n                </option>\r\n                <option *ngFor=\"let item of Areas\" value=\"{{ item.id }}\">\r\n                  {{ item.attributes.Name }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"areaModal.hide()\">\r\n              Close\r\n            </button>\r\n            <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !areaForm.valid\">\r\n              <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                aria-hidden=\"true\"></span>\r\n              Save changes\r\n            </button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\" style=\"display: flex; justify-content: space-between\">\r\n      <h2>User Details</h2>\r\n      <span>\r\n        <div>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"myModal.show()\">\r\n            Edit\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger\" data-toggle=\"modal\" (click)=\"deleteModal.show()\">\r\n            Delete\r\n          </button>\r\n        </div>\r\n      </span>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"row\">\r\n            <div style=\"display: flex; justify-content: space-between\">\r\n              <h4>Basic details</h4>\r\n            </div>\r\n            <table class=\"table table-striped\">\r\n              <tbody>\r\n                <tr>\r\n                  <td>ID</td>\r\n                  <td>{{ details?.id }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Username</td>\r\n                  <td>{{ details?.attributes?.username }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Profile pic</td>\r\n                  <td><img class=\"card-img-top\" style=\"width: 150px; height:150px;\"\r\n                      src=\"http://13.89.242.79{{details?.attributes?.prof_pic?.data?.attributes?.url}}\"\r\n                      alt=\"No image found\" />\r\n                    <div style=\"display: flex;\">\r\n                      <input type=\"file\" class=\"form-control\" id=\"prof_pic\" style=\"width: 250px;\"\r\n                        accept=\".jpg,.jpeg,.JPEG,.png\" name=\"prof_pic\" (change)=\"onChange($event)\"\r\n                        placeholder=\"Choose image\" />\r\n                      <button type=\"button\" class=\"btn btn-outline-primary\" data-toggle=\"modal\"\r\n                        (click)=\"uploadProfPic()\">\r\n                        Upload\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Name</td>\r\n                  <td>\r\n                    {{ details?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Contact number</td>\r\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>User type</td>\r\n                  <td>{{ details?.attributes?.UserType }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Email</td>\r\n                  <td>\r\n                    {{ details?.attributes?.email }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Village</td>\r\n                  <td>\r\n                    {{ details?.attributes?.village?.data?.attributes?.Name }}\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <td>LGA</td>\r\n                  <td>{{ details?.attributes?.lga?.data?.attributes.Name }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>State</td>\r\n                  <td>\r\n                    {{\r\n                    details?.attributes?.lga?.data?.attributes?.state?.data?.attributes?.Name\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <!-- <tr>\r\n                  <td>Retailer Category</td>\r\n                  <td>\r\n                    {{\r\n                    details?.attributes?.retailer_categories?.data[0]?.attributes?.CategoryName\r\n                    }}\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Bio</td>\r\n                  <td style=\"width: 60%\">{{ details?.attributes?.Bio }}</td>\r\n                </tr> -->\r\n                <tr>\r\n                  <td>Created at</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Last updated</td>\r\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"dispArea\" class=\"col\">\r\n          <div style=\"display: flex; justify-content: space-between\">\r\n            <h4>Areas assigned</h4>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"areaModal.show()\">\r\n              Edit areas\r\n            </button>\r\n          </div>\r\n          <ul>\r\n            <li *ngFor=\"let item of agronomists?.attributes?.areas?.data\">\r\n              {{item?.attributes?.Name}}\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div bsModal #myModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n        aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit details</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"myModal.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Name\">Name</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"Name\" name=\"Name\" formControlName=\"Name\"\r\n                        placeholder=\"Enter Name\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"market\">Contact Number</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"ContactNumber\" name=\"ContactNumber\"\r\n                        formControlName=\"ContactNumber\" placeholder=\"Enter contact number\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"email\">email</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\" formControlName=\"email\"\r\n                        placeholder=\"Enter email\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"UserType\">User type</label>\r\n                      <select class=\"form-control\" id=\"UserType\" required ngModel name=\"UserType\"\r\n                        formControlName=\"UserType\">\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option value=\"Farmer\">Farmer</option>\r\n                        <option value=\"Retailer\">Retailer</option>\r\n                        <option value=\"Agronomist\">Agronomist</option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Bio\">Bio</label>\r\n                      <textarea class=\"form-control\" id=\"Bio\" name=\"Bio\" formControlName=\"Bio\"\r\n                        placeholder=\"Enter Bio\"></textarea>\r\n                    </div>\r\n                    <!-- <div class=\"form-check\">\r\n                      <input class=\"form-check-input\" type=\"checkbox\" ngModel name=\"blocked\"\r\n                        formControlName=\"blocked\" id=\"blocked\">\r\n                      <label class=\"form-check-label\" for=\"blocked\">\r\n                        Blocked\r\n                      </label>\r\n                    </div> -->\r\n                    <!-- <div class=\"form-group\">\r\n                      <label for=\"blocked\">Active status</label>\r\n                      <input class=\"form-control\" type=\"checkbox\" id=\"blocked\" required ngModel name=\"blocked\"\r\n                        formControlName=\"blocked\" />\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"state\">State</label>\r\n                      <select class=\"form-control\" id=\"state\" (change)=\"filterLGA($event)\" required ngModel name=\"state\"\r\n                        formControlName=\"state\">\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"lga\">LGA</label>\r\n                      <select class=\"form-control\" id=\"lga\" (change)=\"filterVillage($event)\" required ngModel name=\"lga\"\r\n                        formControlName=\"lga\">\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"village\">Village</label>\r\n                      <select class=\"form-control\" id=\"village\" required ngModel name=\"village\"\r\n                        formControlName=\"village\">\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\r\n                          {{ item.attributes.Name }}\r\n                        </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Latitude\">Latitude</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"Latitude\" name=\"Latitude\" formControlName=\"Latitude\"\r\n                        placeholder=\"Enter Latitude\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"Longitude\">Longitude</label>\r\n                      <input class=\"form-control\" id=\"Longitude\" required ngModel name=\"Longitude\"\r\n                        formControlName=\"Longitude\" placeholder=\"Enter Longitude\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <label for=\"blocked\">Status</label>\r\n                      <select class=\"form-control\" id=\"blocked\" ngModel name=\"blocked\" formControlName=\"blocked\">\r\n                        <option value=\"\" disabled selected hidden>\r\n                          Choose...\r\n                        </option>\r\n                        <option value=\"true\">Blocked</option>\r\n                        <option value=\"false\">Active</option>\r\n                      </select>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"myModal.hide()\">\r\n                      Close\r\n                    </button>\r\n                    <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !agentForm.valid\">\r\n                      <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                        aria-hidden=\"true\"></span>\r\n                      Save changes\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div bsModal #resultModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"resultModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Edit product</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"resultModal.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"id\">ID</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"soil_test_sample\" disabled=\"true\" name=\"id\"\r\n                    formControlName=\"id\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemName\">Item name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"itemName\" name=\"itemName\" formControlName=\"itemName\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\">Price</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"price\" name=\"price\" formControlName=\"price\"\r\n                    placeholder=\"Enter value\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"unit\">Unit</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"unit\" name=\"unit\" formControlName=\"unit\"\r\n                    placeholder=\"Enter value\" />\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resultModal.hide()\">\r\n                  Close\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading\">\r\n                  <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                    aria-hidden=\"true\"></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div bsModal #addProductModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"productModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\">Add product</h4>\r\n              <button type=\"button\" class=\"close\" (click)=\"addProductModal.hide()\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <form [formGroup]=\"productForm\" (ngSubmit)=\"ProductSubmit()\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemName\">Item name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"itemName\" name=\"itemName\" formControlName=\"itemName\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"price\">Price</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"price\" name=\"price\" formControlName=\"price\"\r\n                    placeholder=\"Enter value\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"unit\">Unit</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"unit\" name=\"unit\" formControlName=\"unit\"\r\n                    placeholder=\"Enter value\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"Image\">Image</label>\r\n                  <input type=\"file\" class=\"form-control\" id=\"Image\" accept=\".jpg,.jpeg,.JPEG,.png\" name=\"Image\"\r\n                    (change)=\"onChange($event)\" formControlName=\"Image\" placeholder=\"Choose image\" />\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addProductModal.hide()\">\r\n                  Close\r\n                </button>\r\n                <button type=\"submit\" class=\"btn btn-primary ml-2\" [disabled]=\"btnLoading || !productForm.valid\">\r\n                  <span *ngIf=\"btnLoading\" class=\"spinner-border spinner-border-sm\" role=\"status\"\r\n                    aria-hidden=\"true\"></span>\r\n                  Save changes\r\n                </button>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "tvqY":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Users</h2>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-primary\"\r\n        data-toggle=\"modal\"\r\n        (click)=\"commentModal.show()\"\r\n      >\r\n        Add New User\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <ag-grid-angular\r\n            #agGrid\r\n            style=\"width: 100%; height: 65vh\"\r\n            id=\"myGrid\"\r\n            class=\"ag-theme-alpine\"\r\n            [columnDefs]=\"columnDefs\"\r\n            [rowData]=\"rowData\"\r\n            [rowSelection]=\"rowSelection\"\r\n            (gridReady)=\"onGridReady($event)\"\r\n            (selectionChanged)=\"onSelectionChanged($event)\"\r\n            animateRows=\"true\"\r\n          >\r\n          </ag-grid-angular>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div\r\n  bsModal\r\n  #commentModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\">Add User</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"commentModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"formSubmit()\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"Name\">Name</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"Name\"\r\n                  name=\"Name\"\r\n                  formControlName=\"Name\"\r\n                  placeholder=\"Enter  Name\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"username\">Username</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"username\"\r\n                  name=\"username\"\r\n                  formControlName=\"username\"\r\n                  placeholder=\"Enter username\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Password</label>\r\n                <input\r\n                  type=\"password\"\r\n                  class=\"form-control\"\r\n                  id=\"password\"\r\n                  name=\"password\"\r\n                  formControlName=\"password\"\r\n                  placeholder=\"Enter password\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"UserType\">User type</label>\r\n                <select class=\"form-control\" id=\"UserType\" required ngModel name=\"UserType\"\r\n                  formControlName=\"UserType\">\r\n                  <option value=\"\" disabled selected hidden>\r\n                    Choose...\r\n                  </option>\r\n                  <option value=\"Farmer\">Farmer</option>\r\n                  <option value=\"Retailer\">Retailer</option>\r\n                  <option value=\"Agronomist\">Agronomist</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"ContactNumber\">Contact number</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"ContactNumber\"\r\n                  name=\"ContactNumber\"\r\n                  formControlName=\"ContactNumber\"\r\n                  placeholder=\"Enter contact number\"\r\n                />\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">E-mail</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"email\"\r\n                  name=\"email\"\r\n                  formControlName=\"email\"\r\n                  placeholder=\"Enter email\"\r\n                />\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"col\">\r\n              <div class=\"form-group\">\r\n                <label for=\"state\">State</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"state\"\r\n                  required\r\n                  ngModel\r\n                  (change)=\"filterLGA($event)\"\r\n                  name=\"state\"\r\n                  formControlName=\"state\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"lga\">LGA</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"lga\"\r\n                  required\r\n                  ngModel\r\n                  (change)=\"filterVillage($event)\"\r\n                  name=\"lga\"\r\n                  formControlName=\"lga\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"village\">Village</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"village\"\r\n                  required\r\n                  ngModel\r\n                  name=\"village\"\r\n                  formControlName=\"village\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\r\n                    {{ item.attributes.Name }}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Gender\">Gender</label>\r\n                <select\r\n                  class=\"form-control\"\r\n                  id=\"Gender\"\r\n                  required\r\n                  ngModel\r\n                  name=\"Gender\"\r\n                  formControlName=\"Gender\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>Choose...</option>\r\n                  <option value=\"Male\">Male</option>\r\n                  <option value=\"Female\">Female</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"Age\">Age</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"Age\"\r\n                  name=\"Age\"\r\n                  formControlName=\"Age\"\r\n                  placeholder=\"Enter age\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-secondary\"\r\n            (click)=\"commentModal.hide()\"\r\n          >\r\n            Close\r\n          </button>\r\n          <button\r\n            type=\"submit\"\r\n            class=\"btn btn-primary ml-2\"\r\n            [disabled]=\"btnLoading || !commentForm.valid\"\r\n          >\r\n            <span\r\n              *ngIf=\"btnLoading\"\r\n              class=\"spinner-border spinner-border-sm\"\r\n              role=\"status\"\r\n              aria-hidden=\"true\"\r\n            ></span>\r\n            Save changes\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "xSMm":
/*!************************************************!*\
  !*** ./src/app/views/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./users.component.html */ "tvqY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "EApP");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data.service */ "R7Hv");
/* harmony import */ var _constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/columnMetadata */ "7nfi");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");







// import { ActionRenderer } from "../../utils/StatusRenderer";


let UsersComponent = class UsersComponent {
    constructor(dataservice, router, fb, toastr) {
        this.dataservice = dataservice;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.loading = true;
        this.btnLoading = false;
        this.title = "Verification";
        this.orders = {};
        this.columnDefs = [];
        this.commentForm = this.fb.group({
            UserType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [""],
        });
        // frameworkComponents = {
        //   statusRenderer: ActionRenderer,
        // };
        this.rowData = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.States = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["UsersColumn"]];
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getRetailers();
        this.getAreas();
        this.getLGAs();
        this.getStates();
        this.getVillages();
    }
    getStates() {
        this.dataservice.getStates().valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    getLGAs(id) {
        this.dataservice.getLGAs(id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(id).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getVillages(id) {
        this.dataservice.getVillages(id).valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    getRetailers() {
        this.dataservice.getUsers().valueChanges.subscribe((result) => {
            console.log("getRetailers", result.data.usersPermissionsUsers.data);
            this.rowData = result.data.usersPermissionsUsers.data;
        });
    }
    filterLGA(event) {
        this.getLGAs(event.target.value);
    }
    filterVillage(event) {
        this.getVillages(event.target.value);
    }
    onGridReady(params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    }
    onRowClicked(event) {
        console.log("row", event.data);
        // this.router.navigate(
        //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
        //   {
        //     state: { data: event.data },
        //   }
        // );
    }
    onSelectionChanged(event) {
        var selectedRows = this.gridApi.getSelectedRows();
        console.log(selectedRows, event);
        this.router.navigate(["/users/user_details", selectedRows[0].id], {
            state: { data: selectedRows },
        });
    }
    openModal(data) {
        this.detailsModal.show();
    }
    formSubmit() {
        console.log(this.commentForm.value);
        let resp = {};
        this.dataservice
            .createRetailer(this.commentForm.value)
            .subscribe((result) => {
            resp = result;
            console.log("response", result);
            if (result) {
                this.toastr.success("Retailer added successfully!");
                this.commentModal.hide();
                this.getRetailers();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
            }
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
UsersComponent.propDecorators = {
    commentModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["commentModal",] }],
    detailsModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ["detailsModal",] }]
};
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_users_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
], UsersComponent);



/***/ })

}]);
//# sourceMappingURL=views-users-users-module-es2017.js.map