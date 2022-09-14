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
  disableNextButton = false;
  disablePrevButton = true;
  meta;
  pageSize = 100;
  count = 1;
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
    this.getSurveys(1, this.pageSize);
  }
  getSurveys(page?, pageSize?) {
    this.dataservice
      .getSurveys(page, pageSize)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.surveyForms.data;
        this.meta = result.data.surveyForms.meta;
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
      .getSurveys(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.surveyForms.meta;
        this.rowData = result.data.surveyForms.data;
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
      .getSurveys(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.surveyForms.meta;
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
  goToNewSurvey(){
    this.router.navigate(["/surveys/new_survey"]);
  }
  onSelectionChanged(event: any) {
    this.selectedRows = this.gridApi.getSelectedRows();
    console.log(this.selectedRows);
    this.router.navigate(["/surveys/survey_details", this.selectedRows[0].id], {
      state: { data: this.selectedRows },
    });
  }
}
