import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RatingModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Page } from './page';
import { PageService } from './page.service';
 
@Component({

  templateUrl: './storybook.html'
})

export class StorybookComponent implements OnInit {
  

  public totalItems:number = 400;
  public currentPage:number = 1;
  public pages: Page[];
  public selectedPage: Page;
 
  public maxSize:number = 10;
  public bigTotalItems:number = 310;
  public bigCurrentPage:number = 1;
 
  public setPage(pageNo:number):void {
    this.currentPage = pageNo;
    this.pageService.getPage(pageNo).then(page => this.onSelect(page));
  };
 
  public pageChanged(event:any):void {
    console.log('Page changed to: ' + event.page);
    console.log('Number items per page: ' + event.itemsPerPage);
    this.pageService.getPage(event.page).then(page => this.onSelect(page));
  };

  constructor(
    private router: Router,
    private pageService: PageService) { }

  getPages(): void {
    this.pageService.getPages().then(pages => this.pages = pages);
  }

  ngOnInit(): void {
    this.getPages();
    this.setPage(1);
  }

  onSelect(page: Page): void {
    this.selectedPage = page;
    this.rate = page.progress;
    this.overStar = page.progress;
    this.percent = 100 * (page.progress / this.max);

  }

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
    this.percent = 100 * (value / this.max);
  };
 
  public resetStar():void {
    this.overStar = void 0;
  }

  public clickOn(value:number):void {
    this.overStar = value;
    //this.rate = value;
    this.percent = 100 * (value / this.max);
    this.selectedPage.progress = value;
  };


}