import { Component, ViewChild } from '@angular/core';
import { MatPaginatorIntl, MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VisitTask } from 'src/app/model/shop';
import { MyCustomPaginatorIntl } from 'src/app/service/custom/custom-pagination';
import { VisitHttpService } from 'src/app/service/http/visit-http.service';

@Component({
  selector: 'app-task-list-ui',
  templateUrl: './task-list-ui.component.html',
  styleUrls: ['./task-list-ui.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}]
})
export class TaskListUiComponent {
  displayedColumns: string[] = ['shopName', 'shopAddress', 'description', 'deadline', 'status'];
  dataSource: MatTableDataSource<VisitTask> | any;
  result: VisitTask[] | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private httpClient: VisitHttpService) {
    this.httpClient.getUserTasks().subscribe(res => {
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
