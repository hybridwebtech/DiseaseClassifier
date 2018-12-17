import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HypertensionComponent } from './components/hypertension/hypertension.component';

import { KidneydiseaseComponent } from './components/kidneydisease/kidneydisease.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'hypertension',
    component: HypertensionComponent
  },
  {
    path: 'kidneydisease',
    component: KidneydiseaseComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
