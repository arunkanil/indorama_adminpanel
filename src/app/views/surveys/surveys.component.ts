import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { SurveysColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "surveys.component.html",
})
export class SurveysComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...SurveysColumn];
    this.rowSelection = "single";
  }
  @ViewChild("cropPriceModal") public cropPriceModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  orders: any = {};
  columnDefs = [];
  States: any = [];
  Markets: any = [];
  Crops: any = [];
  imageUrl;

  cropPriceForm = this.fb.group({
    crop: ["", Validators.required],
    state: ["", Validators.required],
    market: ["", Validators.required],
    Price: ["", Validators.required],
    Unit: ["", Validators.required],
    Image: [""],
  });
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
    this.dataservice.getCropPrices().valueChanges.subscribe((result: any) => {
      console.log("getCropPrices", result.data.cropPrices.data);
      this.rowData = result.data.cropPrices.data;
    });
  }
  getCrops() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      console.log("getCrops", result.data.crops.data);
      this.Crops = result.data.crops.data;
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
  onChange(event: any) {
    this.file = event.target.files[0];
    console.log(event.target.files[0]);
  }
  openModal(data: any) {
    this.router.navigate(["/surveys/new_survey"]);
  }
  cropPriceSubmit() {
    let resp = {};
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
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCropPrice) {
              this.toastr.success("Success!");
              this.getCropPrices();
              this.file = null;
              this.cropPriceModal.hide();
              this.gridApi.deselectAll();
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          });
          }
        });
      } else {
        this.dataservice
          .UpdateCropPrice(
            this.cropPriceForm.value,
            this.selectedRows[0].id,
            null
          )
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCropPrice) {
              this.toastr.success("Success!");
              this.getCropPrices();
              this.file = null;
              this.cropPriceModal.hide();
              this.gridApi.deselectAll();
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          });
      }
    } else {
      this.dataservice.upload(this.file).subscribe((response: any) => {
        if (response.status == 200) {
          console.log(response);
          this.dataservice
            .AddCropPrice(this.cropPriceForm.value, response.body[0]?.id)
            .subscribe((result: any) => {
              resp = result.data;
              console.log("response", result);
              if (result.data.createCropPrice) {
                this.toastr.success("Success!");
                this.getCropPrices();
                this.file = null;
                this.cropPriceModal.hide();
                this.gridApi.deselectAll();
              } else {
                this.toastr.error("Failed. Please check the fields!");
              }
            });
        } else {
          this.toastr.error("Image failed to upload!");
        }
      });
    }
  }
}
