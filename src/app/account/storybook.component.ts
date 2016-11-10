import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Page } from './page';
import { PageService } from './page.service';
 
@Component({

  templateUrl: './storybook.html'
})

export class StorybookComponent implements OnInit {
  public totalItems:number = 100;
  public currentPage:number = 1;
  public pages: Page[];
  public selectedPage: Page;
 
  public maxSize:number = 10;
  public bigTotalItems:number = 175;
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

  }


}