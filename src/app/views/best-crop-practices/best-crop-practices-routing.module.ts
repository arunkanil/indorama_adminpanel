import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BestCropPracticesComponent } from './best-crop-practices.component';
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
        component: BestCropPracticesComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Best Crop Practices'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BestCropPracticesRoutingModule {}
