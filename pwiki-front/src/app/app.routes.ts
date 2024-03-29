import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { WikiComponent } from './modules/portfolio/pages/wiki/wiki.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wiki',
    component: WikiComponent,
  },
];
