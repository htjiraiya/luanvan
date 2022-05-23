import { tbl_lichmuavu } from "./lichmuavu.entity";

export const lichmuavuProvider = [
    {
        provide: 'LICHMUAVU_REPOSITORY',
        useValue: tbl_lichmuavu
    }
]