import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, catchError, Observable, throwError } from "rxjs";
import { FullUserInfo } from "src/app/model/fullUserInfo";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  constructor(
    private httpClient: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUsers(status: string[] | null) : Observable<FullUserInfo[]> {
    let queryParams = new HttpParams();
    if (status !== null) {
      status.forEach(element => queryParams.append('status', element));
    }
    return this.httpClient.get<FullUserInfo[]>(BACKEND_BASE_DOMAIN + '/admin/info', {params:queryParams})
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
      return console.log(errorMessage);
    });
  }
}
