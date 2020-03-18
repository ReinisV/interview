import { Routes } from '@angular/router';

import { MyQuestionsListComponent } from '@interview/questions/feature';
import { MyQuestionnairesListComponent } from '@interview/questionnaires/feature';

export const appRoutes: Routes = [
  {
    path: 'my-questions',
    component: MyQuestionsListComponent,
    data: { title: 'My questions list' }
  },
  {
    path: 'my-questionnaires',
    component: MyQuestionnairesListComponent,
    data: { title: 'My questionnaires list' }
  },
  {
    path: '',
    redirectTo: '/my-questions',
    pathMatch: 'full'
  },
];
