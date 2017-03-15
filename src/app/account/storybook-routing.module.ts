import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';



import { StorybookComponent }    from './storybook.component';
// import { StorybookPageComponent }    from './storybook-page.component';
import { PageService} from './page.service'
import { MilestoneService} from './milestones.service'


import { CanDeactivateGuard }    from '../can-deactivate-guard.service';

// import { AuthGuard }                from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: StorybookComponent,
        // canActivate: [AuthGuard],
        // children:[
        // {
        //     // {
        //     //   path: ':id',
        //     //   component: StoryPageComponent,
        //     //   canDeactivate: [CanDeactivateGuard],
        //     // }
        //       path: '',
        //       component: StorybookPageComponent           
        // }]
      }
    ])
  ],
  
  exports: [
    RouterModule
  ]

})
export class StorybookRoutingModule {}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/