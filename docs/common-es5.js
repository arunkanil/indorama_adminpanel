(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "1qmy": function qmy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsernameValidator", function () {
        return UsernameValidator;
      });

      var UsernameValidator = /*#__PURE__*/function () {
        function UsernameValidator() {
          _classCallCheck(this, UsernameValidator);
        }

        _createClass(UsernameValidator, null, [{
          key: "cannotContainSpace",
          value: function cannotContainSpace(control) {
            if (control.value.indexOf(" ") >= 0) {
              return {
                cannotContainSpace: true
              };
            }

            return null;
          }
        }]);

        return UsernameValidator;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map