import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { Shop } from "src/app/model/shop";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class ShopHttpService {

  url: string = BACKEND_BASE_DOMAIN + '/shop';

  constructor(
    private httpClient: HttpClient
  ) {
    }

  getAll() : Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(this.url +'/all')
    .pipe(retry(1), catchError(this.handleError));
  }

  addShop(shop: Shop){
    return this.httpClient.post(this.url +'/add', shop)
    .pipe(retry(1), catchError(this.handleError));
  }

  getShopInfo(shopName: string){
    return this.httpClient.get<Shop[]>(this.url +'/${shopName}')
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
