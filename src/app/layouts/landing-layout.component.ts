import { ChangeDetectorRef, Component, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'landing-layout',
    templateUrl: 'landing-layout.component.html',
    styleUrls: [ 'landing-layout.component.scss' ],
    encapsulation: ViewEncapsulation.None
}) 
export class LandingLayoutComponent implements OnDestroy, AfterViewInit {
    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        console.log('LandingLayoutComponent.constructor()');
    }
    ngOnDestroy(): void {
        console.log('LandingLayoutComponent.ngOnDestroy()');
    }
    ngAfterViewInit() {
        console.log('LandingLayoutComponent.ngAfterViewInit()');
    } 
  
}
