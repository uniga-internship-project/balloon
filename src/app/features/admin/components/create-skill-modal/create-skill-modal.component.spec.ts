import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSkillModalComponent } from './create-skill-modal.component';

describe('CreateSkillModalComponent', () => {
  let component: CreateSkillModalComponent;
  let fixture: ComponentFixture<CreateSkillModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateSkillModalComponent]
    });
    fixture = TestBed.createComponent(CreateSkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
