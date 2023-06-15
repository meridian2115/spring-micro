import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { CommonModule } from "@angular/common";
import { LoginBlockModule } from "../../../../view/auth/login-block/login-block.module";
import { MenuBlockModule } from "src/app/view/menu/menu-block/menu-block.module";

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }
]

@NgModule({
    declarations: [
        HomePageComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        MenuBlockModule,
        RouterModule.forChild(routes),
        LoginBlockModule
    ]
})

export class HomeModule {}
