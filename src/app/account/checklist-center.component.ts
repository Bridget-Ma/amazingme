import { Component,ViewContainerRef ,OnInit} from '@angular/core';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { CHECKLIST } from './checklist';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';

import {DialogsService} from './dialog.service';


@Component({
  selector: 'pizza-component',
  template:  `
    <h2>&nbsp; Milestone Checklist</h2>



 

   <md-list>

   <md-list-item *ngFor="let milestone of checklist" (click)="openDialog(milestone)">
   
  
<span ><img src={{milestone.icon}} ></span> &nbsp; &nbsp; 
    
      {{milestone.name}} 
   &nbsp; &nbsp; 

<span *ngIf="milestone.progress>0">
     <span class="label"   
       [ngClass]="{'label-warning': milestone.progress<30, 'label-info': milestone.progress>=30 && milestone.progress<70, 'label-success': milestone.progress>=70}">
         {{milestone.progress}}%
     </span>
     </span>

   
         <md-divider></md-divider>
    </md-list-item>

   
    </md-list>

    <router-outlet></router-outlet>
  `
})

 



export class ChecklistCenterComponent { 

  constructor(
    private dialogsService: DialogsService,
    private milestoneService: MilestoneService,  
    private viewContainerRef: ViewContainerRef
    ) {}
  
  public openDialog(milestone:Milestone) {
    this.dialogsService
      .confirm(milestone, this.viewContainerRef)
      .subscribe(res => this.result = res);
  }



  checklist = CHECKLIST;
  //dialogRef: MdDialogRef<MilestoneDetailComponent>;
  //lastCloseResult: string;
  public selectedMilestone: Milestone;
  public result: any;








  public setMilestone(Number:number):void {
    this.milestoneService.getMilestone(Number).then(milestone => this.onSelect(milestone));
  };

  onSelect(milestone: Milestone): void {
    this.selectedMilestone = milestone;
    this.openDialog(milestone);
   
    }

  public clickOn(milestone:Milestone):void {
    this.milestoneService.getMilestone(milestone.id).then(milestone => this.onSelect(milestone));
    
  };


  // public openDialog(milestone:Milestone) {
  //   let config = new MdDialogConfig();
  //   config.viewContainerRef = this.viewContainerRef;
  //   this.dialogRef = this.dialog.open(MilestoneDetailComponent, config);
  //   this.dialogRef.afterClosed().subscribe(result => {
  //     this.lastCloseResult = result;
  //     this.dialogRef = null;
  //   });
  // }


//
  
  
  
  

  


   
}
  
  

// @Component({
//   selector: 'pizza-dialog',
//   template: `

//   <div *ngIf="selectedMilestone">

//         <img src= {{selectedMilestone.id}} >


//       </div>
//   <button type="button" (click)="dialogRef.close('yes')">Yes</button>
//   <button type="button" (click)="dialogRef.close('no')">No</button>
//   `
// })
// export class MilestoneDetailComponent {
//   constructor(public dialogRef: MdDialogRef<MilestoneDetailComponent>) { }
// }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license


*/