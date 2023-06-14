import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormUiComponent } from './ui/register-form-ui/register-form-ui.component';
import { RegisterBlockComponent } from './block/register-block/register-block.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegisterFormUiComponent,
    RegisterBlockComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    RegisterBlockComponent
  ]
})
export class RegisterBlockModule { }
