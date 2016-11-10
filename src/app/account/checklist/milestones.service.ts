export class Milestone {
  constructor(public id: number, public name: string) { }
}

const CHECKLIST = [
  new Milestone(1, 'Dragon Burning Cities'),
  new Milestone(2, 'Sky Rains Great White Sharks'),
  new Milestone(3, 'Giant Asteroid Heading For Earth'),
  new Milestone(4, 'Procrastinators Meeting Delayed Again'),
];

let checklistPromise = Promise.resolve(CHECKLIST);

import { Injectable } from '@angular/core';

@Injectable()
export class MilestoneService {

  static nextMilestoneId = 100;

  getChecklist() { return checklistPromise; }

  getMilestone(id: number | string) {
    return checklistPromise
      .then(checklist => checklist.find(milestone => milestone.id === +id));
  }


  addMilestone(name: string) {
    name = name.trim();
    if (name) {
      let milestone = new Milestone(MilestoneService.nextMilestoneId++, name);
      checklistPromise.then(checklist => checklist.push(milestone));
    }
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/