import { Inject, Injectable } from '@nestjs/common';
import { tbl_nhatkydongruong } from './nhatkydongruong.entity';

@Injectable()
export class NhatkydongruongService {

    constructor(
        @Inject('NHATKYDONGRUONG_REPOSITORY')
        private readonly nhatkydongruong: tbl_nhatkydongruong
    ) {}

}
