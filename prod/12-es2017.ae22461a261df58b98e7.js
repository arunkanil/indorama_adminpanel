(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{ve2J:function(t,e,i){"use strict";i.r(e),i.d(e,"ActivitiesModule",function(){return E});var a=i("SVse"),o=i("s7LF"),n=i("FE24"),r=i("2ZVE"),d=i("iInd"),l=i("R7Hv"),b=i("7nfi"),s=i("AytR"),c=i("8Y7J"),u=i("EApP"),m=i("YFAK"),v=i("LqlI");const p=["activitiesModal"],h=["downloadActivitiesModal"],S=["uploadActivitiesModal"];function f(t,e){if(1&t&&(c.Sb(0,"option",74),c.Dc(1),c.Rb()),2&t){const t=e.$implicit;c.kc("value",t.id),c.Ab(1),c.Fc(" ",t.attributes.Name," ")}}function R(t,e){1&t&&(c.Sb(0,"div",26),c.Dc(1," Maximum 9999999 "),c.Rb())}function g(t,e){1&t&&(c.Sb(0,"div",26),c.Dc(1," Special characters not permitted "),c.Rb())}function D(t,e){if(1&t&&(c.Sb(0,"option",74),c.Dc(1),c.Rb()),2&t){const t=e.$implicit;c.kc("value",t.id),c.Ab(1),c.Fc(" ",t.attributes.Name," ")}}function y(t,e){1&t&&c.Nb(0,"span",75)}function A(t,e){1&t&&c.Nb(0,"span",75)}function C(t,e){1&t&&c.Nb(0,"span",75)}const F=["editModal"],N=["resultModal"],w=["deleteModal"];function L(t,e){if(1&t&&(c.Sb(0,"option",61),c.Dc(1),c.Rb()),2&t){const t=e.$implicit;c.kc("value",t.id),c.Ab(1),c.Fc(" ",t.attributes.Name," ")}}function M(t,e){if(1&t&&(c.Sb(0,"option",61),c.Dc(1),c.Rb()),2&t){const t=e.$implicit;c.kc("value",t.id),c.Ab(1),c.Fc(" ",t.attributes.Name," ")}}function T(t,e){1&t&&c.Nb(0,"span",62)}const k=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(()=>{class t{constructor(t,e,i,a){this.dataservice=t,this.router=e,this.fb=i,this.toastr=a,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.disableNextButton=!1,this.disablePrevButton=!0,this.count=1,this.columnDefs=[],this.States=[],this.Areas=[],this.Crops=[],this.file=null,this.activitiesForm=this.fb.group({ActivityType:["",o.s.required],Latitude:["",o.s.required],Longitude:["",o.s.required],NoOfAttendees:["",[o.s.max(9999999),o.s.min(1),o.s.required]],area:["",o.s.required],crop:[""],FarmerName:["",o.s.pattern("[a-zA-Z ]*")],PlannedFarmDay:[""],ConditionOfCrop:[""],Date:["",o.s.required],Time:["",o.s.required],Reason:["",o.s.required]}),this.downloadExcelForm=this.fb.group({fromDate:["",o.s.required],toDate:["",o.s.required]}),this.uploadExcelForm=this.fb.group({File:["",o.s.required]}),this.rowData=[],this.pageSize=20,this.from=1,this.to=20,this.columnDefs=[...b.a],this.rowSelection="single"}ngOnInit(){this.loading=!0,this.getActivities(),this.getCrops(),this.getAreas(),this.getStates()}checkSpecialCharacters(t){return!!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(t)}getActivities(){console.log("jshdbfkjhsdfkjsdf"),this.dataservice.getActivities(1,this.pageSize).valueChanges.subscribe(t=>{var e,i,a,o,n,r;this.meta=t.data.activities.meta,(null===(i=null===(e=this.meta)||void 0===e?void 0:e.pagination)||void 0===i?void 0:i.pageCount)<=1&&(this.disablePrevButton=!0,this.disableNextButton=!0),(null===(o=null===(a=this.meta)||void 0===a?void 0:a.pagination)||void 0===o?void 0:o.total)<this.pageSize&&(this.to=null===(r=null===(n=this.meta)||void 0===n?void 0:n.pagination)||void 0===r?void 0:r.total),this.rowData=t.data.activities.data})}loadNext(){var t,e,i,a;this.count++,this.disablePrevButton=!1,this.from=this.from+this.pageSize,this.to=this.to+this.pageSize>(null===(e=null===(t=this.meta)||void 0===t?void 0:t.pagination)||void 0===e?void 0:e.total)?null===(a=null===(i=this.meta)||void 0===i?void 0:i.pagination)||void 0===a?void 0:a.total:this.to+this.pageSize,this.count===this.meta.pagination.pageCount&&(this.disableNextButton=!0),this.dataservice.getActivities(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.activities.meta,this.rowData=t.data.activities.data})}loadPrev(){this.count--,this.count<this.meta.pagination.pageCount&&(this.disableNextButton=!1),1===this.count&&(this.disablePrevButton=!0),this.from=this.from-this.pageSize,this.to=this.to-this.rowData.length,this.dataservice.getActivities(this.count,this.pageSize).valueChanges.subscribe(t=>{this.meta=t.data.activities.meta,this.rowData=t.data.activities.data})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{this.Crops=t.data.crops.data})}getStates(){this.dataservice.getStates().valueChanges.subscribe(t=>{this.States=t.data.states.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{this.Areas=t.data.areas.data})}onGridReady(t){this.gridApi=t.api,this.gridColumnApi=t.columnApi,this.gridApi.sizeColumnsToFit()}onRowClicked(t){console.log("row",t.data)}onChange(t){this.file=[];for(var e=0;e<t.target.files.length;e++)this.file.push(t.target.files[e]);console.log(this.file)}onSelectionChanged(t){let e=this.gridApi.getSelectedRows();this.router.navigate(["/activities/activity_details",e[0].id],{state:{data:e}})}openModal(){this.activitiesModal.show()}activitiesSubmit(){let t={};this.btnLoading=!0,this.dataservice.createActivity(this.activitiesForm.value).subscribe(e=>{t=e.data,e.data.createActivity?(this.toastr.success("Success!"),this.getActivities(),this.activitiesForm.reset(),this.btnLoading=!1,this.activitiesModal.hide(),this.gridApi.deselectAll()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})}downloadActivities(){console.log(this.downloadExcelForm.value);let t={};this.btnLoading=!0,this.dataservice.downloadActivities(this.downloadExcelForm.value).subscribe(e=>{var i;t=e.body,console.log(e),200===e.status&&"Success"==e.body.status?(this.toastr.success(e.body.message),this.btnLoading=!1,window.open(`${s.a.apiUrl}${null===(i=null==e?void 0:e.body)||void 0===i?void 0:i.path}`,"_blank")):(this.btnLoading=!1,this.toastr.error(e.body.message))})}uploadActivities(){this.dataservice.uploadActivities(this.file).subscribe(t=>{200==t.status?(console.log(t),this.toastr.success("Success!"),this.file=null,this.getActivities(),this.uploadActivitiesModal.hide()):this.toastr.error("Failed!")})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(l.a),c.Mb(d.c),c.Mb(o.c),c.Mb(u.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(c.Ic(p,1),c.Ic(h,1),c.Ic(S,1)),2&t){let t;c.rc(t=c.ac())&&(e.activitiesModal=t.first),c.rc(t=c.ac())&&(e.downloadActivitiesModal=t.first),c.rc(t=c.ac())&&(e.uploadActivitiesModal=t.first)}},decls:194,vars:24,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-outline-secondary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"row"],[1,"col-12"],["id","myGrid","animateRows","true",1,"ag-theme-alpine",2,"width","100%","height","65vh",3,"columnDefs","rowData","rowSelection","selectionChanged","gridReady"],["agGrid",""],[1,"float-left","mt-3"],["type","button",1,"btn","btn-primary","float-right","m-2",3,"disabled","click"],[1,"float-right","mt-3"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["activitiesModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"col"],[1,"form-group"],["for","ActivityType"],[1,"danger"],["id","ActivityType","required","","ngModel","","name","ActivityType","formControlName","ActivityType",1,"form-control"],["value","","disabled","","selected","","hidden",""],["value","FarmDemo"],["value","GroupFarmerTraining"],["value","MegaFarmerTraining"],["value","FarmDay"],["value","RetailersTraining"],["for","area"],["id","area","required","","ngModel","","name","area","formControlName","area",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","Latitude"],["type","number","id","Latitude","name","Latitude","formControlName","Latitude","placeholder","Enter Latitude",1,"form-control"],["for","Longitude"],["type","number","id","Longitude","name","Longitude","formControlName","Longitude","placeholder","Enter Longitude",1,"form-control"],["for","NoOfAttendees"],["type","number","id","NoOfAttendees","name","NoOfAttendees","formControlName","NoOfAttendees","placeholder","Enter no. of attendees",1,"form-control"],["class","danger",4,"ngIf"],["for","Reason"],["id","Reason","rows","5","name","Reason","formControlName","Reason","placeholder","Enter body",1,"form-control"],["for","FarmerName"],["type","text","id","FarmerName","name","FarmerName","formControlName","FarmerName","placeholder","Enter name",1,"form-control"],["for","crop"],["id","crop","ngModel","","name","crop","formControlName","crop",1,"form-control"],["for","ConditionOfCrop"],["id","ConditionOfCrop","name","ConditionOfCrop","formControlName","ConditionOfCrop",1,"form-control"],["value","Good"],["value","VeryGood"],["value","Excellent"],["for","PlannedFarmDay"],["type","date","id","PlannedFarmDay","name","PlannedFarmDay","formControlName","PlannedFarmDay","placeholder","Enter Date",1,"form-control"],["for","Date"],["type","date","id","Date","name","Date","formControlName","Date","placeholder","Enter Date",1,"form-control"],["for","Time"],["type","time","id","Time","name","Time","formControlName","Time","placeholder","Enter Time",1,"form-control"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["downloadActivitiesModal","bs-modal"],["for","fromDate"],["type","date","id","fromDate","required","","ngModel","","name","fromDate","formControlName","fromDate",1,"form-control"],["for","toDate"],["type","date","id","toDate","required","","ngModel","","name","toDate","formControlName","toDate",1,"form-control"],["uploadActivitiesModal","bs-modal"],["for","Image"],["type","file","id","File","accept",".xlsx","name","File","formControlName","File","placeholder","Choose file",1,"form-control",3,"change"],[1,"row","template-download"],["href","/assets/activities_template.xlsx","download","activities_template.xlsx","target","_blank"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=c.Tb();c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"h2"),c.Dc(4,"Activities"),c.Rb(),c.Sb(5,"div"),c.Sb(6,"button",3),c.Zb("click",function(){return c.vc(t),c.sc(138).show()}),c.Dc(7," Download sheets "),c.Rb(),c.Sb(8,"button",3),c.Zb("click",function(){return c.vc(t),c.sc(169).show()}),c.Dc(9," Upload sheet "),c.Rb(),c.Sb(10,"button",4),c.Zb("click",function(){return e.openModal()}),c.Dc(11," Add New Activity "),c.Rb(),c.Rb(),c.Rb(),c.Sb(12,"div",5),c.Sb(13,"div",6),c.Sb(14,"div",7),c.Sb(15,"ag-grid-angular",8,9),c.Zb("selectionChanged",function(t){return e.onSelectionChanged(t)})("gridReady",function(t){return e.onGridReady(t)}),c.Rb(),c.Sb(17,"span",10),c.Dc(18),c.Rb(),c.Sb(19,"button",11),c.Zb("click",function(){return e.loadNext()}),c.Dc(20," Next "),c.Rb(),c.Sb(21,"span",12),c.Dc(22),c.Rb(),c.Sb(23,"button",11),c.Zb("click",function(){return e.loadPrev()}),c.Dc(24," Prev "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(25,"div",13,14),c.Sb(27,"div",15),c.Sb(28,"div",16),c.Sb(29,"div",17),c.Sb(30,"h4",18),c.Dc(31,"Add Activity"),c.Rb(),c.Sb(32,"button",19),c.Zb("click",function(){return c.vc(t),c.sc(26).hide()}),c.Sb(33,"span",20),c.Dc(34,"\xd7"),c.Rb(),c.Rb(),c.Rb(),c.Sb(35,"div",21),c.Sb(36,"form",22),c.Zb("ngSubmit",function(){return e.activitiesSubmit()}),c.Sb(37,"div",6),c.Sb(38,"div",23),c.Sb(39,"div",24),c.Sb(40,"label",25),c.Dc(41,"Activity Type "),c.Sb(42,"span",26),c.Dc(43,"*"),c.Rb(),c.Rb(),c.Sb(44,"select",27),c.Sb(45,"option",28),c.Dc(46,"Choose..."),c.Rb(),c.Sb(47,"option",29),c.Dc(48,"Farm Demo"),c.Rb(),c.Sb(49,"option",30),c.Dc(50," Group Farmer Training "),c.Rb(),c.Sb(51,"option",31),c.Dc(52," Mega Farmer Training "),c.Rb(),c.Sb(53,"option",32),c.Dc(54,"Farm Day"),c.Rb(),c.Sb(55,"option",33),c.Dc(56,"Retailers Training"),c.Rb(),c.Rb(),c.Rb(),c.Sb(57,"div",24),c.Sb(58,"label",34),c.Dc(59,"City "),c.Sb(60,"span",26),c.Dc(61,"*"),c.Rb(),c.Rb(),c.Sb(62,"select",35),c.Sb(63,"option",28),c.Dc(64,"Choose..."),c.Rb(),c.Bc(65,f,2,2,"option",36),c.Rb(),c.Rb(),c.Sb(66,"div",24),c.Sb(67,"label",37),c.Dc(68,"Latitude "),c.Sb(69,"span",26),c.Dc(70,"*"),c.Rb(),c.Rb(),c.Nb(71,"input",38),c.Rb(),c.Sb(72,"div",24),c.Sb(73,"label",39),c.Dc(74,"Longitude "),c.Sb(75,"span",26),c.Dc(76,"*"),c.Rb(),c.Rb(),c.Nb(77,"input",40),c.Rb(),c.Sb(78,"div",24),c.Sb(79,"label",41),c.Dc(80,"Number of attendees "),c.Sb(81,"span",26),c.Dc(82,"*"),c.Rb(),c.Rb(),c.Nb(83,"input",42),c.Bc(84,R,2,0,"div",43),c.Rb(),c.Sb(85,"div",24),c.Sb(86,"label",44),c.Dc(87,"Body "),c.Sb(88,"span",26),c.Dc(89,"*"),c.Rb(),c.Rb(),c.Nb(90,"textarea",45),c.Rb(),c.Rb(),c.Sb(91,"div",23),c.Sb(92,"div",24),c.Sb(93,"label",46),c.Dc(94,"Farmer name"),c.Rb(),c.Nb(95,"input",47),c.Bc(96,g,2,0,"div",43),c.Rb(),c.Sb(97,"div",24),c.Sb(98,"label",48),c.Dc(99,"Crop"),c.Rb(),c.Sb(100,"select",49),c.Sb(101,"option",28),c.Dc(102,"Choose..."),c.Rb(),c.Bc(103,D,2,2,"option",36),c.Rb(),c.Rb(),c.Sb(104,"div",24),c.Sb(105,"label",50),c.Dc(106,"Condition of crop"),c.Rb(),c.Sb(107,"select",51),c.Sb(108,"option",28),c.Dc(109,"Choose..."),c.Rb(),c.Sb(110,"option",52),c.Dc(111,"Good"),c.Rb(),c.Sb(112,"option",53),c.Dc(113,"Very Good"),c.Rb(),c.Sb(114,"option",54),c.Dc(115,"Excellent"),c.Rb(),c.Rb(),c.Rb(),c.Sb(116,"div",24),c.Sb(117,"label",55),c.Dc(118,"Planned farm day"),c.Rb(),c.Nb(119,"input",56),c.Rb(),c.Sb(120,"div",24),c.Sb(121,"label",57),c.Dc(122,"Date "),c.Sb(123,"span",26),c.Dc(124,"*"),c.Rb(),c.Rb(),c.Nb(125,"input",58),c.Rb(),c.Sb(126,"div",24),c.Sb(127,"label",59),c.Dc(128,"Time "),c.Sb(129,"span",26),c.Dc(130,"*"),c.Rb(),c.Rb(),c.Nb(131,"input",60),c.Rb(),c.Rb(),c.Rb(),c.Sb(132,"button",61),c.Zb("click",function(){return c.vc(t),c.sc(26).hide()}),c.Dc(133," Close "),c.Rb(),c.Sb(134,"button",62),c.Bc(135,y,1,0,"span",63),c.Dc(136," Save changes "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(137,"div",13,64),c.Sb(139,"div",15),c.Sb(140,"div",16),c.Sb(141,"div",17),c.Sb(142,"h4",18),c.Dc(143,"Download Activity"),c.Rb(),c.Sb(144,"button",19),c.Zb("click",function(){return c.vc(t),c.sc(138).hide()}),c.Sb(145,"span",20),c.Dc(146,"\xd7"),c.Rb(),c.Rb(),c.Rb(),c.Sb(147,"div",21),c.Sb(148,"form",22),c.Zb("ngSubmit",function(){return e.downloadActivities()}),c.Sb(149,"div",6),c.Sb(150,"div",23),c.Sb(151,"div",24),c.Sb(152,"label",65),c.Dc(153,"From"),c.Sb(154,"span",26),c.Dc(155,"*"),c.Rb(),c.Rb(),c.Nb(156,"input",66),c.Rb(),c.Sb(157,"div",24),c.Sb(158,"label",67),c.Dc(159,"From"),c.Sb(160,"span",26),c.Dc(161,"*"),c.Rb(),c.Rb(),c.Nb(162,"input",68),c.Rb(),c.Rb(),c.Rb(),c.Sb(163,"button",61),c.Zb("click",function(){return c.vc(t),c.sc(138).hide()}),c.Dc(164," Close "),c.Rb(),c.Sb(165,"button",62),c.Bc(166,A,1,0,"span",63),c.Dc(167," Download "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(168,"div",13,69),c.Sb(170,"div",15),c.Sb(171,"div",16),c.Sb(172,"div",17),c.Sb(173,"h4",18),c.Dc(174,"Upload Activities"),c.Rb(),c.Sb(175,"button",19),c.Zb("click",function(){return c.vc(t),c.sc(169).hide()}),c.Sb(176,"span",20),c.Dc(177,"\xd7"),c.Rb(),c.Rb(),c.Rb(),c.Sb(178,"div",21),c.Sb(179,"form",22),c.Zb("ngSubmit",function(){return e.uploadActivities()}),c.Sb(180,"div",6),c.Sb(181,"div",23),c.Sb(182,"div",24),c.Sb(183,"label",70),c.Dc(184,"Excel file"),c.Rb(),c.Sb(185,"input",71),c.Zb("change",function(t){return e.onChange(t)}),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(186,"div",72),c.Sb(187,"a",73),c.Dc(188,"Download Template"),c.Rb(),c.Rb(),c.Sb(189,"button",61),c.Zb("click",function(){return c.vc(t),c.sc(169).hide()}),c.Dc(190," Close "),c.Rb(),c.Sb(191,"button",62),c.Bc(192,C,1,0,"span",63),c.Dc(193," Upload "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()}2&t&&(c.Ab(10),c.jc("disabled",!e.disableButton),c.Ab(5),c.jc("columnDefs",e.columnDefs)("rowData",e.rowData)("rowSelection",e.rowSelection),c.Ab(3),c.Hc("",e.from," to ",e.to," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.total,""),c.Ab(1),c.jc("disabled",e.disableNextButton),c.Ab(3),c.Gc("Page ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.page," of ",null==e.meta||null==e.meta.pagination?null:e.meta.pagination.pageCount,""),c.Ab(1),c.jc("disabled",e.disablePrevButton),c.Ab(13),c.jc("formGroup",e.activitiesForm),c.Ab(29),c.jc("ngForOf",e.Areas),c.Ab(19),c.jc("ngIf",e.activitiesForm.value.NoOfAttendees>999999),c.Ab(12),c.jc("ngIf",e.checkSpecialCharacters(e.activitiesForm.value.FarmerName)),c.Ab(7),c.jc("ngForOf",e.Crops),c.Ab(31),c.jc("disabled",e.btnLoading||!e.activitiesForm.valid),c.Ab(1),c.jc("ngIf",e.btnLoading),c.Ab(13),c.jc("formGroup",e.downloadExcelForm),c.Ab(17),c.jc("disabled",e.btnLoading||!e.downloadExcelForm.valid),c.Ab(1),c.jc("ngIf",e.btnLoading),c.Ab(13),c.jc("formGroup",e.uploadExcelForm),c.Ab(12),c.jc("disabled",e.btnLoading||!e.uploadExcelForm.valid),c.Ab(1),c.jc("ngIf",e.btnLoading))},directives:[m.a,v.a,o.t,o.j,o.e,o.q,o.p,o.i,o.d,o.m,o.u,a.j,o.n,o.b,a.k],encapsulation:2}),t})(),data:{title:"Activities"}},{path:"activity_details/:id",component:(()=>{class t{constructor(t,e,i,a,n){this.dataservice=t,this.activatedRouter=e,this.router=i,this.fb=a,this.toastr=n,this.loading=!0,this.details=[],this.btnLoading=!1,this.dateConverterMin=b.s,this.dateConverter=b.r,this.Areas=[],this.Crops=[],this.activitiesForm=this.fb.group({ActivityType:["",o.s.required],Latitude:["",o.s.required],Longitude:["",o.s.required],NoOfAttendees:["",o.s.required],area:["",o.s.required],crop:[""],FarmerName:[""],PlannedFarmDay:[""],ConditionOfCrop:[""],Date:["",o.s.required],Time:["",o.s.required],Reason:["",o.s.required]})}ngOnInit(){this.activatedRouter.params.subscribe(t=>{this.id=t.id}),this.getActivity(),this.getAreas(),this.getCrops()}getActivity(){this.dataservice.getActivity(this.id).valueChanges.subscribe(t=>{var e,i,a,n,r,d,l,b,s,c,u,m,v,p,h,S,f,R,g,D,y,A,C,F,N,w,L,M,T,k,x,E,q,O,j,P,Z,B;console.log("getActivity",null===(i=null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.activity)||void 0===i?void 0:i.data),this.details=null===(n=null===(a=null==t?void 0:t.data)||void 0===a?void 0:a.activity)||void 0===n?void 0:n.data,this.activitiesForm=this.fb.group({ActivityType:[null===(d=null===(r=this.details)||void 0===r?void 0:r.attributes)||void 0===d?void 0:d.ActivityType,o.s.required],Latitude:[null===(b=null===(l=this.details)||void 0===l?void 0:l.attributes)||void 0===b?void 0:b.Latitude,o.s.required],Longitude:[null===(c=null===(s=this.details)||void 0===s?void 0:s.attributes)||void 0===c?void 0:c.Longitude,o.s.required],NoOfAttendees:[null===(m=null===(u=this.details)||void 0===u?void 0:u.attributes)||void 0===m?void 0:m.NoOfAttendees,o.s.required],area:[null===(S=null===(h=null===(p=null===(v=this.details)||void 0===v?void 0:v.attributes)||void 0===p?void 0:p.area)||void 0===h?void 0:h.data)||void 0===S?void 0:S.id,o.s.required],crop:[null===(D=null===(g=null===(R=null===(f=this.details)||void 0===f?void 0:f.attributes)||void 0===R?void 0:R.crop)||void 0===g?void 0:g.data)||void 0===D?void 0:D.id],FarmerName:[null===(A=null===(y=this.details)||void 0===y?void 0:y.attributes)||void 0===A?void 0:A.FarmerName],PlannedFarmDay:[null===(F=null===(C=this.details)||void 0===C?void 0:C.attributes)||void 0===F?void 0:F.PlannedFarmDay],ConditionOfCrop:[null===(w=null===(N=this.details)||void 0===N?void 0:N.attributes)||void 0===w?void 0:w.ConditionOfCrop],Date:[null===(M=null===(L=this.details)||void 0===L?void 0:L.attributes)||void 0===M?void 0:M.Date,o.s.required],Time:[null===(k=null===(T=this.details)||void 0===T?void 0:T.attributes)||void 0===k?void 0:k.Time,o.s.required],Reason:[null===(E=null===(x=this.details)||void 0===x?void 0:x.attributes)||void 0===E?void 0:E.Reason,o.s.required]}),this.maplink="https://maps.google.com/?q="+(null===(j=null===(O=null===(q=this.details)||void 0===q?void 0:q.attributes)||void 0===O?void 0:O.Latitude)||void 0===j?void 0:j.toString())+","+(null===(B=null===(Z=null===(P=this.details)||void 0===P?void 0:P.attributes)||void 0===Z?void 0:Z.Longitude)||void 0===B?void 0:B.toString()),this.loading=!1})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{console.log("getCrops",t.data.crops.data),this.Crops=t.data.crops.data})}getAreas(t){this.dataservice.getAreas(t).valueChanges.subscribe(t=>{console.log("getAreas",t.data.areas.data),this.Areas=t.data.areas.data})}returnActivityType(t){if(t)return t.replace(/([A-Z])/g," $1").trim()}dateConvertor(t){return new Date(t)}openModal(t,e){this.resultModal.show(),console.log(t,e),this.flag=e}FormSubmit(){let t={};console.log(this.activitiesForm.value),this.btnLoading=!0,this.dataservice.updateActivity(this.activitiesForm.value,this.id).subscribe(e=>{t=e.data,console.log("response",e),e.data.updateActivity?(this.toastr.success("Activity updated successfully!"),this.btnLoading=!1,this.editModal.hide(),this.getActivity()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})}deleteActivity(){this.dataservice.deleteActivity(this.id).subscribe(t=>{console.log("response",t),t.data.deleteActivity?(this.toastr.success("Success!"),this.deleteModal.hide(),this.router.navigate(["/activities/all"])):this.toastr.error("Failed!")})}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(l.a),c.Mb(d.a),c.Mb(d.c),c.Mb(o.c),c.Mb(u.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(c.Ic(F,1),c.Ic(N,1),c.Ic(w,1)),2&t){let t;c.rc(t=c.ac())&&(e.editModal=t.first),c.rc(t=c.ac())&&(e.resultModal=t.first),c.rc(t=c.ac())&&(e.deleteModal=t.first)}},decls:200,vars:19,consts:[[1,"animated","fadeIn"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","editModalLabel","aria-hidden","true",1,"modal","fade"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-content"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"click"],["type","button","data-toggle","modal",1,"btn","btn-danger",3,"click"],[1,"card-body"],[1,"row"],[1,"col"],[1,"table","table-striped"],["target","_blank",3,"href"],["editModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","ActivityType"],[1,"danger"],["id","ActivityType","required","","ngModel","","name","ActivityType","formControlName","ActivityType",1,"form-control"],["value","","disabled","","selected","","hidden",""],["value","FarmDemo"],["value","GroupFarmerTraining"],["value","MegaFarmerTraining"],["value","FarmDay"],["value","RetailersTraining"],["for","area"],["id","area","required","","ngModel","","name","area","formControlName","area",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["for","Latitude"],["type","text","id","Latitude","name","Latitude","formControlName","Latitude","placeholder","Enter Latitude",1,"form-control"],["for","Longitude"],["type","text","id","Longitude","name","Longitude","formControlName","Longitude","placeholder","Enter Longitude",1,"form-control"],["for","NoOfAttendees"],["type","text","id","NoOfAttendees","name","NoOfAttendees","formControlName","NoOfAttendees","placeholder","Enter No. of attendees",1,"form-control"],["for","Reason"],["id","Reason","rows","5","name","Reason","formControlName","Reason","placeholder","Enter body",1,"form-control"],["for","FarmerName"],["type","text","id","FarmerName","name","FarmerName","formControlName","FarmerName","placeholder","Enter name",1,"form-control"],["for","crop"],["id","crop","ngModel","","name","crop","formControlName","crop",1,"form-control"],["for","ConditionOfCrop"],["type","text","id","ConditionOfCrop","name","ConditionOfCrop","formControlName","ConditionOfCrop","placeholder","Enter condition",1,"form-control"],["for","PlannedFarmDay"],["type","date","id","PlannedFarmDay","name","PlannedFarmDay","formControlName","PlannedFarmDay","placeholder","Enter Date",1,"form-control"],["for","Date"],["type","date","id","Date","name","Date","formControlName","Date","placeholder","Enter Date",1,"form-control"],["for","Time"],["type","time","id","Time","name","Time","formControlName","Time","placeholder","Enter Time",1,"form-control"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],[3,"value"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=c.Tb();c.Sb(0,"div",0),c.Sb(1,"div",1,2),c.Sb(3,"div",3),c.Sb(4,"div",4),c.Sb(5,"div",5),c.Dc(6," Do you want to delete this activity? "),c.Rb(),c.Sb(7,"div",6),c.Sb(8,"button",7),c.Zb("click",function(){return c.vc(t),c.sc(2).hide()}),c.Dc(9," No! Cancel. "),c.Rb(),c.Sb(10,"button",8),c.Zb("click",function(){return e.deleteActivity()}),c.Dc(11," Yes! Delete. "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(12,"div",9),c.Sb(13,"div",10),c.Sb(14,"h2"),c.Dc(15,"Activity Details"),c.Rb(),c.Sb(16,"span"),c.Sb(17,"button",11),c.Zb("click",function(){return c.vc(t),c.sc(99).show()}),c.Dc(18," Edit "),c.Rb(),c.Sb(19,"button",12),c.Zb("click",function(){return c.vc(t),c.sc(2).show()}),c.Dc(20," Delete "),c.Rb(),c.Rb(),c.Rb(),c.Sb(21,"div",13),c.Sb(22,"div",14),c.Sb(23,"div",15),c.Sb(24,"div",14),c.Sb(25,"table",16),c.Sb(26,"tbody"),c.Sb(27,"tr"),c.Sb(28,"td"),c.Dc(29,"ID"),c.Rb(),c.Sb(30,"td"),c.Dc(31),c.Rb(),c.Rb(),c.Sb(32,"tr"),c.Sb(33,"td"),c.Dc(34,"Activity type"),c.Rb(),c.Sb(35,"td"),c.Dc(36),c.Rb(),c.Rb(),c.Sb(37,"tr"),c.Sb(38,"td"),c.Dc(39,"Date"),c.Rb(),c.Sb(40,"td"),c.Dc(41),c.Rb(),c.Rb(),c.Sb(42,"tr"),c.Sb(43,"td"),c.Dc(44,"Time"),c.Rb(),c.Sb(45,"td"),c.Dc(46),c.Rb(),c.Rb(),c.Sb(47,"tr"),c.Sb(48,"td"),c.Dc(49,"City"),c.Rb(),c.Sb(50,"td"),c.Dc(51),c.Rb(),c.Rb(),c.Sb(52,"tr"),c.Sb(53,"td"),c.Dc(54,"No. of Attendees"),c.Rb(),c.Sb(55,"td"),c.Dc(56),c.Rb(),c.Rb(),c.Sb(57,"tr"),c.Sb(58,"td"),c.Dc(59,"Location"),c.Rb(),c.Sb(60,"td"),c.Sb(61,"a",17),c.Dc(62,"Click here to view location"),c.Rb(),c.Rb(),c.Rb(),c.Sb(63,"tr"),c.Sb(64,"td"),c.Dc(65,"Farmer Name"),c.Rb(),c.Sb(66,"td"),c.Dc(67),c.Rb(),c.Rb(),c.Sb(68,"tr"),c.Sb(69,"td"),c.Dc(70,"Crop"),c.Rb(),c.Sb(71,"td"),c.Dc(72),c.Rb(),c.Rb(),c.Sb(73,"tr"),c.Sb(74,"td"),c.Dc(75,"Condition of crop"),c.Rb(),c.Sb(76,"td"),c.Dc(77),c.Rb(),c.Rb(),c.Sb(78,"tr"),c.Sb(79,"td"),c.Dc(80,"Planned farm day"),c.Rb(),c.Sb(81,"td"),c.Dc(82),c.Rb(),c.Rb(),c.Sb(83,"tr"),c.Sb(84,"td"),c.Dc(85,"Body"),c.Rb(),c.Sb(86,"td"),c.Dc(87),c.Rb(),c.Rb(),c.Sb(88,"tr"),c.Sb(89,"td"),c.Dc(90,"Created at"),c.Rb(),c.Sb(91,"td"),c.Dc(92),c.Rb(),c.Rb(),c.Sb(93,"tr"),c.Sb(94,"td"),c.Dc(95,"Last updated"),c.Rb(),c.Sb(96,"td"),c.Dc(97),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Sb(98,"div",1,18),c.Sb(100,"div",19),c.Sb(101,"div",4),c.Sb(102,"div",20),c.Sb(103,"h4",21),c.Dc(104,"Edit details"),c.Rb(),c.Sb(105,"button",22),c.Zb("click",function(){return c.vc(t),c.sc(99).hide()}),c.Sb(106,"span",23),c.Dc(107,"\xd7"),c.Rb(),c.Rb(),c.Rb(),c.Sb(108,"div",24),c.Sb(109,"form",25),c.Zb("ngSubmit",function(){return e.FormSubmit()}),c.Sb(110,"div",14),c.Sb(111,"div",15),c.Sb(112,"div",26),c.Sb(113,"label",27),c.Dc(114,"Activity Type "),c.Sb(115,"span",28),c.Dc(116,"*"),c.Rb(),c.Rb(),c.Sb(117,"select",29),c.Sb(118,"option",30),c.Dc(119,"Choose..."),c.Rb(),c.Sb(120,"option",31),c.Dc(121,"Farm Demo"),c.Rb(),c.Sb(122,"option",32),c.Dc(123," Group Farmer Training "),c.Rb(),c.Sb(124,"option",33),c.Dc(125," Mega Farmer Training "),c.Rb(),c.Sb(126,"option",34),c.Dc(127,"Farm Day"),c.Rb(),c.Sb(128,"option",35),c.Dc(129,"Retailers Training"),c.Rb(),c.Rb(),c.Rb(),c.Sb(130,"div",26),c.Sb(131,"label",36),c.Dc(132,"City "),c.Sb(133,"span",28),c.Dc(134,"*"),c.Rb(),c.Rb(),c.Sb(135,"select",37),c.Sb(136,"option",30),c.Dc(137,"Choose..."),c.Rb(),c.Bc(138,L,2,2,"option",38),c.Rb(),c.Rb(),c.Sb(139,"div",26),c.Sb(140,"label",39),c.Dc(141,"Latitude "),c.Sb(142,"span",28),c.Dc(143,"*"),c.Rb(),c.Rb(),c.Nb(144,"input",40),c.Rb(),c.Sb(145,"div",26),c.Sb(146,"label",41),c.Dc(147,"Longitude "),c.Sb(148,"span",28),c.Dc(149,"*"),c.Rb(),c.Rb(),c.Nb(150,"input",42),c.Rb(),c.Sb(151,"div",26),c.Sb(152,"label",43),c.Dc(153,"Number of attendees "),c.Sb(154,"span",28),c.Dc(155,"*"),c.Rb(),c.Rb(),c.Nb(156,"input",44),c.Rb(),c.Sb(157,"div",26),c.Sb(158,"label",45),c.Dc(159,"Body "),c.Sb(160,"span",28),c.Dc(161,"*"),c.Rb(),c.Rb(),c.Nb(162,"textarea",46),c.Rb(),c.Rb(),c.Sb(163,"div",15),c.Sb(164,"div",26),c.Sb(165,"label",47),c.Dc(166,"Farmer name"),c.Rb(),c.Nb(167,"input",48),c.Rb(),c.Sb(168,"div",26),c.Sb(169,"label",49),c.Dc(170,"Crop"),c.Rb(),c.Sb(171,"select",50),c.Sb(172,"option",30),c.Dc(173,"Choose..."),c.Rb(),c.Bc(174,M,2,2,"option",38),c.Rb(),c.Rb(),c.Sb(175,"div",26),c.Sb(176,"label",51),c.Dc(177,"Condition of crop"),c.Rb(),c.Nb(178,"input",52),c.Rb(),c.Sb(179,"div",26),c.Sb(180,"label",53),c.Dc(181,"Planned farm day"),c.Rb(),c.Nb(182,"input",54),c.Rb(),c.Sb(183,"div",26),c.Sb(184,"label",55),c.Dc(185,"Date "),c.Sb(186,"span",28),c.Dc(187,"*"),c.Rb(),c.Rb(),c.Nb(188,"input",56),c.Rb(),c.Sb(189,"div",26),c.Sb(190,"label",57),c.Dc(191,"Time "),c.Sb(192,"span",28),c.Dc(193,"*"),c.Rb(),c.Rb(),c.Nb(194,"input",58),c.Rb(),c.Rb(),c.Rb(),c.Sb(195,"button",7),c.Zb("click",function(){return c.vc(t),c.sc(99).hide()}),c.Dc(196," Close "),c.Rb(),c.Sb(197,"button",59),c.Bc(198,T,1,0,"span",60),c.Dc(199," Save changes "),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()}2&t&&(c.Ab(31),c.Ec(null==e.details?null:e.details.id),c.Ab(5),c.Fc(" ",e.returnActivityType(null==e.details||null==e.details.attributes?null:e.details.attributes.ActivityType)," "),c.Ab(5),c.Fc(" ",e.dateConverterMin(null==e.details||null==e.details.attributes?null:e.details.attributes.Date)," "),c.Ab(5),c.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.Time),c.Ab(5),c.Ec(null==e.details||null==e.details.attributes||null==e.details.attributes.area||null==e.details.attributes.area.data||null==e.details.attributes.area.data.attributes?null:e.details.attributes.area.data.attributes.Name),c.Ab(5),c.Fc(" ",null==e.details||null==e.details.attributes?null:e.details.attributes.NoOfAttendees," "),c.Ab(5),c.kc("href",e.maplink,c.xc),c.Ab(6),c.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.FarmerName),c.Ab(5),c.Fc(" ",null==e.details||null==e.details.attributes||null==e.details.attributes.crop||null==e.details.attributes.crop.data||null==e.details.attributes.crop.data.attributes?null:e.details.attributes.crop.data.attributes.Name," "),c.Ab(5),c.Ec(null==e.details||null==e.details.attributes?null:e.details.attributes.ConditionOfCrop),c.Ab(5),c.Fc(" ",e.dateConverterMin(null==e.details||null==e.details.attributes?null:e.details.attributes.PlannedFarmDay)," "),c.Ab(5),c.Fc(" ",null==e.details||null==e.details.attributes?null:e.details.attributes.Reason," "),c.Ab(5),c.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.createdAt)),c.Ab(5),c.Ec(e.dateConvertor(null==e.details||null==e.details.attributes?null:e.details.attributes.updatedAt)),c.Ab(12),c.jc("formGroup",e.activitiesForm),c.Ab(29),c.jc("ngForOf",e.Areas),c.Ab(36),c.jc("ngForOf",e.Crops),c.Ab(23),c.jc("disabled",e.btnLoading||!e.activitiesForm.valid),c.Ab(1),c.jc("ngIf",e.btnLoading))},directives:[v.a,o.t,o.j,o.e,o.q,o.p,o.i,o.d,o.m,o.u,a.j,o.b,a.k],encapsulation:2}),t})(),data:{title:"Activity Details"}}]}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[d.g.forChild(k)],d.g]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[a.c,r.a,o.o,m.b.withComponents([]),x,n.c.forRoot(),v.b.forRoot(),o.f]]}),t})()}}]);