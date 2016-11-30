import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Milestone, MilestoneService } from './milestones.service';

@Component({
  template: `

  
    <ul class="items">
      <li *ngFor="let milestone of checklist"
        [class.selected]="isSelected(milestone)"
        (click)="onSelect(milestone)">
        <span class="badge">{{milestone.id}}</span> {{milestone.name}}
      </li>
    </ul>


    

    <router-outlet></router-outlet>
  `
})
export class ChecklistComponent implements OnInit {

      
  

      checklist: Milestone[];
      public selectedId: number;

      constructor(
        private service: MilestoneService,
        private route: ActivatedRoute,
        private router: Router
        ) { }

      isSelected(milestone: Milestone) {
        return milestone.id === this.selectedId;
      }

      ngOnInit() {
        this.route.params.forEach((params: Params) => {
          this.selectedId = params['id'];
          this.service.getChecklist()
          .then(checklist => this.checklist = checklist);
        });
      }

      onSelect(milestone: Milestone) {
        this.selectedId = milestone.id;

        // Navigate with relative link
        this.router.navigate([milestone.id], { relativeTo: this.route });
      }


  

}








/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/