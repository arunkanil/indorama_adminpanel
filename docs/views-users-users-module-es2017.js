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
                    title: 'Users'
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");










let UserDetailComponent = class UserDetailComponent {
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
            // email: ["", Validators.required],
            Farmer: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            UserType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Bio: [""],
            password: [""],
            state: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            Latitude: [""],
            Longitude: [""],
        });
        this.resultForm = this.fb.group({
            id: [""],
            itemName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            price: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            unit: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
        });
        this.areaForm = this.fb.group({
            state: [""],
            agronomist_lgas: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
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
        return `${_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].apiUrl}` + url;
    }
    getTest() {
        this.dataservice
            .getsingleRetailer(this.id)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
            console.log("getsingleRetailer", result.data.usersPermissionsUsers.data[0]);
            this.details = result.data.usersPermissionsUsers.data[0];
            this.agentForm = this.fb.group({
                ContactNumber: [
                    (_a = this.details.attributes) === null || _a === void 0 ? void 0 : _a.ContactNumber,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                Name: [(_b = this.details.attributes) === null || _b === void 0 ? void 0 : _b.Name, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                // email: [this.details.attributes?.email, Validators.required],
                Bio: [(_c = this.details.attributes) === null || _c === void 0 ? void 0 : _c.Bio],
                Latitude: [(_d = this.details.attributes) === null || _d === void 0 ? void 0 : _d.Latitude],
                Longitude: [(_e = this.details.attributes) === null || _e === void 0 ? void 0 : _e.Longitude],
                state: [
                    (_m = (_l = (_k = (_j = (_h = (_g = (_f = this.details) === null || _f === void 0 ? void 0 : _f.attributes) === null || _g === void 0 ? void 0 : _g.lga) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.attributes) === null || _k === void 0 ? void 0 : _k.state) === null || _l === void 0 ? void 0 : _l.data) === null || _m === void 0 ? void 0 : _m.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                lga: [(_r = (_q = (_p = (_o = this.details) === null || _o === void 0 ? void 0 : _o.attributes) === null || _p === void 0 ? void 0 : _p.lga) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.id, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
                village: [
                    (_v = (_u = (_t = (_s = this.details) === null || _s === void 0 ? void 0 : _s.attributes) === null || _t === void 0 ? void 0 : _t.village) === null || _u === void 0 ? void 0 : _u.data) === null || _v === void 0 ? void 0 : _v.id,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                ],
                password: [""],
                blocked: [(_x = (_w = this.details) === null || _w === void 0 ? void 0 : _w.attributes) === null || _x === void 0 ? void 0 : _x.blocked],
                UserType: [(_z = (_y = this.details) === null || _y === void 0 ? void 0 : _y.attributes) === null || _z === void 0 ? void 0 : _z.UserType, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required],
            });
            this.loading = false;
            this.dispArea =
                ((_1 = (_0 = this.details) === null || _0 === void 0 ? void 0 : _0.attributes) === null || _1 === void 0 ? void 0 : _1.UserType) == "Agronomist" ? true : false;
            if (this.dispArea == true) {
                this.agronomists = (_4 = (_3 = (_2 = this.details) === null || _2 === void 0 ? void 0 : _2.attributes) === null || _3 === void 0 ? void 0 : _3.agronomist_lgas) === null || _4 === void 0 ? void 0 : _4.data;
                // this.dataservice
                //   .getAgronomist(this.id)
                //   .valueChanges.subscribe((result: any) => {
                //     console.log("getAgronomist", result?.data?.agronomists?.data);
                //     this.agronomists = result?.data?.agronomists?.data[0];
                //   });
            }
        });
    }
    getCrops() {
        this.dataservice.getCrops(1, 10000, "").valueChanges.subscribe((result) => {
            console.log("getCrops", result.data.crops.data);
            this.Crops = result.data.crops.data;
        });
    }
    getStates() {
        this.dataservice.getStates(1, 10000, "").valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    getLGAs(id) {
        this.dataservice.getLGAs(1, 10000, "", id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(1, 10000, "", id).valueChanges.subscribe((result) => {
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
            .getUsers(undefined, undefined, "Farmer")
            .valueChanges.subscribe((result) => {
            console.log("getFarmers", result.data.usersPermissionsUsers.data);
            this.Farmers = result.data.usersPermissionsUsers.data;
        });
    }
    getVillages(id) {
        this.dataservice.getVillages(1, 10000, "", id).valueChanges.subscribe((result) => {
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
        this.btnLoading = true;
        console.log(this.agentForm.value);
        this.dataservice.UpdateRetailer(this.agentForm.value, this.id).subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUsersPermissionsUser) {
                this.toastr.success("User updated successfully!");
                this.btnLoading = false;
                this.myModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
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
        this.file = [];
        for (var i = 0; i < event.target.files.length; i++) {
            this.file.push(event.target.files[i]);
        }
        console.log(this.file);
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
            .UpdateRetailer(this.areaForm.value, this.id)
            .subscribe((result) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateUsersPermissionsUser) {
                this.toastr.success("User updated successfully!");
                this.areaModal.hide();
                this.getTest();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
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
                    this.router.navigate(["/users/all"]);
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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div\n    bsModal\n    #deleteModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n          Do you want to delete this record?\n        </div>\n        <div class=\"modal-footer justify-content-around\">\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"deleteModal.hide()\"\n          >\n            No! Cancel.\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            (click)=\"deleteProduct()\"\n          >\n            Yes! Delete.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div\n    bsModal\n    #areaModal=\"bs-modal\"\n    class=\"modal fade\"\n    tabindex=\"-1\"\n    role=\"dialog\"\n    aria-labelledby=\"myModalLabel\"\n    aria-hidden=\"true\"\n  >\n    <div class=\"modal-dialog modal-dialog-centered modal-sm\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Edit assigned areas</h4>\n          <button\n            type=\"button\"\n            class=\"close\"\n            (click)=\"myModal.hide()\"\n            aria-label=\"Close\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <form [formGroup]=\"areaForm\" (ngSubmit)=\"AreaSubmit()\">\n            <div class=\"form-group\">\n              <label for=\"state\">State</label>\n              <select\n                class=\"form-control\"\n                id=\"state\"\n                (change)=\"filterLGA($event)\"\n                ngModel\n                name=\"state\"\n                formControlName=\"state\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                  {{ item.attributes.Name }}\n                </option>\n              </select>\n            </div>\n            <!-- <div class=\"form-group\">\n              <label for=\"lga\">LGA</label>\n              <select\n                class=\"form-control\"\n                id=\"lga\"\n                (change)=\"filterArea($event)\"\n                ngModel\n                name=\"lga\"\n                formControlName=\"lga\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                  {{ item.attributes.Name }}\n                </option>\n              </select>\n            </div> -->\n            <div class=\"form-group\">\n              <label for=\"agronomist_lgas\">LGAs</label>\n              <select\n                class=\"form-control\"\n                id=\"agronomist_lgas\"\n                multiple\n                required\n                ngModel\n                name=\"agronomist_lgas\"\n                formControlName=\"agronomist_lgas\"\n              >\n                <option value=\"\" disabled selected hidden>Choose...</option>\n                <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                  {{ item.attributes.Name }}\n                </option>\n              </select>\n            </div>\n            <button\n              type=\"button\"\n              class=\"btn btn-secondary\"\n              (click)=\"areaModal.hide()\"\n            >\n              Close\n            </button>\n            <button\n              type=\"submit\"\n              class=\"btn btn-primary ml-2\"\n              [disabled]=\"btnLoading || !areaForm.valid\"\n            >\n              <span\n                *ngIf=\"btnLoading\"\n                class=\"spinner-border spinner-border-sm\"\n                role=\"status\"\n                aria-hidden=\"true\"\n              ></span>\n              Save changes\n            </button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>User Details</h2>\n      <span>\n        <div>\n          <button\n            type=\"button\"\n            class=\"btn btn-primary\"\n            data-toggle=\"modal\"\n            (click)=\"myModal.show()\"\n          >\n            Edit\n          </button>\n          <button\n            type=\"button\"\n            class=\"btn btn-danger\"\n            data-toggle=\"modal\"\n            (click)=\"deleteModal.show()\"\n          >\n            Delete\n          </button>\n        </div>\n      </span>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"row\">\n            <div style=\"display: flex; justify-content: space-between\">\n              <h4>Basic details</h4>\n            </div>\n            <table class=\"table table-striped\">\n              <tbody>\n                <tr>\n                  <td>ID</td>\n                  <td>{{ details?.id }}</td>\n                </tr>\n                <tr>\n                  <td>Username</td>\n                  <td>{{ details?.attributes?.username }}</td>\n                </tr>\n                <tr>\n                  <td>Status</td>\n                  <td>\n                    <span\n                      *ngIf=\"details?.attributes?.blocked\"\n                      class=\"text-danger\"\n                      >Blocked</span\n                    ><span *ngIf=\"!details?.attributes?.blocked\" class=\"text-success\">Active</span>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Profile pic</td>\n                  <td>\n                    <a\n                      href=\"{{ baseURL }}{{\n                        details?.attributes?.prof_pic?.data?.attributes?.url\n                      }}\"\n                      target=\"_blank\"\n                      ><img\n                        class=\"card-img-top\"\n                        style=\"width: 150px; height: 150px\"\n                        src=\"{{ baseURL }}{{\n                          details?.attributes?.prof_pic?.data?.attributes?.url\n                        }}\"\n                        alt=\"No image found\"\n                    /></a>\n                    <div style=\"display: flex\">\n                      <input\n                        type=\"file\"\n                        class=\"form-control\"\n                        id=\"prof_pic\"\n                        style=\"width: 250px\"\n                        accept=\".jpg,.jpeg,.JPEG,.png\"\n                        name=\"prof_pic\"\n                        (change)=\"onChange($event)\"\n                        placeholder=\"Choose image\"\n                      />\n                      <button\n                        type=\"button\"\n                        class=\"btn btn-outline-primary\"\n                        data-toggle=\"modal\"\n                        (click)=\"uploadProfPic()\"\n                      >\n                        Upload\n                      </button>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>Name</td>\n                  <td>\n                    {{ details?.attributes?.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Contact number</td>\n                  <td>{{ details?.attributes?.ContactNumber }}</td>\n                </tr>\n                <tr>\n                  <td>User type</td>\n                  <td>{{ details?.attributes?.UserType }}</td>\n                </tr>\n                 <tr>\n                  <td>Referred by (Agronomist Name)</td>\n                  <td>\n                    {{ details?.attributes?.referred_agronomist.data.attributes.Name }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Village</td>\n                  <td>\n                    {{ details?.attributes?.village?.data?.attributes?.Name }}\n                  </td>\n                </tr>\n\n                <tr>\n                  <td>LGA</td>\n                  <td>{{ details?.attributes?.lga?.data?.attributes.Name }}</td>\n                </tr>\n                <tr>\n                  <td>State</td>\n                  <td>\n                    {{\n                      details?.attributes?.lga?.data?.attributes?.state?.data\n                        ?.attributes?.Name\n                    }}\n                  </td>\n                </tr>\n                <!-- <tr>\n                  <td>Retailer Category</td>\n                  <td>\n                    {{\n                    details?.attributes?.retailer_categories?.data[0]?.attributes?.CategoryName\n                    }}\n                  </td>\n                </tr>\n                <tr>\n                  <td>Bio</td>\n                  <td style=\"width: 60%\">{{ details?.attributes?.Bio }}</td>\n                </tr> -->\n                <tr>\n                  <td>Created at</td>\n                  <td>{{ dateConvertor(details?.attributes?.createdAt) }}</td>\n                </tr>\n                <tr>\n                  <td>Last updated</td>\n                  <td>{{ dateConvertor(details?.attributes?.updatedAt) }}</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div *ngIf=\"dispArea\" class=\"col\">\n          <div style=\"display: flex; justify-content: space-between\">\n            <h4>LGAs assigned</h4>\n            <button\n              type=\"button\"\n              class=\"btn btn-primary\"\n              data-toggle=\"modal\"\n              (click)=\"areaModal.show()\"\n            >\n              Edit LGAs\n            </button>\n          </div>\n          <ul>\n            <li *ngFor=\"let item of agronomists\">\n              {{ item?.attributes?.Name }}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div\n        bsModal\n        #myModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"myModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit details</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"myModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"agentForm\" (ngSubmit)=\"FormSubmit()\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"Name\"\n                        >Name<span class=\"danger\">*</span></label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"Name\"\n                        name=\"Name\"\n                        formControlName=\"Name\"\n                        placeholder=\"Enter Name\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"market\"\n                        >Contact Number<span class=\"danger\">*</span></label\n                      >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"ContactNumber\"\n                        name=\"ContactNumber\"\n                        formControlName=\"ContactNumber\"\n                        placeholder=\"Enter contact number\"\n                      />\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <label for=\"email\">email</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"email\"\n                        name=\"email\"\n                        formControlName=\"email\"\n                        placeholder=\"Enter email\"\n                      />\n                    </div> -->\n                    <div class=\"form-group\">\n                      <label for=\"UserType\"\n                        >User type<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"UserType\"\n                        required\n                        ngModel\n                        name=\"UserType\"\n                        formControlName=\"UserType\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option value=\"Farmer\">Farmer</option>\n                        <option value=\"Retailer\">Retailer</option>\n                        <option value=\"Agronomist\">Agronomist</option>\n                        <option value=\"Admin\">Admin</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Bio\">Bio</label>\n                      <textarea\n                        class=\"form-control\"\n                        id=\"Bio\"\n                        name=\"Bio\"\n                        formControlName=\"Bio\"\n                        placeholder=\"Enter Bio\"\n                      ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"password\">Password</label>\n                      <input\n                        type=\"password\"\n                        class=\"form-control\"\n                        id=\"password\"\n                        name=\"password\"\n                        formControlName=\"password\"\n                        placeholder=\"Enter password\"\n                      />\n                    </div>\n                    <!-- <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"checkbox\" ngModel name=\"blocked\"\n                        formControlName=\"blocked\" id=\"blocked\">\n                      <label class=\"form-check-label\" for=\"blocked\">\n                        Blocked\n                      </label>\n                    </div> -->\n                    <!-- <div class=\"form-group\">\n                      <label for=\"blocked\">Active status</label>\n                      <input class=\"form-control\" type=\"checkbox\" id=\"blocked\" required ngModel name=\"blocked\"\n                        formControlName=\"blocked\" />\n                    </div> -->\n                  </div>\n                  <div class=\"col\">\n                    <div class=\"form-group\">\n                      <label for=\"state\"\n                        >State<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"state\"\n                        (change)=\"filterLGA($event)\"\n                        required\n                        ngModel\n                        name=\"state\"\n                        formControlName=\"state\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of States\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"lga\">LGA<span class=\"danger\">*</span></label>\n                      <select\n                        class=\"form-control\"\n                        id=\"lga\"\n                        (change)=\"filterVillage($event)\"\n                        required\n                        ngModel\n                        name=\"lga\"\n                        formControlName=\"lga\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"village\"\n                        >Village<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"village\"\n                        required\n                        ngModel\n                        name=\"village\"\n                        formControlName=\"village\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option\n                          *ngFor=\"let item of Villages\"\n                          value=\"{{ item.id }}\"\n                        >\n                          {{ item.attributes.Name }}\n                        </option>\n                      </select>\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Latitude\">Latitude</label>\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        id=\"Latitude\"\n                        name=\"Latitude\"\n                        formControlName=\"Latitude\"\n                        placeholder=\"Enter Latitude\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"Longitude\">Longitude</label>\n                      <input\n                        class=\"form-control\"\n                        id=\"Longitude\"\n                        ngModel\n                        name=\"Longitude\"\n                        formControlName=\"Longitude\"\n                        placeholder=\"Enter Longitude\"\n                      />\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"blocked\"\n                        >Status<span class=\"danger\">*</span></label\n                      >\n                      <select\n                        class=\"form-control\"\n                        id=\"blocked\"\n                        ngModel\n                        name=\"blocked\"\n                        formControlName=\"blocked\"\n                      >\n                        <option value=\"\" disabled selected hidden>\n                          Choose...\n                        </option>\n                        <option value=\"true\">Blocked</option>\n                        <option value=\"false\">Active</option>\n                      </select>\n                    </div>\n                    <button\n                      type=\"button\"\n                      class=\"btn btn-secondary\"\n                      (click)=\"myModal.hide()\"\n                    >\n                      Close\n                    </button>\n                    <button\n                      type=\"submit\"\n                      class=\"btn btn-primary ml-2\"\n                      [disabled]=\"btnLoading || !agentForm.valid\"\n                    >\n                      <span\n                        *ngIf=\"btnLoading\"\n                        class=\"spinner-border spinner-border-sm\"\n                        role=\"status\"\n                        aria-hidden=\"true\"\n                      ></span>\n                      Save changes\n                    </button>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #resultModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"resultModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit product</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"resultModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"resultForm\" (ngSubmit)=\"ResultSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"id\">ID</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"soil_test_sample\"\n                    disabled=\"true\"\n                    name=\"id\"\n                    formControlName=\"id\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"itemName\">Item name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"itemName\"\n                    name=\"itemName\"\n                    formControlName=\"itemName\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"price\">Price</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"price\"\n                    name=\"price\"\n                    formControlName=\"price\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"unit\">Unit</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"unit\"\n                    name=\"unit\"\n                    formControlName=\"unit\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"resultModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div\n        bsModal\n        #addProductModal=\"bs-modal\"\n        class=\"modal fade\"\n        tabindex=\"-1\"\n        role=\"dialog\"\n        aria-labelledby=\"productModalLabel\"\n        aria-hidden=\"true\"\n      >\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add product</h4>\n              <button\n                type=\"button\"\n                class=\"close\"\n                (click)=\"addProductModal.hide()\"\n                aria-label=\"Close\"\n              >\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n              <form [formGroup]=\"productForm\" (ngSubmit)=\"ProductSubmit()\">\n                <div class=\"form-group\">\n                  <label for=\"itemName\">Item name</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"itemName\"\n                    name=\"itemName\"\n                    formControlName=\"itemName\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"price\">Price</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"price\"\n                    name=\"price\"\n                    formControlName=\"price\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"unit\">Unit</label>\n                  <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    id=\"unit\"\n                    name=\"unit\"\n                    formControlName=\"unit\"\n                    placeholder=\"Enter value\"\n                  />\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"Image\">Image</label>\n                  <input\n                    type=\"file\"\n                    class=\"form-control\"\n                    id=\"Image\"\n                    accept=\".jpg,.jpeg,.JPEG,.png\"\n                    name=\"Image\"\n                    (change)=\"onChange($event)\"\n                    formControlName=\"Image\"\n                    placeholder=\"Choose image\"\n                  />\n                </div>\n                <button\n                  type=\"button\"\n                  class=\"btn btn-secondary\"\n                  (click)=\"addProductModal.hide()\"\n                >\n                  Close\n                </button>\n                <button\n                  type=\"submit\"\n                  class=\"btn btn-primary ml-2\"\n                  [disabled]=\"btnLoading || !productForm.valid\"\n                >\n                  <span\n                    *ngIf=\"btnLoading\"\n                    class=\"spinner-border spinner-border-sm\"\n                    role=\"status\"\n                    aria-hidden=\"true\"\n                  ></span>\n                  Save changes\n                </button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "tvqY":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/users/users.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n\n      <h2>Users</h2>\n\n      <div>\n        <button\n            type=\"button\"\n            class=\"btn btn-outline-primary\"\n            data-toggle=\"modal\"\n            (click)=\"downloadExcel()\"\n          >\n            Download excel\n          </button>\n      <button\n        type=\"button\"\n        class=\"btn btn-primary\"\n        data-toggle=\"modal\"\n        (click)=\"commentModal.show()\"\n      >\n        Add New User\n      </button>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <ag-grid-angular\n            #agGrid\n            style=\"width: 100%; height: 65vh\"\n            id=\"myGrid\"\n            class=\"ag-theme-alpine\"\n            [columnDefs]=\"columnDefs\"\n            [rowData]=\"rowData\"\n            [rowSelection]=\"rowSelection\"\n            (gridReady)=\"onGridReady($event)\"\n            (selectionChanged)=\"onSelectionChanged($event)\"\n            animateRows=\"true\"\n          >\n          </ag-grid-angular>\n          <span class=\"float-left mt-3\"\n            >{{ from }} to {{ to }} of {{ meta?.pagination?.total }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disableNextButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadNext()\"\n          >\n            Next\n          </button>\n          <span class=\"float-right mt-3\"\n            >Page {{ meta?.pagination?.page }} of\n            {{ meta?.pagination?.pageCount }}</span\n          >\n          <button\n            type=\"button\"\n            [disabled]=\"disablePrevButton\"\n            class=\"btn btn-primary float-right m-2\"\n            (click)=\"loadPrev()\"\n          >\n            Prev\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div\n  bsModal\n  #commentModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add User</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"commentModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"commentForm\" (ngSubmit)=\"formSubmit()\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"Name\">Name</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Name\"\n                  name=\"Name\"\n                  formControlName=\"Name\"\n                  placeholder=\"Enter  Name\"\n                />\n                <div\n                  *ngIf=\"f.Name.touched && f.Name.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Name.errors.required\">Name is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"username\">Username</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"username\"\n                  name=\"username\"\n                  formControlName=\"username\"\n                  placeholder=\"Enter username\"\n                />\n                <div\n                  *ngIf=\"f.username.touched && f.username.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.username.errors.required\">\n                    Username is required.\n                  </div>\n                  <div *ngIf=\"f.username.errors.minlength\">\n                    Username should have minimum 3 characters.\n                  </div>\n                  <div *ngIf=\"f.username.errors.cannotContainSpace\">\n                    Username cannot contain space.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input\n                  type=\"password\"\n                  class=\"form-control\"\n                  id=\"password\"\n                  name=\"password\"\n                  formControlName=\"password\"\n                  placeholder=\"Enter password\"\n                />\n                <div\n                  *ngIf=\"f.password.touched && f.password.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.password.errors.required\">\n                    Password is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"UserType\">User type</label>\n                <select\n                  class=\"form-control\"\n                  id=\"UserType\"\n                  required\n                  ngModel\n                  name=\"UserType\"\n                  formControlName=\"UserType\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Farmer\">Farmer</option>\n                  <option value=\"Retailer\">Retailer</option>\n                  <option value=\"Agronomist\">Agronomist</option>\n                  <option value=\"Admin\">Admin</option>\n                  <option value=\"Marketing\">Marketing</option>\n                </select>\n                <div\n                  *ngIf=\"f.UserType.touched && f.UserType.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.UserType.errors.required\">\n                    User type is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"ContactNumber\">Contact number</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"ContactNumber\"\n                  name=\"ContactNumber\"\n                  formControlName=\"ContactNumber\"\n                  placeholder=\"Enter contact number\"\n                />\n                <div\n                  *ngIf=\"f.ContactNumber.touched && f.ContactNumber.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.ContactNumber.errors.required\">\n                    Contact number is required.\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\">\n                <label for=\"name\">E-mail</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"email\"\n                  name=\"email\"\n                  formControlName=\"email\"\n                  placeholder=\"Enter email\"\n                />\n              </div> -->\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label for=\"state\">State</label>\n                <select\n                  class=\"form-control\"\n                  id=\"state\"\n                  required\n                  ngModel\n                  (change)=\"filterLGA($event)\"\n                  name=\"state\"\n                  formControlName=\"state\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of States\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.state.touched && f.state.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.state.errors.required\">State is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"lga\">LGA</label>\n                <select\n                  class=\"form-control\"\n                  id=\"lga\"\n                  required\n                  ngModel\n                  (change)=\"filterVillage($event)\"\n                  name=\"lga\"\n                  formControlName=\"lga\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of LGA\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div *ngIf=\"f.lga.touched && f.lga.invalid\" class=\"text-danger\">\n                  <div *ngIf=\"f.lga.errors.required\">LGA is required.</div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"village\">Village</label>\n                <select\n                  class=\"form-control\"\n                  id=\"village\"\n                  required\n                  ngModel\n                  name=\"village\"\n                  formControlName=\"village\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option *ngFor=\"let item of Villages\" value=\"{{ item.id }}\">\n                    {{ item.attributes.Name }}\n                  </option>\n                </select>\n                <div\n                  *ngIf=\"f.village.touched && f.village.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.village.errors.required\">\n                    Village is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Gender\">Gender</label>\n                <select\n                  class=\"form-control\"\n                  id=\"Gender\"\n                  required\n                  ngModel\n                  name=\"Gender\"\n                  formControlName=\"Gender\"\n                >\n                  <option value=\"\" disabled selected hidden>Choose...</option>\n                  <option value=\"Male\">Male</option>\n                  <option value=\"Female\">Female</option>\n                </select>\n                <div\n                  *ngIf=\"f.Gender.touched && f.Gender.invalid\"\n                  class=\"text-danger\"\n                >\n                  <div *ngIf=\"f.Gender.errors.required\">\n                    Gender is required.\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"Age\">Age</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"Age\"\n                  name=\"Age\"\n                  formControlName=\"Age\"\n                  placeholder=\"Enter age\"\n                />\n                <div *ngIf=\"f.Age.touched && f.Age.invalid\" class=\"text-danger\">\n                  <div *ngIf=\"f.Age.errors.required\">Age is required.</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-secondary\"\n            (click)=\"commentModal.hide()\"\n          >\n            Close\n          </button>\n          <button\n            type=\"submit\"\n            class=\"btn btn-primary ml-2\"\n            [disabled]=\"btnLoading || !commentForm.valid\"\n          >\n            <span\n              *ngIf=\"btnLoading\"\n              class=\"spinner-border spinner-border-sm\"\n              role=\"status\"\n              aria-hidden=\"true\"\n            ></span>\n            Save changes\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

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
/* harmony import */ var _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/username.validator */ "1qmy");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");











let UsersComponent = class UsersComponent {
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
        this.rowData = [];
        this.Villages = [];
        this.LGA = [];
        this.Areas = [];
        this.States = [];
        this.selectedYear = new Date().getFullYear();
        this.years = [];
        this.filter = {};
        this.columnDefs = [..._constants_columnMetadata__WEBPACK_IMPORTED_MODULE_7__["UsersColumn"]];
        this.setForm();
        this.rowSelection = "single";
    }
    ngOnInit() {
        this.loading = true;
        console.log(this.router);
        this.getRetailers();
        this.getStates();
    }
    setForm() {
        this.commentForm = this.fb.group({
            UserType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            username: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _utils_username_validator__WEBPACK_IMPORTED_MODULE_9__["UsernameValidator"].cannotContainSpace,
                ],
            ],
            email: ["nodata@email.com"],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Gender: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            Age: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ContactNumber: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lga: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            village: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [""],
        });
    }
    get f() {
        return this.commentForm.controls;
    }
    getStates() {
        this.dataservice.getStates(1, 10000, "").valueChanges.subscribe((result) => {
            console.log("getStates", result.data.states.data);
            this.States = result.data.states.data;
        });
    }
    getLGAs(id) {
        this.dataservice.getLGAs(1, 10000, "", id).valueChanges.subscribe((result) => {
            console.log("getLGAs", result.data.lgas.data);
            this.LGA = result.data.lgas.data;
        });
    }
    getAreas(id) {
        this.dataservice.getAreas(1, 10000, "", id).valueChanges.subscribe((result) => {
            console.log("getAreas", result.data.areas.data);
            this.Areas = result.data.areas.data;
        });
    }
    getVillages(id) {
        this.dataservice.getVillages(1, 10000, "", id).valueChanges.subscribe((result) => {
            console.log("getVillages", result.data.villages.data);
            this.Villages = result.data.villages.data;
        });
    }
    getRetailers() {
        this.dataservice
            .getUsers(1, this.pageSize)
            .valueChanges.subscribe((result) => {
            var _a, _b, _c, _d, _e, _f;
            this.rowData = result.data.usersPermissionsUsers.data;
            this.meta = result.data.usersPermissionsUsers.meta;
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
            .downloadUsers()
            .subscribe((result) => {
            var _a;
            resp = result.body;
            console.log(result);
            if (result.status === 200 && result.body.status == "Success") {
                this.toastr.success(result.body.message);
                this.btnLoading = false;
                window.open(`${_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].apiUrl}${(_a = result === null || result === void 0 ? void 0 : result.body) === null || _a === void 0 ? void 0 : _a.path}`, "_blank");
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
            .getUsers(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.usersPermissionsUsers.meta;
            this.rowData = result.data.usersPermissionsUsers.data;
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
            .getUsers(this.count, this.pageSize)
            .valueChanges.subscribe((result) => {
            this.meta = result.data.usersPermissionsUsers.meta;
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
        this.btnLoading = true;
        console.log(this.commentForm.value);
        let resp = {};
        this.dataservice.createRetailer(this.commentForm.value).subscribe((result) => {
            resp = result;
            console.log("response", result);
            if (result) {
                this.toastr.success("User added successfully!");
                this.btnLoading = false;
                this.commentModal.hide();
                this.setForm();
                this.getRetailers();
            }
            else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
            }
        }, (error) => {
            this.btnLoading = false;
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