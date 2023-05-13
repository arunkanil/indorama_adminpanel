import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceDetailComponent } from './marketplace-detail.component';
import { MarketplaceComponent } from './marketplace.component';

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
        component: MarketplaceComponent,
        data: {
          // roles: 'MANAGER',
          title: 'Marketplace'
        }
      },
      {
        path: 'marketplace_details/:id',
        // canActivate: [AuthGuard],
        component: MarketplaceDetailComponent,
        data: {
          // roles: 'MANAGER',
          title: 'Marketplace Details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule {}
