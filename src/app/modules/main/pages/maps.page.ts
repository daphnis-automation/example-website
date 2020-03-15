import { Component, OnInit, ViewEncapsulation, ViewChild, Inject, ElementRef, AfterViewInit } from '@angular/core';
import { CmsService } from 'src/app/services/cms.service';
import { LayoutService } from 'src/app/services/layout.service';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';


@Component({
    selector: 'maps-page',
    templateUrl: './maps.page.html',
    styleUrls: ['./maps.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MapsPage implements OnInit, AfterViewInit  {
    @ViewChild("mapRef") mapRef: ElementRef;

    injected:boolean = false;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private cmsService: CmsService,
        private layoutService: LayoutService) { 
    }

    async ngOnInit() {
        console.log('MapsPage.ngOnInit()');
        var result = await this.cmsService.getSitePage('maps-page');
        this.layoutService.loadMetaData(result);
    }

    ngAfterViewInit() {
        var s = this.document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://maps.googleapis.com/maps/api/js?key=" + environment.GmbMapsKey;
        this.document.body.appendChild(s);

        setTimeout(() => {
            this.injected = true;
        }, 200);
    }
     showMap() {
        console.log(this.mapRef.nativeElement);
        const location = { lat: 28.5355, lng: 77.3910 };
        var options = {
            center: location,
            zoom: 8
        }

        const map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarket(map, location);
      }
      addMarket(pos, map) {
          return new google.maps.Marker({
              position: pos,
              map: map,
          });
      }
}
