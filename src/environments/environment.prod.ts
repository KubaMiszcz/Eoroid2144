import { version } from '../../package.json';
import { buildDateTime } from '../../build-info.json';

export const environment = {
  production: true,
  env: '-- prod --',
  AUTHOR: 'KubaMiszcz (c) 2020 ',
  VERSION: version,
  BUILDDATETIME: buildDateTime,
  endpoint: 'https://prod.example.com',
};
