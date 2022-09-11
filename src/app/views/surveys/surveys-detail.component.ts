import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "surveys-detail.component.html",
})
export class SurveyDetailsComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  id: any;
  loading = true;
  btnLoading = false;
  rowData: any = [];

  dateConverter = dateConverter;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getSurveyResults();
  }
  getSurveyResults() {
    this.dataservice
      .getSurveyResults(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getSurveyResults", result.data.surveyForms.data);
        this.rowData = result.data.surveyForms.data;
      });
  }
}
