import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfo } from "src/app/view/user/info-block/blocks/info-block/info-block.component";
import { BACKEND_BASE_DOMAIN } from "src/env";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor(
    private httpClient: HttpClient
  ) {}

  getUserInfo() {
    return this.httpClient.get<UserInfo>(BACKEND_BASE_DOMAIN + '/user/info');
  }
}
