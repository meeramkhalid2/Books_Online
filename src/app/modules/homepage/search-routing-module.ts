import { Routes } from '@angular/router';


export const ChildrenRoutes: Routes = [

    {path: '', loadComponent: ()=> import('./search-bar/search-bar.component').then((c)=>c.SearchBarComponent) },
   
];

