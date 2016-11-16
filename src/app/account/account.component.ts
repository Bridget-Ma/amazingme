import { Component } from '@angular/core';

@Component({
    
  //   </nav>
  //   <router-outlet></router-outlet>

  //   <button md-button>FLAT</button>
  // `,
  template:  `


<md-sidenav-layout [class.m2app-dark]="isDarkTheme">

  <md-sidenav #sidenav mode="side" class="app-sidenav" style="background: #4A90E2;
  color: black">

    <div align = "center"><button  md-raised-button  (click)="sidenav.close()">
      Back
    </button>
  </div>

  <md-nav-list>
    <a md-list-item routerLink="./" routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">Dashboard</a>
    <md-divider></md-divider>
    <a md-list-item routerLink="./checklist" routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">Checklist</a>
    <md-divider></md-divider>
    <a md-list-item routerLink="./story" routerLinkActive="active">Storybook</a>
    <md-divider></md-divider>
    <a md-list-item routerLink="./settings" routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: true }">Settings</a>
    <md-divider></md-divider>
  </md-nav-list>
</md-sidenav>



<md-toolbar style="background:white">

  <button  md-raised-button (click)="sidenav.open()">
    Menu
  </button>

  &nbsp; Amazing Me

  <span class="app-toolbar-filler"></span>
  Hi, Bridget
</md-toolbar>

<div style="background:white">
  
  <router-outlet></router-outlet>
</div>

</md-sidenav-layout>


  `,
  // templateUrl: './home.html',
  styleUrls: ['./app.component.css']
})
export class AccountComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/