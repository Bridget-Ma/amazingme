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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var material_1 = require('../node_modules/@angular/material');
// import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var homepage_routing_module_1 = require('./homepage/homepage-routing.module');
var login_routing_module_1 = require('./login-routing.module');
var login_component_1 = require('./login.component');
var homepage_component_1 = require('./homepage/homepage.component');
var dialog_service_1 = require('./dialog.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                homepage_routing_module_1.HomepageRoutingModule,
                login_routing_module_1.LoginRoutingModule,
                app_routing_module_1.AppRoutingModule,
                // AlertModule
                material_1.MaterialModule.forRoot(),
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                homepage_component_1.HomepageComponent
            ],
            providers: [
                dialog_service_1.DialogService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map