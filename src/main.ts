// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app.module';

// platformBrowserDynamic().bootstrapModule(AppModule);




import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);




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

// import {platformBrowser} from '@angular/platform-browser';
// import {MaterialAppModuleNgFactory} from './aot/app/app.module.ngfactory';
// platformBrowser().bootstrapModuleFactory(MaterialAppModuleNgFactory);
