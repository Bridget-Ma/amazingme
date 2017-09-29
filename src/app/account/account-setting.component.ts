import { Component, OnInit, Input }    from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Subject} from 'rxjs/Subject';

import { Parent } from './people';
import { Child } from './people'
import {MdSnackBar} from '@angular/material';
//import { ParentService } from './parent.service';
//import { PageService } from './page.service';

@Component ({

<<<<<<< HEAD
templateUrl: './setting.html',
styles: [
=======
	template:`

  <div style = "padding: 20px 20px" *ngIf="child">



   <md-card class="app-input-section" >
  
   <md-card-title>Child's Profile</md-card-title>
   <br/>
    <img md-card-sm-image style="margin:0px 25px 10px 0px" src={{child.img}}>
     
<md-input-container >
   <input mdInput style = "padding: 10px 0 0 0" placeholder="Name" [(ngModel)]="child.name" >
   </md-input-container >
   <md-input-container >
    <input mdInput style = "padding: 10px 0 0 0 " placeholder="Gender" [(ngModel)]="child.gender">
    </md-input-container >
          
      <md-input-container >
      <input mdInput style = "padding: 10px 0 0 0" placeholder="Age" [(ngModel)]="child.age">
     </md-input-container >

  
      

   

    </md-card>
    </div> 



<div style = "padding: 30px 20px" *ngIf="parent" >

     <md-card  class="app-input-section">
   
     <md-card-title>Parent's Profile</md-card-title>
     <br/>
      <img md-card-sm-image style="margin:0px 25px 10px 0px" src={{parent.img}}>
 <md-input-container >
      <input mdInput style = "padding: 10px 0 0 0" placeholder="Name" [(ngModel)]="parent.name">
          </md-input-container>
          <md-input-container >
     <input mdInput style = "padding: 10px 0 0 0"   placeholder="Email" [(ngModel)]="parent.email">
     </md-input-container >

  
      
          
         

    </md-card>

</div>

<div align = "right" style="margin-right: 30px"><button type="button" md-raised-button 
(click)="save()">Save</button>
</div>

<div style="height: 200px">
  <br />

  </div>


	`,
	styles: [
>>>>>>> origin/master
	`
	`],
  //providers: [ParentService]

})

export class SettingComponent {

  public child: any;
  public parent: any;
  public userID: any;
  public userChecklist: FirebaseListObservable<any[]>;

  public userAccount: FirebaseListObservable<any[]>;
  public key:any;

  public childinfo;
  public childinfoquery: FirebaseListObservable<any[]>;
  public parentinfoquery: FirebaseListObservable<any[]>;
  public user: firebase.User;

  color = 'primary';
  checked = true;
  disabled = false;

  genders = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];

  ages = [
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
  ];

  constructor(
        public af: AngularFireDatabase,
        public afAuth: AngularFireAuth,
        public snackBar: MdSnackBar  


    ) {

    this.user = afAuth.auth.currentUser;

    console.log(afAuth.auth.currentUser.email);
    this.userID = this.afAuth.auth.currentUser.uid;

    console.log(afAuth.auth.currentUser.uid);

    this.userAccount = af.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.afAuth.auth.currentUser.uid
      }
    });

    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;
      this.childinfoquery = af.list('/userList/'+queriedItems[0].$key+'/account',{
      query: {
        orderByChild: 'type',
        equalTo: "child"
       }
     });
      this.parentinfoquery = af.list('/userList/'+queriedItems[0].$key+'/account',{
      query: {
        orderByChild: 'type',
        equalTo: "parent"
       }
     });


    this.childinfoquery.subscribe(queriedItems => {
      this.child = queriedItems[0];
      // console.log("child:", this.child.img)

    });
    this.parentinfoquery.subscribe(queriedItems => {
      this.parent = queriedItems[0];

    });

   });



    
   

  }



public save() {
   let list = this.af.list('/userList/'+this.key+'/account');

   this.child.img = "../../assets/images/childprofile.jpg"
   this.parent.img = "../../assets/images/parentprofile.jpg"

   list.update('child', { name: this.child.name, age:this.child.age, gender: this.child.gender, img: this.child.img });
   list.update('parent', { name: this.parent.name, email:this.parent.email, img: this.parent.img });

   this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 500,
    });


}

 
 

}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snackbar.html'
  // styleUrls: ['snack-bar-component-example-snack.css'],
})

export class SnackBarComponent {


  // public child: any;
  // public parent: any;
  // public userID: any;
  // public userChecklist: FirebaseListObservable<any[]>;

  // public userAccount: FirebaseListObservable<any[]>;
  // public key:any;

  // public childinfo;
  // public childinfoquery: FirebaseListObservable<any[]>;
  // public parentinfoquery: FirebaseListObservable<any[]>;
  // public user: firebase.User;

  // constructor(
  //   public snackBar: MdSnackBar,
  //   public af: AngularFireDatabase,
  //   public afAuth: AngularFireAuth,
 
  //   ) {}

  // openSnackBar() {

  //   let list = this.af.list('/userList/'+this.key+'/account');

  //  this.child.img = "../../assets/images/childprofile.jpg"
  //  this.parent.img = "../../assets/images/parentprofile.jpg"

  //  list.update('child', { name: this.child.name, age:this.child.age, gender: this.child.gender, img: this.child.img });
  //  list.update('parent', { name: this.parent.name, email:this.parent.email, img: this.parent.img });

  //  this.snackBar.openFromComponent(SettingComponent, {
  //     duration: 500,
  //   });

  //   this.snackBar.openFromComponent(SettingComponent, {
  //     duration: 500,
  //   });
  // }
}




