import { Component } from '@angular/core';
import { UserHttpService } from 'src/app/service/http/user-http.service';

@Component({
  selector: 'app-change-password-block',
  templateUrl: './change-password-block.component.html',
  styleUrls: ['./change-password-block.component.scss']
})
export class ChangePasswordBlockComponent {
  serverError = '';

  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {
  }

  onSave(payloads: {newPassword: string}) {
    this.userHttpService.changeUserPassword(payloads).subscribe({
      next: res => {
        this.serverError = 'Пароль успешно изменен';
      },
      error: (err) => {
        this.serverError = err;
      },
    });
  }
}
