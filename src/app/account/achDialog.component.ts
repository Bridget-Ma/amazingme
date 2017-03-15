import { MdDialogRef } from '@angular/material';
import { Component, OnInit, Input} from '@angular/core';
import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';

import { AchReport } from './report';
import { Report } from './report';
//import { FormControl, FormGroup } from '@angular/forms';

@Component({
    // selector: 'confirm-dialog',
    templateUrl: './achDialog.html',

})
export class AchDialog{



  ngOnInit(): void {
  }

  private milestoneService: MilestoneService;
 
  public tempReport: Report;
  
  constructor(public dialogRef: MdDialogRef<AchDialog>) {
  }
}
