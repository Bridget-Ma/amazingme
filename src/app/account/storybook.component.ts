import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap';
import { Page } from './page';
// import { PageService } from './page.service';

import { Milestone } from './milestone';
import { MilestoneService } from './milestones.service';
import { CHECKLIST } from './checklist';

import { AchReport } from './report';
import { Report } from './report';

// import { MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';
import { DialogsService} from './dialog.service';
import { achDialogsService} from './achDialog.service';


import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';
import {Subject} from 'rxjs/Subject';
// todo: change to ng2-bootstrap
//import { ModalDirective } from '../../../node_modules/ng2-bootstrap/components/modal/modal.component';
 
@Component({

  templateUrl: './storybook.html'
})

export class StorybookComponent implements OnInit {

  //item: FirebaseObjectObservable<any>;
  // public pages: FirebaseListObservable<any[]>;

  
  

  public totalItems:number = 400;
  public currentPage:number = 1;

  public page: any;
  public selectedPage: Page;
  public pages: FirebaseListObservable<any[]>;
  public pageSubject: Subject<any>;

  public checklist: Milestone[];
  
  
  public selectedMilestone: Milestone;
  public showMilestone: boolean = true;
 
  public maxSize:number = 10;
  public bigTotalItems:number = 310;
  public bigCurrentPage:number = 1;
 

 
  

  constructor(
    af: AngularFire,
    private router: Router,
    // private pageService: PageService,
    private dialogsService: DialogsService,
    private milestoneService: MilestoneService,  
    private viewContainerRef: ViewContainerRef,
    private achDialogsService: achDialogsService,
    ) {

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
    
 
    // 
  }

  ngOnInit(): void {
    // this.getPages();
    
    // this.getReport().then(AchReport => this.reportUpdate(AchReport)); 

    this.getMilestones();
    this.setPage(1);
    this.countUpdateIteration().then(tempReport => this.openAch(tempReport));
  }

  public getMilestones(): void {
    this.milestoneService.getChecklist().then(checklist => this.checklist = checklist);
  };

  
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

  };
  
  

  
  

  onSelect(page): void {
    
    // this.pageSubject.next(eventPage); 
    // console.log("onselect:",this.page[0]);
    this.page = page;

    if(page.milestoneID > 0){
      this.milestoneService.getMilestone(this.page.milestoneID)
      .then(milestone => this.selectedMilestone = milestone)
      .then(selectedMilestone => this.defineStar(selectedMilestone));
      this.showMilestone = true;
    }
    else{
      this.showMilestone = false;
    }

    

    // this.milestoneService.getMilestone(this.selectedPage.milestoneID).then(milestone => this.selectedMilestone = milestone);
  }

  public defineStar(milestone:Milestone): void {
    this.rate = milestone.progress/10;
    this.overStar = milestone.progress/10;
    this.percent = milestone.progress;
    console.log("refresh on true");
  }

  /*dialog*/

   public open(milestone:Milestone) {
    this.dialogsService
      .confirm(milestone, this.viewContainerRef)
      .subscribe(res => this.refreshPage(res));
  }
    public openAch(report:Report) {
      
    this.achDialogsService
      .confirm(report, this.viewContainerRef)
      .subscribe(res => this.directPage(res));
  }


  public refreshPage(res:any) {
    if (res == true){

     if(this.selectedPage.milestoneID > 0){
      this.milestoneService.getMilestone(this.selectedPage.milestoneID)
      .then(milestone => this.selectedMilestone = milestone)
      .then(selectedMilestone => this.defineStar(selectedMilestone));
      this.showMilestone = true;
      
     }
     else{
      this.showMilestone = false;
     }
    }
    this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
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
  };
 
  public resetStar():void {
    this.overStar = 0;
  }

  public clickOn(value:number):void {
    this.overStar = value;
    //this.rate = value;
    this.percent = 10 * value;
    this.selectedMilestone.progress = this.percent;
    this.getReport().then(AchReport => this.reportUpdate(AchReport)); 
  };



  /*record update*/


  public checklistLength: number = 34;
  //public tempCount = [0,0,0];
  public tempReport: Report = AchReport;

  public getReport(): Promise<Report> {
    
    return Promise.resolve(AchReport);
  }

  public reportUpdate(report:Report): void {
    this.countUpdateIteration().then(tempReport => report = tempReport);
  }

  public countUpdateIteration(): Promise<Report> {
    this.tempReport = {
      numRecord: 0,
      numAchieved: 0,
      numPhotos: 0
  };

    for (let index = 0; index < this.checklistLength; index++) {
      this.milestoneService.getMilestone(index).then(milestone => this.countUpdate(milestone));
    }
    
    return Promise.resolve(this.tempReport);
    }

  public countUpdate(milestone:Milestone): Promise<Report> {
    if (milestone.progress > 0 ) {
        this.tempReport.numRecord += 1;
      }
    if (milestone.progress == 10 ) {
        this.tempReport.numAchieved += 1;
      }
    if (milestone.progress > 0 ) {
        this.tempReport.numPhotos += 1;
      }
    return Promise.resolve(this.tempReport);
  }

  
  /*modal*/

  // @ViewChild('childModal') public childModal:ModalDirective;
 
  // public showChildModal():void {
  //   this.childModal.show();
  // }
 
  // public hideChildModal():void {
  //   this.childModal.hide();
  // }


}