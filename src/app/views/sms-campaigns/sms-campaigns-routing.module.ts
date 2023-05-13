import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SMSCampaignsComponent } from './sms-campaigns.component';
import { AuthGuard } from '../login/auth.guard';
import { SMSCampaignsDetailComponent } from './sms-campaigns-detail.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: 'sms-campaigns'
      },
      {
        path: 'all',
        // canActivate: [AuthGuard],
        component: SMSCampaignsComponent,
        data: {
          title: 'SMS Campaign'
        }
      },
      {
        path: 'details/:id',
        // canActivate: [AuthGuard],
        component: SMSCampaignsDetailComponent,
        data: {
          title: 'SMS Campaign Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SMSCampaignsRoutingModule {}
