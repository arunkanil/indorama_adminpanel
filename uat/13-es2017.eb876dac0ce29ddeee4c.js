(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Th2f:function(e,t,i){"use strict";i.r(t),i.d(t,"AdvertisementModule",function(){return f});var a=i("SVse"),r=i("s7LF"),s=i("FE24"),n=i("2ZVE"),d=i("iInd"),l=i("R7Hv"),b=i("AytR"),o=i("8Y7J"),c=i("EApP"),u=i("LqlI");const m=["advertisementModal"];function v(e,t){1&e&&o.Nb(0,"span",31)}const h=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(()=>{class e{constructor(e,t,i,a){this.dataservice=e,this.router=t,this.fb=i,this.toastr=a,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.orders={},this.baseURL=b.a.apiUrl,this.advertisementForm=this.fb.group({clickUrl:[""],File:["",r.s.required]}),this.rowData=[],this.file=null}ngOnInit(){this.loading=!0,console.log(this.router),this.getAdvertisements()}getAdvertisements(){this.dataservice.getDashboardAd().valueChanges.subscribe(e=>{console.log("advertisement",e.data.advertisement.data),this.advertisement=e.data.advertisement.data}),this.dataservice.getRetailerAd().valueChanges.subscribe(e=>{console.log("retailerAdvertisement",e.data.retailerAdvertisement.data),this.retailerAdvertisement=e.data.retailerAdvertisement.data})}onChange(e){this.file=[];for(let t=0;t<e.target.files.length;t++)this.file.push(e.target.files[t]);console.log(this.file)}openModal(e){this.check=e,console.log(e),this.advertisementModal.show()}advertisementSubmit(){let e={},t=null;this.btnLoading=!0,console.log(this.advertisementForm.value),this.dataservice.upload(this.file).subscribe(i=>{var a,r,s,n,d;200==i.status?(t=null===(a=i.body[0])||void 0===a?void 0:a.id,console.log(i),1==this.check?this.dataservice.updateRetailerAd(null===(s=null===(r=this.advertisementForm)||void 0===r?void 0:r.value)||void 0===s?void 0:s.clickUrl,t).subscribe(t=>{e=t.data,console.log("response",t),t.data.updateRetailerAdvertisement?(this.toastr.success("Success!"),this.getAdvertisements(),this.btnLoading=!1,this.advertisementModal.hide()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)}):this.dataservice.updateDashboardAd(null===(d=null===(n=this.advertisementForm)||void 0===n?void 0:n.value)||void 0===d?void 0:d.clickUrl,t).subscribe(t=>{e=t.data,console.log("response",t),t.data.updateAdvertisement?(this.toastr.success("Success!"),this.getAdvertisements(),this.btnLoading=!1,this.advertisementModal.hide()):(this.toastr.error("Failed. Please check the fields!"),this.btnLoading=!1)})):(this.toastr.error("Image failed to upload!"),this.btnLoading=!1)})}}return e.\u0275fac=function(t){return new(t||e)(o.Mb(l.a),o.Mb(d.c),o.Mb(r.c),o.Mb(c.b))},e.\u0275cmp=o.Gb({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&o.Ic(m,1),2&e){let e;o.rc(e=o.ac())&&(t.advertisementModal=e.first)}},decls:62,vars:11,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[1,"card-body"],[1,"text-muted"],[1,"row"],[1,"col-6"],[1,"img-container"],["height","200","width","200","alt","Card image cap",1,"card-img-top",3,"src"],[1,"overlay"],[1,"overlay-text"],["target","_blank",2,"color","white",3,"href"],[2,"display","flex","justify-content","space-between"],[1,"card-title"],["type","button",1,"btn","btn-outline-primary","p-1",3,"click"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["advertisementModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","File"],["type","file","id","File","accept",".jpg, .jpeg, .png","name","File","formControlName","File","placeholder","Choose file",3,"change"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,t){if(1&e){const e=o.Tb();o.Sb(0,"div",0),o.Sb(1,"div",1),o.Sb(2,"div",2),o.Sb(3,"h2"),o.Dc(4,"Best Crop Practices"),o.Rb(),o.Nb(5,"div"),o.Rb(),o.Sb(6,"div",3),o.Sb(7,"p",4),o.Dc(8,"Images to uploaded need to be of 375 x 80 resolution"),o.Rb(),o.Sb(9,"div",5),o.Sb(10,"div",6),o.Sb(11,"div",1),o.Sb(12,"div",7),o.Nb(13,"img",8),o.Sb(14,"div",9),o.Sb(15,"div",10),o.Sb(16,"a",11),o.Dc(17,"Click to view file"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(18,"div",3),o.Sb(19,"div",12),o.Sb(20,"h5",13),o.Dc(21," Retailer Advertisement "),o.Rb(),o.Sb(22,"div"),o.Sb(23,"button",14),o.Zb("click",function(){return t.openModal(!0)}),o.Dc(24," Change "),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(25,"div",6),o.Sb(26,"div",1),o.Sb(27,"div",7),o.Nb(28,"img",8),o.Sb(29,"div",9),o.Sb(30,"div",10),o.Sb(31,"a",11),o.Dc(32,"Click to view file"),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(33,"div",3),o.Sb(34,"div",12),o.Sb(35,"h5",13),o.Dc(36," Dashboard Advertisement "),o.Rb(),o.Sb(37,"div"),o.Sb(38,"button",14),o.Zb("click",function(){return t.openModal(!1)}),o.Dc(39," Change "),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Sb(40,"div",15,16),o.Sb(42,"div",17),o.Sb(43,"div",18),o.Sb(44,"div",19),o.Sb(45,"h4",20),o.Dc(46,"Change Advertisement"),o.Rb(),o.Sb(47,"button",21),o.Zb("click",function(){return o.vc(e),o.sc(41).hide()}),o.Sb(48,"span",22),o.Dc(49,"\xd7"),o.Rb(),o.Rb(),o.Rb(),o.Sb(50,"div",23),o.Sb(51,"form",24),o.Zb("ngSubmit",function(){return t.advertisementSubmit()}),o.Sb(52,"div",25),o.Sb(53,"label",26),o.Dc(54,"Image"),o.Rb(),o.Sb(55,"div"),o.Sb(56,"input",27),o.Zb("change",function(e){return t.onChange(e)}),o.Rb(),o.Rb(),o.Rb(),o.Sb(57,"button",28),o.Zb("click",function(){return o.vc(e),o.sc(41).hide()}),o.Dc(58," Close "),o.Rb(),o.Sb(59,"button",29),o.Bc(60,v,1,0,"span",30),o.Dc(61," Save changes "),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb(),o.Rb()}2&e&&(o.Ab(13),o.lc("src","",t.baseURL,"",null==t.retailerAdvertisement||null==t.retailerAdvertisement.attributes||null==t.retailerAdvertisement.attributes.Image||null==t.retailerAdvertisement.attributes.Image.data||null==t.retailerAdvertisement.attributes.Image.data.attributes?null:t.retailerAdvertisement.attributes.Image.data.attributes.url,"",o.xc),o.Ab(3),o.lc("href","",t.baseURL,"",null==t.retailerAdvertisement||null==t.retailerAdvertisement.attributes||null==t.retailerAdvertisement.attributes.Image||null==t.retailerAdvertisement.attributes.Image.data||null==t.retailerAdvertisement.attributes.Image.data.attributes?null:t.retailerAdvertisement.attributes.Image.data.attributes.url,"",o.xc),o.Ab(12),o.lc("src","",t.baseURL,"",null==t.advertisement||null==t.advertisement.attributes||null==t.advertisement.attributes.AdImage||null==t.advertisement.attributes.AdImage.data||null==t.advertisement.attributes.AdImage.data.attributes?null:t.advertisement.attributes.AdImage.data.attributes.url,"",o.xc),o.Ab(3),o.lc("href","",t.baseURL,"",null==t.advertisement||null==t.advertisement.attributes||null==t.advertisement.attributes.AdImage||null==t.advertisement.attributes.AdImage.data||null==t.advertisement.attributes.AdImage.data.attributes?null:t.advertisement.attributes.AdImage.data.attributes.url,"",o.xc),o.Ab(20),o.jc("formGroup",t.advertisementForm),o.Ab(8),o.jc("disabled",t.btnLoading||!t.advertisementForm.valid),o.Ab(1),o.jc("ngIf",t.btnLoading))},directives:[u.a,r.t,r.j,r.e,r.b,r.i,r.d,a.k],encapsulation:2}),e})(),data:{roles:"KP_CALLER",title:"Advertisement"}}]}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[d.g.forChild(h)],d.g]}),e})();var p=i("YFAK");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Kb({type:e}),e.\u0275inj=o.Jb({imports:[[a.c,n.a,r.o,p.b.withComponents([]),g,s.c.forRoot(),u.b.forRoot(),r.f]]}),e})()}}]);