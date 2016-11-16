import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';
import { AccountComponent }           from './account.component';
import { AccountDashboardComponent }  from './account-dashboard.component';
import { StorybookComponent }    from './storybook.component';
//import { StorybookPageComponent }    from './storybook-page.component';

import { ChecklistCenterComponent }    from './checklist/checklist-center.component';
import { SettingComponent }    from './account-setting.component';
import { PageService }          from './page.service';
import { AccountRoutingModule }       from './account-routing.module';
//import { StorybookRoutingModule }       from './storybook-routing.module';


import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';




@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    //StorybookRoutingModule,
    PaginationModule,
    RatingModule
  ],
  declarations: [
    AccountComponent,
    AccountDashboardComponent,
    SettingComponent,
    StorybookComponent,
   //StorybookPageComponent,
    ChecklistCenterComponent 
  ],
  providers: [ PageService ]
})
export class AccountModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/