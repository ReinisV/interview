
export function S4() {// tslint:disable-next-line
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

export interface Question {
  questionText: string,
  feedbackChoices: string[],
  questionId: string,
}

export interface Questionnaire {
  questionnaireName: string,
  questionIds: string[],
  questionnaireId: string,
}

export interface InterviewState {
  questions: Question[];
  questionnaires: Questionnaire[];
};

export const initialState: InterviewState = {
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
  }],
  questionnaires: []
};
