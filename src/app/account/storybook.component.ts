import { Component,Directive, OnInit,ViewContainerRef, ViewChild, ElementRef, HostListener , Renderer, ViewEncapsulation} from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { Page } from './page';
// import { PageService } from './page.service';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
// import { CHECKLIST } from './checklist';

import { AchReport } from './report';
import { Report } from './report';

// import { matDialog, matDialogRef, matDialogConfig} from '@angular/material';
import { DialogsService} from './dialog.service';
import { achDialogsService} from './achDialog.service';


import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Subject} from 'rxjs/Subject';

// import { CeiboShare } from 'ng2-social-share';
import {ShareButtonsModule} from "ng2-sharebuttons";
// todo: change to ng2-bootstrap
import * as jsPDF from 'jspdf';

import { Parent } from './people';
import { Child } from './people'

import * as webshot from 'webshot';

// import { angularscreenshot } from "angular-screenshot";

// var webshot = require('webshot');



@Component({

  templateUrl: './storybook.html',
  encapsulation: ViewEncapsulation.None,
})

export class StorybookComponent implements OnInit {

  @ViewChild('myAudio') el:ElementRef;


  autoTicks = false;
  tickInterval = 1;
  disabled = false;
  invert = false;
  max2 = 100

  min = 0;
  showTicks = true;
  step = 10;
  thumbLabel = true;
  public value: number = 0;
  vertical = false;



  public totalItems:number = 400;
  public currentPage:number = 1;

  public page: any;
  public selectedPage: Page;
  public pages: FirebaseListObservable<any[]>;
  public pageSubject: Subject<any>;

  public checklist: FirebaseListObservable<any[]>;
  public checklistSubject: Subject<any>;
  public selectedMilestone: any;
  public milestone: any;
  public userChecklist: FirebaseListObservable<any[]>;

  public userID: any;
  public userAccount: FirebaseListObservable<any[]>;
  public key:any;

  //public userList: FirebaseListObservable<any>;
  
  // public selectedMilestone: Milestone;
  public showMilestone: boolean = true;
 
  public maxSize:number = 10;
  public bigTotalItems:number = 310;
  public bigCurrentPage:number = 1;

  // public pageSize:number = 30;
  // public pageItem:number = 1;
 
  public noteUpdate:boolean = false;

  public tempTimeOnPage: Date;

  public childInfo: any;
  public parentInfo:any;


  

  constructor(
    public af: AngularFireDatabase,
    public afAuth: AngularFireAuth,

    private router: Router,
    // private http: Http,
    // private pageService: PageService,
    private dialogsService: DialogsService,
    private milestoneService: MilestoneService,  
    private viewContainerRef: ViewContainerRef,
    private achDialogsService: achDialogsService,
    private rd: Renderer

    ) {


   


   
      console.log(this.afAuth.auth);
      this.userID = this.afAuth.auth.currentUser.uid;




/*page*/
    this.pageSubject = new Subject();
    this.pages = af.list('/Pagelist', {
      query: {
        orderByChild: 'id',
        equalTo: this.pageSubject
      }
    });

    this.pages.subscribe(queriedItems => {
      // this.selectedPage = this.page[0]; 
      
      // this.page = this.pages.flatMap(list => list).first().map(({id, img, milestoneID}) => ({id, img, milestoneID}));
      console.log(queriedItems);  
      // console.log("selectedPage: ", this.pages.flatMap(list => list).first());
      // this.onSelect(this.pages.flatMap(list => list).first());
      console.log("selectedPage: ", queriedItems[0]);
      this.page = queriedItems[0];
      this.onSelect(queriedItems[0]);

      // console.log("this page is: ", this.page[0]);
    });
    
/*checklist*/

    this.userAccount = af.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.afAuth.auth.currentUser.uid
      }
    });

    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;

      this.userChecklist = af.list('/userList/'+queriedItems[0].$key+'/Checklist/',{
        query: {
          orderByChild: 'progress',
        }
      });


     var child = af.list('/userList/'+queriedItems[0].$key+'/account',{
      query: {
        orderByChild: 'type',
        equalTo: "child"
       }
     });

      var parent = af.list('/userList/'+queriedItems[0].$key+'/account',{
      query: {
        orderByChild: 'type',
        equalTo: "parent"
       }
     });


    child.subscribe(queriedItems => {
      this.childInfo = queriedItems[0];

    });
    parent.subscribe(queriedItems => {
      this.parentInfo = queriedItems[0];

    });


   





      // var templist1 = af.database.list('/userList/'+this.key+'/Checklist/', {
      //   query: {
      //     orderByChild: 'progress',
      //     equalTo: 0
      //   }
      // });
      // templist1.subscribe(queriedItems => {this.tempReport.numRecord = 34- queriedItems.length});

      // var templist2 = af.database.list('/userList/'+this.key+'/Checklist/', {
      //   query: {
      //     orderByChild: 'progress',
      //     equalTo: 100
      //   }
      // });
      // templist2.subscribe(queriedItems => {this.tempReport.numAchieved = queriedItems.length});


      this.checklistSubject = new Subject();
      this.checklist = af.list('/userList/'+queriedItems[0].$key+'/Checklist/', {
        query: {
          orderByChild: 'id',
          equalTo: this.checklistSubject
        }
      });

      this.checklist.subscribe(queriedItems => {

        console.log("selectedMilestone: ", queriedItems[0]);
        this.selectedMilestone = queriedItems[0];
        this.defineStar(this.selectedMilestone);

        var templist1 = af.list('/userList/'+this.key+'/Checklist/', {
          query: {
            orderByChild: 'progress',
            equalTo: 0
          }
        });
        templist1.subscribe(queriedItems => {this.tempReport.numRecord = 34- queriedItems.length});

        var templist2 = af.list('/userList/'+this.key+'/Checklist/', {
          query: {
            orderByChild: 'progress',
            equalTo: 100
          }
        });
        templist2.subscribe(queriedItems => {this.tempReport.numAchieved = queriedItems.length});

      });

    });
  }


  public queryChecklist()  {

    this.userAccount = this.af.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.userID
      }
    });

    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;

      var templist1 = this.af.list('/userList/'+queriedItems[0].$key+'/Checklist/', {
      query: {
        orderByChild: 'progress',
        equalTo: 0
      }
    });
    templist1.subscribe(queriedItems => {this.tempReport.numRecord = 34- queriedItems.length});

    var templist2 = this.af.list('/userList/'+queriedItems[0].$key+'/Checklist/', {
      query: {
        orderByChild: 'progress',
        equalTo: 100
      }
    });
    templist2.subscribe(queriedItems => {this.tempReport.numAchieved = queriedItems.length});

      
    });
  }

    // var templist1 = af.database.list('/userList', {
    //     query: {
    //       orderByChild: 'progress',
    //       // equalTo: 0
    //     }
    //   });
    // templist1.subscribe(queriedItems => {this.tempReport.numRecord =  queriedItems.length});

    // var templist2 = af.database.list('/userList/'+this.userID+'/Checklist', {
    //   query: {
    //     orderByChild: 'progress',
    //     equalTo: 100
    //   }
    // });
    // templist2.subscribe(queriedItems => {this.tempReport.numAchieved = queriedItems.length});

    // this.userChecklist = af.database.list('/userList/'+this.userID+'/Checklist');



  ngOnInit(): void {

    this.setPage(1);
    this.queryChecklist();

    if (this.tempReport.numRecord != 0) { 
      this.openAch(this.tempReport);
   
  }
}


  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
    // this.pageSubject.next(pageNo); 
     this.pageSubject.next(pageNo);
     console.log("setPage:",pageNo);
    // console.log("setPage:",this.pageSubject.next(pageNo));
    // this.pageService.getPage(pageNo).then(page => this.onSelect(page));
    
  };

  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);

    // this.pageService.getPage(event.page).then(page => this.onSelect(page));
    this.onSelect(event.page);
    this.pageSubject.next(event.page);

    let list2 = this.af.list('/userList/'+this.key+'/userLogs'+'/navigation');
    list2.push({ time: Date(), page: event.page});
    // var x = document.getElementById("myAudio").;
    // this.loadAudio();
   


  };

  // public pageEvent(event:any):void {
  //   console.log('Page changed to: ' + event);

  //   // this.pageService.getPage(event.page).then(page => this.onSelect(page));
  //   // this.onSelect(event.page);
  //   // this.pageSubject.next(event.pageIndex);

  //   // let list2 = this.af.list('/userList/'+this.key+'/userLogs'+'/navigation');
  //   // list2.push({ time: Date(), page: event.pageIndex});
  //   // var x = document.getElementById("myAudio").;
  //   // this.loadAudio();
   


  // };
  

  onSelect(page): void {
    
    // this.pageSubject.next(eventPage); 
    // console.log("onselect:",this.page[0]);
    this.page = page;

    if(page.milestoneID > 0){
      this.checklistSubject.next(page.milestoneID);
      this.selectedMilestone = page.milestoneID;
      console.log("milestoneID", this.selectedMilestone);
      this.showMilestone = true;
      // this.value = this.selectedMilestone.progress;
    }
    else{
      this.showMilestone = false;
      this.selectedMilestone = page.milestoneID;
    }

    

    // this.milestoneService.getMilestone(this.selectedPage.milestoneID).then(milestone => this.selectedMilestone = milestone);
  }

  public defineStar(milestone:any): void {
    // this.rate = milestone.progress/10;
    this.overStar = milestone.progress/10;
    this.percent = milestone.progress;
    this.value = milestone.progress;
    console.log("refresh on true");
  }

  /*dialog*/

   public open(milestone:Milestone, noteUpdate:boolean) {

    var day = new Date();
    this.dialogsService
      .confirm(milestone, this.viewContainerRef)
      .subscribe(res => {
        this.refreshPage(res);
        this.userChecklist.update('Milestone'+ milestone.id, { progress: milestone.progress,notes: milestone.notes,
        lastUpdate: day.toDateString()});
        if(milestone.submilestone.checkbox1) {
           this.userChecklist.update('Milestone'+milestone.id, {submilestone: {checkbox1: {state:milestone.submilestone.checkbox1.state,name:milestone.submilestone.checkbox1.name},checkbox2: {state:milestone.submilestone.checkbox2.state,name:milestone.submilestone.checkbox2.name},
          checkbox3: {state:milestone.submilestone.checkbox3.state,name:milestone.submilestone.checkbox3.name},checkbox4: {state:milestone.submilestone.checkbox4.state,name:milestone.submilestone.checkbox4.name}}});
        }
       
       
       
        /*Log Progress*/
        let list = this.af.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
        list.push({ time: Date(), name: milestone.name, progress: milestone.progress, type: "dialog", location:"story" });
        
        if (noteUpdate == true) {
          console.log("noteUpdated");
          let list2 = this.af.list('/userList/'+this.key+'/userLogs'+'/noteUpdate');
          list2.push({ time: Date(), name: milestone.name, progress: milestone.progress, updatedNotes: milestone.notes,location: "story"});
        }
      // this.userChecklist.update('Milestone'+ this.selectedMilestone.id, { progress: this.percent });
    
     
        


      });


    let list = this.af.list('/userList/'+this.key+'/userLogs'+'/openDialog');
    list.push({ name: milestone.name, time: Date(),location: "story"} );
   
  }


    public openShare(milestone:Milestone) {
    this.dialogsService
      .shareConfirm(milestone, this.parentInfo,this.childInfo,this.viewContainerRef)
      .subscribe(res => {
        this.refreshPage(res);
      });
   
  }

   public openAch(report:Report) {
      
    this.achDialogsService
      .confirm(report, this.viewContainerRef)
      .subscribe(res => this.directPage(res));
  }

 //  public () {

 //   console.log(this.afAuth.authState);
 //   this.userID = this.afAuth.authState;


 //   this.userAccount = this.af.list('/userList',{
 //     query: {
 //       orderByChild: 'userID',
 //       equalTo: this.userID.uid
 //     }
 //   });


 //   this.userAccount.subscribe(queriedItems => {
 //     this.key = queriedItems[0].$key;

 //     var child= this.af.list('/userList/'+queriedItems[0].$key+'/account/child',{
 //     query: {
 //       orderByChild: 'name',
      
 //     }
 //   });
 //     child.subscribe(queriedItems => {
 //     this.childInfo = queriedItems[0];
 //     console.log( queriedItems[0].name);

 //   });


 //     var parent = this.af.list('/userList/'+queriedItems[0].$key+'/account/parent',{
 //     query: {
 //       orderByChild: 'name',
      
 //     }
 //   });
 //      parent.subscribe(queriedItems => {
 //     this.parentInfo = queriedItems[0];
 //          console.log(queriedItems[0].name);

 //   })


   

 //   });

   


 // }



  // public openShare(milestone:Milestone) {

  //    this.dialogsService
  //     .shareConfirm(milestone, this.viewContainerRef)
  //     .subscribe(res => {});

  // }

  
// public child : FirebaseListObservable<any[]>;
// public parent : FirebaseListObservable<any[]>;
// public childInfo: any;
// public parentInfo:any;

  public refreshPage(res:any) {
    if (res == true){



    if(this.page.milestoneID > 0){
      this.checklistSubject.next(this.page.milestoneID);

      console.log("refreshpage");
      this.showMilestone = true;
      }
    else{
      this.showMilestone = false;
      }


    }

    // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
    //this.getReport().then(AchReport => this.tempReport = AchReport);//refresh the report if any change is made
  }


  public directPage(res:any) {
    if (res == true){
      this.setPage(3);
    }
    else {
      this.setPage(1);

    }
  
  }


  // public openDialog(Number:number):void {
  //   this.milestoneService.getMilestone(Number).then(milestone => this.open(milestone));
  // };

 
  //public selectedMilestone: Milestone;
  public result: any;



  /*slider*/

  public x:number = 5;
  public y:number = 2;
  public max:number = 10;
  public rate:number = 0;
  public isReadonly:boolean = false;
  public overStar:number;
  public percent:number;
 
  public ratingStates:any = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
 
  public hoveringOver(value:number):void {
    this.overStar = value;
    this.percent = 10 * value ;
    console.log("hoveringOver:",value);
  };
 
  public resetStar():void {
    this.overStar = 0;
  }

  public slideOn(value:number):void {
    var day = new Date();
    this.overStar = value;
    //this.rate = value;
    this.percent = value;
    console.log("percent:",this.percent)

    /*Update Progress*/
    this.userChecklist.update('Milestone'+ this.selectedMilestone.id, { progress: this.percent ,lastUpdate: day.toDateString()});
    /*Log Progress*/
    let list = this.af.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
    list.push({ time: Date(), name: this.selectedMilestone.name, progress: this.percent });


    
  };

  public clickOn(value:number):void {
    var day = new Date();
    this.overStar = value;
    //this.rate = value;
    this.percent = 10 * value;

    /*Update Progress*/
    this.userChecklist.update('Milestone'+ this.selectedMilestone.id, { progress: this.percent ,lastUpdate: day.toDateString()});
    /*Log Progress*/
    let list = this.af.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
    list.push({ time: Date(), name: this.selectedMilestone.name, progress: this.percent });


    
  };

  public generatePDF (milestone:any) {

    console.log("generate",milestone.id);


    var array:any[];
    var met = 45;
    var inProgress = met+ 10;
    
    const key1 = new Promise((resolve, reject) => {

      this.userAccount = this.af.list('/userList',{

        query: {
          orderByChild: 'userID',
          equalTo: this.userID
        }
      });

      this.userAccount.subscribe(queriedItems => {
        this.key = queriedItems[0].$key;
        resolve(queriedItems[0].$key);
        console.log("key",queriedItems[0].$key);
      })
    });




    key1.then((res) =>{


      // var templist1 = this.af.list('/userList/'+res+'/Checklist/', {

      //   query: {
      //     orderByChild: 'progress',
      //     limitToLast:34
      //   }
      // }).take(1);

      var imgParent = new Image;
      imgParent.crossOrigin = "";  // for demo as we are at different origin than image
      imgParent.src = "../../assets/images/parentprofile.jpg";  // some random imgur image


        console.log("start");
        

        var doc = new jsPDF();   
        var date = new Date();
        // var imgData = ""
        doc.setFontSize(12);
        doc.text(20, 20, 'Milestone progress ' +' | ' + date.toDateString());
        doc.line(20, 24, 200, 25);
        // doc.addImage(imgData1, 'JPEG', 10, 10, 50, 50);
        doc.setFontSize(16);
        // doc.text(20, 35, this.childInfo.name + ' has progressed in '+ this.tempReport.numRecord +' milestones!');
        doc.text(20, 30, this.parentInfo.name + ' wants to share ' + this.childInfo.name + "'s milestone with you");
        doc.setFontSize(20);
        doc.text(20, 42, this.childInfo.name  + ' is ' + this.selectedMilestone.progress + "% towards this milestone!");
         doc.setFontSize(16);
        doc.text(20, 52, "#"+ milestone.id + " " + milestone.name);
        doc.setFontSize(10);
        doc.text(20, 60, milestone.notes);

        // doc.text(20, 68, "Milestone detail");

        imgParent.onload = function() {
          // doc.addImage(this, 10, 55);
          console.log("parentimage");
          if (milestone.video != true) {
            var imgMilestone = new Image;
            imgMilestone.crossOrigin = "";  // for demo as we are at different origin than image
            imgMilestone.src = milestone.img;  // some random imgur image


           imgMilestone.onload = function() {
             console.log("milestoneimage");
              doc.addImage(this, 20, 68);
              // var string = doc.output('datauristring');
              // var iframe = "<iframe width='100%' height='100%' src='" + string + "'></iframe>"
              // var x = window.open();
              // x.document.open();
              // x.document.write(iframe);
              // x.document.close();
              console.log("novideo");
              doc.save('Milestone progress'+ "|" + date.toDateString()+'.pdf');
              // doc.save('Report'+ date.toDateString()+'.pdf');
            }
          }
          else {
            console.log("video");
            doc.text(20, 68, milestone.url);
            doc.save('Milestone progress'+ "|" + date.toDateString()+'.pdf');
              // var string = doc.output('datauristring');
              // var iframe = "<iframe width='60%' height='100%' src='" + string + "'></iframe>"
              // var x = window.open();
              // x.document.open();
              // x.document.write(iframe);
              // x.document.close();

          }
        }



      });

    

    
  }



  /*record update*/


  public checklistLength: number = 34;

  public tempReport: Report = AchReport;

  public getReport(): Promise<Report> {
    
    return Promise.resolve(AchReport);
  }

public linkToShare = 'https://bridget-ma.com';
// public imageUrl = 'https://avatars2.githubusercontent.com/u/10674541?v=3&s=200';

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight(null);
  // }
  // private audioLoad() {
  //   this.el.nativeElement.load();
  // }

  // ngAfterViewInit() {
  //    this.rd.invokeElementMethod(this.el.nativeElement,'load');
  // }

  
}


// @Directive({
//   selector: '[myAudio]'
// })
// export class AudioDirective {
//   constructor(private el: ElementRef) { }
  
//   private audioLoad() {
//     this.el.nativeElement.load();
//   }
// }
