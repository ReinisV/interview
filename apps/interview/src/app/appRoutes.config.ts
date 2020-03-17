import { Routes } from '@angular/router';
import { MyQuestionsListComponent } from '@interview/ui';

export const appRoutes: Routes = [
  {
    path: 'my-questions',
    component: MyQuestionsListComponent,
    data: { title: 'My questions list' }
  },
  {
    path: '',
    redirectTo: '/my-questions',
    pathMatch: 'full'
  },
];
