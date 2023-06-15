import { NgModule } from "@angular/core";
import { UserListUiComponent } from "./ui/user-list-ui/user-list-ui.component";
import { UserListBlockComponent } from "./blocks/user-list-block/user-list-block.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";

@NgModule({
  declarations: [
    UserListUiComponent,
    UserListBlockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterLink
  ],
  exports:[
    UserListBlockComponent
  ]
})
export class UserListModule { }
