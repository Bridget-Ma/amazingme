import { MdDialogRef } from '@angular/material';
import { Component, Input,ViewChild} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { FormControl, FormGroup } from '@angular/forms';
<<<<<<< HEAD
<<<<<<< HEAD
import {MdCheckbox} from '@angular/material'
import { Injectable, ViewContainerRef } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
=======
// import {MdCheckbox} from '@angular/material'
import { Injectable, ViewContainerRef } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
>>>>>>> origin/master
=======
// import {MdCheckbox} from '@angular/material'
import { Injectable, ViewContainerRef } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
>>>>>>> origin/master
import {Subject} from 'rxjs/Subject';
import { DialogsService} from './dialog.service';
import {ShareButtonsModule} from "ng2-sharebuttons";


@Component({
    // selector: 'confirm-dialog',
    templateUrl: './shareDialog.html',

})

export class shareConfirmDialog{

    // public title: string;
    // public message: string;

  // public userID: any;
  // public userAccount: FirebaseListObservable<any[]>;

 
  // public key:any;
  // public noteUpdate: boolean = false;

  // public userChecklist: FirebaseListObservable<any[]>;
  //   /*slider*/

 
  // public rate:number;
  // public isReadonly:boolean = false;
  // public max:number = 10;
  // public overStar:number;
  // public percent:number;



  // public onCheckboxChange1(checkbox:MdCheckbox) {
   

  //   if (checkbox.checked === true) {
  //     // this.rate = this.rate +2;

  //     // this.overStar = this.overStar + 2;
  //     // this.percent = this.percent + 20;
  //     // this.milestone.progress = this.milestone.progress + 20;
  //     this.milestone.checkbox1 = true;


  //   }
  //   else if (checkbox.checked === false) {

  //     // this.rate = this.rate -2;

  //     // this.overStar = this.overStar - 2;
  //     // this.percent = this.percent - 20;
  //     // this.milestone.progress = this.milestone.progress - 20;
  //     this.milestone.checkbox1 = false;

  //   }


  // }

  // public onCheckboxChange2(checkbox:MdCheckbox) {

  //   if (checkbox.checked === true) {
  //     this.milestone.checkbox2 = true;
  //   }
  //   else if (checkbox.checked === false) {
  //     this.milestone.checkbox2 = false;
  //   }
  // }
  //   public onCheckboxChange3(checkbox:MdCheckbox) {

  //   if (checkbox.checked === true) {
  //     this.milestone.checkbox3 = true;
  //   }
  //   else if (checkbox.checked === false) {
  //     this.milestone.checkbox3 = false;
  //   }
  // }
  //   public onCheckboxChange4(checkbox:MdCheckbox) {

  //   if (checkbox.checked === true) {
  //     this.milestone.checkbox4 = true;
  //   }
  //   else if (checkbox.checked === false) {
  //     this.milestone.checkbox4 = false;
  //   }
  // }

  // public updateNote(): void{

  //   this.noteUpdate  = true;
  //    console.log("noteUpdate = true")

  // }

  // public onOpenDialog(): void {
  //     this.rate = this.milestone.progress/10;
  //     this.overStar = this.milestone.progress/10;
  //     this.percent = this.milestone.progress;
  // }

  ngOnInit(): void {

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
   
   public dialogRef: MdDialogRef<shareConfirmDialog>

   ) {}

}
