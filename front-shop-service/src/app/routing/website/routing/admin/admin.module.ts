import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuBlockModule } from "../../../../view/menu/menu-block/menu-block.module";
import { UserListModule } from 'src/app/view/admin/users-list-block/user-list.module';

const routes: Routes = [
  {
    path: 'users',
    component: InfoPageComponent
  }
]

@NgModule({
    declarations: [
        InfoPageComponent
    ],
    imports: [
        CommonModule,
        UserListModule,
        RouterModule.forChild(routes),
        MenuBlockModule
    ]
})
export class AdminModule { }
