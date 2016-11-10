import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { AccountComponent }           from './account.component';
import { AccountDashboardComponent }  from './account-dashboard.component';
import { StorybookComponent }    from './storybook.component';
import { ChecklistCenterComponent }    from './checklist/checklist-center.component';

import { AuthGuard }                from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'story', component: StorybookComponent },
              { path: 'checklist', component: ChecklistCenterComponent },
              { path: '', component: AccountDashboardComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AccountRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/