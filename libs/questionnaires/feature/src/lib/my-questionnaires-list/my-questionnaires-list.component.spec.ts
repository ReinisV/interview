import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuestionnairesListComponent } from './my-questionnaires-list.component';

describe('MyQuestionnairesListComponent', () => {
  let component: MyQuestionnairesListComponent;
  let fixture: ComponentFixture<MyQuestionnairesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuestionnairesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuestionnairesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
