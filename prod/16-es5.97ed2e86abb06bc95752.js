!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,i){if(!t)return;if("string"==typeof t)return e(t,i);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return e(t,i)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"N8R/":function(e,a,r){"use strict";r.r(a),r.d(a,"CropPricesModule",function(){return I});var n=r("SVse"),s=r("s7LF"),c=r("FE24"),l=r("2ZVE"),d=r("iInd"),u=r("R7Hv"),b=r("7nfi"),p=r("AytR"),h=r("8Y7J"),g=r("EApP"),v=r("YFAK"),f=r("LqlI"),m=["cropPriceModal"],S=["approveModal"];function R(t,e){if(1&t){var i=h.Tb();h.Sb(0,"ul",52),h.Sb(1,"li",53),h.Sb(2,"a",54),h.Zb("click",function(){return h.vc(i),h.cc().toggleCropPrices("All")}),h.Dc(3,"All"),h.Rb(),h.Sb(4,"a",54),h.Zb("click",function(){return h.vc(i),h.cc().toggleCropPrices("Approvalpending")}),h.Dc(5,"Approval pending"),h.Rb(),h.Sb(6,"a",54),h.Zb("click",function(){return h.vc(i),h.cc().toggleCropPrices("Rejected")}),h.Dc(7,"Rejected"),h.Rb(),h.Rb(),h.Rb()}}function P(t,e){if(1&t&&(h.Sb(0,"option",55),h.Dc(1),h.Rb()),2&t){var i=e.$implicit;h.kc("value",i.id),h.Ab(1),h.Fc(" ",i.attributes.Name," ")}}function y(t,e){if(1&t&&(h.Sb(0,"option",55),h.Dc(1),h.Rb()),2&t){var i=e.$implicit;h.kc("value",i.id),h.Ab(1),h.Fc(" ",i.attributes.Name," ")}}function k(t,e){if(1&t&&(h.Sb(0,"option",55),h.Dc(1),h.Rb()),2&t){var i=e.$implicit;h.kc("value",i.id),h.Ab(1),h.Fc(" ",i.attributes.Name," ")}}function w(t,e){if(1&t&&h.Nb(0,"img",56),2&t){var i=h.cc();h.kc("src",i.imageUrl,h.xc)}}function C(t,e){1&t&&h.Nb(0,"span",57)}var A,D,j,M=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(A=function(){function e(o,a,r,n){i(this,e),this.dataservice=o,this.router=a,this.fb=r,this.toastr=n,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.disableNextButton=!1,this.disablePrevButton=!0,this.selectedList="All",this.listCheck=!1,this.publicationState="PREVIEW",this.toApprove=void 0,this.isRejected=void 0,this.columnDefs=[],this.States=[],this.Markets=[],this.Crops=[],this.pageSize=20,this.from=1,this.to=20,this.count=1,this.cropPriceForm=this.fb.group({crop:["",s.s.required],state:["",s.s.required],market:["",s.s.required],Price:["",s.s.required],Unit:["",s.s.required],Image:[""]}),this.rowData=[],this.selectedRows=[],this.selectedYear=(new Date).getFullYear(),this.years=[],this.filter={},this.file=null,this.columnDefs=t(b.d),this.rowSelection="single"}var a,r,n;return a=e,(r=[{key:"ngOnInit",value:function(){this.loading=!0,console.log(this.router),this.getCropPrices(),this.getCrops(),this.getMarkets(),this.getStates()}},{key:"getCropPrices",value:function(){var t=this;this.dataservice.getCropPrices(1,this.pageSize,this.publicationState,this.toApprove,this.isRejected).valueChanges.subscribe(function(e){var i,o,a,r,n,s;t.rowData=e.data.cropPrices.data,t.meta=e.data.cropPrices.meta,(null===(o=null===(i=t.meta)||void 0===i?void 0:i.pagination)||void 0===o?void 0:o.pageCount)<=1&&(t.disablePrevButton=!0,t.disableNextButton=!0),(null===(r=null===(a=t.meta)||void 0===a?void 0:a.pagination)||void 0===r?void 0:r.total)<t.pageSize&&(t.to=null===(s=null===(n=t.meta)||void 0===n?void 0:n.pagination)||void 0===s?void 0:s.total)})}},{key:"getCrops",value:function(){var t=this;this.dataservice.getCrops().valueChanges.subscribe(function(e){t.Crops=e.data.crops.data})}},{key:"loadNext",value:function(){var t,e,i,o,a=this;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(e=null===(t=this.meta)||void 0===t?void 0:t.pagination)||void 0===e?void 0:e.total)?null===(o=null===(i=this.meta)||void 0===i?void 0:i.pagination)||void 0===o?void 0:o.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.dataservice.getCropPrices(this.count,this.pageSize,this.publicationState,this.toApprove).valueChanges.subscribe(function(t){a.meta=t.data.cropPrices.meta,a.rowData=t.data.cropPrices.data})}},{key:"loadPrev",value:function(){var t=this;this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.dataservice.getCropPrices(this.count,this.pageSize,this.publicationState,this.toApprove).valueChanges.subscribe(function(e){t.meta=e.data.cropPrices.meta,t.rowData=e.data.cropPrices.data})}},{key:"getStates",value:function(){var t=this;this.dataservice.getStates().valueChanges.subscribe(function(e){console.log("getStates",e.data.states.data),t.States=e.data.states.data})}},{key:"getMarkets",value:function(t){var e=this;this.dataservice.getMarkets(t).valueChanges.subscribe(function(t){console.log("getMarkets",t.data.markets.data),e.Markets=t.data.markets.data})}},{key:"filterMarkets",value:function(t){this.getMarkets(t.target.value)}},{key:"toggleCropPrices",value:function(t){switch(t){case"Rejected":this.selectedList="Rejected",this.publicationState="PREVIEW",this.toApprove=null,this.isRejected=!0,this.getCropPrices();break;case"Approvalpending":this.selectedList="Pending",this.publicationState="PREVIEW",this.toApprove=null,this.isRejected=!1,this.getCropPrices();break;case"All":this.selectedList="All",this.publicationState="PREVIEW",this.toApprove=void 0,this.isRejected=void 0,this.getCropPrices()}}},{key:"onGridReady",value:function(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.sizeColumnsToFit()}},{key:"onRowClicked",value:function(t){console.log("row",t.data)}},{key:"onSelectionChanged",value:function(t){this.selectedRows=this.gridApi.getSelectedRows(),this.disableButton=!(this.selectedRows.length>0)}},{key:"onChange",value:function(t){this.file=[];for(var e=0;e<t.target.files.length;e++)this.file.push(t.target.files[e]);console.log(this.file)}},{key:"approveOrReject",value:function(t){var e=this,i=null;t||(i=new Date),this.dataservice.UpdateCropPrice(void 0,this.selectedRows[0].id,void 0,t,i).subscribe(function(t){console.log("response",t),t.data.updateCropPrice&&(e.toastr.success("Success!"),e.getCropPrices(),e.file=null,e.approveModal.hide(),e.gridApi.deselectAll(),e.btnLoading=!1)},function(t){e.toastr.error("Failed. Please check the fields!"),e.btnLoading=!1})}},{key:"downloadExcel",value:function(){var t=this;this.btnLoading=!0,this.dataservice.downloadCropPrices().subscribe(function(e){var i;e.body,console.log(e),200===e.status&&"Success"==e.body.status?(t.toastr.success(e.body.message),t.btnLoading=!1,window.open("".concat(p.a.apiUrl).concat(null===(i=null==e?void 0:e.body)||void 0===i?void 0:i.path),"_blank")):(t.btnLoading=!1,t.toastr.error(e.body.message))})}},{key:"openApproveModal",value:function(){this.approveModal.show()}},{key:"openModal",value:function(t){var e,i,o,a,r,n,c,l;this.imageUrl=null,this.cropPriceModal.show(),t?(this.cropPriceForm=this.fb.group({crop:[this.selectedRows[0].attributes.crop.data.id,s.s.required],state:[this.selectedRows[0].attributes.state.data.id,s.s.required],market:[this.selectedRows[0].attributes.market.data.id,s.s.required],Price:[this.selectedRows[0].attributes.Price,s.s.required],Unit:[this.selectedRows[0].attributes.Unit,s.s.required],Image:[null===(i=null===(e=this.selectedRows[0].attributes.Image)||void 0===e?void 0:e.data)||void 0===i?void 0:i.id,s.s.required]}),this.imageUrl=(null===(r=null===(a=null===(o=this.selectedRows[0].attributes.Image)||void 0===o?void 0:o.data)||void 0===a?void 0:a.attributes)||void 0===r?void 0:r.url)?"".concat(p.a.apiUrl)+(null===(l=null===(c=null===(n=this.selectedRows[0].attributes.Image)||void 0===n?void 0:n.data)||void 0===c?void 0:c.attributes)||void 0===l?void 0:l.url):null):(this.cropPriceForm=this.fb.group({crop:["",s.s.required],state:["",s.s.required],market:["",s.s.required],Price:["",s.s.required],Unit:["",s.s.required],Image:["",s.s.required]}),this.imageUrl=null)}},{key:"cropPriceSubmit",value:function(){var t=this;this.btnLoading=!0,console.log(this.cropPriceForm.value),this.disableButton?this.dataservice.upload(this.file).subscribe(function(e){var i;200==e.status?(console.log(e),t.dataservice.AddCropPrice(t.cropPriceForm.value,null===(i=e.body[0])||void 0===i?void 0:i.id).subscribe(function(e){e.data,console.log("response",e),e.data.createCropPrice&&(t.toastr.success("Success!"),t.getCropPrices(),t.file=null,t.cropPriceModal.hide(),t.cropPriceForm.reset(),t.gridApi.deselectAll()),t.btnLoading=!1},function(e){t.toastr.error("Failed. Please check the fields!"),t.btnLoading=!1})):t.toastr.error("Image failed to upload!")}):this.file?this.dataservice.upload(this.file).subscribe(function(e){var i;200==e.status&&(console.log(e),t.dataservice.UpdateCropPrice(t.cropPriceForm.value,t.selectedRows[0].id,null===(i=e.body[0])||void 0===i?void 0:i.id).subscribe(function(e){e.data,console.log("response",e),e.data.updateCropPrice&&(t.toastr.success("Success!"),t.getCropPrices(),t.file=null,t.cropPriceModal.hide(),t.cropPriceForm.reset(),t.gridApi.deselectAll(),t.btnLoading=!1)},function(e){t.toastr.error("Failed. Please check the fields!"),t.btnLoading=!1}))}):this.dataservice.UpdateCropPrice(this.cropPriceForm.value,this.selectedRows[0].id,null).subscribe(function(e){e.data,console.log("response",e),e.data.updateCropPrice&&(t.toastr.success("Success!"),t.getCropPrices(),t.file=null,t.cropPriceModal.hide(),t.cropPriceForm.reset(),t.gridApi.deselectAll(),t.btnLoading=!1)},function(e){t.toastr.error("Failed. Please check the fields!"),t.btnLoading=!1})}}])&&o(a.prototype,r),n&&o(a,n),e}(),A.\u0275fac=function(t){return new(t||A)(h.Mb(u.a),h.Mb(d.c),h.Mb(s.c),h.Mb(g.b))},A.\u0275cmp=h.Gb({type:A,selectors:[["ng-component"]],viewQuery:function(t,e){var i;1&t&&(h.Ic(m,1),h.Ic(S,1)),2&t&&(h.rc(i=h.ac())&&(e.cropPriceModal=i.first),h.rc(i=h.ac())&&(e.approveModal=i.first))},decls:97,vars:21,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-outline-primary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-warning",3,"disabled","click"],["type","button","data-toggle","modal",1,"btn","btn-info",3,"disabled","click"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"row"],[1,"col-12"],["dropdown","",1,"btn-group","float-right","mb-3"],["dropdownToggle","","type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],["class","dropdown-menu","role","menu",4,"dropdownMenu"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","rowSelection","selectionChanged","gridReady"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["cropPriceModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","state"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["for","market"],["id","market","required","","ngModel","","name","market","formControlName","market",1,"form-control"],["for","crop"],["id","crop","required","","ngModel","","name","crop","formControlName","crop",1,"form-control"],["for","name"],["type","text","id","Price","name","Price","formControlName","Price","placeholder","Enter price",1,"form-control"],["type","text","id","Unit","name","Unit","formControlName","Unit","placeholder","Enter unit",1,"form-control"],["for","Image"],["width","100","height","100","style","object-fit: cover",3,"src",4,"ngIf"],["type","file","id","Image","accept",".jpg,.jpeg,.JPEG,.png","name","Image","formControlName","Image","placeholder","Choose image",1,"form-control",3,"change"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["approveModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-primary",3,"click"],["role","menu",1,"dropdown-menu"],["role","menuitem"],[1,"dropdown-item",3,"click"],[3,"value"],["width","100","height","100",2,"object-fit","cover",3,"src"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){var i=h.Tb();h.Sb(0,"div",0),h.Sb(1,"div",1),h.Sb(2,"div",2),h.Sb(3,"h2"),h.Dc(4,"Crop Prices Home"),h.Rb(),h.Sb(5,"div"),h.Sb(6,"button",3),h.Zb("click",function(){return e.downloadExcel()}),h.Dc(7," Download excel "),h.Rb(),h.Sb(8,"button",4),h.Zb("click",function(){return e.openApproveModal()}),h.Dc(9," Approve / Reject "),h.Rb(),h.Sb(10,"button",5),h.Zb("click",function(){return e.openModal("Edit")}),h.Dc(11," Edit "),h.Rb(),h.Sb(12,"button",6),h.Zb("click",function(){return e.openModal()}),h.Dc(13," Add New Price "),h.Rb(),h.Rb(),h.Rb(),h.Sb(14,"div",7),h.Sb(15,"div",8),h.Sb(16,"div",9),h.Sb(17,"div",10),h.Sb(18,"button",11),h.Dc(19),h.Nb(20,"span",12),h.Rb(),h.Bc(21,R,8,0,"ul",13),h.Rb(),h.Rb(),h.Rb(),h.Sb(22,"div",8),h.Sb(23,"div",9),h.Sb(24,"ag-grid-angular",14,15),h.Zb("selectionChanged",function(t){return e.onSelectionChanged(t)})("gridReady",function(t){return e.onGridReady(t)}),h.Rb(),h.Sb(26,"span",16),h.Dc(27),h.Rb(),h.Sb(28,"button",17),h.Zb("click",function(){return e.loadNext()}),h.Dc(29," Next "),h.Rb(),h.Sb(30,"span",18),h.Dc(31),h.Rb(),h.Sb(32,"button",17),h.Zb("click",function(){return e.loadPrev()}),h.Dc(33," Prev "),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(34,"div",19,20),h.Sb(36,"div",21),h.Sb(37,"div",22),h.Sb(38,"div",23),h.Sb(39,"h4",24),h.Dc(40,"Add/Edit Crop Price"),h.Rb(),h.Sb(41,"button",25),h.Zb("click",function(){return h.vc(i),h.sc(35).hide()}),h.Sb(42,"span",26),h.Dc(43,"\xd7"),h.Rb(),h.Rb(),h.Rb(),h.Sb(44,"div",27),h.Sb(45,"form",28),h.Zb("ngSubmit",function(){return e.cropPriceSubmit()}),h.Sb(46,"div",29),h.Sb(47,"label",30),h.Dc(48,"State"),h.Rb(),h.Sb(49,"select",31),h.Zb("change",function(t){return e.filterMarkets(t)}),h.Sb(50,"option",32),h.Dc(51,"Choose..."),h.Rb(),h.Bc(52,P,2,2,"option",33),h.Rb(),h.Rb(),h.Sb(53,"div",29),h.Sb(54,"label",34),h.Dc(55,"Market"),h.Rb(),h.Sb(56,"select",35),h.Sb(57,"option",32),h.Dc(58,"Choose..."),h.Rb(),h.Bc(59,y,2,2,"option",33),h.Rb(),h.Rb(),h.Sb(60,"div",29),h.Sb(61,"label",36),h.Dc(62,"Crop"),h.Rb(),h.Sb(63,"select",37),h.Sb(64,"option",32),h.Dc(65,"Choose..."),h.Rb(),h.Bc(66,k,2,2,"option",33),h.Rb(),h.Rb(),h.Sb(67,"div",29),h.Sb(68,"label",38),h.Dc(69,"Price"),h.Rb(),h.Nb(70,"input",39),h.Rb(),h.Sb(71,"div",29),h.Sb(72,"label",38),h.Dc(73,"Unit"),h.Rb(),h.Nb(74,"input",40),h.Rb(),h.Sb(75,"div",29),h.Sb(76,"label",41),h.Dc(77,"Image"),h.Rb(),h.Sb(78,"div"),h.Bc(79,w,1,1,"img",42),h.Rb(),h.Sb(80,"input",43),h.Zb("change",function(t){return e.onChange(t)}),h.Rb(),h.Rb(),h.Sb(81,"button",44),h.Zb("click",function(){return h.vc(i),h.sc(35).hide()}),h.Dc(82," Close "),h.Rb(),h.Sb(83,"button",45),h.Bc(84,C,1,0,"span",46),h.Dc(85," Save changes "),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(86,"div",19,47),h.Sb(88,"div",48),h.Sb(89,"div",22),h.Sb(90,"div",49),h.Dc(91," Do you want to approve this record? "),h.Rb(),h.Sb(92,"div",50),h.Sb(93,"button",44),h.Zb("click",function(){return e.approveOrReject(!0)}),h.Dc(94," No! Reject. "),h.Rb(),h.Sb(95,"button",51),h.Zb("click",function(){return e.approveOrReject(!1)}),h.Dc(96," Yes! Approve. "),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb()}2&t&&(h.Ab(8),h.jc("disabled",e.disableButton),h.Ab(2),h.jc("disabled",e.disableButton),h.Ab(2),h.jc("disabled",!e.disableButton),h.Ab(7),h.Fc(" ",e.selectedList,""),h.Ab(5),h.jc("columnDefs",e.columnDefs)("rowData",e.rowData)("rowSelection",e.rowSelection),h.Ab(3),h.Hc("",e.from," to ",e.to," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.total,""),h.Ab(1),h.jc("disabled",e.disableNextButton),h.Ab(3),h.Gc("Page ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.page," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.pageCount,""),h.Ab(1),h.jc("disabled",e.disablePrevButton),h.Ab(13),h.jc("formGroup",e.cropPriceForm),h.Ab(7),h.jc("ngForOf",e.States),h.Ab(7),h.jc("ngForOf",e.Markets),h.Ab(7),h.jc("ngForOf",e.Crops),h.Ab(13),h.jc("ngIf",e.imageUrl),h.Ab(4),h.jc("disabled",e.btnLoading||!e.cropPriceForm.valid),h.Ab(1),h.jc("ngIf",e.btnLoading))},directives:[c.a,c.d,c.b,v.a,f.a,s.t,s.j,s.e,s.q,s.p,s.i,s.d,s.m,s.u,n.j,s.b,n.k],encapsulation:2}),A),data:{roles:"KP_CALLER",title:"Crop Prices"}}]}],F=((j=function t(){i(this,t)}).\u0275fac=function(t){return new(t||j)},j.\u0275mod=h.Kb({type:j}),j.\u0275inj=h.Jb({imports:[[d.g.forChild(M)],d.g]}),j),I=((D=function t(){i(this,t)}).\u0275fac=function(t){return new(t||D)},D.\u0275mod=h.Kb({type:D}),D.\u0275inj=h.Jb({imports:[[n.c,l.a,s.o,v.b.withComponents([]),F,c.c.forRoot(),f.b.forRoot(),s.f]]}),D)}}])}();