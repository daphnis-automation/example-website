import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BodyComponent } from 'src/app/models/cms/body-component';
import { CmsService } from 'src/app/services/cms.service';
import { LayoutService } from 'src/app/services/layout.service';
import { BodyType } from 'src/app/models/cms/body-type';
import { Sections } from 'src/app/models/cms/sections';
import { config } from 'rxjs';
import { Hero } from 'src/app/models/cms/hero';


@Component({
    selector: 'contact-page',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ContactPage implements OnInit  {
    heroImageUrl: string = '/assets/images/img-fill.png';
    bodyEntrance: Hero;
    bodyQuickStart: Sections;
    bodyCardList: Sections;
    bodyContentList: Sections;
    bodyCampaignsList: Sections;
    bodyProductCardList: Sections;
 
    constructor(
        private cmsService: CmsService,
        private layoutService: LayoutService) { 
    }

    async ngOnInit() {
        console.log('ContactPage.ngOnInit()');
        var result = await this.cmsService.getSitePage('contact-page');
        this.layoutService.loadMetaData(result);
        
        result.hero.alias === 'home-herobanner' ? this.bodyEntrance=result.hero : this.bodyEntrance = null;
        this.bodyQuickStart = result.sections.find(c=>c.type === BodyType.Quickstart && c.alias === 'home-quickstart');
        this.bodyCardList = result.sections.find(c=>c.type === BodyType.CardList && c.alias === 'home-categories');
        this.bodyContentList = result.sections.find(c=>c.type === BodyType.ContentList && c.alias === 'home-banner');
        this.bodyCampaignsList = result.sections.find(c=>c.type === BodyType.CampaignList && c.alias === 'home-campaigns');
        this.bodyProductCardList= result.sections.find(c=>c.type === BodyType.ProductCardList && c.alias === 'home-products');
    }

}
