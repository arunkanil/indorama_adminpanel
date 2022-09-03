import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { ActivitiesColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "activities.component.html",
})
export class ActivitiesComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...ActivitiesColumn];
    this.rowSelection = "single";
  }
  @ViewChild("activitiesModal") public activitiesModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  orders: any = {};
  columnDefs = [];
  States: any = [];
  Areas: any = [];
  Crops: any = [];

  activitiesForm = this.fb.group({
    ActivityType: ["", Validators.required],
    Latitude: ["", Validators.required],
    Longitude: ["", Validators.required],
    NoOfAttendees: ["", Validators.required],
    area: ["", Validators.required],
    crop: [""],
    FarmerName: [""],
    PlannedFarmDay: [""],
    ConditionOfCrop: [""],
    Date: ["", Validators.required],
    Time: ["", Validators.required],
    Reason: ["", Validators.required],
  });
  rowData: any = [];
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.loading = true;
    this.getActivities();
    this.getCrops();
    this.getAreas();
    this.getStates();
  }
  getActivities() {
    this.dataservice.getActivities().valueChanges.subscribe((result: any) => {
      console.log("getActivities", result.data.activities.data);
      this.rowData = result.data.activities.data;
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
  getAreas(lgaid?) {
    this.dataservice.getAreas(lgaid).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
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
    let selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows, selectedRows[0].attributes.Name);
    this.router.navigate(["/activities/activity_details",selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  openModal(data: any) {
    this.activitiesModal.show();
  }
  activitiesSubmit() {
    let resp = {};
    console.log(this.activitiesForm.value);
    this.dataservice
    .createActivity(this.activitiesForm.value)
    .subscribe((result: any) => {
      resp = result.data;
      console.log("response", result);
      if (result.data.createActivity) {
        this.toastr.success("Success!");
        this.getActivities();
        this.activitiesForm.reset();
        this.activitiesModal.hide();
        this.gridApi.deselectAll();
      } else {
        this.toastr.error("Failed. Please check the fields!");
      }
    });
  }
}
