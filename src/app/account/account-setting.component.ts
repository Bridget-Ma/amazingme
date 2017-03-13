import { Component, OnInit, Input }    from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import {Subject} from 'rxjs/Subject';

import { Parent } from './people';
import { Child } from './people'
//import { ParentService } from './parent.service';
//import { PageService } from './page.service';

@Component ({

	template:`

  <div style = "padding: 20px 20px" *ngIf="child">



   <md-card class="app-input-section" >
  
   <md-card-title>Child's Profile</md-card-title>
   <br/>
    <img md-card-sm-image style="margin:0px 25px 10px 0px" src={{child.img}}>
     
   <md-input-container >
   <input mdInput style = "padding: 10px 0 0 0" placeholder="Name" [(ngModel)]="child.name" >
    <input mdInput style = "padding: 10px 0 0 0 " placeholder="Gender" [(ngModel)]="child.gender">
          
      
      <input mdInput style = "padding: 10px 0 0 0" placeholder="Age" [(ngModel)]="child.age">
     
  </md-input-container>
  
      

   

    </md-card>
    </div> 



<div style = "padding: 30px 20px" *ngIf="parent" >

     <md-card  class="app-input-section">
   
     <md-card-title>Parent's Profile</md-card-title>
     <br/>
      <img md-card-sm-image style="margin:0px 25px 10px 0px" src={{parent.img}}>
 <md-input-container >
      <input mdInput style = "padding: 10px 0 0 0" placeholder="Name" [(ngModel)]="parent.name">
     <input mdInput style = "padding: 10px 0 0 0"   placeholder="Email" [(ngModel)]="parent.email">
    </md-input-container>
  
      
          
         

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
	`
	cardstyle {

		margin: 10px 10px;
		padding: 10px 10px;
	}

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

  constructor(
    public af: AngularFire,


    ) {

    af.auth.subscribe(auth => {
      console.log(auth);
      this.userID = auth.uid;

    });


    this.userAccount = af.database.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.userID
      }
    });

    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;
      this.childinfoquery = af.database.list('/userList/'+queriedItems[0].$key+'/account',{
      query: {
        orderByChild: 'type',
        equalTo: "child"
       }
     });
      this.parentinfoquery = af.database.list('/userList/'+queriedItems[0].$key+'/account',{
      query: {
        orderByChild: 'type',
        equalTo: "parent"
       }
     });


    this.childinfoquery.subscribe(queriedItems => {
      this.child = queriedItems[0];

    });
    this.parentinfoquery.subscribe(queriedItems => {
      this.parent = queriedItems[0];

    });

   });



    
   

  }



public save() {
   let list = this.af.database.list('/userList/'+this.key+'/account');

   list.update('child', { name: this.child.name, age:this.child.age, gender: this.child.gender, img: this.child.img });
   list.update('parent', { name: this.parent.name, email:this.parent.email, img: this.parent.img });


}

 
  // parent: Parent = {
  //   name: "Sarah",
  //   img: "../../assets/images/parentprofile.jpg",
  //   email: "sarah@gmail.com"
    
  // };


  // child: Child = {
  //   name: "George",
  //   img: "../../assets/images/childprofile.jpg",
  //   gender: "male",
  //   age: 3,
  // };
  //public child: Child;

}

