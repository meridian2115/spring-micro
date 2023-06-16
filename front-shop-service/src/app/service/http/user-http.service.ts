import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { FullUserInfo } from "src/app/model/fullUserInfo";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string = BACKEND_BASE_DOMAIN + '/user';

  constructor(
    private httpClient: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserInfo()  : Observable<FullUserInfo> {
    return this.httpClient.get<FullUserInfo>(this.url + '/info', this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  updateUserInfo(body: {username: string, firstName: string, lastName: string, email: string}) : Observable<boolean> {
    return this.httpClient.put<boolean>(this.url + '/info/update', body, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  changeUserPassword(password: {newPassword: string})  : Observable<boolean> {
    let queryParams = new HttpParams().set('password', password.newPassword);
    console.log(queryParams.get('password'));
    return this.httpClient.put<boolean>(this.url + '/change-password', {}, {params: queryParams})
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
    return throwError(() => {
      return errorMessage;
    });
  }
}
