import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Questionnaire, InterviewState } from '../../store/interview.state';
import { addEmptyQuestionnaire, updateQuestionnaire, deleteQuestionnaire } from '../../store/interview.actions';

@Component({
  selector: 'interview-my-questionnaires-list',
  templateUrl: './my-questionnaires-list.component.html',
  styleUrls: ['./my-questionnaires-list.component.css']
})
export class MyQuestionnairesListComponent {

  questionnaires$: Observable<Questionnaire[]>;

  constructor(
    private store: Store<{ questions: InterviewState }>
    ) {
    this.questionnaires$ = store.select(state => state.questions.questionnaires);
  }


  addEmptyQuestionnaire(): void {
    this.store.dispatch(addEmptyQuestionnaire());
  }

  saveQuestionnaire(questionnaire: Questionnaire): void {
    this.store.dispatch(updateQuestionnaire({ questionnaire: questionnaire }));
  }

  deleteQuestionnaire(questionnaireId: string): void {
    this.store.dispatch(deleteQuestionnaire({ questionnaireId: questionnaireId }));
  }

}