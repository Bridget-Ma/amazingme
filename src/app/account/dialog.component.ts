import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';

@Component({
    selector: 'confirm-dialog',
    template: `
        <p>{{ milestone.id }}</p>
        <p>{{ milestone.name }}</p>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" md-button 
            (click)="dialogRef.close()">Cancel</button>
    `,
})
export class ConfirmDialog {

    // public title: string;
    // public message: string;
    public milestone: Milestone;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

    }
}
