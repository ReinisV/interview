import { createReducer, on } from '@ngrx/store';
import { addEmptyQuestion } from './interview.actions';

export interface Question {
  questionText: string,
  feedbackChoices: string[],
}

export interface QuestionState { questions: Question[] };

export const initialState: QuestionState = {
  questions: [{
    questionText: "What is the diference between var and let in JS",
    feedbackChoices: [
      "Candidate was not aware of the difference",
      "Candidate discribed the diference very well",
    ],
  }, {
    questionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus arcu nec auctor condimentum. ",
    feedbackChoices: [
      "Aliquam viverra libero sollicitudin justo efficitur",
      "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
    ],
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

      }
    ]
  })),
);

export function questionsReducer(state, action) {
  return _questionsReducer(state, action);
}
