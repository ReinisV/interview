import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InterviewQuestionEditFormComponent } from './question-edit-form.component';

import { StoreModule } from '@ngrx/store';
import { questionsReducer } from './interview.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    InterviewQuestionEditFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ questions: questionsReducer }),
    // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
