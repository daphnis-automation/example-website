import { Author } from './author';
import { Asset } from './asset';
import { Metadata } from './metadata';
import { BodyComponent } from './body-component';

export class SitePage {
    id: string;
    alias: string;
    languageCode: string;
    version: string;
    state: string;
    updatedOn: Date;
    updatedBy: Author;
    title: string;
    assets: Asset[];
    metadata: Metadata;
    bodyComponents: BodyComponent[];
}
