import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/store/user-info-store/service/user-info.service';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {

  constructor(private service: UserInfoService){
  }

  ngOnInit(): void {
  }

  onSave(userInfo: {username: string, firstName: string, lastName: string, email: string}) {
    this.service.updateUserInfo(userInfo).subscribe();
  }
}

export class UserInfo{
  constructor(
    private username: string,
    private firstName: string,
    private lastName: string,
    private email: string
    ){}
}
