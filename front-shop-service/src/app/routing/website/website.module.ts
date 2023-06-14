import { NgModule } from "@angular/core";
import { AuthModule } from "./routing/auth/auth.module";
import { RouterModule, Routes } from "@angular/router";
import { UserModule } from "./routing/user/user.module";
import { AdminModule } from "./routing/admin/admin.module";

const routes: Routes = [
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
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class WebsiteModule {

}
