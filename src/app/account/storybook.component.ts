import { Component,Directive, OnInit,ViewContainerRef, ViewChild, ElementRef, HostListener , Renderer} from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { Page } from './page';
// import { PageService } from './page.service';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
// import { CHECKLIST } from './checklist';

import { AchReport } from './report';
import { Report } from './report';

// import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { DialogsService} from './dialog.service';
import { achDialogsService} from './achDialog.service';


import {AngularFire, FirebaseObjectObservable,FirebaseListObservable,AuthProviders, AuthMethods} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
// todo: change to ng2-bootstrap
//import { ModalDirective } from '../../../node_modules/ng2-bootstrap/components/modal/modal.component';
 
@Component({

  templateUrl: './storybook.html'
})

export class StorybookComponent implements OnInit {

  @ViewChild('myAudio') el:ElementRef;


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
 
  public noteUpdate:boolean = false;

  public tempTimeOnPage: Date;
  

  constructor(
    public af: AngularFire,

    private router: Router,
    // private http: Http,
    // private pageService: PageService,
    private dialogsService: DialogsService,
    private milestoneService: MilestoneService,  
    private viewContainerRef: ViewContainerRef,
    private achDialogsService: achDialogsService,
    private rd: Renderer

    ) {

    af.auth.subscribe(auth => {
      console.log(auth);
      this.userID = auth.uid;

    });


/*page*/
    this.pageSubject = new Subject();
    this.pages = af.database.list('/Pagelist', {
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

    this.userAccount = af.database.list('/userList',{
      query: {
        orderByChild: 'userID',
        equalTo: this.userID
      }
    });

    this.userAccount.subscribe(queriedItems => {
      this.key = queriedItems[0].$key;
      this.userChecklist = af.database.list('/userList/'+queriedItems[0].$key+'/Checklist/',{
        query: {
          orderByChild: 'progress',
        }
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
      this.checklist = af.database.list('/userList/'+queriedItems[0].$key+'/Checklist/', {
        query: {
          orderByChild: 'id',
          equalTo: this.checklistSubject
        }
      });

      this.checklist.subscribe(queriedItems => {

        console.log("selectedMilestone: ", queriedItems[0]);
        this.selectedMilestone = queriedItems[0];
        this.defineStar(this.selectedMilestone);

        var templist1 = af.database.list('/userList/'+this.key+'/Checklist/', {
          query: {
            orderByChild: 'progress',
            equalTo: 0
          }
        });
        templist1.subscribe(queriedItems => {this.tempReport.numRecord = 34- queriedItems.length});

        var templist2 = af.database.list('/userList/'+this.key+'/Checklist/', {
          query: {
            orderByChild: 'progress',
            equalTo: 100
          }
        });
        templist2.subscribe(queriedItems => {this.tempReport.numAchieved = queriedItems.length});

      });

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

        
    // this.getPages();
    
    // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 

    // this.getMilestones();
    this.setPage(1);
    // this.countUpdateIteration().then(tempReport => this.openAch(tempReport));
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
    // this.onSelect(event.page);
    this.pageSubject.next(event.page);

    let list2 = this.af.database.list('/userList/'+this.key+'/userLogs'+'/navigation');
    list2.push({ time: Date(), page: event.page});
    // var x = document.getElementById("myAudio").;
    // this.loadAudio();
   


  };
  

  onSelect(page): void {
    
    // this.pageSubject.next(eventPage); 
    // console.log("onselect:",this.page[0]);
    this.page = page;

    if(page.milestoneID > 0){
      this.checklistSubject.next(page.milestoneID);
      // this.selectedMilestone = page.milestoneID;
      this.showMilestone = true;
    }
    else{
      this.showMilestone = false;
    }

    

    // this.milestoneService.getMilestone(this.selectedPage.milestoneID).then(milestone => this.selectedMilestone = milestone);
  }

  public defineStar(milestone:any): void {
    this.rate = milestone.progress/10;
    this.overStar = milestone.progress/10;
    this.percent = milestone.progress;
    console.log("refresh on true");
  }

  /*dialog*/

   public open(milestone:Milestone, noteUpdate:boolean) {


    this.dialogsService
      .confirm(milestone, this.viewContainerRef)
      .subscribe(res => {
        this.refreshPage(res);
        this.userChecklist.update('Milestone'+ milestone.id, { progress: milestone.progress });
        this.userChecklist.update('Milestone'+ milestone.id, { notes: milestone.notes, checkbox1: milestone.checkbox1, checkbox2: milestone.checkbox2,checkbox3: milestone.checkbox3,checkbox4: milestone.checkbox4});
        /*Log Progress*/
        let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
        list.push({ time: Date(), name: milestone.name, progress: milestone.progress, type: "dialog", location:"story" });
        
        if (noteUpdate == true) {
          console.log("noteUpdated");
          let list2 = this.af.database.list('/userList/'+this.key+'/userLogs'+'/noteUpdate');
          list2.push({ time: Date(), name: milestone.name, progress: milestone.progress, updatedNotes: milestone.notes,location: "story"});
        }
        


      });


    let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/openDialog');
    list.push({ name: milestone.name, time: Date(),location: "story"} );
   
  }

   public openAch(report:Report) {
      
    this.achDialogsService
      .confirm(report, this.viewContainerRef)
      .subscribe(res => this.directPage(res));
  }

  public refreshPage(res:any) {
    if (res == true){

     // if(this.page.milestoneID > 0){
     //  this.milestoneService.getMilestone(this.selectedPage.milestoneID)
     //  .then(milestone => this.selectedMilestone = milestone)
     //  .then(selectedMilestone => this.defineStar(selectedMilestone));
     //  this.showMilestone = true;
      
     // }
     // else{
     //  this.showMilestone = false;
     // }

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

  public clickOn(value:number):void {
    this.overStar = value;
    //this.rate = value;
    this.percent = 10 * value;

    /*Update Progress*/
    this.userChecklist.update('Milestone'+ this.selectedMilestone.id, { progress: this.percent });
    /*Log Progress*/
    let list = this.af.database.list('/userList/'+this.key+'/userLogs'+'/recordProgress');
    list.push({ time: Date(), name: this.selectedMilestone.name, progress: this.percent });

    
  };



  /*record update*/


  public checklistLength: number = 34;

  public tempReport: Report = AchReport;

  public getReport(): Promise<Report> {
    
    return Promise.resolve(AchReport);
  }


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
