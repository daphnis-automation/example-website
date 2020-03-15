import { Component, OnInit } from '@angular/core';
import { SiteMenu } from 'src/app/models/cms/site-menu';
import { CmsService } from 'src/app/services/cms.service';

@Component({
    selector: 'app-menu-sidebar-v1',
    templateUrl: './menu-sidebar-v1.component.html',
    styleUrls: ['./menu-sidebar-v1.component.scss']
})
export class MenuSidebarV1Component implements OnInit {
    public siteMenu: SiteMenu;

    constructor(private cmsService: CmsService) { 
    }
    
    async ngOnInit(): Promise<void> {
        console.log('MenuSidebarV1Component.ngOnInit()');
        this.siteMenu = await this.cmsService.getSiteMenu('top-menu');
    }
}