import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisementComponent } from './advertisement.component';
import { AuthGuard } from '../login/auth.guard';

const routes: Routes = [
  {
    path: '',
    
    children: [
      {
        path: '',
        redirectTo: 'cropprices'
      },
      {
        path: 'all',
        // canActivate: [AuthGuard],
        component: AdvertisementComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Profile'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementRoutingModule {}
