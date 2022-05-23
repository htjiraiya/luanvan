import { tbl_gionglua } from "./gionglua.entity";

export const giongluaProvider = [
    {
        provide: 'GIONGLUA_REPOSITORY',
        useValue: tbl_gionglua,
    },
]