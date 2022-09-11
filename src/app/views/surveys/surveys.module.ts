import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { SurveysComponent } from "./surveys.component";
// Dropdowns Component
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
// Buttons Routing
import { SurveysRoutingModule } from "./surveys-routing.module";
// Angular
import { AgGridModule } from "ag-grid-angular";
import { ModalModule } from "ngx-bootstrap/modal";
import { SurveyDetailsComponent } from "./surveys-detail.component";
import { NewSurveyComponent } from "./surveys-add.component";

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    SurveysRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
  ],
  declarations: [SurveysComponent, SurveyDetailsComponent, NewSurveyComponent],
})
export class SurveysModule {}
