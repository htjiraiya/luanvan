import { Inject, Injectable } from '@nestjs/common';
import { tbl_gionglua } from 'src/gionglua/gionglua.entity';

@Injectable()
export class LichmuavuService {
    constructor(
        @Inject('LICHMUAVU_REPOSITORY')
        private readonly gionglua: tbl_gionglua
    ) {}
}
