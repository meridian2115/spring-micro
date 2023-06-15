import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-ui',
  templateUrl: './menu-ui.component.html',
  styleUrls: ['./menu-ui.component.scss']
})
export class MenuUiComponent {

  constructor(private router: Router){}

  logout(){
    localStorage.clear();
    this.router.navigate(['home']);
  }
}
