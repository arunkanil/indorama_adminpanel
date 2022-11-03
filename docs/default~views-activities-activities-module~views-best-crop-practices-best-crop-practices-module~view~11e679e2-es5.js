(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2"], {
    /***/
    "7nfi": function nfi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterParams", function () {
        return filterParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgentsColumn", function () {
        return AgentsColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RetailersColumn", function () {
        return RetailersColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersColumn", function () {
        return UsersColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FarmDemoColumn", function () {
        return FarmDemoColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoilHomeColumn", function () {
        return SoilHomeColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoilAnalysisColumns", function () {
        return SoilAnalysisColumns;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dateConverter", function () {
        return dateConverter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dateConverterMin", function () {
        return dateConverterMin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StateMasterColumn", function () {
        return StateMasterColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LGAMasterColumn", function () {
        return LGAMasterColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AreaMasterColumn", function () {
        return AreaMasterColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VillageMasterColumn", function () {
        return VillageMasterColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketMasterColumn", function () {
        return MarketMasterColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropMasterColumn", function () {
        return CropMasterColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropPricesColumn", function () {
        return CropPricesColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SmsColumn", function () {
        return SmsColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeliveryReportColumn", function () {
        return DeliveryReportColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketplaceColumn", function () {
        return MarketplaceColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IndoramaUpdatesColumn", function () {
        return IndoramaUpdatesColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurveysColumn", function () {
        return SurveysColumn;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivitiesColumn", function () {
        return ActivitiesColumn;
      });
      /* harmony import */


      var _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/StatusRenderer */
      "MYrn");

      var filterParams = {
        suppressAndOrCondition: true,
        comparator: function comparator(filterLocalDateAtMidnight, cellValue) {
          var dateAsString = new Date(cellValue).toLocaleDateString("en-IN");
          if (dateAsString == null) return -1;
          var dateParts = dateAsString.split("/");
          var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
          console.log(cellValue, "ddd", cellDate, "ddd", filterLocalDateAtMidnight);

          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }

          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }

          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        browserDatePicker: true,
        buttons: ["reset"]
      };

      function monthRenderer(params) {
        switch (params.data.MarriageMonth) {
          case 0:
            return "January";

          case 1:
            return "February";

          case 2:
            return "March";

          case 3:
            return "April";

          case 4:
            return "May";

          case 5:
            return "June";

          case 6:
            return "July";

          case 7:
            return "August";

          case 8:
            return "September";

          case 9:
            return "October";

          case 10:
            return "November";

          case 11:
            return "December";
        }
      }

      function dateRenderer(params) {
        var _a, _b, _c, _d;

        var value = ((_b = (_a = params.data.Address) === null || _a === void 0 ? void 0 : _a.post_office) === null || _b === void 0 ? void 0 : _b.Name) + " " + ((_d = (_c = params.data.Address) === null || _c === void 0 ? void 0 : _c.post_office) === null || _d === void 0 ? void 0 : _d.Pincode);

        if (value != "undefined undefined") {
          return value;
        } else return "No data";
      }

      var AgentsColumn = [{
        field: "id",
        headerName: "ID",
        resizable: true,
        sortable: true
      }, {
        field: "farmerName",
        headerName: "Farmer Name",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "Crop",
        headerName: "Crop",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "Date",
        headerName: "Date",
        resizable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "Agronomist",
        headerName: "Agronomist",
        minWidth: 150,
        resizable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "Status",
        headerName: "Status",
        minWidth: 100,
        resizable: true,
        sortable: true
      }, {
        field: "Action",
        headerName: "Actions",
        minWidth: 100,
        resizable: true,
        sortable: true,
        cellRenderer: _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_0__["ActionRenderer"]
      }];
      var RetailersColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "Business Name",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.username",
        headerName: "Username",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, // {
      //   field: "attributes.email",
      //   headerName: "Email",
      //   minWidth: 150,
      //   resizable: true,
      //   filter: "agTextColumnFilter",
      //   filterParams: {
      //     filterOptions: ["contains"],
      //     buttons: ["reset"],
      //   },
      // },
      {
        field: "attributes.retailer_categories.data",
        headerName: "Category",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          var x = "";

          for (var i = 0; i < data.value.length; i++) {
            x = x + data.value[i].attributes.CategoryName + ",";
          }

          return x;
        }
      }, {
        field: "attributes.village.data.attributes.Name",
        headerName: "Village",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.Name",
        headerName: "LGA",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.state.data.attributes.Name",
        headerName: "State",
        minWidth: 150,
        resizable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.confirmed",
        headerName: "Approval Status",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        valueGetter: function valueGetter(data) {
          if (data.data.attributes.blocked === true) return "Rejected";else if (data.data.attributes.confirmed === true) {
            return "Approved";
          } else if (data.data.attributes.confirmed === false) {
            return "Pending";
          }
          console.log(data.data.attributes);
        }
      }];
      var UsersColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "Name",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.username",
        headerName: "Username",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, // {
      //   field: "attributes.email",
      //   headerName: "Email",
      //   minWidth: 150,
      //   resizable: true,
      //   filter: "agTextColumnFilter",
      //   filterParams: {
      //     filterOptions: ["contains"],
      //     buttons: ["reset"],
      //   },
      // },
      {
        field: "attributes.UserType",
        headerName: "Category",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.village.data.attributes.Name",
        headerName: "Village",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.Name",
        headerName: "LGA",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.state.data.attributes.Name",
        headerName: "State",
        minWidth: 150,
        resizable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var FarmDemoColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        width: 120,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return "FHTY" + data.value;
        }
      }, {
        field: "attributes.Farmer",
        headerName: "Farmer Name",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.crop.data.attributes.Name",
        headerName: "Crop Name",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.state.data.attributes.Name",
        headerName: "State",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lgas.data.attributes.Name",
        headerName: "LGA",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.Status",
        headerName: "Status",
        resizable: true,
        sortable: true,
        width: 150,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.AreaOfField",
        headerName: "Area of Field",
        sortable: true,
        resizable: true,
        filter: "agDateColumnFilter",
        filterParams: filterParams
      }, {
        field: "attributes.Season",
        headerName: "Season",
        sortable: true,
        resizable: true,
        filter: "agDateColumnFilter",
        filterParams: filterParams
      }, {
        field: "attributes.DateOfHarvesting",
        headerName: "Date of Harvesting",
        resizable: true,
        filter: "agDateColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toDateString() : "";
        }
      }];
      var SoilHomeColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        width: 100,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "CropName",
        headerName: "Crop Name",
        // minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "State",
        headerName: "State",
        // minWidth: 120,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "Market",
        headerName: "Market",
        // minWidth: 120,
        resizable: true,
        sortable: true,
        // cellRenderer : monthRenderer
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "Unit",
        headerName: "Unit",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        width: "auto"
      }, {
        field: "Price",
        headerName: "Price",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        width: "auto"
      }, {
        field: "Addedon",
        headerName: "Added on",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: "agDateColumnFilter",
        filterParams: filterParams
      }, {
        field: "Action",
        headerName: "Actions",
        minWidth: 100,
        resizable: true,
        sortable: true,
        cellRenderer: _utils_StatusRenderer__WEBPACK_IMPORTED_MODULE_0__["ActionRenderer"]
      }];
      var SoilAnalysisColumns = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        width: 130,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return "STR" + data.value;
        }
      }, {
        field: "attributes.Farmer.data.attributes.Name",
        headerName: "Farmer Name",
        // minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.state.data.attributes.Name",
        headerName: "State",
        // minWidth: 120,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.Name",
        headerName: "LGA",
        // minWidth: 120,
        resizable: true,
        sortable: true,
        // cellRenderer : monthRenderer
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.area.data.attributes.Name",
        headerName: "Area",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        width: "auto"
      }, {
        field: "attributes.nutrient",
        headerName: "Testing for",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: "agDateColumnFilter",
        filterParams: filterParams
      }, {
        field: "attributes.Status",
        headerName: "Status",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        width: "auto",
        cellRenderer: function cellRenderer(data) {
          return data.value.replaceAll("_", " ");
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Requested on",
        sortable: true,
        minWidth: 150,
        resizable: true,
        filter: "agDateColumnFilter",
        filterParams: filterParams,
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }];

      function dateConverter(date) {
        if (date) {
          return new Date(date);
        } else {
          return "No data";
        }
      }

      function dateConverterMin(date) {
        if (date) {
          return new Date(date).toDateString();
        } else {
          return "No data";
        }
      }

      var StateMasterColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "State",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var LGAMasterColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "LGA",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.state.data.attributes.Name",
        headerName: "State",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var AreaMasterColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "Area",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.PostalCode",
        headerName: "Postal Code",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.Name",
        headerName: "LGA",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.lga.data.attributes.state.data.attributes.Name",
        headerName: "State",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var VillageMasterColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "Village",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.area.data.attributes.Name",
        headerName: "Area",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.area.data.attributes.lga.data.attributes.Name",
        headerName: "LGA",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.area.data.attributes.lga.data.attributes.state.data.attributes.Name",
        headerName: "state",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var MarketMasterColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "Market",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.state.data.attributes.Name",
        headerName: "State",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var CropMasterColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Name",
        headerName: "Crop",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var CropPricesColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.crop.data.attributes.Name",
        headerName: "Crop",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.market.data.attributes.Name",
        headerName: "Market",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.state.data.attributes.Name",
        headerName: "State",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.Price",
        headerName: "Price",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.Unit",
        headerName: "Unit",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes",
        headerName: "Status",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          console.log(data.value, "cellrenderer");
          if (data.value.Rejected == true && data.value.publishedAt == null) return "Rejected";
          if (data.value.Rejected == false && data.value.publishedAt == null) return "Pending";
          if (data.value.Rejected == false && data.value.publishedAt !== null) return "Approved";
        }
      }, {
        field: "attributes.user.data.attributes.Name",
        headerName: "Created by",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Created at",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }, {
        field: "attributes.publishedAt",
        headerName: "Published at",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "Not Published";
        }
      }];
      var SmsColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        maxWidth: 100,
        sortable: true
      }, {
        field: "attributes.message",
        headerName: "Message",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Created at",
        resizable: true,
        maxWidth: 250,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }];
      var DeliveryReportColumn = [{
        valueGetter: "node.rowIndex + 1",
        headerName: "No.",
        resizable: true,
        maxWidth: 100,
        sortable: true
      }, {
        field: "recipient",
        headerName: "Recipient",
        minWidth: 150,
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "delivery_status",
        headerName: "Delivery status",
        resizable: true,
        maxWidth: 250,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }];
      var MarketplaceColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.marketplace_category.data.attributes.CategoryName",
        headerName: "Category",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.ItemName",
        headerName: "Title",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.AvailableQty",
        headerName: "Quantity",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.Price",
        headerName: "Price",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.Unit",
        headerName: "Unit",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.seller.data.attributes.Name",
        headerName: "Listed by",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Created at",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }];
      var IndoramaUpdatesColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.Title",
        headerName: "Title",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Created at",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }];
      var SurveysColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.SurveyTitle",
        headerName: "Survey Title",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Created at",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }];
      var ActivitiesColumn = [{
        field: "id",
        headerName: "ID",
        checkboxSelection: true,
        headerCheckboxSelection: true,
        resizable: true,
        sortable: true
      }, {
        field: "attributes.ActivityType",
        headerName: "Activity type",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value.replace(/([A-Z])/g, " $1").trim();
        }
      }, {
        field: "attributes.Date",
        headerName: "Date",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toDateString() : "";
        }
      }, {
        field: "attributes.Time",
        headerName: "Time",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.NoOfAttendees",
        headerName: "No. of attendees",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        }
      }, {
        field: "attributes.createdAt",
        headerName: "Created at",
        resizable: true,
        sortable: true,
        filter: "agTextColumnFilter",
        filterParams: {
          filterOptions: ["contains"],
          buttons: ["reset"]
        },
        cellRenderer: function cellRenderer(data) {
          return data.value ? new Date(data.value).toString() : "";
        }
      }];
      /***/
    },

    /***/
    "MYrn": function MYrn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionRenderer", function () {
        return ActionRenderer;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ActionRenderer = /*#__PURE__*/function () {
        function ActionRenderer() {
          _classCallCheck(this, ActionRenderer);
        }

        _createClass(ActionRenderer, [{
          key: "agInit",
          value: function agInit(params) {
            this.params = params;
          }
        }, {
          key: "invokeParentMethod",
          value: function invokeParentMethod() {
            var _a;

            this.params.context.componentParent.onRowClicked("Row: ".concat(this.params.node.rowIndex, ", Col: ").concat((_a = this.params.colDef) === null || _a === void 0 ? void 0 : _a.headerName));
          }
        }, {
          key: "refresh",
          value: function refresh() {
            return false;
          }
        }]);

        return ActionRenderer;
      }();

      ActionRenderer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: "<span\n    ><button\n      style=\"height: 20px\"\n      (click)=\"invokeParentMethod()\"\n      class=\"btn btn-info\"\n    >\n      Edit\n    </button></span\n  >",
        styles: ["\n      .btn {\n        line-height: 0.5;\n      }\n    "]
      })], ActionRenderer);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~views-activities-activities-module~views-best-crop-practices-best-crop-practices-module~view~11e679e2-es5.js.map