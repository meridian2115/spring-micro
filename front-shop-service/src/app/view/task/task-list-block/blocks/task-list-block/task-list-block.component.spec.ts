import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListBlockComponent } from './task-list-block.component';

describe('TaskListBlockComponent', () => {
  let component: TaskListBlockComponent;
  let fixture: ComponentFixture<TaskListBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskListBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
