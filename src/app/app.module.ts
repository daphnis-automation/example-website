import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'; //NoopAnimationsModule,
import { HeaderV1Component } from './layouts/headers/header-v1.component';
import { FooterV1Component } from './layouts/footers/footer-v1.component';
import { LayoutService } from './services/layout.service';
import { CmsService } from './services/cms.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuTopV1Component } from './layouts/menus/menu-top-v1.component';
import { LandingLayoutComponent } from './layouts/landing-layout.component';
import { MaterialPart1Module } from './shared/material-part1.module';
import { MenuSidebarV1Component } from './layouts/menus/menu-sidebar-v1.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule, //NoopAnimationsModule, 
    FlexLayoutModule,
    MaterialPart1Module,
  ],
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    HeaderV1Component,
    FooterV1Component,
    MenuTopV1Component,
    MenuSidebarV1Component
  ],
  //Declared services are single instances (they will be instatiated once!)
  providers: [
    LayoutService,
    CmsService  
  ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { 
    constructor() {
      console.log('AppModule.constructor()');
    }    
}
