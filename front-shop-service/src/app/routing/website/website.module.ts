import { NgModule } from "@angular/core";
import { AuthModule } from "./routing/auth/auth.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=>import('./routing/auth/auth.module')
    .then(module=>module.AuthModule)
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
    RouterModule.forChild(routes)
  ],
  providers: []
})

export class WebsiteModule {

}
