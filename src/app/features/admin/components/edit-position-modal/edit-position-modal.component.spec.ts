import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPositionModalComponent } from './edit-position-modal.component';

describe('EditPositionModalComponent', () => {
  let component: EditPositionModalComponent;
  let fixture: ComponentFixture<EditPositionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPositionModalComponent]
    });
    fixture = TestBed.createComponent(EditPositionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
