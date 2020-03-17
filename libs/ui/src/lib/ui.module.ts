import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [QuestionComponent],
  exports: [QuestionComponent]
})
export class UiModule {}
