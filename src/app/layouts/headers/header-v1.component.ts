import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CmsService } from '../../services/cms.service';

@Component({
    selector: 'app-header-v1',
    templateUrl: './header-v1.component.html',
    styleUrls: ['./header-v1.component.scss']
})
export class HeaderV1Component implements OnInit {
    private toggled= false;

    @Output() toggleLeftSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private cmsService: CmsService) { 
        console.log('HeaderV1Component.constructor()');
    }

    async ngOnInit(): Promise<void> {
        console.log('HeaderV1Component.ngOnInit()');
    }

    btnShowMenuClicked(): void {
        console.log('HeaderV1Component.btnShowMenuClicked()')
        this.toggled = !this.toggled;
        this.toggleLeftSideBar.emit(this.toggled);
    }

}
