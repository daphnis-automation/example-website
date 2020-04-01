import { Author } from './author';
import { Asset } from './asset';
import { Metadata } from './metadata';
import { BodyComponent } from './body-component';
import { HasErrorState } from '@angular/material/core/common-behaviors/error-state';
import { Hero } from './hero';
import { Sections } from './sections';

export class SitePage {
    id: string;
    alias: string;
    languageCode: string;
    version: string;
    state: string;
    updatedOn: Date;
    updatedBy: Author;
    title: string;
    metadata: Metadata;
    hero: Hero;
    sections: Sections[];
}
