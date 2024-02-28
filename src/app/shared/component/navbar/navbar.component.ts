import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLogin: boolean = false;
  constructor(private _Router: Router) {}
  ngOnInit(): void {
    // this._AuthService.userToken.subscribe(() => {
    //   if (this._AuthService.userToken.getValue() == null) {
    //     this.isLogin = false;
    //   } else {
    //     this.isLogin = true;
    //   }
    // });
  }
  logout() {
    // localStorage.removeItem('userToken');
    // this._AuthService.userToken.next(null);
    // this._Router.navigate(['login']);
  }
}
