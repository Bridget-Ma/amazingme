import { Observable } from 'rxjs/Rx';
import { Confirmdialog } from './dialog.component';
import { shareConfirmdialog } from './shareDialog.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';

@Injectable()
export class DialogsService {

    constructor(
        private dialog: MatDialog,
        private shareDialog: MatDialog,
        private milestoneService: MilestoneService,  
        ) { }

    public selectedMilestone: Milestone;

    public confirm(milestone: Milestone, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MatDialogRef<Confirmdialog>;
        let config = new MatDialogConfig();
        config.viewContainerRef = viewContainerRef;
        // config.width = "70%";
        


        dialogRef = this.dialog.open(Confirmdialog, config);

        dialogRef.componentInstance.milestone = milestone;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }


     public shareConfirm(milestone: Milestone,parentInfo,childInfo, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MatDialogRef<shareConfirmdialog>;
        let config = new MatDialogConfig();
        config.viewContainerRef = viewContainerRef;
        // config.width = "70%";
        


        dialogRef = this.shareDialog.open(shareConfirmdialog, config);
        dialogRef.componentInstance.parentInfo = parentInfo;
        dialogRef.componentInstance.childInfo = childInfo;

        dialogRef.componentInstance.milestone = milestone;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
