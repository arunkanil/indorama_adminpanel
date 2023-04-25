import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
// import { ActionRenderer } from "../../utils/StatusRenderer";

import { RetailersColumn } from "../../constants/columnMetadata";
import { filter } from "rxjs/operators";
import { ModalDirective } from "ngx-bootstrap/modal";
import { UsernameValidator } from "../../utils/username.validator";
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: "retailers.component.html",
})
export class RetailersComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...RetailersColumn];
    this.setForm();
    this.rowSelection = "single";
  }
  @ViewChild("commentModal") public commentModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;

  loading = true;
  btnLoading = false;
  confirmed = undefined;
  blocked = undefined;
  disableNextButton = false;
  disablePrevButton = true;
  selectedList = "All";
  meta;
  pageSize = 20;
  from = 1;
  to = 20;
  count = 1;
  columnDefs = [];
  commentForm;
  // frameworkComponents = {
  //   statusRenderer: ActionRenderer,
  // };
  rowData: any = [];

  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  States: any = [];

  selectedYear: any = new Date().getFullYear();
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any = {};

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getRetailers();
    this.getAreas();
    this.getLGAs();
    this.getStates();
    this.getVillages();
  }
  getStates() {
    this.dataservice.getStates(1, 10000, "").valueChanges.subscribe((result: any) => {
      console.log("getStates", result.data.states.data);
      this.States = result.data.states.data;
    });
  }

  downloadExcel() {
    let resp = {};
    this.btnLoading = true;
    this.dataservice
      .downloadRetailers()
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
  setForm() {
    this.commentForm = this.fb.group({
      UserType: ["Retailer"],
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          UsernameValidator.cannotContainSpace,
        ],
      ],
      email: ["nodata@email.com"],
      password: ["", Validators.required],
      Name: ["", Validators.required],
      Gender: ["", Validators.required],
      Age: ["", Validators.required],
      ContactNumber: ["", Validators.required],
      lga: ["", Validators.required],
      village: ["", Validators.required],
      state: [""],
    });
  }
  get f() {
    return this.commentForm.controls;
  }
  getLGAs(id?) {
    this.dataservice.getLGAs(1, 10000, "",id).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  getAreas(id?) {
    this.dataservice.getAreas(1, 10000, "",id).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  getVillages(id?) {
    this.dataservice.getVillages(1, 10000, "",id).valueChanges.subscribe((result: any) => {
      console.log("getVillages", result.data.villages.data);
      this.Villages = result.data.villages.data;
    });
  }
  getRetailers() {
    this.dataservice
      .getRetailers(1, this.pageSize, this.confirmed, this.blocked)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.usersPermissionsUsers.data;
        this.meta = result.data.usersPermissionsUsers.meta;
        if (this.meta?.pagination?.pageCount <= 1) {
          this.disablePrevButton = true;
          this.disableNextButton = true;
        }
        if (this.meta?.pagination?.total < this.pageSize) {
          this.to = this.meta?.pagination?.total;
        }
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
      .getRetailers(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.usersPermissionsUsers.meta;
        this.rowData = result.data.usersPermissionsUsers.data;
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
      .getRetailers(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.usersPermissionsUsers.meta;
        this.rowData = result.data.usersPermissionsUsers.data;
      });
  }
  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  filterVillage(event) {
    this.getVillages(event.target.value);
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
  onRowClicked(event: any) {
    console.log("row", event.data);
    // this.router.navigate(
    //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
    //   {
    //     state: { data: event.data },
    //   }
    // );
  }
  toggleCropPrices(data) {
    switch (data) {
      case "Rejected":
        this.selectedList = "Rejected";
        this.blocked = true;
        this.confirmed = undefined;
        this.getRetailers();
        break;
      case "Approvalpending":
        this.selectedList = "Pending";
        this.blocked = false;
        this.confirmed = false;
        this.getRetailers();
        break;
      case "Approved":
        this.selectedList = "Approved";
        this.blocked = false;
        this.confirmed = true;
        this.getRetailers();
        break;
      case "All":
        this.selectedList = "All";
        this.blocked = undefined;
        this.confirmed = undefined;
        this.getRetailers();
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
  onSelectionChanged(event: any) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows, event);
    this.router.navigate(["/retailers/retailer_details", selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  openModal(data: any) {
    this.detailsModal.show();
  }
  formSubmit() {
    console.log(this.commentForm.value);
    this.btnLoading = true;
    let resp = {};
    this.dataservice.createRetailer(this.commentForm.value).subscribe(
      (result: any) => {
        resp = result;
        console.log("response", result);
        if (result) {
          this.toastr.success("Retailer added successfully!");
          this.btnLoading = false;
          this.commentModal.hide();
          this.setForm();
          this.getRetailers();
        } else {
          this.toastr.error("Failed. Please check the fields!");
          this.btnLoading = false;
        }
      },
      (error) => {
        this.btnLoading = false;
      }
    );
  }
}
