(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{QSsw:function(t,e,i){"use strict";i.r(e),i.d(e,"UsersModule",function(){return E});var a=i("SVse"),s=i("s7LF"),o=i("FE24"),l=i("2ZVE"),r=i("iInd"),d=i("R7Hv"),n=i("7nfi"),b=i("8Y7J"),c=i("EApP"),u=i("YFAK"),m=i("LqlI");const g=["commentModal"],h=["detailsModal"];function v(t,e){if(1&t&&(b.Sb(0,"option",54),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function p(t,e){if(1&t&&(b.Sb(0,"option",54),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function S(t,e){if(1&t&&(b.Sb(0,"option",54),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function f(t,e){1&t&&b.Nb(0,"span",55)}let R=(()=>{class t{constructor(t,e,i,a){this.dataservice=t,this.router=e,this.fb=i,this.toastr=a,this.loading=!0,this.btnLoading=!1,this.disableNextButton=!1,this.disablePrevButton=!0,this.pageSize=20,this.from=1,this.to=20,this.count=1,this.columnDefs=[],this.commentForm=this.fb.group({UserType:["",s.s.required],username:["",s.s.required],email:["nodata@email.com"],password:["",s.s.required],Name:["",s.s.required],Gender:["",s.s.required],Age:["",s.s.required],ContactNumber:["",s.s.required],lga:["",s.s.required],village:["",s.s.required],state:[""]}),this.rowData=[],this.Villages=[],this.LGA=[],this.Areas=[],this.States=[],this.selectedYear=(new Date).getFullYear(),this.years=[],this.filter={},this.columnDefs=[...n.p],this.rowSelection="single"}ngOnInit(){this.loading=!0,console.log(this.router),this.getRetailers(),this.getAreas(),this.getLGAs(),this.getStates(),this.getVillages()}getStates(){this.dataservice.getStates().valueChanges.subscribe(t=>{console.log("getStates",t.data.states.data),this.States=t.data.states.data})}getLGAs(t){this.dataservice.getLGAs(t).valueChanges.subscribe(t=>{console.log("getLGAs",t.data.lgas.data),this.LGA=t.data.lgas.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{console.log("getAreas",t.data.areas.data),this.Areas=t.data.areas.data})}getVillages(t){this.dataservice.getVillages(t).valueChanges.subscribe(t=>{console.log("getVillages",t.data.villages.data),this.Villages=t.data.villages.data})}getRetailers(){this.dataservice.getUsers(1,this.pageSize).valueChanges.subscribe(t=>{var e,i,a,s,o,l;this.rowData=t.data.usersPermissionsUsers.data,this.meta=t.data.usersPermissionsUsers.meta,(null===(i=null===(e=this.meta)||void 0===e?void 0:e.pagination)||void 0===i?void 0:i.pageCount)<=1&&(this.disablePrevButton=!0,this.disableNextButton=!0),(null===(s=null===(a=this.meta)||void 0===a?void 0:a.pagination)||void 0===s?void 0:s.total)<this.pageSize&&(this.to=null===(l=null===(o=this.meta)||void 0===o?void 0:o.pagination)||void 0===l?void 0:l.total)})}loadNext(){var t,e,i,a;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(e=null===(t=this.meta)||void 0===t?void 0:t.pagination)||void 0===e?void 0:e.total)?null===(a=null===(i=this.meta)||void 0===i?void 0:i.pagination)||void 0===a?void 0:a.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.dataservice.getUsers(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.usersPermissionsUsers.meta,this.rowData=t.data.usersPermissionsUsers.data})}loadPrev(){this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.dataservice.getUsers(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.usersPermissionsUsers.meta,this.rowData=t.data.usersPermissionsUsers.data})}filterLGA(t){this.getLGAs(t.target.value)}filterVillage(t){this.getVillages(t.target.value)}onGridReady(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.sizeColumnsToFit()}onRowClicked(t){console.log("row",t.data)}onSelectionChanged(t){var e=this.gridApi.getSelectedRows();console.log(e,t),this.router.navigate(["/users/user_details",e[0].id],{state:{data:e}})}openModal(t){this.detailsModal.show()}formSubmit(){this.btnLoading=!0,console.log(this.commentForm.value);let t={};this.dataservice.createRetailer(this.commentForm.value).subscribe(e=>{t=e,console.log("response",e),e?(this.toastr.success("User added successfully!"),this.btnLoading=!1,this.commentModal.hide(),this.getRetailers()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)},t=>{this.btnLoading=!1})}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(d.a),b.Mb(r.c),b.Mb(s.c),b.Mb(c.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(b.Ic(g,1),b.Ic(h,1)),2&t){let t;b.rc(t=b.ac())&&(e.commentModal=t.first),b.rc(t=b.ac())&&(e.detailsModal=t.first)}},decls:103,vars:16,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"click"],[1,"card-body"],[1,"row"],[1,"col-12"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","rowSelection","gridReady","selectionChanged"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["commentModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"col"],[1,"form-group"],["for","Name"],["type","text","id","Name","name","Name","formControlName","Name","placeholder","Enter  Name",1,"form-control"],["for","username"],["type","text","id","username","name","username","formControlName","username","placeholder","Enter username",1,"form-control"],["for","password"],["type","password","id","password","name","password","formControlName","password","placeholder","Enter password",1,"form-control"],["for","UserType"],["id","UserType","required","","ngModel","","name","UserType","formControlName","UserType",1,"form-control"],["value","","disabled","","selected","","hidden",""],["value","Farmer"],["value","Retailer"],["value","Agronomist"],["for","ContactNumber"],["type","text","id","ContactNumber","name","ContactNumber","formControlName","ContactNumber","placeholder","Enter contact number",1,"form-control"],["for","state"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["for","lga"],["id","lga","required","","ngModel","","name","lga","formControlName","lga",1,"form-control",3,"change"],["for","village"],["id","village","required","","ngModel","","name","village","formControlName","village",1,"form-control"],["for","Gender"],["id","Gender","required","","ngModel","","name","Gender","formControlName","Gender",1,"form-control"],["value","Male"],["value","Female"],["for","Age"],["type","text","id","Age","name","Age","formControlName","Age","placeholder","Enter age",1,"form-control"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=b.Tb();b.Sb(0,"div",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"h2"),b.Dc(4,"Users"),b.Rb(),b.Sb(5,"button",3),b.Zb("click",function(){return b.vc(t),b.sc(21).show()}),b.Dc(6," Add New User "),b.Rb(),b.Rb(),b.Sb(7,"div",4),b.Sb(8,"div",5),b.Sb(9,"div",6),b.Sb(10,"ag-grid-angular",7,8),b.Zb("gridReady",function(t){return e.onGridReady(t)})("selectionChanged",function(t){return e.onSelectionChanged(t)}),b.Rb(),b.Sb(12,"span",9),b.Dc(13),b.Rb(),b.Sb(14,"button",10),b.Zb("click",function(){return e.loadNext()}),b.Dc(15," Next "),b.Rb(),b.Sb(16,"span",11),b.Dc(17),b.Rb(),b.Sb(18,"button",10),b.Zb("click",function(){return e.loadPrev()}),b.Dc(19," Prev "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(20,"div",12,13),b.Sb(22,"div",14),b.Sb(23,"div",15),b.Sb(24,"div",16),b.Sb(25,"h4",17),b.Dc(26,"Add User"),b.Rb(),b.Sb(27,"button",18),b.Zb("click",function(){return b.vc(t),b.sc(21).hide()}),b.Sb(28,"span",19),b.Dc(29,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(30,"div",20),b.Sb(31,"form",21),b.Zb("ngSubmit",function(){return e.formSubmit()}),b.Sb(32,"div",5),b.Sb(33,"div",22),b.Sb(34,"div",23),b.Sb(35,"label",24),b.Dc(36,"Name"),b.Rb(),b.Nb(37,"input",25),b.Rb(),b.Sb(38,"div",23),b.Sb(39,"label",26),b.Dc(40,"Username"),b.Rb(),b.Nb(41,"input",27),b.Rb(),b.Sb(42,"div",23),b.Sb(43,"label",28),b.Dc(44,"Password"),b.Rb(),b.Nb(45,"input",29),b.Rb(),b.Sb(46,"div",23),b.Sb(47,"label",30),b.Dc(48,"User type"),b.Rb(),b.Sb(49,"select",31),b.Sb(50,"option",32),b.Dc(51,"Choose..."),b.Rb(),b.Sb(52,"option",33),b.Dc(53,"Farmer"),b.Rb(),b.Sb(54,"option",34),b.Dc(55,"Retailer"),b.Rb(),b.Sb(56,"option",35),b.Dc(57,"Agronomist"),b.Rb(),b.Rb(),b.Rb(),b.Sb(58,"div",23),b.Sb(59,"label",36),b.Dc(60,"Contact number"),b.Rb(),b.Nb(61,"input",37),b.Rb(),b.Rb(),b.Sb(62,"div",22),b.Sb(63,"div",23),b.Sb(64,"label",38),b.Dc(65,"State"),b.Rb(),b.Sb(66,"select",39),b.Zb("change",function(t){return e.filterLGA(t)}),b.Sb(67,"option",32),b.Dc(68,"Choose..."),b.Rb(),b.Bc(69,v,2,2,"option",40),b.Rb(),b.Rb(),b.Sb(70,"div",23),b.Sb(71,"label",41),b.Dc(72,"LGA"),b.Rb(),b.Sb(73,"select",42),b.Zb("change",function(t){return e.filterVillage(t)}),b.Sb(74,"option",32),b.Dc(75,"Choose..."),b.Rb(),b.Bc(76,p,2,2,"option",40),b.Rb(),b.Rb(),b.Sb(77,"div",23),b.Sb(78,"label",43),b.Dc(79,"Village"),b.Rb(),b.Sb(80,"select",44),b.Sb(81,"option",32),b.Dc(82,"Choose..."),b.Rb(),b.Bc(83,S,2,2,"option",40),b.Rb(),b.Rb(),b.Sb(84,"div",23),b.Sb(85,"label",45),b.Dc(86,"Gender"),b.Rb(),b.Sb(87,"select",46),b.Sb(88,"option",32),b.Dc(89,"Choose..."),b.Rb(),b.Sb(90,"option",47),b.Dc(91,"Male"),b.Rb(),b.Sb(92,"option",48),b.Dc(93,"Female"),b.Rb(),b.Rb(),b.Rb(),b.Sb(94,"div",23),b.Sb(95,"label",49),b.Dc(96,"Age"),b.Rb(),b.Nb(97,"input",50),b.Rb(),b.Rb(),b.Rb(),b.Sb(98,"button",51),b.Zb("click",function(){return b.vc(t),b.sc(21).hide()}),b.Dc(99," Close "),b.Rb(),b.Sb(100,"button",52),b.Bc(101,f,1,0,"span",53),b.Dc(102," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()}2&t&&(b.Ab(10),b.jc("columnDefs",e.columnDefs)("rowData",e.rowData)("rowSelection",e.rowSelection),b.Ab(3),b.Hc("",e.from," to ",e.to," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.total,""),b.Ab(1),b.jc("disabled",e.disableNextButton),b.Ab(3),b.Gc("Page ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.page," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.pageCount,""),b.Ab(1),b.jc("disabled",e.disablePrevButton),b.Ab(13),b.jc("formGroup",e.commentForm),b.Ab(38),b.jc("ngForOf",e.States),b.Ab(7),b.jc("ngForOf",e.LGA),b.Ab(7),b.jc("ngForOf",e.Villages),b.Ab(17),b.jc("disabled",e.btnLoading||!e.commentForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading))},directives:[u.a,m.a,s.t,s.j,s.e,s.b,s.i,s.d,s.q,s.p,s.m,s.u,a.j,a.k],encapsulation:2}),t})();var D=i("AytR");const A=["myModal"],N=["areaModal"],C=["resultModal"],y=["deleteModal"],F=["addProductModal"];function L(t,e){if(1&t&&(b.Sb(0,"option",81),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function M(t,e){if(1&t&&(b.Sb(0,"option",81),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function U(t,e){1&t&&b.Nb(0,"span",82)}function k(t,e){if(1&t&&(b.Sb(0,"li"),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.Ab(1),b.Fc(" ",null==t||null==t.attributes?null:t.attributes.Name," ")}}function w(t,e){if(1&t){const t=b.Tb();b.Sb(0,"div",31),b.Sb(1,"div",32),b.Sb(2,"h4"),b.Dc(3,"LGAs assigned"),b.Rb(),b.Sb(4,"button",27),b.Zb("click",function(){return b.vc(t),b.cc(),b.sc(13).show()}),b.Dc(5," Edit LGAs "),b.Rb(),b.Rb(),b.Sb(6,"ul"),b.Bc(7,k,2,1,"li",83),b.Rb(),b.Rb()}if(2&t){const t=b.cc();b.Ab(7),b.jc("ngForOf",t.agronomists)}}function P(t,e){if(1&t&&(b.Sb(0,"option",81),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function G(t,e){if(1&t&&(b.Sb(0,"option",81),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function q(t,e){if(1&t&&(b.Sb(0,"option",81),b.Dc(1),b.Rb()),2&t){const t=e.$implicit;b.kc("value",t.id),b.Ab(1),b.Fc(" ",t.attributes.Name," ")}}function j(t,e){1&t&&b.Nb(0,"span",82)}function B(t,e){1&t&&b.Nb(0,"span",82)}function I(t,e){1&t&&b.Nb(0,"span",82)}const x=[{path:"",children:[{path:"",redirectTo:"retailers"},{path:"all",component:R,data:{title:"Users"}},{path:"user_details/:id",component:(()=>{class t{constructor(t,e,i,a,o){this.dataservice=t,this.activatedRouter=e,this.router=i,this.fb=a,this.toastr=o,this.baseURL=D.a.apiUrl,this.loading=!0,this.details=[],this.btnLoading=!1,this.dateConverter=n.r,this.users=[],this.Villages=[],this.LGA=[],this.Areas=[],this.Retailers=[],this.Farmers=[],this.States=[],this.Crops=[],this.file=null,this.dispArea=!1,this.agentForm=this.fb.group({ContactNumber:["",s.s.required],blocked:[""],Name:["",s.s.required],Farmer:["",s.s.required],UserType:["",s.s.required],Bio:[""],state:["",s.s.required],village:["",s.s.required],lga:["",s.s.required],Latitude:[""],Longitude:[""]}),this.resultForm=this.fb.group({id:[""],itemName:["",s.s.required],price:["",s.s.required],unit:["",s.s.required]}),this.areaForm=this.fb.group({state:[""],agronomist_lgas:["",s.s.required]}),this.productForm=this.fb.group({Image:["",s.s.required],itemName:["",s.s.required],price:["",s.s.required],unit:["",s.s.required]})}ngOnInit(){this.getLists(),this.getAreas(),this.getCrops(),this.getLGAs(),this.getStates(),this.getVillages(),this.getFarmers(),this.getRetailers(),this.activatedRouter.params.subscribe(t=>{this.id=t.id}),this.getTest()}imgUrl(t){return`${D.a.apiUrl}`+t}getTest(){this.dataservice.getsingleRetailer(this.id).valueChanges.subscribe(t=>{var e,i,a,o,l,r,d,n,b,c,u,m,g,h,v,p,S,f,R,D,A,N,C,y,F,L,M,U,k;console.log("getsingleRetailer",t.data.usersPermissionsUsers.data[0]),this.details=t.data.usersPermissionsUsers.data[0],this.agentForm=this.fb.group({ContactNumber:[null===(e=this.details.attributes)||void 0===e?void 0:e.ContactNumber,s.s.required],Name:[null===(i=this.details.attributes)||void 0===i?void 0:i.Name,s.s.required],Bio:[null===(a=this.details.attributes)||void 0===a?void 0:a.Bio],Latitude:[null===(o=this.details.attributes)||void 0===o?void 0:o.Latitude],Longitude:[null===(l=this.details.attributes)||void 0===l?void 0:l.Longitude],state:[null===(m=null===(u=null===(c=null===(b=null===(n=null===(d=null===(r=this.details)||void 0===r?void 0:r.attributes)||void 0===d?void 0:d.lga)||void 0===n?void 0:n.data)||void 0===b?void 0:b.attributes)||void 0===c?void 0:c.state)||void 0===u?void 0:u.data)||void 0===m?void 0:m.id,s.s.required],lga:[null===(p=null===(v=null===(h=null===(g=this.details)||void 0===g?void 0:g.attributes)||void 0===h?void 0:h.lga)||void 0===v?void 0:v.data)||void 0===p?void 0:p.id,s.s.required],village:[null===(D=null===(R=null===(f=null===(S=this.details)||void 0===S?void 0:S.attributes)||void 0===f?void 0:f.village)||void 0===R?void 0:R.data)||void 0===D?void 0:D.id,s.s.required],blocked:[null===(N=null===(A=this.details)||void 0===A?void 0:A.attributes)||void 0===N?void 0:N.blocked],UserType:[null===(y=null===(C=this.details)||void 0===C?void 0:C.attributes)||void 0===y?void 0:y.UserType,s.s.required]}),this.loading=!1,this.dispArea="Agronomist"==(null===(L=null===(F=this.details)||void 0===F?void 0:F.attributes)||void 0===L?void 0:L.UserType),1==this.dispArea&&(this.agronomists=null===(k=null===(U=null===(M=this.details)||void 0===M?void 0:M.attributes)||void 0===U?void 0:U.agronomist_lgas)||void 0===k?void 0:k.data)})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{console.log("getCrops",t.data.crops.data),this.Crops=t.data.crops.data})}getStates(){this.dataservice.getStates().valueChanges.subscribe(t=>{console.log("getStates",t.data.states.data),this.States=t.data.states.data})}getLGAs(t){this.dataservice.getLGAs(t).valueChanges.subscribe(t=>{console.log("getLGAs",t.data.lgas.data),this.LGA=t.data.lgas.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{console.log("getAreas",t.data.areas.data),this.Areas=t.data.areas.data})}getRetailers(){this.dataservice.getRetailerCategories().valueChanges.subscribe(t=>{console.log("getRetailers",t.data.retailerCategories.data),this.Retailers=t.data.retailerCategories.data})}getFarmers(){this.dataservice.getUsers(void 0,void 0,"Farmer").valueChanges.subscribe(t=>{console.log("getFarmers",t.data.usersPermissionsUsers.data),this.Farmers=t.data.usersPermissionsUsers.data})}getVillages(t){this.dataservice.getVillages(t).valueChanges.subscribe(t=>{console.log("getVillages",t.data.villages.data),this.Villages=t.data.villages.data})}dateConvertor(t){return new Date(t)}getLists(){this.loading=!0}openModal(t,e){var i,a,o;this.resultModal.show(),console.log(t,e),this.flag=e,this.resultForm=this.fb.group({id:[null==t?void 0:t.id],soil_test_sample:[null==t?void 0:t.id],itemName:[null===(i=null==t?void 0:t.attributes)||void 0===i?void 0:i.ItemName,s.s.required],price:[null===(a=null==t?void 0:t.attributes)||void 0===a?void 0:a.Price,s.s.required],unit:[null===(o=null==t?void 0:t.attributes)||void 0===o?void 0:o.Unit,s.s.required]})}openDeleteModal(t){this.deleteObj=t,this.deleteModal.show()}FormSubmit(){let t={};this.btnLoading=!0,console.log(this.agentForm.value),this.dataservice.UpdateRetailer(this.agentForm.value,this.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateUsersPermissionsUser?(this.toastr.success("User updated successfully!"),this.btnLoading=!1,this.myModal.hide(),this.getTest()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)},t=>{this.btnLoading=!1})}ResultSubmit(){var t,e,i,a;console.log("edit",this.resultForm.value);let s={};console.log(this.resultForm.value),this.dataservice.UpdateRetailerProducts(this.resultForm.value,null===(a=null===(i=null===(e=null===(t=this.details)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.retailer_categories)||void 0===i?void 0:i.data[0])||void 0===a?void 0:a.id,this.id).subscribe(t=>{s=t.data,console.log("response",t),t.data.updateRetailerProduct?(this.toastr.success("Product updated successfully!"),this.resultModal.hide(),this.getTest()):this.toastr.error("Failed. Please check the fields!")})}onChange(t){this.file=[];for(var e=0;e<t.target.files.length;e++)this.file.push(t.target.files[e]);console.log(this.file)}filterLGA(t){this.getLGAs(t.target.value)}filterArea(t){this.getAreas(t.target.value)}filterVillage(t){this.getVillages(t.target.value)}uploadProfPic(){let t={};this.dataservice.upload(this.file).subscribe(e=>{var i;200==e.status?(console.log(e),this.dataservice.UpdateRetailerPic(this.id,null===(i=e.body[0])||void 0===i?void 0:i.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateUsersPermissionsUser?(this.toastr.success("Success!"),this.file=null,this.getTest(),this.addProductModal.hide()):this.toastr.error("Failed!")})):this.toastr.error("Image failed to upload!")})}AreaSubmit(){let t={};console.log(this.areaForm.value),this.dataservice.UpdateRetailer(this.areaForm.value,this.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateUsersPermissionsUser?(this.toastr.success("User updated successfully!"),this.areaModal.hide(),this.getTest()):this.toastr.error("Failed. Please check the fields!")})}ProductSubmit(){let t={};this.dataservice.upload(this.file).subscribe(e=>{var i,a,s,o,l;200==e.status?(console.log(e),this.dataservice.addRetailerProducts(this.productForm.value,null===(o=null===(s=null===(a=null===(i=this.details)||void 0===i?void 0:i.attributes)||void 0===a?void 0:a.retailer_categories)||void 0===s?void 0:s.data[0])||void 0===o?void 0:o.id,this.id,null===(l=e.body[0])||void 0===l?void 0:l.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.createRetailerProduct?(this.toastr.success("Success!"),this.file=null,this.getTest(),this.addProductModal.hide()):this.toastr.error("Failed!")})):this.toastr.error("Image failed to upload!")})}deleteProduct(){var t,e;"Agronomist"!==(null===(e=null===(t=this.details)||void 0===t?void 0:t.attributes)||void 0===e?void 0:e.UserType)?this.dataservice.deleteUser(this.id).subscribe(t=>{console.log("response",t),t.data.deleteUsersPermissionsUser?(this.toastr.success("Success!"),this.deleteModal.hide(),this.router.navigate(["/users/all"])):this.toastr.error("Failed!")}):this.toastr.error("Can't delete Agronomist. Try setting as blocked.")}}return t.\u0275fac=function(e){return new(e||t)(b.Mb(d.a),b.Mb(r.a),b.Mb(r.c),b.Mb(s.c),b.Mb(c.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(b.Ic(A,1),b.Ic(N,1),b.Ic(C,1),b.Ic(y,1),b.Ic(F,1)),2&t){let t;b.rc(t=b.ac())&&(e.myModal=t.first),b.rc(t=b.ac())&&(e.areaModal=t.first),b.rc(t=b.ac())&&(e.resultModal=t.first),b.rc(t=b.ac())&&(e.deleteModal=t.first),b.rc(t=b.ac())&&(e.addProductModal=t.first)}},decls:286,vars:32,consts:[[1,"animated","fadeIn"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-content"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["areaModal","bs-modal"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","state"],["id","state","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["for","agronomist_lgas"],["id","agronomist_lgas","multiple","","required","","ngModel","","name","agronomist_lgas","formControlName","agronomist_lgas",1,"form-control"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-danger",3,"click"],[1,"card-body"],[1,"row"],[1,"col"],[2,"display","flex","justify-content","space-between"],[1,"table","table-striped"],["target","_blank",3,"href"],["alt","No image found",1,"card-img-top",2,"width","150px","height","150px",3,"src"],[2,"display","flex"],["type","file","id","prof_pic","accept",".jpg,.jpeg,.JPEG,.png","name","prof_pic","placeholder","Choose image",1,"form-control",2,"width","250px",3,"change"],["type","button","data-toggle","modal",1,"btn","btn-outline-primary",3,"click"],["class","col",4,"ngIf"],["myModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],["for","Name"],[1,"danger"],["type","text","id","Name","name","Name","formControlName","Name","placeholder","Enter Name",1,"form-control"],["for","market"],["type","text","id","ContactNumber","name","ContactNumber","formControlName","ContactNumber","placeholder","Enter contact number",1,"form-control"],["for","UserType"],["id","UserType","required","","ngModel","","name","UserType","formControlName","UserType",1,"form-control"],["value","Farmer"],["value","Retailer"],["value","Agronomist"],["for","Bio"],["id","Bio","name","Bio","formControlName","Bio","placeholder","Enter Bio",1,"form-control"],["id","state","required","","ngModel","","name","state","formControlName","state",1,"form-control",3,"change"],["for","lga"],["id","lga","required","","ngModel","","name","lga","formControlName","lga",1,"form-control",3,"change"],["for","village"],["id","village","required","","ngModel","","name","village","formControlName","village",1,"form-control"],["for","Latitude"],["type","text","id","Latitude","name","Latitude","formControlName","Latitude","placeholder","Enter Latitude",1,"form-control"],["for","Longitude"],["id","Longitude","ngModel","","name","Longitude","formControlName","Longitude","placeholder","Enter Longitude",1,"form-control"],["for","blocked"],["id","blocked","ngModel","","name","blocked","formControlName","blocked",1,"form-control"],["value","true"],["value","false"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","resultModalLabel","aria-hidden","true",1,"modal","fade"],["resultModal","bs-modal"],["for","id"],["type","text","id","soil_test_sample","disabled","true","name","id","formControlName","id",1,"form-control"],["for","itemName"],["type","text","id","itemName","name","itemName","formControlName","itemName",1,"form-control"],["for","price"],["type","text","id","price","name","price","formControlName","price","placeholder","Enter value",1,"form-control"],["for","unit"],["type","text","id","unit","name","unit","formControlName","unit","placeholder","Enter value",1,"form-control"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","productModalLabel","aria-hidden","true",1,"modal","fade"],["addProductModal","bs-modal"],["for","Image"],["type","file","id","Image","accept",".jpg,.jpeg,.JPEG,.png","name","Image","formControlName","Image","placeholder","Choose image",1,"form-control",3,"change"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],[4,"ngFor","ngForOf"]],template:function(t,e){if(1&t){const t=b.Tb();b.Sb(0,"div",0),b.Sb(1,"div",1,2),b.Sb(3,"div",3),b.Sb(4,"div",4),b.Sb(5,"div",5),b.Dc(6," Do you want to delete this record? "),b.Rb(),b.Sb(7,"div",6),b.Sb(8,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(2).hide()}),b.Dc(9," No! Cancel. "),b.Rb(),b.Sb(10,"button",8),b.Zb("click",function(){return e.deleteProduct()}),b.Dc(11," Yes! Delete. "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(12,"div",1,9),b.Sb(14,"div",3),b.Sb(15,"div",4),b.Sb(16,"div",10),b.Sb(17,"h4",11),b.Dc(18,"Edit assigned areas"),b.Rb(),b.Sb(19,"button",12),b.Zb("click",function(){return b.vc(t),b.sc(124).hide()}),b.Sb(20,"span",13),b.Dc(21,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(22,"div",14),b.Sb(23,"form",15),b.Zb("ngSubmit",function(){return e.AreaSubmit()}),b.Sb(24,"div",16),b.Sb(25,"label",17),b.Dc(26,"State"),b.Rb(),b.Sb(27,"select",18),b.Zb("change",function(t){return e.filterLGA(t)}),b.Sb(28,"option",19),b.Dc(29,"Choose..."),b.Rb(),b.Bc(30,L,2,2,"option",20),b.Rb(),b.Rb(),b.Sb(31,"div",16),b.Sb(32,"label",21),b.Dc(33,"LGAs"),b.Rb(),b.Sb(34,"select",22),b.Sb(35,"option",19),b.Dc(36,"Choose..."),b.Rb(),b.Bc(37,M,2,2,"option",20),b.Rb(),b.Rb(),b.Sb(38,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(13).hide()}),b.Dc(39," Close "),b.Rb(),b.Sb(40,"button",23),b.Bc(41,U,1,0,"span",24),b.Dc(42," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(43,"div",25),b.Sb(44,"div",26),b.Sb(45,"h2"),b.Dc(46,"User Details"),b.Rb(),b.Sb(47,"span"),b.Sb(48,"div"),b.Sb(49,"button",27),b.Zb("click",function(){return b.vc(t),b.sc(124).show()}),b.Dc(50," Edit "),b.Rb(),b.Sb(51,"button",28),b.Zb("click",function(){return b.vc(t),b.sc(2).show()}),b.Dc(52," Delete "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(53,"div",29),b.Sb(54,"div",30),b.Sb(55,"div",31),b.Sb(56,"div",30),b.Sb(57,"div",32),b.Sb(58,"h4"),b.Dc(59,"Basic details"),b.Rb(),b.Rb(),b.Sb(60,"table",33),b.Sb(61,"tbody"),b.Sb(62,"tr"),b.Sb(63,"td"),b.Dc(64,"ID"),b.Rb(),b.Sb(65,"td"),b.Dc(66),b.Rb(),b.Rb(),b.Sb(67,"tr"),b.Sb(68,"td"),b.Dc(69,"Username"),b.Rb(),b.Sb(70,"td"),b.Dc(71),b.Rb(),b.Rb(),b.Sb(72,"tr"),b.Sb(73,"td"),b.Dc(74,"Profile pic"),b.Rb(),b.Sb(75,"td"),b.Sb(76,"a",34),b.Nb(77,"img",35),b.Rb(),b.Sb(78,"div",36),b.Sb(79,"input",37),b.Zb("change",function(t){return e.onChange(t)}),b.Rb(),b.Sb(80,"button",38),b.Zb("click",function(){return e.uploadProfPic()}),b.Dc(81," Upload "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(82,"tr"),b.Sb(83,"td"),b.Dc(84,"Name"),b.Rb(),b.Sb(85,"td"),b.Dc(86),b.Rb(),b.Rb(),b.Sb(87,"tr"),b.Sb(88,"td"),b.Dc(89,"Contact number"),b.Rb(),b.Sb(90,"td"),b.Dc(91),b.Rb(),b.Rb(),b.Sb(92,"tr"),b.Sb(93,"td"),b.Dc(94,"User type"),b.Rb(),b.Sb(95,"td"),b.Dc(96),b.Rb(),b.Rb(),b.Sb(97,"tr"),b.Sb(98,"td"),b.Dc(99,"Village"),b.Rb(),b.Sb(100,"td"),b.Dc(101),b.Rb(),b.Rb(),b.Sb(102,"tr"),b.Sb(103,"td"),b.Dc(104,"LGA"),b.Rb(),b.Sb(105,"td"),b.Dc(106),b.Rb(),b.Rb(),b.Sb(107,"tr"),b.Sb(108,"td"),b.Dc(109,"State"),b.Rb(),b.Sb(110,"td"),b.Dc(111),b.Rb(),b.Rb(),b.Sb(112,"tr"),b.Sb(113,"td"),b.Dc(114,"Created at"),b.Rb(),b.Sb(115,"td"),b.Dc(116),b.Rb(),b.Rb(),b.Sb(117,"tr"),b.Sb(118,"td"),b.Dc(119,"Last updated"),b.Rb(),b.Sb(120,"td"),b.Dc(121),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Bc(122,w,8,1,"div",39),b.Rb(),b.Sb(123,"div",1,40),b.Sb(125,"div",41),b.Sb(126,"div",4),b.Sb(127,"div",10),b.Sb(128,"h4",11),b.Dc(129,"Edit details"),b.Rb(),b.Sb(130,"button",12),b.Zb("click",function(){return b.vc(t),b.sc(124).hide()}),b.Sb(131,"span",13),b.Dc(132,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(133,"div",14),b.Sb(134,"form",15),b.Zb("ngSubmit",function(){return e.FormSubmit()}),b.Sb(135,"div",30),b.Sb(136,"div",31),b.Sb(137,"div",16),b.Sb(138,"label",42),b.Dc(139,"Name"),b.Sb(140,"span",43),b.Dc(141,"*"),b.Rb(),b.Rb(),b.Nb(142,"input",44),b.Rb(),b.Sb(143,"div",16),b.Sb(144,"label",45),b.Dc(145,"Contact Number"),b.Sb(146,"span",43),b.Dc(147,"*"),b.Rb(),b.Rb(),b.Nb(148,"input",46),b.Rb(),b.Sb(149,"div",16),b.Sb(150,"label",47),b.Dc(151,"User type"),b.Sb(152,"span",43),b.Dc(153,"*"),b.Rb(),b.Rb(),b.Sb(154,"select",48),b.Sb(155,"option",19),b.Dc(156," Choose... "),b.Rb(),b.Sb(157,"option",49),b.Dc(158,"Farmer"),b.Rb(),b.Sb(159,"option",50),b.Dc(160,"Retailer"),b.Rb(),b.Sb(161,"option",51),b.Dc(162,"Agronomist"),b.Rb(),b.Rb(),b.Rb(),b.Sb(163,"div",16),b.Sb(164,"label",52),b.Dc(165,"Bio"),b.Rb(),b.Nb(166,"textarea",53),b.Rb(),b.Rb(),b.Sb(167,"div",31),b.Sb(168,"div",16),b.Sb(169,"label",17),b.Dc(170,"State"),b.Sb(171,"span",43),b.Dc(172,"*"),b.Rb(),b.Rb(),b.Sb(173,"select",54),b.Zb("change",function(t){return e.filterLGA(t)}),b.Sb(174,"option",19),b.Dc(175," Choose... "),b.Rb(),b.Bc(176,P,2,2,"option",20),b.Rb(),b.Rb(),b.Sb(177,"div",16),b.Sb(178,"label",55),b.Dc(179,"LGA"),b.Sb(180,"span",43),b.Dc(181,"*"),b.Rb(),b.Rb(),b.Sb(182,"select",56),b.Zb("change",function(t){return e.filterVillage(t)}),b.Sb(183,"option",19),b.Dc(184," Choose... "),b.Rb(),b.Bc(185,G,2,2,"option",20),b.Rb(),b.Rb(),b.Sb(186,"div",16),b.Sb(187,"label",57),b.Dc(188,"Village"),b.Sb(189,"span",43),b.Dc(190,"*"),b.Rb(),b.Rb(),b.Sb(191,"select",58),b.Sb(192,"option",19),b.Dc(193," Choose... "),b.Rb(),b.Bc(194,q,2,2,"option",20),b.Rb(),b.Rb(),b.Sb(195,"div",16),b.Sb(196,"label",59),b.Dc(197,"Latitude"),b.Rb(),b.Nb(198,"input",60),b.Rb(),b.Sb(199,"div",16),b.Sb(200,"label",61),b.Dc(201,"Longitude"),b.Rb(),b.Nb(202,"input",62),b.Rb(),b.Sb(203,"div",16),b.Sb(204,"label",63),b.Dc(205,"Status"),b.Sb(206,"span",43),b.Dc(207,"*"),b.Rb(),b.Rb(),b.Sb(208,"select",64),b.Sb(209,"option",19),b.Dc(210," Choose... "),b.Rb(),b.Sb(211,"option",65),b.Dc(212,"Blocked"),b.Rb(),b.Sb(213,"option",66),b.Dc(214,"Active"),b.Rb(),b.Rb(),b.Rb(),b.Sb(215,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(124).hide()}),b.Dc(216," Close "),b.Rb(),b.Sb(217,"button",23),b.Bc(218,j,1,0,"span",24),b.Dc(219," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(220,"div",67,68),b.Sb(222,"div",41),b.Sb(223,"div",4),b.Sb(224,"div",10),b.Sb(225,"h4",11),b.Dc(226,"Edit product"),b.Rb(),b.Sb(227,"button",12),b.Zb("click",function(){return b.vc(t),b.sc(221).hide()}),b.Sb(228,"span",13),b.Dc(229,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(230,"div",14),b.Sb(231,"form",15),b.Zb("ngSubmit",function(){return e.ResultSubmit()}),b.Sb(232,"div",16),b.Sb(233,"label",69),b.Dc(234,"ID"),b.Rb(),b.Nb(235,"input",70),b.Rb(),b.Sb(236,"div",16),b.Sb(237,"label",71),b.Dc(238,"Item name"),b.Rb(),b.Nb(239,"input",72),b.Rb(),b.Sb(240,"div",16),b.Sb(241,"label",73),b.Dc(242,"Price"),b.Rb(),b.Nb(243,"input",74),b.Rb(),b.Sb(244,"div",16),b.Sb(245,"label",75),b.Dc(246,"Unit"),b.Rb(),b.Nb(247,"input",76),b.Rb(),b.Sb(248,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(221).hide()}),b.Dc(249," Close "),b.Rb(),b.Sb(250,"button",23),b.Bc(251,B,1,0,"span",24),b.Dc(252," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(253,"div",77,78),b.Sb(255,"div",41),b.Sb(256,"div",4),b.Sb(257,"div",10),b.Sb(258,"h4",11),b.Dc(259,"Add product"),b.Rb(),b.Sb(260,"button",12),b.Zb("click",function(){return b.vc(t),b.sc(254).hide()}),b.Sb(261,"span",13),b.Dc(262,"\xd7"),b.Rb(),b.Rb(),b.Rb(),b.Sb(263,"div",14),b.Sb(264,"form",15),b.Zb("ngSubmit",function(){return e.ProductSubmit()}),b.Sb(265,"div",16),b.Sb(266,"label",71),b.Dc(267,"Item name"),b.Rb(),b.Nb(268,"input",72),b.Rb(),b.Sb(269,"div",16),b.Sb(270,"label",73),b.Dc(271,"Price"),b.Rb(),b.Nb(272,"input",74),b.Rb(),b.Sb(273,"div",16),b.Sb(274,"label",75),b.Dc(275,"Unit"),b.Rb(),b.Nb(276,"input",76),b.Rb(),b.Sb(277,"div",16),b.Sb(278,"label",79),b.Dc(279,"Image"),b.Rb(),b.Sb(280,"input",80),b.Zb("change",function(t){return e.onChange(t)}),b.Rb(),b.Rb(),b.Sb(281,"button",7),b.Zb("click",function(){return b.vc(t),b.sc(254).hide()}),b.Dc(282," Close "),b.Rb(),b.Sb(283,"button",23),b.Bc(284,I,1,0,"span",24),b.Dc(285," Save changes "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()}2&t&&(b.Ab(23),b.jc("formGroup",e.areaForm),b.Ab(7),b.jc("ngForOf",e.States),b.Ab(7),b.jc("ngForOf",e.LGA),b.Ab(3),b.jc("disabled",e.btnLoading||!e.areaForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading),b.Ab(25),b.Ec(null==e.details?null:e.details.id),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.username),b.Ab(5),b.lc("href","",e.baseURL,"",null==e.details||null==e.details.attributes||null==e.details.attributes.prof_pic||null==e.details.attributes.prof_pic.data||null==e.details.attributes.prof_pic.data.attributes?null:e.details.attributes.prof_pic.data.attributes.url,"",b.xc),b.Ab(1),b.lc("src","",e.baseURL,"",null==e.details||null==e.details.attributes||null==e.details.attributes.prof_pic||null==e.details.attributes.prof_pic.data||null==e.details.attributes.prof_pic.data.attributes?null:e.details.attributes.prof_pic.data.attributes.url,"",b.xc),b.Ab(9),b.Fc(" ",null==e.details||null==e.details.attributes?null:e.details.attributes.Name," "),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.ContactNumber),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.UserType),b.Ab(5),b.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.village||null==e.details.attributes.village.data||null==e.details.attributes.village.data.attributes?null:e.details.attributes.village.data.attributes.Name," "),b.Ab(5),b.Ec(null==e.details||null==e.details.attributes||null==e.details.attributes.lga||null==e.details.attributes.lga.data?null:e.details.attributes.lga.data.attributes.Name),b.Ab(5),b.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.lga||null==e.details.attributes.lga.data||null==e.details.attributes.lga.data.attributes||null==e.details.attributes.lga.data.attributes.state||null==e.details.attributes.lga.data.attributes.state.data||null==e.details.attributes.lga.data.attributes.state.data.attributes?null:e.details.attributes.lga.data.attributes.state.data.attributes.Name," "),b.Ab(5),b.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.createdAt)),b.Ab(5),b.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.updatedAt)),b.Ab(1),b.jc("ngIf",e.dispArea),b.Ab(12),b.jc("formGroup",e.agentForm),b.Ab(42),b.jc("ngForOf",e.States),b.Ab(9),b.jc("ngForOf",e.LGA),b.Ab(9),b.jc("ngForOf",e.Villages),b.Ab(23),b.jc("disabled",e.btnLoading||!e.agentForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading),b.Ab(13),b.jc("formGroup",e.resultForm),b.Ab(19),b.jc("disabled",e.btnLoading),b.Ab(1),b.jc("ngIf",e.btnLoading),b.Ab(13),b.jc("formGroup",e.productForm),b.Ab(19),b.jc("disabled",e.btnLoading||!e.productForm.valid),b.Ab(1),b.jc("ngIf",e.btnLoading))},directives:[m.a,s.t,s.j,s.e,s.q,s.i,s.d,s.m,s.u,a.j,s.r,s.p,a.k,s.b],encapsulation:2}),t})(),data:{title:"Retailer Details"}}]}];let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({imports:[[r.g.forChild(x)],r.g]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({imports:[[a.c,l.a,s.o,u.b.withComponents([]),Z,o.c.forRoot(),m.b.forRoot(),s.f]]}),t})()}}]);