import { BodyType } from './body-type';
import { Config } from './config';
import { Value } from './value';

export class Sections {
    seqNo: number;
    type: BodyType;
    alias: string;
    header: string;
    config: Config;
    value: Value[];
    
    //Ui Props.
    get firstValueItem(): Value {
        debugger;
        if (this.value )
            return this.value[0];
        return null;
    }
}