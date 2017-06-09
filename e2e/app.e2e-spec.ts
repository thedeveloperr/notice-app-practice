import { NoticeAppPracticePage } from './app.po';

describe('notice-app-practice App', () => {
  let page: NoticeAppPracticePage;

  beforeEach(() => {
    page = new NoticeAppPracticePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
