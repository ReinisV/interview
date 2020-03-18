import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { QuestionComponent } from './question/question.component';
import { MyQuestionsListComponent } from './my-questions-list/my-questions-list.component';

import { questionsFeatureKey, questionReducer } from '@interview/questions/data-access';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(questionsFeatureKey, questionReducer),
  ],
  declarations: [
    QuestionComponent,
    MyQuestionsListComponent,
  ],
  exports: [
    MyQuestionsListComponent,
  ]
})
export class QuestionsFeatureModule { }
