import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { questionsReducer } from './interview.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ questions: questionsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
