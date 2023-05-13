import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../data.service';
import { CropPricesColumn } from '../../constants/columnMetadata';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'best-crop-practices.component.html',
})
export class BestCropPracticesComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...CropPricesColumn];
    this.rowSelection = 'single';
  }
  @ViewChild('practicesModal') public practicesModal: ModalDirective;
  @ViewChild('deleteModal') public deleteModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  title = 'Verification';
  orders: any = {};
  columnDefs = [];
  Crops: any = [];
  imageUrl;
  baseURL = environment.apiUrl;
  practicesForm = this.fb.group({
    crop: ['', Validators.required],
    content: ['', Validators.required],
    File: ['', Validators.required],
    Image: ['', Validators.required],
  });
  rowData: any = [];
  selectedRows: any = [];
  filter: any = {};
  file: any = null;
  image: any = null;
  deleteId;

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getBestCropPractises();
    this.getCrops();
  }
  getBestCropPractises() {
    this.dataservice
      .getBestCropPractises(1, 1000)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.bestCropPractises.data;
        console.log(this.rowData);
      });
  }
  getCrops() {
    this.dataservice.getCrops(1, 10000, '').valueChanges.subscribe((result: any) => {
      this.Crops = result.data.crops.data;
    });
  }
  // On file Select
  onChange(event: any, check) {
    if (check == true) {
      this.file = [];
      for (let i = 0; i < event.target.files.length; i++) {
        this.file.push(event.target.files[i]);
      }
    } else {
      this.image = [];
      for (let i = 0; i < event.target.files.length; i++) {
        this.image.push(event.target.files[i]);
      }
    }
    console.log(this.file, this.image);
  }
  openModal(data: any) {
    this.deleteModal.show();
    this.deleteId = data.id;
  }
  deletePractice() {
    this.dataservice
      .deleteBestPractice(this.deleteId)
      .subscribe((result: any) => {
        console.log('response', result);
        if (result.data.deleteBestCropPractise) {
          this.dataservice.getBestCropPractises().refetch();
          this.toastr.success('Success!');
          this.deleteModal.hide();
        } else {
          this.toastr.error('Failed!');
        }
      });
  }
  practicesSubmit() {
    let resp = {};
    let image = null;
    let file = null;
    this.btnLoading = true;
    console.log(this.practicesForm.value);
    this.dataservice.upload(this.image).subscribe((imgResponse: any) => {
      if (imgResponse.status == 200) {
        image = imgResponse.body[0]?.id;
        console.log(imgResponse);
        this.dataservice.upload(this.file).subscribe((fileResponse: any) => {
          if (fileResponse.status == 200) {
            file = fileResponse.body[0]?.id;
            console.log(fileResponse);
            this.dataservice
              .createBestCropPractise(this.practicesForm.value, image, file)
              .subscribe((result: any) => {
                resp = result.data;
                console.log('response', result);
                if (result.data.createBestCropPractise) {
                  this.toastr.success('Success!');
                  this.practicesForm.reset();
                  this.dataservice.getBestCropPractises().refetch();
                  this.practicesModal.hide();
                  this.btnLoading = false;
                } else {
                  this.toastr.error('Failed. Please check the fields!');
                  this.btnLoading = false;
                }
              });
          } else {
            this.toastr.error('Image failed to upload!');
            this.btnLoading = false;
          }
        });
      } else {
        this.toastr.error('Image failed to upload!');
        this.btnLoading = false;
      }
    });
  }
}
