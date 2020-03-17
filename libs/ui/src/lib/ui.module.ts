import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MyQuestionsListComponent } from './my-questions-list/my-questions-list.component';
import { MyQuestionnairesListComponent } from './my-questionnaires-list/my-questionnaires-list.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QuestionComponent, MyQuestionsListComponent, MyQuestionnairesListComponent, QuestionnaireComponent],
  exports: [QuestionComponent, MyQuestionsListComponent, MyQuestionnairesListComponent, QuestionnaireComponent]
})
export class UiModule {}
