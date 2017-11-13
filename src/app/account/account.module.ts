import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
// import { MaterialModule } from '@angular/material';
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
// import { MaterialModule } from '@angular/material';
import { Confirmdialog} from './dialog.component';
import { shareConfirmdialog} from './shareDialog.component';
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
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule,MatNativeDateModule,MatDatepicker} from '@angular/material';

import { MatDialogModule, MatCheckboxModule,MatSelectModule, MatInputModule,MatButtonToggleModule} from '@angular/material';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,  MatProgressSpinnerModule,
    MatTableModule, MatExpansionModule,  MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule,
        MatSliderModule,MatGridListModule
} from '@angular/material';



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
    ShareModule,
    // MaterialModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,  MatProgressSpinnerModule,
    MatTableModule, MatExpansionModule,  MatTooltipModule, MatChipsModule, MatListModule, MatSidenavModule, MatTabsModule, MatProgressBarModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatGridListModule




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
    Confirmdialog,
    shareConfirmdialog,
    AchDialog,
    TestDirective
  ],
  entryComponents: [
    //MilestoneDetailComponent,
    Confirmdialog,
    shareConfirmdialog,
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