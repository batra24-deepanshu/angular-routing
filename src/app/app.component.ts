import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-routing';
  constructor(private authService:AuthService){}

  onLoginClick(){
      this.authService.login();
  }
  onLogoutClick(){
    this.authService.logout();
  }
}
