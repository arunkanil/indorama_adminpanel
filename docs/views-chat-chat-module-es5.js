(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chat-chat-module"], {
    /***/
    "/qiK": function qiK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "body {\r\n  margin-top: 20px;\r\n}\r\n\r\n.chat-online {\r\n  color: #34ce57;\r\n}\r\n\r\n.chat-offline {\r\n  color: #e4606d;\r\n}\r\n\r\n.chat-messages {\r\n  display: flex;\r\n  flex-direction: column;\r\n  max-height: 800px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.chat-message-left,\r\n.chat-message-right {\r\n  display: flex;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.chat-message-left {\r\n  margin-right: auto;\r\n}\r\n\r\n.chat-message-right {\r\n  flex-direction: row-reverse;\r\n  margin-left: auto;\r\n}\r\n\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.flex-grow-0 {\r\n  flex-grow: 0 !important;\r\n}\r\n\r\n.border-top {\r\n  border-top: 1px solid #dee2e6 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDIiwiZmlsZSI6ImNoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5jaGF0LW9ubGluZSB7XHJcbiAgY29sb3I6ICMzNGNlNTc7XHJcbn1cclxuXHJcbi5jaGF0LW9mZmxpbmUge1xyXG4gIGNvbG9yOiAjZTQ2MDZkO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZS1sZWZ0LFxyXG4uY2hhdC1tZXNzYWdlLXJpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNoYXQtbWVzc2FnZS1yaWdodCB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5weS0zIHtcclxuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnB4LTQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsZXgtZ3Jvdy0wIHtcclxuICBmbGV4LWdyb3c6IDAgIWltcG9ydGFudDtcclxufVxyXG4uYm9yZGVyLXRvcCB7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "jykL": function jykL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatModule", function () {
        return ChatModule;
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


      var _chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chat.component */
      "l9bd");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var _chat_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./chat-routing.module */
      "tfKl");
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


      var ChatModule = function ChatModule() {
        _classCallCheck(this, ChatModule);
      };

      ChatModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"].withComponents([]), _chat_routing_module__WEBPACK_IMPORTED_MODULE_7__["ChatRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"]]
      })], ChatModule);
      /***/
    },

    /***/
    "l9bd": function l9bd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
        return ChatComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chat.component.html */
      "ugap");
      /* harmony import */


      var _chat_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chat.component.css */
      "/qiK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "EApP");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../data.service */
      "R7Hv");

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

    /***/
    "tfKl": function tfKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatRoutingModule", function () {
        return ChatRoutingModule;
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


      var _chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat.component */
      "l9bd");

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

      var ChatRoutingModule = function ChatRoutingModule() {
        _classCallCheck(this, ChatRoutingModule);
      };

      ChatRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatRoutingModule);
      /***/
    },

    /***/
    "ugap": function ugap(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"animated fadeIn\">\r\n  <div class=\"card\">\r\n    <div\r\n      class=\"card-header\"\r\n      style=\"display: flex; justify-content: space-between\"\r\n    >\r\n      <h2>Chat Home</h2>\r\n      <div class=\"btn-group float-right\" dropdown>\r\n        <button\r\n          dropdownToggle\r\n          type=\"button\"\r\n          class=\"btn btn-primary dropdown-toggle\"\r\n        >\r\n          {{ selectedList }}<span class=\"caret\"></span>\r\n        </button>\r\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\r\n          <li role=\"menuitem\">\r\n            <a class=\"dropdown-item\" (click)=\"toggleChat(false)\">All Chats</a>\r\n            <a class=\"dropdown-item\" (click)=\"toggleChat(true)\">Ask Indorama</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <main class=\"content\">\r\n      <div class=\"container-fluid p-0\">\r\n        <!-- <h1 class=\"h3 mb-3\">Messages</h1> -->\r\n\r\n        <div class=\"card\">\r\n          <div class=\"row g-0\">\r\n            <div\r\n              class=\"col-12 col-lg-5 col-xl-3 border-right\"\r\n              style=\"max-height: 90vh; overflow-y: scroll\"\r\n            >\r\n              <div class=\"px-4 d-none d-md-block\">\r\n                <div class=\"d-flex align-items-center\">\r\n                  <div class=\"flex-grow-1\">\r\n                    <input\r\n                      ngModel\r\n                      type=\"text\"\r\n                      class=\"form-control my-3\"\r\n                      #searchfield\r\n                      (change)=\"onChange($event)\"\r\n                      placeholder=\"Search...\"\r\n                    />\r\n                    <button class=\"btn btn-primary\" (click)=\"searchChats()\">\r\n                      Search\r\n                    </button>\r\n                    <button class=\"btn btn-secondary\" (click)=\"clearSearch()\">\r\n                      Clear\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <a\r\n                *ngFor=\"let item of chatData\"\r\n                class=\"list-group-item list-group-item-action border-0\"\r\n                (click)=\"getChatMessages(item)\"\r\n              >\r\n                <!-- <div class=\"badge bg-success float-right\">5</div> -->\r\n                <div class=\"d-flex align-items-start\">\r\n                  <img\r\n                    *ngIf=\"\r\n                      item?.attributes?.chatInitiatedBy?.data?.attributes\r\n                        ?.prof_pic.data?.attributes?.url\r\n                    \"\r\n                    src=\"{{ baseURL }}{{\r\n                      item?.attributes?.chatInitiatedBy?.data?.attributes\r\n                        ?.prof_pic?.data?.attributes?.url\r\n                    }}\"\r\n                    class=\"rounded-circle mr-1\"\r\n                    alt=\"profile pic\"\r\n                    width=\"40\"\r\n                    height=\"40\"\r\n                  />\r\n                  <img\r\n                    *ngIf=\"\r\n                      !item?.attributes?.chatInitiatedBy?.data?.attributes\r\n                        ?.prof_pic.data?.attributes?.url\r\n                    \"\r\n                    src=\"../../../assets/img/avatars/6.png\"\r\n                    class=\"rounded-circle mr-1\"\r\n                    alt=\"profile pic\"\r\n                    width=\"40\"\r\n                    height=\"40\"\r\n                  />\r\n                  <div class=\"flex-grow-1 ml-3\">\r\n                    {{\r\n                      item?.attributes?.chatInitiatedBy?.data?.attributes?.Name\r\n                    }}\r\n                    <div class=\"small\">\r\n                      {{ item?.attributes?.members?.data[1]?.attributes?.Name }}\r\n                      -\r\n                      {{ item?.attributes?.members?.data[0]?.attributes?.Name }}\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n              <button\r\n                class=\"btn btn-primary\"\r\n                (click)=\"loadMoreChats()\"\r\n                style=\"float: right\"\r\n              >\r\n                Load more\r\n              </button>\r\n\r\n              <hr class=\"d-block d-lg-none mt-1 mb-0\" />\r\n            </div>\r\n            <div class=\"col-12 col-lg-7 col-xl-9\">\r\n              <div class=\"py-2 px-4 border-bottom d-none d-lg-block\">\r\n                <div\r\n                  class=\"d-flex align-items-center py-1\"\r\n                  style=\"justify-content: space-between\"\r\n                >\r\n                  <div>\r\n                    <!-- <div class=\"position-relative\">\r\n                      <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" class=\"rounded-circle mr-1\"\r\n                        alt=\"Sharon Lessman\" width=\"40\" height=\"40\">\r\n                    </div> -->\r\n                    <div class=\"flex-grow-1 pl-3\">\r\n                      <img\r\n                        *ngIf=\"\r\n                          chatMembers[0]?.attributes?.prof_pic.data?.attributes\r\n                            ?.url\r\n                        \"\r\n                        src=\"{{ baseURL }}{{\r\n                          chatMembers[0]?.attributes?.prof_pic.data?.attributes\r\n                            ?.url\r\n                        }}\"\r\n                        class=\"rounded-circle mr-1\"\r\n                        alt=\"Sharon Lessman\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                      />\r\n                      <img\r\n                        *ngIf=\"\r\n                          !chatMembers[0]?.attributes?.prof_pic.data?.attributes\r\n                            ?.url\r\n                        \"\r\n                        src=\"../../../assets/img/avatars/6.png\"\r\n                        class=\"rounded-circle mr-1\"\r\n                        alt=\"profile pic\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                      />\r\n                      <strong>{{ chatMembers[0]?.attributes?.Name }}</strong>\r\n                      <!-- <div class=\"text-muted small\"><em>Typing...</em></div> -->\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <!-- <div class=\"position-relative\">\r\n                      \r\n                    </div> -->\r\n                    <div class=\"flex-grow-1 pl-3\">\r\n                      <img\r\n                        *ngIf=\"\r\n                          chatMembers[1]?.attributes?.prof_pic.data?.attributes\r\n                            ?.url\r\n                        \"\r\n                        src=\"{{ baseURL }}{{\r\n                          chatMembers[1]?.attributes?.prof_pic.data?.attributes\r\n                            ?.url\r\n                        }}\"\r\n                        class=\"rounded-circle mr-1\"\r\n                        alt=\"Sharon Lessman\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                      />\r\n                      <img\r\n                        *ngIf=\"\r\n                          !chatMembers[1]?.attributes?.prof_pic.data?.attributes\r\n                            ?.url\r\n                        \"\r\n                        src=\"../../../assets/img/avatars/6.png\"\r\n                        class=\"rounded-circle mr-1\"\r\n                        alt=\"profile pic\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                      />\r\n                      <strong>{{ chatMembers[1]?.attributes?.Name }}</strong>\r\n                      <!-- <div class=\"text-muted small\"><em>Typing...</em></div> -->\r\n                    </div>\r\n                    <!-- <button class=\"btn btn-primary btn-lg mr-1 px-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\"\r\n                        height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\r\n                        stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-phone feather-lg\">\r\n                        <path\r\n                          d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\">\r\n                        </path>\r\n                      </svg></button>\r\n                    <button class=\"btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block\"><svg\r\n                        xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"\r\n                        stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                        class=\"feather feather-video feather-lg\">\r\n                        <polygon points=\"23 7 16 12 23 17 23 7\"></polygon>\r\n                        <rect x=\"1\" y=\"5\" width=\"15\" height=\"14\" rx=\"2\" ry=\"2\"></rect>\r\n                      </svg></button>\r\n                    <button class=\"btn btn-light border btn-lg px-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\"\r\n                        height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"\r\n                        stroke-linecap=\"round\" stroke-linejoin=\"round\"\r\n                        class=\"feather feather-more-horizontal feather-lg\">\r\n                        <circle cx=\"12\" cy=\"12\" r=\"1\"></circle>\r\n                        <circle cx=\"19\" cy=\"12\" r=\"1\"></circle>\r\n                        <circle cx=\"5\" cy=\"12\" r=\"1\"></circle>\r\n                      </svg></button> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"position-relative\">\r\n                <div class=\"chat-messages p-4\" #messageSection style=\"max-height: 80vh; overflow-y: scroll;\">\r\n                  <div\r\n                    *ngFor=\"let item of messageData?.attributes?.messages?.data\"\r\n                    [class.chat-message-right]=\"\r\n                      item?.attributes?.from_user?.data?.attributes?.Name ==\r\n                      chatMembers[1]?.attributes?.Name\r\n                    \"\r\n                    [class.chat-message-left]=\"\r\n                      item?.attributes?.from_user?.data?.attributes?.Name !==\r\n                      chatMembers[1]?.attributes?.Name\r\n                    \"\r\n                    class=\"pb-4\"\r\n                  >\r\n                    <div>\r\n                      <img\r\n                        *ngIf=\"\r\n                          item?.attributes?.from_user?.data?.attributes\r\n                            ?.prof_pic?.data?.attributes?.url\r\n                        \"\r\n                        src=\"{{ baseURL }}{{\r\n                          item?.attributes?.from_user?.data?.attributes\r\n                            ?.prof_pic?.data?.attributes?.url\r\n                        }}\"\r\n                        class=\"rounded-circle mr-1\"\r\n                        alt=\"Chris Wood\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                      />\r\n                      <img\r\n                        *ngIf=\"\r\n                          !item?.attributes?.from_user?.data?.attributes\r\n                            ?.prof_pic?.data?.attributes?.url\r\n                        \"\r\n                        src=\"../../../assets/img/avatars/6.png\"\r\n                        class=\"rounded-circle mr-1\"\r\n                        alt=\"Chris Wood\"\r\n                        width=\"40\"\r\n                        height=\"40\"\r\n                      />\r\n                      <div class=\"text-muted small text-nowrap mt-2\">\r\n                        {{ convertDate(item?.attributes?.createdAt) }}<br />{{\r\n                          convertTime(item?.attributes?.createdAt)\r\n                        }}\r\n                      </div>\r\n                    </div>\r\n                    <div\r\n                      class=\"flex-shrink-1 bg-light rounded py-2 px-3 mx-3\"\r\n                      style=\"max-width: 400px\"\r\n                    >\r\n                      <div class=\"font-weight-bold mb-1\">\r\n                        {{\r\n                          item?.attributes?.from_user?.data?.attributes?.Name\r\n                        }}\r\n                      </div>\r\n                      <a\r\n                        href=\"{{ baseURL }}{{\r\n                          item?.attributes?.image_attachment?.data?.attributes\r\n                            ?.url\r\n                        }}\"\r\n                        target=\"_blank\"\r\n                      >\r\n                        <img\r\n                          *ngIf=\"\r\n                            item?.attributes?.image_attachment?.data?.attributes\r\n                              ?.url\r\n                          \"\r\n                          src=\"{{ baseURL }}{{\r\n                            item?.attributes?.image_attachment?.data?.attributes\r\n                              ?.url\r\n                          }}\"\r\n                          class=\"mr-1\"\r\n                          alt=\"Chris Wood\"\r\n                          width=\"100%\"\r\n                          height=\"100\"\r\n                        />\r\n                      </a>\r\n                      <div>{{ item?.attributes?.message }}</div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"chat-message-left pb-4\">\r\n                    <div>\r\n                      <img src=\"https://bootdey.com/img/Content/avatar/avatar3.png\" class=\"rounded-circle mr-1\"\r\n                        alt=\"Sharon Lessman\" width=\"40\" height=\"40\">\r\n                      <div class=\"text-muted small text-nowrap mt-2\">2:34 am</div>\r\n                    </div>\r\n                    <div class=\"flex-shrink-1 bg-light rounded py-2 px-3 ml-3\">\r\n                      <div class=\"font-weight-bold mb-1\">Sharon Lessman</div>\r\n                      Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n              </div>\r\n\r\n              <!-- <div class=\"flex-grow-0 py-3 px-4 border-top\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"Type your message\">\r\n                <button class=\"btn btn-primary\">Send</button>\r\n              </div>\r\n            </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-chat-chat-module-es5.js.map