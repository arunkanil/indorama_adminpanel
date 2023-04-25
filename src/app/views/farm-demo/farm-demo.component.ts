import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModalDirective } from "ngx-bootstrap/modal";
import { DataService } from "../../data.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FarmDemoColumn } from "../../constants/columnMetadata";
import { environment } from "../../../environments/environment";

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
  disableNextButton = false;
  disablePrevButton = true;
  meta;
  pageSize = 20;
  from = 1;
  to = 20;
  count = 1;
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
    this.dataservice
      .getFarmDemos(1, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        console.log("getFarmDemos", result.data.farmDemos.data);
        this.rowData = result.data.farmDemos.data;
        this.meta = result.data.farmDemos.meta;
        if (this.meta?.pagination?.pageCount <= 1) {
          this.disablePrevButton = true;
          this.disableNextButton = true;
        }
        if (this.meta?.pagination?.total < this.pageSize) {
          this.to = this.meta?.pagination?.total;
        }
        this.loading = false;
      });
    this.dataservice.getCrops(1, 10000, "").valueChanges.subscribe((result: any) => {
      console.log("getCrops", result.data.crops.data);
      this.Crops = result.data.crops.data;
    });
    this.dataservice.getStates(1, 10000, "").valueChanges.subscribe((result: any) => {
      console.log("getStates", result.data.states.data);
      this.States = result.data.states.data;
    });
    this.dataservice.getAreas(1, 10000, "").valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
    this.dataservice.getVillages(1, 10000, "").valueChanges.subscribe((result: any) => {
      console.log("getVillages", result.data.villages.data);
      this.Villages = result.data.villages.data;
    });
  }

  downloadExcel() {
    let resp = {};
    this.btnLoading = true;
    this.dataservice
      .downloadFarmDemos()
      .subscribe((result: any) => {
        resp = result.body;
        console.log(result);
        if (result.status === 200 && result.body.status == "Success") {
          this.toastr.success(result.body.message);
          this.btnLoading = false;
          window.open(`${environment.apiUrl}${result?.body?.path}`, "_blank");
        } else {
          this.btnLoading = false;
          this.toastr.error(result.body.message);
        }
      });
  }
  loadNext() {
    this.count++;
    this.disablePrevButton = false;
    this.from = this.from + this.pageSize;
    this.to =
      this.to + this.pageSize > this.meta?.pagination?.total
        ? this.meta?.pagination?.total
        : this.to + this.pageSize;
    if (this.count === this.meta.pagination.pageCount) {
      this.disableNextButton = true;
    }
    this.dataservice
      .getFarmDemos(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.farmDemos.meta;
        this.rowData = result.data.farmDemos.data;
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
    this.from = this.from - this.pageSize;
    this.to = this.to - this.rowData.length;
    this.dataservice
      .getFarmDemos(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.farmDemos.meta;
        this.rowData = result.data.farmDemos.data;
      });
  }
  getLGAs(id?) {
    this.dataservice.getLGAs(1, 10000, "",id).valueChanges.subscribe((result: any) => {
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
    this.btnLoading = true;
    console.log(this.addForm.value);
    this.dataservice.AddFarmdemo(this.addForm.value).subscribe(
      (result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createFarmDemo) {
          this.toastr.success("Farm demo added successfully!");
          this.btnLoading = false;
          this.getLists();
          this.myModal.hide();
          this.addForm.reset();
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
