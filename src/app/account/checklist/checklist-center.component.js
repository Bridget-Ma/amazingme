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
var core_1 = require('@angular/core');
var milestone = (function () {
    function milestone() {
    }
    return milestone;
}());
exports.milestone = milestone;
var CHECKLIST = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var ChecklistCenterComponent = (function () {
    function ChecklistCenterComponent() {
        //title = 'Milestone list';
        this.checklist = CHECKLIST;
    }
    ChecklistCenterComponent = __decorate([
        core_1.Component({
            template: "\n    <h2>Milestone Checklist</h2>\n   \n    <li *ngFor=\"let milestone of checklist\">\n  <span class=\"badge\">{{milestone.id}}</span> {{milestone.name}}\n    </li>\n\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChecklistCenterComponent);
    return ChecklistCenterComponent;
}());
exports.ChecklistCenterComponent = ChecklistCenterComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license


*/ 
//# sourceMappingURL=checklist-center.component.js.map