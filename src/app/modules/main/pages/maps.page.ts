import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BodyComponent } from 'src/app/models/cms/body-component';
import { CmsService } from 'src/app/services/cms.service';
import { LayoutService } from 'src/app/services/layout.service';
import { BodyType } from 'src/app/models/cms/body-type';

@Component({
    selector: 'maps-page',
    templateUrl: './maps.page.html',
    styleUrls: ['./maps.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MapsPage implements OnInit  {
    heroImageUrl: string = '/assets/images/img-fill.png';
    bodyEntrance: BodyComponent;
    bodyCategories: BodyComponent;
    bodyBanner: BodyComponent;
    bodyCampaigns: BodyComponent;
 
    constructor(
        private cmsService: CmsService,
        private layoutService: LayoutService) { 
    }

    async ngOnInit() {
        console.log('MapsPage.ngOnInit()');
        var result = await this.cmsService.getSitePage('maps-page');
        this.layoutService.loadMetaData(result);
        
        this.bodyEntrance = result.bodyComponents.find(c=>c.type === BodyType.HtmlBlock);
        this.bodyCategories = result.bodyComponents.find(c=>c.type === BodyType.Component && c.alias === 'higlighed-categories');
        this.bodyBanner = result.bodyComponents.find(c=>c.type === BodyType.Component && c.alias === 'single-banner');
        this.bodyCampaigns = result.bodyComponents.find(c=>c.type === BodyType.Component && c.alias === 'campaigns' )
    }

}
