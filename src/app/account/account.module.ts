import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef} from '@angular/material';
import { AccountComponent }           from './account.component';
import { AccountDashboardComponent }  from './account-dashboard.component';
import { StorybookComponent }    from './storybook.component';
//import { StorybookPageComponent }    from './storybook-page.component';

import { ChecklistCenterComponent }    from './checklist-center.component';
import { SettingComponent }    from './account-setting.component';
import { PageService }          from './page.service';
import { MilestoneService }          from './milestones.service';
import { AccountRoutingModule }       from './account-routing.module';
//import { StorybookRoutingModule }       from './storybook-routing.module';
//import { MilestoneDetailComponent} from './checklist-center.component';
//
import { ConfirmDialog} from './dialog.component';
import { AchDialog} from './achDialog.component';
import { DialogsService } from './dialog.service';
import { achDialogsService } from './achDialog.service';


import { RatingModule,ModalModule } from 'ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';

import { FormsModule }   from '@angular/forms';

import { TestDirective } from './test.directive';
// import { PizzaDialog} from './milestone-popup.component';
// import { PizzaComponent} from './milestone-popup.component'



@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    //StorybookRoutingModule,
    PaginationModule.forRoot(),
    RatingModule,
    ModalModule,
    FormsModule
  ],
  declarations: [
    AccountComponent,
    AccountDashboardComponent,
    SettingComponent,
    StorybookComponent,
    //StorybookPageComponent,
    ChecklistCenterComponent,
    //MilestoneDetailComponent,
    ConfirmDialog,
    AchDialog,
    TestDirective
  
 
  ],
  entryComponents: [
    //MilestoneDetailComponent,
    ConfirmDialog,
    AchDialog
  ],
  providers: [ 
  PageService, 
  MilestoneService,
  DialogsService,
  achDialogsService
  ]
})
export class AccountModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/