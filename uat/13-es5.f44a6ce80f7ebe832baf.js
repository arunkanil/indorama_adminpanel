!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Th2f:function(t,a,r){"use strict";r.r(a),r.d(a,"AdvertisementModule",function(){return k});var n=r("SVse"),s=r("s7LF"),d=r("FE24"),l=r("2ZVE"),o=r("iInd"),b=r("R7Hv"),c=r("AytR"),u=r("8Y7J"),v=r("EApP"),m=r("LqlI"),h=["advertisementModal"];function f(e,t){1&e&&u.Nb(0,"span",31)}var g,p,R,S=[{path:"",children:[{path:"",redirectTo:"cropprices"},{path:"all",component:(g=function(){function t(i,a,r,n){e(this,t),this.dataservice=i,this.router=a,this.fb=r,this.toastr=n,this.loading=!0,this.btnLoading=!1,this.disableButton=!0,this.orders={},this.baseURL=c.a.apiUrl,this.advertisementForm=this.fb.group({clickUrl:[""],File:["",s.s.required]}),this.rowData=[],this.file=null}return i(t,[{key:"ngOnInit",value:function(){this.loading=!0,console.log(this.router),this.getAdvertisements()}},{key:"getAdvertisements",value:function(){var e=this;this.dataservice.getDashboardAd().valueChanges.subscribe(function(t){console.log("advertisement",t.data.advertisement.data),e.advertisement=t.data.advertisement.data}),this.dataservice.getRetailerAd().valueChanges.subscribe(function(t){console.log("retailerAdvertisement",t.data.retailerAdvertisement.data),e.retailerAdvertisement=t.data.retailerAdvertisement.data})}},{key:"onChange",value:function(e){this.file=[];for(var t=0;t<e.target.files.length;t++)this.file.push(e.target.files[t]);console.log(this.file)}},{key:"openModal",value:function(e){this.check=e,console.log(e),this.advertisementModal.show()}},{key:"advertisementSubmit",value:function(){var e=this,t=null;this.btnLoading=!0,console.log(this.advertisementForm.value),this.dataservice.upload(this.file).subscribe(function(i){var a,r,n,s,d;200==i.status?(t=null===(a=i.body[0])||void 0===a?void 0:a.id,console.log(i),1==e.check?e.dataservice.updateRetailerAd(null===(n=null===(r=e.advertisementForm)||void 0===r?void 0:r.value)||void 0===n?void 0:n.clickUrl,t).subscribe(function(t){t.data,console.log("response",t),t.data.updateRetailerAdvertisement?(e.toastr.success("Success!"),e.getAdvertisements(),e.btnLoading=!1,e.advertisementModal.hide()):(e.toastr.error("Failed. Please check the fields!"),e.btnLoading=!1)}):e.dataservice.updateDashboardAd(null===(d=null===(s=e.advertisementForm)||void 0===s?void 0:s.value)||void 0===d?void 0:d.clickUrl,t).subscribe(function(t){t.data,console.log("response",t),t.data.updateAdvertisement?(e.toastr.success("Success!"),e.getAdvertisements(),e.btnLoading=!1,e.advertisementModal.hide()):(e.toastr.error("Failed. Please check the fields!"),e.btnLoading=!1)})):(e.toastr.error("Image failed to upload!"),e.btnLoading=!1)})}}]),t}(),g.\u0275fac=function(e){return new(e||g)(u.Mb(b.a),u.Mb(o.c),u.Mb(s.c),u.Mb(v.b))},g.\u0275cmp=u.Gb({type:g,selectors:[["ng-component"]],viewQuery:function(e,t){var i;1&e&&u.Ic(h,1),2&e&&u.rc(i=u.ac())&&(t.advertisementModal=i.first)},decls:62,vars:11,consts:[[1,"animated","fadeIn"],[1,"card"],[1,"card-header",2,"display","flex","justify-content","space-between"],[1,"card-body"],[1,"text-muted"],[1,"row"],[1,"col-6"],[1,"img-container"],["height","200","width","200","alt","Card image cap",1,"card-img-top",3,"src"],[1,"overlay"],[1,"overlay-text"],["target","_blank",2,"color","white",3,"href"],[2,"display","flex","justify-content","space-between"],[1,"card-title"],["type","button",1,"btn","btn-outline-primary","p-1",3,"click"],["bsModal","","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade"],["advertisementModal","bs-modal"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","File"],["type","file","id","File","accept",".jpg, .jpeg, .png","name","File","formControlName","File","placeholder","Choose file",3,"change"],["type","button",1,"btn","btn-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-2",3,"disabled"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,t){if(1&e){var i=u.Tb();u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"h2"),u.Dc(4,"Best Crop Practices"),u.Rb(),u.Nb(5,"div"),u.Rb(),u.Sb(6,"div",3),u.Sb(7,"p",4),u.Dc(8,"Images to uploaded need to be of 375 x 80 resolution"),u.Rb(),u.Sb(9,"div",5),u.Sb(10,"div",6),u.Sb(11,"div",1),u.Sb(12,"div",7),u.Nb(13,"img",8),u.Sb(14,"div",9),u.Sb(15,"div",10),u.Sb(16,"a",11),u.Dc(17,"Click to view file"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(18,"div",3),u.Sb(19,"div",12),u.Sb(20,"h5",13),u.Dc(21," Retailer Advertisement "),u.Rb(),u.Sb(22,"div"),u.Sb(23,"button",14),u.Zb("click",function(){return t.openModal(!0)}),u.Dc(24," Change "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(25,"div",6),u.Sb(26,"div",1),u.Sb(27,"div",7),u.Nb(28,"img",8),u.Sb(29,"div",9),u.Sb(30,"div",10),u.Sb(31,"a",11),u.Dc(32,"Click to view file"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(33,"div",3),u.Sb(34,"div",12),u.Sb(35,"h5",13),u.Dc(36," Dashboard Advertisement "),u.Rb(),u.Sb(37,"div"),u.Sb(38,"button",14),u.Zb("click",function(){return t.openModal(!1)}),u.Dc(39," Change "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(40,"div",15,16),u.Sb(42,"div",17),u.Sb(43,"div",18),u.Sb(44,"div",19),u.Sb(45,"h4",20),u.Dc(46,"Change Advertisement"),u.Rb(),u.Sb(47,"button",21),u.Zb("click",function(){return u.vc(i),u.sc(41).hide()}),u.Sb(48,"span",22),u.Dc(49,"\xd7"),u.Rb(),u.Rb(),u.Rb(),u.Sb(50,"div",23),u.Sb(51,"form",24),u.Zb("ngSubmit",function(){return t.advertisementSubmit()}),u.Sb(52,"div",25),u.Sb(53,"label",26),u.Dc(54,"Image"),u.Rb(),u.Sb(55,"div"),u.Sb(56,"input",27),u.Zb("change",function(e){return t.onChange(e)}),u.Rb(),u.Rb(),u.Rb(),u.Sb(57,"button",28),u.Zb("click",function(){return u.vc(i),u.sc(41).hide()}),u.Dc(58," Close "),u.Rb(),u.Sb(59,"button",29),u.Bc(60,f,1,0,"span",30),u.Dc(61," Save changes "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}2&e&&(u.Ab(13),u.lc("src","",t.baseURL,"",null==t.retailerAdvertisement||null==t.retailerAdvertisement.attributes||null==t.retailerAdvertisement.attributes.Image||null==t.retailerAdvertisement.attributes.Image.data||null==t.retailerAdvertisement.attributes.Image.data.attributes?null:t.retailerAdvertisement.attributes.Image.data.attributes.url,"",u.xc),u.Ab(3),u.lc("href","",t.baseURL,"",null==t.retailerAdvertisement||null==t.retailerAdvertisement.attributes||null==t.retailerAdvertisement.attributes.Image||null==t.retailerAdvertisement.attributes.Image.data||null==t.retailerAdvertisement.attributes.Image.data.attributes?null:t.retailerAdvertisement.attributes.Image.data.attributes.url,"",u.xc),u.Ab(12),u.lc("src","",t.baseURL,"",null==t.advertisement||null==t.advertisement.attributes||null==t.advertisement.attributes.AdImage||null==t.advertisement.attributes.AdImage.data||null==t.advertisement.attributes.AdImage.data.attributes?null:t.advertisement.attributes.AdImage.data.attributes.url,"",u.xc),u.Ab(3),u.lc("href","",t.baseURL,"",null==t.advertisement||null==t.advertisement.attributes||null==t.advertisement.attributes.AdImage||null==t.advertisement.attributes.AdImage.data||null==t.advertisement.attributes.AdImage.data.attributes?null:t.advertisement.attributes.AdImage.data.attributes.url,"",u.xc),u.Ab(20),u.jc("formGroup",t.advertisementForm),u.Ab(8),u.jc("disabled",t.btnLoading||!t.advertisementForm.valid),u.Ab(1),u.jc("ngIf",t.btnLoading))},directives:[m.a,s.t,s.j,s.e,s.b,s.i,s.d,n.k],encapsulation:2}),g),data:{roles:"KP_CALLER",title:"Advertisement"}}]}],A=((p=i(function t(){e(this,t)})).\u0275fac=function(e){return new(e||p)},p.\u0275mod=u.Kb({type:p}),p.\u0275inj=u.Jb({imports:[[o.g.forChild(S)],o.g]}),p),y=r("YFAK"),k=((R=i(function t(){e(this,t)})).\u0275fac=function(e){return new(e||R)},R.\u0275mod=u.Kb({type:R}),R.\u0275inj=u.Jb({imports:[[n.c,l.a,s.o,y.b.withComponents([]),A,d.c.forRoot(),m.b.forRoot(),s.f]]}),R)}}])}();