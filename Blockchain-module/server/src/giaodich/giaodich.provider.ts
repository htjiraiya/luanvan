import { tbl_giaodich } from './giaodich.entity';
export const giaodichProvider = [
  {
    provide: 'GIAODICH_REPOSITORY',
    useValue: tbl_giaodich,
  },
];
