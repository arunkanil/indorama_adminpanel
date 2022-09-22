import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
// import { ActionRenderer } from "../../utils/StatusRenderer";

import { CropPricesColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "crop-prices.component.html",
})
export class CropPricesComponent {
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
  @ViewChild("cropPriceModal") public cropPriceModal: ModalDirective;
  @ViewChild("approveModal") public approveModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  disableNextButton = false;
  disablePrevButton = true;
  selectedList = "All";
  listCheck = false;
  publicationState = "PREVIEW";
  toApprove = undefined;
  isRejected = undefined;
  columnDefs = [];
  States: any = [];
  Markets: any = [];
  Crops: any = [];
  imageUrl;
  meta;
  pageSize = 20;
  from = 1;
  to = 20;
  count = 1;
  cropPriceForm = this.fb.group({
    crop: ["", Validators.required],
    state: ["", Validators.required],
    market: ["", Validators.required],
    Price: ["", Validators.required],
    Unit: ["", Validators.required],
    Image: [""],
  });
  // frameworkComponents = {
  //   statusRenderer: ActionRenderer,
  // };
  rowData: any = [];
  selectedRows: any = [];
  selectedYear: any = new Date().getFullYear();
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any = {};
  file: any = null;

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getCropPrices();
    this.getCrops();
    this.getMarkets();
    this.getStates();
  }
  getCropPrices() {
    this.dataservice
      .getCropPrices(
        1,
        this.pageSize,
        this.publicationState,
        this.toApprove,
        this.isRejected
      )
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.cropPrices.data;
        this.meta = result.data.cropPrices.meta;
        if (this.meta?.pagination?.pageCount <= 1) {
          this.disablePrevButton = true;
          this.disableNextButton = true;
        }
      });
  }
  getCrops() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      this.Crops = result.data.crops.data;
    });
  }
  loadNext() {
    this.count++;
    this.disablePrevButton = false;
    this.from = this.from + this.pageSize;
    this.to =
      this.to + this.pageSize > this.meta?.pagination?.total
        ? this.meta?.pagination?.total
        : this.to + this.pageSize;
    if (this.count === this.meta.pagination.pageCount) {
      this.disableNextButton = true;
    }
    this.dataservice
      .getCropPrices(
        this.count,
        this.pageSize,
        this.publicationState,
        this.toApprove
      )
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.cropPrices.meta;
        this.rowData = result.data.cropPrices.data;
      });
  }
  loadPrev() {
    this.count--;
    if (this.count < this.meta.pagination.pageCount) {
      this.disableNextButton = false;
    }
    if (this.count === 1) {
      this.disablePrevButton = true;
    }
    this.from = this.from - this.pageSize;
    this.to = this.to - this.rowData.length;
    this.dataservice
      .getCropPrices(
        this.count,
        this.pageSize,
        this.publicationState,
        this.toApprove
      )
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.cropPrices.meta;
        this.rowData = result.data.cropPrices.data;
      });
  }
  getStates() {
    this.dataservice.getStates().valueChanges.subscribe((result: any) => {
      console.log("getStates", result.data.states.data);
      this.States = result.data.states.data;
    });
  }
  getMarkets(id?) {
    this.dataservice.getMarkets(id).valueChanges.subscribe((result: any) => {
      console.log("getMarkets", result.data.markets.data);
      this.Markets = result.data.markets.data;
    });
  }
  filterMarkets(event) {
    this.getMarkets(event.target.value);
  }
  toggleCropPrices(data) {
    switch (data) {
      case "Rejected":
        this.selectedList = "Rejected";
        this.publicationState = "PREVIEW";
        this.toApprove = null;
        this.isRejected = true;
        this.getCropPrices();
        break;
      case "Approvalpending":
        this.selectedList = "Pending";
        this.publicationState = "PREVIEW";
        this.toApprove = null;
        this.isRejected = false;
        this.getCropPrices();
        break;
      case "All":
        this.selectedList = "All";
        this.publicationState = "PREVIEW";
        this.toApprove = undefined;
        this.isRejected = undefined;
        this.getCropPrices();
        break;
    }
    // if (data == 'Approvalpending') {
    //   this.selectedList = "Approval Pending";
    //   this.publicationState = "PREVIEW";
    //   this.toApprove = null;
    //   this.getCropPrices();
    // }
    // else if{

    // } else {
    //   this.selectedList = "All";
    //   this.publicationState = "PREVIEW";
    //   this.toApprove = undefined;
    //   this.getCropPrices();
    // }
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
  }
  // On file Select
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  approveOrReject(check) {
    let published = null;
    if (!check) published = new Date();
    this.dataservice
      .UpdateCropPrice(
        undefined,
        this.selectedRows[0].id,
        undefined,
        check,
        published
      )
      .subscribe(
        (result: any) => {
          console.log("response", result);
          if (result.data.updateCropPrice) {
            this.toastr.success("Success!");
            this.getCropPrices();
            this.file = null;
            this.approveModal.hide();
            this.gridApi.deselectAll();
            this.btnLoading = false;
          }
        },
        (error) => {
          this.toastr.error("Failed. Please check the fields!");
          this.btnLoading = false;
        }
      );
  }
  openApproveModal(data) {
    this.approveModal.show();
  }
  openModal(data: any) {
    this.imageUrl = null;
    this.cropPriceModal.show();
    if (data) {
      this.cropPriceForm = this.fb.group({
        crop: [
          this.selectedRows[0].attributes.crop.data.id,
          Validators.required,
        ],
        state: [
          this.selectedRows[0].attributes.state.data.id,
          Validators.required,
        ],
        market: [
          this.selectedRows[0].attributes.market.data.id,
          Validators.required,
        ],
        Price: [this.selectedRows[0].attributes.Price, Validators.required],
        Unit: [this.selectedRows[0].attributes.Unit, Validators.required],
        Image: [
          this.selectedRows[0].attributes.Image?.data?.id,
          Validators.required,
        ],
      });
      this.imageUrl = this.selectedRows[0].attributes.Image?.data?.attributes
        ?.url
        ? "https://indoramaapp.untanglestrategy.com" +
          this.selectedRows[0].attributes.Image?.data?.attributes?.url
        : null;
    } else {
      this.cropPriceForm = this.fb.group({
        crop: ["", Validators.required],
        state: ["", Validators.required],
        market: ["", Validators.required],
        Price: ["", Validators.required],
        Unit: ["", Validators.required],
        Image: ["", Validators.required],
      });
      this.imageUrl = null;
    }
  }
  cropPriceSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.cropPriceForm.value);
    if (!this.disableButton) {
      if (this.file) {
        this.dataservice.upload(this.file).subscribe((response: any) => {
          if (response.status == 200) {
            console.log(response);
            this.dataservice
              .UpdateCropPrice(
                this.cropPriceForm.value,
                this.selectedRows[0].id,
                response.body[0]?.id
              )
              .subscribe(
                (result: any) => {
                  resp = result.data;
                  console.log("response", result);
                  if (result.data.updateCropPrice) {
                    this.toastr.success("Success!");
                    this.getCropPrices();
                    this.file = null;
                    this.cropPriceModal.hide();
                    this.gridApi.deselectAll();
                    this.btnLoading = false;
                  }
                },
                (error) => {
                  this.toastr.error("Failed. Please check the fields!");
                  this.btnLoading = false;
                }
              );
          }
        });
      } else {
        this.dataservice
          .UpdateCropPrice(
            this.cropPriceForm.value,
            this.selectedRows[0].id,
            null
          )
          .subscribe(
            (result: any) => {
              resp = result.data;
              console.log("response", result);
              if (result.data.updateCropPrice) {
                this.toastr.success("Success!");
                this.getCropPrices();
                this.file = null;
                this.cropPriceModal.hide();
                this.gridApi.deselectAll();
                this.btnLoading = false;
              }
            },
            (error) => {
              this.toastr.error("Failed. Please check the fields!");
              this.btnLoading = false;
            }
          );
      }
    } else {
      this.dataservice.upload(this.file).subscribe((response: any) => {
        if (response.status == 200) {
          console.log(response);
          this.dataservice
            .AddCropPrice(this.cropPriceForm.value, response.body[0]?.id)
            .subscribe(
              (result: any) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.createCropPrice) {
                  this.toastr.success("Success!");
                  this.getCropPrices();
                  this.file = null;
                  this.cropPriceModal.hide();
                  this.gridApi.deselectAll();
                }
                this.btnLoading = false;
              },
              (error) => {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
              }
            );
        } else {
          this.toastr.error("Image failed to upload!");
        }
      });
    }
  }
}
