import { async, TestBed } from '@angular/core/testing';
import { QuestionnairesFeatureModule } from './questionnaires-feature.module';

describe('QuestionnairesFeatureModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [QuestionnairesFeatureModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(QuestionnairesFeatureModule).toBeDefined();
  });
});
