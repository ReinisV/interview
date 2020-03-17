
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

export const questionsFeatureKey = "questions";
export const questionnariesFeatureKey = "questionnaries";

export interface InterviewState {
  [questionsFeatureKey]: QuestionState;
  [questionnariesFeatureKey]: QuestionnaireState;
};

export interface QuestionState {
  questions: Question[];
};

export interface QuestionnaireState {
  questionnaires: Questionnaire[];
};

const q1 = {
  questionText: "What is the diference between var and let in JS?",
  feedbackChoices: [
    "Candidate was not aware of the difference",
    "Candidate discribed the diference very well",
  ],
  questionId: S4(),
};

const q2 = {
  questionText: "What is the use of isNaN function?",
  feedbackChoices: [
    "Aliquam viverra libero sollicitudin justo efficitur",
    "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
  ],
  questionId: S4(),
};

const q3 = {
  questionText: "Which symbol is used for comments in Javascript?",
  feedbackChoices: [
    "Aliquam viverra libero sollicitudin justo efficitur",
    "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
  ],
  questionId: S4(),
};

const q4 = {
  questionText: "Between JavaScript and an ASP script, which is faster?",
  feedbackChoices: [
    "Aliquam viverra libero sollicitudin justo efficitur",
    "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
  ],
  questionId: S4(),
};

const q5 = {
  questionText: "What is negative infinity?",
  feedbackChoices: [
    "Aliquam viverra libero sollicitudin justo efficitur",
    "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
  ],
  questionId: S4(),
};

const q6 = {
  questionText: "Which company developed JavaScript?",
  feedbackChoices: [
    "Aliquam viverra libero sollicitudin justo efficitur",
    "Phasellus sagittis eros eu quam dictum, quis lobortis dui rutrum.",
  ],
  questionId: S4(),
};

const qn1 = {
  questionnaireName: "my questionnaire",
  questionIds: [q1.questionId, q2.questionId, q3.questionId],
  questionnaireId: S4(),
}

const qn2 = {
  questionnaireName: "easy questionnaire",
  questionIds: [q1.questionId],
  questionnaireId: S4(),
}

const qn3 = {
  questionnaireName: "questionnaire for tomorrow",
  questionIds: [q6.questionId, q5.questionId, q2.questionId],
  questionnaireId: S4(),
}

const qn4 = {
  questionnaireName: "another questionnaire",
  questionIds: [q1.questionId, q2.questionId, q6.questionId],
  questionnaireId: S4(),
}

export const initialQuestionState: QuestionState = { questions: [q1, q2, q3, q4, q5, q6] };
export const initialQuestionnaireState: QuestionnaireState = { questionnaires: [qn1, qn2, qn3, qn4], };

