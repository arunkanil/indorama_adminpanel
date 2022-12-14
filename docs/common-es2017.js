(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "1qmy":
/*!*********************************************!*\
  !*** ./src/app/utils/username.validator.ts ***!
  \*********************************************/
/*! exports provided: UsernameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsernameValidator", function() { return UsernameValidator; });
class UsernameValidator {
    static cannotContainSpace(control) {
        if (control.value.indexOf(" ") >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2017.js.map