import { async, TestBed } from '@angular/core/testing';
import { QuestionsUiModule } from './questions-ui.module';

describe('QuestionsUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionsUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionsUiModule).toBeDefined();
  });
});
