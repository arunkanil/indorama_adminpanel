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
  disableNextButton = false;
  disablePrevButton = true;
  count = 1;

  columnDefs = [];
  States: any = [];
  Areas: any = [];
  Crops: any = [];

  activitiesForm = this.fb.group({
    ActivityType: ["", Validators.required],
    Latitude: ["", Validators.required],
    Longitude: ["", Validators.required],
    NoOfAttendees: [
      "",
      [Validators.max(9999999), Validators.min(1), Validators.required],
    ],
    area: ["", Validators.required],
    crop: [""],
    FarmerName: ["", Validators.pattern("[a-zA-Z ]*")],
    PlannedFarmDay: [""],
    ConditionOfCrop: [""],
    Date: ["", Validators.required],
    Time: ["", Validators.required],
    Reason: ["", Validators.required],
  });
  rowData: any = [];
  meta;
  pageSize = 20;
  from = 1;
  to = 20;
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.loading = true;
    this.getActivities();
    this.getCrops();
    this.getAreas();
    this.getStates();
  }
  checkSpecialCharacters(data) {
    let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (format.test(data)) {
      return true;
    } else {
      return false;
    }
  }
  getActivities() {
    console.log("jshdbfkjhsdfkjsdf");
    this.dataservice
      .getActivities(1, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.activities.meta;
        if (this.meta?.pagination?.pageCount <= 1) {
          this.disablePrevButton = true;
          this.disableNextButton = true;
        }
        this.rowData = result.data.activities.data;
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
      .getActivities(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.activities.meta;
        this.rowData = result.data.activities.data;
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
      .getActivities(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.activities.meta;
        this.rowData = result.data.activities.data;
      });
  }
  getCrops() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      this.Crops = result.data.crops.data;
    });
  }
  getStates() {
    this.dataservice.getStates().valueChanges.subscribe((result: any) => {
      this.States = result.data.states.data;
    });
  }
  getAreas(lgaid?) {
    this.dataservice.getAreas(lgaid).valueChanges.subscribe((result: any) => {
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
    this.router.navigate(["/activities/activity_details", selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  openModal(data: any) {
    this.activitiesModal.show();
  }
  activitiesSubmit() {
    let resp = {};
    this.btnLoading = true;
    this.dataservice
      .createActivity(this.activitiesForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        if (result.data.createActivity) {
          this.toastr.success("Success!");
          this.getActivities();
          this.activitiesForm.reset();
          this.btnLoading = false;
          this.activitiesModal.hide();
          this.gridApi.deselectAll();
        } else {
          this.toastr.error("Failed. Please check the fields!");
          this.btnLoading = false;
        }
      });
  }
}
