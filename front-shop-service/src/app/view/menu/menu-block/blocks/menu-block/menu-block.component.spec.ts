import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBlockComponent } from './menu-block.component';

describe('MenuBlockComponent', () => {
  let component: MenuBlockComponent;
  let fixture: ComponentFixture<MenuBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
