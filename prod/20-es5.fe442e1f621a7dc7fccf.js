!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,a){if(!e)return;if("string"==typeof e)return t(e,a);var s=Object.prototype.toString.call(e).slice(8,-1);"Object"===s&&e.constructor&&(s=e.constructor.name);if("Map"===s||"Set"===s)return Array.from(e);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return t(e,a)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,s=new Array(t);a<t;a++)s[a]=e[a];return s}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{NPE9:function(t,o,i){"use strict";i.r(o),i.d(o,"MastersModule",function(){return Y});var r=i("SVse"),l=i("s7LF"),n=i("FE24"),d=i("2ZVE"),c=i("iInd"),b=i("R7Hv"),u=i("MYrn"),g=i("7nfi"),h=i("AytR"),m=i("8Y7J"),v=i("EApP"),p=i("YFAK"),f=i("LqlI"),S=["stateModal"],R=["lgaModal"],k=["villageModal"],A=["marketModal"],C=["areaModal"],w=["cropModal"],D=["deleteModal"];function y(e,t){1&e&&m.Nb(0,"span",62)}function F(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function M(e,t){1&e&&m.Nb(0,"span",62)}function N(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function L(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function x(e,t){1&e&&m.Nb(0,"span",62)}function G(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function j(e,t){1&e&&m.Nb(0,"span",62)}function q(e,t){if(1&e&&m.Nb(0,"img",64),2&e){var a=m.cc();m.kc("src",a.imageUrl,m.xc)}}function B(e,t){1&e&&m.Nb(0,"span",62)}function V(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function P(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function z(e,t){if(1&e&&(m.Sb(0,"option",63),m.Dc(1),m.Rb()),2&e){var a=t.$implicit;m.kc("value",a.id),m.Ab(1),m.Fc(" ",a.attributes.Name," ")}}function E(e,t){1&e&&m.Nb(0,"span",62)}var I,Z,U,O=((I=function(){function t(e,s,o,i,r){a(this,t),this.dataservice=e,this.route=s,this.router=o,this.fb=i,this.toastr=r,this.columnDefs=[],this.loading=!0,this.disableButton=!0,this.btnLoading=!1,this.disableNextButton=!1,this.disablePrevButton=!0,this.count=1,this.Villages=[],this.LGA=[],this.Areas=[],this.States=[],this.Markets=[],this.Crops=[],this.file=null,this.pageSize=20,this.from=1,this.to=20,this.frameworkComponents={statusRenderer:new u.a},this.stateForm=this.fb.group({state:["",l.s.required]}),this.lgaForm=this.fb.group({lga:["",l.s.required],state:["",l.s.required]}),this.areaForm=this.fb.group({area:["",l.s.required],PostalCode:["",l.s.required],lga:["",l.s.required],state:["",l.s.required]}),this.marketForm=this.fb.group({market:["",l.s.required],state:["",l.s.required]}),this.cropForm=this.fb.group({crop:["",l.s.required],Image:["",l.s.required]}),this.villageForm=this.fb.group({village:["",l.s.required],area:["",l.s.required],lga:[""],state:[""]}),this.selectedYear=(new Date).getFullYear(),this.years=[],this.filter={},this.selectedRows=[],this.context={componentParent:this},this.rowSelection="single"}var o,i,r;return o=t,(i=[{key:"ngOnInit",value:function(){var t=this;switch(this.loading=!0,console.log(this.router.url),this.router.url){case"/masters/Villages":this.columnDefs=e(g.q),this.dataservice.getVillages(this.count,this.pageSize).valueChanges.subscribe(function(e){var a,s;console.log("getVillages",e.data.villages.data),t.rowData=e.data.villages.data,t.meta=e.data.villages.meta,(null===(s=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0)});break;case"/masters/Cities":this.columnDefs=e(g.b),this.dataservice.getAreas(this.count,this.pageSize).valueChanges.subscribe(function(e){var a,s;console.log("getAreas",e.data.areas.data),t.rowData=e.data.areas.data,t.meta=e.data.areas.meta,(null===(s=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0)});break;case"/masters/LGA":this.columnDefs=e(g.h),this.dataservice.getLGAs(this.count,this.pageSize).valueChanges.subscribe(function(e){var a,s;console.log("getLGAs",e.data.lgas.data),t.rowData=e.data.lgas.data,t.meta=e.data.lgas.meta,(null===(s=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0)});break;case"/masters/States":this.columnDefs=e(g.n),this.dataservice.getStates(this.count,this.pageSize).valueChanges.subscribe(function(e){var a,s;console.log("getStates",e.data.states.data),t.rowData=e.data.states.data,t.meta=e.data.states.meta,(null===(s=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0)});break;case"/masters/Markets":this.columnDefs=e(g.i),this.dataservice.getMarkets(this.count,this.pageSize).valueChanges.subscribe(function(e){var a,s;console.log("getMarkets",e.data.markets.data),t.rowData=e.data.markets.data,t.meta=e.data.markets.meta,(null===(s=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0)});break;case"/masters/Crops":this.columnDefs=e(g.c),this.dataservice.getCrops(this.count,this.pageSize).valueChanges.subscribe(function(e){var a,s;console.log("getCrops",e.data.crops.data),t.rowData=e.data.crops.data,t.meta=e.data.crops.meta,(null===(s=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0)})}this.getAreas(this.count,this.pageSize),this.getCrops(this.count,this.pageSize),this.getLGAs(this.count,this.pageSize),this.getMarkets(this.count,this.pageSize),this.getStates(this.count,this.pageSize),this.getVillages(this.count,this.pageSize)}},{key:"loadData",value:function(e,t){switch(this.router.url){case"/masters/Villages":this.getVillages(e,t);break;case"/masters/States":this.getStates(e,t);break;case"/masters/Cities":this.getAreas(e,t);break;case"/masters/LGA":this.getLGAs(e,t);break;case"/masters/Markets":this.getMarkets(e,t);break;case"/masters/Crops":this.getCrops(e,t)}}},{key:"loadNext",value:function(){var e,t,a,s;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(t=null===(e=this.meta)||void 0===e?void 0:e.pagination)||void 0===t?void 0:t.total)?null===(s=null===(a=this.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.loadData(this.count,this.pageSize)}},{key:"loadPrev",value:function(){this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.loadData(this.count,this.pageSize)}},{key:"downloadExcel",value:function(){var e=this,t="";switch(this.router.url){case"/masters/Villages":t="villages";break;case"/masters/States":t="states";break;case"/masters/Cities":t="cities";break;case"/masters/LGA":t="lgas";break;case"/masters/Markets":t="markets";break;case"/masters/Crops":t="crops"}this.btnLoading=!0,this.dataservice.downloadMaster(t).subscribe(function(t){var a;t.body,console.log(t),200===t.status&&"Success"==t.body.status?(e.toastr.success(t.body.message),e.btnLoading=!1,window.open("".concat(h.a.apiUrl).concat(null===(a=null==t?void 0:t.body)||void 0===a?void 0:a.path),"_blank")):(e.btnLoading=!1,e.toastr.error(t.body.message))})}},{key:"getCrops",value:function(e,t){var a=this;this.dataservice.getCrops(e,t).valueChanges.subscribe(function(e){console.log("getCrops2Function",e.data.crops.data),a.Crops=e.data.crops.data,"/masters/Crops"===a.router.url&&(a.rowData=e.data.crops.data,a.meta=e.data.crops.meta)})}},{key:"getStates",value:function(e,t){var a=this;this.dataservice.getStates(e,t).valueChanges.subscribe(function(e){console.log("getStates2Function",e.data.states.data),a.States=e.data.states.data,"/masters/States"===a.router.url&&(a.rowData=e.data.states.data,a.meta=e.data.states.meta)})}},{key:"getLGAs",value:function(e,t,a){var s=this;this.dataservice.getLGAs(e,t,a).valueChanges.subscribe(function(e){console.log("getLGAs2Function",e.data.lgas.data),s.LGA=e.data.lgas.data,"/masters/LGA"===s.router.url&&(s.rowData=e.data.lgas.data,s.meta=e.data.lgas.meta)})}},{key:"getAreas",value:function(e,t,a){var s=this;this.dataservice.getAreas(e,t,a).valueChanges.subscribe(function(e){console.log("getAreas2Function",e.data.areas.data),s.Areas=e.data.areas.data,"/masters/Cities"===s.router.url&&(s.rowData=e.data.areas.data,s.meta=e.data.areas.meta)})}},{key:"getVillages",value:function(e,t,a){var s=this;this.dataservice.getVillages(e,t,a).valueChanges.subscribe(function(e){console.log("getVillages2Function",e.data.villages.data),s.Villages=e.data.villages.data,"/masters/Villages"===s.router.url&&(s.rowData=e.data.villages.data,s.meta=e.data.villages.meta)})}},{key:"getMarkets",value:function(e,t){var a=this;this.dataservice.getMarkets(e,t).valueChanges.subscribe(function(e){console.log("getMarkets2Function",e.data.markets.data),a.Markets=e.data.markets.data,"/masters/Markets"===a.router.url&&(a.rowData=e.data.markets.data,a.meta=e.data.markets.meta)})}},{key:"onGridReady",value:function(e){this.gridApi=e.api,this.gridColumnApi=e.columnApi,this.gridApi.sizeColumnsToFit()}},{key:"onRowClicked",value:function(e){console.log("row",e),alert("Parent Component Method from "+e+"!")}},{key:"onSelectionChanged",value:function(e){this.selectedRows=this.gridApi.getSelectedRows(),this.disableButton=!(this.selectedRows.length>0),console.log(this.selectedRows,this.selectedRows[0].attributes.Name)}},{key:"openModal",value:function(e){var t,a,s,o,i,r,n,d;switch(this.router.url){case"/masters/Villages":this.villageModal.show(),this.villageForm=this.fb.group(e?{village:[this.selectedRows[0].attributes.Name,l.s.required],area:[Number(this.selectedRows[0].attributes.area.data.id),l.s.required],lga:[Number(this.selectedRows[0].attributes.area.data.attributes.lga.data.id)],state:[Number(this.selectedRows[0].attributes.area.data.attributes.lga.data.attributes.state.data.id)]}:{village:["",l.s.required],area:["",l.s.required],lga:[""],state:[""]});break;case"/masters/Cities":this.areaModal.show(),this.areaForm=this.fb.group(e?{area:[this.selectedRows[0].attributes.Name,l.s.required],PostalCode:[this.selectedRows[0].attributes.PostalCode,l.s.required],lga:[Number(this.selectedRows[0].attributes.lga.data.id),l.s.required],state:[Number(this.selectedRows[0].attributes.lga.data.attributes.state.data.id),l.s.required]}:{area:["",l.s.required],PostalCode:["",l.s.required],lga:["",l.s.required],state:["",l.s.required]});break;case"/masters/LGA":this.lgaModal.show(),this.lgaForm=this.fb.group(e?{lga:[this.selectedRows[0].attributes.Name,l.s.required],state:[Number(this.selectedRows[0].attributes.state.data.id),l.s.required]}:{lga:["",l.s.required],state:["",l.s.required]});break;case"/masters/States":this.stateModal.show(),this.stateForm=this.fb.group(e?{state:[this.selectedRows[0].attributes.Name,l.s.required]}:{state:["",l.s.required]});break;case"/masters/Markets":this.marketModal.show(),this.marketForm=this.fb.group(e?{market:[this.selectedRows[0].attributes.Name,l.s.required],state:[this.selectedRows[0].attributes.state.data.id,l.s.required]}:{market:["",l.s.required],state:["",l.s.required]});break;case"/masters/Crops":this.cropModal.show(),e?(this.cropForm=this.fb.group({crop:[this.selectedRows[0].attributes.Name,l.s.required],Image:[null===(a=null===(t=this.selectedRows[0].attributes.Image)||void 0===t?void 0:t.data)||void 0===a?void 0:a.id,l.s.required]}),this.imageUrl=(null===(i=null===(o=null===(s=this.selectedRows[0].attributes.Image)||void 0===s?void 0:s.data)||void 0===o?void 0:o.attributes)||void 0===i?void 0:i.url)?"".concat(h.a.apiUrl)+(null===(d=null===(n=null===(r=this.selectedRows[0].attributes.Image)||void 0===r?void 0:r.data)||void 0===n?void 0:n.attributes)||void 0===d?void 0:d.url):null):(this.cropForm=this.fb.group({crop:["",l.s.required],Image:["",l.s.required]}),this.imageUrl=null)}}},{key:"onChange",value:function(e){this.file=[];for(var t=0;t<e.target.files.length;t++)this.file.push(e.target.files[t]);console.log(this.file)}},{key:"filterLGA",value:function(e){this.getLGAs(this.count,this.pageSize,e.target.value)}},{key:"filterArea",value:function(e){this.getAreas(this.count,this.pageSize,e.target.value)}},{key:"stateSubmit",value:function(){var e=this;console.log(this.stateForm.value),this.disableButton?this.dataservice.AddStates(this.stateForm.value).subscribe(function(t){t.data,console.log("response",t),t.data.createState?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.stateModal.hide(),e.stateForm.reset(),e.dataservice.getStates(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getStates",t.data.states.data),e.rowData=t.data.states.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")},function(t){console.log(t),e.toastr.error("Failed.")}):this.dataservice.UpdateState(this.stateForm.value,this.selectedRows[0].id).subscribe(function(t){t.data,console.log("response",t),t.data.updateState?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.stateModal.hide(),e.stateForm.reset(),e.dataservice.getStates(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getStates",t.data.states.data),e.rowData=t.data.states.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")})}},{key:"lgaSubmit",value:function(){var e=this;console.log(this.lgaForm.value),this.disableButton?this.dataservice.AddLGA(this.lgaForm.value).subscribe(function(t){t.data,console.log("response",t),t.data.createLga?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.lgaModal.hide(),e.lgaForm.reset(),e.dataservice.getLGAs(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getLGAs",t.data.lgas.data),e.rowData=t.data.lgas.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")}):this.dataservice.UpdateLGA(this.lgaForm.value,this.selectedRows[0].id).subscribe(function(t){t.data,console.log("response",t),t.data.updateLga?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.lgaModal.hide(),e.lgaForm.reset(),e.dataservice.getLGAs(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getLGAs",t.data.lgas.data),e.rowData=t.data.lgas.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")})}},{key:"areaSubmit",value:function(){var e=this;console.log(this.areaForm.value),this.disableButton?this.dataservice.AddArea(this.areaForm.value).subscribe(function(t){t.data,console.log("response",t),t.data.createArea?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.areaModal.hide(),e.areaForm.reset(),e.dataservice.getAreas(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getAreas",t.data.areas.data),e.rowData=t.data.areas.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")}):this.dataservice.UpdateArea(this.areaForm.value,this.selectedRows[0].id).subscribe(function(t){t.data,console.log("response",t),t.data.updateArea?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.areaModal.hide(),e.areaForm.reset(),e.dataservice.getAreas(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getAreas",t.data.areas.data),e.rowData=t.data.areas.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")})}},{key:"marketSubmit",value:function(){var e=this;console.log(this.marketForm.value),this.disableButton?this.dataservice.AddMarket(this.marketForm.value).subscribe(function(t){t.data,console.log("response",t),t.data.createMarket?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.marketModal.hide(),e.marketForm.reset(),e.dataservice.getMarkets(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getMarkets",t.data.markets.data),e.rowData=t.data.markets.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")}):this.dataservice.UpdateMarket(this.marketForm.value,this.selectedRows[0].id).subscribe(function(t){t.data,console.log("response",t),t.data.updateMarket?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.marketModal.hide(),e.marketForm.reset(),e.dataservice.getMarkets(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getMarkets",t.data.markets.data),e.rowData=t.data.markets.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")})}},{key:"cropSubmit",value:function(){var e=this;this.btnLoading=!0,console.log(this.cropForm.value),this.disableButton?this.dataservice.upload(this.file).subscribe(function(t){var a;200==t.status&&(console.log(t),e.dataservice.AddCrop(e.cropForm.value,null===(a=t.body[0])||void 0===a?void 0:a.id).subscribe(function(t){t.data,console.log("response",t),t.data.createCrop?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.cropModal.hide(),e.cropForm.reset(),e.dataservice.getCrops(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getCrops",t.data.crops.data),e.rowData=t.data.crops.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")}))}):this.file?this.dataservice.upload(this.file).subscribe(function(t){var a;200==t.status&&(console.log(t),e.dataservice.UpdateCrop(e.cropForm.value,e.selectedRows[0].id,null===(a=t.body[0])||void 0===a?void 0:a.id).subscribe(function(t){t.data,console.log("response",t),t.data.updateCrop?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.cropModal.hide(),e.cropForm.reset(),e.btnLoading=!1,e.dataservice.getCrops(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getCrops",t.data.crops.data),e.rowData=t.data.crops.data})):"ValidationError"==t.errors[0].extensions.error.name?(e.toastr.error("Can't be added as the value already exists"),e.btnLoading=!1):(e.toastr.error("Failed. Please check the fields!"),e.btnLoading=!1)},function(t){e.btnLoading=!1}))}):this.dataservice.UpdateCrop(this.cropForm.value,this.selectedRows[0].id,null).subscribe(function(t){t.data,console.log("response",t),t.data.updateCrop?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.cropModal.hide(),e.cropForm.reset(),e.dataservice.getCrops(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getCrops",t.data.crops.data),e.rowData=t.data.crops.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")})}},{key:"vilageSubmit",value:function(){var e=this;console.log(this.villageForm.value),this.disableButton?this.dataservice.Addvillage(this.villageForm.value).subscribe(function(t){t.data,console.log("response",t),t.data.createVillage?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.villageModal.hide(),e.villageForm.reset(),e.dataservice.getVillages(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getVillages",t.data.villages.data),e.rowData=t.data.villages.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")}):this.dataservice.Updatevillage(this.villageForm.value,this.selectedRows[0].id).subscribe(function(t){t.data,console.log("response",t),t.data.updateVillage?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.villageModal.hide(),e.villageForm.reset(),e.dataservice.getVillages(e.count,e.pageSize).valueChanges.subscribe(function(t){console.log("getVillages",t.data.villages.data),e.rowData=t.data.villages.data})):e.toastr.error("ValidationError"==t.errors[0].extensions.error.name?"Can't be added as the value already exists":"Failed. Please check the fields!")})}},{key:"deleteRecord",value:function(){var e=this;switch(console.log(this.lgaForm.value),this.router.url){case"/masters/Villages":this.dataservice.deleteVillage(this.selectedRows[0].id).subscribe(function(t){console.log("response",t),t.data.deleteVillage?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.deleteModal.hide(),e.dataservice.getVillages(e.count,e.pageSize).valueChanges.subscribe(function(t){e.rowData=t.data.villages.data})):e.toastr.error("Failed!")});break;case"/masters/Cities":this.dataservice.deleteArea(this.selectedRows[0].id).subscribe(function(t){console.log("response",t),t.data.deleteArea?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.deleteModal.hide(),e.dataservice.getAreas(e.count,e.pageSize).valueChanges.subscribe(function(t){e.rowData=t.data.areas.data})):e.toastr.error("Failed!")});break;case"/masters/LGA":this.dataservice.deleteLGA(this.selectedRows[0].id).subscribe(function(t){console.log("response",t),t.data.deleteLga?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.deleteModal.hide(),e.dataservice.getLGAs(e.count,e.pageSize).valueChanges.subscribe(function(t){e.rowData=t.data.lgas.data})):e.toastr.error("Failed!")});break;case"/masters/States":this.dataservice.deleteState(this.selectedRows[0].id).subscribe(function(t){console.log("response",t),t.data.deleteState?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.deleteModal.hide(),e.dataservice.getStates(e.count,e.pageSize).valueChanges.subscribe(function(t){e.rowData=t.data.states.data})):e.toastr.error("Failed!")});break;case"/masters/Markets":this.dataservice.deleteMarket(this.selectedRows[0].id).subscribe(function(t){console.log("response",t),t.data.deleteMarket?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.deleteModal.hide(),e.dataservice.getMarkets(e.count,e.pageSize).valueChanges.subscribe(function(t){e.rowData=t.data.markets.data})):e.toastr.error("Failed!")});break;case"/masters/Crops":this.dataservice.deleteCrop(this.selectedRows[0].id).subscribe(function(t){console.log("response",t),t.data.deleteCrop?(e.toastr.success("Success!"),e.gridApi.deselectAll(),e.deleteModal.hide(),e.dataservice.getCrops(e.count,e.pageSize).valueChanges.subscribe(function(t){e.rowData=t.data.crops.data})):e.toastr.error("Failed!")})}}}])&&s(o.prototype,i),r&&s(o,r),t}()).\u0275fac=function(e){return new(e||I)(m.Mb(b.a),m.Mb(c.a),m.Mb(c.c),m.Mb(l.c),m.Mb(v.b))},I.\u0275cmp=m.Gb({type:I,selectors:[["ng-component"]],viewQuery:function(e,t){var a;1&e&&(m.Ic(S,1),m.Ic(R,1),m.Ic(k,1),m.Ic(A,1),m.Ic(C,1),m.Ic(w,1),m.Ic(D,1)),2&e&&(m.rc(a=m.ac())&&(t.stateModal=a.first),m.rc(a=m.ac())&&(t.lgaModal=a.first),m.rc(a=m.ac())&&(t.villageModal=a.first),m.rc(a=m.ac())&&(t.marketModal=a.first),m.rc(a=m.ac())&&(t.areaModal=a.first),m.rc(a=m.ac())&&(t.cropModal=a.first),m.rc(a=m.ac())&&(t.deleteModal=a.first))},decls:223,vars:44,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-outline-primary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-danger",3,"disabled","click"],["type","button","data-toggle","modal",1,"btn","btn-info",3,"disabled","click"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"row"],[1,"col-12"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","context","pagination","rowSelection","frameworkComponents","selectionChanged","gridReady"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["stateModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","state","name","state","formControlName","state","placeholder","Enter State Name",1,"form-control"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["lgaModal","bs-modal"],["for","lga"],["type","text","id","lga","name","lga","formControlName","lga","placeholder","Enter LGA Name",1,"form-control"],["for","state"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["areaModal","bs-modal"],["for","area"],["type","text","id","area","name","area","formControlName","area","placeholder","Enter City Name",1,"form-control"],["type","text","id","PostalCode","name","PostalCode","formControlName","PostalCode","placeholder","Enter Postal Code",1,"form-control"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["id","lga","required","","ngModel","","name","lga","formControlName","lga",1,"form-control"],["marketModal","bs-modal"],["for","market"],["type","text","id","market","name","market","formControlName","market","placeholder","Enter Market Name",1,"form-control"],["cropModal","bs-modal"],["type","text","id","crop","name","crop","formControlName","crop","placeholder","Enter Crop Name",1,"form-control"],["for","Image"],["width","100","height","100","style","object-fit: cover",3,"src",4,"ngIf"],["type","file","id","Image","accept",".jpg,.jpeg,.JPEG,.png","name","Image","formControlName","Image","placeholder","Choose image",1,"form-control",3,"change"],["villageModal","bs-modal"],["type","text","id","village","name","village","formControlName","village","placeholder","Enter Village Name",1,"form-control"],["id","state","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["id","lga","ngModel","","name","lga","formControlName","lga",1,"form-control",3,"change"],["id","area","ngModel","","name","area","formControlName","area",1,"form-control"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-primary",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[3,"value"],["width","100","height","100",2,"object-fit","cover",3,"src"]],template:function(e,t){if(1&e){var a=m.Tb();m.Sb(0,"div",0),m.Sb(1,"div",1),m.Sb(2,"div",2),m.Sb(3,"h2"),m.Dc(4),m.Rb(),m.Sb(5,"div"),m.Sb(6,"button",3),m.Zb("click",function(){return t.downloadExcel()}),m.Dc(7," Download excel "),m.Rb(),m.Sb(8,"button",4),m.Zb("click",function(){return m.vc(a),m.sc(213).show()}),m.Dc(9," Delete "),m.Rb(),m.Sb(10,"button",5),m.Zb("click",function(){return t.openModal("Edit")}),m.Dc(11," Edit "),m.Rb(),m.Sb(12,"button",6),m.Zb("click",function(){return t.openModal()}),m.Dc(13),m.Rb(),m.Rb(),m.Rb(),m.Sb(14,"div",7),m.Sb(15,"div",8),m.Sb(16,"div",9),m.Sb(17,"ag-grid-angular",10,11),m.Zb("selectionChanged",function(e){return t.onSelectionChanged(e)})("gridReady",function(e){return t.onGridReady(e)}),m.Rb(),m.Sb(19,"span",12),m.Dc(20),m.Rb(),m.Sb(21,"button",13),m.Zb("click",function(){return t.loadNext()}),m.Dc(22," Next "),m.Rb(),m.Sb(23,"span",14),m.Dc(24),m.Rb(),m.Sb(25,"button",13),m.Zb("click",function(){return t.loadPrev()}),m.Dc(26," Prev "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(27,"div",15,16),m.Sb(29,"div",17),m.Sb(30,"div",18),m.Sb(31,"div",19),m.Sb(32,"h4",20),m.Dc(33,"Add/Edit State"),m.Rb(),m.Sb(34,"button",21),m.Zb("click",function(){return m.vc(a),m.sc(28).hide()}),m.Sb(35,"span",22),m.Dc(36,"\xd7"),m.Rb(),m.Rb(),m.Rb(),m.Sb(37,"div",23),m.Sb(38,"form",24),m.Zb("ngSubmit",function(){return t.stateSubmit()}),m.Sb(39,"div",25),m.Sb(40,"label",26),m.Dc(41,"State"),m.Rb(),m.Nb(42,"input",27),m.Rb(),m.Sb(43,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(28).hide()}),m.Dc(44," Close "),m.Rb(),m.Sb(45,"button",29),m.Bc(46,y,1,0,"span",30),m.Dc(47," Save changes "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(48,"div",15,31),m.Sb(50,"div",17),m.Sb(51,"div",18),m.Sb(52,"div",19),m.Sb(53,"h4",20),m.Dc(54,"Add/Edit LGA"),m.Rb(),m.Sb(55,"button",21),m.Zb("click",function(){return m.vc(a),m.sc(49).hide()}),m.Sb(56,"span",22),m.Dc(57,"\xd7"),m.Rb(),m.Rb(),m.Rb(),m.Sb(58,"div",23),m.Sb(59,"form",24),m.Zb("ngSubmit",function(){return t.lgaSubmit()}),m.Sb(60,"div",25),m.Sb(61,"label",32),m.Dc(62,"LGA"),m.Rb(),m.Nb(63,"input",33),m.Rb(),m.Sb(64,"div",25),m.Sb(65,"label",34),m.Dc(66,"State"),m.Rb(),m.Sb(67,"select",35),m.Sb(68,"option",36),m.Dc(69,"Choose..."),m.Rb(),m.Bc(70,F,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(71,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(49).hide()}),m.Dc(72," Close "),m.Rb(),m.Sb(73,"button",29),m.Bc(74,M,1,0,"span",30),m.Dc(75," Save changes "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(76,"div",15,38),m.Sb(78,"div",17),m.Sb(79,"div",18),m.Sb(80,"div",19),m.Sb(81,"h4",20),m.Dc(82,"Add/Edit City"),m.Rb(),m.Sb(83,"button",21),m.Zb("click",function(){return m.vc(a),m.sc(77).hide()}),m.Sb(84,"span",22),m.Dc(85,"\xd7"),m.Rb(),m.Rb(),m.Rb(),m.Sb(86,"div",23),m.Sb(87,"form",24),m.Zb("ngSubmit",function(){return t.areaSubmit()}),m.Sb(88,"div",25),m.Sb(89,"label",39),m.Dc(90,"City Name"),m.Rb(),m.Nb(91,"input",40),m.Rb(),m.Sb(92,"div",25),m.Sb(93,"label",39),m.Dc(94,"Postal code"),m.Rb(),m.Nb(95,"input",41),m.Rb(),m.Sb(96,"div",25),m.Sb(97,"label",34),m.Dc(98,"State"),m.Rb(),m.Sb(99,"select",42),m.Zb("change",function(e){return t.filterLGA(e)}),m.Sb(100,"option",36),m.Dc(101,"Choose..."),m.Rb(),m.Bc(102,N,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(103,"div",25),m.Sb(104,"label",32),m.Dc(105,"LGA"),m.Rb(),m.Sb(106,"select",43),m.Sb(107,"option",36),m.Dc(108,"Choose..."),m.Rb(),m.Bc(109,L,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(110,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(77).hide()}),m.Dc(111," Close "),m.Rb(),m.Sb(112,"button",29),m.Bc(113,x,1,0,"span",30),m.Dc(114," Save changes "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(115,"div",15,44),m.Sb(117,"div",17),m.Sb(118,"div",18),m.Sb(119,"div",19),m.Sb(120,"h4",20),m.Dc(121,"Add/Edit Market"),m.Rb(),m.Sb(122,"button",21),m.Zb("click",function(){return m.vc(a),m.sc(116).hide()}),m.Sb(123,"span",22),m.Dc(124,"\xd7"),m.Rb(),m.Rb(),m.Rb(),m.Sb(125,"div",23),m.Sb(126,"form",24),m.Zb("ngSubmit",function(){return t.marketSubmit()}),m.Sb(127,"div",25),m.Sb(128,"label",45),m.Dc(129,"Market"),m.Rb(),m.Nb(130,"input",46),m.Rb(),m.Sb(131,"div",25),m.Sb(132,"label",34),m.Dc(133,"State"),m.Rb(),m.Sb(134,"select",35),m.Sb(135,"option",36),m.Dc(136,"Choose..."),m.Rb(),m.Bc(137,G,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(138,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(116).hide()}),m.Dc(139," Close "),m.Rb(),m.Sb(140,"button",29),m.Bc(141,j,1,0,"span",30),m.Dc(142," Save changes "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(143,"div",15,47),m.Sb(145,"div",17),m.Sb(146,"div",18),m.Sb(147,"div",19),m.Sb(148,"h4",20),m.Dc(149,"Add/Edit Crop"),m.Rb(),m.Sb(150,"button",21),m.Zb("click",function(){return m.vc(a),m.sc(144).hide()}),m.Sb(151,"span",22),m.Dc(152,"\xd7"),m.Rb(),m.Rb(),m.Rb(),m.Sb(153,"div",23),m.Sb(154,"form",24),m.Zb("ngSubmit",function(){return t.cropSubmit()}),m.Sb(155,"div",25),m.Sb(156,"label",26),m.Dc(157,"Crop"),m.Rb(),m.Nb(158,"input",48),m.Rb(),m.Sb(159,"div",25),m.Sb(160,"label",49),m.Dc(161,"Image"),m.Rb(),m.Sb(162,"div"),m.Bc(163,q,1,1,"img",50),m.Rb(),m.Sb(164,"input",51),m.Zb("change",function(e){return t.onChange(e)}),m.Rb(),m.Rb(),m.Sb(165,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(144).hide()}),m.Dc(166," Close "),m.Rb(),m.Sb(167,"button",29),m.Bc(168,B,1,0,"span",30),m.Dc(169," Save changes "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(170,"div",15,52),m.Sb(172,"div",17),m.Sb(173,"div",18),m.Sb(174,"div",19),m.Sb(175,"h4",20),m.Dc(176,"Add/Edit Village"),m.Rb(),m.Sb(177,"button",21),m.Zb("click",function(){return m.vc(a),m.sc(171).hide()}),m.Sb(178,"span",22),m.Dc(179,"\xd7"),m.Rb(),m.Rb(),m.Rb(),m.Sb(180,"div",23),m.Sb(181,"form",24),m.Zb("ngSubmit",function(){return t.vilageSubmit()}),m.Sb(182,"div",25),m.Sb(183,"label",45),m.Dc(184,"Village Name"),m.Rb(),m.Nb(185,"input",53),m.Rb(),m.Sb(186,"div",25),m.Sb(187,"label",34),m.Dc(188,"State"),m.Rb(),m.Sb(189,"select",54),m.Zb("change",function(e){return t.filterLGA(e)}),m.Sb(190,"option",36),m.Dc(191,"Choose..."),m.Rb(),m.Bc(192,V,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(193,"div",25),m.Sb(194,"label",32),m.Dc(195,"LGA"),m.Rb(),m.Sb(196,"select",55),m.Zb("change",function(e){return t.filterArea(e)}),m.Sb(197,"option",36),m.Dc(198,"Choose..."),m.Rb(),m.Bc(199,P,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(200,"div",25),m.Sb(201,"label",39),m.Dc(202,"City"),m.Rb(),m.Sb(203,"select",56),m.Sb(204,"option",36),m.Dc(205,"Choose..."),m.Rb(),m.Bc(206,z,2,2,"option",37),m.Rb(),m.Rb(),m.Sb(207,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(171).hide()}),m.Dc(208," Close "),m.Rb(),m.Sb(209,"button",29),m.Bc(210,E,1,0,"span",30),m.Dc(211," Save changes "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Sb(212,"div",15,57),m.Sb(214,"div",58),m.Sb(215,"div",18),m.Sb(216,"div",59),m.Dc(217," Do you want to delete this record? "),m.Rb(),m.Sb(218,"div",60),m.Sb(219,"button",28),m.Zb("click",function(){return m.vc(a),m.sc(213).hide()}),m.Dc(220," No! Cancel. "),m.Rb(),m.Sb(221,"button",61),m.Zb("click",function(){return t.deleteRecord()}),m.Dc(222," Yes! Delete. "),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb()}2&e&&(m.Ab(4),m.Fc("",t.route.snapshot.data.title," Master"),m.Ab(4),m.jc("disabled",t.disableButton),m.Ab(2),m.jc("disabled",t.disableButton),m.Ab(2),m.jc("disabled",!t.disableButton),m.Ab(1),m.Fc(" Add New ",t.route.snapshot.data.title," "),m.Ab(4),m.jc("columnDefs",t.columnDefs)("rowData",t.rowData)("context",t.context)("pagination",!1)("rowSelection",t.rowSelection)("frameworkComponents",t.frameworkComponents),m.Ab(3),m.Hc("",t.from," to ",t.to," of ",null==t.meta||null==t.meta.pagination?null:t.meta.pagination.total,""),m.Ab(1),m.jc("disabled",t.disableNextButton),m.Ab(3),m.Gc("Page ",null==t.meta||null==t.meta.pagination?null:t.meta.pagination.page," of ",null==t.meta||null==t.meta.pagination?null:t.meta.pagination.pageCount,""),m.Ab(1),m.jc("disabled",t.disablePrevButton),m.Ab(13),m.jc("formGroup",t.stateForm),m.Ab(7),m.jc("disabled",t.btnLoading||!t.stateForm.valid),m.Ab(1),m.jc("ngIf",t.btnLoading),m.Ab(13),m.jc("formGroup",t.lgaForm),m.Ab(11),m.jc("ngForOf",t.States),m.Ab(3),m.jc("disabled",t.btnLoading||!t.lgaForm.valid),m.Ab(1),m.jc("ngIf",t.btnLoading),m.Ab(13),m.jc("formGroup",t.areaForm),m.Ab(15),m.jc("ngForOf",t.States),m.Ab(7),m.jc("ngForOf",t.LGA),m.Ab(3),m.jc("disabled",t.btnLoading||!t.areaForm.valid),m.Ab(1),m.jc("ngIf",t.btnLoading),m.Ab(13),m.jc("formGroup",t.marketForm),m.Ab(11),m.jc("ngForOf",t.States),m.Ab(3),m.jc("disabled",t.btnLoading||!t.marketForm.valid),m.Ab(1),m.jc("ngIf",t.btnLoading),m.Ab(13),m.jc("formGroup",t.cropForm),m.Ab(9),m.jc("ngIf",t.imageUrl),m.Ab(4),m.jc("disabled",t.btnLoading||!t.cropForm.valid),m.Ab(1),m.jc("ngIf",t.btnLoading),m.Ab(13),m.jc("formGroup",t.villageForm),m.Ab(11),m.jc("ngForOf",t.States),m.Ab(7),m.jc("ngForOf",t.LGA),m.Ab(7),m.jc("ngForOf",t.Areas),m.Ab(3),m.jc("disabled",t.btnLoading||!t.villageForm.valid),m.Ab(1),m.jc("ngIf",t.btnLoading))},directives:[p.a,f.a,l.t,l.j,l.e,l.b,l.i,l.d,r.k,l.q,l.p,l.m,l.u,r.j],encapsulation:2}),I),$=[{path:"",children:[{path:"",redirectTo:"masters"},{path:"States",component:O,data:{roles:"States",title:"States"}},{path:"LGA",component:O,data:{roles:"LGA",title:"LGA"}},{path:"Cities",component:O,data:{roles:"Cities",title:"Cities"}},{path:"Villages",component:O,data:{roles:"Villages",title:"Villages"}},{path:"Markets",component:O,data:{roles:"Markets",title:"Markets"}},{path:"Crops",component:O,data:{roles:"Crops",title:"Crops"}}]}],J=((U=function e(){a(this,e)}).\u0275fac=function(e){return new(e||U)},U.\u0275mod=m.Kb({type:U}),U.\u0275inj=m.Jb({imports:[[c.g.forChild($)],c.g]}),U),Y=((Z=function e(){a(this,e)}).\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=m.Kb({type:Z}),Z.\u0275inj=m.Jb({imports:[[r.c,d.a,l.o,p.b.withComponents([]),J,n.c.forRoot(),f.b.forRoot(),l.f]]}),Z)}}])}();