import { tbl_thuonglai } from './thuonglai.entity';
export const thuonglaiProvider = [
  {
    provide: 'THUONGLAI_REPOSITORY',
    useValue: tbl_thuonglai,
  },
];
