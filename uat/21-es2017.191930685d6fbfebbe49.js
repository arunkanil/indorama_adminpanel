(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{d3Ph:function(t,e,i){"use strict";i.r(e),i.d(e,"RetailersModule",function(){return x});var a=i("SVse"),l=i("s7LF"),s=i("FE24"),o=i("2ZVE"),r=i("iInd"),d=i("R7Hv"),n=i("7nfi"),b=i("8Y7J"),c=i("EApP"),u=i("YFAK"),g=i("LqlI");const m=["commentModal"],h=["detailsModal"];function v(t,e){if(1&t&&(b.Sb(0,"option",51),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function p(t,e){if(1&t&&(b.Sb(0,"option",51),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function R(t,e){if(1&t&&(b.Sb(0,"option",51),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function S(t,e){1&t&&b.Nb(0,"span",52)}let f=(()=>{class t{constructor(t,e,i,a){this.dataservice=t,this.router=e,this.fb=i,this.toastr=a,this.loading=!0,this.btnLoading=!1,this.disableNextButton=!1,this.disablePrevButton=!0,this.pageSize=20,this.from=1,this.to=20,this.count=1,this.columnDefs=[],this.commentForm=this.fb.group({UserType:["Retailer"],username:["",l.s.required],email:["nodata@email.com"],password:["",l.s.required],Name:["",l.s.required],Gender:["",l.s.required],Age:["",l.s.required],ContactNumber:["",l.s.required],lga:["",l.s.required],village:["",l.s.required],state:[""]}),this.rowData=[],this.Villages=[],this.LGA=[],this.Areas=[],this.States=[],this.selectedYear=(new Date).getFullYear(),this.years=[],this.filter={},this.columnDefs=[...n.k],this.rowSelection="single"}ngOnInit(){this.loading=!0,console.log(this.router),this.getRetailers(),this.getAreas(),this.getLGAs(),this.getStates(),this.getVillages()}getStates(){this.dataservice.getStates().valueChanges.subscribe(t=>{console.log("getStates",t.data.states.data),this.States=t.data.states.data})}getLGAs(t){this.dataservice.getLGAs(t).valueChanges.subscribe(t=>{console.log("getLGAs",t.data.lgas.data),this.LGA=t.data.lgas.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{console.log("getAreas",t.data.areas.data),this.Areas=t.data.areas.data})}getVillages(t){this.dataservice.getVillages(t).valueChanges.subscribe(t=>{console.log("getVillages",t.data.villages.data),this.Villages=t.data.villages.data})}getRetailers(){this.dataservice.getRetailers(1,this.pageSize).valueChanges.subscribe(t=>{var e,i,a,l,s,o;this.rowData=t.data.usersPermissionsUsers.data,this.meta=t.data.usersPermissionsUsers.meta,(null===(i=null===(e=this.meta)||void 0===e?void 0:e.pagination)||void 0===i?void 0:i.pageCount)<=1&&(this.disablePrevButton=!0,this.disableNextButton=!0),(null===(l=null===(a=this.meta)||void 0===a?void 0:a.pagination)||void 0===l?void 0:l.total)<this.pageSize&&(this.to=null===(o=null===(s=this.meta)||void 0===s?void 0:s.pagination)||void 0===o?void 0:o.total)})}loadNext(){var t,e,i,a;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(e=null===(t=this.meta)||void 0===t?void 0:t.pagination)||void 0===e?void 0:e.total)?null===(a=null===(i=this.meta)||void 0===i?void 0:i.pagination)||void 0===a?void 0:a.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.dataservice.getRetailers(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.usersPermissionsUsers.meta,this.rowData=t.data.usersPermissionsUsers.data})}loadPrev(){this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.dataservice.getRetailers(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.usersPermissionsUsers.meta,this.rowData=t.data.usersPermissionsUsers.data})}filterLGA(t){this.getLGAs(t.target.value)}filterVillage(t){this.getVillages(t.target.value)}onGridReady(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.sizeColumnsToFit()}onRowClicked(t){console.log("row",t.data)}onSelectionChanged(t){var e=this.gridApi.getSelectedRows();console.log(e,t),this.router.navigate(["/retailers/retailer_details",e[0].id],{state:{data:e}})}openModal(t){this.detailsModal.show()}formSubmit(){console.log(this.commentForm.value),this.btnLoading=!0;let t={};this.dataservice.createRetailer(this.commentForm.value).subscribe(e=>{t=e,console.log("response",e),e?(this.toastr.success("Retailer added successfully!"),this.btnLoading=!1,this.commentModal.hide(),this.getRetailers()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)},t=>{this.btnLoading=!1})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(d.a),b.Mb(r.c),b.Mb(l.c),b.Mb(c.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(b.Ic(m,1),b.Ic(h,1)),2&t){let t;b.rc(t=b.ac())&&(e.commentModal=t.first),b.rc(t=b.ac())&&(e.detailsModal=t.first)}},decls:102,vars:16,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"row"],[1,"col-12"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","rowSelection","gridReady","selectionChanged"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["commentModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"col"],[1,"form-group"],["for","Name"],["type","text","id","Name","name","Name","formControlName","Name","placeholder","Enter  Name",1,"form-control"],["for","username"],["type","text","id","username","name","username","formControlName","username","placeholder","Enter username",1,"form-control"],["for","password"],["type","password","id","password","name","password","formControlName","password","placeholder","Enter password",1,"form-control"],["for","ContactNumber"],["type","text","id","ContactNumber","name","ContactNumber","formControlName","ContactNumber","placeholder","Enter contact number",1,"form-control"],["for","state"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["for","lga"],["id","lga","required","","ngModel","","name","lga","formControlName","lga",1,"form-control",3,"change"],["for","village"],["id","village","required","","ngModel","","name","village","formControlName","village",1,"form-control"],["for","Gender"],["id","Gender","required","","ngModel","","name","Gender","formControlName","Gender",1,"form-control"],["value","Male"],["value","Female"],["for","Age"],["type","text","id","Age","name","Age","formControlName","Age","placeholder","Enter age",1,"form-control"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["detailsModal","bs-modal"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=b.Tb();b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"h2"),b.Dc(4,"Retailers"),b.Rb(),b.Sb(5,"button",3),b.Zb("click",function(){return b.vc(t),b.sc(21).show()}),b.Dc(6," Add New Retailer "),b.Rb(),b.Rb(),b.Sb(7,"div",4),b.Sb(8,"div",5),b.Sb(9,"div",6),b.Sb(10,"ag-grid-angular",7,8),b.Zb("gridReady",function(t){return e.onGridReady(t)})("selectionChanged",function(t){return e.onSelectionChanged(t)}),b.Rb(),b.Sb(12,"span",9),b.Dc(13),b.Rb(),b.Sb(14,"button",10),b.Zb("click",function(){return e.loadNext()}),b.Dc(15," Next "),b.Rb(),b.Sb(16,"span",11),b.Dc(17),b.Rb(),b.Sb(18,"button",10),b.Zb("click",function(){return e.loadPrev()}),b.Dc(19," Prev "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(20,"div",12,13),b.Sb(22,"div",14),b.Sb(23,"div",15),b.Sb(24,"div",16),b.Sb(25,"h4",17),b.Dc(26,"Add Retailer"),b.Rb(),b.Sb(27,"button",18),b.Zb("click",function(){return b.vc(t),b.sc(21).hide()}),b.Sb(28,"span",19),b.Dc(29,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(30,"div",20),b.Sb(31,"form",21),b.Zb("ngSubmit",function(){return e.formSubmit()}),b.Sb(32,"div",5),b.Sb(33,"div",22),b.Sb(34,"div",23),b.Sb(35,"label",24),b.Dc(36,"Name"),b.Rb(),b.Nb(37,"input",25),b.Rb(),b.Sb(38,"div",23),b.Sb(39,"label",26),b.Dc(40,"Username"),b.Rb(),b.Nb(41,"input",27),b.Rb(),b.Sb(42,"div",23),b.Sb(43,"label",28),b.Dc(44,"Password"),b.Rb(),b.Nb(45,"input",29),b.Rb(),b.Sb(46,"div",23),b.Sb(47,"label",30),b.Dc(48,"Contact number"),b.Rb(),b.Nb(49,"input",31),b.Rb(),b.Rb(),b.Sb(50,"div",22),b.Sb(51,"div",23),b.Sb(52,"label",32),b.Dc(53,"State"),b.Rb(),b.Sb(54,"select",33),b.Zb("change",function(t){return e.filterLGA(t)}),b.Sb(55,"option",34),b.Dc(56,"Choose..."),b.Rb(),b.Bc(57,v,2,2,"option",35),b.Rb(),b.Rb(),b.Sb(58,"div",23),b.Sb(59,"label",36),b.Dc(60,"LGA"),b.Rb(),b.Sb(61,"select",37),b.Zb("change",function(t){return e.filterVillage(t)}),b.Sb(62,"option",34),b.Dc(63,"Choose..."),b.Rb(),b.Bc(64,p,2,2,"option",35),b.Rb(),b.Rb(),b.Sb(65,"div",23),b.Sb(66,"label",38),b.Dc(67,"Village"),b.Rb(),b.Sb(68,"select",39),b.Sb(69,"option",34),b.Dc(70,"Choose..."),b.Rb(),b.Bc(71,R,2,2,"option",35),b.Rb(),b.Rb(),b.Sb(72,"div",23),b.Sb(73,"label",40),b.Dc(74,"Gender"),b.Rb(),b.Sb(75,"select",41),b.Sb(76,"option",34),b.Dc(77,"Choose..."),b.Rb(),b.Sb(78,"option",42),b.Dc(79,"Male"),b.Rb(),b.Sb(80,"option",43),b.Dc(81,"Female"),b.Rb(),b.Rb(),b.Rb(),b.Sb(82,"div",23),b.Sb(83,"label",44),b.Dc(84,"Age"),b.Rb(),b.Nb(85,"input",45),b.Rb(),b.Rb(),b.Rb(),b.Sb(86,"button",46),b.Zb("click",function(){return b.vc(t),b.sc(21).hide()}),b.Dc(87," Close "),b.Rb(),b.Sb(88,"button",47),b.Bc(89,S,1,0,"span",48),b.Dc(90," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(91,"div",49,50),b.Sb(93,"div",14),b.Sb(94,"div",15),b.Sb(95,"div",16),b.Sb(96,"h4",17),b.Dc(97,"History"),b.Rb(),b.Sb(98,"button",18),b.Zb("click",function(){return b.vc(t),b.sc(92).hide()}),b.Sb(99,"span",19),b.Dc(100,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Nb(101,"div",20),b.Rb(),b.Rb(),b.Rb()}2&t&&(b.Ab(10),b.jc("columnDefs",e.columnDefs)("rowData",e.rowData)("rowSelection",e.rowSelection),b.Ab(3),b.Hc("",e.from," to ",e.to," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.total,""),b.Ab(1),b.jc("disabled",e.disableNextButton),b.Ab(3),b.Gc("Page ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.page," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.pageCount,""),b.Ab(1),b.jc("disabled",e.disablePrevButton),b.Ab(13),b.jc("formGroup",e.commentForm),b.Ab(26),b.jc("ngForOf",e.States),b.Ab(7),b.jc("ngForOf",e.LGA),b.Ab(7),b.jc("ngForOf",e.Villages),b.Ab(17),b.jc("disabled",e.btnLoading||!e.commentForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading))},directives:[u.a,g.a,l.t,l.j,l.e,l.b,l.i,l.d,l.q,l.p,l.m,l.u,a.j,a.k],encapsulation:2}),t})();var D=i("AytR");const N=["myModal"],A=["resultModal"],C=["deleteModal"],y=["addProductModal"];function L(t,e){if(1&t){const t=b.Tb();b.Sb(0,"div",68),b.Sb(1,"div",9),b.Sb(2,"a",18),b.Nb(3,"img",69),b.Rb(),b.Sb(4,"div",13),b.Sb(5,"div",16),b.Sb(6,"h5",70),b.Dc(7),b.Rb(),b.Rb(),b.Sb(8,"p",71),b.Dc(9),b.Rb(),b.Sb(10,"button",12),b.Zb("click",function(){b.vc(t);const i=e.$implicit;return b.cc().openModal(i,"edit")}),b.Dc(11," Edit "),b.Rb(),b.Sb(12,"button",72),b.Zb("click",function(){b.vc(t);const i=e.$implicit;return b.cc().openDeleteModal(i)}),b.Dc(13," Delete "),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&t){const t=e.$implicit,i=b.cc();b.Ab(2),b.kc("href",i.imgUrl(null==t||null==t.attributes||null==t.attributes.Images||null==t.attributes.Images.data[0]||null==t.attributes.Images.data[0].attributes?null:t.attributes.Images.data[0].attributes.url),b.xc),b.Ab(1),b.kc("src",i.imgUrl(null==t||null==t.attributes||null==t.attributes.Images||null==t.attributes.Images.data[0]||null==t.attributes.Images.data[0].attributes?null:t.attributes.Images.data[0].attributes.url),b.xc),b.Ab(4),b.Fc(" Item : ",null==t||null==t.attributes?null:t.attributes.ItemName," "),b.Ab(2),b.Gc(" Price : ",null==t||null==t.attributes?null:t.attributes.Price," per ",null==t||null==t.attributes?null:t.attributes.Unit," ")}}function F(t,e){if(1&t&&(b.Sb(0,"option",73),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.CategoryName," ")}}function M(t,e){if(1&t&&(b.Sb(0,"option",73),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function P(t,e){if(1&t&&(b.Sb(0,"option",73),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function w(t,e){if(1&t&&(b.Sb(0,"option",73),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function k(t,e){1&t&&b.Nb(0,"span",74)}function q(t,e){1&t&&b.Nb(0,"span",74)}function G(t,e){1&t&&b.Nb(0,"span",74)}const I=[{path:"",children:[{path:"",redirectTo:"retailers"},{path:"all",component:f,data:{roles:"KP_CALLER",title:"Retailers"}},{path:"retailer_details/:id",component:(()=>{class t{constructor(t,e,i,a,s){this.dataservice=t,this.activatedRouter=e,this.router=i,this.fb=a,this.toastr=s,this.baseURL=D.a.apiUrl,this.loading=!0,this.details=[],this.btnLoading=!1,this.dateConverter=n.r,this.users=[],this.Villages=[],this.LGA=[],this.Areas=[],this.Retailers=[],this.Farmers=[],this.States=[],this.Crops=[],this.file=null,this.agentForm=this.fb.group({ContactNumber:["",l.s.required],Name:["",l.s.required],Farmer:["",l.s.required],retailer_categories:["",l.s.required],Bio:["",l.s.required],state:["",l.s.required],village:["",l.s.required],lga:["",l.s.required],Latitude:["",l.s.required],Longitude:["",l.s.required]}),this.resultForm=this.fb.group({id:[""],itemName:["",l.s.required],price:["",l.s.required],unit:["",l.s.required]}),this.productForm=this.fb.group({Image:["",l.s.required],itemName:["",l.s.required],price:["",l.s.required],unit:["",l.s.required]})}ngOnInit(){this.getLists(),this.getAreas(),this.getCrops(),this.getLGAs(),this.getStates(),this.getVillages(),this.getFarmers(),this.getRetailers(),this.activatedRouter.params.subscribe(t=>{this.id=t.id}),this.getTest()}imgUrl(t){return`${D.a.apiUrl}`+t}getTest(){this.dataservice.getsingleRetailer(this.id).valueChanges.subscribe(t=>{var e,i,a,s,o,r,d,n,b,c,u,g,m,h,v,p,R,S,f,D,N,A,C,y;console.log("getsingleRetailer",t.data.usersPermissionsUsers.data[0]),this.details=t.data.usersPermissionsUsers.data[0],this.agentForm=this.fb.group({ContactNumber:[null===(e=this.details.attributes)||void 0===e?void 0:e.ContactNumber,l.s.required],Name:[null===(i=this.details.attributes)||void 0===i?void 0:i.Name,l.s.required],Bio:[null===(a=this.details.attributes)||void 0===a?void 0:a.Bio,l.s.required],Latitude:[null===(s=this.details.attributes)||void 0===s?void 0:s.Latitude,l.s.required],Longitude:[null===(o=this.details.attributes)||void 0===o?void 0:o.Longitude,l.s.required],state:[null===(g=null===(u=null===(c=null===(b=null===(n=null===(d=null===(r=this.details)||void 0===r?void 0:r.attributes)||void 0===d?void 0:d.lga)||void 0===n?void 0:n.data)||void 0===b?void 0:b.attributes)||void 0===c?void 0:c.state)||void 0===u?void 0:u.data)||void 0===g?void 0:g.id,l.s.required],lga:[null===(p=null===(v=null===(h=null===(m=this.details)||void 0===m?void 0:m.attributes)||void 0===h?void 0:h.lga)||void 0===v?void 0:v.data)||void 0===p?void 0:p.id,l.s.required],village:[null===(D=null===(f=null===(S=null===(R=this.details)||void 0===R?void 0:R.attributes)||void 0===S?void 0:S.village)||void 0===f?void 0:f.data)||void 0===D?void 0:D.id,l.s.required],retailer_categories:[null===(y=null===(C=null===(A=null===(N=this.details)||void 0===N?void 0:N.attributes)||void 0===A?void 0:A.retailer_categories)||void 0===C?void 0:C.data[0])||void 0===y?void 0:y.id,l.s.required]}),this.loading=!1})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{console.log("getCrops",t.data.crops.data),this.Crops=t.data.crops.data})}getStates(){this.dataservice.getStates().valueChanges.subscribe(t=>{console.log("getStates",t.data.states.data),this.States=t.data.states.data})}getLGAs(t){this.dataservice.getLGAs(t).valueChanges.subscribe(t=>{console.log("getLGAs",t.data.lgas.data),this.LGA=t.data.lgas.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{console.log("getAreas",t.data.areas.data),this.Areas=t.data.areas.data})}getRetailers(){this.dataservice.getRetailerCategories().valueChanges.subscribe(t=>{console.log("getRetailers",t.data.retailerCategories.data),this.Retailers=t.data.retailerCategories.data})}getFarmers(){this.dataservice.getUsers(void 0,void 0,"Farmer").valueChanges.subscribe(t=>{console.log("getFarmers",t.data.usersPermissionsUsers.data),this.Farmers=t.data.usersPermissionsUsers.data})}getVillages(t){this.dataservice.getVillages(t).valueChanges.subscribe(t=>{console.log("getVillages",t.data.villages.data),this.Villages=t.data.villages.data})}dateConvertor(t){return new Date(t)}getLists(){this.loading=!0}openModal(t,e){var i,a,s;this.resultModal.show(),console.log(t,e),this.flag=e,this.resultForm=this.fb.group({id:[null==t?void 0:t.id],soil_test_sample:[null==t?void 0:t.id],itemName:[null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.ItemName,l.s.required],price:[null===(a=null==t?void 0:t.attributes)||void 0===a?void 0:a.Price,l.s.required],unit:[null===(s=null==t?void 0:t.attributes)||void 0===s?void 0:s.Unit,l.s.required]})}openDeleteModal(t){this.deleteObj=t,this.deleteModal.show()}FormSubmit(){let t={};this.btnLoading=!0,console.log(this.agentForm.value),this.dataservice.UpdateRetailer(this.agentForm.value,this.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateUsersPermissionsUser?(this.toastr.success("Retailer updated successfully!"),this.btnLoading=!1,this.myModal.hide(),this.getTest()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)},t=>{this.btnLoading=!1})}ResultSubmit(){var t,e,i,a;console.log("edit",this.resultForm.value),this.btnLoading=!0;let l={};console.log(this.resultForm.value),this.dataservice.UpdateRetailerProducts(this.resultForm.value,null===(a=null===(i=null===(e=null===(t=this.details)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.retailer_categories)||void 0===i?void 0:i.data[0])||void 0===a?void 0:a.id,this.id).subscribe(t=>{l=t.data,console.log("response",t),t.data.updateRetailerProduct?(this.toastr.success("Product updated successfully!"),this.btnLoading=!1,this.resultModal.hide(),this.getTest()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)},t=>{this.btnLoading=!1})}onChange(t){this.file=[];for(var e=0;e<t.target.files.length;e++)this.file.push(t.target.files[e]);console.log(this.file)}filterLGA(t){this.getLGAs(t.target.value)}filterVillage(t){this.getVillages(t.target.value)}uploadProfPic(){let t={};this.dataservice.upload(this.file).subscribe(e=>{var i;200==e.status?(console.log(e),this.dataservice.UpdateRetailerPic(this.id,null===(i=e.body[0])||void 0===i?void 0:i.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateUsersPermissionsUser?(this.toastr.success("Success!"),this.file=null,this.getTest(),this.addProductModal.hide()):this.toastr.error("Failed!")})):this.toastr.error("Image failed to upload!")})}ProductSubmit(){let t={};this.btnLoading=!0,this.dataservice.upload(this.file).subscribe(e=>{var i,a,l,s,o;200==e.status?(console.log(e),this.dataservice.addRetailerProducts(this.productForm.value,null===(s=null===(l=null===(a=null===(i=this.details)||void 0===i?void 0:i.attributes)||void 0===a?void 0:a.retailer_categories)||void 0===l?void 0:l.data[0])||void 0===s?void 0:s.id,this.id,null===(o=e.body[0])||void 0===o?void 0:o.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.createRetailerProduct?(this.toastr.success("Success!"),this.btnLoading=!1,this.file=null,this.getTest(),this.addProductModal.hide()):(this.toastr.error("Failed!"),this.btnLoading=!1)},t=>{this.btnLoading=!1})):(this.toastr.error("Image failed to upload!"),this.btnLoading=!1)})}deleteProduct(){this.dataservice.deleteProduct(this.deleteObj.id).subscribe(t=>{console.log("response",t),t.data.deleteRetailerProduct?(this.toastr.success("Success!"),this.deleteModal.hide(),this.getTest()):this.toastr.error("Failed!")})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(d.a),b.Mb(r.a),b.Mb(r.c),b.Mb(l.c),b.Mb(c.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(b.Ic(N,1),b.Ic(A,1),b.Ic(C,1),b.Ic(y,1)),2&t){let t;b.rc(t=b.ac())&&(e.myModal=t.first),b.rc(t=b.ac())&&(e.resultModal=t.first),b.rc(t=b.ac())&&(e.deleteModal=t.first),b.rc(t=b.ac())&&(e.addProductModal=t.first)}},decls:235,vars:29,consts:[[1,"animated","fadeIn"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-content"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-outline-primary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"row"],[1,"col"],[2,"display","flex","justify-content","space-between"],[1,"table","table-striped"],["target","_blank",3,"href"],["alt","Card image cap",1,"card-img-top",2,"width","150px","height","150px",3,"src"],["type","file","id","prof_pic","accept",".jpg,.jpeg,.JPEG,.png","name","prof_pic","placeholder","Choose image",1,"form-control",3,"change"],[2,"width","60%"],["class","col-4",4,"ngFor","ngForOf"],["myModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","Name"],["type","text","id","Name","name","Name","formControlName","Name","placeholder","Enter Name",1,"form-control"],["for","market"],["type","text","id","ContactNumber","name","ContactNumber","formControlName","ContactNumber","placeholder","Enter contact number",1,"form-control"],["for","retailer_categories"],["id","retailer_categories","required","","ngModel","","name","retailer_categories","formControlName","retailer_categories",1,"form-control"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["for","Bio"],["id","Bio","name","Bio","formControlName","Bio","placeholder","Enter Bio",1,"form-control"],["for","state"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["for","lga"],["id","lga","required","","ngModel","","name","lga","formControlName","lga",1,"form-control",3,"change"],["for","village"],["id","village","required","","ngModel","","name","village","formControlName","village",1,"form-control"],["for","Latitude"],["type","text","id","Latitude","name","Latitude","formControlName","Latitude","placeholder","Enter Latitude",1,"form-control"],["for","Longitude"],["id","Longitude","required","","ngModel","","name","Longitude","formControlName","Longitude","placeholder","Enter Longitude",1,"form-control"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","resultModalLabel","aria-hidden","true",1,"modal","fade"],["resultModal","bs-modal"],["for","id"],["type","text","id","soil_test_sample","disabled","true","name","id","formControlName","id",1,"form-control"],["for","itemName"],["type","text","id","itemName","name","itemName","formControlName","itemName",1,"form-control"],["for","price"],["type","text","id","price","name","price","formControlName","price","placeholder","Enter value",1,"form-control"],["for","unit"],["type","text","id","unit","name","unit","formControlName","unit","placeholder","Enter value",1,"form-control"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","productModalLabel","aria-hidden","true",1,"modal","fade"],["addProductModal","bs-modal"],["for","Image"],["type","file","id","Image","accept",".jpg,.jpeg,.JPEG,.png","name","Image","formControlName","Image","placeholder","Choose image",1,"form-control",3,"change"],[1,"col-4"],["height","100","width","200","alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-title"],[1,"card-text"],["type","button","data-toggle","modal",1,"btn","btn-danger",3,"click"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=b.Tb();b.Sb(0,"div",0),b.Sb(1,"div",1,2),b.Sb(3,"div",3),b.Sb(4,"div",4),b.Sb(5,"div",5),b.Dc(6," Do you want to delete this record? "),b.Rb(),b.Sb(7,"div",6),b.Sb(8,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(2).hide()}),b.Dc(9," No! Cancel. "),b.Rb(),b.Sb(10,"button",8),b.Zb("click",function(){return e.deleteProduct()}),b.Dc(11," Yes! Delete. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(12,"div",9),b.Sb(13,"div",10),b.Sb(14,"h2"),b.Dc(15,"Retailer Details"),b.Rb(),b.Sb(16,"span"),b.Sb(17,"div"),b.Sb(18,"button",11),b.Zb("click",function(){return b.vc(t),b.sc(203).show()}),b.Dc(19," Add new product "),b.Rb(),b.Sb(20,"button",12),b.Zb("click",function(){return b.vc(t),b.sc(102).show()}),b.Dc(21," Edit "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(22,"div",13),b.Sb(23,"div",14),b.Sb(24,"div",15),b.Sb(25,"div",14),b.Sb(26,"div",16),b.Sb(27,"h4"),b.Dc(28,"Basic details"),b.Rb(),b.Rb(),b.Sb(29,"table",17),b.Sb(30,"tbody"),b.Sb(31,"tr"),b.Sb(32,"td"),b.Dc(33,"ID"),b.Rb(),b.Sb(34,"td"),b.Dc(35),b.Rb(),b.Rb(),b.Sb(36,"tr"),b.Sb(37,"td"),b.Dc(38,"Username"),b.Rb(),b.Sb(39,"td"),b.Dc(40),b.Rb(),b.Rb(),b.Sb(41,"tr"),b.Sb(42,"td"),b.Dc(43,"Profile pic"),b.Rb(),b.Sb(44,"td"),b.Sb(45,"a",18),b.Nb(46,"img",19),b.Rb(),b.Sb(47,"div",16),b.Sb(48,"input",20),b.Zb("change",function(t){return e.onChange(t)}),b.Rb(),b.Sb(49,"button",11),b.Zb("click",function(){return e.uploadProfPic()}),b.Dc(50," Upload "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(51,"tr"),b.Sb(52,"td"),b.Dc(53,"Name"),b.Rb(),b.Sb(54,"td"),b.Dc(55),b.Rb(),b.Rb(),b.Sb(56,"tr"),b.Sb(57,"td"),b.Dc(58,"Contact number"),b.Rb(),b.Sb(59,"td"),b.Dc(60),b.Rb(),b.Rb(),b.Sb(61,"tr"),b.Sb(62,"td"),b.Dc(63,"Village"),b.Rb(),b.Sb(64,"td"),b.Dc(65),b.Rb(),b.Rb(),b.Sb(66,"tr"),b.Sb(67,"td"),b.Dc(68,"LGA"),b.Rb(),b.Sb(69,"td"),b.Dc(70),b.Rb(),b.Rb(),b.Sb(71,"tr"),b.Sb(72,"td"),b.Dc(73,"State"),b.Rb(),b.Sb(74,"td"),b.Dc(75),b.Rb(),b.Rb(),b.Sb(76,"tr"),b.Sb(77,"td"),b.Dc(78,"Retailer Category"),b.Rb(),b.Sb(79,"td"),b.Dc(80),b.Rb(),b.Rb(),b.Sb(81,"tr"),b.Sb(82,"td"),b.Dc(83,"Bio"),b.Rb(),b.Sb(84,"td",21),b.Dc(85),b.Rb(),b.Rb(),b.Sb(86,"tr"),b.Sb(87,"td"),b.Dc(88,"Created at"),b.Rb(),b.Sb(89,"td"),b.Dc(90),b.Rb(),b.Rb(),b.Sb(91,"tr"),b.Sb(92,"td"),b.Dc(93,"Last updated"),b.Rb(),b.Sb(94,"td"),b.Dc(95),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(96,"div",15),b.Sb(97,"h4"),b.Dc(98,"Products"),b.Rb(),b.Sb(99,"div",14),b.Bc(100,L,14,5,"div",22),b.Rb(),b.Rb(),b.Rb(),b.Sb(101,"div",1,23),b.Sb(103,"div",24),b.Sb(104,"div",4),b.Sb(105,"div",25),b.Sb(106,"h4",26),b.Dc(107,"Edit details"),b.Rb(),b.Sb(108,"button",27),b.Zb("click",function(){return b.vc(t),b.sc(102).hide()}),b.Sb(109,"span",28),b.Dc(110,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(111,"div",29),b.Sb(112,"form",30),b.Zb("ngSubmit",function(){return e.FormSubmit()}),b.Sb(113,"div",14),b.Sb(114,"div",15),b.Sb(115,"div",31),b.Sb(116,"label",32),b.Dc(117,"Name"),b.Rb(),b.Nb(118,"input",33),b.Rb(),b.Sb(119,"div",31),b.Sb(120,"label",34),b.Dc(121,"Contact Number"),b.Rb(),b.Nb(122,"input",35),b.Rb(),b.Sb(123,"div",31),b.Sb(124,"label",36),b.Dc(125,"Retailer category"),b.Rb(),b.Sb(126,"select",37),b.Sb(127,"option",38),b.Dc(128," Choose... "),b.Rb(),b.Bc(129,F,2,2,"option",39),b.Rb(),b.Rb(),b.Sb(130,"div",31),b.Sb(131,"label",40),b.Dc(132,"Bio"),b.Rb(),b.Nb(133,"textarea",41),b.Rb(),b.Rb(),b.Sb(134,"div",15),b.Sb(135,"div",31),b.Sb(136,"label",42),b.Dc(137,"State"),b.Rb(),b.Sb(138,"select",43),b.Zb("change",function(t){return e.filterLGA(t)}),b.Sb(139,"option",38),b.Dc(140," Choose... "),b.Rb(),b.Bc(141,M,2,2,"option",39),b.Rb(),b.Rb(),b.Sb(142,"div",31),b.Sb(143,"label",44),b.Dc(144,"LGA"),b.Rb(),b.Sb(145,"select",45),b.Zb("change",function(t){return e.filterVillage(t)}),b.Sb(146,"option",38),b.Dc(147," Choose... "),b.Rb(),b.Bc(148,P,2,2,"option",39),b.Rb(),b.Rb(),b.Sb(149,"div",31),b.Sb(150,"label",46),b.Dc(151,"Village"),b.Rb(),b.Sb(152,"select",47),b.Sb(153,"option",38),b.Dc(154," Choose... "),b.Rb(),b.Bc(155,w,2,2,"option",39),b.Rb(),b.Rb(),b.Sb(156,"div",31),b.Sb(157,"label",48),b.Dc(158,"Latitude"),b.Rb(),b.Nb(159,"input",49),b.Rb(),b.Sb(160,"div",31),b.Sb(161,"label",50),b.Dc(162,"Longitude"),b.Rb(),b.Nb(163,"input",51),b.Rb(),b.Sb(164,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(102).hide()}),b.Dc(165," Close "),b.Rb(),b.Sb(166,"button",52),b.Bc(167,k,1,0,"span",53),b.Dc(168," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(169,"div",54,55),b.Sb(171,"div",24),b.Sb(172,"div",4),b.Sb(173,"div",25),b.Sb(174,"h4",26),b.Dc(175,"Edit product"),b.Rb(),b.Sb(176,"button",27),b.Zb("click",function(){return b.vc(t),b.sc(170).hide()}),b.Sb(177,"span",28),b.Dc(178,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(179,"div",29),b.Sb(180,"form",30),b.Zb("ngSubmit",function(){return e.ResultSubmit()}),b.Sb(181,"div",31),b.Sb(182,"label",56),b.Dc(183,"ID"),b.Rb(),b.Nb(184,"input",57),b.Rb(),b.Sb(185,"div",31),b.Sb(186,"label",58),b.Dc(187,"Item name"),b.Rb(),b.Nb(188,"input",59),b.Rb(),b.Sb(189,"div",31),b.Sb(190,"label",60),b.Dc(191,"Price"),b.Rb(),b.Nb(192,"input",61),b.Rb(),b.Sb(193,"div",31),b.Sb(194,"label",62),b.Dc(195,"Unit"),b.Rb(),b.Nb(196,"input",63),b.Rb(),b.Sb(197,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(170).hide()}),b.Dc(198," Close "),b.Rb(),b.Sb(199,"button",52),b.Bc(200,q,1,0,"span",53),b.Dc(201," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(202,"div",64,65),b.Sb(204,"div",24),b.Sb(205,"div",4),b.Sb(206,"div",25),b.Sb(207,"h4",26),b.Dc(208,"Add product"),b.Rb(),b.Sb(209,"button",27),b.Zb("click",function(){return b.vc(t),b.sc(203).hide()}),b.Sb(210,"span",28),b.Dc(211,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(212,"div",29),b.Sb(213,"form",30),b.Zb("ngSubmit",function(){return e.ProductSubmit()}),b.Sb(214,"div",31),b.Sb(215,"label",58),b.Dc(216,"Item name"),b.Rb(),b.Nb(217,"input",59),b.Rb(),b.Sb(218,"div",31),b.Sb(219,"label",60),b.Dc(220,"Price"),b.Rb(),b.Nb(221,"input",61),b.Rb(),b.Sb(222,"div",31),b.Sb(223,"label",62),b.Dc(224,"Unit"),b.Rb(),b.Nb(225,"input",63),b.Rb(),b.Sb(226,"div",31),b.Sb(227,"label",66),b.Dc(228,"Image"),b.Rb(),b.Sb(229,"input",67),b.Zb("change",function(t){return e.onChange(t)}),b.Rb(),b.Rb(),b.Sb(230,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(203).hide()}),b.Dc(231," Close "),b.Rb(),b.Sb(232,"button",52),b.Bc(233,G,1,0,"span",53),b.Dc(234," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()}2&t&&(b.Ab(35),b.Ec(null==e.details?null:e.details.id),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.username),b.Ab(5),b.lc("href","",e.baseURL,"",null==e.details||null==e.details.attributes||null==e.details.attributes.prof_pic||null==e.details.attributes.prof_pic.data||null==e.details.attributes.prof_pic.data.attributes?null:e.details.attributes.prof_pic.data.attributes.url,"",b.xc),b.Ab(1),b.lc("src","",e.baseURL,"",null==e.details||null==e.details.attributes||null==e.details.attributes.prof_pic||null==e.details.attributes.prof_pic.data||null==e.details.attributes.prof_pic.data.attributes?null:e.details.attributes.prof_pic.data.attributes.url,"",b.xc),b.Ab(9),b.Fc(" ",null==e.details||null==e.details.attributes?null:e.details.attributes.Name," "),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.ContactNumber),b.Ab(5),b.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.village||null==e.details.attributes.village.data||null==e.details.attributes.village.data.attributes?null:e.details.attributes.village.data.attributes.Name," "),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes||null==e.details.attributes.lga||null==e.details.attributes.lga.data?null:e.details.attributes.lga.data.attributes.Name),b.Ab(5),b.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.lga||null==e.details.attributes.lga.data||null==e.details.attributes.lga.data.attributes||null==e.details.attributes.lga.data.attributes.state||null==e.details.attributes.lga.data.attributes.state.data||null==e.details.attributes.lga.data.attributes.state.data.attributes?null:e.details.attributes.lga.data.attributes.state.data.attributes.Name," "),b.Ab(5),b.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.retailer_categories||null==e.details.attributes.retailer_categories.data[0]||null==e.details.attributes.retailer_categories.data[0].attributes?null:e.details.attributes.retailer_categories.data[0].attributes.CategoryName," "),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.Bio),b.Ab(5),b.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.createdAt)),b.Ab(5),b.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.updatedAt)),b.Ab(5),b.jc("ngForOf",null==e.details||null==e.details.attributes||null==e.details.attributes.retailer_products?null:e.details.attributes.retailer_products.data),b.Ab(12),b.jc("formGroup",e.agentForm),b.Ab(17),b.jc("ngForOf",e.Retailers),b.Ab(12),b.jc("ngForOf",e.States),b.Ab(7),b.jc("ngForOf",e.LGA),b.Ab(7),b.jc("ngForOf",e.Villages),b.Ab(11),b.jc("disabled",e.btnLoading||!e.agentForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading),b.Ab(13),b.jc("formGroup",e.resultForm),b.Ab(19),b.jc("disabled",e.btnLoading),b.Ab(1),b.jc("ngIf",e.btnLoading),b.Ab(13),b.jc("formGroup",e.productForm),b.Ab(19),b.jc("disabled",e.btnLoading||!e.productForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading))},directives:[g.a,a.j,l.t,l.j,l.e,l.b,l.i,l.d,l.q,l.p,l.m,l.u,a.k],encapsulation:2}),t})(),data:{roles:"MANAGER",title:"Retailer Details"}}]}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({imports:[[r.g.forChild(I)],r.g]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({imports:[[a.c,o.a,l.o,u.b.withComponents([]),j,s.c.forRoot(),g.b.forRoot(),l.f]]}),t})()}}]);