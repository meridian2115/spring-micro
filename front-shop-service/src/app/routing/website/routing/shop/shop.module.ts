import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewPageComponent } from './pages/view-page/view-page.component';
import { MenuBlockModule } from "../../../../view/menu/menu-block/menu-block.module";
import { ShopListBlockModule } from "../../../../view/shop/shop-list-block/shop-list-block.module";

const routes: Routes = [
  {
    path: 'view',
    component: ViewPageComponent
  }
]

@NgModule({
    declarations: [
        ViewPageComponent
    ],
    providers: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MenuBlockModule,
        ShopListBlockModule
    ]
})

export class ShopModule {}
