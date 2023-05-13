import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../../data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { dateConverter } from '../../constants/columnMetadata';

@Component({
  templateUrl: 'surveys-add.component.html',
})
export class NewSurveyComponent implements OnInit {
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
  isText = true;
  dateConverter = dateConverter;
  questions = [];
  SurveyDescription;
  SurveyTitle;
  addForm = this.fb.group({
    FieldName: ['', Validators.required],
    __typename: ['', Validators.required],
    FieldType: ['', Validators.required],
    FieldKey: [''],
    Mandatory: [false],
    Values: [''],
  });

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
  questionSubmit() {
    console.log(this.addForm.value);
    this.addForm.value.FieldKey = this.addForm.value.FieldName.replace(
      /[^A-Z0-9]/gi,
      '_'
    );
    if (this.addForm?.value?.Values?.length > 0) {
      this.addForm.value.Values = this.addForm?.value?.Values?.split(',');
    }
    this.questions.push(this.addForm.value);
    this.addForm = this.fb.group({
      FieldName: ['', Validators.required],
      __typename: ['', Validators.required],
      FieldType: ['', Validators.required],
      FieldKey: [''],
      Mandatory: [false],
      Values: [''],
    });
    console.log(this.questions);
  }
  onQuestionTypeChange(event) {
    if (event.target.value == 'ComponentSurveySurveyTextComponent') {
      this.isText = true;
    } else {
      this.isText = false;
    }
    this.addForm.value.FieldType = '';
    console.log(event.target.value, this.isText);
  }
  deleteQuestion(item) {
    console.log(item);
    this.questions.splice(item, 1);
  }
  onSurveyDescriptionChange(event) {
    this.SurveyDescription = event.target.value;
  }
  onSurveyTitleChange(event) {
    this.SurveyTitle = event.target.value;
  }
  formSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.addForm.value);
    if (this.SurveyTitle && this.SurveyDescription) {
      this.dataservice
        .createSurveys(this.SurveyTitle, this.SurveyDescription, this.questions)
        .subscribe(
          (result: any) => {
            resp = result.data;
            console.log('response', result);
            if (result.data.createSurveyForm) {
              this.toastr.success('Farm demo added successfully!');
              this.btnLoading = false;
              this.router.navigate(['/surveys/all']);
            }
          },
          (error) => {
            this.toastr.error('Failed. Please check the fields!');
            this.btnLoading = false;
          }
        );
    } else {
      this.toastr.error('Please add both title & description');
      this.btnLoading = false;
    }
  }
}
