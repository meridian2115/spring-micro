import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordUiComponent } from './change-password-ui.component';

describe('ChangePasswordUiComponent', () => {
  let component: ChangePasswordUiComponent;
  let fixture: ComponentFixture<ChangePasswordUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
