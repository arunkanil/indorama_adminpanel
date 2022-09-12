import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndoramaUpdatesComponent } from './indorama-updates.component';

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
        component: IndoramaUpdatesComponent,
        data: {
          roles: 'KP_CALLER',
          title: 'Indorama Updates'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndoramaUpdatesRoutingModule {}
