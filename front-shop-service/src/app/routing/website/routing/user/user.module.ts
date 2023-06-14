import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoPageComponent } from "./pages/info-page/info-page.component";
import { ChangePasswordPageComponent } from "./pages/change-password-page/change-password-page.component";
import { InfoBlockModule } from "src/app/view/user/info-block/info-block.module";

const routes: Routes = [
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: 'change-password',
    component: ChangePasswordPageComponent
  }
]

@NgModule({
  declarations: [
    InfoPageComponent,
    ChangePasswordPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InfoBlockModule
  ],
  providers: []
})

export class UserModule {}
