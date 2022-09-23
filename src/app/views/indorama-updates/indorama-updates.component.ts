import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { IndoramaUpdatesColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: "indorama-updates.component.html",
})
export class IndoramaUpdatesComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...IndoramaUpdatesColumn];
    this.rowSelection = "single";
  }
  @ViewChild("cropPriceModal") public cropPriceModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;
  baseURL = environment.apiUrl;
  loading = true;
  btnLoading = false;
  disableButton = true;
  disableNextButton = false;
  disablePrevButton = true;
  meta;
  pageSize = 20;
  from = 1;
  to = 20;
  count = 1;
  orders: any = {};
  columnDefs = [];
  imageUrl;

  newsForm = this.fb.group({
    Title: ["", Validators.required],
    Body: ["", Validators.required],
    Image: [""],
  });
  rowData: any = [];
  selectedRows: any = [];
  selectedYear: any = new Date().getFullYear();
  years: any = [];
  private gridApi;
  private gridColumnApi;
  filter: any = {};
  file: any = null;

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getUpdates(undefined, 1, this.pageSize);
  }
  getUpdates(id?, page?, pageSize?) {
    this.dataservice
      .getIndoramaUpdates(id, page, pageSize)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.newsAndUpdates.data;
        this.meta = result.data.newsAndUpdates.meta;
        if (this.meta?.pagination?.pageCount <= 1) {
          this.disablePrevButton = true;
          this.disableNextButton = true;
        }
        if (this.meta?.pagination?.total < this.pageSize) {
          this.to = this.meta?.pagination?.total;
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
      .getIndoramaUpdates(undefined, this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.newsAndUpdates.meta;
        this.rowData = result.data.newsAndUpdates.data;
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
      .getIndoramaUpdates(undefined, this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.newsAndUpdates.meta;
        this.rowData = result.data.newsAndUpdates.data;
      });
  }
  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }
  onRowClicked(event: any) {
    console.log("row", event.data);
  }
  onSelectionChanged(event: any) {
    this.selectedRows = this.gridApi.getSelectedRows();
    if (this.selectedRows.length > 0) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
  }
  // On file Select
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
  }
  openModal(data?: any) {
    this.imageUrl = null;
    this.cropPriceModal.show();
    if (data) {
      this.newsForm = this.fb.group({
        Title: [this.selectedRows[0].attributes.Title, Validators.required],
        Body: [this.selectedRows[0].attributes.Body, Validators.required],
        Image: [
          this.selectedRows[0].attributes.Images?.data[0]?.id,
          Validators.required,
        ],
      });
      this.imageUrl = this.selectedRows[0].attributes.Images?.data[0]
        ?.attributes?.url
        ? `${this.baseURL}` +
          this.selectedRows[0].attributes.Images?.data[0]?.attributes?.url
        : null;
    } else {
      this.newsForm = this.fb.group({
        Title: ["", Validators.required],
        Body: ["", Validators.required],
        Image: ["", Validators.required],
      });
      this.imageUrl = null;
    }
  }
  deleteRecord() {
    let resp = {};
    this.dataservice
      .UpdateIndoramaUpdates({ isDelete: true }, this.selectedRows[0].id, null)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateNewsAndUpdate) {
          this.toastr.success("Success!");
          this.getUpdates();
          this.file = null;
          this.deleteModal.hide();
          this.gridApi.deselectAll();
        } else {
          this.toastr.error("Failed. Please check the fields!");
        }
      });
  }
  cropPriceSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.newsForm.value);
    if (!this.disableButton) {
      if (this.file) {
        this.dataservice.upload(this.file).subscribe((response: any) => {
          if (response.status == 200) {
            console.log(response);
            this.dataservice
              .UpdateIndoramaUpdates(
                this.newsForm.value,
                this.selectedRows[0].id,
                response.body[0]?.id
              )
              .subscribe((result: any) => {
                resp = result.data;
                console.log("response", result);
                if (result.data.updateNewsAndUpdate) {
                  this.toastr.success("Success!");
                  this.file = null;
                  this.getUpdates();
                  this.btnLoading = false;
                  this.cropPriceModal.hide();
                  this.gridApi.deselectAll();
                } else {
                  this.toastr.error("Failed. Please check the fields!");
                  this.btnLoading = false;
                }
              });
          }
        });
      } else {
        this.dataservice
          .UpdateIndoramaUpdates(
            this.newsForm.value,
            this.selectedRows[0].id,
            null
          )
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateNewsAndUpdate) {
              this.toastr.success("Success!");
              this.file = null;
              this.btnLoading = false;
              this.cropPriceModal.hide();
              this.gridApi.deselectAll();
              this.getUpdates();
              
            } else {
              this.toastr.error("Failed. Please check the fields!");
              this.btnLoading = false;
            }
          });
      }
    } else {
      this.dataservice.upload(this.file).subscribe((response: any) => {
        if (response.status == 200) {
          console.log(response);
          this.dataservice
            .AddIndoramaUpdates(this.newsForm.value, response.body[0]?.id)
            .subscribe((result: any) => {
              resp = result.data;
              console.log("response", result);
              if (result.data.createNewsAndUpdate) {
                this.toastr.success("Success!");
                this.file = null;
                this.cropPriceModal.hide();
                this.btnLoading = false;
                this.getUpdates();
                this.gridApi.deselectAll();
              } else {
                this.toastr.error("Failed. Please check the fields!");
                this.btnLoading = false;
              }
            });
        } else {
          this.toastr.error("Image failed to upload!");
          this.btnLoading = false;
        }
      });
    }
  }
}
