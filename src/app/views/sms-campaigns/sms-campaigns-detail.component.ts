import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
// import { ActionRenderer } from "../../utils/StatusRenderer";
import {
  dateConverter,
  dateConverterMin,
  DeliveryReportColumn,
} from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "sms-campaigns-detail.component.html",
})
export class SMSCampaignsDetailComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...DeliveryReportColumn];
    this.rowSelection = "single";
  }
  @ViewChild("messageModal") public messageModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;
  dateConverter = dateConverter;
  dateConverterMin = dateConverterMin;
  loading = true;
  btnLoading = false;
  columnDefs = [];
  rowData = [];
  id;
  details: any = [];
  private gridApi;
  private gridColumnApi;

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
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    console.log(this.router);
    this.getSmsCampaigns();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
  getSmsCampaigns() {
    this.dataservice
      .getSmsCampaigns(1, 10, this.id)
      .valueChanges.subscribe((result: any) => {
        this.details = result.data.smsCampaigns.data[0];
        console.log(this.details);
      });
  }
  getDeliveryReports() {
    this.btnLoading = true;
    this.dataservice
      .fetchMessage(
        this.details?.attributes?.apiKey,
        this.details?.attributes?.SMSGatewayResponse?.data?.message_id
      )
      .subscribe(
        (result: any) => {
          console.log("getDeliveryReports", result);
          this.rowData = result.data;
          this.btnLoading = false;
        },
        (error) => {
          console.error("error caught in component",error);
          this.btnLoading = false;
          this.toastr.error("Unable to fetch data");
        }
      );
  }
}
