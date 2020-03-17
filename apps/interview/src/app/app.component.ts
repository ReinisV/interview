import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { addEmptyQuestion } from './interview.actions';
import { Question, QuestionState } from './interview.reducer';

@Component({
  selector: 'interview-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  ]
})
export class AppComponent {
  questions$: Observable<Question[]>;

  constructor(private store: Store<{ questions: QuestionState }>) {
    this.questions$ = store.select(state => state.questions.questions);
  }

  addEmptyQuestion() {
    this.store.dispatch(addEmptyQuestion());
  }
}
