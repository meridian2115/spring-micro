import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from 'src/app/service/http/auth-http.service';

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss']
})
export class LoginBlockComponent implements OnInit {

  serverError = '';

  constructor(private authService: AuthHttpService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {username: string, password: string}) {
    return this.authService.login(loginPayload)
    .subscribe(res => {
      localStorage.setItem('auth_token', res.token);
      window.location.reload();
   }, error => {
    this.serverError = error;
   });
  }
}
