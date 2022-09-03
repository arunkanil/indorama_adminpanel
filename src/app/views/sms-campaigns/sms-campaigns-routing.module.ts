import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SMSCampaignsComponent } from './sms-campaigns.component';
import { AuthGuard } from '../login/auth.guard';

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
          title: 'SMS'
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
