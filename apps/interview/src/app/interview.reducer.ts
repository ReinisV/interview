import { createReducer, on } from '@ngrx/store';
import { addEmptyQuestion, updateQuestion, deleteQuestion } from './interview.actions';

function S4() {// tslint:disable-next-line
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export interface Question {
  questionText: string,
  feedbackChoices: string[],
  questionId: string,
}

export interface QuestionState { questions: Question[] };

export const initialState: QuestionState = {
  questions: [{
    questionText: "What is the diference between var and let in JS",
    feedbackChoices: [
      "Candidate was not aware of the difference",
      "Candidate discribed the diference very well",
    ],
    questionId: S4(),
  }, {
    questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus arcu nec auctor condimentum. ",
    feedbackChoices: [
      "Aliquam viverra libero sollicitudin justo efficitur",
      "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
    ],
    questionId: S4(),
  }]
};

const _questionsReducer = createReducer(initialState,
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

export function questionsReducer(state, action) {
  return _questionsReducer(state, action);
}
