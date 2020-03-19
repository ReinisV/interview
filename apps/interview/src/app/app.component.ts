import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'interview-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public route: ActivatedRoute
  ) {
  }

  navLinks = [
    { label: 'My questions list', path: '/my-questions', },
    { label: 'My questionnaires list', path: '/my-questionnaires', },
  ];
}
