import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionsAndSkillsComponent } from './positions-and-skills.component';

describe('PositionsAndSkillsComponent', () => {
  let component: PositionsAndSkillsComponent;
  let fixture: ComponentFixture<PositionsAndSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PositionsAndSkillsComponent]
    });
    fixture = TestBed.createComponent(PositionsAndSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
