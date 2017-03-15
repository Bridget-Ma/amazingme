import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './dialog.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable, ViewContainerRef } from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';

@Injectable()
export class DialogsService {

    constructor(
        private dialog: MdDialog,
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
}
