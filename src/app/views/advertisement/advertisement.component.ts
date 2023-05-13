import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../data.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'advertisement.component.html',
})
export class AdvertisementComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild('advertisementModal') public advertisementModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  orders: any = {};
  baseURL = environment.apiUrl;

  advertisementForm = this.fb.group({
    clickUrl: [''],
    File: ['', Validators.required],
  });

  rowData: any = [];
  advertisement;
  retailerAdvertisement;
  file: any = null;
  check;

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getAdvertisements();
  }
  getAdvertisements() {
    this.dataservice.getDashboardAd().valueChanges.subscribe((result: any) => {
      console.log('advertisement', result.data.advertisement.data);
      this.advertisement = result.data.advertisement.data;
    });
    this.dataservice.getRetailerAd().valueChanges.subscribe((result: any) => {
      console.log(
        'retailerAdvertisement',
        result.data.retailerAdvertisement.data
      );
      this.retailerAdvertisement = result.data.retailerAdvertisement.data;
    });
  }
  // On file Select
  onChange(event: any) {
    this.file = [];
    for (let i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  openModal(data: any) {
    // this.deleteModal.show();
    this.check = data;
    console.log(data);
    this.advertisementModal.show();
  }
  advertisementSubmit() {
    let resp = {};
    let file = null;
    this.btnLoading = true;
    console.log(this.advertisementForm.value);
    this.dataservice.upload(this.file).subscribe((fileResponse: any) => {
      if (fileResponse.status == 200) {
        file = fileResponse.body[0]?.id;
        console.log(fileResponse);
        if (this.check == true) {
          this.dataservice
            .updateRetailerAd(this.advertisementForm?.value?.clickUrl, file)
            .subscribe((result: any) => {
              resp = result.data;
              console.log('response', result);
              if (result.data.updateRetailerAdvertisement) {
                this.toastr.success('Success!');
                this.getAdvertisements();
                this.btnLoading = false;
                this.advertisementModal.hide();
              } else {
                this.toastr.error('Failed. Please check the fields!');
                this.btnLoading = false;
              }
            });
        } else {
          this.dataservice
            .updateDashboardAd(this.advertisementForm?.value?.clickUrl, file)
            .subscribe((result: any) => {
              resp = result.data;
              console.log('response', result);
              if (result.data.updateAdvertisement) {
                this.toastr.success('Success!');
                this.getAdvertisements();
                this.btnLoading = false;
                this.advertisementModal.hide();
              } else {
                this.toastr.error('Failed. Please check the fields!');
                this.btnLoading = false;
              }
            });
        }
      } else {
        this.toastr.error('Image failed to upload!');
        this.btnLoading = false;
      }
    });
  }
}
