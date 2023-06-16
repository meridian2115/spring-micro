import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Shop } from 'src/app/model/shop';
import { MyCustomPaginatorIntl } from 'src/app/service/custom/custom-pagination';
import { ShopHttpService } from 'src/app/service/http/shop-http.service';

@Component({
  selector: 'app-shop-list-ui',
  templateUrl: './shop-list-ui.component.html',
  styleUrls: ['./shop-list-ui.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}]
})
export class ShopListUiComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'address'];
  dataSource: MatTableDataSource<Shop> | any;
  result: Shop[] | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private httpClient: ShopHttpService) {
    this.httpClient.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
