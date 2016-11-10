import { Injectable }             from '@angular/core';
import { Router, Resolve,
         ActivatedRouteSnapshot } from '@angular/router';

import { Milestone, MilestoneService } from './milestones.service';

@Injectable()
export class MilestoneDetailResolve implements Resolve<Milestone> {
  constructor(private cs: MilestoneService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Milestone>|boolean {
    let id = +route.params['id'];

    return this.cs.getMilestone(id).then(milestone => {
      if (milestone) {
        return milestone;
      } else { // id not found
        this.router.navigate(['/checklist']);
        return false;
      }
    });
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/