import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { MyQuestionsListComponent } from './my-questions-list/my-questions-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QuestionComponent, MyQuestionsListComponent],
  exports: [QuestionComponent, MyQuestionsListComponent]
})
export class UiModule {}
