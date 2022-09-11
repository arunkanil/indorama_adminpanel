import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { SurveysColumn } from "../../constants/columnMetadata";

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

  loading = true;
  btnLoading = false;
  disableButton = true;
  columnDefs = [];

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
    this.getSurveys();
  }
  getSurveys() {
    this.dataservice.getSurveys().valueChanges.subscribe((result: any) => {
      console.log("getSurveys", result.data.surveyForms.data);
      this.rowData = result.data.surveyForms.data;
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
    this.selectedRows = this.gridApi.getSelectedRows();
    console.log(this.selectedRows);
    this.router.navigate(["/surveys/survey_details", this.selectedRows[0].id], {
      state: { data: this.selectedRows },
    });
  }
}
