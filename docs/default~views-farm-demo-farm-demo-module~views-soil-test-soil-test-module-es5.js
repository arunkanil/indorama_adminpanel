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
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-farm-demo-farm-demo-module~views-soil-test-soil-test-module"], {
    /***/"Osdn":
    /*!********************************************************************************!*\
      !*** ./node_modules/ngx-bootstrap/carousel/fesm2015/ngx-bootstrap-carousel.js ***!
      \********************************************************************************/
    /*! exports provided: CarouselComponent, CarouselConfig, CarouselModule, SlideComponent */
    /***/
    function Osdn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "CarouselComponent", function () {
        return CarouselComponent;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "CarouselConfig", function () {
        return CarouselConfig;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "CarouselModule", function () {
        return CarouselModule;
      });
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "SlideComponent", function () {
        return SlideComponent;
      });
      /* harmony import */
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */"8Y7J");
      /* harmony import */
      var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ngx-bootstrap/utils */"hpHm");
      /* harmony import */
      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common */"SVse");

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      function CarouselComponent_ol_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
            var i_r5 = ctx.index;
            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
            return ctx_r6.selectSlide(i_r5);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var slide_r4 = ctx.$implicit;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", slide_r4.active === true);
        }
      }
      function CarouselComponent_ol_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.indicatorsSlides());
        }
      }
      function CarouselComponent_a_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Previous");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }
      function CarouselComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_4_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            return ctx_r9.previousSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isBs4);
        }
      }
      function CarouselComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_a_5_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
            return ctx_r11.nextSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
        }
      }
      var _c0 = function _c0(a0) {
        return {
          "display": a0
        };
      };
      var _c1 = ["*"];
      var CarouselConfig = /*#__PURE__*/_createClass(function CarouselConfig() {
        _classCallCheck(this, CarouselConfig);
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
            of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
      });
      CarouselConfig.ɵfac = function CarouselConfig_Factory(t) {
        return new (t || CarouselConfig)();
      };
      /** @nocollapse */
      CarouselConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function CarouselConfig_Factory() {
          return new CarouselConfig();
        },
        token: CarouselConfig,
        providedIn: "root"
      });
      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselConfig, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      if (false) {}

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      /**
       * Returns the index of the last element in the array where predicate is true, and -1
       * otherwise.
       * @template T
       * @param {?} array The source array to search in
       * @param {?} predicate find calls predicate once for each element of the array, in descending
       * order, until it finds one where predicate returns true. If such an element is found,
       * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
       * @return {?}
       */
      function findLastIndex(array, predicate) {
        /** @type {?} */
        var l = array.length;
        while (l--) {
          if (predicate(array[l], l, array)) {
            return l;
          }
        }
        return -1;
      }
      /**
       * @template T
       * @param {?} array
       * @param {?} size
       * @return {?}
       */
      function chunkByNumber(array, size) {
        /** @type {?} */
        var out = [];
        /** @type {?} */
        var n = Math.ceil(array.length / size);
        /** @type {?} */
        var i = 0;
        while (i < n) {
          /** @type {?} */
          var chunk = array.splice(0, i === n - 1 && size < array.length ? array.length : size);
          out.push(chunk);
          i++;
        }
        return out;
      }

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      /** @enum {number} */
      var Direction = {
        UNKNOWN: 0,
        NEXT: 1,
        PREV: 2
      };
      Direction[Direction.UNKNOWN] = 'UNKNOWN';
      Direction[Direction.NEXT] = 'NEXT';
      Direction[Direction.PREV] = 'PREV';
      /**
       * Base element to create carousel
       */
      var CarouselComponent = /*#__PURE__*/function () {
        /**
         * @param {?} config
         * @param {?} ngZone
         */
        function CarouselComponent(config, ngZone) {
          _classCallCheck(this, CarouselComponent);
          this.ngZone = ngZone;
          /* If `true` - carousel indicators indicate slides chunks
               works ONLY if singleSlideOffset = FALSE */
          this.indicatorsByChunk = false;
          /* If value more then 1 — carousel works in multilist mode */
          this.itemsPerSlide = 1;
          /* If `true` — carousel shifts by one element. By default carousel shifts by number
               of visible elements (itemsPerSlide field) */
          this.singleSlideOffset = false;
          /**
           * Turn on/off animation. Animation doesn't work for multilist carousel
           */
          this.isAnimated = false;
          /**
           * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
           */
          this.activeSlideChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
          /**
           * Will be emitted when active slides has been changed in multilist mode
           */
          this.slideRangeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          /* Index to start display slides from it */
          this.startFromIndex = 0;
          this._slides = new ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["LinkedList"]();
          this._currentVisibleSlidesIndex = 0;
          this.destroyed = false;
          this.getActive =
          /**
          * @param {?} slide
          * @return {?}
          */
          function (slide) {
            return slide.active;
          };
          this.makeSlidesConsistent =
          /**
          * @param {?} slides
          * @return {?}
          */
          function (slides) {
            slides.forEach(
            /**
            * @param {?} slide
            * @param {?} index
            * @return {?}
            */
            function (slide, index) {
              return slide.item.order = index;
            });
          };
          Object.assign(this, config);
        }
        /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        _createClass(CarouselComponent, [{
          key: "activeSlide",
          get:
          /**
           * @return {?}
           */
          function get() {
            return this._currentActiveSlide;
          }
          /**
           * Delay of item cycling in milliseconds. If false, carousel won't cycle
           * automatically.
           * @return {?}
           */,
          set: function set(index) {
            if (this.multilist) {
              return;
            }
            if (this._slides.length && index !== this._currentActiveSlide) {
              this._select(index);
            }
          }
        }, {
          key: "interval",
          get: function get() {
            return this._interval;
          }
          /**
           * @param {?} value
           * @return {?}
           */,
          set: function set(value) {
            this._interval = value;
            this.restartTimer();
          }
          /**
           * @return {?}
           */
        }, {
          key: "slides",
          get: function get() {
            return this._slides.toArray();
          }
          /**
           * @return {?}
           */
        }, {
          key: "isBs4",
          get: function get() {
            return !Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_1__["isBs3"])();
          }
          /**
           * @return {?}
           */
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              if (_this.singleSlideOffset) {
                _this.indicatorsByChunk = false;
              }
              if (_this.multilist) {
                _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);
                _this.selectInitialSlides();
              }
            }, 0);
          }
          /**
           * @return {?}
           */
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed = true;
          }
          /**
           * Adds new slide. If this slide is first in collection - set it as active
           * and starts auto changing
           * @param {?} slide
           * @return {?}
           */
        }, {
          key: "addSlide",
          value: function addSlide(slide) {
            this._slides.add(slide);
            if (this.multilist && this._slides.length <= this.itemsPerSlide) {
              slide.active = true;
            }
            if (!this.multilist && this.isAnimated) {
              slide.isAnimated = true;
            }
            if (!this.multilist && this._slides.length === 1) {
              this._currentActiveSlide = undefined;
              this.activeSlide = 0;
              this.play();
            }
            if (this.multilist && this._slides.length > this.itemsPerSlide) {
              this.play();
            }
          }
          /**
           * Removes specified slide. If this slide is active - will roll to another
           * slide
           * @param {?} slide
           * @return {?}
           */
        }, {
          key: "removeSlide",
          value: function removeSlide(slide) {
            var _this2 = this;
            /** @type {?} */
            var remIndex = this._slides.indexOf(slide);
            if (this._currentActiveSlide === remIndex) {
              // removing of active slide
              /** @type {?} */
              var nextSlideIndex = void 0;
              if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex) ? remIndex : this.noWrap ? remIndex - 1 : 0;
              }
              this._slides.remove(remIndex);
              // prevents exception with changing some value after checking
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this2._select(nextSlideIndex);
              }, 0);
            } else {
              this._slides.remove(remIndex);
              /** @type {?} */
              var currentSlideIndex = this.getCurrentSlideIndex();
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                // after removing, need to actualize index of current active slide
                _this2._currentActiveSlide = currentSlideIndex;
                _this2.activeSlideChange.emit(_this2._currentActiveSlide);
              }, 0);
            }
          }
          /**
           * @param {?=} force
           * @return {?}
           */
        }, {
          key: "nextSlideFromInterval",
          value: function nextSlideFromInterval() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.move(Direction.NEXT, force);
          }
          /**
           * Rolling to next slide
           * @param {?=} force
           * @return {?}
           */
        }, {
          key: "nextSlide",
          value: function nextSlide() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.isPlaying) {
              this.restartTimer();
            }
            this.move(Direction.NEXT, force);
          }
          /**
           * Rolling to previous slide
           * @param {?=} force
           * @return {?}
           */
        }, {
          key: "previousSlide",
          value: function previousSlide() {
            var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (this.isPlaying) {
              this.restartTimer();
            }
            this.move(Direction.PREV, force);
          }
          /**
           * @return {?}
           */
        }, {
          key: "getFirstVisibleIndex",
          value: function getFirstVisibleIndex() {
            return this.slides.findIndex(this.getActive);
          }
          /**
           * @return {?}
           */
        }, {
          key: "getLastVisibleIndex",
          value: function getLastVisibleIndex() {
            return findLastIndex(this.slides, this.getActive);
          }
          /**
           * @param {?} direction
           * @param {?=} force
           * @return {?}
           */
        }, {
          key: "move",
          value: function move(direction) {
            var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            /** @type {?} */
            var firstVisibleIndex = this.getFirstVisibleIndex();
            /** @type {?} */
            var lastVisibleIndex = this.getLastVisibleIndex();
            if (this.noWrap) {
              if (direction === Direction.NEXT && this.isLast(lastVisibleIndex) || direction === Direction.PREV && firstVisibleIndex === 0) {
                return;
              }
            }
            if (!this.multilist) {
              this.activeSlide = this.findNextSlideIndex(direction, force);
            } else {
              this.moveMultilist(direction);
            }
          }
          /**
           * Swith slides by enter, space and arrows keys
           * \@internal
           * @param {?} event
           * @return {?}
           */
        }, {
          key: "keydownPress",
          value: function keydownPress(event) {
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
              this.nextSlide();
              event.preventDefault();
              return;
            }
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 37 || event.key === 'LeftArrow') {
              this.previousSlide();
              return;
            }
            // tslint:disable-next-line:deprecation
            if (event.keyCode === 39 || event.key === 'RightArrow') {
              this.nextSlide();
              return;
            }
          }
          /**
           * Play on mouse leave
           * \@internal
           * @return {?}
           */
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            if (!this.pauseOnFocus) {
              this.play();
            }
          }
          /**
           * Play on mouse up
           * \@internal
           * @return {?}
           */
        }, {
          key: "onMouseUp",
          value: function onMouseUp() {
            if (!this.pauseOnFocus) {
              this.play();
            }
          }
          /**
           * When slides on focus autoplay is stopped(optional)
           * \@internal
           * @return {?}
           */
        }, {
          key: "pauseFocusIn",
          value: function pauseFocusIn() {
            if (this.pauseOnFocus) {
              this.isPlaying = false;
              this.resetTimer();
            }
          }
          /**
           * When slides out of focus autoplay is started
           * \@internal
           * @return {?}
           */
        }, {
          key: "pauseFocusOut",
          value: function pauseFocusOut() {
            this.play();
          }
          /**
           * Rolling to specified slide
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "selectSlide",
          value: function selectSlide(index) {
            if (this.isPlaying) {
              this.restartTimer();
            }
            if (!this.multilist) {
              this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
            } else {
              this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
            }
          }
          /**
           * Starts a auto changing of slides
           * @return {?}
           */
        }, {
          key: "play",
          value: function play() {
            if (!this.isPlaying) {
              this.isPlaying = true;
              this.restartTimer();
            }
          }
          /**
           * Stops a auto changing of slides
           * @return {?}
           */
        }, {
          key: "pause",
          value: function pause() {
            if (!this.noPause) {
              this.isPlaying = false;
              this.resetTimer();
            }
          }
          /**
           * Finds and returns index of currently displayed slide
           * @return {?}
           */
        }, {
          key: "getCurrentSlideIndex",
          value: function getCurrentSlideIndex() {
            return this._slides.findIndex(this.getActive);
          }
          /**
           * Defines, whether the specified index is last in collection
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "isLast",
          value: function isLast(index) {
            return index + 1 >= this._slides.length;
          }
          /**
           * Defines, whether the specified index is first in collection
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "isFirst",
          value: function isFirst(index) {
            return index === 0;
          }
          /**
           * @return {?}
           */
        }, {
          key: "indicatorsSlides",
          value: function indicatorsSlides() {
            var _this3 = this;
            return this.slides.filter(
            /**
            * @param {?} slide
            * @param {?} index
            * @return {?}
            */
            function (slide, index) {
              return !_this3.indicatorsByChunk || index % _this3.itemsPerSlide === 0;
            });
          }
          /**
           * @private
           * @return {?}
           */
        }, {
          key: "selectInitialSlides",
          value: function selectInitialSlides() {
            /** @type {?} */
            var startIndex = this.startFromIndex <= this._slides.length ? this.startFromIndex : 0;
            this.hideSlides();
            if (this.singleSlideOffset) {
              this._slidesWithIndexes = this.mapSlidesAndIndexes();
              if (this._slides.length - startIndex < this.itemsPerSlide) {
                /** @type {?} */
                var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [].concat(_toConsumableArray(this._slidesWithIndexes), _toConsumableArray(slidesToAppend)).slice(slidesToAppend.length).slice(0, this.itemsPerSlide);
              } else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
              }
              this._slidesWithIndexes.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });
              this.makeSlidesConsistent(this._slidesWithIndexes);
            } else {
              this.selectRangeByNestedIndex(startIndex);
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
          }
          /**
           * Defines next slide index, depending of direction
           * @private
           * @param {?} direction
           * @param {?} force
           * @return {?}
           */
        }, {
          key: "findNextSlideIndex",
          value: function findNextSlideIndex(direction, force) {
            /** @type {?} */
            var nextSlideIndex = 0;
            if (!force && this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap) {
              return undefined;
            }
            switch (direction) {
              case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                nextSlideIndex = !this.isLast(this._currentActiveSlide) ? this._currentActiveSlide + 1 : !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
              case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                nextSlideIndex = this._currentActiveSlide > 0 ? this._currentActiveSlide - 1 : !force && this.noWrap ? this._currentActiveSlide : this._slides.length - 1;
                break;
              default:
                throw new Error('Unknown direction');
            }
            return nextSlideIndex;
          }
          /**
           * @private
           * @return {?}
           */
        }, {
          key: "mapSlidesAndIndexes",
          value: function mapSlidesAndIndexes() {
            return this.slides.slice().map(
            /**
            * @param {?} slide
            * @param {?} index
            * @return {?}
            */
            function (slide, index) {
              return {
                index: index,
                item: slide
              };
            });
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "selectSlideRange",
          value: function selectSlideRange(index) {
            if (this.isIndexInRange(index)) {
              return;
            }
            this.hideSlides();
            if (!this.singleSlideOffset) {
              this.selectRangeByNestedIndex(index);
            } else {
              /** @type {?} */
              var startIndex = this.isIndexOnTheEdges(index) ? index : index - this.itemsPerSlide + 1;
              /** @type {?} */
              var endIndex = this.isIndexOnTheEdges(index) ? index + this.itemsPerSlide : index + 1;
              this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
              this.makeSlidesConsistent(this._slidesWithIndexes);
              this._slidesWithIndexes.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "selectRangeByNestedIndex",
          value: function selectRangeByNestedIndex(index) {
            /** @type {?} */
            var selectedRange = this._chunkedSlides.map(
            /**
            * @param {?} slidesList
            * @param {?} i
            * @return {?}
            */
            function (slidesList, i) {
              return {
                index: i,
                list: slidesList
              };
            }).find(
            /**
            * @param {?} slidesList
            * @return {?}
            */
            function (slidesList) {
              return slidesList.list.find(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index === index;
              }) !== undefined;
            });
            this._currentVisibleSlidesIndex = selectedRange.index;
            this._chunkedSlides[selectedRange.index].forEach(
            /**
            * @param {?} slide
            * @return {?}
            */
            function (slide) {
              slide.item.active = true;
            });
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "isIndexOnTheEdges",
          value: function isIndexOnTheEdges(index) {
            return index + 1 - this.itemsPerSlide <= 0 || index + this.itemsPerSlide <= this._slides.length;
          }
          /**
           * @private
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "isIndexInRange",
          value: function isIndexInRange(index) {
            if (this.singleSlideOffset) {
              /** @type {?} */
              var visibleIndexes = this._slidesWithIndexes.map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              });
              return visibleIndexes.indexOf(index) >= 0;
            }
            return index <= this.getLastVisibleIndex() && index >= this.getFirstVisibleIndex();
          }
          /**
           * @private
           * @return {?}
           */
        }, {
          key: "hideSlides",
          value: function hideSlides() {
            this.slides.forEach(
            /**
            * @param {?} slide
            * @return {?}
            */
            function (slide) {
              return slide.active = false;
            });
          }
          /**
           * @private
           * @return {?}
           */
        }, {
          key: "isVisibleSlideListLast",
          value: function isVisibleSlideListLast() {
            return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
          }
          /**
           * @private
           * @return {?}
           */
        }, {
          key: "isVisibleSlideListFirst",
          value: function isVisibleSlideListFirst() {
            return this._currentVisibleSlidesIndex === 0;
          }
          /**
           * @private
           * @param {?} direction
           * @return {?}
           */
        }, {
          key: "moveSliderByOneItem",
          value: function moveSliderByOneItem(direction) {
            /** @type {?} */
            var firstVisibleIndex;
            /** @type {?} */
            var lastVisibleIndex;
            /** @type {?} */
            var indexToHide;
            /** @type {?} */
            var indexToShow;
            if (this.noWrap) {
              firstVisibleIndex = this.getFirstVisibleIndex();
              lastVisibleIndex = this.getLastVisibleIndex();
              indexToHide = direction === Direction.NEXT ? firstVisibleIndex : lastVisibleIndex;
              indexToShow = direction !== Direction.NEXT ? firstVisibleIndex - 1 : !this.isLast(lastVisibleIndex) ? lastVisibleIndex + 1 : 0;
              this._slides.get(indexToHide).active = false;
              this._slides.get(indexToShow).active = true;
              /** @type {?} */
              var slidesToReorder = this.mapSlidesAndIndexes().filter(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active;
              });
              this.makeSlidesConsistent(slidesToReorder);
              this.slideRangeChange.emit(this.getVisibleIndexes());
            } else {
              /** @type {?} */
              var displayedIndex;
              firstVisibleIndex = this._slidesWithIndexes[0].index;
              lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
              if (direction === Direction.NEXT) {
                this._slidesWithIndexes.shift();
                displayedIndex = this.isLast(lastVisibleIndex) ? 0 : lastVisibleIndex + 1;
                this._slidesWithIndexes.push({
                  index: displayedIndex,
                  item: this._slides.get(displayedIndex)
                });
              } else {
                this._slidesWithIndexes.pop();
                displayedIndex = this.isFirst(firstVisibleIndex) ? this._slides.length - 1 : firstVisibleIndex - 1;
                this._slidesWithIndexes = [{
                  index: displayedIndex,
                  item: this._slides.get(displayedIndex)
                }].concat(_toConsumableArray(this._slidesWithIndexes));
              }
              this.hideSlides();
              this._slidesWithIndexes.forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });
              this.makeSlidesConsistent(this._slidesWithIndexes);
              this.slideRangeChange.emit(this._slidesWithIndexes.map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              }));
            }
          }
          /**
           * @private
           * @param {?} direction
           * @return {?}
           */
        }, {
          key: "moveMultilist",
          value: function moveMultilist(direction) {
            if (this.singleSlideOffset) {
              this.moveSliderByOneItem(direction);
            } else {
              this.hideSlides();
              if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT ? this._currentVisibleSlidesIndex + 1 : this._currentVisibleSlidesIndex - 1;
              } else {
                if (direction === Direction.NEXT) {
                  this._currentVisibleSlidesIndex = this.isVisibleSlideListLast() ? 0 : this._currentVisibleSlidesIndex + 1;
                } else {
                  this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst() ? this._chunkedSlides.length - 1 : this._currentVisibleSlidesIndex - 1;
                }
              }
              this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.item.active = true;
              });
              this.slideRangeChange.emit(this.getVisibleIndexes());
            }
          }
          /**
           * @private
           * @return {?}
           */
        }, {
          key: "getVisibleIndexes",
          value: function getVisibleIndexes() {
            if (!this.singleSlideOffset) {
              return this._chunkedSlides[this._currentVisibleSlidesIndex].map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              });
            } else {
              return this._slidesWithIndexes.map(
              /**
              * @param {?} slide
              * @return {?}
              */
              function (slide) {
                return slide.index;
              });
            }
          }
          /**
           * Sets a slide, which specified through index, as active
           * @private
           * @param {?} index
           * @return {?}
           */
        }, {
          key: "_select",
          value: function _select(index) {
            if (isNaN(index)) {
              this.pause();
              return;
            }
            if (!this.multilist) {
              /** @type {?} */
              var currentSlide = this._slides.get(this._currentActiveSlide);
              if (currentSlide) {
                currentSlide.active = false;
              }
            }
            /** @type {?} */
            var nextSlide = this._slides.get(index);
            if (nextSlide) {
              this._currentActiveSlide = index;
              nextSlide.active = true;
              this.activeSlide = index;
              this.activeSlideChange.emit(index);
            }
          }
          /**
           * Starts loop of auto changing of slides
           * @private
           * @return {?}
           */
        }, {
          key: "restartTimer",
          value: function restartTimer() {
            var _this4 = this;
            this.resetTimer();
            /** @type {?} */
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
              this.currentInterval = this.ngZone.runOutsideAngular(
              /**
              * @return {?}
              */
              function () {
                return setInterval(
                /**
                * @return {?}
                */
                function () {
                  /** @type {?} */
                  var nInterval = +_this4.interval;
                  _this4.ngZone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    if (_this4.isPlaying && !isNaN(_this4.interval) && nInterval > 0 && _this4.slides.length) {
                      _this4.nextSlideFromInterval();
                    } else {
                      _this4.pause();
                    }
                  });
                }, interval);
              });
            }
          }
          /**
           * @return {?}
           */
        }, {
          key: "multilist",
          get: function get() {
            return this.itemsPerSlide > 1;
          }
          /**
           * Stops loop of auto changing of slides
           * @private
           * @return {?}
           */
        }, {
          key: "resetTimer",
          value: function resetTimer() {
            if (this.currentInterval) {
              clearInterval(this.currentInterval);
              this.currentInterval = void 0;
            }
          }
        }]);
        return CarouselComponent;
      }();
      CarouselComponent.ɵfac = function CarouselComponent_Factory(t) {
        return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      };
      CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CarouselComponent,
        selectors: [["carousel"]],
        inputs: {
          indicatorsByChunk: "indicatorsByChunk",
          itemsPerSlide: "itemsPerSlide",
          singleSlideOffset: "singleSlideOffset",
          isAnimated: "isAnimated",
          startFromIndex: "startFromIndex",
          activeSlide: "activeSlide",
          interval: "interval",
          noWrap: "noWrap",
          noPause: "noPause",
          showIndicators: "showIndicators",
          pauseOnFocus: "pauseOnFocus"
        },
        outputs: {
          activeSlideChange: "activeSlideChange",
          slideRangeChange: "slideRangeChange"
        },
        ngContentSelectors: _c1,
        decls: 6,
        vars: 6,
        consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]],
        template: function CarouselComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() {
              return ctx.pause();
            })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
              return ctx.onMouseLeave();
            })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() {
              return ctx.onMouseUp();
            })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) {
              return ctx.keydownPress($event);
            })("focusin", function CarouselComponent_Template_div_focusin_0_listener() {
              return ctx.pauseFocusIn();
            })("focusout", function CarouselComponent_Template_div_focusout_0_listener() {
              return ctx.pauseFocusOut();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showIndicators && ctx.slides.length > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.multilist ? "flex" : "block"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.slides.length > 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        encapsulation: 2
      });
      /** @nocollapse */
      CarouselComponent.ctorParameters = function () {
        return [{
          type: CarouselConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      };
      CarouselComponent.propDecorators = {
        noWrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        noPause: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pauseOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        indicatorsByChunk: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemsPerSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        singleSlideOffset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        activeSlideChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        slideRangeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        activeSlide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        startFromIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        interval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'carousel',
            template: "<div (mouseenter)=\"pause()\"\n     (mouseleave)=\"onMouseLeave()\"\n     (mouseup)=\"onMouseUp()\"\n     (keydown)=\"keydownPress($event)\"\n     (focusin)=\"pauseFocusIn()\"\n     (focusout)=\"pauseFocusOut()\"\n     class=\"carousel slide\" tabindex=\"0\">\n  <ol class=\"carousel-indicators\" *ngIf=\"showIndicators && slides.length > 1\">\n    <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\n        [class.active]=\"slide.active === true\"\n        (click)=\"selectSlide(i)\">\n    </li>\n  </ol>\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\n    <ng-content></ng-content>\n  </div>\n  <a class=\"left carousel-control carousel-control-prev\"\n     [class.disabled]=\"activeSlide === 0 && noWrap\"\n     (click)=\"previousSlide()\" *ngIf=\"slides.length > 1\"\n      tabindex=\"0\" role=\"button\">\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span *ngIf=\"isBs4\" class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control carousel-control-next\"\n     [class.disabled]=\"isLast(activeSlide) && noWrap\"\n     (click)=\"nextSlide()\" *ngIf=\"slides.length > 1\"\n     tabindex=\"0\" role=\"button\">\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"
          }]
        }], function () {
          return [{
            type: CarouselConfig
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }];
        }, {
          indicatorsByChunk: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          itemsPerSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          singleSlideOffset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeSlideChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          slideRangeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          startFromIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          interval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          noWrap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          noPause: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showIndicators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pauseOnFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      if (false) {}

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      var SlideComponent = /*#__PURE__*/function () {
        /**
         * @param {?} carousel
         */
        function SlideComponent(carousel) {
          _classCallCheck(this, SlideComponent);
          this.itemWidth = '100%';
          this.order = 0;
          /**
           * Wraps element by appropriate CSS classes
           */
          this.addClass = true;
          this.carousel = carousel;
        }
        /**
         * Fires changes in container collection after adding a new slide instance
         * @return {?}
         */
        _createClass(SlideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.carousel.addSlide(this);
            this.itemWidth = "".concat(100 / this.carousel.itemsPerSlide, "%");
          }
          /**
           * Fires changes in container collection after removing of this slide instance
           * @return {?}
           */
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.carousel.removeSlide(this);
          }
        }]);
        return SlideComponent;
      }();
      SlideComponent.ɵfac = function SlideComponent_Factory(t) {
        return new (t || SlideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CarouselComponent));
      };
      SlideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SlideComponent,
        selectors: [["slide"]],
        hostVars: 13,
        hostBindings: function SlideComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", !ctx.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.itemWidth)("order", ctx.order);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("item", ctx.addClass)("carousel-item", ctx.addClass)("active", ctx.active)("carousel-animation", ctx.isAnimated);
          }
        },
        inputs: {
          active: "active"
        },
        ngContentSelectors: _c1,
        decls: 2,
        vars: 2,
        consts: [[1, "item"]],
        template: function SlideComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
          }
        },
        styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"]
      });
      /** @nocollapse */
      SlideComponent.ctorParameters = function () {
        return [{
          type: CarouselComponent
        }];
      };
      SlideComponent.propDecorators = {
        active: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        itemWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.width']
        }],
        order: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['style.order']
        }],
        isAnimated: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.carousel-animation']
        }],
        addClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.item']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.carousel-item']
        }]
      };
      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlideComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'slide',
            template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
            host: {
              '[attr.aria-hidden]': '!active'
            },
            styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: CarouselComponent
          }];
        }, {
          itemWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
          }],
          order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.order']
          }],
          addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.item']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-item']
          }],
          active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isAnimated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.carousel-animation']
          }]
        });
      })();
      if (false) {}

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */
      var CarouselModule = /*#__PURE__*/function () {
        function CarouselModule() {
          _classCallCheck(this, CarouselModule);
        }
        _createClass(CarouselModule, null, [{
          key: "forRoot",
          value:
          /**
           * @return {?}
           */
          function forRoot() {
            return {
              ngModule: CarouselModule,
              providers: []
            };
          }
        }]);
        return CarouselModule;
      }();
      CarouselModule.ɵfac = function CarouselModule_Factory(t) {
        return new (t || CarouselModule)();
      };
      CarouselModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CarouselModule
      });
      CarouselModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });
      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CarouselModule, {
          declarations: function declarations() {
            return [SlideComponent, CarouselComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [SlideComponent, CarouselComponent];
          }
        });
      })();
      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [SlideComponent, CarouselComponent],
            exports: [SlideComponent, CarouselComponent]
          }]
        }], null, null);
      })();

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      /**
       * @fileoverview added by tsickle
       * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
       */

      //# sourceMappingURL=ngx-bootstrap-carousel.js.map

      /***/
    }
  }]);
})();
//# sourceMappingURL=default~views-farm-demo-farm-demo-module~views-soil-test-soil-test-module-es5.js.map