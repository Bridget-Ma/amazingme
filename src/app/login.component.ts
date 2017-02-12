import { Component }        from '@angular/core';
import { Router,
         NavigationExtras,ActivatedRoute, Params } from '@angular/router';
import { AuthService }      from './auth.service';
import { AngularFire, FirebaseListObservable,FirebaseObjectObservable,AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  templateUrl:'login.html',
  styleUrls: ['./app.component.css']

})

export class LoginComponent {


  constructor(
    public af: AngularFire, 
    public authService: AuthService, 
    public router: Router) {
    
    this.af.auth.subscribe(auth => console.log(auth));
    this.userList= af.database.list('/userList');
    // this.items = af.database.list('/items');
  }

   
   userList: FirebaseListObservable<any>;

   public email:string;
   public password:string;



  login() {
    // 
    this.af.auth.login({
         email: this.email,
         password: this.password,
      }).then(auth => this.addUser(auth));
      
      this.authService.login().subscribe(() => {

      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'account';
      // let redirect = 'account';
      let navigationExtras: NavigationExtras = {
            preserveQueryParams: true,
            preserveFragment: true
          };
          // Redirect the user
      this.router.navigate([redirect], navigationExtras);
    });
      

  
     
  }


/*list*/


  public addUser(auth:any) {

    this.userList.push({ userID: auth.uid, userProfile: auth.auth.email, userPhoto: auth.auth.photoURL, time: Date() });
    // var user = this.auth.uid;
    // var name, email, photoUrl, uid;

    // if (user != null) {
    //   name = user.displayName;
    //   email = user.email;
    //   photoUrl = user.photoURL;
    //   uid = user.uid;
    //   // this.userID = uid;
      
    // }

  }
   

  logout() {
     this.af.auth.logout();
  }
  
  // public userID: string;



  // addItem() {

  //   this.user.push({ userID: this.userID, time: Date() });
  // }
  // updateItem(key: string, newText: string) {
  //   this.user.update(key, { text: newText });
  // }
  // deleteItem(key: string) {    
  //   this.user.remove(key); 
  // }
  // deleteEverything() {
  //   this.user.remove();
  // }
  // message: string;

  // constructor(public authService: AuthService, public router: Router) {
  //   this.setMessage();
  // }

  // setMessage() {
  //   this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  // }

  // login() {
  //   this.message = 'Trying to log in ...';

  //   this.authService.login().subscribe(() => {
  //     this.setMessage();
  //     if (this.authService.isLoggedIn) {
  //       // Get the redirect URL from our auth service
  //       // If no redirect has been set, use the default
  //       // let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'account';

  //       // Set our navigation extras object
  //       // that passes on our global query params and fragment
  //       let navigationExtras: NavigationExtras = {
  //         preserveQueryParams: true,
  //         preserveFragment: true
  //       };

  //       // Redirect the user
  //       this.router.navigate([redirect], navigationExtras);
  //     }
  //   });
  // }

  // logout() {
  //   this.authService.logout();
  //   this.setMessage();
  // }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/