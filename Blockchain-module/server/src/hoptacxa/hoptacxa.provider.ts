import { tbl_hoptacxa } from "./hoptacxa.entity";
export const hoptacxaProvider = [
    {
        provide: 'HOPTACXA_REPOSITORY',
        useValue: tbl_hoptacxa
    }
]