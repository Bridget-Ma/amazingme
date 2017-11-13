import { Component,OnInit,ViewChild } from '@angular/core';

import { Milestone } from './milestone';
// import { MilestoneService } from './milestones.service';
// import { CHECKLIST } from './checklist';

import { AchReport } from './report';
import { Report } from './report';

import { Router,
         NavigationExtras,ActivatedRoute, Params } from '@angular/router';
import { AuthService }      from '../auth.service';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import {MatSidenav} from "@angular/material";

import { Directive, ElementRef, HostListener, Input , Output, EventEmitter} from '@angular/core';

@Component({
    
  //   </nav>
  //   <router-outlet></router-outlet>

  //   <button mat-button>FLAT</button>
  // `,
  template:  `

 

<mat-sidenav-container >


  <mat-sidenav #sidenav mode="side" class="app-sidenav" style="background: #EEEEEE;
  color: black" >

    <div align = "right" style="padding-top:5px"><button  mat-icon-button  (click)="onCloseSideNav()"><i class="material-icons" >close</i></button>
  </div>

  <mat-nav-list >
  
    <mat-divider></mat-divider>
    <mat-list-item routerLink="./checklist" routerLinkActive="active"
     (click)="openChecklist()">Checklist</mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item routerLink="./story" routerLinkActive="active" (click)="openStory()">Storybook</mat-list-item>
    <mat-divider></mat-divider>
    <mat-list-item routerLink="./settings" routerLinkActive="active"
    [routerLinkActiveOptions]="{exact: true}" (click)="openSetting()">Settings</mat-list-item>
    <mat-divider></mat-divider>
  </mat-nav-list>
</mat-sidenav>

<mat-toolbar style="background:#FFFFFF;" >

  <button  mat-icon-button (click)="onOpenSideNav()" style="color:black"><i class="material-icons" style="color:#4A90E2">menu</i></button>

  &nbsp; Amazing Me

  <span class="app-toolbar-filler"></span>
 
  <button mat-button align = "right" style="margin-left:10px; color:#4A90E2" (click)="logout()"  >Logout</button>
</mat-toolbar>

<div style="background:white">


 

  <router-outlet></router-outlet>
</div>

</mat-sidenav-container>


  `,
  // templateUrl: './home.html',
  styleUrls: ['./app.component.css']
})
export class AccountComponent {

   public userID: any;
  public userAccount: FirebaseListObservable<any[]>;
  public key:any;
  public bgcolor:any = "#FFFFFF";
  public color:any = "black";


  constructor( 
    // private milestoneService: MilestoneService,  
    public af: AngularFireDatabase, 
    public authService: AuthService, 
    public router: Router,
    public afAuth: AngularFireAuth

  ) {

   console.log(this.afAuth.auth);
      this.userID = this.afAuth.auth.currentUser.uid;

        this.userAccount = af.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.afAuth.auth.currentUser.uid
      }
    });
    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;
       console.log("Here1:",this.key);
    
      });


    // this.af.auth.subscribe(auth => console.log(auth));
  }

 @ViewChild('sidenav') sidenav: MatSidenav;

 @HostListener('window:resize', ['$event'])
    onOpenSideNav() {
        
        this.sidenav.open();
        /*Log Navigation*/
        console.log("Here1:",this.key);
        let list = this.af.list('/userList/'+this.key+'/userLogs'+'/menuAction');
        list.push({ time: Date(),action: "openMenu"});
            
        
    }

    onCloseSideNav(){
      this.sidenav.close();
       /*Log Navigation*/
        let list = this.af.list('/userList/'+this.key+'/userLogs'+'/menuAction');
        list.push({ time: Date(),action: "closeMenu" });

    }

    openChecklist(){
      // this.sidenav.close();
       /*Log Navigation*/
        let list = this.af.list('/userList/'+this.key+'/userLogs'+'/openChecklist');
        list.push({ time: Date() });
        let list2 = this.af.list('/userList/'+this.key+'/userLogs'+'/menuAction');
        list2.push({ time: Date(),action: "openChecklist" });

    }
    openStory(){
    // this.sidenav.close();
     console.log("Here1:",this.key);
     /*Log Navigation*/
      let list = this.af.list('/userList/'+this.key+'/userLogs'+'/openStory');

      list.push({ time: Date() });
       let list2 = this.af.list('/userList/'+this.key+'/userLogs'+'/menuAction');
        list2.push({ time: Date(),action: "openStory" });

    }
    openSetting(){
    // this.sidenav.close();
     /*Log Navigation*/
      let list = this.af.list('/userList/'+this.key+'/userLogs'+'/openSetting');
      list.push({ time: Date() });
      let list2 = this.af.list('/userList/'+this.key+'/userLogs'+'/menuAction');
        list2.push({ time: Date(),action: "openSetting" });

    }



  

  logout() {
     this.afAuth.auth.signOut();
     this.authService.logout()

    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'login';
    let navigationExtras: NavigationExtras = {
          preserveQueryParams: true,
          preserveFragment: true
        };

        // Redirect the user
     this.router.navigate([redirect], navigationExtras);

   
     // this.authService.logout();
  }


  // checklist = CHECKLIST;
  //dialogRef: matDialogRef<MilestoneDetailComponent>;
  //lastCloseResult: string;
  public selectedMilestone: Milestone;
  public result: any;
  public tempReport: Report = AchReport;
  public checklistLength: number = 34;

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
   
  


ngOnInit(): void {
    this.sidenav.open();
 
    // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
    
  }


  
 
  

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/