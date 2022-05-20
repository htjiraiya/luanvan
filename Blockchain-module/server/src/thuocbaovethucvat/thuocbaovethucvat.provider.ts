import { tbl_thuocbaovethucvat } from './thuocbaovethucvat.entity';
export const thuocbaovethucvatProvider = [
  {
    provide: 'THUOCBAOVETHUCVAT_REPOSITORY',
    useValue: tbl_thuocbaovethucvat,
  },
];
