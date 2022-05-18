import { tbl_xavien } from './xavien.entity';
export const xavienProvider = [
  {
    provide: 'XAVIEN_REPOSITORY',
    useValue: tbl_xavien,
  },
];
