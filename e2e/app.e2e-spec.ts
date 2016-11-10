import { AngularMaterialTestPage } from './app.po';

describe('angular-material-test App', function() {
  let page: AngularMaterialTestPage;

  beforeEach(() => {
    page = new AngularMaterialTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
