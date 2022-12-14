import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ActivityDetailComponent } from './activity-detail.component';

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
        component: ActivitiesComponent,
        data: {
          // roles: 'MANAGER',
          title: 'Activities'
        }
      },
      {
        path: 'activity_details/:id',
        // canActivate: [AuthGuard],
        component: ActivityDetailComponent,
        data: {
          // roles: 'MANAGER',
          title: 'Activity Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {}
