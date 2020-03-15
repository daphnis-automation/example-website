import { MetaLink } from './meta-link';
import { MetaProperty } from './meta-property';
import { MetaName } from './meta-name';

export class Metadata {
    named: MetaName[];
    properties: MetaProperty[];
    links: MetaLink[];
}
