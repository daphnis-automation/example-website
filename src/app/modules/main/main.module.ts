import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePage } from './pages/home.page';
import { MainRouting } from './main.routing';
import { MaterialPart1Module } from 'src/app/shared/material-part1.module';
import { ContactPage } from './pages/contact.page';
import { NotFoundPage } from './pages/not-found.page';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MapsPage } from './pages/maps.page';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        MaterialPart1Module,
        RouterModule.forChild(MainRouting),
    ],
    declarations: [
        HomePage,
        ContactPage,
        MapsPage,
        NotFoundPage
    ],
    providers: [
    ],
    entryComponents: [
        // MaintainUnitDialog
    ]
})

export class MainModule {
    constructor() {
        console.log('MainModule.constructor()');
    }
}
