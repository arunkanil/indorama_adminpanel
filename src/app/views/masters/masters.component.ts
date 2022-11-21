import { Component, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { ActionRenderer } from "../../utils/StatusRenderer";

import {
  VillageMasterColumn,
  AreaMasterColumn,
  LGAMasterColumn,
  StateMasterColumn,
  MarketMasterColumn,
  CropMasterColumn,
} from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: "masters.component.html",
})
export class mastersComponent {
  private gridApi;
  private gridColumnApi;
  rowSelection: string;
  public context: any;
  public rowData: any[];
  public columnDefs: any[] = [];

  constructor(
    public dataservice: DataService,
    public route: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.context = { componentParent: this };
    this.rowSelection = "single";
  }
  @ViewChild("stateModal") public stateModal: ModalDirective;
  @ViewChild("lgaModal") public lgaModal: ModalDirective;
  @ViewChild("villageModal") public villageModal: ModalDirective;
  @ViewChild("marketModal") public marketModal: ModalDirective;
  @ViewChild("areaModal") public areaModal: ModalDirective;
  @ViewChild("cropModal") public cropModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  loading = true;
  disableButton = true;
  btnLoading = false;
  // disableNextButton = false;
  // disablePrevButton = true;
  // meta;
  // pageSize = 20;
  // from = 1;
  // to = 20;
  count = 1;
  Villages: any = [];
  LGA: any = [];
  Areas: any = [];
  States: any = [];
  Markets: any = [];
  Crops: any = [];
  imageUrl;
  file: any = null;

  frameworkComponents = {
    statusRenderer: new ActionRenderer(),
  };
  stateForm = this.fb.group({
    state: ["", Validators.required],
  });
  lgaForm = this.fb.group({
    lga: ["", Validators.required],
    state: ["", Validators.required],
  });
  areaForm = this.fb.group({
    area: ["", Validators.required],
    PostalCode: ["", Validators.required],
    lga: ["", Validators.required],
    state: ["", Validators.required],
  });
  marketForm = this.fb.group({
    market: ["", Validators.required],
    state: ["", Validators.required],
  });
  cropForm = this.fb.group({
    crop: ["", Validators.required],
    Image: ["", Validators.required],
  });
  villageForm = this.fb.group({
    village: ["", Validators.required],
    area: ["", Validators.required],
    lga: [""],
    state: [""],
  });

  selectedYear: any = new Date().getFullYear();
  years: any = [];
  filter: any = {};
  selectedRows: any = [];

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router.url);
    switch (this.router.url) {
      case "/masters/Villages":
        this.columnDefs = [...VillageMasterColumn];
        this.dataservice.getVillages().valueChanges.subscribe((result: any) => {
          console.log("getVillages", result.data.villages.data);
          this.rowData = result.data.villages.data;
          // this.meta = result.data.villages.meta;
          // if (this.meta?.pagination?.pageCount <= 1) {
          //   this.disablePrevButton = true;
          //   this.disableNextButton = true;
          // }
        });
        break;
      case "/masters/Cities":
        this.columnDefs = [...AreaMasterColumn];
        this.dataservice.getAreas().valueChanges.subscribe((result: any) => {
          console.log("getAreas", result.data.areas.data);
          this.rowData = result.data.areas.data;
          // this.meta = result.data.areas.meta;
          // if (this.meta?.pagination?.pageCount <= 1) {
          //   this.disablePrevButton = true;
          //   this.disableNextButton = true;
          // }
        });
        break;
      case "/masters/LGA":
        this.columnDefs = [...LGAMasterColumn];
        this.dataservice.getLGAs().valueChanges.subscribe((result: any) => {
          console.log("getLGAs", result.data.lgas.data);
          this.rowData = result.data.lgas.data;
          // this.meta = result.data.lgas.meta;
          // if (this.meta?.pagination?.pageCount <= 1) {
          //   this.disablePrevButton = true;
          //   this.disableNextButton = true;
          // }
        });
        break;
      case "/masters/States":
        this.columnDefs = [...StateMasterColumn];
        this.dataservice.getStates().valueChanges.subscribe((result: any) => {
          console.log("getStates", result.data.states.data);
          this.rowData = result.data.states.data;
          // this.meta = result.data.states.meta;
          // if (this.meta?.pagination?.pageCount <= 1) {
          //   this.disablePrevButton = true;
          //   this.disableNextButton = true;
          // }
        });
        break;
      case "/masters/Markets":
        this.columnDefs = [...MarketMasterColumn];
        this.dataservice.getMarkets().valueChanges.subscribe((result: any) => {
          console.log("getMarkets", result.data.markets.data);
          this.rowData = result.data.markets.data;
          // this.meta = result.data.markets.meta;
          // if (this.meta?.pagination?.pageCount <= 1) {
          //   this.disablePrevButton = true;
          //   this.disableNextButton = true;
          // }
        });
        break;
      case "/masters/Crops":
        this.columnDefs = [...CropMasterColumn];
        this.dataservice.getCrops().valueChanges.subscribe((result: any) => {
          console.log("getCrops", result.data.crops.data);
          this.rowData = result.data.crops.data;
          // this.meta = result.data.crops.meta;
          // if (this.meta?.pagination?.pageCount <= 1) {
          //   this.disablePrevButton = true;
          //   this.disableNextButton = true;
          // }
        });
        break;
    }
    this.getAreas();
    this.getCrops();
    this.getLGAs();
    this.getMarkets();
    this.getStates();
    this.getVillages();
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
  getLGAs(stateid?) {
    this.dataservice.getLGAs(stateid).valueChanges.subscribe((result: any) => {
      console.log("getLGAs", result.data.lgas.data);
      this.LGA = result.data.lgas.data;
    });
  }
  getAreas(lgaid?) {
    this.dataservice.getAreas(lgaid).valueChanges.subscribe((result: any) => {
      console.log("getAreas", result.data.areas.data);
      this.Areas = result.data.areas.data;
    });
  }
  getVillages(areaid?) {
    this.dataservice
      .getVillages(areaid)
      .valueChanges.subscribe((result: any) => {
        console.log("getVillages", result.data.villages.data);
        this.Villages = result.data.villages.data;
      });
  }
  getMarkets() {
    this.dataservice.getMarkets().valueChanges.subscribe((result: any) => {
      console.log("getMarkets", result.data.markets.data);
      this.Markets = result.data.markets.data;
    });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
  onRowClicked(event: any) {
    console.log("row", event);
    alert("Parent Component Method from " + event + "!");
    // this.router.navigate(
    //   ["/cropprices/kp_customer_details", event.data.id, this.router.url],
    //   {
    //     state: { data: event.data },
    //   }
    // );
  }
  onSelectionChanged(event: any) {
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectedRows.length > 0) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
    console.log(this.selectedRows, this.selectedRows[0].attributes.Name);

    // this.router.navigate(
    //   ["/cropprices/kp_customer_details", selectedRows[0].id, this.router.url],
    //   {
    //     state: { data: selectedRows },
    //   }
    // );
  }
  openModal(data?: any) {
    switch (this.router.url) {
      case "/masters/Villages":
        this.villageModal.show();
        if (data) {
          this.villageForm = this.fb.group({
            village: [
              this.selectedRows[0].attributes.Name,
              Validators.required,
            ],
            area: [
              Number(this.selectedRows[0].attributes.area.data.id),
              Validators.required,
            ],
            lga: [
              Number(
                this.selectedRows[0].attributes.area.data.attributes.lga.data.id
              ),
            ],
            state: [
              Number(
                this.selectedRows[0].attributes.area.data.attributes.lga.data
                  .attributes.state.data.id
              ),
            ],
          });
        } else {
          this.villageForm = this.fb.group({
            village: ["", Validators.required],
            area: ["", Validators.required],
            lga: [""],
            state: [""],
          });
        }
        break;
      case "/masters/Cities":
        this.areaModal.show();
        if (data) {
          this.areaForm = this.fb.group({
            area: [this.selectedRows[0].attributes.Name, Validators.required],
            PostalCode: [
              this.selectedRows[0].attributes.PostalCode,
              Validators.required,
            ],
            lga: [
              Number(this.selectedRows[0].attributes.lga.data.id),
              Validators.required,
            ],
            state: [
              Number(
                this.selectedRows[0].attributes.lga.data.attributes.state.data
                  .id
              ),
              Validators.required,
            ],
          });
        } else {
          this.areaForm = this.fb.group({
            area: ["", Validators.required],
            PostalCode: ["", Validators.required],
            lga: ["", Validators.required],
            state: ["", Validators.required],
          });
        }
        break;
      case "/masters/LGA":
        this.lgaModal.show();
        if (data) {
          this.lgaForm = this.fb.group({
            lga: [this.selectedRows[0].attributes.Name, Validators.required],
            state: [
              Number(this.selectedRows[0].attributes.state.data.id),
              Validators.required,
            ],
          });
        } else {
          this.lgaForm = this.fb.group({
            lga: ["", Validators.required],
            state: ["", Validators.required],
          });
        }
        break;
      case "/masters/States":
        this.stateModal.show();
        if (data) {
          this.stateForm = this.fb.group({
            state: [this.selectedRows[0].attributes.Name, Validators.required],
          });
        } else {
          this.stateForm = this.fb.group({
            state: ["", Validators.required],
          });
        }
        break;
      case "/masters/Markets":
        this.marketModal.show();
        if (data) {
          this.marketForm = this.fb.group({
            market: [this.selectedRows[0].attributes.Name, Validators.required],
            state: [
              this.selectedRows[0].attributes.state.data.id,
              Validators.required,
            ],
          });
        } else {
          this.marketForm = this.fb.group({
            market: ["", Validators.required],
            state: ["", Validators.required],
          });
        }
        break;
      case "/masters/Crops":
        this.cropModal.show();
        if (data) {
          this.cropForm = this.fb.group({
            crop: [this.selectedRows[0].attributes.Name, Validators.required],
            Image: [
              this.selectedRows[0].attributes.Image?.data?.id,
              Validators.required,
            ],
          });
          this.imageUrl = this.selectedRows[0].attributes.Image?.data
            ?.attributes?.url
            ? `${environment.apiUrl}` +
              this.selectedRows[0].attributes.Image?.data?.attributes?.url
            : null;
        } else {
          this.cropForm = this.fb.group({
            crop: ["", Validators.required],
            Image: ["", Validators.required],
          });
          this.imageUrl = null;
        }
        break;
    }
  }
  // On file Select
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  // loadNext() {
  //   this.count++;
  //    this.disablePrevButton = false;
  //   this.from = this.from + this.pageSize;
  //   this.to =
  //     this.to + this.pageSize > this.meta?.pagination?.total
  //       ? this.meta?.pagination?.total
  //       : this.to + this.pageSize;
  //   if (this.count === this.meta.pagination.pageCount) {
  //     this.disableNextButton = true;
  //   }
  //   // this.dataservice
  //   //   .getFarmDemos(this.count, this.pageSize)
  //   //   .valueChanges.subscribe((result: any) => {
  //   //     this.meta = result.data.farmDemos.meta;
  //   //     this.rowData = result.data.farmDemos.data;
  //   //   });
  // }
  // loadPrev() {
  //   this.count--;
  //   if (this.count < this.meta.pagination.pageCount) {
  //     this.disableNextButton = false;
  //   }
  //   if (this.count === 1) {
  //     this.disablePrevButton = true;
  //   }
  //   this.from = this.from - this.pageSize;
  //   this.to = this.to - this.rowData.length;
  //   // this.dataservice
  //   //   .getFarmDemos(this.count, this.pageSize)
  //   //   .valueChanges.subscribe((result: any) => {
  //   //     this.meta = result.data.farmDemos.meta;
  //   //     this.rowData = result.data.farmDemos.data;
  //   //   });
  // }
  filterLGA(event) {
    this.getLGAs(event.target.value);
  }
  filterArea(event) {
    this.getAreas(event.target.value);
  }
  stateSubmit() {
    let resp = {};
    console.log(this.stateForm.value);
    if (!this.disableButton) {
      this.dataservice
        .UpdateState(this.stateForm.value, this.selectedRows[0].id)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateState) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.stateModal.hide();
            this.stateForm.reset();
            this.dataservice
              .getStates()
              .valueChanges.subscribe((result: any) => {
                console.log("getStates", result.data.states.data);
                this.rowData = result.data.states.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    } else {
      this.dataservice.AddStates(this.stateForm.value).subscribe(
        (result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.createState) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.stateModal.hide();
            this.stateForm.reset();
            this.dataservice
              .getStates()
              .valueChanges.subscribe((result: any) => {
                console.log("getStates", result.data.states.data);
                this.rowData = result.data.states.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        },
        (error) => {
          console.log(error);
          this.toastr.error("Failed.");
        }
      );
    }
  }
  lgaSubmit() {
    let resp = {};
    console.log(this.lgaForm.value);
    if (!this.disableButton) {
      this.dataservice
        .UpdateLGA(this.lgaForm.value, this.selectedRows[0].id)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateLga) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();

            this.lgaModal.hide();
            this.lgaForm.reset();
            this.dataservice.getLGAs().valueChanges.subscribe((result: any) => {
              console.log("getLGAs", result.data.lgas.data);
              this.rowData = result.data.lgas.data;
            });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    } else {
      this.dataservice.AddLGA(this.lgaForm.value).subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createLga) {
          this.toastr.success("Success!");
          this.gridApi.deselectAll();
          this.lgaModal.hide();
          this.lgaForm.reset();
          this.dataservice.getLGAs().valueChanges.subscribe((result: any) => {
            console.log("getLGAs", result.data.lgas.data);
            this.rowData = result.data.lgas.data;
          });
        } else {
          if (result.errors[0].extensions.error.name == "ValidationError") {
            this.toastr.error("Can't be added as the value already exists");
          } else {
            this.toastr.error("Failed. Please check the fields!");
          }
        }
      });
    }
  }
  areaSubmit() {
    let resp = {};
    console.log(this.areaForm.value);
    if (!this.disableButton) {
      this.dataservice
        .UpdateArea(this.areaForm.value, this.selectedRows[0].id)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateArea) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.areaModal.hide();
            this.areaForm.reset();
            this.dataservice
              .getAreas()
              .valueChanges.subscribe((result: any) => {
                console.log("getAreas", result.data.areas.data);
                this.rowData = result.data.areas.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    } else {
      this.dataservice.AddArea(this.areaForm.value).subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.createArea) {
          this.toastr.success("Success!");
          this.gridApi.deselectAll();
          this.areaModal.hide();
          this.areaForm.reset();
          this.dataservice.getAreas().valueChanges.subscribe((result: any) => {
            console.log("getAreas", result.data.areas.data);
            this.rowData = result.data.areas.data;
          });
        } else {
          if (result.errors[0].extensions.error.name == "ValidationError") {
            this.toastr.error("Can't be added as the value already exists");
          } else {
            this.toastr.error("Failed. Please check the fields!");
          }
        }
      });
    }
  }
  marketSubmit() {
    let resp = {};
    console.log(this.marketForm.value);
    if (!this.disableButton) {
      this.dataservice
        .UpdateMarket(this.marketForm.value, this.selectedRows[0].id)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateMarket) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.marketModal.hide();
            this.marketForm.reset();
            this.dataservice
              .getMarkets()
              .valueChanges.subscribe((result: any) => {
                console.log("getMarkets", result.data.markets.data);
                this.rowData = result.data.markets.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    } else {
      this.dataservice
        .AddMarket(this.marketForm.value)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.createMarket) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.marketModal.hide();
            this.marketForm.reset();
            this.dataservice
              .getMarkets()
              .valueChanges.subscribe((result: any) => {
                console.log("getMarkets", result.data.markets.data);
                this.rowData = result.data.markets.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    }
  }
  cropSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.cropForm.value);
    if (!this.disableButton) {
      if (this.file) {
        this.dataservice.upload(this.file).subscribe((response: any) => {
          if (response.status == 200) {
            console.log(response);
            this.dataservice
              .UpdateCrop(
                this.cropForm.value,
                this.selectedRows[0].id,
                response.body[0]?.id
              )
              .subscribe(
                (result: any) => {
                  resp = result.data;
                  console.log("response", result);
                  if (result.data.updateCrop) {
                    this.toastr.success("Success!");
                    this.gridApi.deselectAll();
                    this.cropModal.hide();
                    this.cropForm.reset();
                    this.btnLoading = false;
                    this.dataservice
                      .getCrops()
                      .valueChanges.subscribe((result: any) => {
                        console.log("getCrops", result.data.crops.data);
                        this.rowData = result.data.crops.data;
                      });
                  } else {
                    if (
                      result.errors[0].extensions.error.name ==
                      "ValidationError"
                    ) {
                      this.toastr.error(
                        "Can't be added as the value already exists"
                      );
                      this.btnLoading = false;
                    } else {
                      this.toastr.error("Failed. Please check the fields!");
                      this.btnLoading = false;
                    }
                  }
                },
                (error) => {
                  this.btnLoading = false;
                }
              );
          }
        });
      } else {
        this.dataservice
          .UpdateCrop(this.cropForm.value, this.selectedRows[0].id, null)
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateCrop) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.cropModal.hide();
              this.cropForm.reset();
              this.dataservice
                .getCrops()
                .valueChanges.subscribe((result: any) => {
                  console.log("getCrops", result.data.crops.data);
                  this.rowData = result.data.crops.data;
                });
            } else {
              if (result.errors[0].extensions.error.name == "ValidationError") {
                this.toastr.error("Can't be added as the value already exists");
              } else {
                this.toastr.error("Failed. Please check the fields!");
              }
            }
          });
      }
    } else {
      this.dataservice.upload(this.file).subscribe((response: any) => {
        if (response.status == 200) {
          console.log(response);
          this.dataservice
            .AddCrop(this.cropForm.value, response.body[0]?.id)
            .subscribe((result: any) => {
              resp = result.data;
              console.log("response", result);
              if (result.data.createCrop) {
                this.toastr.success("Success!");
                this.gridApi.deselectAll();
                this.cropModal.hide();
                this.cropForm.reset();
                this.dataservice
                  .getCrops()
                  .valueChanges.subscribe((result: any) => {
                    console.log("getCrops", result.data.crops.data);
                    this.rowData = result.data.crops.data;
                  });
              } else {
                if (
                  result.errors[0].extensions.error.name == "ValidationError"
                ) {
                  this.toastr.error(
                    "Can't be added as the value already exists"
                  );
                } else {
                  this.toastr.error("Failed. Please check the fields!");
                }
              }
            });
        }
      });
    }
  }
  vilageSubmit() {
    let resp = {};
    console.log(this.villageForm.value);
    if (!this.disableButton) {
      this.dataservice
        .Updatevillage(this.villageForm.value, this.selectedRows[0].id)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.updateVillage) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.villageModal.hide();
            this.villageForm.reset();
            this.dataservice
              .getVillages()
              .valueChanges.subscribe((result: any) => {
                console.log("getVillages", result.data.villages.data);
                this.rowData = result.data.villages.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    } else {
      this.dataservice
        .Addvillage(this.villageForm.value)
        .subscribe((result: any) => {
          resp = result.data;
          console.log("response", result);
          if (result.data.createVillage) {
            this.toastr.success("Success!");
            this.gridApi.deselectAll();
            this.villageModal.hide();
            this.villageForm.reset();
            this.dataservice
              .getVillages()
              .valueChanges.subscribe((result: any) => {
                console.log("getVillages", result.data.villages.data);
                this.rowData = result.data.villages.data;
              });
          } else {
            if (result.errors[0].extensions.error.name == "ValidationError") {
              this.toastr.error("Can't be added as the value already exists");
            } else {
              this.toastr.error("Failed. Please check the fields!");
            }
          }
        });
    }
  }
  deleteRecord() {
    // this.lgaForm = this.fb.group({
    //   isDelete: [true, Validators.required],
    // });
    // this.stateForm = this.fb.group({
    //   isDelete: [true, Validators.required],
    // });
    // this.villageForm = this.fb.group({
    //   isDelete: [true, Validators.required],
    // });
    // this.lgaForm = this.fb.group({
    //   isDelete: [true, Validators.required],
    // });
    // this.marketForm = this.fb.group({
    //   isDelete: [true, Validators.required],
    // });
    // this.cropForm = this.fb.group({
    //   isDelete: [true, Validators.required],
    // });
    console.log(this.lgaForm.value);
    switch (this.router.url) {
      case "/masters/Villages":
        this.dataservice
          .deleteVillage(this.selectedRows[0].id)
          .subscribe((result: any) => {
            console.log("response", result);
            if (result.data.updateVillage) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.deleteModal.hide();
              this.dataservice
                .getVillages()
                .valueChanges.subscribe((result: any) => {
                  this.rowData = result.data.villages.data;
                });
            } else {
              this.toastr.error("Failed!");
            }
          });
        break;
      case "/masters/Cities":
        this.dataservice
          .deleteArea(this.selectedRows[0].id)
          .subscribe((result: any) => {
            console.log("response", result);
            if (result.data.updateArea) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.deleteModal.hide();
              this.dataservice
                .getAreas()
                .valueChanges.subscribe((result: any) => {
                  this.rowData = result.data.areas.data;
                });
            } else {
              this.toastr.error("Failed!");
            }
          });
        break;
      case "/masters/LGA":
        this.dataservice
          .deleteLGA(this.selectedRows[0].id)
          .subscribe((result: any) => {
            console.log("response", result);
            if (result.data.updateLga) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.deleteModal.hide();
              this.dataservice
                .getLGAs()
                .valueChanges.subscribe((result: any) => {
                  this.rowData = result.data.lgas.data;
                });
            } else {
              this.toastr.error("Failed!");
            }
          });
        break;
      case "/masters/States":
        this.dataservice
          .deleteState(this.selectedRows[0].id)
          .subscribe((result: any) => {
            console.log("response", result);
            if (result.data.updateState) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.deleteModal.hide();
              this.dataservice
                .getStates()
                .valueChanges.subscribe((result: any) => {
                  this.rowData = result.data.states.data;
                });
            } else {
              this.toastr.error("Failed!");
            }
          });
        break;
      case "/masters/Markets":
        this.dataservice
          .deleteMarket(this.selectedRows[0].id)
          .subscribe((result: any) => {
            console.log("response", result);
            if (result.data.updateMarket) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.deleteModal.hide();
              this.dataservice
                .getMarkets()
                .valueChanges.subscribe((result: any) => {
                  this.rowData = result.data.markets.data;
                });
            } else {
              this.toastr.error("Failed!");
            }
          });
        break;
      case "/masters/Crops":
        this.dataservice
          .deleteCrop(this.selectedRows[0].id)
          .subscribe((result: any) => {
            console.log("response", result);
            if (result.data.updateCrop) {
              this.toastr.success("Success!");
              this.gridApi.deselectAll();
              this.deleteModal.hide();
              this.dataservice
                .getCrops()
                .valueChanges.subscribe((result: any) => {
                  this.rowData = result.data.crops.data;
                });
            } else {
              this.toastr.error("Failed!");
            }
          });
        break;
    }
  }
}
