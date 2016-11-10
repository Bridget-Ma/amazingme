import { Page } from './page';
import { PAGES } from './pagelist';
import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  getPages(): Promise<Page[]> {
    return Promise.resolve(PAGES);
  }

  getPagesSlowly(): Promise<Page[]> {
    return new Promise<Page[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getPages());
  }

  getPage(id: number): Promise<Page> {
    return this.getPages()
               .then(pages => pages.find(page => page.id === id));
  }
}
