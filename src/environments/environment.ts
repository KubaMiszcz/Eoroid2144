// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { version } from '../../build-info.json';
// import { buildDateTime } from '../../build-info.json';
// import { buildId } from '../../build-info.json';

import buildInfo from '../../build-info.json';



export const environment = {
  production: false,
  ENV: '-- local -- ',
  AUTHOR: 'KubaMiszcz (c) 2020 ',
  VERSION: buildInfo.version,
  BUILDDATETIME: buildInfo.buildDateTime,
  BUILDDID: buildInfo.buildId,
  endpoint: 'https://dev.example.com',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
