import { Injectable, LOCALE_ID, Inject, enableProdMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { SitePage } from '../models/cms/site-page';
import { HttpClient } from '@angular/common/http';
import { SiteMenu } from '../models/cms/site-menu';

@Injectable()
export class CmsService {
    private _apiUrl: string;
    private _headers = new Headers({ 'Accept-Language': this.userLanguage  });

    constructor(@Inject(LOCALE_ID) private userLanguage: string, private http: HttpClient) {
        console.log('CmsService.constructor() -- Now loading initials');
    }

    public getApiUrl(): string {
        if (!this._apiUrl)
            this._apiUrl = environment.cmsApiUrl;
        return this._apiUrl;
    }

    public getSitePage(alias: string): Promise<SitePage> {
        console.log('CmsService.getSitePage()');
        try {
            return this.http.get(this.getApiUrl() + "/assets/updated-home-page.json", {responseType: 'text'})
                .toPromise()
                .then((results) => {
                    return JSON.parse(results) as SitePage;
                });
        } catch(err) {
            console.log('ERROR: ', err);
        }
    }
    public getSiteMenu(alias: string): Promise<SiteMenu> {
        console.log('CmsService.getSiteMenu()');
        try {
            return this.http.get(this.getApiUrl() + "/assets/top-menu-updated.json", {responseType: 'text'})
                .toPromise()
                .then((results) => {
                    return JSON.parse(results) as SiteMenu;
                });
        } catch(err) {
            console.log('ERROR: ', err);
        }
    }

}