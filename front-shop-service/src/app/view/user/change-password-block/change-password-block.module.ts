import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordUiComponent } from './ui/change-password-ui/change-password-ui.component';
import { ChangePasswordBlockComponent } from './blocks/change-password-block/change-password-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ChangePasswordBlockComponent,
    ChangePasswordUiComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ChangePasswordBlockComponent
  ]
})
export class ChangePasswordBlockModule { }
