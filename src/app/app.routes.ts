import { Routes } from '@angular/router';
import { LoginModule } from './pages/login/login.module';

export const AppRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule,
  },
];
