import { MdDialogRef } from '@angular/material';
import { Component, Input,ViewChild} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { FormControl, FormGroup } from '@angular/forms';
import {MdCheckbox} from '@angular/material'
import { Injectable, ViewContainerRef } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
=======
=======
>>>>>>> origin/master
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
>>>>>>> origin/master
import {Subject} from 'rxjs/Subject';
import { DialogsService} from './dialog.service';

@Component({
    // selector: 'confirm-dialog',
    templateUrl: './dialog.html',

})

export class ConfirmDialog{

    // public title: string;
    // public message: string;

<<<<<<< HEAD
<<<<<<< HEAD

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

=======
>>>>>>> origin/master
=======
>>>>>>> origin/master
      
  public milestone: any;
  public af:AngularFireDatabase;
  public key:any;
  public noteUpdate: boolean = false;

  public userChecklist: FirebaseListObservable<any[]>;
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

  public updateNote(): void{

    this.noteUpdate  = true;
     console.log("noteUpdate = true")

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
 //<img md-card-lg-image style="margin:5px 25px 10px 0px" src={{milestone.img}}>
  constructor(
    public dialogRef: MdDialogRef<ConfirmDialog>,
    // private dialogsService: DialogsService,
    // private milestoneService: MilestoneService,  
    // private viewContainerRef: ViewContainerRef,

    // public af: AngularFire,
    ) {





  }
}
