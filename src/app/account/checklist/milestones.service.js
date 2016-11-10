"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Milestone = (function () {
    function Milestone(id, name) {
        this.id = id;
        this.name = name;
    }
    return Milestone;
}());
exports.Milestone = Milestone;
var CHECKLIST = [
    new Milestone(1, 'Dragon Burning Cities'),
    new Milestone(2, 'Sky Rains Great White Sharks'),
    new Milestone(3, 'Giant Asteroid Heading For Earth'),
    new Milestone(4, 'Procrastinators Meeting Delayed Again'),
];
var checklistPromise = Promise.resolve(CHECKLIST);
var core_1 = require('@angular/core');
var MilestoneService = (function () {
    function MilestoneService() {
    }
    MilestoneService.prototype.getChecklist = function () { return checklistPromise; };
    MilestoneService.prototype.getMilestone = function (id) {
        return checklistPromise
            .then(function (checklist) { return checklist.find(function (milestone) { return milestone.id === +id; }); });
    };
    MilestoneService.prototype.addMilestone = function (name) {
        name = name.trim();
        if (name) {
            var milestone_1 = new Milestone(MilestoneService.nextMilestoneId++, name);
            checklistPromise.then(function (checklist) { return checklist.push(milestone_1); });
        }
    };
    MilestoneService.nextMilestoneId = 100;
    MilestoneService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MilestoneService);
    return MilestoneService;
}());
exports.MilestoneService = MilestoneService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=milestones.service.js.map