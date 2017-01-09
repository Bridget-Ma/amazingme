import { Component, OnInit, Input }    from '@angular/core';
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
      <md-input style = "padding: 10px 0 0 0" placeholder="Name" [(ngModel)]="child.name"></md-input>
   
  
      <md-input style = "padding: 10px 0 0 0 " placeholder="Gender" [(ngModel)]="child.gender"></md-input>
          
      
      <md-input style = "padding: 10px 0 0 0" placeholder="Age" [(ngModel)]="child.age"></md-input>
     

   

    </md-card>
    </div> 



<div style = "padding: 30px 20px" >

     <md-card  class="app-input-section">
   
     <md-card-title>Parent's Profile</md-card-title>
     <br/>
      <img md-card-sm-image style="margin:0px 25px 10px 0px" src={{parent.img}}>

      <md-input style = "padding: 10px 0 0 0" placeholder="Name" [(ngModel)]="parent.name"></md-input>
     <md-input style = "padding: 10px 0 0 0"   placeholder="Email" [(ngModel)]="parent.email"></md-input>
    
  
      
          
         

    </md-card>

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


  //  constructor(

  //   private parentService: ParentService

  //   ) { }

  //  public parent: Parent;

  //  getParent(): void {
  //     this.parentService.getParent().then(parent => this.parent = parent);
  //   }

  // ngOnInit(): void {
  //   this.getParent();
  // }

  parent: Parent = {
    name: "Sarah",
    img: "../../assets/images/parentprofile.jpg",
    email: "sarah@gmail.com"
    
  };


  child: Child = {
    name: "George",
    img: "../../assets/images/childprofile.jpg",
    gender: "male",
    age: 3,
  };
  //public child: Child;

}

