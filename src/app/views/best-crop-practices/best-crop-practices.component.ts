import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
// import { ActionRenderer } from "../../utils/StatusRenderer";

import { CropPricesColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "best-crop-practices.component.html",
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
    this.rowSelection = "single";
  }
  @ViewChild("practicesModal") public practicesModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  title = "Verification";
  orders: any = {};
  columnDefs = [];
  Crops: any = [];
  imageUrl;

  practicesForm = this.fb.group({
    crop: ["", Validators.required],
    content: ["", Validators.required],
    File: ["", Validators.required],
    Image: ["", Validators.required],
  });
  // frameworkComponents = {
  //   statusRenderer: ActionRenderer,
  // };
  rowData: any = [];
  selectedRows: any = [];
  private gridApi;
  private gridColumnApi;
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
      .getBestCropPractises()
      .valueChanges.subscribe((result: any) => {
        console.log("getBestCropPractises", result.data.bestCropPractises.data);
        this.rowData = result.data.bestCropPractises.data;
      });
  }
  getCrops() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      console.log("getCrops", result.data.crops.data);
      this.Crops = result.data.crops.data;
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
  onRowClicked(event: any) {
    console.log("row", event.data);
  }
  onSelectionChanged(event: any) {
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectedRows.length > 0) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
    console.log(this.selectedRows, this.selectedRows[0].attributes.Name);
  }
  // On file Select
  onChange(event: any, check) {
    if (check == true) {
      this.file = event.target.files[0];
    } else {
      this.image = event.target.files[0];
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
        console.log("response", result);
        if (result.data.deleteBestCropPractise) {
          this.toastr.success("Success!");
          this.deleteModal.hide();
          this.getBestCropPractises();
        } else {
          this.toastr.error("Failed!");
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
                console.log("response", result);
                if (result.data.createBestCropPractise) {
                  this.toastr.success("Success!");
                  this.getBestCropPractises();
                  this.practicesModal.hide();
                } else {
                  this.toastr.error("Failed. Please check the fields!");
                  this.btnLoading = false;
                }
              });
          } else {
            this.toastr.error("Image failed to upload!");
            this.btnLoading = false;
          }
        });
      } else {
        this.toastr.error("Image failed to upload!");
        this.btnLoading = false;
      }
    });
  }
}
