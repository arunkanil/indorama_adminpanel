import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { dateConverter } from "../../constants/columnMetadata";
import { BaseChartDirective } from "ng2-charts";

const unique = (value, index, self) => {
  return self.indexOf(value) === index;
};

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
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  id: any;
  loading = true;
  btnLoading = false;
  rowData: any = [];
  questions: any = {};

  dateConverter = dateConverter;

  public pieChartType = "pie";
  public resultsProcessed;

  async ngOnInit() {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    await this.getSurveyDetails();
    await this.getSurveyResults();
  }
  async getSurveyDetails() {
    this.dataservice.getSurveyDetails(this.id).subscribe((result: any) => {
      console.log("getSurveyDetails", result.body.data);
      this.questions = result.body.data;
    });
  }
  async getSurveyResults() {
    let data = {};
    this.dataservice
      .getSurveyResults(this.id)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.surveyResults.data;
        console.log("getSurveyResults", this.rowData);
        let Fields = this.questions?.attributes?.Fields;
        console.log(Fields, "fields");
        for (let i = 0; i < Fields.length; i++) {
          let ans = this.rowData.map(
            (x) => x.attributes.SurveyResponse[Fields[i].FieldKey]
          );
          let unique_ans = this.rowData
            .map((x) => x.attributes.SurveyResponse[Fields[i].FieldKey])
            .filter(unique);

          let count = 0;
          let counted_obj = {};
          for (let j = 0; j < unique_ans.length; j++) {
            count = 0;
            for (let k = 0; k < ans.length; k++) {
              if (unique_ans[j] == ans[k]) {
                count++;
              }
            }
            counted_obj[unique_ans[j]] = count;
          }

          data[Fields[i].FieldKey] = counted_obj;
        }
        this.resultsProcessed = data;
        console.log(this.resultsProcessed,"resultsProcessed");
        this.chart?.update();
      });
  }
  returnQuesType(data) {
    if (data == "survey.survey-selection-component") {
      return "Dropdown";
    } else {
      return "Text";
    }
  }
  returnChartLabels(data) {
    // console.log(Object.keys(this.resultsProcessed[data]));
    return Object.keys(this.resultsProcessed[data]);
  }
  returnChartdata(data) {
    // console.log(Object.values(this.resultsProcessed[data]));
    return Object.values(this.resultsProcessed[data]);
  }
  deleteSurvey() {
    this.dataservice.deleteSurvey(this.id).subscribe((result: any) => {
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
  downloadResponses() {
    this.btnLoading = true;
    this.dataservice.downloadResponses(this.id).subscribe(
      (result: any) => {
        console.log("downloadResponses", result.body);
        let url = "https://indoramaapp.untanglestrategy.com" + result.body.path;
        this.btnLoading = false;
        window.open(url, "_blank");
      },
      (error) => {
        this.btnLoading = true;
        this.toastr.error("Failed!");
      }
    );
  }
}
