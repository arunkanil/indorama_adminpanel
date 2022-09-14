import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SMSCampaignsComponent } from './sms-campaigns.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Buttons Routing
import { SMSCampaignsRoutingModule } from './sms-campaigns-routing.module';

// Angular
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SMSCampaignsDetailComponent } from './sms-campaigns-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    ReactiveFormsModule,
    SMSCampaignsRoutingModule,
    AgGridModule.withComponents([]),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    SMSCampaignsComponent,
    SMSCampaignsDetailComponent
  ]
})
export class SMSCampaignsModule { }
