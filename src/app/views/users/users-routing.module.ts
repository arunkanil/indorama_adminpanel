import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail.component';

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
        component: UsersComponent,
        data: {
          title: 'Users'
        }
      },
      {
        path: 'user_details/:id',
        // canActivate: [AuthGuard],
        component: UserDetailComponent,
        data: {
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
