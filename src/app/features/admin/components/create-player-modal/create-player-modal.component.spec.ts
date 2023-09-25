import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlayerModalComponent } from './create-player-modal.component';

describe('CreatePlayerModalComponent', () => {
  let component: CreatePlayerModalComponent;
  let fixture: ComponentFixture<CreatePlayerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePlayerModalComponent]
    });
    fixture = TestBed.createComponent(CreatePlayerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
