import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
// import { ActionRenderer } from "../../utils/StatusRenderer";
import { SmsColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "sms-campaigns.component.html",
})
export class SMSCampaignsComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...SmsColumn];
    this.rowSelection = "single";
  }
  @ViewChild("messageModal") public messageModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableButton = true;
  disableNextButton = false;
  disablePrevButton = true;
  meta;
  pageSize = 100;
  count = 1;
  columnDefs = [];
  Farmers: any = [];
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  States: any = [];
  rowData: any = [];
  to: any = "";
  selectedRows: any = [];
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any = {};
  NoOfContacts;

  messageForm = this.fb.group({
    body: ["", Validators.required],
    village: [""],
    area: [""],
    lga: [""],
    state: [""],
  });
  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getCropPrices();
    this.getAreas();
    this.getLGAs();
    this.getStates();
    this.getVillages();
  }
  getCropPrices() {
    this.dataservice.getCropPrices(1,this.pageSize).valueChanges.subscribe((result: any) => {
      this.rowData = result.data.cropPrices.data;
      this.meta = result.data.cropPrices.meta;
      if (this.meta?.pagination?.pageCount <= 1) {
        this.disablePrevButton = true;
        this.disableNextButton = true;
      }
    });
  }
  loadNext() {
    this.count++;
    this.disablePrevButton = false;
    if (this.count === this.meta.pagination.pageCount) {
      this.disableNextButton = true;
    }
    this.dataservice
      .getCropPrices(this.count, this.pageSize)
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
    this.dataservice
      .getCropPrices(this.count, this.pageSize)
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
  getLGAs(stateid?) {
    this.dataservice.getLGAs(stateid).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  getAreas(lgaid?) {
    this.dataservice.getAreas(lgaid).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  getVillages(areaid?) {
    this.dataservice
      .getVillages(areaid)
      .valueChanges.subscribe((result: any) => {
        console.log("getVillages", result.data.villages.data);
        this.Villages = result.data.villages.data;
      });
  }
  clearSearch() {
    this.messageForm.reset();
    this.Farmers = [];
    this.NoOfContacts = 0;
  }
  getUsers() {
    this.dataservice
      .getUsersLarge("Farmer", this.messageForm.value)
      .valueChanges.subscribe((result: any) => {
        console.log("getVillages", result.data.usersPermissionsUsers.data);
        this.Farmers = Array.from(
          result.data.usersPermissionsUsers.data,
          (x: any) => x.attributes.ContactNumber
        );
        for (let i = 0; i < this.Farmers.length; i++) {
          if (this.Farmers[i]) {
            this.to = this.to + this.Farmers[i] + ",";
          }
        }
        this.NoOfContacts = this.Farmers.length;
        console.log("farmers", this.Farmers, this.to);
      });
  }
  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  filterArea(event) {
    this.getAreas(event.target.value);
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
  openModal(data: any) {
    this.messageModal.show();
  }
  sendMessage() {
    console.log(this.messageForm.value, "sendmessage");
    let request = {
      api_token: "sw4evLMU9UOK1WFHsarICwcvDnyGN3sVSANPo2VyWX7q6CZ5sNr9OCYKRyQ5",
      to: this.to,
      from: "INDORAMA",
      body: this.messageForm.value?.body,
    };
    this.dataservice
    .sendMessage(request)
    .subscribe((result: any) => {
      console.log("response", result);
      // this.toastr.success("Success!");
      // if (result.data.deleteRetailerProduct) {
      //   this.toastr.success("Success!");
      //   this.deleteModal.hide();
      //   this.getTest();
      // } else {
      //   this.toastr.error("Failed!");
      // }
    });
  }
}
