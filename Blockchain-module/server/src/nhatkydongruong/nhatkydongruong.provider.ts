import { tbl_nhatkydongruong } from "./nhatkydongruong.entity";

export const nhatkydongruongProvider = [
    {
        provide: 'NHATKYDONGRUONG_REPOSITORY',
        useValue: tbl_nhatkydongruong
    }
]