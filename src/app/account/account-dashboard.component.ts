import { Component, OnInit ,ViewContainerRef}    from '@angular/core';
import { ActivatedRoute }       from '@angular/router';
import { Observable }           from 'rxjs/Observable';
import { PreloadSelectedModules } from '../selective-preload-strategy';

// import { MatDialog, MatDialogRef, MatDialogConfig} from '@angular/material';
import { achDialogsService} from './achDialog.service';

import { AchReport } from './report';
import { Report } from './report';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
// import { CHECKLIST } from './checklist';

import 'rxjs/add/operator/map';

@Component({
  template: `
    
  
  <img src="../../assets/images/homepage1.jpg">
  <div style="height: 200px">


  <br />

  </div>
   
  `,


  // templateUrl: './home.html',
})
export class AccountDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: PreloadSelectedModules,
    private achDialogsService: achDialogsService,
    private viewContainerRef: ViewContainerRef,
    private milestoneService: MilestoneService
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParams
      .map(params => params['session_id'] || 'None');

    // Capture the fragment if available
    this.token = this.route
      .fragment
      .map(fragment => fragment || 'None');

       // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
  }


    /*dialog*/

  public open(report:Report) {
    this.achDialogsService
      .confirm(report, this.viewContainerRef)
      .subscribe(res => this.refreshPage(res));
  }

  public refreshPage(res:any) {
     //this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
    // if (res == true){

  
    // }

    // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
    //this.getReport().then(AchReport => this.tempReport = AchReport);//refresh the report if any change is made

  }
  


  // public openDialog(Number:number):void {
  //   this.milestoneService.getMilestone(Number).then(milestone => this.open(milestone));
  // };

 
  //public selectedMilestone: Milestone;
  public result: any;

  /*record update*/


  public checklistLength: number = 28;
  //public tempCount = [0,0,0];
  public tempReport: Report = AchReport;

  public getReport(): Promise<Report> {
    
    return Promise.resolve(AchReport);
  }

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


}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/