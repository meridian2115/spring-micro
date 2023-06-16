import { Component, AfterViewInit, ViewChild, Injectable, OnInit } from "@angular/core";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Subject } from "rxjs";
import { FullUserInfo } from "src/app/model/fullUserInfo";
import { AdminHttpService } from "src/app/service/http/admin-http.service";

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = $localize`Первая страница`;
  itemsPerPageLabel = $localize`Записей на одной странице:`;
  lastPageLabel = $localize`Последняя страница`;

  nextPageLabel = 'Следующий';
  previousPageLabel = 'Предыдущий';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Страница 1 из 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Страница ${page + 1} из ${amountPages}`;
  }
}

@Component({
  selector: 'app-user-list-ui',
  templateUrl: './user-list-ui.component.html',
  styleUrls: ['./user-list-ui.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}]
})
export class UserListUiComponent implements AfterViewInit {
  displayedColumns: string[] = ['username', 'firstName', 'lastName', 'email'];
  dataSource: MatTableDataSource<FullUserInfo> | any;
  result: FullUserInfo[] | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private httpClient: AdminHttpService) {
    this.httpClient.getUsers(null).subscribe(res => {
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
