import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { WikiComponent } from './modules/portfolio/pages/wiki/wiki.component';
import { AdminProjectsComponent } from './modules/portfolio/components/admin-projects/admin-projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'wiki',
    component: WikiComponent,
  },
  {
    path: 'admin/wiki',
    component: AdminProjectsComponent,
  }
];
