import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { UserInfoService } from "../service/user-info.service";

@Injectable()
export class UserInfoEffects {

  constructor(
    private actions$: Actions,
    private userInfoService: UserInfoService
  ) { }
}

