import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Question, QuestionState } from '@interview/ui';
import { addEmptyQuestion, updateQuestion, deleteQuestion } from '@interview/ui';

@Component({
  selector: 'interview-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent {
  questions$: Observable<Question[]>;

  constructor(private store: Store<{ questions: QuestionState }>) {
    this.questions$ = store.select(state => state.questions.questions);
  }

  addEmptyQuestion(): void {
    this.store.dispatch(addEmptyQuestion());
  }

  saveQuestion(question: Question): void {
    this.store.dispatch(updateQuestion({ question: question }));
  }

  deleteQuestion(questionId: string): void {
    this.store.dispatch(deleteQuestion({ questionId: questionId }));
  }
}
