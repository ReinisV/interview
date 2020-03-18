import { qn1, qn2, qn3, qn4 } from './test-data';

export interface Questionnaire {
  questionnaireName: string,
  questionIds: string[],
  questionnaireId: string,
}

export const questionnariesFeatureKey = "questionnaries";

export interface QuestionnaireState {
  questionnaires: Questionnaire[];
};

export const initialQuestionnaireState: QuestionnaireState = { questionnaires: [qn1, qn2, qn3, qn4], };
