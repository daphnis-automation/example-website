import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainRouting } from './main.routing';
import { MaterialPart1Module } from 'src/app/shared/material-part1.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoogleMapsModule } from '@angular/google-maps'


import { HomePage } from './pages/home.page';
import { ContactPage } from './pages/contact.page';
import { MapsPage } from './pages/maps.page';
import { NotFoundPage } from './pages/not-found.page';
import { ProductPage } from './pages/product.page';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        MaterialPart1Module,
        GoogleMapsModule,
        RouterModule.forChild(MainRouting),
    ],
    declarations: [
        HomePage,
        ContactPage,
        MapsPage,
        NotFoundPage,
        ProductPage
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
