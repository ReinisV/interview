import { createReducer, on } from '@ngrx/store';
import { initialQuestionState, QuestionState } from './state';
import { addEmptyQuestion, updateQuestion, deleteQuestion } from './actions';
import { S4 } from './helpers';

const _questionsReducer = createReducer(initialQuestionState,
  on(addEmptyQuestion, state => ({
    ...state,
    questions: [
      ...state.questions,
      {
        questionText: "Example",
        feedbackChoices: [],
        questionId: S4(),
      }
    ]
  })),

  on(updateQuestion, (state, { question }) => {
    const index = state.questions.map(q => q.questionId).indexOf(question.questionId);
    return {
      ...state,
      questions: [
        ...state.questions.slice(0, index),
        {
          ...state.questions[index],
          ...question,
        },
        ...state.questions.slice(index + 1)
      ]
    };
  }),

  on(deleteQuestion, (state, { questionId }) => {
    const index = state.questions.map(q => q.questionId).indexOf(questionId);
    return {
      ...state,
      questions: [
        ...state.questions.slice(0, index),
        ...state.questions.slice(index + 1)
      ]
    };
  }),
);

export function questionReducer(state: QuestionState, action) {
  return _questionsReducer(state, action);
}
