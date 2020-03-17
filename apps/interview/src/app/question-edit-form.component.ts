import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from './interview.reducer';

@Component({
  selector: 'interview-question-edit-form',
  templateUrl: './question-edit-form.component.html',
})
export class InterviewQuestionEditFormComponent {
  questionValue: Question;
  originalQuestionValue: Question;
  isInEditMode = false;

  @Input()
  set question(value: Question) {
    this.originalQuestionValue = value;
    this.questionValue = {
      ...value,
    };
  }

  @Output() saveRequested = new EventEmitter<Question>();
  @Output() deleteRequested = new EventEmitter<string>();

  saveClicked() {
    this.saveRequested.emit(this.questionValue);
    this.isInEditMode = false;
  }

  cancelClicked() {
    this.questionValue = {
      ...this.originalQuestionValue,
    };
    this.isInEditMode = false;
  }

  deleteClicked() {
    this.deleteRequested.emit(this.questionValue.questionId);
  }

  editClicked() {
    this.isInEditMode = true;
  }
}
