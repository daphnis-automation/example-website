import { Asset } from './asset';
import { Link } from './link';
import { SafeHtml } from '@angular/platform-browser';

export class ComponentItem {
    title: string;
    assets: Asset[];
    caption: string;
    description: string;
    link: Link;
    config: any;

    get firstAsset(): Asset {
        if (this.assets) return this.assets[0];
        return null;
    }
}
