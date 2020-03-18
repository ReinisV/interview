import { testData } from '@interview/questions/data-access';
import { S4 } from './helpers';

export const qn1 = {
  questionnaireName: "my questionnaire",
  questionIds: [testData.q1.questionId, testData.q2.questionId, testData.q3.questionId],
  questionnaireId: S4(),
}

export const qn2 = {
  questionnaireName: "easy questionnaire",
  questionIds: [testData.q1.questionId],
  questionnaireId: S4(),
}

export const qn3 = {
  questionnaireName: "questionnaire for tomorrow",
  questionIds: [testData.q6.questionId, testData.q5.questionId, testData.q2.questionId],
  questionnaireId: S4(),
}

export const qn4 = {
  questionnaireName: "another questionnaire",
  questionIds: [testData.q1.questionId, testData.q2.questionId, testData.q6.questionId],
  questionnaireId: S4(),
}
