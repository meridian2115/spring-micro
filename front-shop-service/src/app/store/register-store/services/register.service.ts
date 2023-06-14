import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private httpClient: HttpClient,
  ) {
    }

  register(body: {username: string, password: string}) {
    return this.httpClient.post(
      BACKEND_BASE_DOMAIN + '/auth/register',
      body
    ).pipe(
      map(res=>({
        ...res
      }))
    );
  }
}
