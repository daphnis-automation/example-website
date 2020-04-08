import { Component, OnInit } from '@angular/core';
import { CmsService } from '../../services/cms.service';
import { SiteMenu } from '../../models/cms/site-menu';

@Component({
    selector: 'app-menu-top-v1',
    templateUrl: './menu-top-v1.component.html',
    styleUrls: ['./menu-top-v1.component.scss']
})
export class MenuTopV1Component implements OnInit {

    currentMenu: number;

    changeMenu(seqNo){
        this.currentMenu = seqNo;
        console.log(seqNo)
    }

    
    public siteMenu: SiteMenu;

    constructor(private cmsService: CmsService) { 
        console.log('MenuTopV1Component.constructor()');
    }

    async ngOnInit(): Promise<void> {
        console.log('MenuTopV1Component.ngOnInit()');
        this.siteMenu = await this.cmsService.getSiteMenu('top-menu');
        this.currentMenu = 0;
    }

}
