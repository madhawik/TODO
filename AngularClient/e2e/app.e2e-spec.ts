import { AngularClentPage } from './app.po';

describe('angular-clent App', function() {
  let page: AngularClentPage;

  beforeEach(() => {
    page = new AngularClentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
