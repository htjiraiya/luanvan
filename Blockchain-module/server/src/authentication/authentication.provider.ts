import { tbl_xavien } from '../xavien/xavien.entity';
export const authenticationProvider = [
  {
    provide: 'AUTHENTICATION_REPOSITORY',
    useValue: [tbl_xavien],
  },
];
