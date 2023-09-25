import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePositionModalComponent } from './create-position-modal.component';

describe('CreatePositionModalComponent', () => {
  let component: CreatePositionModalComponent;
  let fixture: ComponentFixture<CreatePositionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePositionModalComponent]
    });
    fixture = TestBed.createComponent(CreatePositionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
