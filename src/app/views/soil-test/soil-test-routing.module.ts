import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { SoilTestDetailComponent } from './soil-detail.component';
import { SoilHomeComponent } from './soil-home.component';

const routes: Routes = [
  {
    path: '',
    // data: {
    //   title: 'Theme'
    // },
    children: [
      {
        path: '',
        redirectTo: 'soiltest'
      },
      {
        path: 'customers',
        // canActivate: [AuthGuard],
        component: SoilHomeComponent,
        data: {
          roles: 'MANAGER',
          title: 'Soil Analysis'
        }
      },
      {
        path: 'test_details/:id',
        // canActivate: [AuthGuard],
        component: SoilTestDetailComponent,
        data: {
          roles: 'MANAGER',
          title: 'Test Details'
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
