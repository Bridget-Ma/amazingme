

import { Milestone } from './milestone';
import { CHECKLIST } from './checklist';


//let checklistPromise = Promise.resolve(CHECKLIST);

import { Injectable } from '@angular/core';

@Injectable()
export class MilestoneService {


  getChecklist(): Promise<Milestone[]> {
    return Promise.resolve(CHECKLIST);
  }


  getMilestone(id: number): Promise<Milestone> {
      return this.getChecklist()
                 .then(checklist => checklist.find(milestone => milestone.id === id));
    }
}





/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/