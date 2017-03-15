import { AmazingMePage } from './app.po';

describe('amazing-me App', function() {
  let page: AmazingMePage;

  beforeEach(() => {
    page = new AmazingMePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
