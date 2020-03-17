import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Questionnaire } from '../../store/interview.state';

@Component({
  selector: 'interview-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent {
  questionnaireValue: Questionnaire;
  originalQuestionnaireValue: Questionnaire;
  isInEditMode = false;

  @Input()
  set questionnaire(value: Questionnaire) {
    this.originalQuestionnaireValue = value;
    this.questionnaireValue = {
      ...value,
    };
  }

  @Output() saveRequested = new EventEmitter<Questionnaire>();
  @Output() deleteRequested = new EventEmitter<string>();

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
}
