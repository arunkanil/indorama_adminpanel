(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ve2J:function(t,e,i){"use strict";i.r(e),i.d(e,"ActivitiesModule",function(){return T});var a=i("SVse"),o=i("s7LF"),n=i("FE24"),r=i("2ZVE"),d=i("iInd"),l=i("R7Hv"),b=i("7nfi"),s=i("8Y7J"),c=i("EApP"),u=i("YFAK"),m=i("LqlI");const v=["activitiesModal"];function p(t,e){if(1&t&&(s.Sb(0,"option",63),s.Dc(1),s.Rb()),2&t){const t=e.$implicit;s.kc("value",t.id),s.Ab(1),s.Fc(" ",t.attributes.Name," ")}}function h(t,e){1&t&&(s.Sb(0,"div",25),s.Dc(1,"Maximum 9999999"),s.Rb())}function S(t,e){1&t&&(s.Sb(0,"div",25),s.Dc(1,"Special characters not permitted"),s.Rb())}function R(t,e){if(1&t&&(s.Sb(0,"option",63),s.Dc(1),s.Rb()),2&t){const t=e.$implicit;s.kc("value",t.id),s.Ab(1),s.Fc(" ",t.attributes.Name," ")}}function f(t,e){1&t&&s.Nb(0,"span",64)}const g=["editModal"],D=["resultModal"],y=["deleteModal"];function A(t,e){if(1&t&&(s.Sb(0,"option",61),s.Dc(1),s.Rb()),2&t){const t=e.$implicit;s.kc("value",t.id),s.Ab(1),s.Fc(" ",t.attributes.Name," ")}}function C(t,e){if(1&t&&(s.Sb(0,"option",61),s.Dc(1),s.Rb()),2&t){const t=e.$implicit;s.kc("value",t.id),s.Ab(1),s.Fc(" ",t.attributes.Name," ")}}function N(t,e){1&t&&s.Nb(0,"span",62)}const F=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(()=>{class t{constructor(t,e,i,a){this.dataservice=t,this.router=e,this.fb=i,this.toastr=a,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.disableNextButton=!1,this.disablePrevButton=!0,this.count=1,this.columnDefs=[],this.States=[],this.Areas=[],this.Crops=[],this.activitiesForm=this.fb.group({ActivityType:["",o.s.required],Latitude:["",o.s.required],Longitude:["",o.s.required],NoOfAttendees:["",[o.s.max(9999999),o.s.min(1),o.s.required]],area:["",o.s.required],crop:[""],FarmerName:["",o.s.pattern("[a-zA-Z ]*")],PlannedFarmDay:[""],ConditionOfCrop:[""],Date:["",o.s.required],Time:["",o.s.required],Reason:["",o.s.required]}),this.rowData=[],this.pageSize=20,this.from=1,this.to=20,this.columnDefs=[...b.a],this.rowSelection="single"}ngOnInit(){this.loading=!0,this.getActivities(),this.getCrops(),this.getAreas(),this.getStates()}checkSpecialCharacters(t){return!!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(t)}getActivities(){console.log("jshdbfkjhsdfkjsdf"),this.dataservice.getActivities(1,this.pageSize).valueChanges.subscribe(t=>{var e,i,a,o,n,r;this.meta=t.data.activities.meta,(null===(i=null===(e=this.meta)||void 0===e?void 0:e.pagination)||void 0===i?void 0:i.pageCount)<=1&&(this.disablePrevButton=!0,this.disableNextButton=!0),(null===(o=null===(a=this.meta)||void 0===a?void 0:a.pagination)||void 0===o?void 0:o.total)<this.pageSize&&(this.to=null===(r=null===(n=this.meta)||void 0===n?void 0:n.pagination)||void 0===r?void 0:r.total),this.rowData=t.data.activities.data})}loadNext(){var t,e,i,a;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(e=null===(t=this.meta)||void 0===t?void 0:t.pagination)||void 0===e?void 0:e.total)?null===(a=null===(i=this.meta)||void 0===i?void 0:i.pagination)||void 0===a?void 0:a.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.dataservice.getActivities(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.activities.meta,this.rowData=t.data.activities.data})}loadPrev(){this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.dataservice.getActivities(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.activities.meta,this.rowData=t.data.activities.data})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{this.Crops=t.data.crops.data})}getStates(){this.dataservice.getStates().valueChanges.subscribe(t=>{this.States=t.data.states.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{this.Areas=t.data.areas.data})}onGridReady(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.sizeColumnsToFit()}onRowClicked(t){console.log("row",t.data)}onSelectionChanged(t){let e=this.gridApi.getSelectedRows();this.router.navigate(["/activities/activity_details",e[0].id],{state:{data:e}})}openModal(){this.activitiesModal.show()}activitiesSubmit(){let t={};this.btnLoading=!0,this.dataservice.createActivity(this.activitiesForm.value).subscribe(e=>{t=e.data,e.data.createActivity?(this.toastr.success("Success!"),this.getActivities(),this.activitiesForm.reset(),this.btnLoading=!1,this.activitiesModal.hide(),this.gridApi.deselectAll()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(l.a),s.Mb(d.c),s.Mb(o.c),s.Mb(c.b))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&s.Ic(v,1),2&t){let t;s.rc(t=s.ac())&&(e.activitiesModal=t.first)}},decls:133,vars:18,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"row"],[1,"col-12"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","rowSelection","selectionChanged","gridReady"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["activitiesModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"col"],[1,"form-group"],["for","ActivityType"],[1,"danger"],["id","ActivityType","required","","ngModel","","name","ActivityType","formControlName","ActivityType",1,"form-control"],["value","","disabled","","selected","","hidden",""],["value","FarmDemo"],["value","GroupFarmerTraining"],["value","MegaFarmerTraining"],["value","FarmDay"],["value","RetailersTraining"],["for","area"],["id","area","required","","ngModel","","name","area","formControlName","area",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","Latitude"],["type","number","id","Latitude","name","Latitude","formControlName","Latitude","placeholder","Enter Latitude",1,"form-control"],["for","Longitude"],["type","number","id","Longitude","name","Longitude","formControlName","Longitude","placeholder","Enter Longitude",1,"form-control"],["for","NoOfAttendees"],["type","number","id","NoOfAttendees","name","NoOfAttendees","formControlName","NoOfAttendees","placeholder","Enter no. of attendees",1,"form-control"],["class","danger",4,"ngIf"],["for","Reason"],["id","Reason","rows","5","name","Reason","formControlName","Reason","placeholder","Enter body",1,"form-control"],["for","FarmerName"],["type","text","id","FarmerName","name","FarmerName","formControlName","FarmerName","placeholder","Enter name",1,"form-control"],["for","crop"],["id","crop","ngModel","","name","crop","formControlName","crop",1,"form-control"],["for","ConditionOfCrop"],["id","ConditionOfCrop","name","ConditionOfCrop","formControlName","ConditionOfCrop",1,"form-control"],["value","Good"],["value","VeryGood"],["value","Excellent"],["for","PlannedFarmDay"],["type","date","id","PlannedFarmDay","name","PlannedFarmDay","formControlName","PlannedFarmDay","placeholder","Enter Date",1,"form-control"],["for","Date"],["type","date","id","Date","name","Date","formControlName","Date","placeholder","Enter Date",1,"form-control"],["for","Time"],["type","time","id","Time","name","Time","formControlName","Time","placeholder","Enter Time",1,"form-control"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=s.Tb();s.Sb(0,"div",0),s.Sb(1,"div",1),s.Sb(2,"div",2),s.Sb(3,"h2"),s.Dc(4,"Activities"),s.Rb(),s.Sb(5,"div"),s.Sb(6,"button",3),s.Zb("click",function(){return e.openModal()}),s.Dc(7," Add New Activity "),s.Rb(),s.Rb(),s.Rb(),s.Sb(8,"div",4),s.Sb(9,"div",5),s.Sb(10,"div",6),s.Sb(11,"ag-grid-angular",7,8),s.Zb("selectionChanged",function(t){return e.onSelectionChanged(t)})("gridReady",function(t){return e.onGridReady(t)}),s.Rb(),s.Sb(13,"span",9),s.Dc(14),s.Rb(),s.Sb(15,"button",10),s.Zb("click",function(){return e.loadNext()}),s.Dc(16," Next "),s.Rb(),s.Sb(17,"span",11),s.Dc(18),s.Rb(),s.Sb(19,"button",10),s.Zb("click",function(){return e.loadPrev()}),s.Dc(20," Prev "),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(21,"div",12,13),s.Sb(23,"div",14),s.Sb(24,"div",15),s.Sb(25,"div",16),s.Sb(26,"h4",17),s.Dc(27,"Add Activity"),s.Rb(),s.Sb(28,"button",18),s.Zb("click",function(){return s.vc(t),s.sc(22).hide()}),s.Sb(29,"span",19),s.Dc(30,"\xd7"),s.Rb(),s.Rb(),s.Rb(),s.Sb(31,"div",20),s.Sb(32,"form",21),s.Zb("ngSubmit",function(){return e.activitiesSubmit()}),s.Sb(33,"div",5),s.Sb(34,"div",22),s.Sb(35,"div",23),s.Sb(36,"label",24),s.Dc(37,"Activity Type "),s.Sb(38,"span",25),s.Dc(39,"*"),s.Rb(),s.Rb(),s.Sb(40,"select",26),s.Sb(41,"option",27),s.Dc(42,"Choose..."),s.Rb(),s.Sb(43,"option",28),s.Dc(44,"Farm Demo"),s.Rb(),s.Sb(45,"option",29),s.Dc(46," Group Farmer Training "),s.Rb(),s.Sb(47,"option",30),s.Dc(48," Mega Farmer Training "),s.Rb(),s.Sb(49,"option",31),s.Dc(50,"Farm Day"),s.Rb(),s.Sb(51,"option",32),s.Dc(52,"Retailers Training"),s.Rb(),s.Rb(),s.Rb(),s.Sb(53,"div",23),s.Sb(54,"label",33),s.Dc(55,"Area "),s.Sb(56,"span",25),s.Dc(57,"*"),s.Rb(),s.Rb(),s.Sb(58,"select",34),s.Sb(59,"option",27),s.Dc(60,"Choose..."),s.Rb(),s.Bc(61,p,2,2,"option",35),s.Rb(),s.Rb(),s.Sb(62,"div",23),s.Sb(63,"label",36),s.Dc(64,"Latitude "),s.Sb(65,"span",25),s.Dc(66,"*"),s.Rb(),s.Rb(),s.Nb(67,"input",37),s.Rb(),s.Sb(68,"div",23),s.Sb(69,"label",38),s.Dc(70,"Longitude "),s.Sb(71,"span",25),s.Dc(72,"*"),s.Rb(),s.Rb(),s.Nb(73,"input",39),s.Rb(),s.Sb(74,"div",23),s.Sb(75,"label",40),s.Dc(76,"Number of attendees "),s.Sb(77,"span",25),s.Dc(78,"*"),s.Rb(),s.Rb(),s.Nb(79,"input",41),s.Bc(80,h,2,0,"div",42),s.Rb(),s.Sb(81,"div",23),s.Sb(82,"label",43),s.Dc(83,"Body "),s.Sb(84,"span",25),s.Dc(85,"*"),s.Rb(),s.Rb(),s.Nb(86,"textarea",44),s.Rb(),s.Rb(),s.Sb(87,"div",22),s.Sb(88,"div",23),s.Sb(89,"label",45),s.Dc(90,"Farmer name"),s.Rb(),s.Nb(91,"input",46),s.Bc(92,S,2,0,"div",42),s.Rb(),s.Sb(93,"div",23),s.Sb(94,"label",47),s.Dc(95,"Crop"),s.Rb(),s.Sb(96,"select",48),s.Sb(97,"option",27),s.Dc(98,"Choose..."),s.Rb(),s.Bc(99,R,2,2,"option",35),s.Rb(),s.Rb(),s.Sb(100,"div",23),s.Sb(101,"label",49),s.Dc(102,"Condition of crop"),s.Rb(),s.Sb(103,"select",50),s.Sb(104,"option",27),s.Dc(105,"Choose..."),s.Rb(),s.Sb(106,"option",51),s.Dc(107,"Good"),s.Rb(),s.Sb(108,"option",52),s.Dc(109,"Very Good"),s.Rb(),s.Sb(110,"option",53),s.Dc(111,"Excellent"),s.Rb(),s.Rb(),s.Rb(),s.Sb(112,"div",23),s.Sb(113,"label",54),s.Dc(114,"Planned farm day"),s.Rb(),s.Nb(115,"input",55),s.Rb(),s.Sb(116,"div",23),s.Sb(117,"label",56),s.Dc(118,"Date "),s.Sb(119,"span",25),s.Dc(120,"*"),s.Rb(),s.Rb(),s.Nb(121,"input",57),s.Rb(),s.Sb(122,"div",23),s.Sb(123,"label",58),s.Dc(124,"Time "),s.Sb(125,"span",25),s.Dc(126,"*"),s.Rb(),s.Rb(),s.Nb(127,"input",59),s.Rb(),s.Rb(),s.Rb(),s.Sb(128,"button",60),s.Zb("click",function(){return s.vc(t),s.sc(22).hide()}),s.Dc(129," Close "),s.Rb(),s.Sb(130,"button",61),s.Bc(131,f,1,0,"span",62),s.Dc(132," Save changes "),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}2&t&&(s.Ab(6),s.jc("disabled",!e.disableButton),s.Ab(5),s.jc("columnDefs",e.columnDefs)("rowData",e.rowData)("rowSelection",e.rowSelection),s.Ab(3),s.Hc("",e.from," to ",e.to," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.total,""),s.Ab(1),s.jc("disabled",e.disableNextButton),s.Ab(3),s.Gc("Page ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.page," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.pageCount,""),s.Ab(1),s.jc("disabled",e.disablePrevButton),s.Ab(13),s.jc("formGroup",e.activitiesForm),s.Ab(29),s.jc("ngForOf",e.Areas),s.Ab(19),s.jc("ngIf",e.activitiesForm.value.NoOfAttendees>999999),s.Ab(12),s.jc("ngIf",e.checkSpecialCharacters(e.activitiesForm.value.FarmerName)),s.Ab(7),s.jc("ngForOf",e.Crops),s.Ab(31),s.jc("disabled",e.btnLoading||!e.activitiesForm.valid),s.Ab(1),s.jc("ngIf",e.btnLoading))},directives:[u.a,m.a,o.t,o.j,o.e,o.q,o.p,o.i,o.d,o.m,o.u,a.j,o.n,o.b,a.k],encapsulation:2}),t})(),data:{title:"Activities"}},{path:"activity_details/:id",component:(()=>{class t{constructor(t,e,i,a,n){this.dataservice=t,this.activatedRouter=e,this.router=i,this.fb=a,this.toastr=n,this.loading=!0,this.details=[],this.btnLoading=!1,this.dateConverterMin=b.s,this.dateConverter=b.r,this.Areas=[],this.Crops=[],this.activitiesForm=this.fb.group({ActivityType:["",o.s.required],Latitude:["",o.s.required],Longitude:["",o.s.required],NoOfAttendees:["",o.s.required],area:["",o.s.required],crop:[""],FarmerName:[""],PlannedFarmDay:[""],ConditionOfCrop:[""],Date:["",o.s.required],Time:["",o.s.required],Reason:["",o.s.required]})}ngOnInit(){this.activatedRouter.params.subscribe(t=>{this.id=t.id}),this.getActivity(),this.getAreas(),this.getCrops()}getActivity(){this.dataservice.getActivity(this.id).valueChanges.subscribe(t=>{var e,i,a,n,r,d,l,b,s,c,u,m,v,p,h,S,R,f,g,D,y,A,C,N,F,L,T,M,w,k,O,q,E,j,P,x,B,G;console.log("getActivity",null===(i=null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.activity)||void 0===i?void 0:i.data),this.details=null===(n=null===(a=null==t?void 0:t.data)||void 0===a?void 0:a.activity)||void 0===n?void 0:n.data,this.activitiesForm=this.fb.group({ActivityType:[null===(d=null===(r=this.details)||void 0===r?void 0:r.attributes)||void 0===d?void 0:d.ActivityType,o.s.required],Latitude:[null===(b=null===(l=this.details)||void 0===l?void 0:l.attributes)||void 0===b?void 0:b.Latitude,o.s.required],Longitude:[null===(c=null===(s=this.details)||void 0===s?void 0:s.attributes)||void 0===c?void 0:c.Longitude,o.s.required],NoOfAttendees:[null===(m=null===(u=this.details)||void 0===u?void 0:u.attributes)||void 0===m?void 0:m.NoOfAttendees,o.s.required],area:[null===(S=null===(h=null===(p=null===(v=this.details)||void 0===v?void 0:v.attributes)||void 0===p?void 0:p.area)||void 0===h?void 0:h.data)||void 0===S?void 0:S.id,o.s.required],crop:[null===(D=null===(g=null===(f=null===(R=this.details)||void 0===R?void 0:R.attributes)||void 0===f?void 0:f.crop)||void 0===g?void 0:g.data)||void 0===D?void 0:D.id],FarmerName:[null===(A=null===(y=this.details)||void 0===y?void 0:y.attributes)||void 0===A?void 0:A.FarmerName],PlannedFarmDay:[null===(N=null===(C=this.details)||void 0===C?void 0:C.attributes)||void 0===N?void 0:N.PlannedFarmDay],ConditionOfCrop:[null===(L=null===(F=this.details)||void 0===F?void 0:F.attributes)||void 0===L?void 0:L.ConditionOfCrop],Date:[null===(M=null===(T=this.details)||void 0===T?void 0:T.attributes)||void 0===M?void 0:M.Date,o.s.required],Time:[null===(k=null===(w=this.details)||void 0===w?void 0:w.attributes)||void 0===k?void 0:k.Time,o.s.required],Reason:[null===(q=null===(O=this.details)||void 0===O?void 0:O.attributes)||void 0===q?void 0:q.Reason,o.s.required]}),this.maplink="https://maps.google.com/?q="+(null===(P=null===(j=null===(E=this.details)||void 0===E?void 0:E.attributes)||void 0===j?void 0:j.Latitude)||void 0===P?void 0:P.toString())+","+(null===(G=null===(B=null===(x=this.details)||void 0===x?void 0:x.attributes)||void 0===B?void 0:B.Longitude)||void 0===G?void 0:G.toString()),this.loading=!1})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{console.log("getCrops",t.data.crops.data),this.Crops=t.data.crops.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{console.log("getAreas",t.data.areas.data),this.Areas=t.data.areas.data})}returnActivityType(t){if(t)return t.replace(/([A-Z])/g," $1").trim()}dateConvertor(t){return new Date(t)}openModal(t,e){this.resultModal.show(),console.log(t,e),this.flag=e}FormSubmit(){let t={};console.log(this.activitiesForm.value),this.btnLoading=!0,this.dataservice.updateActivity(this.activitiesForm.value,this.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateActivity?(this.toastr.success("Activity updated successfully!"),this.btnLoading=!1,this.editModal.hide(),this.getActivity()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})}deleteActivity(){this.dataservice.deleteActivity(this.id).subscribe(t=>{console.log("response",t),t.data.deleteActivity?(this.toastr.success("Success!"),this.deleteModal.hide(),this.router.navigate(["/activities/all"])):this.toastr.error("Failed!")})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(l.a),s.Mb(d.a),s.Mb(d.c),s.Mb(o.c),s.Mb(c.b))},t.\u0275cmp=s.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(s.Ic(g,1),s.Ic(D,1),s.Ic(y,1)),2&t){let t;s.rc(t=s.ac())&&(e.editModal=t.first),s.rc(t=s.ac())&&(e.resultModal=t.first),s.rc(t=s.ac())&&(e.deleteModal=t.first)}},decls:200,vars:19,consts:[[1,"animated","fadeIn"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","editModalLabel","aria-hidden","true",1,"modal","fade"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-content"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-danger",3,"click"],[1,"card-body"],[1,"row"],[1,"col"],[1,"table","table-striped"],["target","_blank",3,"href"],["editModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","ActivityType"],[1,"danger"],["id","ActivityType","required","","ngModel","","name","ActivityType","formControlName","ActivityType",1,"form-control"],["value","","disabled","","selected","","hidden",""],["value","FarmDemo"],["value","GroupFarmerTraining"],["value","MegaFarmerTraining"],["value","FarmDay"],["value","RetailersTraining"],["for","area"],["id","area","required","","ngModel","","name","area","formControlName","area",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","Latitude"],["type","text","id","Latitude","name","Latitude","formControlName","Latitude","placeholder","Enter Latitude",1,"form-control"],["for","Longitude"],["type","text","id","Longitude","name","Longitude","formControlName","Longitude","placeholder","Enter Longitude",1,"form-control"],["for","NoOfAttendees"],["type","text","id","NoOfAttendees","name","NoOfAttendees","formControlName","NoOfAttendees","placeholder","Enter No. of attendees",1,"form-control"],["for","Reason"],["id","Reason","rows","5","name","Reason","formControlName","Reason","placeholder","Enter body",1,"form-control"],["for","FarmerName"],["type","text","id","FarmerName","name","FarmerName","formControlName","FarmerName","placeholder","Enter name",1,"form-control"],["for","crop"],["id","crop","ngModel","","name","crop","formControlName","crop",1,"form-control"],["for","ConditionOfCrop"],["type","text","id","ConditionOfCrop","name","ConditionOfCrop","formControlName","ConditionOfCrop","placeholder","Enter condition",1,"form-control"],["for","PlannedFarmDay"],["type","date","id","PlannedFarmDay","name","PlannedFarmDay","formControlName","PlannedFarmDay","placeholder","Enter Date",1,"form-control"],["for","Date"],["type","date","id","Date","name","Date","formControlName","Date","placeholder","Enter Date",1,"form-control"],["for","Time"],["type","time","id","Time","name","Time","formControlName","Time","placeholder","Enter Time",1,"form-control"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=s.Tb();s.Sb(0,"div",0),s.Sb(1,"div",1,2),s.Sb(3,"div",3),s.Sb(4,"div",4),s.Sb(5,"div",5),s.Dc(6," Do you want to delete this activity? "),s.Rb(),s.Sb(7,"div",6),s.Sb(8,"button",7),s.Zb("click",function(){return s.vc(t),s.sc(2).hide()}),s.Dc(9," No! Cancel. "),s.Rb(),s.Sb(10,"button",8),s.Zb("click",function(){return e.deleteActivity()}),s.Dc(11," Yes! Delete. "),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(12,"div",9),s.Sb(13,"div",10),s.Sb(14,"h2"),s.Dc(15,"Activity Details"),s.Rb(),s.Sb(16,"span"),s.Sb(17,"button",11),s.Zb("click",function(){return s.vc(t),s.sc(99).show()}),s.Dc(18," Edit "),s.Rb(),s.Sb(19,"button",12),s.Zb("click",function(){return s.vc(t),s.sc(2).show()}),s.Dc(20," Delete "),s.Rb(),s.Rb(),s.Rb(),s.Sb(21,"div",13),s.Sb(22,"div",14),s.Sb(23,"div",15),s.Sb(24,"div",14),s.Sb(25,"table",16),s.Sb(26,"tbody"),s.Sb(27,"tr"),s.Sb(28,"td"),s.Dc(29,"ID"),s.Rb(),s.Sb(30,"td"),s.Dc(31),s.Rb(),s.Rb(),s.Sb(32,"tr"),s.Sb(33,"td"),s.Dc(34,"Activity type"),s.Rb(),s.Sb(35,"td"),s.Dc(36),s.Rb(),s.Rb(),s.Sb(37,"tr"),s.Sb(38,"td"),s.Dc(39,"Date"),s.Rb(),s.Sb(40,"td"),s.Dc(41),s.Rb(),s.Rb(),s.Sb(42,"tr"),s.Sb(43,"td"),s.Dc(44,"Time"),s.Rb(),s.Sb(45,"td"),s.Dc(46),s.Rb(),s.Rb(),s.Sb(47,"tr"),s.Sb(48,"td"),s.Dc(49,"Area"),s.Rb(),s.Sb(50,"td"),s.Dc(51),s.Rb(),s.Rb(),s.Sb(52,"tr"),s.Sb(53,"td"),s.Dc(54,"No. of Attendees"),s.Rb(),s.Sb(55,"td"),s.Dc(56),s.Rb(),s.Rb(),s.Sb(57,"tr"),s.Sb(58,"td"),s.Dc(59,"Location"),s.Rb(),s.Sb(60,"td"),s.Sb(61,"a",17),s.Dc(62,"Click here to view location"),s.Rb(),s.Rb(),s.Rb(),s.Sb(63,"tr"),s.Sb(64,"td"),s.Dc(65,"Farmer Name"),s.Rb(),s.Sb(66,"td"),s.Dc(67),s.Rb(),s.Rb(),s.Sb(68,"tr"),s.Sb(69,"td"),s.Dc(70,"Crop"),s.Rb(),s.Sb(71,"td"),s.Dc(72),s.Rb(),s.Rb(),s.Sb(73,"tr"),s.Sb(74,"td"),s.Dc(75,"Condition of crop"),s.Rb(),s.Sb(76,"td"),s.Dc(77),s.Rb(),s.Rb(),s.Sb(78,"tr"),s.Sb(79,"td"),s.Dc(80,"Planned farm day"),s.Rb(),s.Sb(81,"td"),s.Dc(82),s.Rb(),s.Rb(),s.Sb(83,"tr"),s.Sb(84,"td"),s.Dc(85,"Body"),s.Rb(),s.Sb(86,"td"),s.Dc(87),s.Rb(),s.Rb(),s.Sb(88,"tr"),s.Sb(89,"td"),s.Dc(90,"Created at"),s.Rb(),s.Sb(91,"td"),s.Dc(92),s.Rb(),s.Rb(),s.Sb(93,"tr"),s.Sb(94,"td"),s.Dc(95,"Last updated"),s.Rb(),s.Sb(96,"td"),s.Dc(97),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(98,"div",1,18),s.Sb(100,"div",19),s.Sb(101,"div",4),s.Sb(102,"div",20),s.Sb(103,"h4",21),s.Dc(104,"Edit details"),s.Rb(),s.Sb(105,"button",22),s.Zb("click",function(){return s.vc(t),s.sc(99).hide()}),s.Sb(106,"span",23),s.Dc(107,"\xd7"),s.Rb(),s.Rb(),s.Rb(),s.Sb(108,"div",24),s.Sb(109,"form",25),s.Zb("ngSubmit",function(){return e.FormSubmit()}),s.Sb(110,"div",14),s.Sb(111,"div",15),s.Sb(112,"div",26),s.Sb(113,"label",27),s.Dc(114,"Activity Type "),s.Sb(115,"span",28),s.Dc(116,"*"),s.Rb(),s.Rb(),s.Sb(117,"select",29),s.Sb(118,"option",30),s.Dc(119,"Choose..."),s.Rb(),s.Sb(120,"option",31),s.Dc(121,"Farm Demo"),s.Rb(),s.Sb(122,"option",32),s.Dc(123," Group Farmer Training "),s.Rb(),s.Sb(124,"option",33),s.Dc(125," Mega Farmer Training "),s.Rb(),s.Sb(126,"option",34),s.Dc(127,"Farm Day"),s.Rb(),s.Sb(128,"option",35),s.Dc(129,"Retailers Training"),s.Rb(),s.Rb(),s.Rb(),s.Sb(130,"div",26),s.Sb(131,"label",36),s.Dc(132,"Area "),s.Sb(133,"span",28),s.Dc(134,"*"),s.Rb(),s.Rb(),s.Sb(135,"select",37),s.Sb(136,"option",30),s.Dc(137,"Choose..."),s.Rb(),s.Bc(138,A,2,2,"option",38),s.Rb(),s.Rb(),s.Sb(139,"div",26),s.Sb(140,"label",39),s.Dc(141,"Latitude "),s.Sb(142,"span",28),s.Dc(143,"*"),s.Rb(),s.Rb(),s.Nb(144,"input",40),s.Rb(),s.Sb(145,"div",26),s.Sb(146,"label",41),s.Dc(147,"Longitude "),s.Sb(148,"span",28),s.Dc(149,"*"),s.Rb(),s.Rb(),s.Nb(150,"input",42),s.Rb(),s.Sb(151,"div",26),s.Sb(152,"label",43),s.Dc(153,"Number of attendees "),s.Sb(154,"span",28),s.Dc(155,"*"),s.Rb(),s.Rb(),s.Nb(156,"input",44),s.Rb(),s.Sb(157,"div",26),s.Sb(158,"label",45),s.Dc(159,"Body "),s.Sb(160,"span",28),s.Dc(161,"*"),s.Rb(),s.Rb(),s.Nb(162,"textarea",46),s.Rb(),s.Rb(),s.Sb(163,"div",15),s.Sb(164,"div",26),s.Sb(165,"label",47),s.Dc(166,"Farmer name"),s.Rb(),s.Nb(167,"input",48),s.Rb(),s.Sb(168,"div",26),s.Sb(169,"label",49),s.Dc(170,"Crop"),s.Rb(),s.Sb(171,"select",50),s.Sb(172,"option",30),s.Dc(173,"Choose..."),s.Rb(),s.Bc(174,C,2,2,"option",38),s.Rb(),s.Rb(),s.Sb(175,"div",26),s.Sb(176,"label",51),s.Dc(177,"Condition of crop"),s.Rb(),s.Nb(178,"input",52),s.Rb(),s.Sb(179,"div",26),s.Sb(180,"label",53),s.Dc(181,"Planned farm day"),s.Rb(),s.Nb(182,"input",54),s.Rb(),s.Sb(183,"div",26),s.Sb(184,"label",55),s.Dc(185,"Date "),s.Sb(186,"span",28),s.Dc(187,"*"),s.Rb(),s.Rb(),s.Nb(188,"input",56),s.Rb(),s.Sb(189,"div",26),s.Sb(190,"label",57),s.Dc(191,"Time "),s.Sb(192,"span",28),s.Dc(193,"*"),s.Rb(),s.Rb(),s.Nb(194,"input",58),s.Rb(),s.Rb(),s.Rb(),s.Sb(195,"button",7),s.Zb("click",function(){return s.vc(t),s.sc(99).hide()}),s.Dc(196," Close "),s.Rb(),s.Sb(197,"button",59),s.Bc(198,N,1,0,"span",60),s.Dc(199," Save changes "),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()}2&t&&(s.Ab(31),s.Ec(null==e.details?null:e.details.id),s.Ab(5),s.Fc(" ",e.returnActivityType(null==e.details||null==e.details.attributes?null:e.details.attributes.ActivityType)," "),s.Ab(5),s.Fc(" ",e.dateConverterMin(null==e.details||null==e.details.attributes?null:e.details.attributes.Date)," "),s.Ab(5),s.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.Time),s.Ab(5),s.Ec(null==e.details||null==e.details.attributes||null==e.details.attributes.area||null==e.details.attributes.area.data||null==e.details.attributes.area.data.attributes?null:e.details.attributes.area.data.attributes.Name),s.Ab(5),s.Fc(" ",null==e.details||null==e.details.attributes?null:e.details.attributes.NoOfAttendees," "),s.Ab(5),s.kc("href",e.maplink,s.xc),s.Ab(6),s.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.FarmerName),s.Ab(5),s.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.crop||null==e.details.attributes.crop.data||null==e.details.attributes.crop.data.attributes?null:e.details.attributes.crop.data.attributes.Name," "),s.Ab(5),s.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.ConditionOfCrop),s.Ab(5),s.Fc(" ",e.dateConverterMin(null==e.details||null==e.details.attributes?null:e.details.attributes.PlannedFarmDay)," "),s.Ab(5),s.Fc(" ",null==e.details||null==e.details.attributes?null:e.details.attributes.Reason," "),s.Ab(5),s.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.createdAt)),s.Ab(5),s.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.updatedAt)),s.Ab(12),s.jc("formGroup",e.activitiesForm),s.Ab(29),s.jc("ngForOf",e.Areas),s.Ab(36),s.jc("ngForOf",e.Crops),s.Ab(23),s.jc("disabled",e.btnLoading||!e.activitiesForm.valid),s.Ab(1),s.jc("ngIf",e.btnLoading))},directives:[m.a,o.t,o.j,o.e,o.q,o.p,o.i,o.d,o.m,o.u,a.j,o.b,a.k],encapsulation:2}),t})(),data:{title:"Activity Details"}}]}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[d.g.forChild(F)],d.g]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({imports:[[a.c,r.a,o.o,u.b.withComponents([]),L,n.c.forRoot(),m.b.forRoot(),o.f]]}),t})()}}]);