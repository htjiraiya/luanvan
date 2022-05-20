import { tbl_lohang } from './lohang.entity';
export const lohangProvider = [
  {
    provide: 'LOHANG_REPOSITORY',
    useValue: tbl_lohang,
  },
];
