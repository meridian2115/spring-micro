import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, retry, throwError } from "rxjs";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class AuthHttpService {

  url: string = BACKEND_BASE_DOMAIN + '/auth';

  constructor(
    private httpClient: HttpClient
  ) {
    }

  login(body: {username: string, password: string}) {
    return this.httpClient.post<{token: string}>(this.url +'/login', body)
    .pipe(retry(1), catchError(this.handleError));
  }

  register(body: {username: string, password: string}) {
    return this.httpClient.post(this.url + '/register', body)
    .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      if (error.status === 403) {
        errorMessage = `Ошибка: неверный логин или пароль`;
      } else {
        errorMessage = `Ошибка: ${error.status}\nСообщение: ${error.message}`;
      }
    }
    return throwError(() => {
      return errorMessage;
    });
  }

}
