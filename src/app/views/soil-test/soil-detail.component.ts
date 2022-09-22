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
  templateUrl: "soil-detail.component.html",
})
export class SoilTestDetailComponent implements OnInit {
  constructor(
    public dataservice: DataService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("resultModal") public resultModal: ModalDirective;

  id: any;
  loading = true;
  details: any = [];
  btnLoading = false;
  dateConverterMin = dateConverterMin;
  dateConverter = dateConverter;
  users: any = [];
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  Farmers: any = [];
  States: any = [];
  Crops: any = [];
  flag;
  agentForm = this.fb.group({
    ContactNumber: ["", Validators.required],
    // PreferredCollectionDate: ["", Validators.required],
    ReasonForSoilTest: ["", Validators.required],
    Status: ["", Validators.required],
    nutrient: ["", Validators.required],
    Farmer: ["", Validators.required],
    area: ["", Validators.required],
    state: ["", Validators.required],
    lga: ["", Validators.required],
  });
  resultForm = this.fb.group({
    soil_test_sample: [""],
    phObserved: ["", Validators.required],
    OrganicCarbonObserved: ["", Validators.required],
    TotalNitrogenObserved: ["", Validators.required],
    PhosphorousObserved: ["", Validators.required],
    PotassiumObserved: ["", Validators.required],
    CalciumObserved: ["", Validators.required],
    MagnesiumObserved: ["", Validators.required],
    ZincObserved: ["", Validators.required],
    SulphurObserved: ["", Validators.required],
    IronObserved: ["", Validators.required],
    CopperObserved: ["", Validators.required],
    BoronObserved: ["", Validators.required],
    ManganeseObserved: ["", Validators.required],
  });

  ngOnInit(): void {
    this.getLists();
    this.getAreas();
    this.getCrops();
    this.getLGAs();
    this.getStates();
    this.getVillages();
    this.getFarmers();
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getTest();
  }
  getTest() {
    this.dataservice
      .getsingleSoilTests(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log("getsingleSoilTests", result.data.soilTest.data);
        this.details = result.data.soilTest.data;
        this.agentForm = this.fb.group({
          ContactNumber: [
            this.details.attributes?.ContactNumber,
            Validators.required,
          ],
          // PreferredCollectionDate: [
          //   this.details?.attributes?.PreferredCollectionDate,
          //   Validators.required,
          // ],
          ReasonForSoilTest: [
            this.details?.attributes?.ReasonForSoilTest,
            Validators.required,
          ],
          Status: [this.details?.attributes?.Status, Validators.required],
          nutrient: [this.details?.attributes?.nutrient, Validators.required],
          Farmer: [
            this.details?.attributes?.Farmer.data.id,
            Validators.required,
          ],
          area: [this.details?.attributes?.area.data.id, Validators.required],
          state: [
            this.details?.attributes?.lga.data.attributes.state.data.id,
            Validators.required,
          ],
          lga: [this.details?.attributes?.lga.data.id, Validators.required],
        });
        this.loading = false;
      });
  }
  getCrops() {
    this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
      console.log("getCrops", result.data.crops.data);
      this.Crops = result.data.crops.data;
    });
  }
  getStates() {
    this.dataservice.getStates().valueChanges.subscribe((result: any) => {
      console.log("getStates", result.data.states.data);
      this.States = result.data.states.data;
    });
  }
  getLGAs(id?) {
    this.dataservice.getLGAs(id).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  getAreas(id?) {
    this.dataservice.getAreas(id).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  getFarmers() {
    this.dataservice
      .getUsers(undefined, undefined, "Farmer")
      .valueChanges.subscribe((result: any) => {
        console.log("getFarmers", result.data.usersPermissionsUsers.data);
        this.Farmers = result.data.usersPermissionsUsers.data;
      });
  }
  getVillages() {
    this.dataservice.getVillages().valueChanges.subscribe((result: any) => {
      console.log("getVillages", result.data.villages.data);
      this.Villages = result.data.villages.data;
    });
  }
  dateConvertor(date) {
    return new Date(date);
  }
  getLists() {
    this.loading = true;
  }
  openModal(data: any, flag) {
    this.resultModal.show();
    console.log(data, flag);
    this.flag = flag;
    this.resultForm = this.fb.group({
      id: [data?.attributes?.soil_test_results?.data[0]?.id],
      soil_test_sample: [data?.id],
      phObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes?.phObserved,
        Validators.required,
      ],
      OrganicCarbonObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.OrganicCarbonObserved,
        Validators.required,
      ],
      TotalNitrogenObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.TotalNitrogenObserved,
        Validators.required,
      ],
      PhosphorousObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.PhosphorousObserved,
        Validators.required,
      ],
      PotassiumObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.PotassiumObserved,
        Validators.required,
      ],
      CalciumObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.CalciumObserved,
        Validators.required,
      ],
      MagnesiumObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.MagnesiumObserved,
        Validators.required,
      ],
      ZincObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes?.ZincObserved,
        Validators.required,
      ],
      SulphurObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.SulphurObserved,
        Validators.required,
      ],
      IronObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes?.IronObserved,
        Validators.required,
      ],
      CopperObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.CopperObserved,
        Validators.required,
      ],
      BoronObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes?.BoronObserved,
        Validators.required,
      ],
      ManganeseObserved: [
        data?.attributes?.soil_test_results?.data[0]?.attributes
          ?.ManganeseObserved,
        Validators.required,
      ],
    });
  }
  FormSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.agentForm.value);
    this.dataservice.UpdateSoilTest(this.agentForm.value, this.id).subscribe(
      (result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateSoilTest) {
          this.toastr.success("Test updated successfully!");
          this.btnLoading = false;
          this.myModal.hide();
          this.getTest();
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
  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  filterArea(event) {
    this.getAreas(event.target.value);
  }
  ResultSubmit() {
    this.btnLoading = true;
    if (this.flag == "edit") {
      console.log("edit", this.resultForm.value);
      let resp = {};
      console.log(this.resultForm.value);
      this.dataservice.UpdateSoilTestResult(this.resultForm.value).subscribe(
        (result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateSoilTestResult) {
            this.toastr.success("Result updated successfully!");
            this.btnLoading = false;
            this.resultModal.hide();
            this.getTest();
          } else {
            this.toastr.error("Failed. Please check the fields!");
            this.btnLoading = false;
          }
        },
        (error) => {
          this.btnLoading = false;
        }
      );
    } else {
      console.log("new", this.resultForm.value);
      let resp = {};
      console.log(this.resultForm.value);
      this.dataservice.AddSoilTestResult(this.resultForm.value).subscribe(
        (result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.createSoilTestResult) {
            this.toastr.success("Result added successfully!");
            this.btnLoading = false;
            this.resultModal.hide();
            this.getTest();
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
  }
}
