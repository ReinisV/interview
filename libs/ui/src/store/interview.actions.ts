import { createAction, props } from '@ngrx/store';
import { Question, Questionnaire } from './interview.state';

export const addEmptyQuestion = createAction('[Interview List] Add empty question');

export const updateQuestion = createAction(
  '[Interview List] Update question',
  props<{ question: Question }>());

export const deleteQuestion = createAction(
  '[Interview List] Delete question',
  props<{ questionId: string }>());

export const addEmptyQuestionnaire = createAction('[Interview List] Add empty questionnaire');

export const updateQuestionnaire = createAction(
  '[Interview List] Update questionnaire',
  props<{ questionnaire: Questionnaire }>());

export const deleteQuestionnaire = createAction(
  '[Interview List] Delete questionnaire',
  props<{ questionnaireId: string }>());
