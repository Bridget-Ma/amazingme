import { MdDialogRef } from '@angular/material';
import { Component, Input} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    // selector: 'confirm-dialog',
    templateUrl: './dialog.html'
})
export class ConfirmDialog{

    // public title: string;
    // public message: string;
  public milestone: Milestone;
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
  };

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
  constructor(public dialogRef: MdDialogRef<ConfirmDialog>) {

  }
}
