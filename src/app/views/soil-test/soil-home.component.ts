import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ToastrService } from 'ngx-toastr';
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { SoilAnalysisColumns } from "../../constants/columnMetadata";

@Component({
  templateUrl: "soil-home.component.html",
})
export class SoilHomeComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
    ) {
    this.columnDefs = [...SoilAnalysisColumns];
    this.rowSelection = "single";
  }

  @ViewChild("myModal") public myModal: ModalDirective;
  customerForm = this.fb.group({
    NameOfBride: ["", Validators.required],
    NameOfFather: ["", Validators.required],
    NameOfMother: ["", Validators.required],
    MarriageDate: ["", Validators.required],
    Contact_Number_1: ["", Validators.required],
    Contact_Number_2: ["", Validators.required],
    MarriageMonth: ["", Validators.required],
    tele_caller_contact: ["", Validators.required],
    HouseName: ["", Validators.required],
    Landmark: ["", Validators.required],
    locality: ["", Validators.required],
  });
  loading = true;
  btnLoading = false;
  orders: any = {};
  columnDefs = [];
  rowData: any = [];
  agents: any = [];
  localities: any = [];
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
  }
  getLists() {
    this.loading = true;
    this.dataservice.getsoilTests().valueChanges.subscribe((result: any) => {
      console.log("getCustomers", result.data.soilTests.data);
      this.rowData = result.data.soilTests.data;
    });
    // this.dataservice.getLocalities().valueChanges.subscribe((result: any) => {
    //   console.log("getLocalities", result.data.localities);
    //   this.localities = result.data.localities;
    // });
    // this.dataservice.getAgents().valueChanges.subscribe((result: any) => {
    //   console.log("getAgents", result.data.teleCallerContacts);
    //   this.agents = result.data.teleCallerContacts;
    // });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    this.router.navigate(["/soiltest/test_details",selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }
  FormSubmit() {
    let resp = {};
    console.log(this.customerForm.value);
    // this.dataservice.Addcustomer(this.customerForm.value).subscribe((result: any) => {
    //   resp = result.data;
    //   console.log("response", result);
    //   if (result.data.createCustomer) {
    //     this.toastr.success("customer added successfully!");
    //     this.getLists();
    //     this.myModal.hide();
    //   } else {
    //     this.toastr.error("Failed. Please check the fields!");
    //   }
    // });
  }
}
