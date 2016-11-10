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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var milestones_service_1 = require('./milestones.service');
var checklist_center_component_1 = require('./checklist-center.component');
var checklist_component_1 = require('./checklist.component');
var checklist_center_home_component_1 = require('./checklist-center-home.component');
var milestone_detail_component_1 = require('./milestone-detail.component');
var checklist_center_routing_module_1 = require('./checklist-center-routing.module');
var ChecklistCenterModule = (function () {
    function ChecklistCenterModule() {
    }
    ChecklistCenterModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                checklist_center_routing_module_1.ChecklistCenterRoutingModule
            ],
            declarations: [
                checklist_center_component_1.ChecklistCenterComponent,
                checklist_component_1.ChecklistComponent,
                checklist_center_home_component_1.ChecklistCenterHomeComponent,
                milestone_detail_component_1.MilestoneDetailComponent
            ],
            providers: [
                milestones_service_1.MilestoneService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChecklistCenterModule);
    return ChecklistCenterModule;
}());
exports.ChecklistCenterModule = ChecklistCenterModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=checklist.module.js.map