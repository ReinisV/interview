import { async, TestBed } from '@angular/core/testing';
import { QuestionnairesUiModule } from './questionnaires-ui.module';

describe('QuestionnairesUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionnairesUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionnairesUiModule).toBeDefined();
  });
});
