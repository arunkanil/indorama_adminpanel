import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MarketplaceComponent } from './marketplace.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Buttons Routing
import { MarketplaceRoutingModule } from './marketplace-routing.module';

// Angular
import { AgGridModule } from 'ag-grid-angular';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MarketplaceDetailComponent } from './marketplace-detail.component';

@NgModule({
  imports: [
    CommonModule,
    TabsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    MarketplaceRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  declarations: [
    MarketplaceComponent,
    MarketplaceDetailComponent
  ]
})
export class MarketplaceModule { }
