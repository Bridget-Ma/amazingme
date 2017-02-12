import { Component,ViewContainerRef ,OnInit} from '@angular/core';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { CHECKLIST } from './checklist';

import { AchReport } from './report';
import { Report } from './report';
// import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';

import {DialogsService} from './dialog.service';



@Component({
  // selector: 'pizza-component',
  template:  `
    <h2>&nbsp; Milestone Checklist ({{tempReport.numAchieved}}/34)</h2>
   <md-list>

   <md-list-item *ngFor="let milestone of checklist"  (click)="openDialog(milestone)">
   

<span ><img src={{milestone.icon}} ></span> &nbsp; &nbsp; 
    
      {{milestone.name}} 
   &nbsp; &nbsp; 

<span *ngIf="milestone.progress>0">
     <span class="label"   
       [ngClass]="{'label-warning': milestone.progress<30, 'label-info': milestone.progress>=30 && milestone.progress<70, 'label-success': milestone.progress>=70}">
         {{milestone.progress}}% complete
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
  public tempReport: Report = AchReport;
public checklistLength: number = 34;

 public getReport(): Promise<Report> {
    
    return Promise.resolve(AchReport);
  }
  public reportUpdate(report:Report): void {
    this.countUpdateIteration().then(tempReport => report = tempReport);
  }

  public countUpdateIteration(): Promise<Report> {
    this.tempReport = {
      numRecord: 0,
      numAchieved: 0,
      numPhotos: 0
    };

    for (let index = 0; index < this.checklistLength; index++) {
      this.milestoneService.getMilestone(index).then(milestone => this.countUpdate(milestone));
    }
    
    return Promise.resolve(this.tempReport);
  }

  public countUpdate(milestone:Milestone): Promise<Report> {
    if (milestone.progress > 0 ) {
      this.tempReport.numRecord += 1;
    }
    if (milestone.progress == 10 ) {
      this.tempReport.numAchieved += 1;
    }
    if (milestone.progress > 0 ) {
      this.tempReport.numPhotos += 1;
    }
    return Promise.resolve(this.tempReport);
  }




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


ngOnInit(): void {
 
    this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
    
  }

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