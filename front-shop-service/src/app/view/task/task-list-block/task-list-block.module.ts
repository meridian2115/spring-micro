import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListBlockComponent } from './blocks/task-list-block/task-list-block.component';
import { TaskListUiComponent } from './ui/task-list-ui/task-list-ui.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    TaskListBlockComponent,
    TaskListUiComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports: [
    TaskListBlockComponent
  ]
})
export class TaskListBlockModule { }
