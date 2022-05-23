import { Inject, Injectable } from '@nestjs/common';
import { tbl_gionglua } from './gionglua.entity';

@Injectable()
export class GiongluaService {

    constructor(
        @Inject('GIONGLUA_REPOSITORY')
        private readonly gionglua: tbl_gionglua
    ) {}

}
