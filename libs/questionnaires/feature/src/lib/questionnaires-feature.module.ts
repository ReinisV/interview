import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { StoreModule } from '@ngrx/store';

import { MyQuestionnairesListComponent } from './my-questionnaires-list/my-questionnaires-list.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

import { questionnariesFeatureKey, questionnaireReducer } from '@interview/questionnaires/data-access';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    StoreModule.forFeature(questionnariesFeatureKey, questionnaireReducer),
  ],
  declarations: [
    MyQuestionnairesListComponent,
    QuestionnaireComponent
  ],
  exports: [
    MyQuestionnairesListComponent,
  ]
})
export class QuestionnairesFeatureModule { }
