import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { dateConverter } from "../../constants/columnMetadata";

@Component({
  templateUrl: "surveys-add.component.html",
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
  dateConverter = dateConverter;
  
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
  }
  
}
