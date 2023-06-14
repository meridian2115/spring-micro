import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { login } from 'src/app/store/auth-store/store/auth.actions';
import * as auth from "src/app/store/auth-store/store/auth.selectors";

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(auth.getLoading));
  loaded$: Observable<boolean> = this.store$.pipe(select(auth.getLoaded));
  serverError$: Observable<string> = this.store$.pipe(select(auth.getServerError));

  serverError = '';

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {username: string, password: string}) {
    this.store$.dispatch(login(loginPayload));
  }
}
