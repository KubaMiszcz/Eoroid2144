// import { version } from '../../build-info.json';
// import { buildDateTime } from '../../build-info.json';
// import { buildId } from '../../build-info.json';

import buildInfo from '../../build-info.json';

export const environment = {
  production: true,
  ENV: '-- local -- ',
  AUTHOR: 'KubaMiszcz (c) 2020 ',
  VERSION: buildInfo.version,
  BUILDDATETIME: buildInfo.buildDateTime,
  BUILDDID: buildInfo.buildId,
  endpoint: 'https://dev.example.com',
};
