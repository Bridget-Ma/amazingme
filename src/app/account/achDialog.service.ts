import { Observable } from 'rxjs/Rx';
import { AchDialog } from './achDialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

import { AchReport } from './report';
import { Report } from './report';
// import { Milestone } from './milestone';
// import { MilestoneService } from './milestones.service';

@Injectable()
export class achDialogsService {

    constructor(
        private dialog: MdDialog,
        //private milestoneService: MilestoneService, 
    
        ) { }

    public tempReport: Report;

    public confirm(tempReport:Report, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<AchDialog>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;

        dialogRef = this.dialog.open(AchDialog, config);
        dialogRef.componentInstance.tempReport = tempReport;

        //dialogRef.componentInstance.milestone = milestone;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
