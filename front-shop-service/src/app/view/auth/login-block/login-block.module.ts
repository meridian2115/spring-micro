import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormUiComponent } from './ui/login-form-ui/login-form-ui.component';
import { LoginBlockComponent } from './blocks/login-block/login-block.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    LoginFormUiComponent,
    LoginBlockComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports:[
    LoginBlockComponent
  ],
  providers: [
  ]
})
export class LoginBlockModule { }
