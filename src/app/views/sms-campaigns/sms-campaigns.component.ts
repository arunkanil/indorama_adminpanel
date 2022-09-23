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
  pageSize = 20;
  from = 1;
  to = 20;
  count = 1;
  columnDefs = [];
  Farmers: any = [];
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  States: any = [];
  rowData: any = [];
  selectedRows: any = [];
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any = {};
  NoOfContacts;

  messageForm = this.fb.group({
    isAllFarmers: [false],
    message: ["", Validators.required],
    village: [""],
    area: [""],
    lga: [""],
    state: [""],
  });
  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getSmsCampaigns();
    this.getAreas();
    this.getLGAs();
    this.getStates();
    this.getVillages();
  }
  getSmsCampaigns() {
    this.dataservice
      .getSmsCampaigns(1, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.smsCampaigns.data;
        this.meta = result.data.smsCampaigns.meta;
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
      .getSmsCampaigns(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.smsCampaigns.meta;
        this.rowData = result.data.smsCampaigns.data;
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
      .getSmsCampaigns(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.smsCampaigns.meta;
        this.rowData = result.data.smsCampaigns.data;
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
    this.router.navigate(["/sms-campaigns/details", this.selectedRows[0].id], {
      state: { data: this.selectedRows },
    });
    console.log(this.selectedRows, this.selectedRows[0]);
  }
  openModal(data: any) {
    this.messageModal.show();
  }
  sendMessage() {
    this.btnLoading = true;
    console.log(this.messageForm.value, "sendmessage");
    this.dataservice.createSMSCampaign(this.messageForm.value).subscribe(
      (result: any) => {
        console.log("response", result);
        if (result.data.createSmsCampaign) {
          this.toastr.success("Success!");
          this.btnLoading = false;
          this.messageModal.hide();
          this.getSmsCampaigns();
        } else {
          this.toastr.error("Failed!");
          this.btnLoading = false;
        }
      },
      (error) => {
        this.btnLoading = false;
      }
    );
  }
}
