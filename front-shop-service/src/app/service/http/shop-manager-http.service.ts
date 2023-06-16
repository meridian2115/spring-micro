import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry, catchError, throwError } from "rxjs";
import { Shop, ShopManager } from "src/app/model/shop";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class ShopManagerHttpService {

  url: string = BACKEND_BASE_DOMAIN + '/shop/manager';

  constructor(
    private httpClient: HttpClient
  ) {
    }

  addManagerToShop(shopManager: ShopManager) {
    return this.httpClient.post(this.url +'/add', shopManager)
    .pipe(retry(1), catchError(this.handleError));
  }

  getManagersInShop(shop: Shop) : Observable<string[]>{
    let queryParams = new HttpParams().set('shopName', shop.getName()).set('shopAddress', shop.getAddress());
    return this.httpClient.get<string[]>(this.url +'/view', {params: queryParams})
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
