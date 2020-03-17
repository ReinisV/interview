import { createReducer, on } from '@ngrx/store';
import { addEmptyQuestion, updateQuestion, deleteQuestion, addEmptyQuestionnaire, updateQuestionnaire, deleteQuestionnaire } from './interview.actions';
import { S4, initialQuestionState, QuestionState, initialQuestionnaireState, QuestionnaireState } from './interview.state';

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

const _questionnairesReducer = createReducer(initialQuestionnaireState,
  on(addEmptyQuestionnaire, state => ({
    ...state,
    questionnaires: [
      ...state.questionnaires,
      {
        questionnaireName: "Example",
        questionIds: [],
        questionnaireId: S4(),
      }
    ]
  })),

  on(updateQuestionnaire, (state, { questionnaire }) => {
    const index = state.questionnaires.map(q => q.questionnaireId).indexOf(questionnaire.questionnaireId);
    return {
      ...state,
      questionnaires: [
        ...state.questionnaires.slice(0, index),
        {
          ...state.questionnaires[index],
          ...questionnaire,
        },
        ...state.questionnaires.slice(index + 1)
      ]
    };
  }),

  on(deleteQuestionnaire, (state, { questionnaireId }) => {
    const index = state.questionnaires.map(q => q.questionnaireId).indexOf(questionnaireId);
    return {
      ...state,
      questionnaires: [
        ...state.questionnaires.slice(0, index),
        ...state.questionnaires.slice(index + 1)
      ]
    };
  }),
);

export function questionnaireReducer(state: QuestionnaireState, action) {
  return _questionnairesReducer(state, action);
}

export function questionReducer(state: QuestionState, action) {
  return _questionsReducer(state, action);
}
