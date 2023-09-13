import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideBarComponent } from './inside-bar.component';

describe('InsideBarComponent', () => {
  let component: InsideBarComponent;
  let fixture: ComponentFixture<InsideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsideBarComponent]
    });
    fixture = TestBed.createComponent(InsideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
