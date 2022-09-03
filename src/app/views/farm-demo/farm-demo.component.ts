import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FarmDemoColumn } from "../../constants/columnMetadata";

@Component({
  templateUrl: "farm-demo.component.html",
})
export class FarmDemoComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...FarmDemoColumn];
    this.rowSelection = "single";
  }

  @ViewChild("myModal") public myModal: ModalDirective;
  addForm = this.fb.group({
    // Villages: ["", Validators.required],
    lga: ["", Validators.required],
    // Areas: ["", Validators.required],
    state: ["", Validators.required],
    Crops: ["", Validators.required],
    Farmer: ["", Validators.required],
    AreaOfField: ["", Validators.required],
    Season: ["", Validators.required],
    isPesticidesUsed: [""],
    FarmLocationLongitude: ["", Validators.required],
    FarmLocationLatitude: ["", Validators.required],
    Status: ["", Validators.required],
  });
  loading = false;
  btnLoading = false;
  columnDefs = [];
  rowData: any = [];
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  States: any = [];
  Markets: any = [];
  Crops: any = [];
  private gridApi;
  private gridColumnApi;

  ngOnInit(): void {
    this.getLists();
    this.getLGAs();
  }
  getLists() {
    this.loading = true;
    this.dataservice.getFarmDemos().valueChanges.subscribe((result: any) => {
      console.log("getFarmDemos", result.data.farmDemos.data);
      this.rowData = result.data.farmDemos.data;
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
  getLGAs(id?){
    this.dataservice.getLGAs(id).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  onSelectionChanged(event) {
    var selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    this.router.navigate(["/farmdemo/demo_details", selectedRows[0].id], {
      state: { data: selectedRows },
    });
  }

  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  FormSubmit() {
    let resp = {};
    console.log(this.addForm.value);
    this.dataservice
      .AddFarmdemo(this.addForm.value)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createFarmDemo) {
          this.toastr.success("Farm demo added successfully!");
          this.getLists();
          this.myModal.hide();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
}
