import { async, TestBed } from '@angular/core/testing';
import { QuestionsFeatureModule } from './questions-feature.module';

describe('QuestionsFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionsFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionsFeatureModule).toBeDefined();
  });
});
