import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { retry, catchError, Observable, throwError } from "rxjs";
import { FullUserInfo } from "src/app/model/fullUserInfo";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  url: string = BACKEND_BASE_DOMAIN + '/admin';

  constructor(
    private httpClient: HttpClient
  ) {}

  getUsers(status: string[] | null) : Observable<FullUserInfo[]> {
    let queryParams = new HttpParams();
    if (status !== null) {
      status.forEach(element => queryParams.append('status', element));
    }
    return this.httpClient.get<FullUserInfo[]>(this.url + '/info', {params:queryParams})
    .pipe(retry(1), catchError(this.handleError));
  }

  getUserInfo(username: string) : Observable<FullUserInfo>{
    return this.httpClient.get<FullUserInfo>(this.url +  + '/info/${username}')
    .pipe(retry(1), catchError(this.handleError));
  }

  updateUserStatus(username: string, status: string){
    let queryParams = new HttpParams();
    queryParams.append('status', status);
    return this.httpClient.put(this.url +  + '/status/${username}', {params:queryParams})
    .pipe(retry(1), catchError(this.handleError));
  }

  updateUserRoles(username: string, roles: string[]){
    let queryParams = new HttpParams();
    if (roles !== null) {
      roles.forEach(element => queryParams.append('roles', element));
    }
    return this.httpClient.put(this.url +  + '/roles/${username}', {params:queryParams})
    .pipe(retry(1), catchError(this.handleError));
  }

  changeUserPassword(username: string, password: string){
    let queryParams = new HttpParams();
    queryParams.append('password', password);
    return this.httpClient.put(this.url +  + '/password/${username}', {params:queryParams})
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
