import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { UserInfo } from "src/app/view/user/info-block/blocks/info-block/info-block.component";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private httpClient: HttpClient
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getUserInfo() {
    return this.httpClient.get<UserInfo>(BACKEND_BASE_DOMAIN + '/user/info', this.httpOptions)
    .pipe(retry(1), catchError(this.handleError));
  }

  updateUserInfo(body: {username: string, firstName: string, lastName: string, email: string}) : Observable<boolean> {
    return this.httpClient.put<boolean>(BACKEND_BASE_DOMAIN + '/user/info/update', body, this.httpOptions)
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
