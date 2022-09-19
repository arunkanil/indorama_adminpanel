import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ModalDirective } from "ngx-bootstrap/modal";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import {
  dateConverter,
  dateConverterMin,
} from "../../constants/columnMetadata";

@Component({
  templateUrl: "activity-detail.component.html",
})
export class ActivityDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild("editModal") public editModal: ModalDirective;
  @ViewChild("resultModal") public resultModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  id: any;
  loading = true;
  details: any = [];
  btnLoading = false;
  dateConverterMin = dateConverterMin;
  dateConverter = dateConverter;
  Areas: any = [];
  Crops: any = [];
  flag;
  maplink;

  activitiesForm = this.fb.group({
    ActivityType: ["", Validators.required],
    Latitude: ["", Validators.required],
    Longitude: ["", Validators.required],
    NoOfAttendees: ["", Validators.required],
    area: ["", Validators.required],
    crop: [""],
    FarmerName: [""],
    PlannedFarmDay: [""],
    ConditionOfCrop: [""],
    Date: ["", Validators.required],
    Time: ["", Validators.required],
    Reason: ["", Validators.required],
  });

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getActivity();
    this.getAreas();
    this.getCrops();
  }
  getActivity() {
    this.dataservice
      .getActivity(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getActivity", result?.data?.activity?.data);
        this.details = result?.data?.activity?.data;
        this.activitiesForm = this.fb.group({
          ActivityType: [
            this.details?.attributes?.ActivityType,
            Validators.required,
          ],
          Latitude: [this.details?.attributes?.Latitude, Validators.required],
          Longitude: [this.details?.attributes?.Longitude, Validators.required],
          NoOfAttendees: [
            this.details?.attributes?.NoOfAttendees,
            Validators.required,
          ],
          area: [this.details?.attributes?.area?.data?.id, Validators.required],
          crop: [this.details?.attributes?.crop?.data?.id],
          FarmerName: [this.details?.attributes?.FarmerName],
          PlannedFarmDay: [this.details?.attributes?.PlannedFarmDay],
          ConditionOfCrop: [this.details?.attributes?.ConditionOfCrop],
          Date: [this.details?.attributes?.Date, Validators.required],
          Time: [this.details?.attributes?.Time, Validators.required],
          Reason: [this.details?.attributes?.Reason, Validators.required],
        });
        this.maplink =
          "https://maps.google.com/?q=" +
          this.details?.attributes?.Latitude?.toString() +
          "," +
          this.details?.attributes?.Longitude?.toString();
        this.loading = false;
      });
  }
  getCrops() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      console.log("getCrops", result.data.crops.data);
      this.Crops = result.data.crops.data;
    });
  }
  getAreas(id?) {
    this.dataservice.getAreas(id).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  returnActivityType(data) {
    if(data) return data.replace(/([A-Z])/g, " $1").trim();
  }
  dateConvertor(date) {
    return new Date(date);
  }
  openModal(data: any, flag) {
    this.resultModal.show();
    console.log(data, flag);
    this.flag = flag;
  }
  FormSubmit() {
    let resp = {};
    console.log(this.activitiesForm.value);
    this.btnLoading = true;
    this.dataservice
      .updateActivity(this.activitiesForm.value, this.id)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateActivity) {
          this.toastr.success("Activity updated successfully!");
          this.btnLoading = false;
          this.editModal.hide();
          this.dataservice.getActivity(this.id).refetch();
        } else {
          this.toastr.error("Failed. Please check the fields!");
          this.btnLoading = false;
        }
      });
  }
  deleteActivity() {
    this.dataservice.deleteActivity(this.id).subscribe((result: any) => {
      console.log("response", result);
      if (result.data.deleteActivity) {
        this.toastr.success("Success!");
        this.deleteModal.hide();
        this.router.navigate(["/activities/all"]);
      } else {
        this.toastr.error("Failed!");
      }
    });
  }
}
