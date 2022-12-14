import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { DataService } from "../../data.service";
import { MarketplaceColumn } from "../../constants/columnMetadata";
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
  templateUrl: "marketplace.component.html",
})
export class MarketplaceComponent {
  rowSelection: string;
  constructor(
    public dataservice: DataService,
    public router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.columnDefs = [...MarketplaceColumn];
    this.rowSelection = "single";
  }
  @ViewChild("productModal") public productModal: ModalDirective;
  @ViewChild("detailsModal") public detailsModal: ModalDirective;
  @ViewChild("deleteModal") public deleteModal: ModalDirective;

  loading = true;
  btnLoading = false;
  disableNextButton = false;
  disablePrevButton = true;
  meta;
  pageSize = 20;
  from = 1;
  to = 20;
  count = 1;
  columnDefs = [];
  Categories: any = [];

  productForm = this.fb.group({
    itemName: ["", Validators.required],
    images: ["", Validators.required],
    userId: [localStorage.getItem("uid")],
    contactNumber: ["", Validators.required],
    price: ["", Validators.required],
    availableQty: ["", Validators.required],
    unit: ["", Validators.required],
    category: ["", Validators.required],
    description: ["", Validators.required],
  });
  rowData: any = [];
  selectedRows: any = [];
  private gridApi;
  private gridColumnApi;
  file: any = [];

  ngOnInit(): void {
    this.loading = true;
    console.log(this.router);
    this.getMarketplace();
    this.getCategories();
  }
  getMarketplace() {
    this.dataservice
      .getMarketplace(1, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.rowData = result.data.marketplaceProducts.data;
        this.meta = result.data.marketplaceProducts.meta;
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
      .getMarketplace(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.marketplaceProducts.meta;
        this.rowData = result.data.marketplaceProducts.data;
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
      .getMarketplace(this.count, this.pageSize)
      .valueChanges.subscribe((result: any) => {
        this.meta = result.data.marketplaceProducts.meta;
        this.rowData = result.data.marketplaceProducts.data;
      });
  }
  getCategories() {
    this.dataservice
      .getMarketplaceCategories()
      .valueChanges.subscribe((result: any) => {
        console.log("getCategories", result.data.marketplaceCategories.data);
        this.Categories = result.data.marketplaceCategories.data;
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
    this.router.navigate(
      ["/marketplace/marketplace_details", this.selectedRows[0]?.id],
      {
        state: { data: this.selectedRows },
      }
    );
  }
  // On file Select
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  openModal() {
    this.productModal.show();
  }
  productSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.productForm.value);
    this.dataservice.upload(this.file).subscribe((response: any) => {
      if (response.status == 200) {
        console.log(response);
        this.dataservice
          .createMarketplaceProduct(
            this.productForm.value,
            response.body.map((a) => a.id)
          )
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.createMarketplaceProduct) {
              this.toastr.success("Success!");
              this.dataservice.getMarketplace(1, this.pageSize).refetch();
              window.location.reload();
              this.file = null;
              this.productForm.reset();
              this.productModal.hide();
              this.gridApi.deselectAll();
              this.btnLoading = false;
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
