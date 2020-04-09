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
    selector: 'product-page',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ProductPage implements OnInit  {

    numberofBicyle: number = 1;
    
    
 
    constructor(
        private cmsService: CmsService,
        private layoutService: LayoutService) { 
    }

    
    
    async ngOnInit() {
     }

    
    

}

