(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chat-chat-module"], {
    /***/"/qiK":
    /*!***********************************************!*\
      !*** ./src/app/views/chat/chat.component.css ***!
      \***********************************************/
    /*! exports provided: default */
    /***/
    function qiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "body {\n  margin-top: 20px;\n}\n\n.chat-online {\n  color: #34ce57;\n}\n\n.chat-offline {\n  color: #e4606d;\n}\n\n.chat-messages {\n  display: flex;\n  flex-direction: column;\n  max-height: 800px;\n  overflow-y: scroll;\n}\n\n.chat-message-left,\n.chat-message-right {\n  display: flex;\n  flex-shrink: 0;\n}\n\n.chat-message-left {\n  margin-right: auto;\n}\n\n.chat-message-right {\n  flex-direction: row-reverse;\n  margin-left: auto;\n}\n\n.py-3 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.px-4 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.flex-grow-0 {\n  flex-grow: 0 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2hhdC1vbmxpbmUge1xuICBjb2xvcjogIzM0Y2U1Nztcbn1cblxuLmNoYXQtb2ZmbGluZSB7XG4gIGNvbG9yOiAjZTQ2MDZkO1xufVxuXG4uY2hhdC1tZXNzYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5jaGF0LW1lc3NhZ2UtbGVmdCxcbi5jaGF0LW1lc3NhZ2UtcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmNoYXQtbWVzc2FnZS1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2hhdC1tZXNzYWdlLXJpZ2h0IHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5weS0zIHtcbiAgcGFkZGluZy10b3A6IDFyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cbi5weC00IHtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG4uZmxleC1ncm93LTAge1xuICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcbn1cbi5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

      /***/
    },

    /***/"jykL":
    /*!*******************************************!*\
      !*** ./src/app/views/chat/chat.module.ts ***!
      \*******************************************/
    /*! exports provided: ChatModule */
    /***/
    function jykL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
        return ChatModule;
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
      var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./chat.component */"l9bd");
      /* harmony import */
      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-bootstrap/dropdown */"FE24");
      /* harmony import */
      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ngx-bootstrap/tabs */"2ZVE");
      /* harmony import */
      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./chat-routing.module */"tfKl");
      /* harmony import */
      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ag-grid-angular */"YFAK");
      /* harmony import */
      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ngx-bootstrap/modal */"LqlI");

      // Dropdowns Component

      // Buttons Routing

      // Angular

      var ChatModule = /*#__PURE__*/_createClass(function ChatModule() {
        _classCallCheck(this, ChatModule);
      });
      ChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _chat_routing_module__WEBPACK_IMPORTED_MODULE_7__["ChatRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]]
      })], ChatModule);

      /***/
    },

    /***/"l9bd":
    /*!**********************************************!*\
      !*** ./src/app/views/chat/chat.component.ts ***!
      \**********************************************/
    /*! exports provided: ChatComponent */
    /***/
    function l9bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! raw-loader!./chat.component.html */"ugap");
      /* harmony import */
      var _chat_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./chat.component.css */"/qiK");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ngx-toastr */"EApP");
      /* harmony import */
      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../../../environments/environment */"AytR");
      /* harmony import */
      var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../../data.service */"R7Hv");
      var ChatComponent = /*#__PURE__*/function () {
        function ChatComponent(dataservice, router, toastr) {
          _classCallCheck(this, ChatComponent);
          this.dataservice = dataservice;
          this.router = router;
          this.toastr = toastr;
          this.chatData = [];
          this.messageData = [];
          this.chatMembers = [];
          this.loading = true;
          this.messageLoading = false;
          this.btnLoading = false;
          this.pageSize = 10;
          this.count = 0;
          this.key = null;
          this.selectedList = "All Chats";
          this.listCheck = false;
          this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        }
        _createClass(ChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.router);
            this.getallChats(this.pageSize, this.pageSize * this.count, this.key);
          }
        }, {
          key: "getallChats",
          value: function getallChats(limit, start, key, isAskIndorama) {
            var _this = this;
            console.log(limit, start);
            this.loading = true;
            this.dataservice.getallChats(limit, start, key, isAskIndorama).valueChanges.subscribe(function (result) {
              var _a;
              _this.chatData = _this.chatData.concat((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.chats.data);
              console.log("getallChats", _this.chatData);
              _this.loading = false;
            });
          }
        }, {
          key: "toggleChat",
          value: function toggleChat(data) {
            if (data) {
              this.chatData = [];
              this.selectedList = "Ask Indorama";
              this.listCheck = data;
              this.getallChats(this.pageSize, 0, undefined, true);
            } else {
              this.chatData = [];
              this.selectedList = "All Chats";
              this.listCheck = data;
              this.getallChats(this.pageSize, 0, undefined, false);
            }
          }
        }, {
          key: "searchChats",
          value: function searchChats() {
            this.chatData = [];
            this.count = 0;
            this.getallChats(this.pageSize, 0, this.key, this.listCheck);
          }
        }, {
          key: "clearSearch",
          value: function clearSearch() {
            this.chatData = [];
            this.count = 0;
            this.key = undefined;
            this.searchfield.nativeElement.value = ' ';
            this.getallChats(this.pageSize, 0, undefined, this.listCheck);
          }
        }, {
          key: "loadMoreChats",
          value: function loadMoreChats() {
            this.count++;
            this.getallChats(this.pageSize, this.pageSize * this.count, this.key, this.listCheck);
          }
        }, {
          key: "convertDate",
          value: function convertDate(data) {
            return new Date(data).toLocaleDateString();
          }
        }, {
          key: "convertTime",
          value: function convertTime(data) {
            return new Date(data).toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric'
            });
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            this.key = event.target.value;
            console.log(event.target.value);
          }
        }, {
          key: "getChatMessages",
          value: function getChatMessages(data) {
            var _this2 = this;
            var _a, _b;
            this.messageLoading = true;
            this.chatMembers = (_b = (_a = data.attributes) === null || _a === void 0 ? void 0 : _a.members) === null || _b === void 0 ? void 0 : _b.data;
            console.log(this.chatMembers);
            this.dataservice.getChatMessages(data.id).valueChanges.subscribe(function (result) {
              var _a, _b, _c;
              console.log("getChatMessages", (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.chat) === null || _b === void 0 ? void 0 : _b.data);
              _this2.messageData = (_c = result === null || result === void 0 ? void 0 : result.data) === null || _c === void 0 ? void 0 : _c.chat.data;
              _this2.messageLoading = false;
              _this2;
            });
          }
        }]);
        return ChatComponent;
      }();
      ChatComponent.ctorParameters = function () {
        return [{
          type: _data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };
      ChatComponent.propDecorators = {
        searchfield: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['searchfield']
        }]
      };
      ChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chat_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])], ChatComponent);

      /***/
    },

    /***/"tfKl":
    /*!***************************************************!*\
      !*** ./src/app/views/chat/chat-routing.module.ts ***!
      \***************************************************/
    /*! exports provided: ChatRoutingModule */
    /***/
    function tfKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function () {
        return ChatRoutingModule;
      });
      /* harmony import */
      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */"mrSG");
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/router */"iInd");
      /* harmony import */
      var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./chat.component */"l9bd");
      var routes = [{
        path: '',
        children: [{
          path: '',
          redirectTo: 'cropprices'
        }, {
          path: 'all',
          // canActivate: [AuthGuard],
          component: _chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
          data: {
            // roles: 'KP_CALLER',
            title: 'Chats'
          }
        }]
      }];
      var ChatRoutingModule = /*#__PURE__*/_createClass(function ChatRoutingModule() {
        _classCallCheck(this, ChatRoutingModule);
      });
      ChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatRoutingModule);

      /***/
    },

    /***/"ugap":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chat/chat.component.html ***!
      \**************************************************************************************/
    /*! exports provided: default */
    /***/
    function ugap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */
      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\n  <div class=\"card\">\n    <div\n      class=\"card-header\"\n      style=\"display: flex; justify-content: space-between\"\n    >\n      <h2>Chat Home</h2>\n      <div class=\"btn-group float-right\" dropdown>\n        <button\n          dropdownToggle\n          type=\"button\"\n          class=\"btn btn-primary dropdown-toggle\"\n        >\n          {{ selectedList }}<span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n          <li role=\"menuitem\">\n            <a class=\"dropdown-item\" (click)=\"toggleChat(false)\">All Chats</a>\n            <a class=\"dropdown-item\" (click)=\"toggleChat(true)\">Ask Indorama</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <main class=\"content\">\n      <div class=\"container-fluid p-0\">\n        <!-- <h1 class=\"h3 mb-3\">Messages</h1> -->\n\n        <div class=\"card\">\n          <div class=\"row g-0\">\n            <div\n              class=\"col-12 col-lg-5 col-xl-3 border-right\"\n              style=\"max-height: 90vh; overflow-y: scroll\"\n            >\n              <div class=\"px-4 d-none d-md-block\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"flex-grow-1\">\n                    <input\n                      ngModel\n                      type=\"text\"\n                      class=\"form-control my-3\"\n                      #searchfield\n                      (change)=\"onChange($event)\"\n                      placeholder=\"Search...\"\n                    />\n                    <button class=\"btn btn-primary\" (click)=\"searchChats()\">\n                      Search\n                    </button>\n                    <button class=\"btn btn-secondary\" (click)=\"clearSearch()\">\n                      Clear\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <a\n                *ngFor=\"let item of chatData\"\n                class=\"list-group-item list-group-item-action border-0\"\n                (click)=\"getChatMessages(item)\"\n              >\n                <!-- <div class=\"badge bg-success float-right\">5</div> -->\n                <div class=\"d-flex align-items-start\">\n                  <img\n                    *ngIf=\"\n                      item?.attributes?.chatInitiatedBy?.data?.attributes\n                        ?.prof_pic.data?.attributes?.url\n                    \"\n                    src=\"{{ baseURL }}{{\n                      item?.attributes?.chatInitiatedBy?.data?.attributes\n                        ?.prof_pic?.data?.attributes?.url\n                    }}\"\n                    class=\"rounded-circle mr-1\"\n                    alt=\"profile pic\"\n                    width=\"40\"\n                    height=\"40\"\n                  />\n                  <img\n                    *ngIf=\"\n                      !item?.attributes?.chatInitiatedBy?.data?.attributes\n                        ?.prof_pic.data?.attributes?.url\n                    \"\n                    src=\"assets/img/avatars/6.png\"\n                    class=\"rounded-circle mr-1\"\n                    alt=\"profile pic\"\n                    width=\"40\"\n                    height=\"40\"\n                  />\n                  <div class=\"flex-grow-1 ml-3\">\n                    {{\n                      item?.attributes?.chatInitiatedBy?.data?.attributes?.Name\n                    }}\n                    <div class=\"small\">\n                      {{ item?.attributes?.members?.data[1]?.attributes?.Name }}\n                      -\n                      {{ item?.attributes?.members?.data[0]?.attributes?.Name }}\n                    </div>\n                  </div>\n                </div>\n              </a>\n              <button\n                class=\"btn btn-primary\"\n                (click)=\"loadMoreChats()\"\n                style=\"float: right\"\n              >\n                Load more\n              </button>\n\n              <hr class=\"d-block d-lg-none mt-1 mb-0\" />\n            </div>\n            <div class=\"col-12 col-lg-7 col-xl-9\">\n              <div class=\"py-2 px-4 border-bottom d-none d-lg-block\">\n                <div\n                  class=\"d-flex align-items-center py-1\"\n                  style=\"justify-content: space-between\"\n                >\n                  <div>\n                    <!-- <div class=\"position-relative\">\n                      <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" class=\"rounded-circle mr-1\"\n                        alt=\"Sharon Lessman\" width=\"40\" height=\"40\">\n                    </div> -->\n                    <div class=\"flex-grow-1 pl-3\">\n                      <img\n                        *ngIf=\"\n                          chatMembers[0]?.attributes?.prof_pic.data?.attributes\n                            ?.url\n                        \"\n                        src=\"{{ baseURL }}{{\n                          chatMembers[0]?.attributes?.prof_pic.data?.attributes\n                            ?.url\n                        }}\"\n                        class=\"rounded-circle mr-1\"\n                        alt=\"Sharon Lessman\"\n                        width=\"40\"\n                        height=\"40\"\n                      />\n                      <img\n                        *ngIf=\"\n                          !chatMembers[0]?.attributes?.prof_pic.data?.attributes\n                            ?.url\n                        \"\n                        src=\"assets/img/avatars/6.png\"\n                        class=\"rounded-circle mr-1\"\n                        alt=\"profile pic\"\n                        width=\"40\"\n                        height=\"40\"\n                      />\n                      <strong>{{ chatMembers[0]?.attributes?.Name }}</strong>\n                      <!-- <div class=\"text-muted small\"><em>Typing...</em></div> -->\n                    </div>\n                  </div>\n                  <div>\n                    <!-- <div class=\"position-relative\">\n                      \n                    </div> -->\n                    <div class=\"flex-grow-1 pl-3\">\n                      <img\n                        *ngIf=\"\n                          chatMembers[1]?.attributes?.prof_pic.data?.attributes\n                            ?.url\n                        \"\n                        src=\"{{ baseURL }}{{\n                          chatMembers[1]?.attributes?.prof_pic.data?.attributes\n                            ?.url\n                        }}\"\n                        class=\"rounded-circle mr-1\"\n                        alt=\"Sharon Lessman\"\n                        width=\"40\"\n                        height=\"40\"\n                      />\n                      <img\n                        *ngIf=\"\n                          !chatMembers[1]?.attributes?.prof_pic.data?.attributes\n                            ?.url\n                        \"\n                        src=\"assets/img/avatars/6.png\"\n                        class=\"rounded-circle mr-1\"\n                        alt=\"profile pic\"\n                        width=\"40\"\n                        height=\"40\"\n                      />\n                      <strong>{{ chatMembers[1]?.attributes?.Name }}</strong>\n                      <!-- <div class=\"text-muted small\"><em>Typing...</em></div> -->\n                    </div>\n                    <!-- <button class=\"btn btn-primary btn-lg mr-1 px-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\"\n                        height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                        stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-phone feather-lg\">\n                        <path\n                          d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\">\n                        </path>\n                      </svg></button>\n                    <button class=\"btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block\"><svg\n                        xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\n                        stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                        class=\"feather feather-video feather-lg\">\n                        <polygon points=\"23 7 16 12 23 17 23 7\"></polygon>\n                        <rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>\n                      </svg></button>\n                    <button class=\"btn btn-light border btn-lg px-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\"\n                        height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\n                        stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                        class=\"feather feather-more-horizontal feather-lg\">\n                        <circle cx=\"12\" cy=\"12\" r=\"1\"></circle>\n                        <circle cx=\"19\" cy=\"12\" r=\"1\"></circle>\n                        <circle cx=\"5\" cy=\"12\" r=\"1\"></circle>\n                      </svg></button> -->\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"position-relative\">\n                <div class=\"chat-messages p-4\" #messageSection style=\"max-height: 80vh; overflow-y: scroll;\">\n                  <div\n                    *ngFor=\"let item of messageData?.attributes?.messages?.data\"\n                    [class.chat-message-right]=\"\n                      item?.attributes?.from_user?.data?.attributes?.Name ==\n                      chatMembers[1]?.attributes?.Name\n                    \"\n                    [class.chat-message-left]=\"\n                      item?.attributes?.from_user?.data?.attributes?.Name !==\n                      chatMembers[1]?.attributes?.Name\n                    \"\n                    class=\"pb-4\"\n                  >\n                    <div>\n                      <img\n                        *ngIf=\"\n                          item?.attributes?.from_user?.data?.attributes\n                            ?.prof_pic?.data?.attributes?.url\n                        \"\n                        src=\"{{ baseURL }}{{\n                          item?.attributes?.from_user?.data?.attributes\n                            ?.prof_pic?.data?.attributes?.url\n                        }}\"\n                        class=\"rounded-circle mr-1\"\n                        alt=\"Chris Wood\"\n                        width=\"40\"\n                        height=\"40\"\n                      />\n                      <img\n                        *ngIf=\"\n                          !item?.attributes?.from_user?.data?.attributes\n                            ?.prof_pic?.data?.attributes?.url\n                        \"\n                        src=\"assets/img/avatars/6.png\"\n                        class=\"rounded-circle mr-1\"\n                        alt=\"Chris Wood\"\n                        width=\"40\"\n                        height=\"40\"\n                      />\n                      <div class=\"text-muted small text-nowrap mt-2\">\n                        {{ convertDate(item?.attributes?.createdAt) }}<br />{{\n                          convertTime(item?.attributes?.createdAt)\n                        }}\n                      </div>\n                    </div>\n                    <div\n                      class=\"flex-shrink-1 bg-light rounded py-2 px-3 mx-3\"\n                      style=\"max-width: 400px\"\n                    >\n                      <div class=\"font-weight-bold mb-1\">\n                        {{\n                          item?.attributes?.from_user?.data?.attributes?.Name\n                        }}\n                      </div>\n                      <a\n                        href=\"{{ baseURL }}{{\n                          item?.attributes?.image_attachment?.data?.attributes\n                            ?.url\n                        }}\"\n                        target=\"_blank\"\n                      >\n                        <img\n                          *ngIf=\"\n                            item?.attributes?.image_attachment?.data?.attributes\n                              ?.url\n                          \"\n                          src=\"{{ baseURL }}{{\n                            item?.attributes?.image_attachment?.data?.attributes\n                              ?.url\n                          }}\"\n                          class=\"mr-1\"\n                          alt=\"Chris Wood\"\n                          width=\"100%\"\n                          height=\"100\"\n                        />\n                      </a>\n                      <div>{{ item?.attributes?.message }}</div>\n                    </div>\n                  </div>\n                  <!-- <div class=\"chat-message-left pb-4\">\n                    <div>\n                      <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" class=\"rounded-circle mr-1\"\n                        alt=\"Sharon Lessman\" width=\"40\" height=\"40\">\n                      <div class=\"text-muted small text-nowrap mt-2\">2:34 am</div>\n                    </div>\n                    <div class=\"flex-shrink-1 bg-light rounded py-2 px-3 ml-3\">\n                      <div class=\"font-weight-bold mb-1\">Sharon Lessman</div>\n                      Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.\n                    </div>\n                  </div> -->\n                </div>\n              </div>\n\n              <!-- <div class=\"flex-grow-0 py-3 px-4 border-top\">\n              <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Type your message\">\n                <button class=\"btn btn-primary\">Send</button>\n              </div>\n            </div> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </main>\n  </div>\n</div>\n";

      /***/
    }
  }]);
})();
//# sourceMappingURL=views-chat-chat-module-es5.js.map