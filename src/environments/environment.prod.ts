import { version } from '../../package.json';
import { buildDateTime } from '../../build-info.json';
import { buildId } from '../../build-info.json';

export const environment = {
  production: true,
  ENV: '-- prod --',
  AUTHOR: 'KubaMiszcz (c) 2020 ',
  VERSION: version,
  BUILDDATETIME: buildDateTime,
  BUILDDID: buildId,
  endpoint: 'https://prod.example.com',
};
