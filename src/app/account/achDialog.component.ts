import { MdDialogRef } from '@angular/material';
import { Component, OnInit, Input} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';

import { AchReport } from './report';
import { Report } from './report';
//import { FormControl, FormGroup } from '@angular/forms';

@Component({
    // selector: 'confirm-dialog',
    templateUrl: './achDialog.html'
})
export class AchDialog{

    // public title: string;
    // public message: string;
  //public milestone: Milestone;
  //public checklist: Milestone[];
  
  // getMilestones(): void {
  //   this.milestoneService.getChecklist().then(checklist => this.checklist = checklist);
  // }


  ngOnInit(): void {
     //this.getMilestones();
     //this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
     this.onOpenDialog();
  }

  public onOpenDialog(): void {
           
  }

  private milestoneService: MilestoneService;
 
  /*record update*/


  //public checklistLength: number = 28;
  //public tempCount = [0,0,0];
  public tempReport: Report;
  // public getReport(): Promise<Report> {
    
  //   return Promise.resolve(AchReport);
  // }

  // public reportUpdate(report:Report): void {
  //   this.countUpdateIteration().then(tempReport => report = tempReport);
  // }

  // public countUpdateIteration(): Promise<Report> {
  //   this.tempReport = {
  //     numRecord: 0,
  //     numAchieved: 0,
  //     numPhotos: 0
  //   };

  //   for (let index = 0; index < this.checklistLength; index++) {
  //     this.milestoneService.getMilestone(index).then(milestone => this.countUpdate(milestone));
  //   }
    
  //   return Promise.resolve(this.tempReport);
  //   }

  // public countUpdate(milestone:Milestone): Promise<Report> {
  //   if (milestone.progress > 0 ) {
  //       this.tempReport.numRecord += 1;
  //     }
  //   if (milestone.progress == 10 ) {
  //       this.tempReport.numAchieved += 1;
  //     }
  //   if (milestone.progress > 0 ) {
  //       this.tempReport.numPhotos += 1;
  //     }
  //   return Promise.resolve(this.tempReport);
  // }


    //public rate: number = this.milestone.progress*10;
 //<img md-card-lg-image style="margin:5px 25px 10px 0px" src={{milestone.img}}>
  constructor(public dialogRef: MdDialogRef<AchDialog>) {



  }
}
