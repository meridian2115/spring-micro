import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, catchError, throwError } from "rxjs";
import { VisitTask } from "src/app/model/shop";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class ShopManagerHttpService {

  url: string = BACKEND_BASE_DOMAIN + '/shop/visit';

  constructor(
    private httpClient: HttpClient
  ) {
    }

    addVisitTask(task: VisitTask) {
    return this.httpClient.post(this.url +'/add', task)
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
