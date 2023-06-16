import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopInfoBlockComponent } from './blocks/shop-info-block/shop-info-block.component';
import { ShopInfoUiComponent } from './ui/shop-info-ui/shop-info-ui.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    ShopInfoBlockComponent,
    ShopInfoUiComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDividerModule
  ],
  exports: [
    ShopInfoBlockComponent
  ]
})
export class ShopInfoBlockModule { }
