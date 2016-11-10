import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomepageComponent }    from './homepage.component';
//import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'homepage',  component: HomepageComponent },
      //{ path: 'hero/:id', component: HeroDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HomepageRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/