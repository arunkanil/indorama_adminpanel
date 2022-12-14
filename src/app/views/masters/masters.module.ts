import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { mastersComponent } from './masters.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Buttons Routing
import { mastersRoutingModule } from './masters-routing.module';

// Angular
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ActionRenderer } from '../../utils/StatusRenderer';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    mastersRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    mastersComponent,
    ActionRenderer
  ]
})
export class MastersModule { }
