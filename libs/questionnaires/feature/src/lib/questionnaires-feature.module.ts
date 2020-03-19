import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
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
