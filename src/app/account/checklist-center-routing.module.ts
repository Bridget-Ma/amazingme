import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


import { ChecklistCenterComponent }     from './checklist-center.component';
// import { ChecklistComponent }       from './checklist.component';
//import { ChecklistCenterHomeComponent } from './checklist-center-home.component';
import { MilestoneDetailComponent }     from './milestone-detail.component';


import { CanDeactivateGuard }    from './can-deactivate-guard.service';

import { MilestoneDetailResolve }   from './milestone-detail-resolve.service';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ChecklistCenterComponent,
        // children: [
        //   {
        //     path: '',
        //     component: ChecklistCenterHomeComponent,
        //     children: [
        //       {
        //         path: ':id',
        //         component: MilestoneDetailComponent,
        //         canDeactivate: [CanDeactivateGuard],
        //         resolve: {
        //           milestone: MilestoneDetailResolve
        //         }
        //       },
        //       {
        //         path: '',
        //         component: ChecklistCenterHomeComponent
        //       }
        //     ]
        //   }
        // ]
      }
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MilestoneDetailResolve
  ]
})
export class ChecklistCenterRoutingModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/