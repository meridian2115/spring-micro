import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from 'src/app/model/fullUserInfo';
import { Shop } from 'src/app/model/shop';
import { MyCustomPaginatorIntl } from 'src/app/service/custom/custom-pagination';
import { ShopManagerHttpService } from 'src/app/service/http/shop-manager-http.service';
import { UserHttpService } from 'src/app/service/http/user-http.service';

@Component({
  selector: 'app-shop-info-ui',
  templateUrl: './shop-info-ui.component.html',
  styleUrls: ['./shop-info-ui.component.scss'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}]
})
export class ShopInfoUiComponent implements OnInit {
  shopName: string = '';
  shopAddress: string = '';
  managers: string[] | any;
  dataSource: MatTableDataSource<UserInfo> | any;
  displayedColumns: string[] = ['firstName', 'lastName', 'email'];

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(
    private router: ActivatedRoute,
    private shopHttpService: ShopManagerHttpService,
    private userHttpService: UserHttpService
  ) {
    this.router.queryParams.subscribe((res) => {
      this.shopName = res['name'];
      this.shopAddress = res['address'];
    });
  }

  ngOnInit(): void {
    this.shopHttpService
      .getManagersInShop(new Shop(this.shopName, this.shopAddress))
      .subscribe((res) => {
        if (res.length === 0) {
          return;
        }
        this.managers = res;
        this.userHttpService.getManagersInfo(this.managers).subscribe((res) => {
          this.dataSource = res;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
