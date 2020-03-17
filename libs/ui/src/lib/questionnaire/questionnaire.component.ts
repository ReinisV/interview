import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Questionnaire, Question, InterviewState } from '../../store/interview.state';
import { select, Store } from '@ngrx/store';
import { getAllQuestionsExceptIds, getQuestionsWithIds } from '../../store/interview.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'interview-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  constructor(
    private store: Store<InterviewState>
  ) {
  }

  @Input()
  set questionnaire(value: Questionnaire) {
    this.originalQuestionnaireValue = value;
    this.questionnaireValue = {
      ...value,
    };

    this.updateQuestionsNotIncluded();
  }

  questionnaireValue: Questionnaire;
  originalQuestionnaireValue: Questionnaire;
  isInEditMode = false;

  inAddNewQuestionMode = false;
  newQuestionChoice: string = null;

  @Output() saveRequested = new EventEmitter<Questionnaire>();
  @Output() deleteRequested = new EventEmitter<string>();

  questionsNotYetIncluded$: Observable<Question[]>;
  questionsSelected$: Observable<Question[]>;

  private updateQuestionsNotIncluded(): void {
    this.questionsNotYetIncluded$ = this.store.pipe(select(
      getAllQuestionsExceptIds,
      { questionIds: this.questionnaireValue.questionIds }
    ));

    this.questionsSelected$ = this.store.pipe(select(
      getQuestionsWithIds,
      { questionIds: this.questionnaireValue.questionIds }
    ));
  }

  saveClicked() {
    this.saveRequested.emit(this.questionnaireValue);
    this.isInEditMode = false;
  }

  cancelClicked() {
    this.questionnaireValue = {
      ...this.originalQuestionnaireValue,
    };
    this.isInEditMode = false;
  }

  deleteClicked() {
    this.deleteRequested.emit(this.questionnaireValue.questionnaireId);
  }

  editClicked() {
    this.isInEditMode = true;
  }

  removeQuestion(indexOfQuestionChoice: number): void {
    this.questionnaireValue.questionIds = [
      ...this.questionnaireValue.questionIds.slice(0, indexOfQuestionChoice),
      ...this.questionnaireValue.questionIds.slice(indexOfQuestionChoice + 1)
    ];

    this.updateQuestionsNotIncluded();
  }

  addQuestion() {
    this.questionnaireValue.questionIds = [
      ...this.questionnaireValue.questionIds,
      this.newQuestionChoice,
    ];

    this.newQuestionChoice = null;
    this.inAddNewQuestionMode = false;
    this.updateQuestionsNotIncluded();
  }

  cancelQuestion() {
    this.newQuestionChoice = null;
    this.inAddNewQuestionMode = false;
  }
}
