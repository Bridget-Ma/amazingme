import { MdDialogRef } from '@angular/material';
import { Component, Input,ViewChild} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { FormControl, FormGroup } from '@angular/forms';
import {MdCheckbox} from '@angular/material'
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
@Component({
    // selector: 'confirm-dialog',
    templateUrl: './dialog.html',

})
export class ConfirmDialog{

    // public title: string;
    // public message: string;
  public milestone: any;
  public af:AngularFire;
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

  public clickOn(value:number):void {
    this.overStar = value;
    //this.rate = value;
    this.percent = 10 * value;
    this.milestone.progress = this.percent;
     /*Update Progress*/
    // this.userChecklist.update('Milestone'+ this.selectedMilestone.id, { progress: this.percent });
    /*Log Progress*/
    // let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
    // list.push({ time: Date(), name: this.selectedMilestone.name });

  };
@ViewChild('checkbox1') checkbox1: MdCheckbox;
@ViewChild('checkbox2') checkbox2: MdCheckbox;
@ViewChild('checkbox3') checkbox3: MdCheckbox;
@ViewChild('checkbox4') checkbox4: MdCheckbox;

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
  }

  ngOnInit(): void {
      this.onOpenDialog();


  }


    //public rate: number = this.milestone.progress*10;
 //<img md-card-lg-image style="margin:5px 25px 10px 0px" src={{milestone.img}}>
  constructor(
    public dialogRef: MdDialogRef<ConfirmDialog>,

    // public af: AngularFire,
    ) {





  }
}
