import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BodyComponent } from 'src/app/models/cms/body-component';
import { CmsService } from 'src/app/services/cms.service';
import { LayoutService } from 'src/app/services/layout.service';
import { BodyType } from 'src/app/models/cms/body-type';
import { Sections } from 'src/app/models/cms/sections';
import { config } from 'rxjs';
import { Hero } from 'src/app/models/cms/hero';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit  {
    heroImageUrl: string = '/assets/images/img-fill.png';
    bodyEntrance: Hero;
    bodyQuickStart: Sections;
    bodyCardList: Sections;
    bodyContentList: Sections;
    bodyCampaignList: Sections;
    bodyProductCardList: Sections;
    currentPhoto: boolean;
    currentPhoto2: boolean;
    currentPhoto3: boolean;
    currentPhoto4: boolean;
    
 
    constructor(
        private cmsService: CmsService,
        private layoutService: LayoutService) { 
    }

    /* changePhoto(currentPhoto) {
        this.currentPhoto = true;
    } */
    changePhoto() {
        this.currentPhoto = true;
    }

    changePhoto2() {
        this.currentPhoto = false;
    }

    changePhoto3() {
        this.currentPhoto2 = true;
    }

    changePhoto4() {
        this.currentPhoto2 = false;
    }

    changePhoto5() {
        this.currentPhoto3 = true;
    }
    changePhoto6() {
        this.currentPhoto3 = false;
    }
    changePhoto7() {
        this.currentPhoto4 = true;
    }
    changePhoto8() {
        this.currentPhoto4 = false;
    }
    
    
    async ngOnInit() {
        console.log('HomePage.ngOnInit()');
        var result = await this.cmsService.getSitePage('home-page');
        this.layoutService.loadMetaData(result);
        /* this.buttonColors.push(result.sections[result.sections.length - 1].value[0].media[0].asset.color);

        console.log(this.buttonColors); */

        /* changePhoto() {
            var result = this.cmsService.getSitePage('home-page');
            this.actualPhoto = result.sections[4].value[0].media[0].asset.src;
        } */
        this.currentPhoto = true;
        this.currentPhoto2 = true;
        this.currentPhoto3 = true;
        this.currentPhoto4 = true;


        result.hero.alias === 'home-herobanner' ? this.bodyEntrance=result.hero : this.bodyEntrance = null;
        this.bodyQuickStart = result.sections.find(c=>c.type === BodyType.Quickstart && c.alias === 'home-quickstart');
        this.bodyCardList = result.sections.find(c=>c.type === BodyType.CardList && c.alias === 'home-categories');
        this.bodyContentList = result.sections.find(c=>c.type === BodyType.ContentList && c.alias === 'home-banner');
        this.bodyCampaignList = result.sections.find(c=>c.type === BodyType.CampaignList && c.alias === 'home-campaigns');
        this.bodyProductCardList= result.sections.find(c=>c.type === BodyType.ProductCardList && c.alias === 'home-products');
    }

    
    

}

