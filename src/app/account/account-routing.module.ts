import { NgModule }     from '@angular/core';
import { RouterModule, ParamMap, Route, ActivatedRoute } from '@angular/router';

import { AccountComponent }           from './account.component';
import { AccountDashboardComponent }  from './account-dashboard.component';
import { StorybookComponent }    from './storybook.component';
import { SettingComponent }    from './account-setting.component';
import { ChecklistCenterComponent }    from './checklist-center.component';
import { shareConfirmdialog } from './shareDialog.component';

import { PathLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { APP_BASE_HREF } from '@angular/common';


import { AuthGuard }                from '../auth-guard.service';

// @NgModule({
//   imports: [
//     RouterModule.forChild([
//       {
//         path: '',
//         component: AccountComponent,
//         canActivate: [AuthGuard],
//         children: [
        
//               { path: 'story', component: StorybookComponent },
//               { path: 'checklist', component: ChecklistCenterComponent },
//               { path: 'settings', component: SettingComponent },
//               { path: '', component: SettingComponent }

//             ]
//           }
        
//       // {
//       //   path: 'share/:uid/:id',
//       //   component: shareConfirmatialog,

//       // }
//     ])
//   ],
//   exports: [
//     RouterModule
//   ]
// })

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        // canActivate: [AuthGuard],
        children: [
          {
            path: '',
            children: [
              { path: '',  redirectTo:'/1/account/settings', pathMatch: 'full'},
              { path: 'story', component: StorybookComponent },
              { path: 'checklist', component: ChecklistCenterComponent },
              { path: 'settings', component: SettingComponent }
              

            ]
          }
        ]
      },
      // {
      //   path: 'share/:uid/:id',
      //   component: shareConfirmatialog,

      // }
    ],
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' },
    ],
})
export class AccountRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/