import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { ProductPage } from './pages/product.page';
import { NotFoundPage } from './pages/not-found.page';
import { ContactPage } from './pages/contact.page';
import { MapsPage } from './pages/maps.page';

export const MainRouting: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'product',
        component: ProductPage
    }, 
    {
        path: 'contact',
        component: ContactPage
    },
    {
        path: 'resellers',
        component: MapsPage
    },
    {
        path: '**',
        component: NotFoundPage
    },  
];
