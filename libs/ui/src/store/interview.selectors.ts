import { createSelector, createFeatureSelector } from '@ngrx/store';
import { InterviewState, Question, QuestionState, QuestionnaireState, questionnariesFeatureKey, questionsFeatureKey } from './interview.state';

export const selectQuestionsState = createFeatureSelector<InterviewState, QuestionState>(questionsFeatureKey);
export const selectQuestions = createSelector(selectQuestionsState, state => state.questions);

export const getAllQuestionsExceptIds = createSelector(
  selectQuestions,
  (questions: Question[], props: { questionIds: string[] }) => questions.filter(q => !props.questionIds.includes(q.questionId))
);

export const getQuestionsWithIds = createSelector(
  selectQuestions,
  (questions: Question[], props: { questionIds: string[] }) => questions.filter(q => props.questionIds.includes(q.questionId))
);

export const selectQuestionnairesState = createFeatureSelector<InterviewState, QuestionnaireState>(questionnariesFeatureKey);
export const selectQuestionnaires = createSelector(selectQuestionnairesState, state => state.questionnaires);
