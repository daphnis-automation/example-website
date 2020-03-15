import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'not-found-page',
    templateUrl: './not-found.page.html',
    styleUrls: ['./not-found.page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NotFoundPage implements OnInit  {
    constructor() { 
    }

    async ngOnInit() {
        console.log('NotFoundPage.ngOnInit()');
    }

}
