import { createAction, props } from '@ngrx/store';
import { Question } from './interview.reducer';

export const addEmptyQuestion = createAction('[Interview List] Add empty question');

export const updateQuestion = createAction(
  '[Interview List] Update question',
  props<{ question: Question }>());

  export const deleteQuestion = createAction(
    '[Interview List] Delete question',
    props<{ questionId: string }>());
