import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IndoramaUpdatesRoutingModule } from './indorama-updates-routing.module';
import { IndoramaUpdatesComponent } from './indorama-updates.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    IndoramaUpdatesRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    IndoramaUpdatesComponent,
  ]
})
export class IndoramaUpdatesModule { }
