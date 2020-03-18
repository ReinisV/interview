import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Question, actions, selectors, QuestionState, questionsFeatureKey } from '@interview/questions/data-access';

@Component({
  selector: 'interview-my-questions-list',
  templateUrl: './my-questions-list.component.html',
  styleUrls: ['./my-questions-list.component.css']
})
export class MyQuestionsListComponent {
  questions$: Observable<Question[]>;

  constructor(
    private store: Store<{ [questionsFeatureKey]: QuestionState }>
    ) {
    this.questions$ = this.store.pipe(select(selectors.selectQuestions));
  }

  addEmptyQuestion(): void {
    this.store.dispatch(actions.addEmptyQuestion());
  }

  saveQuestion(question: Question): void {
    this.store.dispatch(actions.updateQuestion({ question: question }));
  }

  deleteQuestion(questionId: string): void {
    this.store.dispatch(actions.deleteQuestion({ questionId: questionId }));
  }
}
