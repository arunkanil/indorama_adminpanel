import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import {
  dateConverter,
  dateConverterMin,
} from "../../constants/columnMetadata";
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: "farm-demo-detail.component.html",
})
export class FarmDemoDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  @ViewChild("commentModal") public commentModal: ModalDirective;

  id: any;
  loading = true;
  baseURL = environment.apiUrl;
  details: any = [];
  dateConverter = dateConverter;
  dateConverterMin = dateConverterMin;
  btnLoading = false;
  groups: any = [];
  maplink: any = "";
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  States: any = [];
  Markets: any = [];
  Crops: any = [];
  file: any = null;
  fullImage;
  impactYield;
  editForm = this.fb.group({
    lga: ["", Validators.required],
    state: ["", Validators.required],
    Crops: ["", Validators.required],
    Farmer: ["", Validators.required],
    AreaOfField: ["", Validators.required],
    Season: ["", Validators.required],
    isPesticidesUsed: [""],
    FarmLocationLongitude: ["", Validators.required],
    FarmLocationLatitude: ["", Validators.required],
    Status: ["", Validators.required],
    Yield_I: [""],
    DateOfSowing_I: [""],
    DateOfDemonstration_I: [""],
    FirstUreaApplication_I: [""],
    SecondUreaApplication_I: [""],
    Yield_F: [""],
    DateOfSowing_F: [""],
    DateOfDemonstration_F: [""],
    FirstUreaApplication_F: [""],
    SecondUreaApplication_F: [""],
    DateOfHarvesting: [""],
  });

  ngOnInit(): void {
    this.getLists();
    this.getLGAs();
  }
  dispPesticides(data) {
    if (data) {
      return "Yes";
    } else {
      return "No";
    }
  }
  getLists() {
    this.loading = true;
    // this.dataservice.getGroups().valueChanges.subscribe((result: any) => {
    //   console.log("getGroups", result.data.groups);
    //   this.groups = result.data.groups;
    // });

    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.dataservice
      .getSingleFarmDemo(this.id)
      .valueChanges.subscribe((result: any) => {
        this.details = result.data.farmDemo.data;
        console.log("getSingleFarmDemo", this.details);

        this.editForm = this.fb.group({
          lga: [
            Number(this.details?.attributes?.lgas?.data?.id),
            Validators.required,
          ],
          state: [
            Number(this.details?.attributes?.state?.data?.id),
            Validators.required,
          ],
          Crops: [
            this.details?.attributes?.crop?.data?.id,
            Validators.required,
          ],
          Farmer: [this.details?.attributes?.Farmer, Validators.required],
          AreaOfField: [
            this.details?.attributes?.AreaOfField,
            Validators.required,
          ],
          Season: [this.details?.attributes?.Season, Validators.required],
          isPesticidesUsed: [this.details?.attributes?.isPesticidesUsed],
          FarmLocationLongitude: [
            this.details?.attributes?.FarmLocationLongitude,
            Validators.required,
          ],
          FarmLocationLatitude: [
            this.details?.attributes?.FarmLocationLatitude,
            Validators.required,
          ],
          Status: [this.details?.attributes?.Status, Validators.required],
          Yield_I: [this.details?.attributes?.IndoramaPractise?.Yield],
          DateOfSowing_I: [
            this.details?.attributes?.IndoramaPractise?.DateOfSowing,
          ],
          DateOfDemonstration_I: [
            this.details?.attributes?.IndoramaPractise?.DateOfDemonstration,
          ],
          FirstUreaApplication_I: [
            this.details?.attributes?.IndoramaPractise?.FirstUreaApplication,
          ],
          SecondUreaApplication_I: [
            this.details?.attributes?.IndoramaPractise?.SecondUreaApplication,
          ],
          Yield_F: [this.details?.attributes?.FarmerPractise?.Yield],
          DateOfSowing_F: [
            this.details?.attributes?.FarmerPractise?.DateOfSowing,
          ],
          DateOfDemonstration_F: [
            this.details?.attributes?.FarmerPractise?.DateOfDemonstration,
          ],
          FirstUreaApplication_F: [
            this.details?.attributes?.FarmerPractise?.FirstUreaApplication,
          ],
          SecondUreaApplication_F: [
            this.details?.attributes?.FarmerPractise?.SecondUreaApplication,
          ],
          DateOfHarvesting: [this.details?.attributes?.DateOfHarvesting],
        });
        this.impactYield = (
          ((this.details?.attributes?.IndoramaPractise?.Yield -
            this.details?.attributes?.FarmerPractise?.Yield) /
            this.details?.attributes?.FarmerPractise?.Yield) *
          100
        ).toFixed(2);
        this.maplink =
          "https://maps.google.com/?q=" +
          result.data?.farmDemo?.data?.attributes.FarmLocationLatitude?.toString() +
          "," +
          result.data?.farmDemo?.data?.attributes.FarmLocationLongitude?.toString();
        console.log(this.maplink);
        this.loading = false;
      });
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      console.log("getCrops", result.data.crops.data);
      this.Crops = result.data.crops.data;
    });
    this.dataservice.getStates().valueChanges.subscribe((result: any) => {
      console.log("getStates", result.data.states.data);
      this.States = result.data.states.data;
    });
    this.dataservice.getAreas().valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
    this.dataservice.getVillages().valueChanges.subscribe((result: any) => {
      console.log("getVillages", result.data.villages.data);
      this.Villages = result.data.villages.data;
    });
  }

  FormSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.editForm.value);
    this.dataservice
      .UpdateFarmDemo(this.editForm.value, this.details.id)
      .subscribe(
        (result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateFarmDemo) {
            this.toastr.success("Farm demo edited successfully!");
            this.btnLoading = false;
            this.myModal.hide();
            this.getLists();
          } else {
            this.toastr.error("Failed. Please check the fields!");
            this.btnLoading = false;
          }
        },
        (error) => {
          this.btnLoading = false;
        }
      );
  }
  showImages(url) {
    console.log(url);
    this.fullImage = `${environment.apiUrl}` + url;
  }
  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  getLGAs(id?) {
    this.dataservice.getLGAs(id).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  deleteFarmDemo() {
    this.dataservice.deleteFarmDemo(this.id).subscribe(
      (result: any) => {
        console.log("response", result);
        if (result.data.deleteFarmDemo) {
          this.toastr.success("Success!");
          this.deleteModal.hide();
          this.router.navigate(["/farmdemo/all"]);
        } else {
          this.toastr.error("Failed!");
        }
      },
      (error) => {
        this.toastr.error("Something went wrong!");
      }
    );
  }
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
  }
  uploadPic() {
    let resp = {};
    let imgarray = Array.from(
      this.details?.attributes?.Images?.data,
      (x: any) => x.id
    );
    this.dataservice.upload(this.file).subscribe((response: any) => {
      if (response.status == 200) {
        console.log(response);
        imgarray.push(response.body[0]?.id);
        this.dataservice
          .AddFarmdemoPic(this.id, imgarray)
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateFarmDemo) {
              this.toastr.success("Success!");
              this.file = null;
              this.getLists();
            } else {
              this.toastr.error("Failed!");
            }
          });
      } else {
        this.toastr.error("Image failed to upload!");
      }
    });
  }
  removePic(data) {
    let resp = {};
    if (confirm("Are you sure?")) {
      this.dataservice.deleteFile(data.id).subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.deleteUploadFile) {
          this.toastr.success("Success!");
          this.getLists();
        } else {
          this.toastr.error("Failed!");
        }
      });
    }
  }
}
