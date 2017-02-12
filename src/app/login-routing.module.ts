import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AuthGuard }      from './auth-guard.service';
import { MaterialModule } from '@angular/material';
import { AuthService }    from './auth.service';
import { LoginComponent } from './login.component';
import { AngularFireModule,AuthProviders, AuthMethods } from 'angularfire2';





@NgModule({
  imports: [
    // MaterialModule,
    
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/