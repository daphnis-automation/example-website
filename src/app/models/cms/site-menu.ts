import { Author } from './author';
import { MenuItem } from './menu-item';

export class SiteMenu {
    id: string;
    alias: string;
    languageCode: string;
    version: string;
    state: string;
    updatedOn: Date;
    updatedBy: Author;
    menuItems: MenuItem[];
}