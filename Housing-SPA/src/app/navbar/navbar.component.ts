import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  member: any = {};
  showNavbar = false;
  loginbar = 'nav-login-desktop';
  loggedinUserName: string;

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    let user = this.authService.login(this.member);
    if (user){
      this.alertify.success('Successfully logged in');
      form.reset();
    } else {
      this.alertify.error('User ID or password is wrong');
    }
  }

  onLogout() {
    this.authService.logout();
    this.alertify.success('Logged out Successful')
  }

  loggedin() {
    const token = localStorage.getItem('token');
    this.loggedinUserName = token;
    return token;
  }

  onToggleNavbar() {
    this.showNavbar = !this.showNavbar;
    if (this.showNavbar) {
      this.loginbar = 'nav-login-mobile';
    } else {
      this.loginbar = 'nav-login-desktop';
    }
  }
}
