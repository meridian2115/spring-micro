import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { MenuUiComponent } from "./ui/menu-ui/menu-ui.component";
import { MenuBlockComponent } from "./blocks/menu-block/menu-block.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    MenuUiComponent,
    MenuBlockComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports:[
    MenuBlockComponent
  ]
})
export class MenuBlockModule { }
