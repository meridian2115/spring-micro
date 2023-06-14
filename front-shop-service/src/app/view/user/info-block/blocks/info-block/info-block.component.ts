import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss']
})
export class InfoBlockComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
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
