import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../store/interview.state';

@Component({
  selector: 'interview-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questionValue: Question;
  originalQuestionValue: Question;
  isInEditMode = false;

  inAddNewFeedbackMode = false;
  newFeedbackText = "";

  @Input()
  set question(value: Question) {
    this.originalQuestionValue = value;
    this.questionValue = {
      ...value,
    };
  }

  @Output() saveRequested = new EventEmitter<Question>();
  @Output() deleteRequested = new EventEmitter<string>();

  saveClicked(): void {
    this.saveRequested.emit(this.questionValue);
    this.isInEditMode = false;
  }

  cancelClicked(): void {
    this.questionValue = {
      ...this.originalQuestionValue,
    };
    this.isInEditMode = false;
  }

  deleteClicked(): void {
    this.deleteRequested.emit(this.questionValue.questionId);
  }

  editClicked(): void {
    this.isInEditMode = true;
  }

  removeFeedbackChoice(indexOfFeedbackChoice: number): void {
    this.questionValue.feedbackChoices = [
      ...this.questionValue.feedbackChoices.slice(0, indexOfFeedbackChoice),
      ...this.questionValue.feedbackChoices.slice(indexOfFeedbackChoice + 1)
    ];
  }

  addFeedback() {
    this.questionValue.feedbackChoices = [
      ...this.questionValue.feedbackChoices,
      this.newFeedbackText,
    ];

    this.newFeedbackText = "";
    this.inAddNewFeedbackMode = false;
  }

  cancelFeedback() {
    this.newFeedbackText = "";
    this.inAddNewFeedbackMode = false;
  }
}
