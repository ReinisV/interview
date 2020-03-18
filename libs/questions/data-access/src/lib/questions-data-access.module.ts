import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule]
})
export class QuestionsDataAccessModule {}

import * as actions from './actions';
import * as selectors from './selectors';
import * as testData from './test-data';

export { actions, selectors, testData }
export { Question, questionsFeatureKey, QuestionState } from './state';
export { questionReducer } from './reducer';
