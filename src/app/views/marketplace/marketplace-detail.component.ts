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
import { environment } from "../../../environments/environment";

@Component({
  templateUrl: "marketplace-detail.component.html",
})
export class MarketplaceDetailComponent implements OnInit {
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
  baseURL = environment.apiUrl;
  loading = true;
  details: any = [];
  btnLoading = false;
  dateConverterMin = dateConverterMin;
  dateConverter = dateConverter;
  flag;
  file: any = [];
  Categories: any = [];

  productForm = this.fb.group({
    itemName: ["", Validators.required],
    // images: ["", Validators.required],
    // userId: [localStorage.getItem("uid")],
    contactNumber: ["", Validators.required],
    price: ["", Validators.required],
    availableQty: ["", Validators.required],
    unit: ["", Validators.required],
    category: ["", Validators.required],
    description: ["", Validators.required],
  });

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.getSingleMarketplaceProduct();
    this.getCategories();
  }
  getSingleMarketplaceProduct() {
    this.dataservice
      .getSingleMarketplaceProduct(this.id)
      .valueChanges.subscribe((result: any) => {
        console.log(
          "getSingleMarketplaceProduct",
          result.data.marketplaceProduct.data
        );
        this.details = result.data.marketplaceProduct.data;
        this.productForm = this.fb.group({
          itemName: [this.details.attributes?.ItemName, Validators.required],
          // images: [this.details.attributes?.Images?.data, Validators.required],
          // userId: [this.details?.attributes?.seller?.data?.attributes?.Name],
          contactNumber: [
            this.details.attributes?.contactNumber,
            Validators.required,
          ],
          price: [this.details.attributes?.Price, Validators.required],
          availableQty: [
            this.details.attributes?.AvailableQty,
            Validators.required,
          ],
          unit: [this.details.attributes?.Unit, Validators.required],
          category: [
            this.details.attributes?.marketplace_category?.data?.id,
            Validators.required,
          ],
          description: [
            this.details.attributes?.description,
            Validators.required,
          ],
        });
        console.log(this.productForm);
        this.loading = false;
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
  dateConvertor(date) {
    return new Date(date);
  }
  openModal(data: any, flag) {
    this.resultModal.show();
    console.log(data, flag);
    this.flag = flag;
  }
  // On file Select
  onChange(event: any) {
    this.file = [];
    for (var i = 0; i < event.target.files.length; i++) {
      this.file.push(event.target.files[i]);
    }
    console.log(this.file);
  }
  productSubmit() {
    let resp = {};
    this.btnLoading = true;
    console.log(this.productForm.value);
    this.dataservice
      .updateMarketplaceProduct(this.productForm.value, this.id)
      .subscribe((result: any) => {
        resp = result.data;
        console.log("response", result);
        if (result.data.updateMarketplaceProduct) {
          this.toastr.success("Activity updated successfully!");
          this.editModal.hide();
          this.btnLoading = false;
          this.getSingleMarketplaceProduct();
        } else {
          this.toastr.error("Failed. Please check the fields!");
          this.btnLoading = false;
        }
      });
  }
  uploadImages() {
    let resp = {};
    this.btnLoading = true;
    this.dataservice.upload(this.file).subscribe((response: any) => {
      if (response.status == 200) {
        console.log(response);
        this.dataservice
          .updateMarketplaceProductImg(
            this.id,
            response.body.map((a) => a.id)
          )
          .subscribe((result: any) => {
            resp = result.data;
            console.log("response", result);
            if (result.data.updateMarketplaceProduct) {
              this.toastr.success("Activity updated successfully!");
              this.btnLoading = false;
              this.dataservice.getSingleMarketplaceProduct(this.id).refetch();
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
  DeleteMarketplaceProduct() {
    this.dataservice
      .DeleteMarketplaceProduct(this.id)
      .subscribe((result: any) => {
        console.log("response", result);
        if (result.data.deleteMarketplaceProduct) {
          this.toastr.success("Success!");
          this.deleteModal.hide();
          this.router.navigate(["/marketplace/all"]);
        } else {
          this.toastr.error("Failed!");
        }
      });
  }
}
