import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './dialog.component';
import { shareConfirmDialog } from './shareDialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';

@Injectable()
export class DialogsService {

    constructor(
        private dialog: MdDialog,
        private shareDialog: MdDialog,
        private milestoneService: MilestoneService,  
        ) { }

    public selectedMilestone: Milestone;

    public confirm(milestone: Milestone, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<ConfirmDialog>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;
        // config.width = "70%";
        


        dialogRef = this.dialog.open(ConfirmDialog, config);

        dialogRef.componentInstance.milestone = milestone;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }


     public shareConfirm(milestone: Milestone,parentInfo,childInfo, viewContainerRef: ViewContainerRef): Observable<boolean> {

        let dialogRef: MdDialogRef<shareConfirmDialog>;
        let config = new MdDialogConfig();
        config.viewContainerRef = viewContainerRef;
        // config.width = "70%";
        


        dialogRef = this.shareDialog.open(shareConfirmDialog, config);
        dialogRef.componentInstance.parentInfo = parentInfo;
        dialogRef.componentInstance.childInfo = childInfo;

        dialogRef.componentInstance.milestone = milestone;
        //dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
