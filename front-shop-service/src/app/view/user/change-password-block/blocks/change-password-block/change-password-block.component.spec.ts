import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordBlockComponent } from './change-password-block.component';

describe('ChangePasswordBlockComponent', () => {
  let component: ChangePasswordBlockComponent;
  let fixture: ComponentFixture<ChangePasswordBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
