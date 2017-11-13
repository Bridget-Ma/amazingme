import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateGuard }       from './can-deactivate-guard.service';
import { AuthGuard }                from './auth-guard.service';
import { PreloadSelectedModules }   from './selective-preload-strategy';
import { LoginComponent } from './login.component';
// import { AccountComponent }           from './account/account.component';

import { AuthService }    from './auth.service';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent,pathMatch: 'full' },

   {
        path: '1/account',
        // component: AccountComponent, 
        // canActivate: [AuthGuard],
        loadChildren: 'app/account/account.module#AccountModule',
        // canLoad: [AuthGuard]
      },

      {
        path: '',
        redirectTo: '/homepage',
        pathMatch: 'full'
      },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes // { preloadingStrategy: PreloadSelectedModules }
     
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    PreloadSelectedModules,
    AuthGuard,
    AuthService
  ]
})

export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/