import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
  ) {
    }

  login(body: {username: string, password: string}) {
    return this.httpClient.post<{token: string}>(
      BACKEND_BASE_DOMAIN+'/auth/login',
      body
    ).pipe(
      map(res=>({
        ...res,
        ...this.jwtHelperService.decodeToken(res.token)
      }))
    );
  }

  register(body: {username: string, password: string}) {
    return this.httpClient.post<{token: string}>(
      BACKEND_BASE_DOMAIN+'/auth/register',
      body
    ).pipe(
      map(res=>({
        ...res
      }))
    );
  }
}
