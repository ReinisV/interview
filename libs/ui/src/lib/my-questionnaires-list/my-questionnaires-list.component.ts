import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Questionnaire, QuestionnaireState, InterviewState } from '../../store/interview.state';
import { addEmptyQuestionnaire, updateQuestionnaire, deleteQuestionnaire } from '../../store/interview.actions';
import { selectQuestionnaires } from '../../store/interview.selectors';

@Component({
  selector: 'interview-my-questionnaires-list',
  templateUrl: './my-questionnaires-list.component.html',
  styleUrls: ['./my-questionnaires-list.component.css']
})
export class MyQuestionnairesListComponent {
  questionnaires$: Observable<Questionnaire[]>;

  constructor(
    private store: Store<InterviewState>
  ) {
    this.questionnaires$ = store.pipe(select(selectQuestionnaires));
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
