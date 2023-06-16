import { NgModule } from "@angular/core";
import { InfoFormUiComponent } from "./ui/info-form-ui/info-form-ui.component";
import { InfoBlockComponent } from "./blocks/info-block/info-block.component";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@NgModule({
  declarations: [
    InfoFormUiComponent,
    InfoBlockComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports:[
    InfoBlockComponent
  ],
  providers: [
  ]
})
export class InfoBlockModule { }
