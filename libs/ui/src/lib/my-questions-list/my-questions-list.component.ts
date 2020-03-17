import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Question, InterviewState } from '../../store/interview.state';
import { addEmptyQuestion, updateQuestion, deleteQuestion } from '../../store/interview.actions';

@Component({
  selector: 'interview-my-questions-list',
  templateUrl: './my-questions-list.component.html',
  styleUrls: ['./my-questions-list.component.css']
})
export class MyQuestionsListComponent {
  questions$: Observable<Question[]>;

  constructor(
    private store: Store<{ questions: InterviewState }>
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
