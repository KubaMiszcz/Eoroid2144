import { version } from '../../package.json';
import { buildDateTime } from '../../build-info.json';

export const environment = {
  production: false,
  env: '-- dev -- ',
  AUTHOR: 'KubaMiszcz (c) 2020 ',
  VERSION: version,
  BUILDDATETIME: buildDateTime,
  endpoint: 'https://dev.example.com',
};
