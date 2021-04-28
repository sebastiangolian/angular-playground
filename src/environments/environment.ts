declare let require: any;
export const environment = {
  name: 'dev',
  version: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/common'],
  title: 'angular-playground',
  production: false,
  backendDelay: 100,
  httpRetry: 0,
  lazyLoadingImageSaveInMemory: true,
  apiEndpoint: 'mock',
  messageDismissible: false,
  messageSuccessTimeout: 3000,
  messageInfoTimeout: 5000,
  messageAnotherTimeout: 1000000,
};
