import { async, TestBed } from '@angular/core/testing';
import { QuestionnairesUtilModule } from './questionnaires-util.module';

describe('QuestionnairesUtilModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionnairesUtilModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionnairesUtilModule).toBeDefined();
  });
});
