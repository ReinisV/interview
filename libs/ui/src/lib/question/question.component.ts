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
