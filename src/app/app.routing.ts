import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingLayoutComponent } from './layouts/landing-layout.component';
import { MainModule } from './modules/main/main.module';

const routes: Routes = [
    {
        path: '', //Not defined modules should go to Main Module!
        component: LandingLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/main/main.module#MainModule' 
            }
        ]        
    },
    {
        path: 'shop', //Lets navigate to our Shop Module!
        component: LandingLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/shop/shop.module#ShopModule'
            }
        ]
    }    
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabled'
        })
    ],
    exports: [ 
        RouterModule 
    ]
})
export class AppRouting { 
    constructor() {
        console.log('AppRouting.constructor()');
    }
}
