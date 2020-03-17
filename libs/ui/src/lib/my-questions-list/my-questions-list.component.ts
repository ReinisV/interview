import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Question, QuestionState } from '../../interview.reducer';
import { Store } from '@ngrx/store';
import { addEmptyQuestion, updateQuestion, deleteQuestion } from '../../interview.actions';

@Component({
  selector: 'interview-my-questions-list',
  templateUrl: './my-questions-list.component.html',
  styleUrls: ['./my-questions-list.component.css']
})
export class MyQuestionsListComponent {
  questions$: Observable<Question[]>;

  constructor(
    private store: Store<{ questions: QuestionState }>
    ) {
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
