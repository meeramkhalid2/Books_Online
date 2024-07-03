import { Routes } from '@angular/router';


export const ChildrenRoutes: Routes = [
    {path: '', loadComponent: ()=> import('./category-list/category-list.component').then((c)=>c.CategoryListComponent)},
 
];

