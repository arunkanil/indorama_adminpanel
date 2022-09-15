import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";
import { ModalModule } from "ngx-bootstrap/modal";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from 'ng2-charts';
import { SurveysComponent } from "./surveys.component";
import { SurveysRoutingModule } from "./surveys-routing.module";
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
    ChartsModule
  ],
  declarations: [SurveysComponent, SurveyDetailsComponent, NewSurveyComponent],
})
export class SurveysModule {}
