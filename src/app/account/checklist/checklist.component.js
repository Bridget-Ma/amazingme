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
var router_1 = require('@angular/router');
var milestones_service_1 = require('./milestones.service');
var ChecklistComponent = (function () {
    function ChecklistComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    ChecklistComponent.prototype.isSelected = function (milestone) {
        return milestone.id === this.selectedId;
    };
    ChecklistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.selectedId = params['id'];
            _this.service.getChecklist()
                .then(function (checklist) { return _this.checklist = checklist; });
        });
    };
    ChecklistComponent.prototype.onSelect = function (milestone) {
        this.selectedId = milestone.id;
        // Navigate with relative link
        this.router.navigate([milestone.id], { relativeTo: this.route });
    };
    ChecklistComponent = __decorate([
        core_1.Component({
            template: "\n    <ul class=\"items\">\n      <li *ngFor=\"let milestone of checklist\"\n        [class.selected]=\"isSelected(milestone)\"\n        (click)=\"onSelect(milestone)\">\n        <span class=\"badge\">{{milestone.id}}</span> {{milestone.name}}\n      </li>\n    </ul>\n\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [milestones_service_1.MilestoneService, router_1.ActivatedRoute, router_1.Router])
    ], ChecklistComponent);
    return ChecklistComponent;
}());
exports.ChecklistComponent = ChecklistComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=checklist.component.js.map