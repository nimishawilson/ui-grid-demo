import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'detailed-view',
    loadComponent: () =>
      import('./pages/detailed-view/detailed-view.component').then(
        m => m.DetailedViewComponent
      )
  },
  {
    path: 'compare-view',
    loadComponent: () =>
      import('./pages/compare-view/compare-view.component').then(
        m => m.CompareViewComponent
      )
  },
  {
    path: '',
    redirectTo: 'detailed-view',
    pathMatch: 'full'
  }
];