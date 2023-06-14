import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { register } from 'src/app/store/register-store/store/register.action';
import * as reg from "src/app/store/register-store/store/register.selector";


@Component({
  selector: 'app-register-block',
  templateUrl: './register-block.component.html',
  styleUrls: ['./register-block.component.scss']
})
export class RegisterBlockComponent implements OnInit {

  registering$: Observable<boolean> = this.store$.pipe(select(reg.getRegistering));
  registered$: Observable<boolean> = this.store$.pipe(select(reg.getRegistered));
  serverError$: Observable<string> = this.store$.pipe(select(reg.getServerError));

  serverError = '';

  constructor(private store$: Store, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister(registerPayload: {username: string, password: string}) {
    this.store$.dispatch(register(registerPayload));
    /*if (this.store$.pipe(select(reg.getServerError)) == '') {
      this.router.navigate(['/login']);
    }*/
  }

}

