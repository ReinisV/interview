import { createSelector, createFeatureSelector } from '@ngrx/store';
import { QuestionState, questionsFeatureKey, Question } from './state';

export const selectQuestionsState = createFeatureSelector<{ [questionsFeatureKey]: QuestionState }, QuestionState>(questionsFeatureKey);
export const selectQuestions = createSelector(selectQuestionsState, state => state.questions);

export const getAllQuestionsExceptIds = createSelector(
  selectQuestions,
  (questions: Question[], props: { questionIds: string[] }) => questions.filter(q => !props.questionIds.includes(q.questionId))
);

export const getQuestionsWithIds = createSelector(
  selectQuestions,
  (questions: Question[], props: { questionIds: string[] }) => questions.filter(q => props.questionIds.includes(q.questionId))
);
