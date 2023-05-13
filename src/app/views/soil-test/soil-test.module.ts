// Angular
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';

// import { TypographyComponent } from './typography.component';

// Theme Routing
import { SoilTestRoutingModule } from './soil-test-routing.module';
import { SoilHomeComponent } from './soil-home.component';
import { SoilTestDetailComponent } from './soil-detail.component';

@NgModule({
  imports: [
    CommonModule,
    SoilTestRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
  ],
  declarations: [
    SoilHomeComponent,
    SoilTestDetailComponent,
  ]
})
export class SoilTestModule { }
