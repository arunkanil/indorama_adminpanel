import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSurveyComponent } from './surveys-add.component';
import { SurveyDetailsComponent } from './surveys-detail.component';
import { SurveysComponent } from './surveys.component';

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
        component: SurveysComponent,
      },
      {
        path: 'new_survey',
        // canActivate: [AuthGuard],
        component: NewSurveyComponent,
      },{
        path: 'survey_details/:id',
        // canActivate: [AuthGuard],
        component: SurveyDetailsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {}
