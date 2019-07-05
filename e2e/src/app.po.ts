import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/')
  }

  getPageTitle() {
    return browser.getTitle()
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getHomeLink() {
    return element(by.linkText("home")).getText();
  }

  getLinkWithMovie() {
    return element(by.partialLinkText("movie")).getText();
  }

  navigateMenu() {
    element(by.linkText("home")).click()
    browser.getTitle().then(val => console.log(val))
    browser.navigate().back();
    element(by.linkText("movie")).click()
    browser.getTitle().then(val => console.log(val))
    browser.navigate().back();
    element(by.linkText("test")).click()
    browser.getTitle().then(val => console.log(val))
  }
}
