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
var MilestoneDetailResolve = (function () {
    function MilestoneDetailResolve(cs, router) {
        this.cs = cs;
        this.router = router;
    }
    MilestoneDetailResolve.prototype.resolve = function (route) {
        var _this = this;
        var id = +route.params['id'];
        return this.cs.getMilestone(id).then(function (milestone) {
            if (milestone) {
                return milestone;
            }
            else {
                _this.router.navigate(['/checklist']);
                return false;
            }
        });
    };
    MilestoneDetailResolve = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [milestones_service_1.MilestoneService, router_1.Router])
    ], MilestoneDetailResolve);
    return MilestoneDetailResolve;
}());
exports.MilestoneDetailResolve = MilestoneDetailResolve;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=milestone-detail-resolve.service.js.map