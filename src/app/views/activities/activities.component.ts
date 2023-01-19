import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { ActivitiesColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";
import { environment } from "../../../environments/environment";

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
  @ViewChild("downloadActivitiesModal")
  public downloadActivitiesModal: ModalDirective;
  @ViewChild("uploadActivitiesModal")
  public uploadActivitiesModal: ModalDirective;

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
  file: any = null;

  activitiesForm = this.fb.group({
    ActivityType: ["", Validators.required],
    Latitude: [""],
    Longitude: [""],
    NoOfAttendees: [
      "",
      [Validators.max(9999999), Validators.min(1)],
    ],
    area: ["", Validators.required],
    crop: ["", Validators.required],
    FarmerName: ["", Validators.pattern("[a-zA-Z ]*")],
    PlannedFarmDay: [""],
    ConditionOfCrop: [""],
    Date: ["", Validators.required],
    Time: [""],
    Reason: [""],
  });
  downloadExcelForm = this.fb.group({
    fromDate: ["", Validators.required],
    toDate: ["", Validators.required],
  });
  uploadExcelForm = this.fb.group({
    File: ["", Validators.required],
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
        if (this.meta?.pagination?.total < this.pageSize) {
          this.to = this.meta?.pagination?.total;
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
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  onSelectionChanged(event: any) {
    let selectedRows = this.gridApi.getSelectedRows();
    this.router.navigate(["/activities/activity_details", selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  openModal() {
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
  downloadActivities() {
    console.log(this.downloadExcelForm.value);
    let resp = {};
    this.btnLoading = true;
    this.dataservice
      .downloadActivities(this.downloadExcelForm.value)
      .subscribe((result: any) => {
        resp = result.body;
        console.log(result);
        if (result.status === 200 && result.body.status == "Success") {
          this.toastr.success(result.body.message);
          this.btnLoading = false;
          window.open(`${environment.apiUrl}${result?.body?.path}`, "_blank");
        } else {
          this.btnLoading = false;
          this.toastr.error(result.body.message);
        }
      });
  }
  uploadActivities() {
    let resp = {};
    this.dataservice.uploadActivities(this.file).subscribe((response: any) => {
      if (response.status == 200) {
        console.log(response);
        this.toastr.success("Success!");
        this.file = null;
        this.getActivities();
        this.uploadActivitiesModal.hide();
      } else {
        this.toastr.error("Failed!");
      }
    });
  }
}
