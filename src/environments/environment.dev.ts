import { version } from '../../build-info.json';
import { buildDateTime } from '../../build-info.json';
import { buildId } from '../../build-info.json';

export const environment = {
  production: false,
  ENV: '-- dev -- ',
  AUTHOR: 'KubaMiszcz (c) 2020 ',
  VERSION: version,
  BUILDDATETIME: buildDateTime,
  BUILDDID: buildId,
  endpoint: 'https://dev.example.com',
};
