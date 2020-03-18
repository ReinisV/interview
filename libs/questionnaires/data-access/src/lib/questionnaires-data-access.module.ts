import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class QuestionnairesDataAccessModule { }

import * as actions from './actions';
import * as selectors from './selectors';

export { actions, selectors }

export { Questionnaire, QuestionnaireState, questionnariesFeatureKey } from './state';
export { questionnaireReducer } from './reducer';
