
import {Component} from '@angular/core';



import { Observable } from 'rxjs/Rx';
import { AchDialog } from './achDialog.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';

import { AchReport } from './report';
import { Report } from './report';
// import { Milestone } from './milestone';
// import { MilestoneService } from './milestones.service';

@Injectable()
export class achDialogsService {

    constructor(
        public dialog: MatDialog,
        //private milestoneService: MilestoneService, 
    
        ) { }

    public tempReport: Report;

    public confirm(tempReport:Report, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MatDialogRef<AchDialog>;
        // let position = {
        //     top: "100px",
        //     bottom: "100px",
        //     left: "100px",
        //     right: "100px",

        // }
        let config = new MatDialogConfig();
        config.viewContainerRef = viewContainerRef;
        config.width = "50%";
        // config.height = "70%";
        // config.position = position;
        config.disableClose = false;

      
        dialogRef = this.dialog.open(AchDialog, config);
        dialogRef.componentInstance.tempReport = tempReport;

        //dialogRef.componentInstance.milestone = milestone;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
