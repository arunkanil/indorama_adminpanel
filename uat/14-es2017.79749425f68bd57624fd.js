(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{mjQe:function(t,e,i){"use strict";i.r(e),i.d(e,"BestCropPracticesModule",function(){return w});var a=i("SVse"),o=i("s7LF"),r=i("FE24"),s=i("2ZVE"),c=i("iInd"),n=i("R7Hv"),l=i("7nfi"),b=i("AytR"),d=i("8Y7J"),u=i("EApP"),p=i("LqlI");const h=["practicesModal"],g=["deleteModal"];function m(t,e){if(1&t){const t=d.Tb();d.Sb(0,"div",37),d.Sb(1,"div",1),d.Sb(2,"div",38),d.Nb(3,"img",39),d.Sb(4,"div",40),d.Sb(5,"div",41),d.Sb(6,"a",42),d.Dc(7,"Click to view file"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(8,"div",4),d.Sb(9,"div",43),d.Sb(10,"h5",44),d.Dc(11),d.Rb(),d.Sb(12,"div"),d.Sb(13,"button",45),d.Zb("click",function(){d.vc(t);const i=e.$implicit;return d.cc().openModal(i)}),d.Nb(14,"img",46),d.Rb(),d.Rb(),d.Rb(),d.Sb(15,"p",47),d.Dc(16),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&t){const t=e.$implicit,i=d.cc();d.Ab(3),d.lc("src","",i.baseURL,"",null==t||null==t.attributes||null==t.attributes.cropImage||null==t.attributes.cropImage.data||null==t.attributes.cropImage.data.attributes?null:t.attributes.cropImage.data.attributes.url,"",d.xc),d.Ab(3),d.lc("href","",i.baseURL,"",null==t||null==t.attributes||null==t.attributes.media||null==t.attributes.media.data||null==t.attributes.media.data.attributes?null:t.attributes.media.data.attributes.url,"",d.xc),d.Ab(5),d.Fc(" ",t.attributes.crop.data.attributes.Name," "),d.Ab(5),d.Fc(" ",t.attributes.content," ")}}function f(t,e){if(1&t&&(d.Sb(0,"option",48),d.Dc(1),d.Rb()),2&t){const t=e.$implicit;d.kc("value",t.id),d.Ab(1),d.Fc(" ",t.attributes.Name," ")}}function v(t,e){if(1&t&&d.Nb(0,"img",49),2&t){const t=d.cc();d.kc("src",t.imageUrl,d.xc)}}function R(t,e){1&t&&d.Nb(0,"span",50)}const S=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(()=>{class t{constructor(t,e,i,a){this.dataservice=t,this.router=e,this.fb=i,this.toastr=a,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.title="Verification",this.orders={},this.columnDefs=[],this.Crops=[],this.baseURL=b.a.apiUrl,this.practicesForm=this.fb.group({crop:["",o.s.required],content:["",o.s.required],File:["",o.s.required],Image:["",o.s.required]}),this.rowData=[],this.selectedRows=[],this.filter={},this.file=null,this.image=null,this.columnDefs=[...l.d],this.rowSelection="single"}ngOnInit(){this.loading=!0,console.log(this.router),this.getBestCropPractises(),this.getCrops()}getBestCropPractises(){this.dataservice.getBestCropPractises(1,1e3).valueChanges.subscribe(t=>{this.rowData=t.data.bestCropPractises.data,console.log(this.rowData)})}getCrops(){this.dataservice.getCrops().valueChanges.subscribe(t=>{this.Crops=t.data.crops.data})}onChange(t,e){if(1==e){this.file=[];for(var i=0;i<t.target.files.length;i++)this.file.push(t.target.files[i])}else for(this.image=[],i=0;i<t.target.files.length;i++)this.image.push(t.target.files[i]);console.log(this.file,this.image)}openModal(t){this.deleteModal.show(),this.deleteId=t.id}deletePractice(){this.dataservice.deleteBestPractice(this.deleteId).subscribe(t=>{console.log("response",t),t.data.deleteBestCropPractise?(this.dataservice.getBestCropPractises().refetch(),this.toastr.success("Success!"),this.deleteModal.hide()):this.toastr.error("Failed!")})}practicesSubmit(){let t={},e=null,i=null;this.btnLoading=!0,console.log(this.practicesForm.value),this.dataservice.upload(this.image).subscribe(a=>{var o;200==a.status?(e=null===(o=a.body[0])||void 0===o?void 0:o.id,console.log(a),this.dataservice.upload(this.file).subscribe(a=>{var o;200==a.status?(i=null===(o=a.body[0])||void 0===o?void 0:o.id,console.log(a),this.dataservice.createBestCropPractise(this.practicesForm.value,e,i).subscribe(e=>{t=e.data,console.log("response",e),e.data.createBestCropPractise?(this.toastr.success("Success!"),this.practicesForm.reset(),this.dataservice.getBestCropPractises().refetch(),this.practicesModal.hide(),this.btnLoading=!1):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})):(this.toastr.error("Image failed to upload!"),this.btnLoading=!1)})):(this.toastr.error("Image failed to upload!"),this.btnLoading=!1)})}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(n.a),d.Mb(c.c),d.Mb(o.c),d.Mb(u.b))},t.\u0275cmp=d.Gb({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(d.Ic(h,1),d.Ic(g,1)),2&t){let t;d.rc(t=d.ac())&&(e.practicesModal=t.first),d.rc(t=d.ac())&&(e.deleteModal=t.first)}},decls:61,vars:7,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],["type","button","data-toggle","modal",1,"btn","btn-primary",3,"disabled","click"],[1,"card-body"],[1,"row"],["class","col-3",4,"ngFor","ngForOf"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["practicesModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","crop"],["id","crop","required","","ngModel","","name","crop","formControlName","crop",1,"form-control"],["value","","disabled","","selected","","hidden",""],[3,"value",4,"ngFor","ngForOf"],["for","content"],["type","text","id","content","maxlength","150","name","content","rows","3","formControlName","content","placeholder","Enter description",1,"form-control"],["for","File"],["type","file","id","File","accept",".pdf","name","File","formControlName","File","placeholder","Choose file",3,"change"],["for","Image"],["width","100","height","100","style","object-fit: cover",3,"src",4,"ngIf"],["type","file","id","Image","accept",".jpg,.jpeg,.JPEG,.png","name","Image","formControlName","Image","placeholder","Choose image",3,"change"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["deleteModal","bs-modal"],[1,"modal-dialog","modal-dialog-centered","modal-sm"],[1,"modal-body","text-center"],[1,"modal-footer","justify-content-around"],["type","button",1,"btn","btn-primary",3,"click"],[1,"col-3"],[1,"img-container"],["height","200","width","200","alt","Card image cap",1,"card-img-top",3,"src"],[1,"overlay"],[1,"overlay-text"],["target","_blank",2,"color","white",3,"href"],[2,"display","flex","justify-content","space-between"],[1,"card-title"],["type","button",1,"btn","btn-outline-primary","p-1",3,"click"],["src","assets/deleteIcon.svg"],[1,"card-text"],[3,"value"],["width","100","height","100",2,"object-fit","cover",3,"src"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,e){if(1&t){const t=d.Tb();d.Sb(0,"div",0),d.Sb(1,"div",1),d.Sb(2,"div",2),d.Sb(3,"h2"),d.Dc(4,"Best Crop Practices"),d.Rb(),d.Sb(5,"div"),d.Sb(6,"button",3),d.Zb("click",function(){return d.vc(t),d.sc(12).show()}),d.Dc(7," Add New "),d.Rb(),d.Rb(),d.Rb(),d.Sb(8,"div",4),d.Sb(9,"div",5),d.Bc(10,m,17,6,"div",6),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(11,"div",7,8),d.Sb(13,"div",9),d.Sb(14,"div",10),d.Sb(15,"div",11),d.Sb(16,"h4",12),d.Dc(17,"Add/Edit Practice"),d.Rb(),d.Sb(18,"button",13),d.Zb("click",function(){return d.vc(t),d.sc(12).hide()}),d.Sb(19,"span",14),d.Dc(20,"\xd7"),d.Rb(),d.Rb(),d.Rb(),d.Sb(21,"div",15),d.Sb(22,"form",16),d.Zb("ngSubmit",function(){return e.practicesSubmit()}),d.Sb(23,"div",17),d.Sb(24,"label",18),d.Dc(25,"Crop"),d.Rb(),d.Sb(26,"select",19),d.Sb(27,"option",20),d.Dc(28,"Choose..."),d.Rb(),d.Bc(29,f,2,2,"option",21),d.Rb(),d.Rb(),d.Sb(30,"div",17),d.Sb(31,"label",22),d.Dc(32,"Description"),d.Rb(),d.Nb(33,"textarea",23),d.Rb(),d.Sb(34,"div",17),d.Sb(35,"label",24),d.Dc(36,"PDF File"),d.Rb(),d.Sb(37,"div"),d.Sb(38,"input",25),d.Zb("change",function(t){return e.onChange(t,!0)}),d.Rb(),d.Rb(),d.Rb(),d.Sb(39,"div",17),d.Sb(40,"label",26),d.Dc(41,"Preview image"),d.Rb(),d.Sb(42,"div"),d.Bc(43,v,1,1,"img",27),d.Rb(),d.Sb(44,"input",28),d.Zb("change",function(t){return e.onChange(t,!1)}),d.Rb(),d.Rb(),d.Sb(45,"button",29),d.Zb("click",function(){return d.vc(t),d.sc(12).hide()}),d.Dc(46," Close "),d.Rb(),d.Sb(47,"button",30),d.Bc(48,R,1,0,"span",31),d.Dc(49," Save changes "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(50,"div",7,32),d.Sb(52,"div",33),d.Sb(53,"div",10),d.Sb(54,"div",34),d.Dc(55," Do you want to delete this record? "),d.Rb(),d.Sb(56,"div",35),d.Sb(57,"button",29),d.Zb("click",function(){return d.vc(t),d.sc(51).hide()}),d.Dc(58," No! Cancel. "),d.Rb(),d.Sb(59,"button",36),d.Zb("click",function(){return e.deletePractice()}),d.Dc(60," Yes! Delete. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()}2&t&&(d.Ab(6),d.jc("disabled",!e.disableButton),d.Ab(4),d.jc("ngForOf",e.rowData),d.Ab(12),d.jc("formGroup",e.practicesForm),d.Ab(7),d.jc("ngForOf",e.Crops),d.Ab(14),d.jc("ngIf",e.imageUrl),d.Ab(4),d.jc("disabled",e.btnLoading||!e.practicesForm.valid),d.Ab(1),d.jc("ngIf",e.btnLoading))},directives:[a.j,p.a,o.t,o.j,o.e,o.q,o.p,o.i,o.d,o.m,o.u,o.b,o.g,a.k],encapsulation:2}),t})(),data:{roles:"KP_CALLER",title:"Best Crop Practices"}}]}];let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({imports:[[c.g.forChild(S)],c.g]}),t})();var y=i("YFAK");let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({imports:[[a.c,s.a,o.o,y.b.withComponents([]),C,r.c.forRoot(),p.b.forRoot(),o.f]]}),t})()}}]);