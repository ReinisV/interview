import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionsListComponent } from './my-questions-list.component';

describe('MyQuestionsListComponent', () => {
  let component: MyQuestionsListComponent;
  let fixture: ComponentFixture<MyQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
