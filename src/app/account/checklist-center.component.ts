import { Component,ViewContainerRef ,OnInit} from '@angular/core';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
// import { CHECKLIST } from './checklist';

import { AchReport } from './report';
import { Report } from './report';
// import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';

import {DialogsService} from './dialog.service';

import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import {Subject} from 'rxjs/Subject';


@Component({
  // selector: 'pizza-component',
  template:  `
    <h2>&nbsp; Milestone Checklist ({{tempReport.numAchieved}}/34)</h2>
   <md-list>

   <md-list-item *ngFor="let item of checklist | async"  (click)="openDialog(item,noteUpdate)">
   

<span ><img src={{item.icon}} ></span> &nbsp; &nbsp; 
    
      {{item.name}} 
   &nbsp; &nbsp; 

<span *ngIf="item.progress>0">
     <span class="label"   
       [ngClass]="{'label-warning': item.progress<30, 'label-info': item.progress>=30 && item.progress<70, 'label-success': item.progress>=70}">
         {{item.progress}}% complete
     </span>
     </span>


   
         <md-divider></md-divider>
    </md-list-item>

   
    </md-list>

    <router-outlet></router-outlet>
  `
})

 



export class ChecklistCenterComponent { 

 public noteUpdate:boolean = false;
 constructor(
   
  
    public af: AngularFire,
    // private router: Router,
    // private http: Http,
    // private pageService: PageService,
    private dialogsService: DialogsService,
    private milestoneService: MilestoneService,  
    private viewContainerRef: ViewContainerRef,
    

    ) {

    af.auth.subscribe(auth => {
      console.log(auth);
      this.userID = auth.uid;

    });


 this.userAccount = af.database.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.userID
      }
    });

    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;
      this.userChecklist = af.database.list('/userList/'+queriedItems[0].$key+'/Checklist/',{
        query: {
          orderByChild: 'progress',
        }
      });

       this.checklist = af.database.list('/userList/'+queriedItems[0].$key+'/Checklist/', {
        query: {
          orderByChild: 'id'
         
        }
      });


      this.checklistSubject = new Subject();
      this.checklistitem = af.database.list('/userList/'+queriedItems[0].$key+'/Checklist/', {
        query: {
          orderByChild: 'id',
          equalTo: this.checklistSubject
        }
      });

      this.checklistitem.subscribe(queriedItems => {

        console.log("selectedMilestone: ", queriedItems[0]);
        this.selectedMilestone = queriedItems[0];
        // this.defineStar(this.selectedMilestone);

        var templist1 = af.database.list('/userList/'+this.key+'/Checklist/', {
          query: {
            orderByChild: 'progress',
            equalTo: 0
          }
        });
        templist1.subscribe(queriedItems => {this.tempReport.numRecord = 34- queriedItems.length});

        var templist2 = af.database.list('/userList/'+this.key+'/Checklist/', {
          query: {
            orderByChild: 'progress',
            equalTo: 100
          }
        });
        templist2.subscribe(queriedItems => {this.tempReport.numAchieved = queriedItems.length});

      });

    });





  }

public openDialog(milestone:Milestone, noteUpdate:boolean) {
    this.dialogsService
      .confirm(milestone, this.viewContainerRef)
      .subscribe(res => {
        this.result = res;
        this.userChecklist.update('Milestone'+ milestone.id, { progress: milestone.progress });
        this.userChecklist.update('Milestone'+ milestone.id, { notes: milestone.notes });

         let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
        list.push({ time: Date(), name: milestone.name, progress: milestone.progress, type: "dialog", location:"checklist" });
        
        if (noteUpdate == true) {
          console.log("noteUpdated");
          let list2 = this.af.database.list('/userList/'+this.key+'/userLogs'+'/noteUpdate');
          list2.push({ time: Date(), name: milestone.name, progress: milestone.progress, updatedNotes: milestone.notes,location: "checklist"});
        }
      });

       let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/openDialog');
        list.push({ name: milestone.name, time: Date(),location: "checklist"} );
  }


  // checklist = CHECKLIST;
  //dialogRef: MdDialogRef<MilestoneDetailComponent>;
  //lastCloseResult: string;
  // public selectedMilestone: Milestone;

  public result: any;
  public tempReport: Report = AchReport;
  public checklistLength: number = 34;

  public checklistitem: FirebaseListObservable<any[]>;
  public checklist: FirebaseListObservable<any[]>;
  public checklistSubject: Subject<any>;
  public selectedMilestone: any;
  public milestone: Milestone;
  public userChecklist: FirebaseListObservable<any[]>;

  public userID: any;
  public userAccount: FirebaseListObservable<any[]>;
  public key:any;


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
  // }

  // public countUpdate(milestone:Milestone): Promise<Report> {
  //   if (milestone.progress > 0 ) {
  //     this.tempReport.numRecord += 1;
  //   }
  //   if (milestone.progress == 10 ) {
  //     this.tempReport.numAchieved += 1;
  //   }
  //   if (milestone.progress > 0 ) {
  //     this.tempReport.numPhotos += 1;
  //   }
  //   return Promise.resolve(this.tempReport);
  // }




  // public setMilestone(Number:number):void {
  //   this.milestoneService.getMilestone(Number).then(milestone => this.onSelect(milestone));
  // };

  // onSelect(milestone: Milestone): void {
   
   
  //   }

  public clickOn(milestone:Milestone, noteUpdate:boolean):void {
     this.checklistSubject.next(milestone.id);
     this.selectedMilestone = milestone;
    this.openDialog(milestone,noteUpdate);
    // this.milestoneService.getMilestone(milestone.id).then(milestone => this.onSelect(milestone));
    
  };


ngOnInit(): void {
 
    // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
    
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