import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropPricesComponent } from './crop-prices.component';
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
        component: CropPricesComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Crop Prices'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoilTestRoutingModule {}
