import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('---------- app test -----------------', () => {
  let page: AppPage = new AppPage();

  beforeAll(() => {
    page.navigateTo();
  });

  it('only view value in console', () => {
    page.getLinkWithMovie().then(val => console.log(val))
  });

  it('test menu', () => {
    page.clickHome()
    expect(page.getTitleText()).toEqual('HOME PAGE');
    page.back()
    page.clickMovie()
    expect(page.getTitleText()).toEqual('movies');
    page.back()
    page.clickTest()
    expect(page.getTitleText()).toEqual('test');
    page.back()
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
