import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListBlockComponent } from './blocks/shop-list-block/shop-list-block.component';
import { ShopListUiComponent } from './ui/shop-list-ui/shop-list-ui.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShopListBlockComponent,
    ShopListUiComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule
  ],
  exports: [
    ShopListBlockComponent
  ]
})
export class ShopListBlockModule { }
