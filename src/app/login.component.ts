import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';
import { AuthService }      from './auth.service';

@Component({
  template: `
 


<md-toolbar>

Login to Amazing Me
<span class="app-toolbar-filler">  </span>
    <p>
      <button md-raised-button align = "right" (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button md-raised-button align = "right" (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
    <p> {{message}}</p>
  

 
  </md-toolbar>


    
    <div align = "center"> 
   <br />
   <br />
      <label>Account Name</label>
      <md-input placeholder="example@amazingme.com" align="end" [(ngModel)]="User.name" ></md-input>
      <br />
      <br />
      <label>Password</label>
      <md-input placeholder="password" align="end" [(ngModel)]="User.Password" ></md-input>

      
    </div>

  

    `,
  styleUrls: ['./app.component.css']
    

})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/account';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/