import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { FarmDemoComponent } from "./farm-demo.component";
import { TabsModule } from "ngx-bootstrap/tabs";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoverModule } from "ngx-bootstrap/popover";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgSelectModule } from "@ng-select/ng-select";
import { FarmDemoRoutingModule } from "./farm-demo-routing.module";
import { AgGridModule } from "ag-grid-angular";
import { ModalModule } from "ngx-bootstrap/modal";
import { FarmDemoDetailComponent } from "./farm-demo-detail.component";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { CarouselModule } from "ngx-bootstrap/carousel";

@NgModule({
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    FormsModule,
    ReactiveFormsModule,
    FarmDemoRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    NgSelectModule,
    IvyCarouselModule,
    AutocompleteLibModule,
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    CarouselModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [FarmDemoComponent, FarmDemoDetailComponent],
})
export class FarmDemoModule {}
