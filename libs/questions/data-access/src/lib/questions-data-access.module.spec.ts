import { async, TestBed } from '@angular/core/testing';
import { QuestionsDataAccessModule } from './questions-data-access.module';

describe('QuestionsDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionsDataAccessModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionsDataAccessModule).toBeDefined();
  });
});
