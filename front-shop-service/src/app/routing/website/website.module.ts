import { NgModule } from "@angular/core";
import { AuthModule } from "./routing/auth/auth.module";
import { RouterModule, Routes } from "@angular/router";
import { UserModule } from "./routing/user/user.module";
import { AdminModule } from "./routing/admin/admin.module";
import { HomeModule } from "./routing/home/home.module";
import { ShopModule } from "./routing/shop/shop.module";
import { TaskModule } from "./routing/task/task.module";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=>import('./routing/home/home.module')
    .then(module=>module.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./routing/admin/admin.module')
    .then(module=>module.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./routing/auth/auth.module')
    .then(module=>module.AuthModule)
  },
  {
    path: 'user',
    loadChildren: ()=>import('./routing/user/user.module')
    .then(module=>module.UserModule)
  },
  {
    path: 'shop',
    loadChildren: ()=>import('./routing/shop/shop.module')
    .then(module=>module.ShopModule)
  },
  {
    path: 'task',
    loadChildren: ()=>import('./routing/task/task.module')
    .then(module=>module.TaskModule)
  },
  {
    path: 'admin',
    loadChildren: ()=>import('./routing/admin/admin.module')
    .then(module=>module.AdminModule)
  },
  {
    path: 'not-found',
    loadChildren: ()=>import('./routing/not-found/not-found.module')
    .then(module=>module.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    UserModule,
    AdminModule,
    HomeModule,
    ShopModule,
    TaskModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class WebsiteModule {

}
