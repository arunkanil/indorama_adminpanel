(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{eFNz:function(t,e,i){"use strict";i.r(e),i.d(e,"IndoramaUpdatesModule",function(){return y});var a=i("SVse"),o=i("s7LF"),s=i("FE24"),d=i("2ZVE"),n=i("YFAK"),l=i("LqlI"),r=i("iInd"),c=i("R7Hv"),b=i("7nfi"),h=i("AytR"),u=i("8Y7J"),p=i("EApP");const g=["cropPriceModal"],m=["detailsModal"],v=["deleteModal"];function f(t,e){if(1&t&&u.Nb(0,"img",40),2&t){const t=u.cc();u.kc("src",t.imageUrl,u.xc)}}function w(t,e){1&t&&u.Nb(0,"span",41)}const R=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(()=>{class t{constructor(t,e,i,a){this.dataservice=t,this.router=e,this.fb=i,this.toastr=a,this.baseURL=h.a.apiUrl,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.disableNextButton=!1,this.disablePrevButton=!0,this.pageSize=20,this.from=1,this.to=20,this.count=1,this.orders={},this.columnDefs=[],this.newsForm=this.fb.group({Title:["",o.s.required],Body:["",o.s.required],Image:[""]}),this.rowData=[],this.selectedRows=[],this.selectedYear=(new Date).getFullYear(),this.years=[],this.filter={},this.file=null,this.columnDefs=[...b.g],this.rowSelection="single"}ngOnInit(){this.loading=!0,console.log(this.router),this.getUpdates(void 0,1,this.pageSize)}getUpdates(t,e,i){this.dataservice.getIndoramaUpdates(t,e,i).valueChanges.subscribe(t=>{var e,i,a,o,s,d;this.rowData=t.data.newsAndUpdates.data,this.meta=t.data.newsAndUpdates.meta,(null===(i=null===(e=this.meta)||void 0===e?void 0:e.pagination)||void 0===i?void 0:i.pageCount)<=1&&(this.disablePrevButton=!0,this.disableNextButton=!0),(null===(o=null===(a=this.meta)||void 0===a?void 0:a.pagination)||void 0===o?void 0:o.total)<this.pageSize&&(this.to=null===(d=null===(s=this.meta)||void 0===s?void 0:s.pagination)||void 0===d?void 0:d.total)})}loadNext(){var t,e,i,a;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(e=null===(t=this.meta)||void 0===t?void 0:t.pagination)||void 0===e?void 0:e.total)?null===(a=null===(i=this.meta)||void 0===i?void 0:i.pagination)||void 0===a?void 0:a.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.dataservice.getIndoramaUpdates(void 0,this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.newsAndUpdates.meta,this.rowData=t.data.newsAndUpdates.data})}loadPrev(){this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.dataservice.getIndoramaUpdates(void 0,this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.newsAndUpdates.meta,this.rowData=t.data.newsAndUpdates.data})}onGridReady(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.sizeColumnsToFit()}onRowClicked(t){console.log("row",t.data)}onSelectionChanged(t){this.selectedRows=this.gridApi.getSelectedRows(),this.disableButton=!(this.selectedRows.length>0)}onChange(t){this.file=[];for(var e=0;e<t.target.files.length;e++)this.file.push(t.target.files[e])}openModal(t){var e,i,a,s,d,n,l,r;this.imageUrl=null,this.cropPriceModal.show(),t?(this.newsForm=this.fb.group({Title:[this.selectedRows[0].attributes.Title,o.s.required],Body:[this.selectedRows[0].attributes.Body,o.s.required],Image:[null===(i=null===(e=this.selectedRows[0].attributes.Images)||void 0===e?void 0:e.data[0])||void 0===i?void 0:i.id,o.s.required]}),this.imageUrl=(null===(d=null===(s=null===(a=this.selectedRows[0].attributes.Images)||void 0===a?void 0:a.data[0])||void 0===s?void 0:s.attributes)||void 0===d?void 0:d.url)?`${this.baseURL}`+(null===(r=null===(l=null===(n=this.selectedRows[0].attributes.Images)||void 0===n?void 0:n.data[0])||void 0===l?void 0:l.attributes)||void 0===r?void 0:r.url):null):(this.newsForm=this.fb.group({Title:["",o.s.required],Body:["",o.s.required],Image:["",o.s.required]}),this.imageUrl=null)}deleteRecord(){let t={};this.dataservice.UpdateIndoramaUpdates({isDelete:!0},this.selectedRows[0].id,null).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateNewsAndUpdate?(this.toastr.success("Success!"),this.getUpdates(),this.file=null,this.deleteModal.hide(),this.gridApi.deselectAll()):this.toastr.error("Failed. Please check the fields!")})}cropPriceSubmit(){let t={};this.btnLoading=!0,console.log(this.newsForm.value),this.disableButton?this.dataservice.upload(this.file).subscribe(e=>{var i;200==e.status?(console.log(e),this.dataservice.AddIndoramaUpdates(this.newsForm.value,null===(i=e.body[0])||void 0===i?void 0:i.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.createNewsAndUpdate?(this.toastr.success("Success!"),this.file=null,this.cropPriceModal.hide(),this.newsForm.reset(),this.btnLoading=!1,this.getUpdates(),this.gridApi.deselectAll()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})):(this.toastr.error("Image failed to upload!"),this.btnLoading=!1)}):this.file?this.dataservice.upload(this.file).subscribe(e=>{var i;200==e.status&&(console.log(e),this.dataservice.UpdateIndoramaUpdates(this.newsForm.value,this.selectedRows[0].id,null===(i=e.body[0])||void 0===i?void 0:i.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateNewsAndUpdate?(this.toastr.success("Success!"),this.file=null,this.getUpdates(),this.btnLoading=!1,this.cropPriceModal.hide(),this.newsForm.reset(),this.gridApi.deselectAll()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)}))}):this.dataservice.UpdateIndoramaUpdates(this.newsForm.value,this.selectedRows[0].id,null).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateNewsAndUpdate?(this.toastr.success("Success!"),this.file=null,this.btnLoading=!1,this.cropPriceModal.hide(),this.newsForm.reset(),this.gridApi.deselectAll(),this.getUpdates()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(u.Mb(c.a),u.Mb(r.c),u.Mb(o.c),u.Mb(p.b))},t.\u0275cmp=u.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(u.Ic(g,1),u.Ic(m,1),u.Ic(v,1)),2&t){let t;u.rc(t=u.ac())&&(e.cropPriceModal=t.first),u.rc(t=u.ac())&&(e.detailsModal=t.first),u.rc(t=u.ac())&&(e.deleteModal=t.first)}},decls:67,vars:17,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-danger",3,"disabled","click"],["type","button","data-toggle","modal",1,"btn","btn-info",3,"disabled","click"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"row"],[1,"col-12"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","rowSelection","selectionChanged","gridReady"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["cropPriceModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","Title"],["type","text","id","Title","name","Title","formControlName","Title","placeholder","Enter title",1,"form-control"],["for","Body"],["id","Body","rows","5","name","Body","formControlName","Body","placeholder","Enter Body",1,"form-control"],["for","Image"],["width","100","height","100","style","object-fit: cover",3,"src",4,"ngIf"],["type","file","id","Image","accept",".jpg,.jpeg,.JPEG,.png","name","Image","formControlName","Image","placeholder","Choose image",1,"form-control",3,"change"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-primary",3,"click"],["width","100","height","100",2,"object-fit","cover",3,"src"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=u.Tb();u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"h2"),u.Dc(4,"Indorama Updates"),u.Rb(),u.Sb(5,"div"),u.Sb(6,"button",3),u.Zb("click",function(){return u.vc(t),u.sc(57).show()}),u.Dc(7," Delete "),u.Rb(),u.Sb(8,"button",4),u.Zb("click",function(){return e.openModal("Edit")}),u.Dc(9," Edit "),u.Rb(),u.Sb(10,"button",5),u.Zb("click",function(){return e.openModal()}),u.Dc(11," Add New Update "),u.Rb(),u.Rb(),u.Rb(),u.Sb(12,"div",6),u.Sb(13,"div",7),u.Sb(14,"div",8),u.Sb(15,"ag-grid-angular",9,10),u.Zb("selectionChanged",function(t){return e.onSelectionChanged(t)})("gridReady",function(t){return e.onGridReady(t)}),u.Rb(),u.Sb(17,"span",11),u.Dc(18),u.Rb(),u.Sb(19,"button",12),u.Zb("click",function(){return e.loadNext()}),u.Dc(20," Next "),u.Rb(),u.Sb(21,"span",13),u.Dc(22),u.Rb(),u.Sb(23,"button",12),u.Zb("click",function(){return e.loadPrev()}),u.Dc(24," Prev "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(25,"div",14,15),u.Sb(27,"div",16),u.Sb(28,"div",17),u.Sb(29,"div",18),u.Sb(30,"h4",19),u.Dc(31,"Add/Edit News"),u.Rb(),u.Sb(32,"button",20),u.Zb("click",function(){return u.vc(t),u.sc(26).hide()}),u.Sb(33,"span",21),u.Dc(34,"\xd7"),u.Rb(),u.Rb(),u.Rb(),u.Sb(35,"div",22),u.Sb(36,"form",23),u.Zb("ngSubmit",function(){return e.cropPriceSubmit()}),u.Sb(37,"div",24),u.Sb(38,"label",25),u.Dc(39,"Title"),u.Rb(),u.Nb(40,"input",26),u.Rb(),u.Sb(41,"div",24),u.Sb(42,"label",27),u.Dc(43,"Body"),u.Rb(),u.Nb(44,"textarea",28),u.Rb(),u.Sb(45,"div",24),u.Sb(46,"label",29),u.Dc(47,"Image"),u.Rb(),u.Sb(48,"div"),u.Bc(49,f,1,1,"img",30),u.Rb(),u.Sb(50,"input",31),u.Zb("change",function(t){return e.onChange(t)}),u.Rb(),u.Rb(),u.Sb(51,"button",32),u.Zb("click",function(){return u.vc(t),u.sc(26).hide()}),u.Dc(52," Close "),u.Rb(),u.Sb(53,"button",33),u.Bc(54,w,1,0,"span",34),u.Dc(55," Save changes "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(56,"div",14,35),u.Sb(58,"div",36),u.Sb(59,"div",17),u.Sb(60,"div",37),u.Dc(61," Do you want to delete this record? "),u.Rb(),u.Sb(62,"div",38),u.Sb(63,"button",32),u.Zb("click",function(){return u.vc(t),u.sc(57).hide()}),u.Dc(64," No! Cancel. "),u.Rb(),u.Sb(65,"button",39),u.Zb("click",function(){return e.deleteRecord()}),u.Dc(66," Yes! Delete. "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}2&t&&(u.Ab(6),u.jc("disabled",e.disableButton),u.Ab(2),u.jc("disabled",e.disableButton),u.Ab(2),u.jc("disabled",!e.disableButton),u.Ab(5),u.jc("columnDefs",e.columnDefs)("rowData",e.rowData)("rowSelection",e.rowSelection),u.Ab(3),u.Hc("",e.from," to ",e.to," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.total,""),u.Ab(1),u.jc("disabled",e.disableNextButton),u.Ab(3),u.Gc("Page ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.page," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.pageCount,""),u.Ab(1),u.jc("disabled",e.disablePrevButton),u.Ab(13),u.jc("formGroup",e.newsForm),u.Ab(13),u.jc("ngIf",e.imageUrl),u.Ab(4),u.jc("disabled",e.btnLoading||!e.newsForm.valid),u.Ab(1),u.jc("ngIf",e.btnLoading))},directives:[n.a,l.a,o.t,o.j,o.e,o.b,o.i,o.d,a.k],encapsulation:2}),t})(),data:{roles:"KP_CALLER",title:"Indorama Updates"}}]}];let S=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({imports:[[r.g.forChild(R)],r.g]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.Kb({type:t}),t.\u0275inj=u.Jb({imports:[[a.c,d.a,o.o,n.b.withComponents([]),S,s.c.forRoot(),l.b.forRoot(),o.f]]}),t})()}}]);