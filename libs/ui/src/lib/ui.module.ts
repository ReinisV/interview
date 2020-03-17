import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MyQuestionsListComponent } from './my-questions-list/my-questions-list.component';
import { MyQuestionnairesListComponent } from './my-questionnaires-list/my-questionnaires-list.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';
import { questionReducer, questionnaireReducer } from '../store/interview.reducer';
import { questionnariesFeatureKey, questionsFeatureKey } from '../store/interview.state';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    StoreModule.forFeature(questionsFeatureKey, questionReducer),
    StoreModule.forFeature(questionnariesFeatureKey, questionnaireReducer),
  ],
  declarations: [
    QuestionComponent,
    MyQuestionsListComponent,
    MyQuestionnairesListComponent,
    QuestionnaireComponent
  ],
  exports: [
    MyQuestionsListComponent,
    MyQuestionnairesListComponent,
  ]
})
export class UiModule { }
