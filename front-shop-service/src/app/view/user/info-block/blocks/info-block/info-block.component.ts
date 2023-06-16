import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/service/http/user-http.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent implements OnInit {

  serverError = '';

  constructor(private userHttpService: UserHttpService) {}

  ngOnInit(): void {
  }

  onSave(userInfo: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
  }) {
    this.userHttpService.updateUserInfo(userInfo).subscribe({
      error: (err) => {
        this.serverError = err;
      },
    });
  }
}
