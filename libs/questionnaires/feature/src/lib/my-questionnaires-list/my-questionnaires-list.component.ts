import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  Questionnaire,
  QuestionnaireState,
  actions,
  selectors,
  questionnariesFeatureKey,
} from '@interview/questionnaires/data-access';

@Component({
  selector: 'interview-my-questionnaires-list',
  templateUrl: './my-questionnaires-list.component.html',
  styleUrls: ['./my-questionnaires-list.component.css']
})
export class MyQuestionnairesListComponent {
  questionnaires$: Observable<Questionnaire[]>;

  constructor(
    private store: Store<{ [questionnariesFeatureKey]: QuestionnaireState }>
  ) {
    this.questionnaires$ = store.pipe(select(selectors.selectQuestionnaires));
  }

  addEmptyQuestionnaire(): void {
    this.store.dispatch(actions.addEmptyQuestionnaire());
  }

  saveQuestionnaire(questionnaire: Questionnaire): void {
    this.store.dispatch(actions.updateQuestionnaire({ questionnaire: questionnaire }));
  }

  deleteQuestionnaire(questionnaireId: string): void {
    this.store.dispatch(actions.deleteQuestionnaire({ questionnaireId: questionnaireId }));
  }
}
