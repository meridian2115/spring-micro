import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListUiComponent } from './user-list-ui.component';

describe('UserListUiComponent', () => {
  let component: UserListUiComponent;
  let fixture: ComponentFixture<UserListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
