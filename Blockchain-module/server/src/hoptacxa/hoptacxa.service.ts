import { Inject, Injectable } from '@nestjs/common';
import { tbl_hoptacxa } from './hoptacxa.entity';

@Injectable()
export class HoptacxaService {

    constructor(
        @Inject('HOPTACXA_REPOSITORY')
        private readonly hoptacxa: typeof tbl_hoptacxa
    ) {}
}
