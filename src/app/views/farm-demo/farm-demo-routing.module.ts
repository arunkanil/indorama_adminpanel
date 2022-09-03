import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmDemoComponent } from './farm-demo.component';
import { CustomerDetailComponent } from './farm-demo-detail.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'cards'
      },
      {
        path: 'all',
        // canActivate: [AuthGuard],
        component: FarmDemoComponent,
        data: {
          roles: 'TELE_CALLER',
          title: 'Farm Demo'
        }
      },
      {
        path: 'demo_details/:id',
        component: CustomerDetailComponent,
        data: {
          title: 'Farm Demo Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmDemoRoutingModule {}
