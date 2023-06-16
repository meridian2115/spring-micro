import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { Subject } from "rxjs";

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
