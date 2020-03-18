import { createAction, props } from '@ngrx/store';
import { Question } from './state';

export const addEmptyQuestion = createAction('[Questions] Add empty question');

export const updateQuestion = createAction(
  '[Questions] Update question',
  props<{ question: Question }>());

export const deleteQuestion = createAction(
  '[Questions] Delete question',
  props<{ questionId: string }>());
