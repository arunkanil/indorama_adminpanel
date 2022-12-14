import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { mastersComponent } from './masters.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        redirectTo: 'masters'
      },
      {
        path: 'States',
        // canActivate: [AuthGuard],
        component: mastersComponent,
        data: {
          roles: 'States',
          title: 'States'
        }
      },
      {
        path: 'LGA',
        // canActivate: [AuthGuard],
        component: mastersComponent,
        data: {
          roles: 'LGA',
          title: 'LGA'
        }
      },
      {
        path: 'Cities',
        // canActivate: [AuthGuard],
        component: mastersComponent,
        data: {
          roles: 'Cities',
          title: 'Cities'
        }
      },
      {
        path: 'Villages',
        // canActivate: [AuthGuard],
        component: mastersComponent,
        data: {
          roles: 'Villages',
          title: 'Villages'
        }
      },
      {
        path: 'Markets',
        // canActivate: [AuthGuard],
        component: mastersComponent,
        data: {
          roles: 'Markets',
          title: 'Markets'
        }
      },
      {
        path: 'Crops',
        // canActivate: [AuthGuard],
        component: mastersComponent,
        data: {
          roles: 'Crops',
          title: 'Crops'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class mastersRoutingModule {}
