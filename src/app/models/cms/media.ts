import { Author } from './author';
import { Asset } from './asset';
import { Metadata } from './metadata';
import { BodyComponent } from './body-component';
import { HasErrorState } from '@angular/material/core/common-behaviors/error-state';
import { Link } from './link';

export class Media {
    link: Link;
    asset: Asset;
    message: string;
    
}
