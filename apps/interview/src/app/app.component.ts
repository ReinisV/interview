import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'interview-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ]
})
export class AppComponent {
  constructor(
    public route: ActivatedRoute
  ) {
  }

  links = [
    { title: 'My questions list', fragment: '/my-questions' },
    { title: 'My questionnaires list', fragment: '/my-questionnaires' },
  ];
}
