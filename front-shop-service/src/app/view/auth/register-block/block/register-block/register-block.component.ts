import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from 'src/app/service/http/auth-http.service';


@Component({
  selector: 'app-register-block',
  templateUrl: './register-block.component.html',
  styleUrls: ['./register-block.component.scss']
})
export class RegisterBlockComponent implements OnInit {

  serverError = '';

  constructor(private authService: AuthHttpService, private router: Router) {}

  ngOnInit(): void {
  }

  onRegister(registerPayload: {username: string, password: string}) {
    this.authService.register(registerPayload).subscribe(
      res => {
        this.router.navigate(['/home']);
      },
      err => {
        this.serverError = err;
      }
    )
  }

}

