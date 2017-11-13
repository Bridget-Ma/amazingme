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

// import { AngularFireDatabaseModule } from 'angularfire2/database';

// import { AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';



import {Subject} from 'rxjs/Subject';
import { DialogsService} from './dialog.service';

@Component({
    // selector: 'confirm-dialog',
    templateUrl: './dialog.html',

})

export class Confirmdialog{

  // private milestoneService: MilestoneService;

    // public title: string;
    // public message: string;

  public userID: any;


  autoTicks = false;
  tickInterval = 1;
  disabled = false;
  invert = false;
  max2 = 100

  min = 0;
  showTicks = true;
  step = 10;
  thumbLabel = false;
  public value: number = 0;
  vertical = false;

      
  public milestone: any;
  // public af:AngularFireDatabase;
  public key:any;
  public noteUpdate: boolean = false;


    /*slider*/

 
  public rate:number;
  public isReadonly:boolean = false;
  public max:number = 10;
  public overStar:number;
  public percent:number;

 
  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 10 * value;
     
  };
 
  public resetStar():void {
    this.overStar = 0;
  }

  public slideOn(value:number):void {
    this.overStar = value;
    //this.rate = value;
    this.percent = value;
    this.milestone.progress = this.percent;
     /*Update Progress*/
    // this.userChecklist.update('Milestone'+ this.selectedMilestone.id, { progress: this.percent });
    /*Log Progress*/
    // let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
    // list.push({ time: Date(), name: this.selectedMilestone.name });

  };


  


  // public onCheckboxChange1(checkbox:matCheckbox) {
   

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

  // public onCheckboxChange2(checkbox:matCheckbox) {

  //   if (checkbox.checked === true) {
  //     this.milestone.checkbox2 = true;
  //   }
  //   else if (checkbox.checked === false) {
  //     this.milestone.checkbox2 = false;
  //   }
  // }
  //   public onCheckboxChange3(checkbox:matCheckbox) {

  //   if (checkbox.checked === true) {
  //     this.milestone.checkbox3 = true;
  //   }
  //   else if (checkbox.checked === false) {
  //     this.milestone.checkbox3 = false;
  //   }
  // }
  //   public onCheckboxChange4(checkbox:matCheckbox) {

  //   if (checkbox.checked === true) {
  //     this.milestone.checkbox4 = true;
  //   }
  //   else if (checkbox.checked === false) {
  //     this.milestone.checkbox4 = false;
  //   }
  // }

  public updateNote(): void{

    this.noteUpdate  = true;
     console.log("noteUpdate = true");

   var date = new Date();

   this.milestone.notes =  this.milestone.notes + '\n' + date.toDateString() + ' :';



  }

  public onOpenDialog(): void {
      this.rate = this.milestone.progress/10;
      this.overStar = this.milestone.progress/10;
      this.percent = this.milestone.progress;
      this.value = this.milestone.progress;
  }

  ngOnInit(): void {
      this.onOpenDialog();


  }

  // public openShare(milestone:Milestone) {

  //    this.dialogsService
  //     .shareConfirm(milestone, this.viewContainerRef)
  //     .subscribe(res => {});

  // }

  

    //public rate: number = this.milestone.progress*10;
 //<img mat-card-lg-image style="margin:5px 25px 10px 0px" src={{milestone.img}}>
  constructor(
    public dialogRef: MatDialogRef<Confirmdialog>,
    public af:AngularFireDatabase,
    public afAuth: AngularFireAuth,

  // public afAuth: AngularFireAuth;
 


    ) {


     






  }
}
