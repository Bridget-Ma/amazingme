import { Parent } from './people';
import { PARENT } from './parentInfo';
import { Injectable } from '@angular/core';





@Injectable()
export class ParentService {

  
  getParent(): Promise<Parent> {
    return Promise.resolve(PARENT);
  }

  // getPagesSlowly(): Promise<Page[]> {
  //   return new Promise<Page[]>(resolve =>
  //     setTimeout(resolve, 2000)) // delay 2 seconds
  //     .then(() => this.getPages());
  // }

  // getPage(id: number): Promise<Page> {
  //   return this.getPages()
  //              .then(pages => pages.find(page => page.id === id));
  // }
}

