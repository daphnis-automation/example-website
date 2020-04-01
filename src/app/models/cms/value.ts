import { Asset } from './asset';
import { Link } from './link';
import { SafeHtml } from '@angular/platform-browser';
import { Config } from './config';
import { Media} from './media';
import { Options } from './options';

export class Value {
    title: string;
    assets: Asset[];
    caption: string;
    description: string;
    link: Link;
    config: Config;
    media: Media[];
    rel: string;
    label: string;
    url: string;
    content: string;
    price: string;
    previousPrice: number;
    options: Options;


    get firstAsset(): Asset {
        if (this.assets) return this.assets[0];
        return null;
    }
}
