import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  authorized: boolean = true;
  viewMenu: boolean = false;

  constructor(){
  }

  ngOnInit(): void {
    this.authorized = localStorage.getItem('auth_token') === null ? true : false;
    this.viewMenu = !this.authorized;
  }

}
