import { Component,ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable,AuthProviders, AuthMethods } from 'angularfire2';





@Component({
  selector: 'amazingme-app',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
 
})


export class AppComponent {

  items: FirebaseListObservable<any[]>;

 constructor(public af: AngularFire) {
  
  }

}

// bootstrap(AppComponent);
