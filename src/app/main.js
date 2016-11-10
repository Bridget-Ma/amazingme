// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
"use strict";
// import { AppModule } from './app.module';
// platformBrowserDynamic().bootstrapModule(AppModule);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
// import './polyfills.ts';
// import {enableProdMode} from '@angular/core';
// import {environment} from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
// *
//  * JIT compile.
// import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
// import {AppModule} from './app.module';
// platformBrowserDynamic().bootstrapModule(AppModule);
// /**
//  * AoT compile.
//  * First run `./node_modules/.bin/ngc -p ./src/`
//  */
var platform_browser_1 = require('@angular/platform-browser');
var app_module_ngfactory_1 = require('./aot/app/app.module.ngfactory');
platform_browser_1.platformBrowser().bootstrapModuleFactory(app_module_ngfactory_1.MaterialAppModuleNgFactory);
//# sourceMappingURL=main.js.map