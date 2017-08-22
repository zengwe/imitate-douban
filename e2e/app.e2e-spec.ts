import { ImitateDoubanPage } from './app.po';

describe('imitate-douban App', () => {
  let page: ImitateDoubanPage;

  beforeEach(() => {
    page = new ImitateDoubanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
