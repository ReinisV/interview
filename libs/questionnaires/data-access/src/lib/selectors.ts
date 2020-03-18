import { createSelector, createFeatureSelector } from '@ngrx/store';
import { QuestionnaireState, questionnariesFeatureKey } from './state';

export const selectQuestionnairesState = createFeatureSelector<{ [questionnariesFeatureKey]: QuestionnaireState }, QuestionnaireState>(questionnariesFeatureKey);
export const selectQuestionnaires = createSelector(selectQuestionnairesState, state => state.questionnaires);
