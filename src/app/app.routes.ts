import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HypertensionComponent } from './components/hypertension/hypertension.component';

import { KidneyComponent } from './components/kidney/kidney.component';

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
    path: 'kidney',
    component: KidneyComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
