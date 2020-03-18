import { createAction, props } from '@ngrx/store';
import { Questionnaire } from './state';

export const addEmptyQuestionnaire = createAction('[Questionnaires] Add empty questionnaire');

export const updateQuestionnaire = createAction(
  '[Questionnaires] Update questionnaire',
  props<{ questionnaire: Questionnaire }>());

export const deleteQuestionnaire = createAction(
  '[Questionnaires] Delete questionnaire',
  props<{ questionnaireId: string }>());
