import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BACKEND_BASE_DOMAIN } from 'src/env';
import { User } from '../view/auth/register-block/block/register-block/register-block.component';

@Injectable()
export class HttpService{

  url: string = BACKEND_BASE_DOMAIN;
  constructor(private http: HttpClient){ }

  register(user: User){
    const registerUrl = this.url + "/auth/register";
    return this.http.post(registerUrl, user);
  }
}
