import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListUiComponent } from './task-list-ui.component';

describe('TaskListUiComponent', () => {
  let component: TaskListUiComponent;
  let fixture: ComponentFixture<TaskListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
