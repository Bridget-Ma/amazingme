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
// import { Hero } from './hero';
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'amazingme-app',
            template: "\n    \n    <h1 class=\"title\"> Amazing Me</h1>\n    <nav>\n      <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a routerLink=\"/homepage\" routerLinkActive=\"active\">Homepage</a>\n      <a routerLink=\"/account\" routerLinkActive=\"active\">Bridget's account</a>\n      \n    </nav>\n    <router-outlet></router-outlet>\n  \n  ",
            styles: ["\n\n    .input {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n\n    .login {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n    }\n\n    .login label {\n      margin: 2em 2em 2em 2em;\n      width:20em;\n    }\n\n    .login input {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 2em;\n      width: 20em;\n      border-radius: 4px;\n      font-size: 100%\n    }\n\n    .login button {\n      font-family: Arial;\n      font-size: 100%;\n      background-color: #eee;\n      border: none;\n      margin: 2em 2em 2em 0;\n      padding: 5px 10px;\n      border-radius: 4px;\n      cursor: pointer;\n      cursor: hand;\n      height: 3em;\n      width: 8em;\n    }\n\n    .login button.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .login button:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n\n\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n\n\n\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .heroes .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map