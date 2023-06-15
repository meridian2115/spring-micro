import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListBlockComponent } from './user-list-block.component';

describe('UserListBlockComponent', () => {
  let component: UserListBlockComponent;
  let fixture: ComponentFixture<UserListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
