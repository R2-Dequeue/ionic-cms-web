import { IonicCmsWebPage } from './app.po';

describe('ionic-cms-web App', () => {
  let page: IonicCmsWebPage;

  beforeEach(() => {
    page = new IonicCmsWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
