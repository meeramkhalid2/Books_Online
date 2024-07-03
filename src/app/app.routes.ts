import { Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
        (m) => m.ModModule
      ),
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./modules/homepage/search.module').then((m) => m.SearchModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },
];
