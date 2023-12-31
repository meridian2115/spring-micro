import { Component, AfterViewInit, ViewChild, Injectable } from "@angular/core";
import { MatPaginator, MatPaginatorIntl } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { FullUserInfo } from "src/app/model/fullUserInfo";
import { MyCustomPaginatorIntl } from "src/app/service/custom/custom-pagination";
import { AdminHttpService } from "src/app/service/http/admin-http.service";



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
