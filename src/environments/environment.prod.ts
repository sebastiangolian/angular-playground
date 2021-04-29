declare let require: any;
export const environment = {
  name: 'prod',
  version: require('../../package.json').version,
  angularVersion: require('../../package.json').dependencies['@angular/common'],
  title: 'angular-playground',
  production: true,
  backendDelay: 0,
  httpRetry: 0,
  lazyLoadingImageSaveInMemory: true,
  apiEndpoint: 'mock',
  messageDismissible: false,
  messageSuccessTimeout: 5000,
  messageInfoTimeout: 10000,
  messageAnotherTimeout: 15000,
};
