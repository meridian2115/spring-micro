import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoPageComponent } from "./pages/info-page/info-page.component";
import { ChangePasswordPageComponent } from "./pages/change-password-page/change-password-page.component";
import { InfoBlockModule } from "src/app/view/user/info-block/info-block.module";
import { MenuBlockModule } from "../../../../view/menu/menu-block/menu-block.module";
import { ChangePasswordBlockModule } from "src/app/view/user/change-password-block/change-password-block.module";

const routes: Routes = [
  {
    path: 'info',
    component: InfoPageComponent
  }
]

@NgModule({
    declarations: [
        InfoPageComponent,
        ChangePasswordPageComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        InfoBlockModule,
        MenuBlockModule,
        ChangePasswordBlockModule
    ]
})

export class UserModule {}
