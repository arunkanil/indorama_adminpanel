import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetailersComponent } from './retailers.component';
import { AuthGuard } from '../login/auth.guard';
import { RetailerDetailComponent } from './retailer-detail.component';

const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        redirectTo: 'retailers'
      },
      {
        path: 'all',
        // canActivate: [AuthGuard],
        component: RetailersComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Retailers'
        }
      },
      {
        path: 'retailer_details/:id',
        // canActivate: [AuthGuard],
        component: RetailerDetailComponent,
        data: {
          roles: 'MANAGER',
          title: 'Retailer Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailersRoutingModule {}
