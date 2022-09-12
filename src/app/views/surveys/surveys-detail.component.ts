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
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  id: any;
  loading = true;
  btnLoading = false;
  rowData: any = [];
  questions: any = {};

  dateConverter = dateConverter;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getSurveyDetails();
    this.getSurveyResults();
  }
  getSurveyDetails() {
    this.dataservice.getSurveyDetails(this.id).subscribe((result: any) => {
      console.log("getSurveyDetails", result.body.data);
      this.questions = result.body.data;
    });
  }
  getSurveyResults() {
    this.dataservice
      .getSurveyResults(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getSurveyResults", result.data.surveyResults.data);
        this.rowData = result.data.surveyResults.data;
      });
  }
  returnQuesType(data) {
    if (data == "survey.survey-selection-component") {
      return "Dropdown";
    } else {
      return "Text";
    }
  }
  deleteSurvey() {
    this.dataservice
    .deleteSurvey(this.id)
    .subscribe((result: any) => {
      console.log("response", result);
      if (result.data.deleteSurveyForm) {
        this.toastr.success("Success!");
        this.deleteModal.hide();
        this.router.navigate(["/surveys/all"]);
      } else {
        this.toastr.error("Failed!");
      }
    });
  }
}
