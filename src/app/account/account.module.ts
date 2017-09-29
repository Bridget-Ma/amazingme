import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
// import { MaterialModule } from '@angular/material';
import { MdDialog, MdDialogRef} from '@angular/material';
import { AccountComponent }           from './account.component';
import { AccountDashboardComponent }  from './account-dashboard.component';
import { StorybookComponent }    from './storybook.component';
//import { StorybookPageComponent }    from './storybook-page.component';

import { ChecklistCenterComponent }    from './checklist-center.component';
import { SettingComponent }    from './account-setting.component';
import { SnackBarComponent} from './account-setting.component';

import { PageService }          from './page.service';
import { MilestoneService }          from './milestones.service';
import { AccountRoutingModule }       from './account-routing.module';
//import { StorybookRoutingModule }       from './storybook-routing.module';
//import { MilestoneDetailComponent} from './checklist-center.component';
//
import { MaterialModule } from '@angular/material';
import { ConfirmDialog} from './dialog.component';
import { shareConfirmDialog} from './shareDialog.component';
import { AchDialog} from './achDialog.component';
import { DialogsService } from './dialog.service';
import { achDialogsService } from './achDialog.service';



import { RatingModule,ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';

import { FormsModule }   from '@angular/forms';

import { TestDirective } from './test.directive';
import {ShareModule} from 'ng2share/share.module'
// import { PizzaDialog} from './milestone-popup.component';
// import { PizzaComponent} from './milestone-popup.component'
import {ShareButtonsModule} from 'ngx-sharebuttons';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';



@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    // MaterialModule,
    //StorybookRoutingModule,
    PaginationModule.forRoot(),
    RatingModule,
    ModalModule,
    FormsModule,
    ShareButtonsModule.forRoot(),
    ShareModule,
    NgbModule,
    // AngularFireDatabase, // imports firebase/database, only needed for database features
    // AngularFireAuth, // imports firebase/auth, only needed for auth features

    ShareModule,
    MaterialModule

  ],
  declarations: [
    AccountComponent,
    AccountDashboardComponent,
    SettingComponent,
    SnackBarComponent,
    StorybookComponent,
    //StorybookPageComponent,
    ChecklistCenterComponent,
    //MilestoneDetailComponent,
    ConfirmDialog,
    shareConfirmDialog,
    AchDialog,
    TestDirective
  ],
  entryComponents: [
    //MilestoneDetailComponent,
    ConfirmDialog,
    shareConfirmDialog,
    AchDialog,
    SnackBarComponent
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