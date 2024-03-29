import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { dateConverter } from '../../constants/columnMetadata';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild('myModal') public myModal: ModalDirective;
  @ViewChild('areaModal') public areaModal: ModalDirective;
  @ViewChild('resultModal') public resultModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;
  @ViewChild('addProductModal') public addProductModal: ModalDirective;

  id: any;
  baseURL = environment.apiUrl;
  loading = true;
  details: any = [];
  btnLoading = false;
  dateConverter = dateConverter;
  users: any = [];
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  Retailers: any = [];
  Farmers: any = [];
  States: any = [];
  Crops: any = [];
  file: any = null;
  dispArea = false;
  agronomists;
  flag;
  deleteObj;
  agentForm = this.fb.group({
    ContactNumber: ['', Validators.required],
    // username: ["", Validators.required],
    blocked: [''],
    Name: ['', Validators.required],
    // email: ["", Validators.required],
    Farmer: ['', Validators.required],
    UserType: ['', Validators.required],
    Bio: [''],
    password: [''],
    state: ['', Validators.required],
    village: ['', Validators.required],
    lga: ['', Validators.required],
    Latitude: [''],
    Longitude: [''],
  });
  resultForm = this.fb.group({
    id: [''],
    itemName: ['', Validators.required],
    price: ['', Validators.required],
    unit: ['', Validators.required],
  });
  areaForm = this.fb.group({
    state: [''],
    agronomist_lgas: ['', Validators.required],
  });
  productForm = this.fb.group({
    Image: ['', Validators.required],
    itemName: ['', Validators.required],
    price: ['', Validators.required],
    unit: ['', Validators.required],
  });
  ngOnInit(): void {
    this.getLists();
    this.getAreas();
    this.getCrops();
    this.getLGAs();
    this.getStates();
    this.getVillages();
    this.getFarmers();
    this.getRetailers();
    this.activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.getTest();
  }
  imgUrl(url) {
    return `${environment.apiUrl}` + url;
  }
  getTest() {
    this.dataservice
      .getsingleRetailer(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log(
          'getsingleRetailer',
          result.data.usersPermissionsUsers.data[0]
        );
        this.details = result.data.usersPermissionsUsers.data[0];
        this.agentForm = this.fb.group({
          ContactNumber: [
            this.details.attributes?.ContactNumber,
            Validators.required,
          ],
          Name: [this.details.attributes?.Name, Validators.required],
          // email: [this.details.attributes?.email, Validators.required],
          Bio: [this.details.attributes?.Bio],
          Latitude: [this.details.attributes?.Latitude],
          Longitude: [this.details.attributes?.Longitude],
          state: [
            this.details?.attributes?.lga?.data?.attributes?.state?.data?.id,
            Validators.required,
          ],
          lga: [this.details?.attributes?.lga?.data?.id, Validators.required],
          village: [
            this.details?.attributes?.village?.data?.id,
            Validators.required,
          ],
          password: [''],
          blocked: [this.details?.attributes?.blocked],
          UserType: [this.details?.attributes?.UserType, Validators.required],
        });
        this.loading = false;
        this.dispArea =
          this.details?.attributes?.UserType === 'Agronomist' ? true : false;
        if (this.dispArea == true) {
          this.agronomists = this.details?.attributes?.agronomist_lgas?.data;
          // this.dataservice
          //   .getAgronomist(this.id)
          //   .valueChanges.subscribe((result: any) => {
          //     console.log("getAgronomist", result?.data?.agronomists?.data);
          //     this.agronomists = result?.data?.agronomists?.data[0];
          //   });
        }
      });
  }
  getCrops() {
    this.dataservice.getCrops(1, 10000, '').valueChanges.subscribe((result: any) => {
      console.log('getCrops', result.data.crops.data);
      this.Crops = result.data.crops.data;
    });
  }
  getStates() {
    this.dataservice.getStates(1, 10000, '').valueChanges.subscribe((result: any) => {
      console.log('getStates', result.data.states.data);
      this.States = result.data.states.data;
    });
  }
  getLGAs(id?) {
    this.dataservice.getLGAs(1, 10000, '', id).valueChanges.subscribe((result: any) => {
      console.log('getLGAs', result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  getAreas(id?) {
    this.dataservice.getAreas(1, 10000, '', id).valueChanges.subscribe((result: any) => {
      console.log('getAreas', result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  getRetailers() {
    this.dataservice
      .getRetailerCategories()
      .valueChanges.subscribe((result: any) => {
        console.log('getRetailers', result.data.retailerCategories.data);
        this.Retailers = result.data.retailerCategories.data;
      });
  }
  getFarmers() {
    this.dataservice
      .getUsers(undefined, undefined, 'Farmer')
      .valueChanges.subscribe((result: any) => {
        console.log('getFarmers', result.data.usersPermissionsUsers.data);
        this.Farmers = result.data.usersPermissionsUsers.data;
      });
  }
  getVillages(id?) {
    this.dataservice.getVillages(1, 10000, '', id).valueChanges.subscribe((result: any) => {
      console.log('getVillages', result.data.villages.data);
      this.Villages = result.data.villages.data;
    });
  }
  dateConvertor(date) {
    return new Date(date);
  }
  getLists() {
    this.loading = true;
  }
  openModal(data: any, flag) {
    this.resultModal.show();
    console.log(data, flag);
    this.flag = flag;
    this.resultForm = this.fb.group({
      id: [data?.id],
      soil_test_sample: [data?.id],
      itemName: [data?.attributes?.ItemName, Validators.required],
      price: [data?.attributes?.Price, Validators.required],
      unit: [data?.attributes?.Unit, Validators.required],
    });
  }
  openDeleteModal(data) {
    this.deleteObj = data;
    this.deleteModal.show();
  }
  FormSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.agentForm.value);
    this.dataservice.UpdateRetailer(this.agentForm.value, this.id).subscribe(
      (result: any) => {
        resp = result.data;
        console.log('response', result);
        if (result.data.updateUsersPermissionsUser) {
          this.toastr.success('User updated successfully!');
          this.btnLoading = false;
          this.myModal.hide();
          this.getTest();
        } else {
          this.toastr.error('Failed. Please check the fields!');
          this.btnLoading = false;
        }
      },
      (error) => {
        this.btnLoading = false;
      }
    );
  }
  ResultSubmit() {
    console.log('edit', this.resultForm.value);
    let resp = {};
    console.log(this.resultForm.value);
    this.dataservice
      .UpdateRetailerProducts(
        this.resultForm.value,
        this.details?.attributes?.retailer_categories?.data[0]?.id,
        this.id
      )
      .subscribe((result: any) => {
        resp = result.data;
        console.log('response', result);
        if (result.data.updateRetailerProduct) {
          this.toastr.success('Product updated successfully!');
          this.resultModal.hide();
          this.getTest();
        } else {
          this.toastr.error('Failed. Please check the fields!');
        }
      });
  }
  onChange(event: any) {
    this.file = [];
    for (let i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  filterArea(event) {
    this.getAreas(event.target.value);
  }
  filterVillage(event) {
    this.getVillages(event.target.value);
  }
  uploadProfPic() {
    let resp = {};
    this.dataservice.upload(this.file).subscribe((response: any) => {
      if (response.status == 200) {
        console.log(response);
        this.dataservice
          .UpdateRetailerPic(this.id, response.body[0]?.id)
          .subscribe((result: any) => {
            resp = result.data;
            console.log('response', result);
            if (result.data.updateUsersPermissionsUser) {
              this.toastr.success('Success!');
              this.file = null;
              this.getTest();
              this.addProductModal.hide();
            } else {
              this.toastr.error('Failed!');
            }
          });
      } else {
        this.toastr.error('Image failed to upload!');
      }
    });
  }
  AreaSubmit() {
    let resp = {};
    console.log(this.areaForm.value);
    this.dataservice
      .UpdateRetailer(this.areaForm.value, this.id)
      .subscribe((result: any) => {
        resp = result.data;
        console.log('response', result);
        if (result.data.updateUsersPermissionsUser) {
          this.toastr.success('User updated successfully!');
          this.areaModal.hide();
          this.getTest();
        } else {
          this.toastr.error('Failed. Please check the fields!');
        }
      });
  }
  ProductSubmit() {
    let resp = {};
    this.dataservice.upload(this.file).subscribe((response: any) => {
      if (response.status == 200) {
        console.log(response);
        this.dataservice
          .addRetailerProducts(
            this.productForm.value,
            this.details?.attributes?.retailer_categories?.data[0]?.id,
            this.id,
            response.body[0]?.id
          )
          .subscribe((result: any) => {
            resp = result.data;
            console.log('response', result);
            if (result.data.createRetailerProduct) {
              this.toastr.success('Success!');
              this.file = null;
              this.getTest();
              this.addProductModal.hide();
            } else {
              this.toastr.error('Failed!');
            }
          });
      } else {
        this.toastr.error('Image failed to upload!');
      }
    });
  }
  deleteProduct() {
    if (this.details?.attributes?.UserType !== 'Agronomist') {
      this.dataservice.deleteUser(this.id).subscribe((result: any) => {
        console.log('response', result);
        if (result.data.deleteUsersPermissionsUser) {
          this.toastr.success('Success!');
          this.deleteModal.hide();
          this.router.navigate(['/users/all']);
        } else {
          this.toastr.error('Failed!');
        }
      });
    } else {
      this.toastr.error('Can\'t delete Agronomist. Try setting as blocked.');
    }
  }
}
