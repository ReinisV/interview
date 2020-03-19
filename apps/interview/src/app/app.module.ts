import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { QuestionsFeatureModule } from '@interview/questions/feature';
import { QuestionnairesFeatureModule } from '@interview/questionnaires/feature';
import { RouterModule } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './appRoutes.config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    QuestionsFeatureModule,
    QuestionnairesFeatureModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
