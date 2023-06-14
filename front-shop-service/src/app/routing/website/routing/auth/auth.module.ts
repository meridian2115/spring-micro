import { NgModule } from "@angular/core";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RouterModule, Routes } from "@angular/router";
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginBlockModule } from "src/app/view/auth/login-block/login-block.module";
import { CommonModule } from "@angular/common";
import { RegisterBlockModule } from "src/app/view/auth/register-block/register-block.module";

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  }
]

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoginBlockModule,
    RegisterBlockModule
  ],
  providers: []
})

export class AuthModule {}
