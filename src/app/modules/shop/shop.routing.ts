import { Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found.page';
import { CategoriesPage } from './pages/categories.page';

export const ShopRouting: Routes = [
    {
        path: 'categories',
        component: CategoriesPage
    },
    {
        path: 'cat/:cat_alias',
        component: CategoriesPage
    },
    // {
    //     path: 'product/:prod_alias',
    //     component: MapsPage
    // },
    {
        path: '**',
        component: NotFoundPage
    }    
];
