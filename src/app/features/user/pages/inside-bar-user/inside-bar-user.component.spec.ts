import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideBarUserComponent } from './inside-bar-user.component';

describe('InsideBarUserComponent', () => {
  let component: InsideBarUserComponent;
  let fixture: ComponentFixture<InsideBarUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideBarUserComponent]
    });
    fixture = TestBed.createComponent(InsideBarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
