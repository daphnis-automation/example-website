import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BodyComponent } from 'src/app/models/cms/body-component';
import { CmsService } from 'src/app/services/cms.service';
import { LayoutService } from 'src/app/services/layout.service';
import { BodyType } from 'src/app/models/cms/body-type';
import { Sections } from 'src/app/models/cms/sections';
import { config } from 'rxjs';
import { Hero } from 'src/app/models/cms/hero';
import { element } from 'protractor';

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
    numberofButtons: Array<number> = [];
    nameofColors: Array<Array<string>> = new Array();
    nameofPictures: Array<Array<string>> = new Array();
    currentPhoto: number;

    
    
    
 
    constructor(
        private cmsService: CmsService,
        private layoutService: LayoutService) { 
    }

    changePhoto(mediaSeqNo) {
        this.currentPhoto = mediaSeqNo;
    }
    
    
    async ngOnInit() {
        console.log('HomePage.ngOnInit()');
        var result = await this.cmsService.getSitePage('home-page');
        this.layoutService.loadMetaData(result);
        this.heroImageUrl = result.hero.media[0].asset.src;

        this.currentPhoto = 0;
        

        let index = 0;
        result.sections[4].value.forEach(element => {
            this.nameofColors[index] = new Array<string>();
            if(element.options === undefined)
            {
                this.numberofButtons.push(0)
            }
            else
            {
                this.numberofButtons.push(element.options.mediaSwitches.length)                
                element.options.mediaSwitches.forEach( item => {
                    console.log(item.color)
                    this.nameofColors[index].push(item.color);
                })
            }
            index++;
        });

        index = 0;
        result.sections[4].value.forEach(element => {
            this.nameofPictures[index] = new Array<string>();
            if(element.media.length > 1){
                element.media.forEach(item => {
                    this.nameofPictures[index].push(item.asset.src)
                })
            }
            else 
            {
                this.nameofPictures[index].push(element.media[0].asset.src)
            }
            index++;
        })

        
        result.hero.alias === 'home-herobanner' ? this.bodyEntrance=result.hero : this.bodyEntrance = null;
        this.bodyQuickStart = result.sections.find(c=>c.type === BodyType.Quickstart && c.alias === 'home-quickstart');
        this.bodyCardList = result.sections.find(c=>c.type === BodyType.CardList && c.alias === 'home-categories');
        this.bodyContentList = result.sections.find(c=>c.type === BodyType.ContentList && c.alias === 'home-banner');
        this.bodyCampaignList = result.sections.find(c=>c.type === BodyType.CampaignList && c.alias === 'home-campaigns');
        this.bodyProductCardList= result.sections.find(c=>c.type === BodyType.ProductCardList && c.alias === 'home-products');
    }

    
    

}

