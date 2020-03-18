import { q1, q2, q3, q4, q5, q6 } from './test-data';

export interface Question {
  questionText: string,
  feedbackChoices: string[],
  questionId: string,
}

export const questionsFeatureKey = "questions";

export interface QuestionState {
  questions: Question[];
};

export const initialQuestionState: QuestionState = { questions: [q1, q2, q3, q4, q5, q6] };
