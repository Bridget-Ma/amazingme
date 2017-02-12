import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

import { MilestoneService }        from './milestones.service';

import { ChecklistCenterComponent }     from './checklist-center.component';
// import { ChecklistComponent }       from './checklist.component';
// import { ChecklistCenterHomeComponent } from './checklist-center-home.component';
// import { MilestoneDetailComponent }     from './checklist-center.component';

import { ConfirmDialog} from './dialog.component';
import { AchDialog} from './achDialog.component';
import { DialogsService } from './dialog.service';
import { achDialogsService } from './achDialog.service';
import { ChecklistCenterRoutingModule } from './checklist-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChecklistCenterRoutingModule
  ],
  declarations: [
    ChecklistCenterComponent,
    // ChecklistComponent,
    // ChecklistCenterHomeComponent,
    // MilestoneDetailComponent
  
  ],
  providers: [
    MilestoneService,
    DialogsService,
    achDialogsService
  ],

})
export class ChecklistCenterModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/