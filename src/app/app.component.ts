import { Component,ViewContainerRef } from '@angular/core';


import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuth } from 'angularfire2/auth';




@Component({
  selector: 'amazingme-app',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
 
})


export class AppComponent {

  items: FirebaseListObservable<any[]>;

 constructor(public af: AngularFireDatabase) {
  
  }

}

// bootstrap(AppComponent);
