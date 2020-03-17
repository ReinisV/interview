import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Question, InterviewState } from '../../store/interview.state';
import { addEmptyQuestion, updateQuestion, deleteQuestion } from '../../store/interview.actions';
import { selectQuestions } from '../../store/interview.selectors';

@Component({
  selector: 'interview-my-questions-list',
  templateUrl: './my-questions-list.component.html',
  styleUrls: ['./my-questions-list.component.css']
})
export class MyQuestionsListComponent {
  questions$: Observable<Question[]>;

  constructor(
    private store: Store<InterviewState>
    ) {
    this.questions$ = this.store.pipe(select(selectQuestions));
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
