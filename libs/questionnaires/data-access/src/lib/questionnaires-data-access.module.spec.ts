import { async, TestBed } from '@angular/core/testing';
import { QuestionnairesDataAccessModule } from './questionnaires-data-access.module';

describe('QuestionnairesDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionnairesDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionnairesDataAccessModule).toBeDefined();
  });
});
