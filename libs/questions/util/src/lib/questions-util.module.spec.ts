import { async, TestBed } from '@angular/core/testing';
import { QuestionsUtilModule } from './questions-util.module';

describe('QuestionsUtilModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionsUtilModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionsUtilModule).toBeDefined();
  });
});
