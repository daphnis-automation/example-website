import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShopRouting } from './shop.routing';
import { MaterialPart1Module } from 'src/app/shared/material-part1.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NotFoundPage } from './pages/not-found.page';
import { CategoriesPage } from './pages/categories.page';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FlexLayoutModule,
        MaterialPart1Module,
        RouterModule.forChild(ShopRouting),
    ],
    declarations: [
        CategoriesPage,
        NotFoundPage
    ],
    providers: [
    ],
    entryComponents: [
        // MaintainUnitDialog
    ]
})

export class ShopModule {
    constructor() {
        console.log('ShopModule.constructor()');
    }
}
