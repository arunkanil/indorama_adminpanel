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
        data: {
          // roles: 'MANAGER',
          title: 'Surveys'
        }
      },
      {
        path: 'new_survey',
        // canActivate: [AuthGuard],
        component: NewSurveyComponent,
        data: {
          // roles: 'MANAGER',
          title: 'New Survey'
        }
      },{
        path: 'survey_details/:id',
        // canActivate: [AuthGuard],
        component: SurveyDetailsComponent,
        data: {
          // roles: 'MANAGER',
          title: 'Survey details'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveysRoutingModule {}
