import { MatDialogRef } from '@angular/material';
import { Component, Input,ViewChild} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { FormControl, FormGroup } from '@angular/forms';
import {MatCheckbox} from '@angular/material'
import { Injectable, ViewContainerRef } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import {matCheckbox} from '@angular/material'




// import {matCheckbox} from '@angular/material'



import {Subject} from 'rxjs/Subject';
import { DialogsService} from './dialog.service';
import {ShareButtonsModule} from "ng2-sharebuttons";


@Component({
    // selector: 'confirm-dialog',
    templateUrl: './shareDialog.html',

})

export class shareConfirmdialog{

  public user: firebase.User;
  public userID: any;

   

  ngOnInit(): void {

    // this.userID = this.route.paramMap
    // .switchMap((params: ParamMap) =>
    //   this.service.getHero(params.get('id')));

  }

// public initPage() {

//   this.af.auth.subscribe(auth => {
//      console.log(auth);
//      this.userID = auth.uid;

//    });


//    this.userAccount = this.af.database.list('/userList',{
//      query: {
//        orderByChild: 'userID',
//        equalTo: this.userID
//      }
//    });

//    this.userAccount.subscribe(queriedItems => {
//      this.key = queriedItems[0].$key;
//      var child= this.af.database.list('/userList/'+queriedItems[0].$key+'/account/child',{
//      query: {
//        orderByChild: 'name',
      
//      }
//    });
//      child.subscribe(queriedItems => {
//      this.childInfo = queriedItems[0];
//      console.log( queriedItems[0].name);

//    });

//      var parent = this.af.database.list('/userList/'+queriedItems[0].$key+'/account/parent',{
//      query: {
//        orderByChild: 'name',
      
//      }
//    });
//       parent.subscribe(queriedItems => {
//      this.parentInfo = queriedItems[0];
//           console.log(queriedItems[0].name);

//    })


   

//    });

   


//  }



//   // public openShare(milestone:Milestone) {

//   //    this.dialogsService
//   //     .shareConfirm(milestone, this.viewContainerRef)
//   //     .subscribe(res => {});

//   // }

  
// public child : FirebaseListObservable<any[]>;
// public parent : FirebaseListObservable<any[]>;
public milestone: any;
public childInfo: any;
public parentInfo:any;
    
 constructor(

   public af: AngularFireDatabase,
   public afAuth: AngularFireAuth,
   
   public dialogRef: MatDialogRef<shareConfirmdialog>,
   private route: ActivatedRoute,
   private router: Router,

   ) {

    this.userID = this.afAuth.auth.currentUser.uid;

    console.log(afAuth.auth.currentUser.uid);
 }

}
