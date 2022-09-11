import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from './views/login/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'sms-campaigns',
        loadChildren: () => import('./views/sms-campaigns/sms-campaigns.module').then(m => m.SMSCampaignsModule)
      },
      {
        path: 'farmdemo',
        loadChildren: () => import('./views/farm-demo/farm-demo.module').then(m => m.FarmDemoModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'activities',
        loadChildren: () => import('./views/activities/activities.module').then(m => m.ActivitiesModule)
      },
      {
        path: 'surveys',
        loadChildren: () => import('./views/surveys/surveys.module').then(m => m.SurveysModule)
      },
      {
        path: 'marketplace',
        loadChildren: () => import('./views/marketplace/marketplace.module').then(m => m.MarketplaceModule)
      },
      {
        path: 'best-crop-practices',
        loadChildren: () => import('./views/best-crop-practices/best-crop-practices.module').then(m => m.BestCropPracticesModule)
      },
      {
        path: 'indorama_updates',
        loadChildren: () => import('./views/indorama-updates/indorama-updates.module').then(m => m.IndoramaUpdatesModule)
      },
      {
        path: 'soiltest',
        loadChildren: () => import('./views/soil-test/soil-test.module').then(m => m.SoilTestModule)
      },
      {
        path: 'cropprices',
        loadChildren: () => import('./views/crop-prices/crop-prices.module').then(m => m.CropPricesModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'retailers',
        loadChildren: () => import('./views/retailers/retailers.module').then(m => m.RetailersModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'masters',
        loadChildren: () => import('./views/masters/masters.module').then(m => m.MastersModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
