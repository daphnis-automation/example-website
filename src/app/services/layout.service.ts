import { Injectable, LOCALE_ID, Inject, enableProdMode, EventEmitter } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Meta, Title } from '@angular/platform-browser';
import { SitePage } from '../models/cms/site-page';

@Injectable()
export class LayoutService {
    constructor(
                @Inject(LOCALE_ID) private languageCode: string, 
                @Inject(DOCUMENT) private document: Document,
                private metaTagService: Meta,
                private titleService: Title) {
        console.log('LayoutService.constructor()');
    }

    loadMetaData(sitePage: SitePage): void {
        console.log('LayoutService.loadMetaData()')
        
        this.document.documentElement.lang = this.languageCode; 
        this.titleService.setTitle(sitePage.title);

        //TODO!
        this.metaTagService.addTags([
            { name: 'keywords', content: sitePage.metadata.named.find(c=>c.name === 'keywords').content },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Daphnis Automation' },
            // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: new Date().toDateString(), scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);        
    }

    _mapsInjected: boolean = false;
    injectGoogleMaps(withKey: string): void {
        if (this._mapsInjected) return;

        //To prevent duplicate injection
        var s = this.document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://maps.googleapis.com/maps/api/js?key=" + withKey;
        this.document.body.appendChild(s);

        this._mapsInjected = true;
    }

}