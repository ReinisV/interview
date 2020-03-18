import { createReducer, on } from '@ngrx/store';
import { addEmptyQuestionnaire, updateQuestionnaire, deleteQuestionnaire } from './actions';
import { initialQuestionnaireState, QuestionnaireState } from './state';
import { S4 } from './helpers';

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
