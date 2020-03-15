import { KeyValueModel } from './key-value-model';
import { Asset } from './asset';

export class MenuItem {
    id: string;
    seqNo: Number;
    title: String;
    alt: String;
    rel: String;
    type: String;
    action: String;
    target: String;
    asset: Asset;
    config: KeyValueModel[];
    children: MenuItem[];
}