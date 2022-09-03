import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
// import { ActionRenderer } from "../../utils/StatusRenderer";

import { RetailersColumn } from "../../constants/columnMetadata";
import { filter } from "rxjs/operators";
import { ModalDirective } from "ngx-bootstrap/modal";

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
    this.rowSelection = "single";
  }
  @ViewChild("commentModal") public commentModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;

  loading = true;
  btnLoading = false;
  title = "Verification";
  orders: any = {};
  columnDefs = [];
  commentForm = this.fb.group({
    UserType: ["Retailer"],
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    Name: ["", Validators.required],
    Gender: ["", Validators.required],
    Age: ["", Validators.required],
    ContactNumber: ["", Validators.required],
    lga: ["", Validators.required],
    village: ["", Validators.required],
    state: [""],
  });
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
    this.getRetailers();
  }
  getStates() {
    this.dataservice.getStates().valueChanges.subscribe((result: any) => {
      console.log("getStates", result.data.states.data);
      this.States = result.data.states.data;
    });
  }
  getLGAs(id?) {
    this.dataservice.getLGAs(id).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  getAreas(id?) {
    this.dataservice.getAreas(id).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  getVillages(id?) {
    this.dataservice.getVillages(id).valueChanges.subscribe((result: any) => {
      console.log("getVillages", result.data.villages.data);
      this.Villages = result.data.villages.data;
    });
  }
  getRetailers() {
    this.dataservice.getRetailers().valueChanges.subscribe((result: any) => {
      console.log("getRetailers", result.data.usersPermissionsUsers.data);
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
    let resp = {};
    this.dataservice
      .createRetailer(this.commentForm.value)
      .subscribe((result: any) => {
        resp = result;
        console.log("response", result);
        if (result) {
          this.toastr.success("Retailer added successfully!");
          this.commentModal.hide();
          this.getRetailers();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
}
